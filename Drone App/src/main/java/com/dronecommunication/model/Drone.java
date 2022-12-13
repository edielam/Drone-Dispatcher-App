package com.dronecommunication.model;

import jakarta.persistence.*;

import java.util.List;
@Entity
@Table(name = "drones")
public class Drone {
    public enum DroneState {
        IDLE, LOADING, LOADED, DELIVERING, DELIVERED, RETURNING
    }
    //    public enum Model {
//        LIGHTWEIGHT, MIDDLEWEIGHT, CRUISERWEIGHT, HEAVYWEIGHT
//    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "serial_number", nullable = false, length = 100)
    private String serialNumber;
    @Column(name = "model", nullable = false, length = 50)
    //@Enumerated(EnumType.STRING)
    private String model;
    @Column(name = "weight_limit", nullable = false)
    private int weightLimit;
    @Column(name = "battery_capacity", nullable = false)
    private int batteryCapacity;
    @Column(name = "state", nullable = false)
    @Enumerated(EnumType.STRING)
    private DroneState state;
    @OneToMany(mappedBy = "drone", cascade = CascadeType.ALL)
    private List<Medication> medications;

    public Drone() {}

    public Drone(String serialNumber, String model, int weightLimit, int batteryCapacity, DroneState state) {
        this.serialNumber = serialNumber;
        this.model = model;
        this.weightLimit = weightLimit;
        this.batteryCapacity = batteryCapacity;
        this.state = state;
    }

    public Drone(String serialNumber, String model, int weightLimit, int batteryCapacity, DroneState state, List<Medication> medications) {
        this.serialNumber = serialNumber;
        this.model = model;
        this.weightLimit = weightLimit;
        this.batteryCapacity = batteryCapacity;
        this.state = state;
        this.medications = medications;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getWeightLimit() {
        return weightLimit;
    }

    public void setWeightLimit(int weightLimit) {
        this.weightLimit = weightLimit;
    }

    public int getBatteryCapacity() {
        return batteryCapacity;
    }

    public void setBatteryCapacity(int batteryCapacity) {
        this.batteryCapacity = batteryCapacity;
    }

    public DroneState getState() {
        return state;
    }

    public void setState(DroneState state) {
        this.state = state;
    }

    public List<Medication> getMedications() {
        return medications;
    }

    public void setMedications(List<Medication> medications) {
        this.medications = medications;
    }
}
