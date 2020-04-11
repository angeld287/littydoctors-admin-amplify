/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConsultingRoom = /* GraphQL */ `
  mutation CreateConsultingRoom(
    $input: CreateConsultingRoomInput!
    $condition: ModelConsultingRoomConditionInput
  ) {
    createConsultingRoom(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        speciality {
          id
          name
          code
          owner
        }
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      secretary
      location {
        id
        name
        owner
      }
      owner
    }
  }
`;
export const updateConsultingRoom = /* GraphQL */ `
  mutation UpdateConsultingRoom(
    $input: UpdateConsultingRoomInput!
    $condition: ModelConsultingRoomConditionInput
  ) {
    updateConsultingRoom(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        speciality {
          id
          name
          code
          owner
        }
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      secretary
      location {
        id
        name
        owner
      }
      owner
    }
  }
`;
export const deleteConsultingRoom = /* GraphQL */ `
  mutation DeleteConsultingRoom(
    $input: DeleteConsultingRoomInput!
    $condition: ModelConsultingRoomConditionInput
  ) {
    deleteConsultingRoom(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        speciality {
          id
          name
          code
          owner
        }
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      secretary
      location {
        id
        name
        owner
      }
      owner
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      name
      owner
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      name
      owner
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      name
      owner
    }
  }
`;
export const createDoctor = /* GraphQL */ `
  mutation CreateDoctor(
    $input: CreateDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    createDoctor(input: $input, condition: $condition) {
      id
      name
      username
      email
      speciality {
        id
        name
        code
        owner
      }
      sex
      consultingroom {
        id
        doctor {
          id
          name
          username
          email
          sex
          image
          owner
        }
        secretary
        location {
          id
          name
          owner
        }
        owner
      }
      image
      owner
    }
  }
`;
export const updateDoctor = /* GraphQL */ `
  mutation UpdateDoctor(
    $input: UpdateDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    updateDoctor(input: $input, condition: $condition) {
      id
      name
      username
      email
      speciality {
        id
        name
        code
        owner
      }
      sex
      consultingroom {
        id
        doctor {
          id
          name
          username
          email
          sex
          image
          owner
        }
        secretary
        location {
          id
          name
          owner
        }
        owner
      }
      image
      owner
    }
  }
`;
export const deleteDoctor = /* GraphQL */ `
  mutation DeleteDoctor(
    $input: DeleteDoctorInput!
    $condition: ModelDoctorConditionInput
  ) {
    deleteDoctor(input: $input, condition: $condition) {
      id
      name
      username
      email
      speciality {
        id
        name
        code
        owner
      }
      sex
      consultingroom {
        id
        doctor {
          id
          name
          username
          email
          sex
          image
          owner
        }
        secretary
        location {
          id
          name
          owner
        }
        owner
      }
      image
      owner
    }
  }
`;
export const createRejection = /* GraphQL */ `
  mutation CreateRejection(
    $input: CreateRejectionInput!
    $condition: ModelRejectionConditionInput
  ) {
    createRejection(input: $input, condition: $condition) {
      id
      description
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const updateRejection = /* GraphQL */ `
  mutation UpdateRejection(
    $input: UpdateRejectionInput!
    $condition: ModelRejectionConditionInput
  ) {
    updateRejection(input: $input, condition: $condition) {
      id
      description
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const deleteRejection = /* GraphQL */ `
  mutation DeleteRejection(
    $input: DeleteRejectionInput!
    $condition: ModelRejectionConditionInput
  ) {
    deleteRejection(input: $input, condition: $condition) {
      id
      description
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const createCancelation = /* GraphQL */ `
  mutation CreateCancelation(
    $input: CreateCancelationInput!
    $condition: ModelCancelationConditionInput
  ) {
    createCancelation(input: $input, condition: $condition) {
      id
      description
      owner
    }
  }
`;
export const updateCancelation = /* GraphQL */ `
  mutation UpdateCancelation(
    $input: UpdateCancelationInput!
    $condition: ModelCancelationConditionInput
  ) {
    updateCancelation(input: $input, condition: $condition) {
      id
      description
      owner
    }
  }
`;
export const deleteCancelation = /* GraphQL */ `
  mutation DeleteCancelation(
    $input: DeleteCancelationInput!
    $condition: ModelCancelationConditionInput
  ) {
    deleteCancelation(input: $input, condition: $condition) {
      id
      description
      owner
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      state
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      state
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      state
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const createConfirmation = /* GraphQL */ `
  mutation CreateConfirmation(
    $input: CreateConfirmationInput!
    $condition: ModelConfirmationConditionInput
  ) {
    createConfirmation(input: $input, condition: $condition) {
      id
      description
      owner
    }
  }
`;
export const updateConfirmation = /* GraphQL */ `
  mutation UpdateConfirmation(
    $input: UpdateConfirmationInput!
    $condition: ModelConfirmationConditionInput
  ) {
    updateConfirmation(input: $input, condition: $condition) {
      id
      description
      owner
    }
  }
`;
export const deleteConfirmation = /* GraphQL */ `
  mutation DeleteConfirmation(
    $input: DeleteConfirmationInput!
    $condition: ModelConfirmationConditionInput
  ) {
    deleteConfirmation(input: $input, condition: $condition) {
      id
      description
      owner
    }
  }
`;
export const createMedicalAppointment = /* GraphQL */ `
  mutation CreateMedicalAppointment(
    $input: CreateMedicalAppointmentInput!
    $condition: ModelMedicalAppointmentConditionInput
  ) {
    createMedicalAppointment(input: $input, condition: $condition) {
      id
      location {
        id
        name
        owner
      }
      doctor {
        id
        name
        username
        email
        speciality {
          id
          name
          code
          owner
        }
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      doctorname
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        sex
        image
        id_card
        religion {
          id
          name
          owner
        }
        address
        marital_status
        birthdate
        patientHistory {
          nextToken
        }
        createdAt
        owner
      }
      rejection {
        items {
          id
          description
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      cancelation {
        id
        description
        owner
      }
      notification {
        items {
          id
          state
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      confirmation {
        id
        description
        owner
      }
      secretary
      details
      date_created
      date_of_medical_appointment
      state
      position
      consult_cost
      read_secretary
      read_doctor
      read_client
      createdAt
    }
  }
`;
export const updateMedicalAppointment = /* GraphQL */ `
  mutation UpdateMedicalAppointment(
    $input: UpdateMedicalAppointmentInput!
    $condition: ModelMedicalAppointmentConditionInput
  ) {
    updateMedicalAppointment(input: $input, condition: $condition) {
      id
      location {
        id
        name
        owner
      }
      doctor {
        id
        name
        username
        email
        speciality {
          id
          name
          code
          owner
        }
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      doctorname
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        sex
        image
        id_card
        religion {
          id
          name
          owner
        }
        address
        marital_status
        birthdate
        patientHistory {
          nextToken
        }
        createdAt
        owner
      }
      rejection {
        items {
          id
          description
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      cancelation {
        id
        description
        owner
      }
      notification {
        items {
          id
          state
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      confirmation {
        id
        description
        owner
      }
      secretary
      details
      date_created
      date_of_medical_appointment
      state
      position
      consult_cost
      read_secretary
      read_doctor
      read_client
      createdAt
    }
  }
`;
export const deleteMedicalAppointment = /* GraphQL */ `
  mutation DeleteMedicalAppointment(
    $input: DeleteMedicalAppointmentInput!
    $condition: ModelMedicalAppointmentConditionInput
  ) {
    deleteMedicalAppointment(input: $input, condition: $condition) {
      id
      location {
        id
        name
        owner
      }
      doctor {
        id
        name
        username
        email
        speciality {
          id
          name
          code
          owner
        }
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      doctorname
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        sex
        image
        id_card
        religion {
          id
          name
          owner
        }
        address
        marital_status
        birthdate
        patientHistory {
          nextToken
        }
        createdAt
        owner
      }
      rejection {
        items {
          id
          description
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      cancelation {
        id
        description
        owner
      }
      notification {
        items {
          id
          state
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      confirmation {
        id
        description
        owner
      }
      secretary
      details
      date_created
      date_of_medical_appointment
      state
      position
      consult_cost
      read_secretary
      read_doctor
      read_client
      createdAt
    }
  }
`;
export const createMedicalConsultation = /* GraphQL */ `
  mutation CreateMedicalConsultation(
    $input: CreateMedicalConsultationInput!
    $condition: ModelMedicalConsultationConditionInput
  ) {
    createMedicalConsultation(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        speciality {
          id
          name
          code
          owner
        }
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        sex
        image
        id_card
        religion {
          id
          name
          owner
        }
        address
        marital_status
        birthdate
        patientHistory {
          nextToken
        }
        createdAt
        owner
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
        doctor
        secretary
        patient
        createdAt
        owner
      }
      medicalHistory {
        id
        reason
        patient {
          id
          name
          username
          email
          phone
          phone_id
          weight
          height
          size
          age
          sex
          image
          id_card
          address
          marital_status
          birthdate
          createdAt
          owner
        }
        physicalExploration {
          id
          general_exploration
          doctor
          secretary
          patient
          createdAt
          owner
        }
        doctor
        secretary
        patientname
        createdAt
        owner
      }
      state
      doctorname
      secretary
      patientname
      finalizedAt
      startedAt
      createdAt
      owner
    }
  }
`;
export const updateMedicalConsultation = /* GraphQL */ `
  mutation UpdateMedicalConsultation(
    $input: UpdateMedicalConsultationInput!
    $condition: ModelMedicalConsultationConditionInput
  ) {
    updateMedicalConsultation(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        speciality {
          id
          name
          code
          owner
        }
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        sex
        image
        id_card
        religion {
          id
          name
          owner
        }
        address
        marital_status
        birthdate
        patientHistory {
          nextToken
        }
        createdAt
        owner
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
        doctor
        secretary
        patient
        createdAt
        owner
      }
      medicalHistory {
        id
        reason
        patient {
          id
          name
          username
          email
          phone
          phone_id
          weight
          height
          size
          age
          sex
          image
          id_card
          address
          marital_status
          birthdate
          createdAt
          owner
        }
        physicalExploration {
          id
          general_exploration
          doctor
          secretary
          patient
          createdAt
          owner
        }
        doctor
        secretary
        patientname
        createdAt
        owner
      }
      state
      doctorname
      secretary
      patientname
      finalizedAt
      startedAt
      createdAt
      owner
    }
  }
`;
export const deleteMedicalConsultation = /* GraphQL */ `
  mutation DeleteMedicalConsultation(
    $input: DeleteMedicalConsultationInput!
    $condition: ModelMedicalConsultationConditionInput
  ) {
    deleteMedicalConsultation(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        speciality {
          id
          name
          code
          owner
        }
        sex
        consultingroom {
          id
          secretary
          owner
        }
        image
        owner
      }
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        sex
        image
        id_card
        religion {
          id
          name
          owner
        }
        address
        marital_status
        birthdate
        patientHistory {
          nextToken
        }
        createdAt
        owner
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
        doctor
        secretary
        patient
        createdAt
        owner
      }
      medicalHistory {
        id
        reason
        patient {
          id
          name
          username
          email
          phone
          phone_id
          weight
          height
          size
          age
          sex
          image
          id_card
          address
          marital_status
          birthdate
          createdAt
          owner
        }
        physicalExploration {
          id
          general_exploration
          doctor
          secretary
          patient
          createdAt
          owner
        }
        doctor
        secretary
        patientname
        createdAt
        owner
      }
      state
      doctorname
      secretary
      patientname
      finalizedAt
      startedAt
      createdAt
      owner
    }
  }
`;
export const createMedicalHistory = /* GraphQL */ `
  mutation CreateMedicalHistory(
    $input: CreateMedicalHistoryInput!
    $condition: ModelMedicalHistoryConditionInput
  ) {
    createMedicalHistory(input: $input, condition: $condition) {
      id
      reason
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        sex
        image
        id_card
        religion {
          id
          name
          owner
        }
        address
        marital_status
        birthdate
        patientHistory {
          nextToken
        }
        createdAt
        owner
      }
      physicalExploration {
        id
        general_exploration
        vitalsign {
          id
          blood_pressure
          breathing
          pulse
          temperature
          doctor
          secretary
          patient
          createdAt
          owner
        }
        regionalExploration {
          id
          head
          neck
          thorax
          abdomen
          members
          genitals
          others
          doctor
          secretary
          patient
          createdAt
          owner
        }
        doctor
        secretary
        patient
        createdAt
        owner
      }
      doctor
      secretary
      patientname
      createdAt
      owner
    }
  }
`;
export const updateMedicalHistory = /* GraphQL */ `
  mutation UpdateMedicalHistory(
    $input: UpdateMedicalHistoryInput!
    $condition: ModelMedicalHistoryConditionInput
  ) {
    updateMedicalHistory(input: $input, condition: $condition) {
      id
      reason
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        sex
        image
        id_card
        religion {
          id
          name
          owner
        }
        address
        marital_status
        birthdate
        patientHistory {
          nextToken
        }
        createdAt
        owner
      }
      physicalExploration {
        id
        general_exploration
        vitalsign {
          id
          blood_pressure
          breathing
          pulse
          temperature
          doctor
          secretary
          patient
          createdAt
          owner
        }
        regionalExploration {
          id
          head
          neck
          thorax
          abdomen
          members
          genitals
          others
          doctor
          secretary
          patient
          createdAt
          owner
        }
        doctor
        secretary
        patient
        createdAt
        owner
      }
      doctor
      secretary
      patientname
      createdAt
      owner
    }
  }
`;
export const deleteMedicalHistory = /* GraphQL */ `
  mutation DeleteMedicalHistory(
    $input: DeleteMedicalHistoryInput!
    $condition: ModelMedicalHistoryConditionInput
  ) {
    deleteMedicalHistory(input: $input, condition: $condition) {
      id
      reason
      patient {
        id
        name
        username
        email
        phone
        phone_id
        weight
        height
        size
        age
        sex
        image
        id_card
        religion {
          id
          name
          owner
        }
        address
        marital_status
        birthdate
        patientHistory {
          nextToken
        }
        createdAt
        owner
      }
      physicalExploration {
        id
        general_exploration
        vitalsign {
          id
          blood_pressure
          breathing
          pulse
          temperature
          doctor
          secretary
          patient
          createdAt
          owner
        }
        regionalExploration {
          id
          head
          neck
          thorax
          abdomen
          members
          genitals
          others
          doctor
          secretary
          patient
          createdAt
          owner
        }
        doctor
        secretary
        patient
        createdAt
        owner
      }
      doctor
      secretary
      patientname
      createdAt
      owner
    }
  }
`;
export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
      id
      name
      username
      email
      phone
      phone_id
      weight
      height
      size
      age
      sex
      image
      id_card
      religion {
        id
        name
        owner
      }
      address
      marital_status
      birthdate
      patientHistory {
        items {
          id
          createdAt
          owner
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
      id
      name
      username
      email
      phone
      phone_id
      weight
      height
      size
      age
      sex
      image
      id_card
      religion {
        id
        name
        owner
      }
      address
      marital_status
      birthdate
      patientHistory {
        items {
          id
          createdAt
          owner
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
      id
      name
      username
      email
      phone
      phone_id
      weight
      height
      size
      age
      sex
      image
      id_card
      religion {
        id
        name
        owner
      }
      address
      marital_status
      birthdate
      patientHistory {
        items {
          id
          createdAt
          owner
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const createReligion = /* GraphQL */ `
  mutation CreateReligion(
    $input: CreateReligionInput!
    $condition: ModelReligionConditionInput
  ) {
    createReligion(input: $input, condition: $condition) {
      id
      name
      owner
    }
  }
`;
export const updateReligion = /* GraphQL */ `
  mutation UpdateReligion(
    $input: UpdateReligionInput!
    $condition: ModelReligionConditionInput
  ) {
    updateReligion(input: $input, condition: $condition) {
      id
      name
      owner
    }
  }
`;
export const deleteReligion = /* GraphQL */ `
  mutation DeleteReligion(
    $input: DeleteReligionInput!
    $condition: ModelReligionConditionInput
  ) {
    deleteReligion(input: $input, condition: $condition) {
      id
      name
      owner
    }
  }
`;
export const createSpecialty = /* GraphQL */ `
  mutation CreateSpecialty(
    $input: CreateSpecialtyInput!
    $condition: ModelSpecialtyConditionInput
  ) {
    createSpecialty(input: $input, condition: $condition) {
      id
      name
      code
      owner
    }
  }
`;
export const updateSpecialty = /* GraphQL */ `
  mutation UpdateSpecialty(
    $input: UpdateSpecialtyInput!
    $condition: ModelSpecialtyConditionInput
  ) {
    updateSpecialty(input: $input, condition: $condition) {
      id
      name
      code
      owner
    }
  }
`;
export const deleteSpecialty = /* GraphQL */ `
  mutation DeleteSpecialty(
    $input: DeleteSpecialtyInput!
    $condition: ModelSpecialtyConditionInput
  ) {
    deleteSpecialty(input: $input, condition: $condition) {
      id
      name
      code
      owner
    }
  }
`;
export const createPatientHistory = /* GraphQL */ `
  mutation CreatePatientHistory(
    $input: CreatePatientHistoryInput!
    $condition: ModelPatientHistoryConditionInput
  ) {
    createPatientHistory(input: $input, condition: $condition) {
      id
      nonPathologicalHistory {
        items {
          id
          active
          frequency
          comment
          createdAt
          owner
        }
        nextToken
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
        createdAt
        owner
      }
      familyHistory {
        items {
          id
          alive
          comment
          createdAt
          owner
        }
        nextToken
      }
      gynecoObstetricHistory {
        id
        menarche
        sexual_development
        menstrual_rhythm
        sex_life
        deliveries
        abortions
        caesarean_sections
        contraceptive_method
        createdAt
        owner
      }
      createdAt
      owner
    }
  }
`;
export const updatePatientHistory = /* GraphQL */ `
  mutation UpdatePatientHistory(
    $input: UpdatePatientHistoryInput!
    $condition: ModelPatientHistoryConditionInput
  ) {
    updatePatientHistory(input: $input, condition: $condition) {
      id
      nonPathologicalHistory {
        items {
          id
          active
          frequency
          comment
          createdAt
          owner
        }
        nextToken
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
        createdAt
        owner
      }
      familyHistory {
        items {
          id
          alive
          comment
          createdAt
          owner
        }
        nextToken
      }
      gynecoObstetricHistory {
        id
        menarche
        sexual_development
        menstrual_rhythm
        sex_life
        deliveries
        abortions
        caesarean_sections
        contraceptive_method
        createdAt
        owner
      }
      createdAt
      owner
    }
  }
`;
export const deletePatientHistory = /* GraphQL */ `
  mutation DeletePatientHistory(
    $input: DeletePatientHistoryInput!
    $condition: ModelPatientHistoryConditionInput
  ) {
    deletePatientHistory(input: $input, condition: $condition) {
      id
      nonPathologicalHistory {
        items {
          id
          active
          frequency
          comment
          createdAt
          owner
        }
        nextToken
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
        createdAt
        owner
      }
      familyHistory {
        items {
          id
          alive
          comment
          createdAt
          owner
        }
        nextToken
      }
      gynecoObstetricHistory {
        id
        menarche
        sexual_development
        menstrual_rhythm
        sex_life
        deliveries
        abortions
        caesarean_sections
        contraceptive_method
        createdAt
        owner
      }
      createdAt
      owner
    }
  }
`;
export const createNonPathologicalHistory = /* GraphQL */ `
  mutation CreateNonPathologicalHistory(
    $input: CreateNonPathologicalHistoryInput!
    $condition: ModelNonPathologicalHistoryConditionInput
  ) {
    createNonPathologicalHistory(input: $input, condition: $condition) {
      id
      type {
        id
        name
        description
        module
        createdAt
        owner
      }
      active
      frequency
      comment
      createdAt
      owner
    }
  }
`;
export const updateNonPathologicalHistory = /* GraphQL */ `
  mutation UpdateNonPathologicalHistory(
    $input: UpdateNonPathologicalHistoryInput!
    $condition: ModelNonPathologicalHistoryConditionInput
  ) {
    updateNonPathologicalHistory(input: $input, condition: $condition) {
      id
      type {
        id
        name
        description
        module
        createdAt
        owner
      }
      active
      frequency
      comment
      createdAt
      owner
    }
  }
`;
export const deleteNonPathologicalHistory = /* GraphQL */ `
  mutation DeleteNonPathologicalHistory(
    $input: DeleteNonPathologicalHistoryInput!
    $condition: ModelNonPathologicalHistoryConditionInput
  ) {
    deleteNonPathologicalHistory(input: $input, condition: $condition) {
      id
      type {
        id
        name
        description
        module
        createdAt
        owner
      }
      active
      frequency
      comment
      createdAt
      owner
    }
  }
`;
export const createPathologicalHistory = /* GraphQL */ `
  mutation CreatePathologicalHistory(
    $input: CreatePathologicalHistoryInput!
    $condition: ModelPathologicalHistoryConditionInput
  ) {
    createPathologicalHistory(input: $input, condition: $condition) {
      id
      surgicalInterventions {
        items {
          id
          date
          createdAt
        }
        nextToken
      }
      patientMedications {
        items {
          id
          drug_concentration
          createdAt
        }
        nextToken
      }
      patientAllergies {
        items {
          id
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const updatePathologicalHistory = /* GraphQL */ `
  mutation UpdatePathologicalHistory(
    $input: UpdatePathologicalHistoryInput!
    $condition: ModelPathologicalHistoryConditionInput
  ) {
    updatePathologicalHistory(input: $input, condition: $condition) {
      id
      surgicalInterventions {
        items {
          id
          date
          createdAt
        }
        nextToken
      }
      patientMedications {
        items {
          id
          drug_concentration
          createdAt
        }
        nextToken
      }
      patientAllergies {
        items {
          id
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const deletePathologicalHistory = /* GraphQL */ `
  mutation DeletePathologicalHistory(
    $input: DeletePathologicalHistoryInput!
    $condition: ModelPathologicalHistoryConditionInput
  ) {
    deletePathologicalHistory(input: $input, condition: $condition) {
      id
      surgicalInterventions {
        items {
          id
          date
          createdAt
        }
        nextToken
      }
      patientMedications {
        items {
          id
          drug_concentration
          createdAt
        }
        nextToken
      }
      patientAllergies {
        items {
          id
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const createFamilyHistory = /* GraphQL */ `
  mutation CreateFamilyHistory(
    $input: CreateFamilyHistoryInput!
    $condition: ModelFamilyHistoryConditionInput
  ) {
    createFamilyHistory(input: $input, condition: $condition) {
      id
      relationship {
        id
        name
        description
        module
        createdAt
        owner
      }
      alive
      diseases {
        items {
          id
          createdAt
        }
        nextToken
      }
      comment
      createdAt
      owner
    }
  }
`;
export const updateFamilyHistory = /* GraphQL */ `
  mutation UpdateFamilyHistory(
    $input: UpdateFamilyHistoryInput!
    $condition: ModelFamilyHistoryConditionInput
  ) {
    updateFamilyHistory(input: $input, condition: $condition) {
      id
      relationship {
        id
        name
        description
        module
        createdAt
        owner
      }
      alive
      diseases {
        items {
          id
          createdAt
        }
        nextToken
      }
      comment
      createdAt
      owner
    }
  }
`;
export const deleteFamilyHistory = /* GraphQL */ `
  mutation DeleteFamilyHistory(
    $input: DeleteFamilyHistoryInput!
    $condition: ModelFamilyHistoryConditionInput
  ) {
    deleteFamilyHistory(input: $input, condition: $condition) {
      id
      relationship {
        id
        name
        description
        module
        createdAt
        owner
      }
      alive
      diseases {
        items {
          id
          createdAt
        }
        nextToken
      }
      comment
      createdAt
      owner
    }
  }
`;
export const createFamilyDetailsDiseases = /* GraphQL */ `
  mutation CreateFamilyDetailsDiseases(
    $input: CreateFamilyDetailsDiseasesInput!
    $condition: ModelFamilyDetailsDiseasesConditionInput
  ) {
    createFamilyDetailsDiseases(input: $input, condition: $condition) {
      id
      family {
        id
        relationship {
          id
          name
          description
          module
          createdAt
          owner
        }
        alive
        diseases {
          nextToken
        }
        comment
        createdAt
        owner
      }
      diseases {
        id
        name
        description
        familyDetails {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const updateFamilyDetailsDiseases = /* GraphQL */ `
  mutation UpdateFamilyDetailsDiseases(
    $input: UpdateFamilyDetailsDiseasesInput!
    $condition: ModelFamilyDetailsDiseasesConditionInput
  ) {
    updateFamilyDetailsDiseases(input: $input, condition: $condition) {
      id
      family {
        id
        relationship {
          id
          name
          description
          module
          createdAt
          owner
        }
        alive
        diseases {
          nextToken
        }
        comment
        createdAt
        owner
      }
      diseases {
        id
        name
        description
        familyDetails {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const deleteFamilyDetailsDiseases = /* GraphQL */ `
  mutation DeleteFamilyDetailsDiseases(
    $input: DeleteFamilyDetailsDiseasesInput!
    $condition: ModelFamilyDetailsDiseasesConditionInput
  ) {
    deleteFamilyDetailsDiseases(input: $input, condition: $condition) {
      id
      family {
        id
        relationship {
          id
          name
          description
          module
          createdAt
          owner
        }
        alive
        diseases {
          nextToken
        }
        comment
        createdAt
        owner
      }
      diseases {
        id
        name
        description
        familyDetails {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const createDisease = /* GraphQL */ `
  mutation CreateDisease(
    $input: CreateDiseaseInput!
    $condition: ModelDiseaseConditionInput
  ) {
    createDisease(input: $input, condition: $condition) {
      id
      name
      description
      familyDetails {
        items {
          id
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const updateDisease = /* GraphQL */ `
  mutation UpdateDisease(
    $input: UpdateDiseaseInput!
    $condition: ModelDiseaseConditionInput
  ) {
    updateDisease(input: $input, condition: $condition) {
      id
      name
      description
      familyDetails {
        items {
          id
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const deleteDisease = /* GraphQL */ `
  mutation DeleteDisease(
    $input: DeleteDiseaseInput!
    $condition: ModelDiseaseConditionInput
  ) {
    deleteDisease(input: $input, condition: $condition) {
      id
      name
      description
      familyDetails {
        items {
          id
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const createGynecoObstetricHistory = /* GraphQL */ `
  mutation CreateGynecoObstetricHistory(
    $input: CreateGynecoObstetricHistoryInput!
    $condition: ModelGynecoObstetricHistoryConditionInput
  ) {
    createGynecoObstetricHistory(input: $input, condition: $condition) {
      id
      menarche
      sexual_development
      menstrual_rhythm
      sex_life
      deliveries
      abortions
      caesarean_sections
      contraceptive_method
      createdAt
      owner
    }
  }
`;
export const updateGynecoObstetricHistory = /* GraphQL */ `
  mutation UpdateGynecoObstetricHistory(
    $input: UpdateGynecoObstetricHistoryInput!
    $condition: ModelGynecoObstetricHistoryConditionInput
  ) {
    updateGynecoObstetricHistory(input: $input, condition: $condition) {
      id
      menarche
      sexual_development
      menstrual_rhythm
      sex_life
      deliveries
      abortions
      caesarean_sections
      contraceptive_method
      createdAt
      owner
    }
  }
`;
export const deleteGynecoObstetricHistory = /* GraphQL */ `
  mutation DeleteGynecoObstetricHistory(
    $input: DeleteGynecoObstetricHistoryInput!
    $condition: ModelGynecoObstetricHistoryConditionInput
  ) {
    deleteGynecoObstetricHistory(input: $input, condition: $condition) {
      id
      menarche
      sexual_development
      menstrual_rhythm
      sex_life
      deliveries
      abortions
      caesarean_sections
      contraceptive_method
      createdAt
      owner
    }
  }
`;
export const createAllergy = /* GraphQL */ `
  mutation CreateAllergy(
    $input: CreateAllergyInput!
    $condition: ModelAllergyConditionInput
  ) {
    createAllergy(input: $input, condition: $condition) {
      id
      name
      description
      patients {
        items {
          id
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const updateAllergy = /* GraphQL */ `
  mutation UpdateAllergy(
    $input: UpdateAllergyInput!
    $condition: ModelAllergyConditionInput
  ) {
    updateAllergy(input: $input, condition: $condition) {
      id
      name
      description
      patients {
        items {
          id
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const deleteAllergy = /* GraphQL */ `
  mutation DeleteAllergy(
    $input: DeleteAllergyInput!
    $condition: ModelAllergyConditionInput
  ) {
    deleteAllergy(input: $input, condition: $condition) {
      id
      name
      description
      patients {
        items {
          id
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const createPatientAllergies = /* GraphQL */ `
  mutation CreatePatientAllergies(
    $input: CreatePatientAllergiesInput!
    $condition: ModelPatientAllergiesConditionInput
  ) {
    createPatientAllergies(input: $input, condition: $condition) {
      id
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
        createdAt
        owner
      }
      allergies {
        id
        name
        description
        patients {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const updatePatientAllergies = /* GraphQL */ `
  mutation UpdatePatientAllergies(
    $input: UpdatePatientAllergiesInput!
    $condition: ModelPatientAllergiesConditionInput
  ) {
    updatePatientAllergies(input: $input, condition: $condition) {
      id
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
        createdAt
        owner
      }
      allergies {
        id
        name
        description
        patients {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const deletePatientAllergies = /* GraphQL */ `
  mutation DeletePatientAllergies(
    $input: DeletePatientAllergiesInput!
    $condition: ModelPatientAllergiesConditionInput
  ) {
    deletePatientAllergies(input: $input, condition: $condition) {
      id
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
        createdAt
        owner
      }
      allergies {
        id
        name
        description
        patients {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const createPatientMedications = /* GraphQL */ `
  mutation CreatePatientMedications(
    $input: CreatePatientMedicationsInput!
    $condition: ModelPatientMedicationsConditionInput
  ) {
    createPatientMedications(input: $input, condition: $condition) {
      id
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
        createdAt
        owner
      }
      medications {
        id
        name
        patients {
          nextToken
        }
        code
        drug_concentration
        chemical_composition
        createdAt
        owner
      }
      drug_concentration
      createdAt
    }
  }
`;
export const updatePatientMedications = /* GraphQL */ `
  mutation UpdatePatientMedications(
    $input: UpdatePatientMedicationsInput!
    $condition: ModelPatientMedicationsConditionInput
  ) {
    updatePatientMedications(input: $input, condition: $condition) {
      id
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
        createdAt
        owner
      }
      medications {
        id
        name
        patients {
          nextToken
        }
        code
        drug_concentration
        chemical_composition
        createdAt
        owner
      }
      drug_concentration
      createdAt
    }
  }
`;
export const deletePatientMedications = /* GraphQL */ `
  mutation DeletePatientMedications(
    $input: DeletePatientMedicationsInput!
    $condition: ModelPatientMedicationsConditionInput
  ) {
    deletePatientMedications(input: $input, condition: $condition) {
      id
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
        createdAt
        owner
      }
      medications {
        id
        name
        patients {
          nextToken
        }
        code
        drug_concentration
        chemical_composition
        createdAt
        owner
      }
      drug_concentration
      createdAt
    }
  }
`;
export const createMedicine = /* GraphQL */ `
  mutation CreateMedicine(
    $input: CreateMedicineInput!
    $condition: ModelMedicineConditionInput
  ) {
    createMedicine(input: $input, condition: $condition) {
      id
      name
      patients {
        items {
          id
          drug_concentration
          createdAt
        }
        nextToken
      }
      code
      drug_concentration
      chemical_composition
      createdAt
      owner
    }
  }
`;
export const updateMedicine = /* GraphQL */ `
  mutation UpdateMedicine(
    $input: UpdateMedicineInput!
    $condition: ModelMedicineConditionInput
  ) {
    updateMedicine(input: $input, condition: $condition) {
      id
      name
      patients {
        items {
          id
          drug_concentration
          createdAt
        }
        nextToken
      }
      code
      drug_concentration
      chemical_composition
      createdAt
      owner
    }
  }
`;
export const deleteMedicine = /* GraphQL */ `
  mutation DeleteMedicine(
    $input: DeleteMedicineInput!
    $condition: ModelMedicineConditionInput
  ) {
    deleteMedicine(input: $input, condition: $condition) {
      id
      name
      patients {
        items {
          id
          drug_concentration
          createdAt
        }
        nextToken
      }
      code
      drug_concentration
      chemical_composition
      createdAt
      owner
    }
  }
`;
export const createPostConsultationsActivity = /* GraphQL */ `
  mutation CreatePostConsultationsActivity(
    $input: CreatePostConsultationsActivityInput!
    $condition: ModelPostConsultationsActivityConditionInput
  ) {
    createPostConsultationsActivity(input: $input, condition: $condition) {
      id
      medicalpres {
        items {
          id
          date
          frequency
          duration
          comment
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      medicalAnalysis {
        items {
          id
          state
          date
          file
          createdAt
        }
        nextToken
      }
      surgicalIntervention {
        items {
          id
          state
          date
          createdAt
        }
        nextToken
      }
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const updatePostConsultationsActivity = /* GraphQL */ `
  mutation UpdatePostConsultationsActivity(
    $input: UpdatePostConsultationsActivityInput!
    $condition: ModelPostConsultationsActivityConditionInput
  ) {
    updatePostConsultationsActivity(input: $input, condition: $condition) {
      id
      medicalpres {
        items {
          id
          date
          frequency
          duration
          comment
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      medicalAnalysis {
        items {
          id
          state
          date
          file
          createdAt
        }
        nextToken
      }
      surgicalIntervention {
        items {
          id
          state
          date
          createdAt
        }
        nextToken
      }
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const deletePostConsultationsActivity = /* GraphQL */ `
  mutation DeletePostConsultationsActivity(
    $input: DeletePostConsultationsActivityInput!
    $condition: ModelPostConsultationsActivityConditionInput
  ) {
    deletePostConsultationsActivity(input: $input, condition: $condition) {
      id
      medicalpres {
        items {
          id
          date
          frequency
          duration
          comment
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      medicalAnalysis {
        items {
          id
          state
          date
          file
          createdAt
        }
        nextToken
      }
      surgicalIntervention {
        items {
          id
          state
          date
          createdAt
        }
        nextToken
      }
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const createMedicalPrescription = /* GraphQL */ `
  mutation CreateMedicalPrescription(
    $input: CreateMedicalPrescriptionInput!
    $condition: ModelMedicalPrescriptionConditionInput
  ) {
    createMedicalPrescription(input: $input, condition: $condition) {
      id
      date
      frequency
      duration
      medications {
        id
        name
        patients {
          nextToken
        }
        code
        drug_concentration
        chemical_composition
        createdAt
        owner
      }
      comment
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const updateMedicalPrescription = /* GraphQL */ `
  mutation UpdateMedicalPrescription(
    $input: UpdateMedicalPrescriptionInput!
    $condition: ModelMedicalPrescriptionConditionInput
  ) {
    updateMedicalPrescription(input: $input, condition: $condition) {
      id
      date
      frequency
      duration
      medications {
        id
        name
        patients {
          nextToken
        }
        code
        drug_concentration
        chemical_composition
        createdAt
        owner
      }
      comment
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const deleteMedicalPrescription = /* GraphQL */ `
  mutation DeleteMedicalPrescription(
    $input: DeleteMedicalPrescriptionInput!
    $condition: ModelMedicalPrescriptionConditionInput
  ) {
    deleteMedicalPrescription(input: $input, condition: $condition) {
      id
      date
      frequency
      duration
      medications {
        id
        name
        patients {
          nextToken
        }
        code
        drug_concentration
        chemical_composition
        createdAt
        owner
      }
      comment
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const createPostConsultActMedAnalysis = /* GraphQL */ `
  mutation CreatePostConsultActMedAnalysis(
    $input: CreatePostConsultActMedAnalysisInput!
    $condition: ModelPostConsultActMedAnalysisConditionInput
  ) {
    createPostConsultActMedAnalysis(input: $input, condition: $condition) {
      id
      state
      date
      results {
        items {
          id
          value
          owner
        }
        nextToken
      }
      file
      pcActivities {
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
        doctor
        secretary
        patient
        createdAt
        owner
      }
      medicalAnalysis {
        id
        name
        code
        medicalAnalysis {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const updatePostConsultActMedAnalysis = /* GraphQL */ `
  mutation UpdatePostConsultActMedAnalysis(
    $input: UpdatePostConsultActMedAnalysisInput!
    $condition: ModelPostConsultActMedAnalysisConditionInput
  ) {
    updatePostConsultActMedAnalysis(input: $input, condition: $condition) {
      id
      state
      date
      results {
        items {
          id
          value
          owner
        }
        nextToken
      }
      file
      pcActivities {
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
        doctor
        secretary
        patient
        createdAt
        owner
      }
      medicalAnalysis {
        id
        name
        code
        medicalAnalysis {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const deletePostConsultActMedAnalysis = /* GraphQL */ `
  mutation DeletePostConsultActMedAnalysis(
    $input: DeletePostConsultActMedAnalysisInput!
    $condition: ModelPostConsultActMedAnalysisConditionInput
  ) {
    deletePostConsultActMedAnalysis(input: $input, condition: $condition) {
      id
      state
      date
      results {
        items {
          id
          value
          owner
        }
        nextToken
      }
      file
      pcActivities {
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
        doctor
        secretary
        patient
        createdAt
        owner
      }
      medicalAnalysis {
        id
        name
        code
        medicalAnalysis {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const createMedicalAnalysisResults = /* GraphQL */ `
  mutation CreateMedicalAnalysisResults(
    $input: CreateMedicalAnalysisResultsInput!
    $condition: ModelMedicalAnalysisResultsConditionInput
  ) {
    createMedicalAnalysisResults(input: $input, condition: $condition) {
      id
      field {
        id
        name
        modules
        owner
      }
      value
      owner
    }
  }
`;
export const updateMedicalAnalysisResults = /* GraphQL */ `
  mutation UpdateMedicalAnalysisResults(
    $input: UpdateMedicalAnalysisResultsInput!
    $condition: ModelMedicalAnalysisResultsConditionInput
  ) {
    updateMedicalAnalysisResults(input: $input, condition: $condition) {
      id
      field {
        id
        name
        modules
        owner
      }
      value
      owner
    }
  }
`;
export const deleteMedicalAnalysisResults = /* GraphQL */ `
  mutation DeleteMedicalAnalysisResults(
    $input: DeleteMedicalAnalysisResultsInput!
    $condition: ModelMedicalAnalysisResultsConditionInput
  ) {
    deleteMedicalAnalysisResults(input: $input, condition: $condition) {
      id
      field {
        id
        name
        modules
        owner
      }
      value
      owner
    }
  }
`;
export const createField = /* GraphQL */ `
  mutation CreateField(
    $input: CreateFieldInput!
    $condition: ModelFieldConditionInput
  ) {
    createField(input: $input, condition: $condition) {
      id
      name
      modules
      owner
    }
  }
`;
export const updateField = /* GraphQL */ `
  mutation UpdateField(
    $input: UpdateFieldInput!
    $condition: ModelFieldConditionInput
  ) {
    updateField(input: $input, condition: $condition) {
      id
      name
      modules
      owner
    }
  }
`;
export const deleteField = /* GraphQL */ `
  mutation DeleteField(
    $input: DeleteFieldInput!
    $condition: ModelFieldConditionInput
  ) {
    deleteField(input: $input, condition: $condition) {
      id
      name
      modules
      owner
    }
  }
`;
export const createMedicalAnalysis = /* GraphQL */ `
  mutation CreateMedicalAnalysis(
    $input: CreateMedicalAnalysisInput!
    $condition: ModelMedicalAnalysisConditionInput
  ) {
    createMedicalAnalysis(input: $input, condition: $condition) {
      id
      name
      code
      medicalAnalysis {
        items {
          id
          state
          date
          file
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const updateMedicalAnalysis = /* GraphQL */ `
  mutation UpdateMedicalAnalysis(
    $input: UpdateMedicalAnalysisInput!
    $condition: ModelMedicalAnalysisConditionInput
  ) {
    updateMedicalAnalysis(input: $input, condition: $condition) {
      id
      name
      code
      medicalAnalysis {
        items {
          id
          state
          date
          file
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const deleteMedicalAnalysis = /* GraphQL */ `
  mutation DeleteMedicalAnalysis(
    $input: DeleteMedicalAnalysisInput!
    $condition: ModelMedicalAnalysisConditionInput
  ) {
    deleteMedicalAnalysis(input: $input, condition: $condition) {
      id
      name
      code
      medicalAnalysis {
        items {
          id
          state
          date
          file
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const createPostConsultActSurgicalInt = /* GraphQL */ `
  mutation CreatePostConsultActSurgicalInt(
    $input: CreatePostConsultActSurgicalIntInput!
    $condition: ModelPostConsultActSurgicalIntConditionInput
  ) {
    createPostConsultActSurgicalInt(input: $input, condition: $condition) {
      id
      state
      date
      pcActivities {
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
        doctor
        secretary
        patient
        createdAt
        owner
      }
      surgicalIntervention {
        id
        name
        description
        surgicalIntervention {
          nextToken
        }
        pathologicalHistory {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const updatePostConsultActSurgicalInt = /* GraphQL */ `
  mutation UpdatePostConsultActSurgicalInt(
    $input: UpdatePostConsultActSurgicalIntInput!
    $condition: ModelPostConsultActSurgicalIntConditionInput
  ) {
    updatePostConsultActSurgicalInt(input: $input, condition: $condition) {
      id
      state
      date
      pcActivities {
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
        doctor
        secretary
        patient
        createdAt
        owner
      }
      surgicalIntervention {
        id
        name
        description
        surgicalIntervention {
          nextToken
        }
        pathologicalHistory {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const deletePostConsultActSurgicalInt = /* GraphQL */ `
  mutation DeletePostConsultActSurgicalInt(
    $input: DeletePostConsultActSurgicalIntInput!
    $condition: ModelPostConsultActSurgicalIntConditionInput
  ) {
    deletePostConsultActSurgicalInt(input: $input, condition: $condition) {
      id
      state
      date
      pcActivities {
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
        doctor
        secretary
        patient
        createdAt
        owner
      }
      surgicalIntervention {
        id
        name
        description
        surgicalIntervention {
          nextToken
        }
        pathologicalHistory {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const createPathologicalHistorySurgicalInt = /* GraphQL */ `
  mutation CreatePathologicalHistorySurgicalInt(
    $input: CreatePathologicalHistorySurgicalIntInput!
    $condition: ModelPathologicalHistorySurgicalIntConditionInput
  ) {
    createPathologicalHistorySurgicalInt(input: $input, condition: $condition) {
      id
      date
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
        createdAt
        owner
      }
      surgicalIntervention {
        id
        name
        description
        surgicalIntervention {
          nextToken
        }
        pathologicalHistory {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const updatePathologicalHistorySurgicalInt = /* GraphQL */ `
  mutation UpdatePathologicalHistorySurgicalInt(
    $input: UpdatePathologicalHistorySurgicalIntInput!
    $condition: ModelPathologicalHistorySurgicalIntConditionInput
  ) {
    updatePathologicalHistorySurgicalInt(input: $input, condition: $condition) {
      id
      date
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
        createdAt
        owner
      }
      surgicalIntervention {
        id
        name
        description
        surgicalIntervention {
          nextToken
        }
        pathologicalHistory {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const deletePathologicalHistorySurgicalInt = /* GraphQL */ `
  mutation DeletePathologicalHistorySurgicalInt(
    $input: DeletePathologicalHistorySurgicalIntInput!
    $condition: ModelPathologicalHistorySurgicalIntConditionInput
  ) {
    deletePathologicalHistorySurgicalInt(input: $input, condition: $condition) {
      id
      date
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
        createdAt
        owner
      }
      surgicalIntervention {
        id
        name
        description
        surgicalIntervention {
          nextToken
        }
        pathologicalHistory {
          nextToken
        }
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const createSurgicalIntervention = /* GraphQL */ `
  mutation CreateSurgicalIntervention(
    $input: CreateSurgicalInterventionInput!
    $condition: ModelSurgicalInterventionConditionInput
  ) {
    createSurgicalIntervention(input: $input, condition: $condition) {
      id
      name
      description
      surgicalIntervention {
        items {
          id
          state
          date
          createdAt
        }
        nextToken
      }
      pathologicalHistory {
        items {
          id
          date
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const updateSurgicalIntervention = /* GraphQL */ `
  mutation UpdateSurgicalIntervention(
    $input: UpdateSurgicalInterventionInput!
    $condition: ModelSurgicalInterventionConditionInput
  ) {
    updateSurgicalIntervention(input: $input, condition: $condition) {
      id
      name
      description
      surgicalIntervention {
        items {
          id
          state
          date
          createdAt
        }
        nextToken
      }
      pathologicalHistory {
        items {
          id
          date
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const deleteSurgicalIntervention = /* GraphQL */ `
  mutation DeleteSurgicalIntervention(
    $input: DeleteSurgicalInterventionInput!
    $condition: ModelSurgicalInterventionConditionInput
  ) {
    deleteSurgicalIntervention(input: $input, condition: $condition) {
      id
      name
      description
      surgicalIntervention {
        items {
          id
          state
          date
          createdAt
        }
        nextToken
      }
      pathologicalHistory {
        items {
          id
          date
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const createPhysicalExploration = /* GraphQL */ `
  mutation CreatePhysicalExploration(
    $input: CreatePhysicalExplorationInput!
    $condition: ModelPhysicalExplorationConditionInput
  ) {
    createPhysicalExploration(input: $input, condition: $condition) {
      id
      general_exploration
      vitalsign {
        id
        blood_pressure
        breathing
        pulse
        temperature
        doctor
        secretary
        patient
        createdAt
        owner
      }
      regionalExploration {
        id
        head
        neck
        thorax
        abdomen
        members
        genitals
        others
        doctor
        secretary
        patient
        createdAt
        owner
      }
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const updatePhysicalExploration = /* GraphQL */ `
  mutation UpdatePhysicalExploration(
    $input: UpdatePhysicalExplorationInput!
    $condition: ModelPhysicalExplorationConditionInput
  ) {
    updatePhysicalExploration(input: $input, condition: $condition) {
      id
      general_exploration
      vitalsign {
        id
        blood_pressure
        breathing
        pulse
        temperature
        doctor
        secretary
        patient
        createdAt
        owner
      }
      regionalExploration {
        id
        head
        neck
        thorax
        abdomen
        members
        genitals
        others
        doctor
        secretary
        patient
        createdAt
        owner
      }
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const deletePhysicalExploration = /* GraphQL */ `
  mutation DeletePhysicalExploration(
    $input: DeletePhysicalExplorationInput!
    $condition: ModelPhysicalExplorationConditionInput
  ) {
    deletePhysicalExploration(input: $input, condition: $condition) {
      id
      general_exploration
      vitalsign {
        id
        blood_pressure
        breathing
        pulse
        temperature
        doctor
        secretary
        patient
        createdAt
        owner
      }
      regionalExploration {
        id
        head
        neck
        thorax
        abdomen
        members
        genitals
        others
        doctor
        secretary
        patient
        createdAt
        owner
      }
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const createVitalSign = /* GraphQL */ `
  mutation CreateVitalSign(
    $input: CreateVitalSignInput!
    $condition: ModelVitalSignConditionInput
  ) {
    createVitalSign(input: $input, condition: $condition) {
      id
      blood_pressure
      breathing
      pulse
      temperature
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const updateVitalSign = /* GraphQL */ `
  mutation UpdateVitalSign(
    $input: UpdateVitalSignInput!
    $condition: ModelVitalSignConditionInput
  ) {
    updateVitalSign(input: $input, condition: $condition) {
      id
      blood_pressure
      breathing
      pulse
      temperature
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const deleteVitalSign = /* GraphQL */ `
  mutation DeleteVitalSign(
    $input: DeleteVitalSignInput!
    $condition: ModelVitalSignConditionInput
  ) {
    deleteVitalSign(input: $input, condition: $condition) {
      id
      blood_pressure
      breathing
      pulse
      temperature
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const createRegionalExploration = /* GraphQL */ `
  mutation CreateRegionalExploration(
    $input: CreateRegionalExplorationInput!
    $condition: ModelRegionalExplorationConditionInput
  ) {
    createRegionalExploration(input: $input, condition: $condition) {
      id
      head
      neck
      thorax
      abdomen
      members
      genitals
      others
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const updateRegionalExploration = /* GraphQL */ `
  mutation UpdateRegionalExploration(
    $input: UpdateRegionalExplorationInput!
    $condition: ModelRegionalExplorationConditionInput
  ) {
    updateRegionalExploration(input: $input, condition: $condition) {
      id
      head
      neck
      thorax
      abdomen
      members
      genitals
      others
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const deleteRegionalExploration = /* GraphQL */ `
  mutation DeleteRegionalExploration(
    $input: DeleteRegionalExplorationInput!
    $condition: ModelRegionalExplorationConditionInput
  ) {
    deleteRegionalExploration(input: $input, condition: $condition) {
      id
      head
      neck
      thorax
      abdomen
      members
      genitals
      others
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      description
      module
      createdAt
      owner
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      description
      module
      createdAt
      owner
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      description
      module
      createdAt
      owner
    }
  }
`;
