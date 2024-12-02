const emailBody = (name) => {
  let pinCode = getRandomNums(0, 9, 4);
  let clientReferenceFirstSegment = getRandomNums(0, 9, 2);
  let clientReferenceSecondSegment = getRandomNums(0, 9, 9);
  let bookingReference = getRandomLetters(6);

  return `
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
        <p>Hi <strong>${name}</strong>,</p>
        <p><br>Thank you for booking your flight with us!</p>
      </div>
      <div class="section">
        <div class="section-title">Booking References</div>
        <div>
          <div class="detail-row">
            <div class="label">Outbound Flight:</div>
            <div>${bookingReference.join("")}</div>
          </div>
          <div class="detail-row">
            <div class="label">Return Flight:</div>
            <div>${bookingReference.join("")}</div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">Customer Reference and PIN</div>
        <div>
          <div class="detail-row">
            <div class="label">Customer Reference:</div>
            <div>${clientReferenceFirstSegment.join(
              ""
            )}-${clientReferenceSecondSegment.join("")}</div>
          </div>
          <div class="detail-row">
            <div class="label">PIN Code:</div>
            <div>${pinCode.join("")}</div>
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
`;
};

/**
 * generate random numbers to simulate a customer reference number and PIN
 * normally used for contacting customer service
 * @param {*} min
 * @param {*} max
 * @param {*} count
 * @returns
 */
function getRandomNums(min, max, count) {
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
function getRandomLetters(count) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetters = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    randomLetters.push(alphabet[randomIndex]);
  }
  return randomLetters;
}

export default emailBody;
