package com.example.backend;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class FlightService {

    private final FlightRepository flightRepository;

    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    public Optional<Flight> findById(String id) {
        return flightRepository.findById(id);
    }

    public void save(Flight flight) {
        flightRepository.save(flight);
    }
}
