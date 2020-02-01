export const listConsultingRoomsSecretary = `query ListConsultingRooms(
  $filter: ModelConsultingRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listConsultingRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      doctor {
        id
        name
        username
        email
        speciality
        sex
        image
      }
      secretary
      location {
        id
        name
      }
    }
    nextToken
  }
}
`;

export const listMedicalAppointmentReports = `query listMedicalAppointments(
  $filter: ModelMedicalAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedicalAppointments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
    }
  }
}`;

export const listMedicalAppointments = `query listMedicalAppointments(
  $filter: ModelMedicalAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedicalAppointments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      location {
        id
        name
      }
      doctor {
        id
        name
        username
        email
        speciality
        sex
      }
      doctorname
      patient {
        id
        name
        username
        email
        phone
        phone_id
      }
      rejection {
        items {
          id
          description
          doctor
          secretary
          patient
          createdAt
        }
        nextToken
      }
      cancelation {
        id
        description
      }
      notification {
        items {
          id
          state
          doctor
          secretary
          patient
          createdAt
        }
        nextToken
      }
      confirmation {
        id
      }
      secretary
      details
      date_created
      date_of_medical_appointment
      state
      position
      consult_cost
      read_secretary
      read_company
      createdAt
    }
    nextToken
  }
}
`;

export const getMedicalConsultation = /* GraphQL */ `
  query GetMedicalConsultation($id: ID!) {
    getMedicalConsultation(id: $id) {
      id
      patient {
        id
        name
        username
        email
        phone
        weight
        height
        birthdate
        patientHistory {
          id
          nonPathologicalHistory {
            id
            alcohol {
              id
              active
              frequency
              comment
            }
            smoking {
              id
              active
              frequency
              comment
            }
            drugs {
              id
              active
              frequency
              comment
            }
            immunizations {
              id
              active
              frequency
              comment
            }
          }
          pathologicalHistory {
            id
            surgicalInterventions {
              nextToken
            }
            patientMedications {
              nextToken
            }
            patientAllergies {
              nextToken
            }
          }
          familyHistory {
            id
            father {
              id
              alive
              relationship
              comment
            }
            mother {
              id
              alive
              relationship
              comment
            }
            brothers {
              id
              alive
              relationship
              comment
            }
            grandfather {
              id
              alive
              relationship
              comment
            }
            grandmother {
              id
              alive
              relationship
              comment
            }
            other {
              id
              alive
              relationship
              comment
            }
          }
        }
      }
      postConsultationsActivity {
        id
        medicalpres {
          nextToken
        }
        medicalAnalysis {
          nextToken
        }
        surgicalIntervention {
          nextToken
        }
      }
      medicalHistory {
        id
        reason
        physicalExploration {
          id
          general_exploration
          doctor
          secretary
          patient
        }
      }
      createdAt
    }
  }
`;