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
}
