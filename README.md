# Drone Dispatch Controller

This project is a Spring Boot application that provides a REST API for communicating with a fleet of drones. The API allows clients to register drones, load medication onto drones, retrieve information about loaded medication and available drones, and check the battery level of a drone.

## Requirements

- Java 8 or later
- Maven 3.6.0 or later

## Building the Project

To build the project, run the following command from the project's root directory:

mvn clean package

This will compile the project, run the tests, and create a JAR file for the application in the `target` directory.

## Running the Application

To run the application, use the following command:

java -jar target/drone-dispatch.jar (PS: Jar File not ready at the moment)

This will start the Spring Boot application and make the API available at `http://localhost:8080/api`.

## Testing the Application

To run the tests for the application, use the following command:

mvn test


This will run all of the tests for the project and generate a test report in the `target/surefire-reports` directory.

## Using the API

The API provides the following endpoints for interacting with the drones:

- `POST /register` - Register a new drone. The request body should include the serial number, model, weight limit, battery capacity, and state of the drone.
- `POST /load/{droneId}` - Load medication onto a drone. The request body should include a list of medication items to load onto the drone.
- `GET /medication/{droneId}` - Get a list of the medication that is loaded onto a drone.
- `GET /available` - Get a list of the drones that are currently available for loading.
- `GET /battery-level/{droneId}` - Get the battery level of a drone.
