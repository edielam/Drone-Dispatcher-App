package com.dronecommunication.repository;

import com.dronecommunication.model.Drone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DroneRepository extends JpaRepository<Drone, Long> {
    List<Drone> findByState(Drone.DroneState IDLE);
}

