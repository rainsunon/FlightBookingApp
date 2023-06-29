package com.example.backend;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FlightSeat {
    private String seatId;
    private String aisle;
    private String row;
    private String seatClass;
    private int price;
    private boolean isReserved;
    private boolean isEmergencySeat;
    private String clientId = "";
}
