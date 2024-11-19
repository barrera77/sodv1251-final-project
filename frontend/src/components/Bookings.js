import BookingForm from "../templates/booking-form.js";
import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Booking Form");
    this.autocompleteTimeout = 300;
    this.autocompleteTimeoutHandle = 0;
    this.nacionalitiesList = [];
    this.phoneCountryCodesList = [];
    this.countryNames = {};
  }

  async getHtml() {
    await this.fetchCountriesData();

    //get booking information from the localstorage
    let bookingOption =
      JSON.parse(localStorage.getItem("booking-option-data")) || "";

    let bookingData = JSON.parse(localStorage.getItem("booking-data")) || "";

    let selectedFlightsData = JSON.parse(
      localStorage.getItem("selected-flights-data")
    );

    return `
     <div class="html-container">
     ${BookingForm(
       this.nacionalitiesList,
       bookingOption,
       bookingData,
       selectedFlightsData
     )}
     </div>
        
        `;
  }

  async postRender() {
    await this.fetchCountriesData();
    this.initializeElements();

    const { nationalityInput, nationalityOptions } = this.domElements;

    /*   document.body.addEventListener("change", () => {
      clearTimeout(this.autocompleteTimeoutHandle);
    });
 */
    nationalityInput.addEventListener("input", () => {
      this.autocomplete(
        nationalityInput,
        nationalityOptions,
        this.countryNames
      );
    });
  }

  initializeElements() {
    this.domElements = {
      nationalityOptions: document.getElementById("nationality-options"),
      nationalityInput: document.getElementById("nationality-input"),
      selectDialCode: document.querySelector(".select-dial-code"),
    };
  }

  autocomplete(input, datalist, countryNames) {
    clearTimeout(this.autocompleteTimeoutHandle);
    this.autocompleteTimeoutHandle = setTimeout(async () => {
      try {
        let matches = this.nacionalitiesList.filter((nationality) => {
          const regex = new RegExp(input, "gi");
          return nationality.name.common.match(regex);
        });

        datalist.textContent = "";
        matches.forEach((entry) => {
          countryNames[entry.name.common.toLowerCase()] = entry.name.common;
          datalist.insertAdjacentHTML(
            "beforeend",
            `<option value="${entry.name.common}">${entry.flag} ${entry.name.common}</option>`
          );
        });
      } catch (error) {
        console.error(error);
      }
    }, this.autocompleteTimeout);
  }

  async fetchCountriesData() {
    try {
      const response = await getData(
        "https://restcountries.com/v3.1/all?dields=name,flag,idd"
      );
      this.nacionalitiesList = response.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleFormData() {
    this.domElements.sendQueryButton =
      document.querySelector(".btn-send-query");

    this.domElements.sendQueryButton.addEventListener(
      "click",
      async (event) => {
        event.preventDefault();

        // Retrieve data from localStorage
        const bookingOption = JSON.parse(localStorage.getItem("bookingOption"));
        const selectedFlightsData = JSON.parse(
          localStorage.getItem("selectedFlightsData")
        );

        if (!bookingOption || !selectedFlightsData) {
          console.error("Missing booking option or selected flights data");
          return;
        }

        // Calculate tax and subtotal
        let tax = bookingOption.price * 0.05;
        let subtotal = bookingOption.price - tax;

        // Booking data
        const adults = bookingOption.adults || 0;
        const children = bookingOption.children || 0;
        const infants = bookingOption.infants_in_seat || 0;
        const numOfPassengers =
          parseInt(adults) + parseInt(children) + parseInt(infants);

        // Flight dates
        let departureDate = formatDate(
          selectedFlightsData[0].flights[0].departure_airport.time
        );
        let arrivalDate =
          selectedFlightsData[0].flights.length > 1
            ? formatDate(
                selectedFlightsData[0].flights[1].departure_airport.time
              )
            : departureDate;

        // Get country ID
        const countryName = document.getElementById("nationality-input").value;
        let countryID = null;

        try {
          const countryResponse = await fetch(
            `/countryID?countryName=${encodeURIComponent(countryName)}`
          );
          const countryData = await countryResponse.json();
          countryID = countryData.CountryID;

          if (!countryID) throw new Error("Country ID not found");

          // Collect booking data
          const bookingData = {
            Price: bookingOption.price,
            NumberOfPassengers: numOfPassengers,
            DepartureDate: document.getElementById("departure-date-input")
              .value,
            BookingOption: bookingOption,
            ArrivalDate: arrivalDate,
          };

          // Collect passenger data
          const passengerData = {
            FirstName: document.getElementById("name").value,
            MiddleName: document.getElementById("middle-name").value,
            LastName: document.getElementById("last-name").value,
            CountryID: countryID,
            Gender: document.getElementById("gender-input").value,
            DateOfBirth: document.getElementById("date-of-birth-input").value,
          };

          // Collect contact data
          const contactData = {
            PhoneType: document.getElementById("phone-type").value,
            PhoneNumber: document.getElementById("phone-number-input").value,
            Email: document.getElementById("email").value,
          };

          // Collect baggage data
          const baggageData = {
            BaggageType: "Carry-on",
            Status: "Added",
            Weight: 25,
          };

          // Save booking data
          let bookingResponse = await fetch("/query/Booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: bookingData }),
          });

          if (!bookingResponse.ok) {
            throw new Error("Failed to save booking data");
          }

          const bookingResult = await bookingResponse.json();
          const bookingID = bookingResult.BookingID;

          // Save passenger data
          passengerData.BookingID = bookingID;
          let passengerResponse = await fetch("/query/Passenger", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: passengerData }),
          });

          if (!passengerResponse.ok) {
            throw new Error("Failed to save passenger data");
          }

          const passengerResult = await passengerResponse.json();
          const passengerID = passengerResult.PassengerID;

          // Save contact data
          contactData.PassengerID = passengerID;
          await fetch("/query/Contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: contactData }),
          });

          // Save baggage data
          baggageData.PassengerID = passengerID;
          await fetch("/query/Baggage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: baggageData }),
          });

          console.log("Data saved successfully!");
        } catch (error) {
          console.error("Error saving data:", error.message || error);
        }
      }
    );
  }

  handleFormData2() {
    this.domElements.sendQueryButton =
      document.querySelector(".btn-send-query");

    this.domElements.sendQueryButton.addEventListener(
      "click",
      async (event) => {
        event.preventDefault();

        try {
          // Insert Booking
          const bookingData = {
            Price: 200.0,
            NumberOfPassengers: 3,
            DepartureDate: "2024-12-01",
            BookingOption: "Sample Airline",
            ArrivalDate: "2024-12-02",
          };

          const bookingResponse = await fetch("/query/Booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: bookingData }),
          });

          if (!bookingResponse.ok) throw new Error("Failed to insert booking");

          const bookingResult = await bookingResponse.json();
          console.log("Booking inserted successfully:", bookingResult);

          const bookingID = bookingResult.BookingID;
          if (!bookingID) throw new Error("BookingID not returned");

          //Insert Passenger
          const passengerData = {
            BookingID: bookingID,
            FirstName: "John",
            LastName: "Doe",
            CountryID: 1,
            Gender: "F",
            DateOfBirth: "1977-12-02",
            IsRegistered: 1,
            RegisteredOn: "2000-11-22",
          };

          const passengerResponse = await fetch("/query/Passenger", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: passengerData }),
          });

          if (!passengerResponse.ok)
            throw new Error("Failed to insert passenger");

          const passengerResult = await passengerResponse.json();
          console.log("Passenger inserted successfully:", passengerResult);

          const passengerID = passengerResult.PassengerID;
          if (!passengerID) throw new Error("PassengerID not returned");

          // Insert Flight
          const flightData = {
            BookingID: bookingID,
            FlightType: "Round Trip",
            TravelClass: "Economy",
            DepartureAirportID: "YYC",
            DepartureAirportName: "Calgary International Airport",
            DepartureDateTime: "2024-12-01",
            ArrivalAirportID: "JFK",
            ArrivalAirportName: "John F Kenedy Intl Airport",
            ArrivalDateTime: "2024-12-02",
          };

          const flightResponse = await fetch("/query/Flight", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: flightData }),
          });

          if (!flightResponse.ok) throw new Error("Failed to insert flight");

          const flightResult = await flightResponse.json();
          console.log("Flight inserted successfully:", flightResult);

          const flightID = flightResult.FlightID;
          if (!flightID) throw new Error("FlightID not returned");

          // Insert Baggage
          const baggageData = {
            PassengerID: passengerID,
            Weight: 23.5,
            BaggageType: "Checked",
            Status: "Not included",
          };

          const baggageResponse = await fetch("/query/Baggage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: baggageData }),
          });

          if (!baggageResponse.ok) throw new Error("Failed to insert baggage");

          const baggageResult = await baggageResponse.json();
          console.log("Baggage inserted successfully:", baggageResult);

          // Insert Contact
          const contactData = {
            PassengerID: passengerID,
            PhoneType: "Mobile",
            PhoneNumber: "+1 587-456-9873",
            Email: "john.doe@example.ca",
          };

          const contactResponse = await fetch("/query/Contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: contactData }),
          });

          if (!contactResponse.ok) throw new Error("Failed to insert Contact");

          const contactResult = await contactResponse.json();
          console.log("Contact inserted successfully:", contactResult);

          console.log("All records inserted successfully!");
        } catch (error) {
          console.error("Error during insertion chain:", error);
        }
      }
    );
  }
}
