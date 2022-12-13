package com.dronecommunication.components;

import com.dronecommunication.model.Drone;
import com.dronecommunication.model.Medication;
import com.dronecommunication.repository.DroneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    private DroneRepository droneRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        List<Medication> medicationList = Arrays.asList(
                new Medication("Paracetamol", 50.2, "PARA001"),
                new Medication("Ibuprofen", 50.2, "IBU001")
        );
        // Create a list of drones to preload
        List<Drone> drones = Arrays.asList(
                new Drone("A000091", "Lightweight", 100, 75, Drone.DroneState.IDLE),
                new Drone("A000092", "Middleweight", 200, 50, Drone.DroneState.DELIVERING),
                new Drone("A000093", "Cruiserweight", 300, 25, Drone.DroneState.IDLE),
                new Drone("A000094", "Middleweight", 100, 50, Drone.DroneState.DELIVERING),
                new Drone("A000095", "Cruiserweight", 200, 25, Drone.DroneState.RETURNING)
        );

        for (Drone drone : drones){
            drone.setMedications(medicationList);
        }

        // Save the drones to the database
        droneRepository.saveAll(drones);
    }
}

