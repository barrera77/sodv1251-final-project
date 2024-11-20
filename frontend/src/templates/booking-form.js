const BookingForm = (
  countriesList,
  bookingOption,
  bookingData,
  selectedFlightsData
) => {
  let tax = bookingOption.price * 0.05;
  let subtotal = bookingOption.price - tax;
  let adults = bookingData.adults || 0;
  let children = bookingData.children || 0;
  let infants = bookingData.infants_in_seat || 0;
  let flightsLength = selectedFlightsData[0].flights.length;
  let numOfPassengers =
    parseInt(adults) + parseInt(children) + parseInt(infants);

  let departureDate = formatDate(
    selectedFlightsData[0].flights[0].departure_airport.time
  );
  let arrivalDate = "";
  selectedFlightsData[0].flights.length > 1
    ? (arrivalDate = formatDate(
        selectedFlightsData[1].flights[0].departure_airport.time
      ))
    : (arrivalDate = formatDate(
        selectedFlightsData[1].flights[0].departure_airport.time
      ));

  return ` 
<div class="container-sm p-3 border flight-booking">
    <section class="flight-summary-section">
      <div class="card p-3">
        <div class="row">
          <div>
            <h4>Flight Summary</h4>
          </div>          
        </div>
      </div>
      <div class="form-content margin mt-3">
           <div class="row">
             <div class="col-6">
                <div class="card p-3">
                   <div class="d-flex justify-content-between align-items-center">
                      <div class=""><span>${
                        selectedFlightsData[0].type
                      }</span><span> - <span>${numOfPassengers}</span> passenger(s)</span></div>
                      <div class="">
                        <button class="btn btn-revise"><i class="bi bi-pencil-square"></i> Revise Trip</button>
                      </div>
                   </div>
                   <div class="">
                    <div class="card p-3 mt-3">
                      <div class="data"><span class="fw-bold">${
                        selectedFlightsData[0].flights[0].departure_airport.name
                      } - ${
    selectedFlightsData[0].flights[0].departure_airport.id
  }</span></div>
                      <div class="subdata"><span class="">${departureDate}</span></div>
                    </div>
                    <div class="card p-3 mt-3">
                     <div class="data"><span class="fw-bold">${
                       selectedFlightsData[0].flights.length > 1
                         ? selectedFlightsData[0].flights[1].arrival_airport
                             .name
                         : selectedFlightsData[0].flights[0].arrival_airport
                             .name
                     } - ${
    selectedFlightsData[0].flights.length > 1
      ? selectedFlightsData[0].flights[1].arrival_airport.id
      : selectedFlightsData[0].flights[0].arrival_airport.id
  }</span></div>
                      <div class="subdata">${arrivalDate}</div>
                    </div>
                   </div>
                </div>
             </div>
              <div class="col-6">
                <div class="card p-3">
                  <div class="p-3 card">
                    <div class="row">
                      <div class="col-6">Fare</div>
                      <div class="col-6"><span>CAD $${subtotal}</span></div>
                    </div>
                    <div class="row py-3">
                      <div class="col-6">Taxes and fees</div>
                      <div class="col-6"><span>CAD $${tax.toFixed(
                        2
                      )}</span></div>
                    </div>
                    <div class="row pb-2">
                      <div class="col-6">Total</div>
                      <div class="col-6"><span>CAD $${
                        bookingOption.price
                      }</span></div>
                    </div>                   
                    <div>
                      <span class="subdata">Includes taxes and carrier-imposed fees </span>
                    </div>
                  </div>
                   <div class="pt-3 text-center">
                      <button class="btn btn-checkout btn-dark w-50">Checkout</button>
                    </div>
                </div>
                </div>              
           </div>
        </div>        
    </section>

    <div class="section-header py-3 border-bottom border-secondary-subttle">
      <div class="card p-3">
        <div class="row">
          <div class="col-9">
            <h4>Primary Passenger</h4>
          </div>
          <div class="col-3">
            <select class="form-select">
              <option value="Adult" selected>
                Adult (12 years and older)
              </option>
              <option value="Child">Child (2-12 years old)</option>
              <option value="Infant">Infant (Up to 2 years old)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="sections-container">
      <div>
        <div
          class="border-start-5 alert alert-info d-flex align-items-center"
          role="alert"
        >
          <i class="bi bi-info-circle-fill me-3"></i>
          <span>
            To avoid boarding complications, enter all names and surnames
            <strong>exactly as they appear in your passport/ID.</strong>
          </span>
        </div>
      </div>
      <section class="border-bottom">
        <div class="form-content margin">
          <div class="row">
            <div class="col-6">
              <div class="card p-3">
                <div class="">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="name"
                  />
                </div>
                <div class="py-3">
                  <label for="middle-name" class="form-label text-black-50">
                    Middle Name (optional)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="middle-name"
                    aria-describedby="middle-name"
                  />
                </div>
                <div class="">
                  <label for="last-name" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="last-name"
                    aria-describedby="last-name"
                  />
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card p-3">
                <div class="">
                  <label for="nationality" class="form-label">
                    Nationality
                  </label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="bi bi-globe-americas"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      list="nationality-options"
                      id="nationality-input"
                      aria-describedby="nationality-label"
                    />
                    <datalist id="nationality-options"></datalist>
                  </div>
                </div>
                <div class="py-3">
                  <label for="gender" class="form-label">
                    Gender
                  </label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="bi bi-gender-ambiguous"></i>
                    </span>
                    <select
                      type="text"
                      class="form-control form-select"
                      id="gender-input"
                      aria-describedby="gender-label"
                    >
                      <option value="0">Select...</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                <div class="">
                  <label for="birth-date" class="form-label">
                    Date of Birth
                  </label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="bi-calendar"></i>
                    </span>
                    <input
                      type="date"
                      class="form-control"
                      id="birth-date"
                      aria-describedby="birth-date-label"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-4">
          <div class="card p-3">
            <h4 class="pb-3">Check your baggage</h4>
          </div>
          <div class="py-3">
            <div
              class="border-start-5 alert alert-info d-flex align-items-center"
              role="alert"
            >
              <i class="bi bi-info-circle-fill me-3"></i>
              <span>
                Make sure to check the dimenssions and weight for the carry-on
                baggage allowance
              </span>
            </div>
          </div>
          <div>
            <div class="container card p-3">
              <div class="card p-3 mb-3">
                  <div class="row ">
                    <div class="col-8">
                      <div class="data">
                        <h5>Carry-on baggage</h5>
                      </div>
                      <div class="subdata">
                       <i class="bi bi-backpack text-success"></i> 1 Added suitcase (15 kg), per passenger, round trip
                      </div>
                    </div>
                    <div class="col-4"></div>
                  </div>
              </div>
             <div class="card p-3 mb-3">
                  <div class="row">
                    <div class="col-10">
                      <div class="data">
                        <h5>Checked baggage</h5>
                      </div>
                      <div class="subdata">
                        <i class="bi bi-suitcase2 text-danger"></i> Not included
                      </div>
                    </div>
                    <div class="col-2 text-center">
                        <button class="btn btn-dark px-5">Add</button>
                    </div>
                  </div>
             </div>
              <div class="card p-3">
                  <div class="row">
                    <div class="col-10">
                      <div class="data">
                        <h5>Special baggage</h5>
                      </div>
                      <div class="subdata">
                        <i class="bi bi-suitcase2 text-danger"></i> Not included
                      </div>
                    </div>
                    <div class="col-2 text-center">
                        <button class="btn btn-dark px-5">Add</button>
                    </div>
                  </div>
              </div>    
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>

      <div class="card mt-4">
        <div class="p-3">
          <h4>Contact & additional information</h4>          
        </div>        
      </div>
      <div class="pt-3">
            <div
              class="border-start-5 alert alert-info d-flex align-items-center"
              role="alert"
            >
              <i class="bi bi-info-circle-fill me-3"></i>
              <span>
                Information provided should be for the primary passenger.
              </span>
            </div>
          </div>
      <section class="py-3">
        <div class="card p-3">
          <div class="row">
            <div class="col-6">
              <div>
                <label class="form-label" for="phone-type">              
                  Phone Type
                </label>
                <select class="form-select" id="phone-type">
                  <option value="Mobile" selected>
                    Mobile
                  </option>
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                </select>
              </div>
              <div class="py-3">
                <label class="form-label" for="phone-number-input">
                  Phone Number
                </label>
                <div class="input-group">
                  <select class="form-select input-group-text select-dial-code">
                    ${countriesList
                      .map((country) => {
                        const suffix =
                          country.idd &&
                          country.idd.suffixes &&
                          country.idd.suffixes.length > 0
                            ? country.idd.suffixes[0]
                            : "";

                        return `<option class="country-codes">${country.name.common} (${country.idd.root}${suffix})</option>`;
                      })
                      .join()}
                  </select>
                  <input
                    type="text"
                    class="form-control"
                    id="phone-number-input"
                    placeholder="10-digit-number"
                    aria-describedby="departure-date-label"
                  />
                </div>
              </div>
              <div>
                <label class="form-label" for="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="youremail@example.com"
                  class="form-control"
                ></input>
              </div>
            </div>
            <div class="col-6">
              <div>
                <label class="form-label" for="airmiles">
                  Airmiles or other program
                </label>
                <select class="form-select" id="airmiles">
                  <option value="Mobile" selected>
                    Mobile
                  </option>
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                </select>
              </div>
              <div class="py-3">
                <label class="form-label" for="email">
                  Frequent Flyer Number
                </label>
                <input
                  type="text"
                  id="frequent-flyer"
                  class="form-control"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>`;
};

function formatDate(dateString) {
  const date = new Date(dateString);

  return (
    date.toLocaleDateString("en-US", {
      weekday: "long", // Full weekday name
      day: "numeric", // Numeric day of the month
      month: "long", // Full month name
      year: "numeric", // Full year
    }) +
    ` - ${date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })}`
  );
}

export default BookingForm;
