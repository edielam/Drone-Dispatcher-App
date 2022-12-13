package com.dronecommunication.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;


@Entity
@Table(name = "medication")
public class Medication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, length = 100)
    @Pattern(regexp = "^[a-zA-Z\\d-_]*$")
    private String name;

    @Column(name = "weight", nullable = false)
    private Double weight;

    @Column(name = "code", nullable = false, length = 10)
    @Pattern(regexp = "^[A-Z_\\d]*$")
    private String code;

    @Column(name = "image", nullable = true)
    @Lob
    private byte[] image;

    @ManyToOne
    @JoinColumn(name = "drone_id")
    private Drone drone;

    // Default constructor is required by Hibernate
    public Medication() {}

    public Medication(String name, Double weight, String code) {
        this.name = name;
        this.weight = weight;
        this.code = code;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Drone getDrone() {
        return drone;
    }

    public void setDrone(Drone drone) {
        this.drone = drone;
    }
}
