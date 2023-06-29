package com.example.backend;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/v1/flights")
@AllArgsConstructor
public class FlightController {

    private final FlightService flightService;

    @GetMapping
    public List<Flight> fetchAllFlights() {
        return flightService.getAllFlights();
    }


    @GetMapping("/{flightId}")
    public ResponseEntity<Flight> fetchFlight(@PathVariable String flightId) {

        System.out.println("GET for id: " + flightId);

        Optional<Flight> flight = flightService.findById(flightId);
        if (flight.isPresent()) {
            Flight foundFlight = flight.get();
            return ResponseEntity.ok(foundFlight);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{seatId}")
    public ResponseEntity<Flight> updateFlight(@PathVariable String seatId) {

        System.out.println("PUT for id: " + seatId);

        List<Flight> flights = flightService.getAllFlights();

        for (int i = 0; i < flights.size(); i++) {
            Flight flight = flights.get(i);

            for (int j = 0; j < flight.getSeats().size(); j++) {
                FlightSeat seat = flight.getSeats().get(j);
                if (seat.getSeatId().equals(seatId)) {
                    if (seat.isReserved()) {
                        // TODO: Think of a better way to handle this
                        return new ResponseEntity(HttpStatus.NO_CONTENT);
                    } else {
                        seat.setReserved(true);
                        flightService.save(flight);
                        return ResponseEntity.ok(flight);
                    }
                }
            }
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }
}
