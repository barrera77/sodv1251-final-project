const SearchForm = `
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
                  <div class="form-check mx-3 py-2">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                        On lap
                      </label>
                  </div>
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
`;

export default SearchForm;
