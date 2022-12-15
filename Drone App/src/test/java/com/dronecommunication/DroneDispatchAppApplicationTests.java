package com.dronecommunication;

import com.dronecommunication.model.Drone;
import com.dronecommunication.model.Medication;
import com.dronecommunication.repository.DroneRepository;
import com.dronecommunication.service.DroneService;
import jakarta.validation.ValidationException;
import org.junit.jupiter.api.Test;
import org.mockito.AdditionalAnswers;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
class DroneDispatchAppApplicationTests {

	@Test
	void contextLoads() {
	}

	@Mock
	private DroneRepository droneRepository;
	@Autowired
	private DroneService droneService;

	List<Drone> drones = Arrays.asList(
			new Drone("SN123", Drone.Model.LIGHT_WEIGHT, 100.0, 40, Drone.DroneState.LOADING, Arrays.asList(
					new Medication("B705", "Naproxen", 50.0, "https://www.drugs.com/images/pills/fio/IPL01901/naproxen.JPG")
			)),
			new Drone("SN150", Drone.Model.MIDDLE_WEIGHT, 200.0, 70, Drone.DroneState.LOADED, Collections.emptyList()),
			new Drone("SN170", Drone.Model.MIDDLE_WEIGHT, 200.0, 20, Drone.DroneState.LOADING, Collections.emptyList())
	);

	@Test
	void addMedicationsInvalidStateTest() {
		when(droneRepository.findBySerialNumber(drones.get(1).getSerialNumber())).thenReturn(drones.stream().filter(droneDAO -> droneDAO.getSerialNumber().equals(drones.get(1).getSerialNumber())).findFirst());

		assertThrows(ValidationException.class, () -> {
			droneService.loadMedications(drones.get(1).getSerialNumber(), Arrays.asList(new Medication("A", "A", 100.0, "A")));
		});
	}


	@Test
	void addMedicationsLowBatteryLevelTest() {
		when(droneRepository.findBySerialNumber(drones.get(2).getSerialNumber())).thenReturn(drones.stream().filter(droneDAO -> droneDAO.getSerialNumber().equals(drones.get(2).getSerialNumber())).findFirst());

		assertThrows(ValidationException.class, () -> droneService.loadMedications(drones.get(2).getSerialNumber(), Arrays.asList(new Medication("A", "A", 100.0, "A"))));
	}

	@Test
	void registerDrone() {
		when(droneRepository.save(any(Drone.class))).thenAnswer(AdditionalAnswers.returnsFirstArg());

		Drone saved = droneService.registerDrone(new Drone("SN123", Drone.Model.MIDDLE_WEIGHT, 500.0, 100, Drone.DroneState.LOADING));
		assertEquals("SN123", saved.getSerialNumber());
		assertEquals(Drone.Model.MIDDLE_WEIGHT, saved.getModel());
		assertEquals(500.0, saved.getWeightLimit());
		assertEquals(100.0, saved.getBatteryCapacity());
		assertEquals(Drone.DroneState.LOADING, saved.getState());
	}


}
// Drone("123", Drone.Model.LIGHT_WEIGHT, 100.0, 75, Drone.DroneState.IDLE);