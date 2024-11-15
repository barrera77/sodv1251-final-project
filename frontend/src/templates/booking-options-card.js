const BookingOptionsCard = (bookingOption) => {
  let airlineLogo = "";
  if (bookingOption.together.airline_logos.length > 0) {
    airlineLogo = bookingOption.together.airline_logos[0];
  }

  let price = bookingOption.together.price;
  let bookWith = bookingOption.together.book_with;

  return `

  <div
        class="card-container container border-bottom border-secondary-subttle py-3 w-100 m-auto"
    >
        <div class="row">
        <div class="col-9">
            <div class="row">
            <div class="col-1">
                <img src="${airlineLogo}" alt="airline-logo" />
            </div>
            <div class="col-6">
                <div class="data">Book with - ${bookWith}</div>
                <div class="subdata">stops</div>
            </div>
            <div class="col-5">
                <div class="data"><span class="text-success">CAD $${price}</span></div>
                <div class="subdata">Check with airline for bag and optional fees</div>
            </div>
            </div>
        </div>
        <div class="col-3 text-center">
          <a
            href="booking-form"
            data-link
            class="btn btn-outline-success bi-bookmark-check btn-book-flight"
            data-price="${price}"
            data-book-with="${bookWith}"

          >
            Book Flight
          </a>
        </div>
        </div>
    </div>



`;
};

export default BookingOptionsCard;
