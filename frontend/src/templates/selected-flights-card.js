const SelectedFlightCard = (results, flight) => {
  let flightsLength = flight.flights.length;
  const formatTime = (time) => {
    const [datePart, timePart] = time.split(" ");
    let [hour, minutes] = timePart.split(":");

    const period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12; // Convert to 12-hour format and handle midnight as 12

    return `${hour}:${minutes} ${period}`;
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return `
          <div
              class="card-container border-bottom border-secondary-subttle py-3 w-100 m-auto"
            >
              <div class="row w-100 m-auto">
                <div class="col-12">
                  <div class="row">
                    <div class="col-1">
                      <img src="${flight.airline_logo}" alt="airline-logo" />
                    </div>
                    <div class="col-4">
                      <div class="data">${
                        results.search_parameters.outbound_date
                      } - ${formatTime(
    flight.flights[0].departure_airport.time
  )} - ${
    flight.flights.length > 1
      ? formatTime(flight.flights[flightsLength - 1].arrival_airport.time)
      : formatTime(flight.flights[0].arrival_airport.time)
  }</div>
                      <div class="subdata"> ${flight.flights[0].airline}</div>
                    </div>
                    <div class="col-2">
                      <div class="data">${formatDuration(
                        flight.total_duration
                      )}</div>
                      <div class="subdata">${
                        results.search_parameters.departure_id
                      } - ${results.search_parameters.arrival_id}
    </div>
                    </div>
                    <div class="col-2">
                      <div class="data">${
                        flight.layovers?.length > 0
                          ? `${flight.layovers.length} stops`
                          : "Nonstop"
                      } </div>
                      <div class="subdata">stops</div>
                    </div>
                    <div class="col-3">
                      <div class="data">${
                        flight.carbon_emissions?.this_flight / 1000
                      } kg CO2e</div>
                      <div class="subdata emissions"><span class="rounded-pill px-1" style="background-color: ${
                        flight.carbon_emissions.difference_percent < 0
                          ? "rgba(0, 128, 0, 0.2)"
                          : "transparent"
                      }; ">
                      ${
                        flight.carbon_emissions.difference_percent > 0
                          ? `+${flight.carbon_emissions.difference_percent}`
                          : flight.carbon_emissions.difference_percent
                      }% emissions
                      </span></div>
                    </div>                    
                  </div>
                </div>            
              </div>
            </div>
              </div>
          
  `;
};

export default SelectedFlightCard;
