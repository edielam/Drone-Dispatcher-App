import { gql } from '@apollo/client';

export const GET_DRONES = gql`
  query GetDrones {
    drones {
      serialNumber
      model
      weightLimit
      batteryCapacity
      state
      departureTime
      arrivalTime
    }
  }
`;

export const GET_MEDICATIONS = gql`
  query GetMedications {
    medications {
      name
      weight
      code
      image
    }
  }
`;
