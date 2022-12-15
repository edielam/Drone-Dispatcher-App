package com.dronecommunication.repository;

import com.dronecommunication.model.Drone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DroneRepository extends JpaRepository<Drone, Long> {
    List<Drone> findByState(Drone.DroneState IDLE);

    List<Drone> findByIdIn(List<String> ids);;

    Optional<Drone> findBySerialNumber(String serialNumber);
}

