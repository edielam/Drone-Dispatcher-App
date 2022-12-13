package com.dronecommunication.controller;

import com.dronecommunication.model.Drone;
import com.dronecommunication.model.Medication;
import com.dronecommunication.service.DroneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/drones")
public class DroneController {

    @Autowired
    private DroneService droneService;

    @GetMapping
    public List<Drone> getAllDrones() {
        return droneService.getAllDrones();
    }

    @GetMapping("/{id}")
    public Optional<Drone> getDroneById(@PathVariable long id) {
        return droneService.getDroneById(id);
    }

    @PostMapping("/register")
    public Drone registerDrone(@RequestBody Drone drone) {
        return droneService.registerDrone(drone);
    }

    @DeleteMapping("/{id}")
    public void deleteDrone(@PathVariable long id) {
        droneService.deleteDrone(id);
    }

    @GetMapping("/available")
    public List<Drone> getAvailableDrones() {
        return droneService.getAvailableDrones();
    }

    @GetMapping("/loaded-medication/{droneId}")
    public  @ResponseBody List<Medication> getLoadedMedication(@PathVariable Long droneId){
        return droneService.getLoadedMedication(droneId);
    }

    @PostMapping("/load")
    public void loadDrone(@RequestBody Drone drone, @RequestBody List<Medication> medications) {
        droneService.loadDrone(drone, medications);
    }
}
