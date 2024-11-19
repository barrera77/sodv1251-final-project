import AbstractView from "./AbstractView.js";
import Hero from "./Hero.js";
import SearchForm from "../templates/search-form.js";
import { getData } from "../utils/api-utility.js";
import FlightCard from "../templates/flight-card.js";
import BookingOptionsCard from "../templates/booking-options-card.js";
import SelectedFlightCard from "../templates/selected-flights-card.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
    this.autocompleteTimeout = 300;
    this.autocompleteTimeoutHandle = 0;
    this.domElements = {};
  }

  async getHtml() {
    return `
          
          <div class="html-container">
            ${Hero} 
            ${SearchForm} 
          </div>

          <div class="query-form">

          <button class="btn btn-outline-success btn-send-query">Send Query</button>
          
          </div>
        `;
  }

  async postRender() {
    this.handleFormData();
    this.initializeElements();
    const {
      originInput,
      originOptions,
      destinationInput,
      destinationOptions,
      departureDateInput,
      flightTypeSelect,
      returnDate,
      searchButton,
      resetButton,
      selectFlightButtons,
      searchResultsSeparator,
      searchResultsLoader,
      searchResults,
      returnDateInput,
      travelClassSelect,
      adultsInput,
      childrenInput,
      infantsInput,
      flightIcon,
    } = this.domElements;

    this.reset();

    document.body.addEventListener("change", () => {
      clearTimeout(this.autocompleteTimeoutHandle);
      searchButton.disabled = !originInput.value || !destinationInput.value;
    });

    originInput.addEventListener("input", () => {
      this.autocomplete(originInput, originOptions);
    });
    destinationInput.addEventListener("input", () => {
      this.autocomplete(destinationInput, destinationOptions);
    });
    flightTypeSelect.addEventListener("change", () => {
      if (flightTypeSelect.value === "one-way") {
        returnDate.classList.add("d-none");
        flightIcon.classList.remove("bi-arrow-repeat");
        flightIcon.classList.add("bi-arrow-right");
      } else {
        returnDate.classList.remove("d-none");
        flightIcon.classList.remove("bi-arrow-right");
        flightIcon.classList.add("bi-arrow-repeat");
      }
    });
    searchButton.addEventListener("click", async () => {
      searchResultsSeparator.classList.remove("d-none");
      searchResultsLoader.classList.remove("d-none");

      const results = await this.search();

      searchResultsLoader.classList.add("d-none");
      this.showResults(results);
    });

    resetButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.reset();
    });
  }

  /**
   * Initialize DOM elements
   */
  initializeElements() {
    this.domElements = {
      originInput: document.getElementById("origin-input"),
      originOptions: document.getElementById("origin-options"),
      destinationInput: document.getElementById("destination-input"),
      destinationOptions: document.getElementById("destination-options"),
      departureDateInput: document.getElementById("departure-date-input"),
      flightTypeSelect: document.getElementById("flight-type-select"),
      returnDate: document.getElementById("return-date"),
      searchButton: document.getElementById("search-button"),
      resetButton: document.querySelector(".btn-reset"),
      selectFlightButtons: document.querySelectorAll(".btn-select-flight"),
      bookFlightButtons: document.querySelectorAll(".btn-book-flight"),
      sendQueryButton: document.querySelector(".btn-send-query"),
      searchResultsSeparator: document.getElementById(
        "search-results-separator"
      ),
      searchResultsLoader: document.getElementById("search-results-loader"),
      bestFlights: document.getElementById("best-flights"),
      otherFlights: document.getElementById("other-flights"),
      returnDateInput: document.getElementById("return-date-input"),
      travelClassSelect: document.getElementById("travel-class-select"),
      adultsInput: document.getElementById("adults-input"),
      childrenInput: document.getElementById("children-input"),
      infantsInput: document.getElementById("infants-input"),
      flightIcon: document.querySelector(".flight-icon"),
    };
  }

  reset() {
    const {
      originInput,
      destinationInput,
      departureDateInput,
      flightTypeSelect,
      returnDate,
      searchButton,
      searchResultsSeparator,
      searchResultsLoader,
      returnDateInput,
      travelClassSelect,
      adultsInput,
      childrenInput,
      infantsInput,
      flightIcon,
    } = this.domElements;

    originInput.value = "";
    destinationInput.value = "";
    departureDateInput.valueAsDate = new Date();
    returnDateInput.valueAsDate = new Date();
    returnDate.classList.add("d-none");
    travelClassSelect.value = "1";
    adultsInput.value = 1;
    childrenInput.value = 0;
    infantsInput.value = 0;
    searchButton.disabled = true;
    searchResultsSeparator.classList.add("d-none");
    searchResultsLoader.classList.add("d-none");
    flightTypeSelect.value = "one-way";
    flightIcon.classList.add("bi-arrow-right");
  }

  /**
   * format dates
   * @param {*} date
   * @returns
   */
  formatDate(date) {
    const [formattedDate] = date.toISOString().split("T");
    return formattedDate;
  }

  /**
   * format numeric values
   * @param {*} number
   * @returns
   */
  formatNumber(number) {
    return `${Math.abs(parseInt(number))}`;
  }

  /**
   * handle logic for the autocomplete feature for the input elements
   * @param {*} input
   * @param {*} datalist
   * @param {*} cityCodes
   */
  autocomplete(input, datalist) {
    clearTimeout(this.autocompleteTimeoutHandle);
    this.autocompleteTimeoutHandle = setTimeout(async () => {
      try {
        const data = await getData(
          "https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json"
        );

        // get data
        let matches = data.filter((airport) => {
          const regex = new RegExp(`^${input}`, "gi");
          return (
            airport.country.match(regex) ||
            airport.name.match(regex) ||
            airport.city.match(regex) ||
            airport.iata_code.match(regex)
          );
        });
        datalist.textContent = "";
        matches.forEach((entry) => {
          datalist.insertAdjacentHTML(
            "beforeend",
            `<option value="${entry.iata_code}">${entry.city} - ${entry.iata_code}</option>`
          );
        });
      } catch (error) {
        console.error(error);
      }
    }, this.autocompleteTimeout);
  }

  /**
   *
   * @returns Search fro flights based on user input criteria
   */
  async search() {
    const {
      originInput,
      destinationInput,
      departureDateInput,
      flightTypeSelect,
      returnDateInput,
      travelClassSelect,
      adultsInput,
      childrenInput,
      infantsInput,
    } = this.domElements;
    try {
      const returns = flightTypeSelect.value === "round-trip";
      const params = new URLSearchParams({
        departure_id: originInput.value,
        arrival_id: destinationInput.value,
        outbound_date: this.formatDate(departureDateInput.valueAsDate),
        departure_token: "",
        adults: this.formatNumber(adultsInput.value),
        children: this.formatNumber(childrenInput.value),
        infants_in_seat: this.formatNumber(infantsInput.value),
        travel_class: this.formatNumber(travelClassSelect.value),
        ...(returns
          ? { return_date: this.formatDate(returnDateInput.valueAsDate) }
          : {}),
        currency: "CAD",
        hl: "en",
      });
      const query = `search?${params.toString()}`;

      const data = await getData(query);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Render the search results
   * @param {*} results
   */
  showResults(results) {
    const { bestFlights, otherFlights } = this.domElements;
    const bestFlightsList = results.best_flights || [];
    const otherFlightsList = results.other_flights || [];

    if (bestFlightsList.length === 0) {
      // Clear any existing content and add "No results" message
      bestFlights.textContent = ""; // Ensures it's empty
      bestFlights.insertAdjacentHTML(
        "beforeend",
        `
        <div class="d-flex justify-content-center align-items-center" id="search-no-results">
            No results
        </div>
        `
      );
    } else {
      // Clear any existing content
      bestFlights.textContent = "";
      bestFlights.innerHTML = `<h3 class="text-center py-3">Best Flights</h3>`;

      bestFlightsList.forEach((flight) => {
        bestFlights.innerHTML += `
          <div class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">
          ${FlightCard(results, flight)}
          </div>
            `;
      });
    }

    if (otherFlightsList.length === 0) {
      // Clear any existing content and add "No results" message
      otherFlights.textContent = ""; // Ensures it's empty
      otherFlights.insertAdjacentHTML(
        "beforeend",
        `
        <div class="d-flex justify-content-center align-items-center" id="search-no-results">
            No results
        </div>
        `
      );
    } else {
      // Clear any existing content
      otherFlights.textContent = "";
      otherFlights.innerHTML = `<h3 class="text-center py-3">Other Flights</h3>`;

      otherFlightsList.forEach((flight) => {
        otherFlights.innerHTML += `
        <div class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">
        ${FlightCard(results, flight)}
        </div>
          `;
      });
    }

    this.getReturnFlights();
  }

  getReturnFlights() {
    this.domElements.selectFlightButtons =
      document.querySelectorAll(".btn-select-flight");

    if (this.domElements.selectFlightButtons.length > 0) {
      this.domElements.selectFlightButtons.forEach((button) => {
        button.addEventListener("click", async (event) => {
          const token = event.target.getAttribute("data-token");
          const departure_id = event.target.getAttribute("data-departure_id");
          const arrival_id = event.target.getAttribute("data-arrival_id");
          const outbound_date = event.target.getAttribute("data-outbound_date");
          const return_date = event.target.getAttribute("data-return_date");
          const numOfAdults = event.target.getAttribute("data-adults");
          const numOfChildren = event.target.getAttribute("data-children");
          const numOfInfants = event.target.getAttribute("data-infants");

          const params = new URLSearchParams({
            engine: "google_flights",
            departure_id: departure_id,
            arrival_id: arrival_id,
            outbound_date: outbound_date,
            return_date: return_date,
            adults: numOfAdults,
            children: numOfChildren,
            infants_in_seat: numOfInfants || 0,
            departure_token: token,
            currency: "CAD",
            hl: "en",
          });
          this.domElements.searchResultsLoader.classList.remove("d-none");

          const query = `/search?${params.toString()}`;

          try {
            const response = await fetch(query);

            if (!response.ok) {
              throw new Error("Data not found");
            }

            this.domElements.searchResultsLoader.classList.add("d-none");

            const data = await response.json();
            this.showReturnResults(data);
          } catch (error) {
            throw error;
          }
        });
      });
    }
  }

  showReturnResults(results) {
    const { bestFlights, otherFlights } = this.domElements;
    const bestFlightsList = results.best_flights || [];
    const otherFlightsList = results.other_flights || [];

    if (bestFlightsList.length === 0) {
      // Clear any existing content and add "No results" message
      bestFlights.innerHTML = "";
      /* bestFlights.insertAdjacentHTML(
        "beforeend",
        `
        <div class="d-flex justify-content-center align-items-center" id="search-no-results">
            No results
        </div>
        `
      ); */
    } else {
      // Clear any existing content
      bestFlights.innerHTML = "";
      bestFlights.innerHTML = `<h3 class="text-center py-3">Best Return Flights</h3>`;

      bestFlightsList.forEach((flight) => {
        bestFlights.innerHTML += `
          <div class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">
          ${FlightCard(results, flight)}
          </div>
            `;
      });
    }

    if (otherFlightsList.length === 0) {
      // Clear any existing content and add "No results" message
      otherFlights.innerHTML = ""; // Ensures it's empty
      otherFlights.insertAdjacentHTML(
        "beforeend",
        `
        <div class="d-flex justify-content-center align-items-center" id="search-no-results">
            No results
        </div>
        `
      );
    } else {
      // Clear any existing content
      otherFlights.innerHTML = "";
      otherFlights.innerHTML = `<h3 class="text-center py-3">Other Return Flights</h3>`;

      otherFlightsList.forEach((flight) => {
        otherFlights.innerHTML += `
        <div class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">
        ${FlightCard(results, flight)}
        </div>
          `;
      });
    }

    this.getBookingOptions();
  }

  getBookingOptions() {
    this.domElements.selectFlightButtons =
      document.querySelectorAll(".btn-select-flight");

    if (this.domElements.selectFlightButtons.length > 0) {
      this.domElements.selectFlightButtons.forEach((button) => {
        button.addEventListener("click", async (event) => {
          const token = event.target.getAttribute("data-token");
          const departure_id = event.target.getAttribute("data-departure_id");
          const arrival_id = event.target.getAttribute("data-arrival_id");
          const outbound_date = event.target.getAttribute("data-outbound_date");
          const return_date = event.target.getAttribute("data-return_date");
          const numOfAdults = event.target.getAttribute("data-adults");
          const numOfChildren = event.target.getAttribute("data-children");
          const numOfInfants = event.target.getAttribute("data-infants");

          const params = {
            engine: "google_flights",
            departure_id: departure_id,
            arrival_id: arrival_id,
            outbound_date: outbound_date,
            return_date: return_date,
            booking_token: token,
            adults: numOfAdults,
            children: numOfChildren,
            infants_in_seat: numOfInfants || 0,
            currency: "CAD",
            hl: "en",
          };

          const urlParams = new URLSearchParams(params);

          const query = `/search?${urlParams.toString()}`;

          this.domElements.searchResultsLoader.classList.remove("d-none");

          try {
            const response = await fetch(query);

            if (!response.ok) {
              throw new Error("Data not found");
            }

            const data = await response.json();

            this.domElements.searchResultsLoader.classList.add("d-none");

            this.showBookingOptions(data, params);
          } catch (error) {
            throw error;
          }
        });
      });
    }
  }

  showBookingOptions(results, params) {
    const { bestFlights, otherFlights } = this.domElements;
    const bookingOptions = results.booking_options || [];
    const selectedFlights = results.selected_flights || [];

    if (selectedFlights.length < 0) {
      // Clear any existing content and add "No results" message
      bestFlights.innerHTML = "";
      bestFlights.innerHTML = `
       <div class="d-flex justify-content-center align-items-center" id="search-no-results">
            No results
        </div>
      `;
    } else {
      // Clear any existing content
      bestFlights.innerHTML = "";
      bestFlights.innerHTML = `<h3 class="text-center py-3">Selected Flights</h3>`;

      selectedFlights.forEach((flight) => {
        bestFlights.innerHTML += `
         <div class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">
          ${SelectedFlightCard(results, flight)}
          </div>
        `;
      });
    }

    if (bookingOptions.length > 0) {
      otherFlights.innerHTML = "";
      otherFlights.innerHTML = `<h3 class="text-center py-3">Booking Options</h3>`;

      bookingOptions.forEach((option) => {
        otherFlights.innerHTML += `
        <div class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">
        ${BookingOptionsCard(option)}
        </div>
          `;
      });
    }
    this.chooseBookingOption(params, selectedFlights);
  }

  chooseBookingOption(params, selectedFlights) {
    const bookFlightButtons = document.querySelectorAll(".btn-book-flight");

    if (bookFlightButtons.length > 0) {
      bookFlightButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          let bookingOption = event.target.getAttribute("data-book-with");
          let price = event.target.getAttribute("data-price");

          //store the data in the localstorage
          localStorage.removeItem("booking-data");
          localStorage.setItem("booking-data", JSON.stringify(params));

          localStorage.removeItem("selected-flights-data");
          localStorage.setItem(
            "selected-flights-data",
            JSON.stringify(selectedFlights)
          );

          localStorage.removeItem("booking-option-data");
          localStorage.setItem(
            "booking-option-data",
            JSON.stringify({ bookingOption, price })
          );
        });
      });
    }
  }

  handleFormData() {
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
