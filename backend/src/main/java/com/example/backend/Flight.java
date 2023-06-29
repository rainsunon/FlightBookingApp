package com.example.backend;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class Flight {
    @Id
    private String id;
    private String date;
    private String type;
    private String departure;
    private String destination;
    private List<FlightSeat> seats;

}
