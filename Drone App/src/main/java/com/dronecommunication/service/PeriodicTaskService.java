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