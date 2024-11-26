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
    this.handleFormData();
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
      nameInput: document.getElementById("name"),
      middleNameInput: document.getElementById("middle-name"),
      lastNameInput: document.getElementById("last-name"),
      selectGender: document.getElementById("gender-input"),
      selectDate: document.getElementById("birth-date"),
      nationalityOptions: document.getElementById("nationality-options"),
      nationalityInput: document.getElementById("nationality-input"),
      selectDialCode: document.querySelector(".select-dial-code"),
      btnCheckOut: document.querySelector(".btn-checkout"),
      phoneTypeInput: document.getElementById("phone-type"),
      phoneInput: document.getElementById("phone-number-input"),
      emailInput: document.getElementById("email"),
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

  /* TODO: make this the main function to handle the form
   * and add fields validation
   */
  handleFormData() {
    const {
      btnCheckOut,
      nameInput,
      middleNameInput,
      lastNameInput,
      nationalityInput,
      selectGender,
      selectDate,
      selectDialCode,
      phoneInput,
    } = this.domElements;

    //btnCheckOut = document.querySelector(".btn-checkout");

    btnCheckOut.addEventListener("click", async (event) => {
      event.preventDefault();

      // Retrieve data from localStorage
      const bookingOption = JSON.parse(
        localStorage.getItem("booking-option-data")
      );
      const selectedFlightsData = JSON.parse(
        localStorage.getItem("selected-flights-data")
      );
      const bookingData = JSON.parse(localStorage.getItem("booking-data"));

      console.log(bookingOption);

      if (!bookingOption || !selectedFlightsData || !bookingData) {
        console.error("Missing booking option or selected flights data");
        return;
      }

      // Calculate tax and subtotal
      let tax = bookingOption.price * 0.05;
      let subtotal = bookingOption.price - tax;

      // Booking data
      const adults = bookingData.adults || 0;
      const children = bookingData.children || 0;
      const infants = bookingData.infants_in_seat || 0;
      const numOfPassengers =
        parseInt(adults) + parseInt(children) + parseInt(infants);

      console.log("Passengers:", numOfPassengers);

      // Flight dates
      let departureDate =
        selectedFlightsData[0].flights[0].departure_airport.time;
      let arrivalDate =
        selectedFlightsData[0].flights.length > 1
          ? selectedFlightsData[0].flights[1].departure_airport.time
          : departureDate;

      try {
        // Insert Booking
        const bookingTableData = {
          Price: bookingOption.price,
          NumberOfPassengers: numOfPassengers,
          DepartureDate: departureDate,
          BookingOption: bookingOption.bookingOption,
          ArrivalDate: arrivalDate,
        };

        const bookingResponse = await fetch("/query/Booking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: bookingTableData }),
        });

        if (!bookingResponse.ok) throw new Error("Failed to insert booking");

        const bookingResult = await bookingResponse.json();
        console.log("Booking inserted successfully:", bookingResult);

        const bookingID = bookingResult.BookingID;
        if (!bookingID) throw new Error("BookingID not returned");

        const countryName = nationalityInput.value;

        let countryID = null;
        const countryResponse = await fetch(
          `/query?countryName=${countryName}`
        );
        const countryData = await countryResponse.json();
        countryID = countryData.CountryID;
        console.log(countryID);

        if (!countryID) throw new Error("Country ID not found");

        //Insert Passenger
        const passengerData = {
          BookingID: bookingID,
          FirstName: nameInput.value,
          MiddleName: middleNameInput.value,
          LastName: lastNameInput.value,
          CountryID: countryID,
          Gender: selectGender.value,
          DateOfBirth: selectDate.value,
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

        //Flight Airports
        let departureAirport =
          selectedFlightsData[0].flights[0].departure_airport.name;
        let arrivalAirport =
          selectedFlightsData[0].flights[2].arrival_airport.name;

        let travelClass = selectedFlightsData[0].flights[0].travel_class;
        // Insert Flight
        const flightData = {
          BookingID: bookingID,
          FlightType: selectedFlightsData[0].type,
          TravelClass: travelClass,
          DepartureAirportID: bookingData.departure_id,
          DepartureAirportName: departureAirport,
          DepartureDateTime: departureDate,
          ArrivalAirportID: bookingData.arrival_id,
          ArrivalAirportName: arrivalAirport,
          ArrivalDateTime: arrivalDate, //Revise this date and make sure you are getting the correct schedukle
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

        console.log(`${selectDialCode.value} ${phoneInput.value}`);
        // Insert Contact
        const contactData = {
          PassengerID: passengerID,
          PhoneType: "Mobile",
          PhoneNumber: `${selectDialCode.value} ${phoneInput.value}`,
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
    });
  }

  /*  getCountryID(countryName) {
    this.domElements.sendQueryButton =
      document.querySelector(".btn-send-query");

    this.domElements.sendQueryButton.addEventListener(
      "click",
      async (event) => {
        event.preventDefault();

        // Ensure that the country name is passed correctly in the URL
        const countryResponse = await fetch(
          `/query?countryName=${countryName}`, // Correct table name 'Country'
          {
            method: "GET", // Correct method
            headers: { "Content-Type": "application/json" }, // Optional but keeps it consistent
          }
        );

        if (!countryResponse.ok) {
          throw new Error("Failed to get country ID");
        }

        // Log the response to check if the country result is received
        const countryResult = await countryResponse.json();
        console.log("Country Result:", countryResult); // Logs the country result
        return countryResult;
      }
    );
  } */

  /**
   * format dates
   * @param {*} date
   * @returns
   */
  formatDate(date) {
    const [formattedDate] = date.toISOString().split("T");
    return formattedDate;
  }

  insertPassenger(countryId, registration) {
    // Collect passenger data
    const passengerData = {
      FirstName: document.getElementById("name").value,
      MiddleName: document.getElementById("middle-name").value,
      LastName: document.getElementById("last-name").value,
      CountryID: countryId,
      Gender: document.getElementById("gender-input").value,
      DateOfBirth: document.getElementById("birth-date").value,
      isRegistered: registration,
      RegisteredOn: "",
    };
  }

  reset() {
    
  }
}
