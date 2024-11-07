import AbstractView from "./AbstractView.js";
import Hero from "./Hero.js";
import SearchForm from "./SearchForm.js";
import FlightCard from "../templates/FlightCard.js";
import { getData } from "../utils/api-utility.js";

const FLIGHTS_END_POINT = "/";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    this.manageState();

    return `
      <div class="html-container">
      ${Hero}
      ${SearchForm}

     
      <div class="search-results-container">
            
      </div>
      
    
    
    
    `;
  }

  manageState() {
    /**
     * trigger initial logic when DOM is loaded
     */

    this.createDatePicker();
    this.handleSelectTrip();

    const btnClear = document.querySelector(".btn-clear");

    if (btnClear) {
      btnClear.addEventListener("click", this.handleBtnClear);
    }

    const btnSearch = document.querySelector(".btn-search");

    if (btnSearch) {
      btnSearch.addEventListener("click", this.handleBtnSearch);
    }
  }

  createDatePicker() {
    const dateSelectors = document.querySelectorAll(".datePicker");

    if (dateSelectors) {
      dateSelectors.forEach((selector) => {
        $(selector).datepicker({ showButtonPanel: true, numberOfMonths: 2 });
        $(selector).datepicker("option", "dateFormat", "DD, d MM");
        $(selector).datepicker("option", "showAnim", "blind");
      });
    }
  }

  handleSelectTrip() {
    const selectTrip = document.querySelector(".select-trip");
    if (selectTrip) {
      selectTrip.addEventListener("change", this.handleSelectTrip);

      const selectedTripType = selectTrip.value;

      switch (selectedTripType) {
        case "Round Trip":
          selectTrip.style.backgroundImage =
            "url(../../src/assets/arrow-repeat.svg)";
          break;

        case "One Way":
          selectTrip.style.backgroundImage =
            "url(../../src/assets/arrow-left.svg)";
          break;

        case "Multi-city":
          selectTrip.style.backgroundImage =
            "url(../../src/assets/arrows-move.svg)";
          break;
      }
    }
  }

  /**
   * callback function for the clear button click event
   * @param {*} event
   */
  handleBtnClear(event) {
    event.preventDefault();

    //clear inputs
    document.querySelectorAll(".form-group input").forEach((input) => {
      input.value = "";
    });

    document.querySelectorAll(".flight-options select").forEach((select) => {
      select.selectedIndex = 0;
    });

    console.log("click");
  }

  /**
   * fetch the flight results from the server
   * @returns flights array
   */
  async fetchFlights() {
    try {
      const flights = await getData(FLIGHTS_END_POINT);
      console.table(flights);
      return flights;
    } catch (error) {
      console.error("Error fetching schedule:", error);
    }
  }

  async handleBtnSearch(event) {
    event.preventDefault();
    console.log("click, click");

    try {
      const flights = await getData(FLIGHTS_END_POINT);
      console.table(flights);
      return flights;
    } catch (error) {
      console.error("Error fetching flights:", error);
    }

    const hero = document.querySelector(".hero");
    const searchResultsContainer = document.querySelector(
      ".search-results-container "
    );

    if (hero) {
      hero.style.display = "none";
    }

    if (searchResultsContainer) {
      searchResultsContainer.innerHTML = `

      <section
          class="shadow container py-4 m my-4 m-auto border border-secondary-subttle"
        >
        ${FlightCard}
        </section>  
      
      `;
    }
  }
}
