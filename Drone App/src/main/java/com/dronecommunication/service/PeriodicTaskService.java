package com.dronecommunication.service;

import com.dronecommunication.model.Drone;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;


@Configuration
@EnableScheduling
public class PeriodicTaskService {

    private final Logger logger = LoggerFactory.getLogger("drone.battery-capacity");

    private DroneService droneService;

    @Autowired
    public void setDroneRepository(DroneService droneService) {
        this.droneService = droneService;
    }

    @Scheduled(fixedDelayString = "${drone-battery-check-interval-ms}")
    private void checkBatteryLevels() {
        for (Drone drone : droneService.getAllDrones()) {
            logger.info("Battery Capacity of drone {}: {}%", drone.getSerialNumber(), drone.getBatteryCapacity());
        }
    }
}
// In this implementation, the PeriodicTaskService class has a
// checkBatteryLevels method that is annotated with @Scheduled to
//  indicate that it should be executed periodically according to the
//  schedule defined in the application.properties file. The method
//  uses the DroneService to retrieve a list of all the drones, and
//  then iterates over the list to log the battery level for each drone.
