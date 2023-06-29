package com.example.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.List;
import java.util.UUID;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	public static int getRandom(int max) {
		return (int) (Math.random() * max);
	}

	@Bean
	CommandLineRunner runner (FlightRepository repository, MongoTemplate mongoTemplate) {
		return args -> {

			// Create and insert data:
			final String[] DATES = new String[]{"2023-12-07", "2023-12-08", "2023-12-09", "2023-12-10",
					"2023-12-11", "2023-12-12"};
			final String[] DEPARTURES =  new String[]{"Frankfurt", "Berlin", "Hamburg", "Cologne"};
			final String[] DESTINATIONS =  new String[]{"New York", "Barcelona", "Rome", "Sydney"};

			for (int i = 0; i < DATES.length; i++) {
				Flight flight = new Flight();
				FlightSeat seatOne = new FlightSeat(UUID.randomUUID().toString(), "01","A","First Class", 400,false,false, UUID.randomUUID().toString());
				FlightSeat seathTwo = new FlightSeat(UUID.randomUUID().toString(), "02","B","First Class", 400,false,false, UUID.randomUUID().toString());
				FlightSeat seatThree = new FlightSeat(UUID.randomUUID().toString(), "04","A","Second Class", 200,false,false, UUID.randomUUID().toString());

				flight.setSeats(List.of(seatOne, seathTwo, seatThree));
				flight.setId(UUID.randomUUID().toString());
				flight.setType("Airbus");
				flight.setDeparture(DEPARTURES[getRandom(4)]);
				flight.setDestination(DESTINATIONS[getRandom(4)]);
				flight.setDate(DATES[i]);

				repository.insert(flight);
			}
		};
	}

}
