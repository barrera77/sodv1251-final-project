const SearchForm = `
<section
    class="shadow container py-4 m  my-4 m-auto border border-secondary-subttle"
>
    <h2 class="text-center pb-3">Flights</h2>
    <div class="search-form">
    <div class="flight-options d-flex gap-3">
        <div class="pb-4">
        <select name="trip-type" id="trip-type" class="select-trip">
            <option value="Round Trip" selected>Round Trip</option>
            <option value="One Way">One Way</option>
            <option value="Multi-city">Multi-city</option>
        </select>
        </div>

        <div>
        <ul class="select-passengers ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
            <i class="bi bi-person-circle me-2"></i>
            <span>1</span>
            <a
                class="fs-5 dropdown-toggle ms-3"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >                
            </a>

            <ul class="dropdown-menu">
                <li>
                <a class="dropdown-item" href="/menu-food">Adults</a>
                <input type="number" class="passenger-count" />
                </li>
                <li>
                <a class="dropdown-item" href="#"
                    >Children <br /><span>Age 2-11</span></a
                >
                <input type="number" class="passenger-count" />
                </li>
                <li>
                <a class="dropdown-item" href="#"
                    >Infants <br /><span>In Seat</span></a
                >
                <input type="number" class="passenger-count" />
                </li>
                <li>
                <a class="dropdown-item" href="#"
                    >Infants <br /><span>On lap</span></a
                >
                <input type="number" class="passenger-count" />
                </li>
                <li>
                <div class="p-2 w-100 d-flex justify-content-between">
                    <button class="btn btn-cancel">Cancel</button>
                    <button class="btn btn-done">Done</button>
                </div>
                </li>
            </ul>
            </li>
        </ul>
        </div>

        <div>
        <select
            name="flight-class"
            id="flight-class"
            class="select-class"
        >
            <option value="Economy" selected>Economy</option>
            <option value="Premium Economy" selected>
            Premium Economy
            </option>
            <option value="Business" selected>Business</option>
            <option value="First" selected>First</option>
        </select>
        </div>
    </div>
    <div class="search-form-container form-group row">
        <div class="search col-lg-7 col-sm-12 pb-3">
        <div class="row">
            <div class="col-5">
            <input
                class="form-control"
                type="text"
                placeholder="Where from?"
                id="where-from"
            />
            </div>
            <div class="col-2 text-center">
            <button class="btn btn-outline-dark w-100 btn-swap">
                <i class="bi bi-arrow-left-right"></i>
            </button>
            </div>
            <div class="col-5">
            <input
                class="form-control"
                type="text"
                placeholder="Destination"
                id="destination"
            />
            </div>
        </div>
        </div>
        <div class="col-lg-5 col-sm-12 pb-3">
        <div class="row dates">
            <div class="col-5">
            <input
                class="form-control datePicker"
                type="text"
                placeholder="Departure"
            />
            </div>
            <div class="col-2 text-center">
            <span class="fs-3"
                ><i class="bi bi-calendar4-week"></i
            ></span>
            </div>
            <div class="col-5">
            <input
                class="form-control datePicker"
                type="text"
                placeholder="Return"
            />
            </div>
        </div>
        </div>
    </div>
    <div
        class="form-actions pt-4 m-auto d-flex justify-content-between"
    >
        <button class="btn btn-dark btn-search px-3">
        <i class="bi bi-search"></i> Search
        </button>
        <button class="btn btn-dark btn-clear px-3">
        <i class="bi bi-recycle"></i> Clear
        </button>
    </div>
    </div>
</section>
`;

export default SearchForm;
