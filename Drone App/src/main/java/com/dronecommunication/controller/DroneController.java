package com.dronecommunication.controller;

import com.dronecommunication.model.Drone;
import com.dronecommunication.model.Medication;
import com.dronecommunication.service.DroneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/drones")
public class DroneController {

    @Autowired
    private DroneService droneService;

    @PostMapping("/register")
    public void registerDrone(@RequestBody Drone drone) {
        droneService.registerDrone(drone);
    }
    @GetMapping
    public  @ResponseBody List<Drone> getAllDrones(){
        List<Drone> drones = droneService.getAllDrones();
        return drones;
    }

    @PutMapping("/{serialNumber}/medications")
    public @ResponseBody List<Medication> loadMedications(@PathVariable String serialNumber, @RequestBody List<Medication> medications) {
        List<Medication> addedMedications= droneService.loadMedications(serialNumber, medications);
        return addedMedications;
    }

    // Endpoint for checking loaded medication items for a given drone
    @GetMapping("/loaded-medication/{serialNumber}")
    public  @ResponseBody List<Medication> getLoadedMedication(@PathVariable String serialNumber) {
        // Retrieve the drone from the repository
        Optional<Drone> drone = droneService.getDroneBySerialNumber(serialNumber);

        // Return the list of medication items loaded on the drone
        return drone.get().getMedications();
    }
    @GetMapping("/drone/{ids}")
    public ResponseEntity<List<Drone>> getDronesByIds(@PathVariable List<String> ids) {
        List<Drone> drones = droneService.getByIdIn(ids);
        return ResponseEntity.ok(drones);
    }


    // Endpoint for checking available drones for loading
    @GetMapping("/available-drones")
    public  @ResponseBody List<Drone> getAvailableDrones() {
        // Retrieve all drones from the repository
        List<Drone> drones = droneService.getAvailableDrones();

        // Filter the list of drones to only include drones in the IDLE or RETURNING state
        return drones.stream()
                .filter(d -> d.getState() == Drone.DroneState.IDLE || d.getState() == Drone.DroneState.RETURNING)
                .collect(Collectors.toList());
    }

    // Endpoint for checking the battery level for a given drone
    @GetMapping("/battery-level/{droneId}")
    public  @ResponseBody int getBatteryLevel(@PathVariable Long droneId) {
        // Retrieve the drone from the repository
        Optional<Drone> drone = droneService.getDroneById(droneId);

        // Return the battery level of the drone
        return drone.get().getBatteryCapacity();
    }

}


