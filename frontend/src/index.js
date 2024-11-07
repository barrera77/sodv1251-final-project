const btnSearch = document.querySelector(".btn-search");
const btnClear = document.querySelector(".btn-clear");
const selectTrip = document.querySelector(".select-trip");

btnClear.addEventListener("click", handleBtnClear);
selectTrip.addEventListener("change", handleSelectTrip);

/**
 * trigger initial logic when DOM is loaded
 */
$(function () {
  createDatePicker();
});

function createDatePicker() {
  const dateSelectors = document.querySelectorAll(".datePicker");

  if (dateSelectors) {
    dateSelectors.forEach((selector) => {
      $(selector).datepicker({ showButtonPanel: true, numberOfMonths: 2 });
      $(selector).datepicker("option", "dateFormat", "DD, d MM");
      $(selector).datepicker("option", "showAnim", "blind");
    });
  }
}

/**
 * callback function for the clear button click event
 * @param {*} event
 */
function handleBtnClear(event) {
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

function handleSelectTrip() {
  const selectedTripType = selectTrip.value;

  switch (selectedTripType) {
    case "Round Trip":
      selectTrip.style.backgroundImage =
        "url(../../src/assets/arrow-repeat.svg)";
      break;

    case "One Way":
      selectTrip.style.backgroundImage = "url(../../src/assets/arrow-left.svg)";
      break;

    case "Multi-city":
      selectTrip.style.backgroundImage =
        "url(../../src/assets/arrows-move.svg)";
      break;
  }
}
