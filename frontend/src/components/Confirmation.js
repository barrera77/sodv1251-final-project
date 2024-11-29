import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Booking Confirmation");
  }

  async getHtml() {
    let bookingData = JSON.parse(localStorage.getItem("booking-data")) || "";
    let selectedFlightsData = JSON.parse(
      localStorage.getItem("selected-flights-data")
    );
    let bookingOption =
      JSON.parse(localStorage.getItem("booking-option-data")) || "";

    let pinCode = this.getRandomNums(0, 9, 4);
    let clientReferenceFirstSegment = this.getRandomNums(0, 9, 2);
    let clientReferenceSecondSegment = this.getRandomNums(0, 9, 9);
    let bookingReference = this.getRandomLetters(6);
    let adults = bookingData.adults || 0;
    let children = bookingData.children || 0;
    let infants = bookingData.infants_in_seat || 0;

    let numOfPassengers =
      parseInt(adults) + parseInt(children) + parseInt(infants);

    let departureDate = this.formatDate(
      selectedFlightsData[0].flights[0].departure_airport.time
    );
    let arrivalDate = "";
    selectedFlightsData[0].flights.length > 1
      ? (arrivalDate = this.formatDate(
          selectedFlightsData[1].flights[0].departure_airport.time
        ))
      : (arrivalDate = this.formatDate(
          selectedFlightsData[1].flights[0].departure_airport.time
        ));

    return `
    <div class="html-container">
        <div class="container-sm p-3 border booking-confirmation mt-3">
            <div class="booking-confirmation-section">
                <div class="card p-3 mb-3">
                    <div class="row">
                        <div class="d-flex justify-content-between">
                            <h4>Details of your flight booking</h4>
                            <div>
                                <button class="btn btn-dark"><i class="bi bi-printer"></i> Print</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card p-3">
                    <div class="border-bottom border-secondary-subttle">
                        <p>Hi <span>Customer Name</span></p>
                        <p>Travel can be complicated. To keep things simple, we've gathered all the details about your upcoming flight in one place.</p>
                    </div>
                    <div class="border-bottom border-secondary-subttle" >
                        <div class="row py-3 w-100 m-auto">
                            <div class="col-5">
                                <p class="fw-bold">Booking References</p>
                            </div>
                            <div class="col-7">
                                <p>Use your booking reference when you check in online for your flight. It's also useful if you need to contact the airline about your flight.</p>
                            </div>
                        </div>
                        <div class="row w-100 m-auto">
                            <div class="col-5">
                                <ul class="ps-0">
                                ${
                                  selectedFlightsData[0].type === "Round trip"
                                    ? `
                                    <li class="list-group-item">${selectedFlightsData[0].flights[0].departure_airport.id} <i class="bi bi-arrow-right"></i> ${selectedFlightsData[0].flights[1].arrival_airport.id}</li>
                                    <li class="list-group-item py-3">${selectedFlightsData[0].flights[1].arrival_airport.id} <i class="bi bi-arrow-right"></i> ${selectedFlightsData[0].flights[0].departure_airport.id}</li>                                    
                                    `
                                    : ` 
                                    <li class="list-group-item">
                                          ${selectedFlightsData[0].flights[0].departure_airport.id} 
                                                <i class="bi bi-arrow-right"></i> 
                                                      ${selectedFlightsData[0].flights[0].arrival_airport.id}
                                     </li>`
                                }                                    
                                </ul>                            
                            </div>
                            <div class="col-7">
                                 <ul class="ps-0">
                                    <li class="list-group-item">${bookingReference.join(
                                      ""
                                    )}</li>
                                    <li class="list-group-item py-3">${bookingReference.join(
                                      ""
                                    )}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="row py-3 w-100 m-auto">
                            <div class="col-5">
                                <p class="fw-bold">Customer reference and PIN</p>
                            </div>
                            <div class="col-7">
                                <p>Your customer reference and PIN are important if you need to contact us about your flight reservation.</p>
                            </div>
                        </div>
                        <div class="row w-100 m-auto">
                            <div class="col-5">
                                <p>Customer reference</p>
                            </div>
                            <div class="col-7">
                                <p>${clientReferenceFirstSegment.join(
                                  ""
                                )}-${clientReferenceSecondSegment.join("")}</p>
                            </div>
                        </div>
                        <div class="row w-100 m-auto">
                            <div class="col-5">
                                <p>PIN code</p>
                            </div>
                            <div class="col-7">
                                <p>${pinCode.join("")}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="p-3 w-100 m-auto">
                            <h5 class="fw-bold">How to check in</h5>
                            <ol class="ps-3">
                                <li>Online check-in generally opens 72 to 24 hours before your departure time</li>
                                <li>Check in on the airline's website using your booking reference (top of the email)</li>
                                <li>You'll get your boarding pass from the airline when you check in</li>
                            </ol>                            
                        </div>
                    </div>

                    <div class="card p-3">
                        <h5 class="fw-bold">Your flight details</h5>
                        <div>
                       
                            <div class="d-flex justify-content-between align-items-center">
                                                            <div><span>${numOfPassengers}</span> passenger(s)</span> - <strong>CAD $<span>${parseInt(
      bookingOption.price
    ).toFixed(2)}</span></strong></div>                                
                                                        </div>
                                                            <div class="">
                                                                <div class="card p-3 mt-3">
                                                                <div class="row">
                                                                    <div class="col-2">
                                                                        <img src="${
                                                                          selectedFlightsData[0]
                                                                            .flights[0]
                                                                            .airline_logo
                                                                        }"/>
                                                                    </div>
                                                                    <div class="data col-7 pt-2">
                                                                        <div><span class="fw-bold">${
                                                                          selectedFlightsData[0]
                                                                            .flights[0]
                                                                            .departure_airport
                                                                            .name
                                                                        } - ${
      selectedFlightsData[0].flights[0].departure_airport.id
    }</span></div>
                                            <div class="subdata"><span class="">${departureDate}</span></div>
                                            </div>
                                            <div class="col-3">
                                               <div>
                                                    <div class="data">
                                                        <p>Checked baggage <i class="bi bi-suitcase2 text-success"></i> x 1</p>
                                                    </div>
                                                   
                                               </div>
                                                <div>
                                                    <div class="data">
                                                        <p>Special baggage <i class="bi bi-suitcase2 text-success"></i> x 1</p>
                                                    </div>                                                   
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card p-3 mt-3">
                                     <div class="row">
                                         <div class="col-2">
                                                <img src="${
                                                  selectedFlightsData[0]
                                                    .flights[1].airline_logo
                                                }"/>
                                            </div>
                                        <div class="col-7 pt-3">
                                            <div class="data"><span class="fw-bold">${
                                              selectedFlightsData[0].flights
                                                .length > 1
                                                ? selectedFlightsData[0]
                                                    .flights[1].arrival_airport
                                                    .name
                                                : selectedFlightsData[0]
                                                    .flights[0].arrival_airport
                                                    .name
                                            } - ${
      selectedFlightsData[0].flights.length > 1
        ? selectedFlightsData[0].flights[1].arrival_airport.id
        : selectedFlightsData[0].flights[0].arrival_airport.id
    }</span></div>
                                            <div class="subdata">${arrivalDate}</div>
                                            </div>
                                             <div class="col-3">
                                               <div>
                                                    <div class="data">
                                                        <p>Checked baggage <i class="bi bi-suitcase2 text-success"></i> x 1</p>
                                                    </div>
                                                   
                                               </div>
                                                <div>
                                                    <div class="data">
                                                        <p>Special baggage <i class="bi bi-suitcase2 text-success"></i> x 1</p>
                                                    </div>                                                   
                                               </div>
                                            </div>
                                        </div>
                                       
                                     </div>
                                </div>
                        </div>
                    </div> 
                    
                    <div class="p-3">
                        <div>
                            <h5 class="fw-bold">If you need any help</h5>
                            <p>Visit the Flights help center and have your customer reference and PIN at hand</p>
                        </div>
                    </div>                    
                </div>   
            </div>
        </div>
    </div>
    `;
  }

  async postRender() {}

  /**
   * generate random numbers to simulate a customer reference number and PIN
   * normally used for contacting customer service
   * @param {*} min
   * @param {*} max
   * @param {*} count
   * @returns
   */
  getRandomNums(min, max, count) {
    const randomNumbers = [];

    for (let i = 0; i < count; i++) {
      randomNumbers.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return randomNumbers;
  }

  /**
   * Generate a set of random letters to simulate the booking confimration
   * @param {*} count
   * @returns
   */
  getRandomLetters(count) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetters = [];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      randomLetters.push(alphabet[randomIndex]);
    }
    return randomLetters;
  }

  /**
   * format date to US locale
   * @param {*} dateString
   * @returns
   */
  formatDate(dateString) {
    const date = new Date(dateString);

    return (
      date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }) +
      ` - ${date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })}`
    );
  }
}
