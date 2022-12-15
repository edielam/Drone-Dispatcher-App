package com.dronecommunication.model;

import com.dronecommunication.components.AbstractEntity;
import jakarta.persistence.*;


@Entity
@Table(name = "DB_MEDICATION")
public class Medication extends AbstractEntity {
    @Column(name = "CODE", unique = true, nullable = false)
    private String code;
    @Column(name = "NAME")
    private String name;
    @Column(name = "WEIGHT")
    private Double weight;

    @Column(name = "IMAGE_URL")
    private String imageURL;

    public Medication() {
    }

    public Medication(String code, String name, Double weight, String imageURL) {
        this.code = code;
        this.name = name;
        this.weight = weight;
        this.imageURL = imageURL;
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

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
}


//
//@Entity
//@Table(name = "MEDICATION")
//public class Medication {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name = "NAME", nullable = false, length = 100)
//    @Pattern(regexp = "^[a-zA-Z\\d-_]*$")
//    private String name;
//
//    @Column(name = "WEIGHT", nullable = false)
//    private Double weight;
//
//    @Column(name = "CODE", nullable = false, length = 10)
//    @Pattern(regexp = "^[A-Z_\\d]*$")
//    private String code;
//
//    @Column(name = "IMAGE_URL", nullable = true)
//    private String image;
//
//
//    // Default constructor is required by Hibernate
//    public Medication() {}
//
//    public Medication(String name, Double weight, String code) {
//        this.name = name;
//        this.weight = weight;
//        this.code = code;
//    }
//
//    public Medication(String name, Double weight, String code, String image) {
//        this.name = name;
//        this.weight = weight;
//        this.code = code;
//        this.image = image;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public Double getWeight() {
//        return weight;
//    }
//
//    public void setWeight(Double weight) {
//        this.weight = weight;
//    }
//
//    public String getCode() {
//        return code;
//    }
//
//    public void setCode(String code) {
//        this.code = code;
//    }
//
//    public String getImage() {
//        return image;
//    }
//
//    public void setImage(String image) {
//        this.image = image;
//    }
//
//    //    public Drone getDrone() {
////        return DRONE;
////    }
////
////    public void setDrone(Drone drone) {
////        this.DRONE = drone;
////    }
//}
