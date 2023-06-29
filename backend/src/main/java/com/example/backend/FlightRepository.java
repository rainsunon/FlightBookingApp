package com.example.backend;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface FlightRepository extends MongoRepository<Flight, String>  {
    //Optional<Flight> findStudentByEmail(String email);
}
