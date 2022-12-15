package com.dronecommunication.service;

import com.dronecommunication.model.Drone;
import com.dronecommunication.model.Medication;
import com.dronecommunication.repository.DroneRepository;
import com.dronecommunication.repository.MedicationRepository;
import jakarta.persistence.LockModeType;
import jakarta.validation.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DroneService {

    @Autowired
    private DroneRepository droneRepository;

    @Autowired
    private  MedicationRepository medicationRepository;

    public List<Drone> getAllDrones() {
        return droneRepository.findAll();
    }

    public Optional<Drone> getDroneById(long id) {
        return droneRepository.findById(id);
    }

    public Drone registerDrone(Drone drone) {
        drone.setState(Drone.DroneState.LOADING);
        return droneRepository.save(drone);
    }

    public void updateDrone(Optional<Drone> drone) {
        droneRepository.save(drone.get());
    }

    public void deleteDrone(long id) {
        droneRepository.deleteById(id);
    }

    public List<Drone> getAvailableDrones() {
        // Retrieve all drones from the repository
        List<Drone> drones = droneRepository.findAll();

        // Filter the list of drones to only include drones in the IDLE or RETURNING state
        return drones.stream()
                .filter(d -> d.getState() == Drone.DroneState.IDLE || d.getState() == Drone.DroneState.RETURNING)
                .collect(Collectors.toList());
    }
    @Transactional(isolation = Isolation.READ_COMMITTED)
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    public List<Medication> loadMedications(String droneSerialNumber, List<Medication> medications) {

        //List<Medication> medicationDAOS = medicationMapper.mapListIn(medications);

        Optional<Drone> droneOptional = droneRepository.findBySerialNumber(droneSerialNumber);
        if (droneOptional.isPresent()) {
            Drone drone = droneOptional.get();

            //validate(medications, drone);

            drone.getMedications().addAll(medications);
            drone.setState(Drone.DroneState.LOADED);
            Drone savedDrone = droneRepository.saveAndFlush(drone);
            return savedDrone.getMedications();
        } else {
            throw new ValidationException("Specified drone is not found");
        }
    }

    public Optional<Drone> getDroneBySerialNumber(String serialNumber) {
        Optional<Drone> drone = droneRepository.findBySerialNumber(serialNumber);
        return drone;
    }

    public List<Medication> getLoadedMedication(String serialNumber) {
        Optional<Drone> drone = droneRepository.findBySerialNumber(serialNumber);
        return drone.get().getMedications();
    }


    public List<Drone> getByIdIn(List<String> ids) {
        return droneRepository.findByIdIn(ids);
    }
}
