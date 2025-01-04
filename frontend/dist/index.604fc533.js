class e{constructor(e){this.params=e}setTitle(e){document.title=e}async getHtml(){return""}async postRender(){}}const t=`
<section class="hero" style="display: block;">
    <div class="hero-image-container">
    <img
        src="../src/assets/hero-img-3.png"
        alt="airplane"
        class="img-fuid"
    />
    </div>
    <div class="hero-content py-3">
    <h1 class="fw-bold pb-4">
        With <span class="logo-b">B</span><span class="logo-v">V</span
        ><span class="logo-c">C</span> Airlines <br />
        The Sky's Not the Limit!
    </h1>
    <p class="fw-bold">
        Elevate your journey. Indulge in unparalleled luxury <br />
        and comfort as you soar above the clouds with us.
    </p>
    </div>
</section>
`,a=`
 <div class="container-sm">
      <div class="my-2 card">
        <div class="card-body">
          <h2 class="card-title text-center">Flights</h2>
          <div class="row">
            <div class="col-sm">
              <div class="mb-2">
                <label id="origin-label" for="origin-input" class="form-label"
                  >Depart From?</label
                >
                <div class="input-group">
                  <span class="input-group-text"
                    ><i class="bi bi-geo-alt"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    list="origin-options"
                    id="origin-input"
                    placeholder="From?"
                    aria-describedby="origin-label"
                  />
                  <datalist id="origin-options"></datalist>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="mb-2">
                <label
                  id="destination-label"
                  for="destination-input"
                  class="form-label"
                  >Arrive To?</label
                >
                <div class="input-group">
                  <span class="input-group-text"
                    ><i class="bi bi-geo-alt-fill"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    list="destination-options"
                    id="destination-input"
                    placeholder="To?"
                    aria-describedby="destination-label"
                  />
                  <datalist id="destination-options"></datalist>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mb-2 col">
          <div class="h-100 card">
            <div class="card-body">
              <h5 class="card-title">Dates</h5>
              <div class="mb-2">
                <label
                  id="flight-type-label"
                  for="flight-type-select"
                  class="form-label"
                  >Flight</label
                >
                <div class="input-group">
                    <span class="input-group-text"
                    ><i class="flight-icon"></i>
                  </span>
                    <select
                      id="flight-type-select"
                      class="form-select select-flight"
                      aria-describedby="flight-type-label"
                    >
                      <option value="round-trip" selected><span></span> Round-trip</option>
                      <option value="one-way"><span></span> One-way</option>
                    </select>
                </div>
              </div>
              <div id="departure-date" class="mb-2">
                <label
                  id="departure-date-label"
                  for="departure-date-input"
                  class="form-label"
                  >Departure date</label
                >
                <div class="input-group">
                  <span class="input-group-text"
                    ><i class="bi-calendar"></i>
                  </span>
                  <input
                    type="date"
                    class="form-control"
                    id="departure-date-input"
                    aria-describedby="departure-date-label"
                  />
                </div>
              </div>
              <div id="return-date" class="mb-2">
                <label
                  id="return-date-label"
                  for="return-date-input"
                  class="form-label"
                  >Return date</label
                >
                <div class="input-group">
                  <span class="input-group-text"
                    ><i class="bi-calendar-fill"></i>
                  </span>
                  <input
                    type="date"
                    class="form-control"
                    id="return-date-input"
                    aria-describedby="return-date-label"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-2 col">
          <div class="h-100 card">
            <div class="card-body">
              <h5 class="card-title">Details</h5>
              <div class="mb-2">
                <label
                  id="travel-class-label"
                  for="travel-class-select"
                  class="form-label"
                  >Travel class</label
                >
                <select
                  class="form-select"
                  id="travel-class-select"
                  aria-describedby="travel-class-label"
                >
                  <option value="1" selected>Economy</option>
                  <option value="2">Premium Economy</option>
                  <option value="3">Business</option>
                  <option value="4">First</option>
                </select>
              </div>
              <label class="form-label">Passengers</label>
              <div class="mb-2">
                <div class="input-group">
                  <label for="adults-input" class="input-group-text"
                    >Adults</label
                  >
                  <input
                    type="number"
                    min="0"
                    class="form-control"
                    id="adults-input"
                    aria-describedby="adults-label"
                  />
                </div>
                <span id="adults-label" class="form-text"
                  >12 years old and older</span
                >
              </div>
              <div class="mb-2">
                <div class="input-group">
                  <label for="children-input" class="input-group-text"
                    >Children</label
                  >
                  <input
                    type="number"
                    min="0"
                    class="form-control"
                    id="children-input"
                    aria-describedby="children-label"
                  />
                </div>
                <span id="children-label" class="form-text"
                  >2 to 12 years old</span
                >
              </div>
              <div class="mb-2">
                <div class="">
                  <div class="input-group">
                    <label for="infants-input" class="input-group-text"
                      >Infants</label
                    >
                    <input
                      type="number"
                      min="0"
                      class="form-control"
                      id="infants-input"
                      aria-describedby="infants-label"
                    />
             
                </div>
                <span id="infants-label" class="form-text">
                Up to 2 years old
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 d-flex justify-content-center gap-4">
        <button id="search-button" class="btn btn-search btn-dark">Search</button>
        <button class="btn btn-reset btn-dark">Reset</button>
      </div>
      <div class="border-bottom mb-4 pt-4" id="search-results-separator"></div>
      <div class="d-flex justify-content-center" id="search-results-loader">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
       <div class="search-results-container container px-3"> 
            <div id="best-flights" class="cards-wrapper border border-secondary-subttle px-3 mb-4">

            
            </div>
            <div id="other-flights" class="cards-wrapper border border-secondary-subttle px-3">
            
            </div>

          </div>  
      
    </div>
`;async function i(e){try{let t=await fetch(e);if(!t.ok)throw Error("Data not found");return await t.json()}catch(e){throw e}}var s=(e,t)=>{let a=t.flights.length,i=e=>{let[t,a]=e.split(" "),[i,s]=a.split(":"),l=i>=12?"PM":"AM";return i=i%12||12,`${i}:${s} ${l}`};return document.querySelector(".emissions span"),`
        <div
            class="card-container border-bottom border-secondary-subttle py-3 w-100 m-auto"
          >
            <div class="row w-100 m-auto">
              <div class="col-11">
                <div class="row">
                  <div class="col-1">
                    <img src="${t.airline_logo}" alt="airline-logo" />
                  </div>
                  <div class="col-3">
                    <div class="data">${i(t.flights[0].departure_airport.time)} - ${i(t.flights[a-1].arrival_airport.time)}</div>
                    <div class="subdata"> ${t.flights[0].airline}</div>
                  </div>
                  <div class="col-2">
                    <div class="data">${(e=>{let t=Math.floor(e/60);return`${t}h ${e%60}m`})(t.total_duration)}</div>
                    <div class="subdata">${e.search_parameters.departure_id} - ${e.search_parameters.arrival_id}
  </div>
                  </div>
                  <div class="col-2">
                    <div class="data">${t.layovers?.length>0?`${t.layovers.length} stops`:"Nonstop"} </div>
                    <div class="subdata">stops</div>
                  </div>
                  <div class="col-2">
                    <div class="data">${t.carbon_emissions.this_flight/1e3} kg CO2e</div>
                    <div class="subdata emissions"><span class="rounded-pill px-1" style="background-color: ${t.carbon_emissions.difference_percent<0?"rgba(0, 128, 0, 0.2)":"transparent"}; ">
                    ${t.carbon_emissions.difference_percent>0?`+${t.carbon_emissions.difference_percent}`:t.carbon_emissions.difference_percent}% emissions
                    </span></div>
                  </div>
                  <div class="col-2">
                    <div class="data">${e.search_parameters.currency}$${t.price}</div>
                    <div class="subdata">${t.type}</div>
                  </div>
                </div>
              </div>
              <div class="col-1">
                <button class="bi-check2-circle btn btn-select-flight" 
                  data-toggle="tooltip" 
                  data-token="${t.departure_token??t.booking_token}" 
                  data-departure_id="${e.search_parameters.departure_id}"
                  data-arrival_id="${e.search_parameters.arrival_id}"
                  data-outbound_date="${e.search_parameters.outbound_date}"
                  data-return_date="${e.search_parameters.return_date}"
                  data-adults="${e.search_parameters.adults}"
                  data-children="${e.search_parameters.children}"
                  data-infants="${null!==e.search_parameters.infants_in_seat?e.search_parameters.infants_in_seat:0}">
                </button>
              </div>
            </div>
          </div>
            </div>
        
`},l=e=>{let t="";e.together.airline_logos.length>0&&(t=e.together.airline_logos[0]);let a=e.together.price,i=e.together.book_with;return`

  <div
        class="card-container container border-bottom border-secondary-subttle py-3 w-100 m-auto"
    >
        <div class="row">
        <div class="col-9">
            <div class="row">
            <div class="col-1">
                <img src="${t}" alt="airline-logo" />
            </div>
            <div class="col-6">
                <div class="data">Book with - ${i}</div>
                <div class="subdata">stops</div>
            </div>
            <div class="col-5">
                <div class="data"><span class="text-success">CAD $${a}</span></div>
                <div class="subdata">Check with airline for bag and optional fees</div>
            </div>
            </div>
        </div>
        <div class="col-3 text-center">
          <a
            href="booking-form"
            data-link
            class="btn btn-outline-success bi-bookmark-check btn-book-flight"
            data-price="${a}"
            data-book-with="${i}"

          >
            Book Flight
          </a>
        </div>
        </div>
    </div>



`},n=(e,t)=>{let a=t.flights.length,i=e=>{let[t,a]=e.split(" "),[i,s]=a.split(":"),l=i>=12?"PM":"AM";return i=i%12||12,`${i}:${s} ${l}`};return`
          <div
              class="card-container border-bottom border-secondary-subttle py-3 w-100 m-auto"
            >
              <div class="row w-100 m-auto">
                <div class="col-12">
                  <div class="row">
                    <div class="col-1">
                      <img src="${t.airline_logo}" alt="airline-logo" />
                    </div>
                    <div class="col-4">
                      <div class="data">${e.search_parameters.outbound_date} - ${i(t.flights[0].departure_airport.time)} - ${i(t.flights.length>1?t.flights[a-1].arrival_airport.time:t.flights[0].arrival_airport.time)}</div>
                      <div class="subdata"> ${t.flights[0].airline}</div>
                    </div>
                    <div class="col-2">
                      <div class="data">${(e=>{let t=Math.floor(e/60);return`${t}h ${e%60}m`})(t.total_duration)}</div>
                      <div class="subdata">${e.search_parameters.departure_id} - ${e.search_parameters.arrival_id}
    </div>
                    </div>
                    <div class="col-2">
                      <div class="data">${t.layovers?.length>0?`${t.layovers.length} stops`:"Nonstop"} </div>
                      <div class="subdata">stops</div>
                    </div>
                    <div class="col-3">
                      <div class="data">${t.carbon_emissions?.this_flight/1e3} kg CO2e</div>
                      <div class="subdata emissions"><span class="rounded-pill px-1" style="background-color: ${t.carbon_emissions.difference_percent<0?"rgba(0, 128, 0, 0.2)":"transparent"}; ">
                      ${t.carbon_emissions.difference_percent>0?`+${t.carbon_emissions.difference_percent}`:t.carbon_emissions.difference_percent}% emissions
                      </span></div>
                    </div>                    
                  </div>
                </div>            
              </div>
            </div>
              </div>
          
  `};class o extends e{constructor(e){super(e),this.setTitle("Home"),this.autocompleteTimeout=300,this.autocompleteTimeoutHandle=0,this.domElements={}}async getHtml(){return`
          
          <div class="html-container">
            ${t} 
            ${a} 
          </div>          
        `}async postRender(){this.initializeElements();let{originInput:e,originOptions:t,destinationInput:a,destinationOptions:i,departureDateInput:s,flightTypeSelect:l,returnDate:n,searchButton:o,resetButton:r,selectFlightButtons:d,searchResultsSeparator:c,searchResultsLoader:u,searchResults:p,returnDateInput:v,travelClassSelect:g,adultsInput:m,childrenInput:h,infantsInput:b,flightIcon:f}=this.domElements;this.reset(),document.body.addEventListener("change",()=>{clearTimeout(this.autocompleteTimeoutHandle),o.disabled=!e.value||!a.value}),e.addEventListener("input",()=>{this.autocomplete(e,t)}),a.addEventListener("input",()=>{this.autocomplete(a,i)}),l.addEventListener("change",()=>{"one-way"===l.value?(n.classList.add("d-none"),f.classList.remove("bi-arrow-repeat"),f.classList.add("bi-arrow-right")):(n.classList.remove("d-none"),f.classList.remove("bi-arrow-right"),f.classList.add("bi-arrow-repeat"))}),o.addEventListener("click",async()=>{c.classList.remove("d-none"),u.classList.remove("d-none");let e=await this.search();u.classList.add("d-none"),this.showResults(e)}),r.addEventListener("click",e=>{e.preventDefault(),this.reset()})}initializeElements(){this.domElements={originInput:document.getElementById("origin-input"),originOptions:document.getElementById("origin-options"),destinationInput:document.getElementById("destination-input"),destinationOptions:document.getElementById("destination-options"),departureDateInput:document.getElementById("departure-date-input"),flightTypeSelect:document.getElementById("flight-type-select"),returnDate:document.getElementById("return-date"),searchButton:document.getElementById("search-button"),resetButton:document.querySelector(".btn-reset"),selectFlightButtons:document.querySelectorAll(".btn-select-flight"),bookFlightButtons:document.querySelectorAll(".btn-book-flight"),sendQueryButton:document.querySelector(".btn-send-query"),searchResultsSeparator:document.getElementById("search-results-separator"),searchResultsLoader:document.getElementById("search-results-loader"),bestFlights:document.getElementById("best-flights"),otherFlights:document.getElementById("other-flights"),returnDateInput:document.getElementById("return-date-input"),travelClassSelect:document.getElementById("travel-class-select"),adultsInput:document.getElementById("adults-input"),childrenInput:document.getElementById("children-input"),infantsInput:document.getElementById("infants-input"),flightIcon:document.querySelector(".flight-icon")}}reset(){let{originInput:e,destinationInput:t,departureDateInput:a,flightTypeSelect:i,returnDate:s,searchButton:l,searchResultsSeparator:n,searchResultsLoader:o,returnDateInput:r,travelClassSelect:d,adultsInput:c,childrenInput:u,infantsInput:p,infantsOnLap:v,flightIcon:g}=this.domElements;e.value="",t.value="",a.valueAsDate=new Date,r.valueAsDate=new Date,s.classList.add("d-none"),d.value="1",c.value=1,u.value=0,p.value=0,l.disabled=!0,n.classList.add("d-none"),o.classList.add("d-none"),i.value="one-way",g.classList.add("bi-arrow-right")}formatDate(e){let[t]=e.toISOString().split("T");return t}formatNumber(e){return`${Math.abs(parseInt(e))}`}autocomplete(e,t){clearTimeout(this.autocompleteTimeoutHandle),this.autocompleteTimeoutHandle=setTimeout(async()=>{try{let a=(await i("/airports")).filter(t=>{let a=RegExp(`^${e}`,"gi");return t.country.match(a)||t.name.match(a)||t.city.match(a)||t.iata_code.match(a)});t.textContent="",a.forEach(e=>{t.insertAdjacentHTML("beforeend",`<option value="${e.iata_code}">${e.city} - ${e.iata_code}</option>`)})}catch(e){console.error(e)}},this.autocompleteTimeout)}async search(){let{originInput:e,destinationInput:t,departureDateInput:a,flightTypeSelect:s,returnDateInput:l,travelClassSelect:n,adultsInput:o,childrenInput:r,infantsInput:d}=this.domElements;try{let c="round-trip"===s.value,u=new URLSearchParams({departure_id:e.value,arrival_id:t.value,outbound_date:this.formatDate(a.valueAsDate),departure_token:"",adults:this.formatNumber(o.value),children:this.formatNumber(r.value),infants_in_seat:this.formatNumber(d.value),travel_class:this.formatNumber(n.value),...c?{return_date:this.formatDate(l.valueAsDate)}:{},currency:"CAD",hl:"en"}),p=`search?${u.toString()}`;return await i(p)}catch(e){console.error(e)}}showResults(e){let{bestFlights:t,otherFlights:a}=this.domElements,i=e.best_flights||[],l=e.other_flights||[];0===i.length?(t.textContent="",t.insertAdjacentHTML("beforeend",`
        <div class="d-flex justify-content-center align-items-center" id="search-no-results">
            No results
        </div>
        `)):(t.textContent="",t.innerHTML='<h3 class="text-center py-3">Best Flights</h3>',i.forEach(a=>{t.innerHTML+=`
          <div class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">
          ${s(e,a)}
          </div>
            `})),0===l.length?(a.textContent="",a.insertAdjacentHTML("beforeend",`
        <div class="d-flex justify-content-center align-items-center" id="search-no-results">
            No results
        </div>
        `)):(a.textContent="",a.innerHTML='<h3 class="text-center py-3">Other Flights</h3>',l.forEach(t=>{a.innerHTML+=`
        <div class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">
        ${s(e,t)}
        </div>
          `})),this.getReturnFlights()}getReturnFlights(){this.domElements.selectFlightButtons=document.querySelectorAll(".btn-select-flight"),this.domElements.selectFlightButtons.length>0&&this.domElements.selectFlightButtons.forEach(e=>{e.addEventListener("click",async e=>{let t=e.target.getAttribute("data-token"),a=e.target.getAttribute("data-departure_id"),i=e.target.getAttribute("data-arrival_id"),s=e.target.getAttribute("data-outbound_date"),l=e.target.getAttribute("data-return_date"),n=new URLSearchParams({engine:"google_flights",departure_id:a,arrival_id:i,outbound_date:s,return_date:l,adults:e.target.getAttribute("data-adults"),children:e.target.getAttribute("data-children"),infants_in_seat:e.target.getAttribute("data-infants")||0,departure_token:t,currency:"CAD",hl:"en"});this.domElements.searchResultsLoader.classList.remove("d-none");let o=`/search?${n.toString()}`;try{let e=await fetch(o);if(!e.ok)throw Error("Data not found");this.domElements.searchResultsLoader.classList.add("d-none");let t=await e.json();this.showReturnResults(t)}catch(e){throw e}})})}showReturnResults(e){let{bestFlights:t,otherFlights:a}=this.domElements,i=e.best_flights||[],l=e.other_flights||[];0===i.length?t.innerHTML="":(t.innerHTML="",t.innerHTML='<h3 class="text-center py-3">Best Return Flights</h3>',i.forEach(a=>{t.innerHTML+=`
          <div class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">
          ${s(e,a)}
          </div>
            `})),0===l.length?(a.innerHTML="",a.insertAdjacentHTML("beforeend",`
        <div class="d-flex justify-content-center align-items-center" id="search-no-results">
            No results
        </div>
        `)):(a.innerHTML="",a.innerHTML='<h3 class="text-center py-3">Other Return Flights</h3>',l.forEach(t=>{a.innerHTML+=`
        <div class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">
        ${s(e,t)}
        </div>
          `})),this.getBookingOptions()}getBookingOptions(){this.domElements.selectFlightButtons=document.querySelectorAll(".btn-select-flight"),this.domElements.selectFlightButtons.length>0&&this.domElements.selectFlightButtons.forEach(e=>{e.addEventListener("click",async e=>{let t=e.target.getAttribute("data-token"),a=e.target.getAttribute("data-departure_id"),i=e.target.getAttribute("data-arrival_id"),s=e.target.getAttribute("data-outbound_date"),l=e.target.getAttribute("data-return_date"),n={engine:"google_flights",departure_id:a,arrival_id:i,outbound_date:s,return_date:l,booking_token:t,adults:e.target.getAttribute("data-adults"),children:e.target.getAttribute("data-children"),infants_in_seat:e.target.getAttribute("data-infants")||0,currency:"CAD",hl:"en"},o=new URLSearchParams(n),r=`/search?${o.toString()}`;this.domElements.searchResultsLoader.classList.remove("d-none");try{let e=await fetch(r);if(!e.ok)throw Error("Data not found");let t=await e.json();this.domElements.searchResultsLoader.classList.add("d-none"),this.showBookingOptions(t,n)}catch(e){throw e}})})}showBookingOptions(e,t){let{bestFlights:a,otherFlights:i}=this.domElements,s=e.booking_options||[],o=e.selected_flights||[];o.length<0?(a.innerHTML="",a.innerHTML=`
       <div class="d-flex justify-content-center align-items-center" id="search-no-results">
            No results
        </div>
      `):(a.innerHTML="",a.innerHTML='<h3 class="text-center py-3">Selected Flights</h3>',o.forEach(t=>{a.innerHTML+=`
         <div class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">
          ${n(e,t)}
          </div>
        `})),s.length>0&&(i.innerHTML="",i.innerHTML='<h3 class="text-center py-3">Booking Options</h3>',s.forEach(e=>{i.innerHTML+=`
        <div class="flex-column flex-sm-row list-group-item d-flex justify-content-between align-items-sm-center">
        ${l(e)}
        </div>
          `})),this.chooseBookingOption(t,o)}chooseBookingOption(e,t){let a=document.querySelectorAll(".btn-book-flight");a.length>0&&a.forEach(a=>{a.addEventListener("click",a=>{let i=a.target.getAttribute("data-book-with"),s=a.target.getAttribute("data-price");localStorage.removeItem("booking-data"),localStorage.setItem("booking-data",JSON.stringify(e)),localStorage.removeItem("selected-flights-data"),localStorage.setItem("selected-flights-data",JSON.stringify(t)),localStorage.removeItem("booking-option-data"),localStorage.setItem("booking-option-data",JSON.stringify({bookingOption:i,price:s}))})})}}function r(e){let t=new Date(e);return t.toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"})+` - ${t.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}`}var d=(e,t,a,i)=>{let s=.05*t.price,l=t.price-s,n=a.adults||0,o=a.children||0,d=a.infants_in_seat||0;i[0].flights.length;let c=parseInt(n)+parseInt(o)+parseInt(d),u=r(i[0].flights[0].departure_airport.time),p="";return i[0].flights.length,p=r(i[1].flights[0].departure_airport.time),` 
<div class="container-sm p-3 border flight-booking">
      <div class="card p-3">
        <div class="row">
          <div>
            <h4>Flight Summary</h4>
          </div>
        </div>
      </div>
      <section class="flight-summary-section">
        <div class="form-content margin mt-2">
          <div class="row">
            <div class="col-6">
              <div class="card p-3 h-100">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="">
                    <span>${i[0].type}</span
                    ><span>
                      - <span>${c}</span> passenger(s)</span
                    >
                  </div>
                  <div class="">
                    <button class="btn btn-revise">
                      <i class="bi bi-pencil-square"></i> Revise Trip
                    </button>
                  </div>
                </div>
                <div class="">
                  <div class="card p-3 mt-3">
                    <div class="data">
                      <span class="fw-bold"
                        >${i[0].flights[0].departure_airport.name} - ${i[0].flights[0].departure_airport.id}</span
                      >
                    </div>
                    <div class="subdata">
                      <span class="">${u}</span>
                    </div>
                  </div>
                  <div class="card p-3 mt-3">
                    <div class="data">
                      <span class="fw-bold"
                        >${i[0].flights.length>1?i[0].flights[1].arrival_airport.name:i[0].flights[0].arrival_airport.name} - ${i[0].flights.length>1?i[0].flights[1].arrival_airport.id:i[0].flights[0].arrival_airport.id}</span
                      >
                    </div>
                    <div class="subdata">${p}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card p-3">
                <div class="p-3 card">
                  <div class="row">
                    <div class="col-6">Fare</div>
                    <div class="col-6"><span>CAD $${l}</span></div>
                  </div>
                  <div class="row py-3">
                    <div class="col-6">Taxes and fees</div>
                    <div class="col-6">
                      <span>CAD $${s.toFixed(2)}</span>
                    </div>
                  </div>
                  <div class="row pb-2">
                    <div class="col-6">Total</div>
                    <div class="col-6">
                      <span>CAD $${t.price}</span>
                    </div>
                  </div>
                  <div>
                    <span class="subdata"
                      >Includes taxes and carrier-imposed fees
                    </span>
                  </div>
                </div>
                <div class="pt-3 row text-center">
                  <div class="d-flex flex-column gap-1 col-6">
                    <span class="fw-bold">Already a member?</span>
                    <button class="btn btn-outline-dark btn-signin w-75 m-auto">
                      Sign In
                    </button>
                  </div>
                  <div class="d-flex flex-column gap-1 col-6">
                    <span class="fw-bold">or</span>
                    <button class="btn btn-checkout btn-dark w-75 m-auto">
                      Checkout as a Guest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Login Form -->
      <div
        class="container-sm p-3 border mt-3 d-none"
        id="signin-form-container"
      >
        <section class="vh-75">
          <div class="container py-3 h-100">
            <div class="row d-flex justify-content-center pt-3 h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card login-card" style="border-radius: 1rem">
                  <div class="card-body py-3 px-5 text-center">
                    <form id="signin-form">
                      <div class="mb-md-5 mt-md-4 pb-2">
                        <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                        <p class="mb-5">
                          Please enter your login and password!
                        </p>

                        <div
                          data-mdb-input-init
                          class="form-outline form-white mb-4"
                        >
                          <input
                            type="text"
                            id="login-username"
                            name="login-username"
                            placeholder="username"
                            class="form-control form-control-lg"
                          />
                          <div
                            id="invalid-login-username"
                            class="invalid-feedback text-dark"
                          >
                            <i class="bi bi-exclamation-triangle"></i>
                            <span class="">Invalid Username</span>
                          </div>
                        </div>

                        <div
                          data-mdb-input-init
                          class="form-outline form-white mb-4"
                        >
                          <input
                            placeholder="password"
                            type="password"
                            name="login-password"
                            id="login-password"
                            class="form-control form-control-lg"
                          />
                          <div
                            id="invalid-login-password"
                            class="invalid-feedback text-dark"
                          >
                            <i class="bi bi-exclamation-triangle"></i>
                            <span>Invalid Password</span>
                          </div>
                        </div>

                        <p class="small mb-3 pb-lg-2">
                          <a class="text-dark" href="#!">Forgot password?</a>
                        </p>

                        <button
                          class="btn btn-dark btn-lg px-5 btn-submit"
                          type="submit"
                        >
                          Login
                        </button>

                        <div
                          class="d-flex justify-content-center text-center mt-4 pt-1"
                        >
                          <a href="#!" class="text-dark"
                            ><i class="fab fa-facebook-f fa-lg"></i
                          ></a>
                          <a href="#!" class="text-dark"
                            ><i class="fab fa-twitter fa-lg mx-4 px-2"></i
                          ></a>
                          <a href="#!" class="text-dark"
                            ><i class="fab fa-google fa-lg"></i
                          ></a>
                        </div>
                      </div>

                      <div>
                        <p class="mb-0">
                          Don't have an account?
                          <a href="#!" class="fw-bold">Sign Up</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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
            <div class="main-passenger-row">
              <div class="row">
                <div class="col-6">
                  <div class="card p-3">
                    <div class="">
                      <label for="name" class="form-label"> Name </label>
                      <input type="text" class="form-control" id="name" />
                      <div id="invalid-name" class="invalid-feedback">
                        <i class="bi bi-exclamation-triangle"></i>
                        <span>Invalid Name</span>
                      </div>
                    </div>
                    <div class="py-3">
                      <label for="middle-name" class="form-label text-black-50">
                        Middle Name (optional)
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="middle-name"
                      />
                    </div>
                    <div class="">
                      <label for="last-name" class="form-label">
                        Last Name
                      </label>
                      <input type="text" class="form-control" id="last-name" />
                      <div id="invalid-last-name" class="invalid-feedback">
                        <i class="bi bi-exclamation-triangle"></i>
                        <span>Invalid Last Name</span>
                      </div>
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
                          id="nationality"
                        />
                        <div id="invalid-nationality" class="invalid-feedback">
                          <i class="bi bi-exclamation-triangle"></i>
                          <span>Invalid Nationality</span>
                        </div>
                        <datalist id="nationality-options"></datalist>
                      </div>
                    </div>
                    <div class="py-3">
                      <label for="gender" class="form-label"> Gender </label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="bi bi-gender-ambiguous"></i>
                        </span>
                        <select class="form-control form-select" id="gender">
                          <option value="0">Select...</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
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
                        />
                        <div id="invalid-birth-date" class="invalid-feedback">
                          <i class="bi bi-exclamation-triangle"></i>
                          <span>Invalid Date</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="registration-suggestion py-3">
                <div
                  class="border-start-5 alert alert-info d-flex align-items-center"
                  role="alert"
                >
                  <i class="bi bi-info-circle-fill me-3"></i>
                  <span
                    >Want to
                    <a
                      href="#register-button-container"
                      class="link-registration fw-bold"
                      >register</a
                    >
                    for a better experience?</span
                  >
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
                  <div class="row">
                    <div class="col-8">
                      <div class="data">
                        <h5>Carry-on baggage</h5>
                      </div>
                      <div class="subdata">
                        <i class="bi bi-backpack text-success"></i> 1 Added
                        suitcase (15 kg), per passenger, round trip
                      </div>
                    </div>
                    <div class="col-4"></div>
                  </div>
                </div>
                <div class="card p-3 mb-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="data">
                        <h5>Checked baggage</h5>
                      </div>
                      <div class="subdata">
                        <i
                          class="bi bi-suitcase2 text-danger icon-checked-baggage"
                        ></i>
                        <span class="added-checked-baggage">Not included</span>
                      </div>
                    </div>
                    <div class="col-2 text-center">
                      <input
                        type="number"
                        class="form-control checked-baggage-count"
                        value="0"
                      />
                    </div>
                    <div class="col-2 text-center">
                      <button class="btn btn-dark px-5 btn-add-checked-baggage">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="data">
                        <h5>Special baggage</h5>
                      </div>
                      <div class="subdata">
                        <i
                          class="bi bi-suitcase2 text-danger icon-special-baggage"
                        ></i>
                        <span class="added-special-baggage">Not included</span>
                      </div>
                    </div>
                    <div class="col-2 text-center">
                      <input
                        type="number"
                        class="form-control special-baggage-count"
                        value="0"
                      />
                    </div>
                    <div class="col-2 text-center">
                      <button class="btn btn-dark px-5 btn-add-special-baggage">
                        Add
                      </button>
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
                    <option value="Mobile" selected>Mobile</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                  </select>
                </div>
                <div class="py-3">
                  <label class="form-label" for="phone-number">
                    Phone Number
                  </label>
                  <div class="input-group">
                    <select
                      class="form-select input-group-text select-dial-code"
                    >
                      ${e.map(e=>{let t=e.idd&&e.idd.suffixes&&e.idd.suffixes.length>0?e.idd.suffixes[0]:"";return`
                      <option value="${e.idd.root}" class="country-codes">
                        ${e.name.common} (${e.idd.root}${t})
                      </option>
                      `}).join()}
                    </select>
                    <input
                      type="text"
                      class="form-control"
                      id="phone-number"
                      placeholder="10-digit-number"
                    />
                    <div
                      id="invalid-phone-number"
                      class="invalid-feedback text-dark"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span>Invalid Phone Number</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div>
                  <label class="form-label" for="airmiles">
                    Airmiles or other program (optional)
                  </label>
                  <select class="form-select" id="airmiles">
                    <option value="Mobile" selected>Mobile</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                  </select>
                </div>
                <div class="py-3">
                  <label class="form-label" for="email">
                    Email<span class="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="youremail@example.com"
                    class="form-control"
                  />
                  <div id="invalid-email" class="invalid-feedback text-danger">
                    <i class="bi bi-exclamation-triangle"></i>
                    <span>Invalid email</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-none" id="register-button-container">
              <div class="row">
                <div class="col-6">
                  <div class="py-3">
                    <label class="form-label" for="username">
                      Username<span class="text-danger">*</span>
                    </label>
                    <input type="text" id="username" class="form-control" />
                    <div
                      id="invalid-username"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span>Invalid username</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="py-3">
                    <label class="form-label" for="password">
                      Password<span class="text-danger">*</span>
                    </label>
                    <input type="text" id="password" class="form-control" />
                    <div
                      id="invalid-password"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span>Invalid Password</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-50 m-auto pt-3">
                <button class="btn btn-dark btn-register w-100">
                  Register
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>`};function c(e,t,a){let i=[];for(let s=0;s<a;s++)i.push(Math.floor(Math.random()*(t-e))+e);return i}var u=e=>{let t=c(0,9,4),a=c(0,9,2),i=c(0,9,9),s=function(e){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZ",a=[];for(let e=0;e<6;e++){let e=Math.floor(Math.random()*t.length);a.push(t[e])}return a}(0);return`
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
        margin: 0;
        padding: 20px;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
      }
      h1, p {
        margin: 0;
        padding-bottom: 10px;
      }
      .section {
        margin-bottom: 20px;
        margin-top: 20px;
      }
      .section-title {
        font-weight: bold;
        border-bottom: 1px dashed #ddd;
        margin: 0 0 10px 0;
        padding-bottom: 5px;
      }
      .detail-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      .label {
        font-weight: bold;
      }
      .footer {
        margin-top: 20px;
        font-size: 0.9em;
        color: #777;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="section">
        <h1>Details of Your Flight Booking</h1>
        <p>Hi <strong>${e}</strong>,</p>
        <p><br>Thank you for booking your flight with us!</p>
      </div>
      <div class="section">
        <div class="section-title">Booking References</div>
        <div>
          <div class="detail-row">
            <div class="label">Outbound Flight:</div>
            <div>${s.join("")}</div>
          </div>
          <div class="detail-row">
            <div class="label">Return Flight:</div>
            <div>${s.join("")}</div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">Customer Reference and PIN</div>
        <div>
          <div class="detail-row">
            <div class="label">Customer Reference:</div>
            <div>${a.join("")}-${i.join("")}</div>
          </div>
          <div class="detail-row">
            <div class="label">PIN Code:</div>
            <div>${t.join("")}</div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">Your Flight Details</div>
        <div>
          <div class="detail-row">
            <div class="label">Departure Airport:</div>
            <div>Departure Date</div>
          </div>
          <div class="detail-row">
            <div class="label">Destination Airport:</div>
            <div>Return Date</div>
          </div>
        </div>
      </div>
      <div class="section">
        <p>If you have any questions, feel free to contact our customer support.</p>
        <p>Safe travels!</p>
      </div>
      <p class="footer">Best regards,<br><strong>BVC Airlines Team</strong></p>
    </div>
  </body>
  </html>
`};class p extends e{constructor(e){super(e),this.setTitle("Booking Form"),this.autocompleteTimeout=300,this.autocompleteTimeoutHandle=0,this.nacionalitiesList=[],this.phoneCountryCodesList=[],this.countryNames={},this.specialBaggage=0,this.checkedBaggage=0}async getHtml(){await this.fetchCountriesData();let e=JSON.parse(localStorage.getItem("booking-option-data"))||"",t=JSON.parse(localStorage.getItem("booking-data"))||"",a=JSON.parse(localStorage.getItem("selected-flights-data"));return`
     <div class="html-container">
     ${d(this.nacionalitiesList,e,t,a)}     
     </div>
        
        `}async postRender(){await this.fetchCountriesData(),this.initializeElements();let{nationalityInput:e,formInputs:t,nationalityOptions:a}=this.domElements;e.addEventListener("input",()=>{this.autocomplete(e,a,this.countryNames)}),t.forEach(e=>{e.addEventListener("input",()=>{let t=e.id,a=document.querySelector(`#invalid-${t}`);e.value&&a&&a.classList.remove("d-block")})})}initializeElements(){this.domElements={nameInput:document.getElementById("name"),middleNameInput:document.getElementById("middle-name"),lastNameInput:document.getElementById("last-name"),selectGender:document.getElementById("gender"),selectDate:document.getElementById("birth-date"),nationalityOptions:document.getElementById("nationality-options"),nationalityInput:document.getElementById("nationality"),selectDialCode:document.querySelector(".select-dial-code"),btnCheckOut:document.querySelector(".btn-checkout"),btnSignIn:document.querySelector(".btn-signin"),phoneTypeInput:document.getElementById("phone-type"),phoneInput:document.getElementById("phone-number"),emailInput:document.getElementById("email"),btnAddCheckedBaggage:document.querySelector(".btn-add-checked-baggage"),btnAddSpecialBaggage:document.querySelector(".btn-add-special-baggage"),specialBaggageCount:document.querySelector(".special-baggage-count"),checkedBaggageCount:document.querySelector(".checked-baggage-count"),addedSpecialBaggage:document.querySelector(".added-special-baggage"),addedCheckedBaggage:document.querySelector(".added-checked-baggage"),iconCheckedBaggage:document.querySelector(".icon-checked-baggage"),iconSpecialBaggage:document.querySelector(".icon-special-baggage"),signInFormContainer:document.getElementById("signin-form-container"),logoutButton:document.querySelector(".btn-logout"),btnSubmit:document.querySelector(".btn-submit"),logInForm:document.getElementById("signin-form"),logInUsernameInput:document.getElementById("login-username"),logInPasswordInput:document.getElementById("login-password"),usernameLabel:document.querySelector(".user-name-label"),gotoRegistrationLink:document.querySelector(".link-registration"),registerButtonContainer:document.getElementById("register-button-container"),registrationSuggestion:document.querySelector(".registration-suggestion"),usernameInput:document.getElementById("username"),passwordInput:document.getElementById("password"),btnRegister:document.querySelector(".btn-register"),invalidName:document.getElementById("invalid-name"),invalidLastName:document.getElementById("invalid-last-name"),invalidNationality:document.getElementById("invalid-nationality"),invalidDate:document.getElementById("invalid-birth-date"),invalidEmail:document.getElementById("invalid-email"),invalidUsername:document.getElementById("invalid-username"),invalidPassword:document.getElementById("invalid-password"),formInputs:document.querySelectorAll("input")},this.getBaggageDetails(),this.handleSignInButton(),this.handleSignInForm(),this.gotoRegister(),this.registerUser(),this.handleLogoutButton(),this.handleFormData()}autocomplete(e,t,a){clearTimeout(this.autocompleteTimeoutHandle),this.autocompleteTimeoutHandle=setTimeout(async()=>{try{let i=this.nacionalitiesList.filter(t=>{let a=RegExp(e,"gi");return t.name.common.match(a)});t.textContent="",i.forEach(e=>{a[e.name.common.toLowerCase()]=e.name.common,t.insertAdjacentHTML("beforeend",`<option value="${e.name.common}">${e.flag} ${e.name.common}</option>`)})}catch(e){console.error(e)}},this.autocompleteTimeout)}async fetchCountriesData(){try{let e=await i("https://restcountries.com/v3.1/all?dields=name,flag,idd");this.nacionalitiesList=e.sort((e,t)=>e.name.common<t.name.common?-1:e.name.common>t.name.common?1:0)}catch(e){console.error(e)}}handleFormData(e){let{btnCheckOut:t,nameInput:a,middleNameInput:i,lastNameInput:s,nationalityInput:l,selectGender:n,selectDate:o,selectDialCode:r,phoneInput:d,emailInput:c}=this.domElements;t.addEventListener("click",async t=>{t.preventDefault();let u=JSON.parse(localStorage.getItem("booking-option-data")),p=JSON.parse(localStorage.getItem("selected-flights-data")),v=JSON.parse(localStorage.getItem("booking-data"));if(console.log(u),!u||!p||!v){console.error("Missing booking option or selected flights data");return}u.price,u.price;let g=v.adults||0,m=v.children||0,h=v.infants_in_seat||0,b=parseInt(g)+parseInt(m)+parseInt(h);console.log("Passengers:",b);let f=p[0].flights[0].departure_airport.time,y=p[0].flights.length>1?p[0].flights[1].departure_airport.time:f;try{let t={Price:u.price,NumberOfPassengers:b,DepartureDate:f,BookingOption:u.bookingOption,ArrivalDate:y},g=await fetch("/query/Booking",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t})});if(!g.ok)throw Error("Failed to insert booking");let m=await g.json();console.log("Booking inserted successfully:",m);let h=m.BookingID;if(!h)throw Error("BookingID not returned");let w=l.value,I=null,k=await fetch(`/query?countryName=${w}`);if(I=(await k.json()).CountryID,console.log(I),!I)throw Error("Country ID not found");let x={BookingID:h,FirstName:a.value,MiddleName:i.value,LastName:s.value,CountryID:I,Gender:n.value,DateOfBirth:o.value,RegisterUserID:e},E=await fetch("/query/Passenger",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:x})});if(!E.ok)throw Error("Failed to insert passenger");let _=await E.json();console.log("Passenger inserted successfully:",_);let S=a.value;localStorage.setItem("name",JSON.stringify(S));let L=_.PassengerID;if(!L)throw Error("PassengerID not returned");let B=p[0].flights[0].departure_airport.name,$=p[0].flights[1].arrival_airport.name,D=p[0].flights[0].travel_class,C={BookingID:h,FlightType:p[0].type,TravelClass:D,DepartureAirportID:v.departure_id,DepartureAirportName:B,DepartureDateTime:f,ArrivalAirportID:v.arrival_id,ArrivalAirportName:$,ArrivalDateTime:y},T=await fetch("/query/Flight",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:C})});if(!T.ok)throw Error("Failed to insert flight");let A=await T.json();if(console.log("Flight inserted successfully:",A),!A.FlightID)throw Error("FlightID not returned");let N="Not included";if(this.checkedBaggage>0){N="Added";let e=[];for(let t=0;t<this.checkedBaggage;t++){let a={PassengerID:L,Weight:23.5,BaggageType:"Checked",Status:N};e.push(a),console.log(e[t]);try{let a=await fetch("/query/Baggage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:e[t]})});if(!a.ok)throw Error("Failed to insert baggage");let i=await a.json();console.log("Baggage inserted successfully:",i)}catch(e){console.error("Error inserting baggage:",e)}}}let O={PassengerID:L,PhoneType:"Mobile",PhoneNumber:`${r.value} ${d.value}`,Email:c.value},F=await fetch("/query/Contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:O})});if(!F.ok)throw Error("Failed to insert Contact");let R=await F.json();console.log("Contact inserted successfully:",R),console.log("All records inserted successfully!")}catch(e){console.error("Error during insertion chain:",e)}this.sendBookingConfirmation(),alert("Transaction Complete"),window.location.href="/booking-confirmation"})}formatDate(e){let[t]=e.toISOString().split("T");return t}insertPassenger(e,t){document.getElementById("name").value,document.getElementById("middle-name").value,document.getElementById("last-name").value,document.getElementById("gender-input").value,document.getElementById("birth-date").value}reset(){let{btnCheckOut:e,nameInput:t,middleNameInput:a,lastNameInput:i,nationalityInput:s,selectGender:l,selectDate:n,selectDialCode:o,phoneInput:r}=this.domElements}getBaggageDetails(){let{specialBaggageCount:e,checkedBaggageCount:t,btnAddCheckedBaggage:a,btnAddSpecialBaggage:i,addedCheckedBaggage:s,addedSpecialBaggage:l,iconCheckedBaggage:n,iconSpecialBaggage:o}=this.domElements;i.addEventListener("click",t=>{t.preventDefault(),this.specialBaggage=e.value,this.specialBaggage>0&&(l.textContent=`Added x ${this.specialBaggage}`,o.classList.remove("text-danger"),o.classList.add("text-success"))}),a.addEventListener("click",e=>{e.preventDefault(),this.checkedBaggage=t.value,this.checkedBaggage>0&&(s.textContent=`Added x ${this.checkedBaggage}`,n.classList.remove("text-danger"),n.classList.add("text-success"))})}handleSignInButton(){let{btnSignIn:e,signInFormContainer:t}=this.domElements;e.addEventListener("click",e=>{e.preventDefault(),t.classList.remove("d-none"),t.classList.add("d-block")}),console.log(t)}handleSignInForm(){let{logInForm:e,logInUsernameInput:t,logInPasswordInput:a,logoutButton:i,signInFormContainer:s,registrationSuggestion:l,usernameLabel:n,btnCheckOut:o,btnSignIn:r}=this.domElements;e&&e.addEventListener("submit",async e=>{e.preventDefault();let d=t.value.trim(),c=a.value.trim();if(""===c||""===d)alert("Both username and password are required.");else try{let e=await fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:d,password:c})}),t=await e.json();t.success?(n.textContent=t.username,console.log("username:",t.success),i.classList.add("d-block"),i.classList.remove("d-none"),alert("Login successful!"),s.classList.remove("d-block"),s.classList.add("d-none"),l.classList.add("d-none"),o.textContent="Checkout",r.disabled=!0):alert(t.message||"Invalid username or password.")}catch(e){console.error("Error during login:",e),alert("An error occurred during login. Please try again later.")}})}handleLogoutButton(){let{logoutButton:e,btnCheckOut:t,usernameLabel:a,registrationSuggestion:i,logInForm:s,btnSignIn:l}=this.domElements;e.addEventListener("click",async()=>{try{let n=await fetch("/logout",{method:"POST",headers:{"Content-Type":"application/json"}});(await n.json()).success&&(alert("Logout succesful."),e.classList.remove("d-block"),e.classList.add("d-none"),a.textContent="",t.textContent="Checkout as a Guest",l.disabled=!1,i.classList.remove("d-none"),i.classList.add("d-block"),s.reset())}catch(e){console.error("Error during logout:",e),alert("An error occurred during logout. Please try again later.")}})}async sendBookingConfirmation(){let{emailInput:e,nameInput:t}=this.domElements,a={to:e.value,cc:"",bcc:"",subject:"Flight Booking Confirmation",message:` ${u(t.value)}`};try{(await fetch("/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).ok?alert("Message sent succesfully!"):alert("Failed to send message")}catch(e){console.error("Error:",e),alert("Error sending email.")}}gotoRegister(){let{gotoRegistrationLink:e,registerButtonContainer:t,nameInput:a,invalidName:i,lastNameInput:s,invalidLastName:l,nationalityInput:n,invalidNationality:o,selectDate:r,invalidDate:d}=this.domElements;e.addEventListener("click",e=>{e.preventDefault(),""!==a.value.trim()&&""!==s.value.trim()&&""!==r.value.trim()&&r.value?(t.classList.remove("d-none"),t.classList.add("d-block"),t.scrollIntoView({behavior:"smooth"})):(i.classList.add("d-block"),l.classList.add("d-block"),o.classList.add("d-block"),d.classList.add("d-block"))})}registerUser(){let e;let{btnRegister:t,emailInput:a,usernameInput:i,passwordInput:s,invalidUsername:l,invalidEmail:n,invalidPassword:o,registerButtonContainer:r}=this.domElements;i&&s&&t.addEventListener("click",async t=>{if(t.preventDefault(),console.log("usernameInput value:",i?.value),console.log("emailInput value:",a?.value),console.log("passwordInput value:",s?.value),""===i.value.trim()||""===s.value.trim()||""===a.value.trim()){n.classList.add("d-block"),l.classList.add("d-block"),o.classList.add("d-block");return}e={username:i?.value.trim(),password:s?.value.trim(),email:a?.value.trim()};try{let t=await fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await t.json();if(console.log("Server Response:",a),a.success)return a.userId,alert("Registration successful. Please sign in for a better experience"),console.log("usernameInput: ",i),i.value="",s.value="",r.classList.remove("d-block"),r.classList.add("d-none"),a.userId;alert(a.message||"Registration failed. Please try again.")}catch(e){return console.error("Error during registration:",e),alert("An error occurred during registration. Please try again later."),null}})}}class v extends e{constructor(e){super(e),this.setTitle("Booking Confirmation")}async getHtml(){let e=JSON.parse(localStorage.getItem("name")),t=JSON.parse(localStorage.getItem("booking-data"))||"",a=JSON.parse(localStorage.getItem("selected-flights-data")),i=JSON.parse(localStorage.getItem("booking-option-data"))||"",s=this.getRandomNums(0,9,4),l=this.getRandomNums(0,9,2),n=this.getRandomNums(0,9,9),o=this.getRandomLetters(6),r=t.adults||0,d=t.children||0,c=t.infants_in_seat||0,u=parseInt(r)+parseInt(d)+parseInt(c),p=this.formatDate(a[0].flights[0].departure_airport.time),v="";return a[0].flights.length,v=this.formatDate(a[1].flights[0].departure_airport.time),`
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
                        <p>Hi <span>${e}</span></p>
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
                                ${"Round trip"===a[0].type?`
                                    <li class="list-group-item">${a[0].flights[0].departure_airport.id} <i class="bi bi-arrow-right"></i> ${a[0].flights[1].arrival_airport.id}</li>
                                    <li class="list-group-item py-3">${a[0].flights[1].arrival_airport.id} <i class="bi bi-arrow-right"></i> ${a[0].flights[0].departure_airport.id}</li>                                    
                                    `:` 
                                    <li class="list-group-item">
                                          ${a[0].flights[0].departure_airport.id} 
                                                <i class="bi bi-arrow-right"></i> 
                                                      ${a[0].flights[0].arrival_airport.id}
                                     </li>`}                                    
                                </ul>                            
                            </div>
                            <div class="col-7">
                                 <ul class="ps-0">
                                    <li class="list-group-item">${o.join("")}</li>
                                    <li class="list-group-item py-3">${o.join("")}</li>
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
                                <p>${l.join("")}-${n.join("")}</p>
                            </div>
                        </div>
                        <div class="row w-100 m-auto">
                            <div class="col-5">
                                <p>PIN code</p>
                            </div>
                            <div class="col-7">
                                <p>${s.join("")}</p>
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
                                                            <div><span>${u}</span> passenger(s)</span> - <strong>CAD $<span>${parseInt(i.price).toFixed(2)}</span></strong></div>                                
                                                        </div>
                                                            <div class="">
                                                                <div class="card p-3 mt-3">
                                                                <div class="row">
                                                                    <div class="col-2">
                                                                        <img src="${a[0].flights[0].airline_logo}"/>
                                                                    </div>
                                                                    <div class="data col-7 pt-2">
                                                                        <div><span class="fw-bold">${a[0].flights[0].departure_airport.name} - ${a[0].flights[0].departure_airport.id}</span></div>
                                            <div class="subdata"><span class="">${p}</span></div>
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
                                                <img src="${a[0].flights[1].airline_logo}"/>
                                            </div>
                                        <div class="col-7 pt-3">
                                            <div class="data"><span class="fw-bold">${a[0].flights.length>1?a[0].flights[1].arrival_airport.name:a[0].flights[0].arrival_airport.name} - ${a[0].flights.length>1?a[0].flights[1].arrival_airport.id:a[0].flights[0].arrival_airport.id}</span></div>
                                            <div class="subdata">${v}</div>
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
    `}async postRender(){}getRandomNums(e,t,a){let i=[];for(let s=0;s<a;s++)i.push(Math.floor(Math.random()*(t-e))+e);return i}getRandomLetters(e){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZ",a=[];for(let i=0;i<e;i++){let e=Math.floor(Math.random()*t.length);a.push(t[e])}return a}formatDate(e){let t=new Date(e);return t.toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"})+` - ${t.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}`}}const g=e=>RegExp("^"+e.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)")+"$"),m=e=>{let t=e.result.slice(1);return Object.fromEntries(Array.from(e.route.path.matchAll(/:(\w+)/g)).map(e=>e[1]).map((e,a)=>[e,t[a]]))},h=e=>{history.pushState(null,null,e),b()},b=async()=>{let e=[{path:"/",view:o},{path:"/booking-form",view:p},{path:"/booking-confirmation",view:v}],t=e.map(e=>({route:e,result:location.pathname.match(g(e.path))})).find(e=>null!==e.result);t||(t={route:e[0],result:[location.pathname]});let a=new t.route.view(m(t)),i=document.querySelector(".app");i&&(i.innerHTML=await a.getHtml()),"function"==typeof a.postRender&&a.postRender()};window.addEventListener("popstate",b),document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",e=>{e.target.matches("a[data-link]")&&(e.preventDefault(),h(e.target.href))}),b()}),document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",function(){document.querySelectorAll(".nav-link").forEach(e=>e.classList.remove("active")),this.classList.add("active")})});
//# sourceMappingURL=index.604fc533.js.map
