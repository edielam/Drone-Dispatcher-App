//package com.dronecommunication.controller;
//
//public class tryClass {
//}
//    private DroneService droneService;
//
//    public DroneController(DroneService droneService) {
//        this.droneService = droneService;
//    }
//
//    @PostMapping
//    public void registerDrone(@RequestBody Drone drone) {
//        droneService.registerDrone(drone);
//    }
//
//    @PutMapping("/{droneId}/medications")
//    public void loadMedications(@PathVariable String droneId, @RequestBody List<Medication> medications) {
//        droneService.loadMedications(droneId, medications);
//    }
//
//    @GetMapping("/{droneId}/medications")
//    public List<Medication> getLoadedMedications(@PathVariable String droneId) {
//        return droneService.getLoadedMedications(droneId);
//    }
//
//    @GetMapping
//    public List<Drone> getAvailableDrones() {
//        return droneService.getAvailableDrones();
//    }
//
//    @GetMapping("/{droneId}/battery-level")
//    public int getDroneBatteryLevel(@PathVariable String droneId) {
//        return droneService.getDroneBatteryLevel(droneId);
//    }
//
//
//
//    // other methods omitted
//
//    public void loadMedications(String droneId, List<Medication> medications) {
//        Drone drone = getDroneById(droneId);
//        if (drone.getState() == DroneState.LOADING && drone.getBatteryCapacity() < 25) {
//            throw new IllegalStateException("Cannot load medications: drone is in LOADING state and has low battery capacity");
//        }
//        int totalMedicationWeight = medications.stream().mapToInt(Medication::getWeight).sum();
//        if (totalMedicationWeight > drone.getWeightLimit()) {
//            throw new IllegalArgumentException("Cannot load medications: total weight exceeds drone weight limit");
//        }
//        drone.setState(DroneState.LOADING);
//        drone.setLoadedMedications(medications);
//    }
//
//@Service
//public class DroneService {
//
//    // Inject the DroneRepository and MedicationRepository dependencies
//    @Autowired
//    private DroneRepository droneRepository;
//    @Autowired
//    private MedicationRepository medicationRepository;
//
//    public void loadMedications(String serialNumber, List<Medication> medications) {
//        // Retrieve the Drone object with the given serial number
//        Optional<Drone> optionalDrone = droneRepository.findBySerialNumber(serialNumber);
//        if (!optionalDrone.isPresent()) {
//            throw new DroneNotFoundException("Drone with serial number " + serialNumber + " not found");
//        }
//        Drone drone = optionalDrone.get();
//
//        // Calculate the total weight of the medications
//        int totalWeight = 0;
//        for (Medication medication : medications) {
//            totalWeight += medication.getWeight();
//        }
//
//        // Check if the total weight of the medications is less than or equal to the weight limit of the drone
//        if (totalWeight > drone.getWeightLimit()) {
//            throw new InvalidLoadException("Total weight of medications exceeds drone's weight limit");
//        }
//
//        // Check if the battery capacity of the drone is greater than or equal to 25%
//        if (drone.getBatteryCapacity() < 25) {
//            throw new InvalidLoadException("Drone's battery capacity is below 25%");
//        }
//
//        // Insert the medications into the database
//        medicationRepository.saveAll(medications);
//
//        // Update the Drone object to reflect that it is now in the LOADING state
//        drone.setState(DroneState.LOADING);
//        droneRepository.save(drone);
//    }
//}
