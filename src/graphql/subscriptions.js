/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMedicalAppointment = /* GraphQL */ `
  subscription OnCreateMedicalAppointment(
    $doctorname: String
    $secretary: String
  ) {
    onCreateMedicalAppointment(doctorname: $doctorname, secretary: $secretary) {
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
        speciality
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
        birthdate
        patientHistory {
          id
          owner
        }
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
export const onUpdateMedicalAppointment = /* GraphQL */ `
  subscription OnUpdateMedicalAppointment(
    $read_secretary: Boolean
    $read_doctor: Boolean
    $read_client: Boolean
    $doctorname: String
    $secretary: String
  ) {
    onUpdateMedicalAppointment(
      read_secretary: $read_secretary
      read_doctor: $read_doctor
      read_client: $read_client
      doctorname: $doctorname
      secretary: $secretary
    ) {
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
        speciality
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
        birthdate
        patientHistory {
          id
          owner
        }
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
export const onCreateConsultingRoom = /* GraphQL */ `
  subscription OnCreateConsultingRoom($owner: String) {
    onCreateConsultingRoom(owner: $owner) {
      id
      doctor {
        id
        name
        username
        email
        speciality
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
export const onUpdateConsultingRoom = /* GraphQL */ `
  subscription OnUpdateConsultingRoom($owner: String) {
    onUpdateConsultingRoom(owner: $owner) {
      id
      doctor {
        id
        name
        username
        email
        speciality
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
export const onDeleteConsultingRoom = /* GraphQL */ `
  subscription OnDeleteConsultingRoom($owner: String) {
    onDeleteConsultingRoom(owner: $owner) {
      id
      doctor {
        id
        name
        username
        email
        speciality
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($owner: String!) {
    onCreateLocation(owner: $owner) {
      id
      name
      owner
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($owner: String!) {
    onUpdateLocation(owner: $owner) {
      id
      name
      owner
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($owner: String!) {
    onDeleteLocation(owner: $owner) {
      id
      name
      owner
    }
  }
`;
export const onCreateDoctor = /* GraphQL */ `
  subscription OnCreateDoctor($owner: String) {
    onCreateDoctor(owner: $owner) {
      id
      name
      username
      email
      speciality
      sex
      consultingroom {
        id
        doctor {
          id
          name
          username
          email
          speciality
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
export const onUpdateDoctor = /* GraphQL */ `
  subscription OnUpdateDoctor($owner: String) {
    onUpdateDoctor(owner: $owner) {
      id
      name
      username
      email
      speciality
      sex
      consultingroom {
        id
        doctor {
          id
          name
          username
          email
          speciality
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
export const onDeleteDoctor = /* GraphQL */ `
  subscription OnDeleteDoctor($owner: String) {
    onDeleteDoctor(owner: $owner) {
      id
      name
      username
      email
      speciality
      sex
      consultingroom {
        id
        doctor {
          id
          name
          username
          email
          speciality
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
export const onCreateRejection = /* GraphQL */ `
  subscription OnCreateRejection($owner: String) {
    onCreateRejection(owner: $owner) {
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
export const onUpdateRejection = /* GraphQL */ `
  subscription OnUpdateRejection($owner: String) {
    onUpdateRejection(owner: $owner) {
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
export const onDeleteRejection = /* GraphQL */ `
  subscription OnDeleteRejection($owner: String) {
    onDeleteRejection(owner: $owner) {
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
export const onCreateCancelation = /* GraphQL */ `
  subscription OnCreateCancelation($owner: String) {
    onCreateCancelation(owner: $owner) {
      id
      description
      owner
    }
  }
`;
export const onUpdateCancelation = /* GraphQL */ `
  subscription OnUpdateCancelation($owner: String) {
    onUpdateCancelation(owner: $owner) {
      id
      description
      owner
    }
  }
`;
export const onDeleteCancelation = /* GraphQL */ `
  subscription OnDeleteCancelation($owner: String) {
    onDeleteCancelation(owner: $owner) {
      id
      description
      owner
    }
  }
`;
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification($owner: String) {
    onCreateNotification(owner: $owner) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification($owner: String) {
    onUpdateNotification(owner: $owner) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification($owner: String) {
    onDeleteNotification(owner: $owner) {
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
export const onCreateConfirmation = /* GraphQL */ `
  subscription OnCreateConfirmation($owner: String) {
    onCreateConfirmation(owner: $owner) {
      id
      description
      owner
    }
  }
`;
export const onUpdateConfirmation = /* GraphQL */ `
  subscription OnUpdateConfirmation($owner: String) {
    onUpdateConfirmation(owner: $owner) {
      id
      description
      owner
    }
  }
`;
export const onDeleteConfirmation = /* GraphQL */ `
  subscription OnDeleteConfirmation($owner: String) {
    onDeleteConfirmation(owner: $owner) {
      id
      description
      owner
    }
  }
`;
export const onCreateMedicalConsultation = /* GraphQL */ `
  subscription OnCreateMedicalConsultation($owner: String) {
    onCreateMedicalConsultation(owner: $owner) {
      id
      doctor {
        id
        name
        username
        email
        speciality
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
        birthdate
        patientHistory {
          id
          owner
        }
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
          birthdate
          owner
        }
        physicalExploration {
          id
          general_exploration
          doctor
          secretary
          patient
          owner
        }
        doctor
        secretary
        patientname
        owner
      }
      doctorname
      secretary
      patientname
      createdAt
      owner
    }
  }
`;
export const onUpdateMedicalConsultation = /* GraphQL */ `
  subscription OnUpdateMedicalConsultation(
    $owner: String
    $doctorname: String
  ) {
    onUpdateMedicalConsultation(owner: $owner, doctorname: $doctorname) {
      id
      doctor {
        id
        name
        username
        email
        speciality
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
        birthdate
        patientHistory {
          id
          owner
        }
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
          birthdate
          owner
        }
        physicalExploration {
          id
          general_exploration
          doctor
          secretary
          patient
          owner
        }
        doctor
        secretary
        patientname
        owner
      }
      doctorname
      secretary
      patientname
      createdAt
      owner
    }
  }
`;
export const onDeleteMedicalConsultation = /* GraphQL */ `
  subscription OnDeleteMedicalConsultation($owner: String) {
    onDeleteMedicalConsultation(owner: $owner) {
      id
      doctor {
        id
        name
        username
        email
        speciality
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
        birthdate
        patientHistory {
          id
          owner
        }
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
          birthdate
          owner
        }
        physicalExploration {
          id
          general_exploration
          doctor
          secretary
          patient
          owner
        }
        doctor
        secretary
        patientname
        owner
      }
      doctorname
      secretary
      patientname
      createdAt
      owner
    }
  }
`;
export const onCreateMedicalHistory = /* GraphQL */ `
  subscription OnCreateMedicalHistory($owner: String) {
    onCreateMedicalHistory(owner: $owner) {
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
        birthdate
        patientHistory {
          id
          owner
        }
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
          owner
        }
        doctor
        secretary
        patient
        owner
      }
      doctor
      secretary
      patientname
      owner
    }
  }
`;
export const onUpdateMedicalHistory = /* GraphQL */ `
  subscription OnUpdateMedicalHistory($owner: String, $doctor: String) {
    onUpdateMedicalHistory(owner: $owner, doctor: $doctor) {
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
        birthdate
        patientHistory {
          id
          owner
        }
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
          owner
        }
        doctor
        secretary
        patient
        owner
      }
      doctor
      secretary
      patientname
      owner
    }
  }
`;
export const onDeleteMedicalHistory = /* GraphQL */ `
  subscription OnDeleteMedicalHistory($owner: String) {
    onDeleteMedicalHistory(owner: $owner) {
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
        birthdate
        patientHistory {
          id
          owner
        }
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
          owner
        }
        doctor
        secretary
        patient
        owner
      }
      doctor
      secretary
      patientname
      owner
    }
  }
`;
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient($owner: String) {
    onCreatePatient(owner: $owner) {
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
      birthdate
      patientHistory {
        id
        nonPathologicalHistory {
          nextToken
        }
        pathologicalHistory {
          id
          owner
        }
        familyHistory {
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
          owner
        }
        owner
      }
      owner
    }
  }
`;
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient($owner: String) {
    onUpdatePatient(owner: $owner) {
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
      birthdate
      patientHistory {
        id
        nonPathologicalHistory {
          nextToken
        }
        pathologicalHistory {
          id
          owner
        }
        familyHistory {
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
          owner
        }
        owner
      }
      owner
    }
  }
`;
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient($owner: String) {
    onDeletePatient(owner: $owner) {
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
      birthdate
      patientHistory {
        id
        nonPathologicalHistory {
          nextToken
        }
        pathologicalHistory {
          id
          owner
        }
        familyHistory {
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
          owner
        }
        owner
      }
      owner
    }
  }
`;
export const onCreatePatientHistory = /* GraphQL */ `
  subscription OnCreatePatientHistory($owner: String) {
    onCreatePatientHistory(owner: $owner) {
      id
      nonPathologicalHistory {
        items {
          id
          active
          frequency
          comment
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
        owner
      }
      familyHistory {
        items {
          id
          alive
          comment
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
        owner
      }
      owner
    }
  }
`;
export const onUpdatePatientHistory = /* GraphQL */ `
  subscription OnUpdatePatientHistory($owner: String) {
    onUpdatePatientHistory(owner: $owner) {
      id
      nonPathologicalHistory {
        items {
          id
          active
          frequency
          comment
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
        owner
      }
      familyHistory {
        items {
          id
          alive
          comment
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
        owner
      }
      owner
    }
  }
`;
export const onDeletePatientHistory = /* GraphQL */ `
  subscription OnDeletePatientHistory($owner: String) {
    onDeletePatientHistory(owner: $owner) {
      id
      nonPathologicalHistory {
        items {
          id
          active
          frequency
          comment
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
        owner
      }
      familyHistory {
        items {
          id
          alive
          comment
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
        owner
      }
      owner
    }
  }
`;
export const onCreateNonPathologicalHistory = /* GraphQL */ `
  subscription OnCreateNonPathologicalHistory($owner: String) {
    onCreateNonPathologicalHistory(owner: $owner) {
      id
      type {
        id
        name
        description
        module
        owner
      }
      active
      frequency
      comment
      owner
    }
  }
`;
export const onUpdateNonPathologicalHistory = /* GraphQL */ `
  subscription OnUpdateNonPathologicalHistory($owner: String) {
    onUpdateNonPathologicalHistory(owner: $owner) {
      id
      type {
        id
        name
        description
        module
        owner
      }
      active
      frequency
      comment
      owner
    }
  }
`;
export const onDeleteNonPathologicalHistory = /* GraphQL */ `
  subscription OnDeleteNonPathologicalHistory($owner: String) {
    onDeleteNonPathologicalHistory(owner: $owner) {
      id
      type {
        id
        name
        description
        module
        owner
      }
      active
      frequency
      comment
      owner
    }
  }
`;
export const onCreatePathologicalHistory = /* GraphQL */ `
  subscription OnCreatePathologicalHistory($owner: String) {
    onCreatePathologicalHistory(owner: $owner) {
      id
      surgicalInterventions {
        items {
          id
          date
        }
        nextToken
      }
      patientMedications {
        items {
          id
        }
        nextToken
      }
      patientAllergies {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const onUpdatePathologicalHistory = /* GraphQL */ `
  subscription OnUpdatePathologicalHistory($owner: String) {
    onUpdatePathologicalHistory(owner: $owner) {
      id
      surgicalInterventions {
        items {
          id
          date
        }
        nextToken
      }
      patientMedications {
        items {
          id
        }
        nextToken
      }
      patientAllergies {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const onDeletePathologicalHistory = /* GraphQL */ `
  subscription OnDeletePathologicalHistory($owner: String) {
    onDeletePathologicalHistory(owner: $owner) {
      id
      surgicalInterventions {
        items {
          id
          date
        }
        nextToken
      }
      patientMedications {
        items {
          id
        }
        nextToken
      }
      patientAllergies {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const onCreateFamilyHistory = /* GraphQL */ `
  subscription OnCreateFamilyHistory($owner: String) {
    onCreateFamilyHistory(owner: $owner) {
      id
      relationship {
        id
        name
        description
        module
        owner
      }
      alive
      diseases {
        items {
          id
        }
        nextToken
      }
      comment
      owner
    }
  }
`;
export const onUpdateFamilyHistory = /* GraphQL */ `
  subscription OnUpdateFamilyHistory($owner: String) {
    onUpdateFamilyHistory(owner: $owner) {
      id
      relationship {
        id
        name
        description
        module
        owner
      }
      alive
      diseases {
        items {
          id
        }
        nextToken
      }
      comment
      owner
    }
  }
`;
export const onDeleteFamilyHistory = /* GraphQL */ `
  subscription OnDeleteFamilyHistory($owner: String) {
    onDeleteFamilyHistory(owner: $owner) {
      id
      relationship {
        id
        name
        description
        module
        owner
      }
      alive
      diseases {
        items {
          id
        }
        nextToken
      }
      comment
      owner
    }
  }
`;
export const onCreateFamilyDetailsDiseases = /* GraphQL */ `
  subscription OnCreateFamilyDetailsDiseases {
    onCreateFamilyDetailsDiseases {
      id
      family {
        id
        relationship {
          id
          name
          description
          module
          owner
        }
        alive
        diseases {
          nextToken
        }
        comment
        owner
      }
      diseases {
        id
        name
        description
        familyDetails {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onUpdateFamilyDetailsDiseases = /* GraphQL */ `
  subscription OnUpdateFamilyDetailsDiseases {
    onUpdateFamilyDetailsDiseases {
      id
      family {
        id
        relationship {
          id
          name
          description
          module
          owner
        }
        alive
        diseases {
          nextToken
        }
        comment
        owner
      }
      diseases {
        id
        name
        description
        familyDetails {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onDeleteFamilyDetailsDiseases = /* GraphQL */ `
  subscription OnDeleteFamilyDetailsDiseases {
    onDeleteFamilyDetailsDiseases {
      id
      family {
        id
        relationship {
          id
          name
          description
          module
          owner
        }
        alive
        diseases {
          nextToken
        }
        comment
        owner
      }
      diseases {
        id
        name
        description
        familyDetails {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onCreateDisease = /* GraphQL */ `
  subscription OnCreateDisease($owner: String) {
    onCreateDisease(owner: $owner) {
      id
      name
      description
      familyDetails {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const onUpdateDisease = /* GraphQL */ `
  subscription OnUpdateDisease($owner: String) {
    onUpdateDisease(owner: $owner) {
      id
      name
      description
      familyDetails {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const onDeleteDisease = /* GraphQL */ `
  subscription OnDeleteDisease($owner: String) {
    onDeleteDisease(owner: $owner) {
      id
      name
      description
      familyDetails {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const onCreateGynecoObstetricHistory = /* GraphQL */ `
  subscription OnCreateGynecoObstetricHistory($owner: String) {
    onCreateGynecoObstetricHistory(owner: $owner) {
      id
      menarche
      sexual_development
      menstrual_rhythm
      sex_life
      deliveries
      abortions
      caesarean_sections
      contraceptive_method
      owner
    }
  }
`;
export const onUpdateGynecoObstetricHistory = /* GraphQL */ `
  subscription OnUpdateGynecoObstetricHistory($owner: String) {
    onUpdateGynecoObstetricHistory(owner: $owner) {
      id
      menarche
      sexual_development
      menstrual_rhythm
      sex_life
      deliveries
      abortions
      caesarean_sections
      contraceptive_method
      owner
    }
  }
`;
export const onDeleteGynecoObstetricHistory = /* GraphQL */ `
  subscription OnDeleteGynecoObstetricHistory($owner: String) {
    onDeleteGynecoObstetricHistory(owner: $owner) {
      id
      menarche
      sexual_development
      menstrual_rhythm
      sex_life
      deliveries
      abortions
      caesarean_sections
      contraceptive_method
      owner
    }
  }
`;
export const onCreateAllergy = /* GraphQL */ `
  subscription OnCreateAllergy($owner: String) {
    onCreateAllergy(owner: $owner) {
      id
      name
      description
      patients {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const onUpdateAllergy = /* GraphQL */ `
  subscription OnUpdateAllergy($owner: String) {
    onUpdateAllergy(owner: $owner) {
      id
      name
      description
      patients {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const onDeleteAllergy = /* GraphQL */ `
  subscription OnDeleteAllergy($owner: String) {
    onDeleteAllergy(owner: $owner) {
      id
      name
      description
      patients {
        items {
          id
        }
        nextToken
      }
      owner
    }
  }
`;
export const onCreatePatientAllergies = /* GraphQL */ `
  subscription OnCreatePatientAllergies {
    onCreatePatientAllergies {
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
        owner
      }
      allergies {
        id
        name
        description
        patients {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onUpdatePatientAllergies = /* GraphQL */ `
  subscription OnUpdatePatientAllergies {
    onUpdatePatientAllergies {
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
        owner
      }
      allergies {
        id
        name
        description
        patients {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onDeletePatientAllergies = /* GraphQL */ `
  subscription OnDeletePatientAllergies {
    onDeletePatientAllergies {
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
        owner
      }
      allergies {
        id
        name
        description
        patients {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onCreatePatientMedications = /* GraphQL */ `
  subscription OnCreatePatientMedications {
    onCreatePatientMedications {
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
        owner
      }
    }
  }
`;
export const onUpdatePatientMedications = /* GraphQL */ `
  subscription OnUpdatePatientMedications {
    onUpdatePatientMedications {
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
        owner
      }
    }
  }
`;
export const onDeletePatientMedications = /* GraphQL */ `
  subscription OnDeletePatientMedications {
    onDeletePatientMedications {
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
        owner
      }
    }
  }
`;
export const onCreateMedicine = /* GraphQL */ `
  subscription OnCreateMedicine($owner: String) {
    onCreateMedicine(owner: $owner) {
      id
      name
      patients {
        items {
          id
        }
        nextToken
      }
      code
      drug_concentration
      chemical_composition
      owner
    }
  }
`;
export const onUpdateMedicine = /* GraphQL */ `
  subscription OnUpdateMedicine($owner: String) {
    onUpdateMedicine(owner: $owner) {
      id
      name
      patients {
        items {
          id
        }
        nextToken
      }
      code
      drug_concentration
      chemical_composition
      owner
    }
  }
`;
export const onDeleteMedicine = /* GraphQL */ `
  subscription OnDeleteMedicine($owner: String) {
    onDeleteMedicine(owner: $owner) {
      id
      name
      patients {
        items {
          id
        }
        nextToken
      }
      code
      drug_concentration
      chemical_composition
      owner
    }
  }
`;
export const onCreatePostConsultationsActivity = /* GraphQL */ `
  subscription OnCreatePostConsultationsActivity($owner: String) {
    onCreatePostConsultationsActivity(owner: $owner) {
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
          owner
        }
        nextToken
      }
      medicalAnalysis {
        items {
          id
          state
          date
        }
        nextToken
      }
      surgicalIntervention {
        items {
          id
          state
          date
        }
        nextToken
      }
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const onUpdatePostConsultationsActivity = /* GraphQL */ `
  subscription OnUpdatePostConsultationsActivity(
    $owner: String
    $doctor: String
  ) {
    onUpdatePostConsultationsActivity(owner: $owner, doctor: $doctor) {
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
          owner
        }
        nextToken
      }
      medicalAnalysis {
        items {
          id
          state
          date
        }
        nextToken
      }
      surgicalIntervention {
        items {
          id
          state
          date
        }
        nextToken
      }
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const onDeletePostConsultationsActivity = /* GraphQL */ `
  subscription OnDeletePostConsultationsActivity($owner: String) {
    onDeletePostConsultationsActivity(owner: $owner) {
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
          owner
        }
        nextToken
      }
      medicalAnalysis {
        items {
          id
          state
          date
        }
        nextToken
      }
      surgicalIntervention {
        items {
          id
          state
          date
        }
        nextToken
      }
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const onCreateMedicalPrescription = /* GraphQL */ `
  subscription OnCreateMedicalPrescription($owner: String) {
    onCreateMedicalPrescription(owner: $owner) {
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
        owner
      }
      comment
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const onUpdateMedicalPrescription = /* GraphQL */ `
  subscription OnUpdateMedicalPrescription($owner: String, $doctor: String) {
    onUpdateMedicalPrescription(owner: $owner, doctor: $doctor) {
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
        owner
      }
      comment
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const onDeleteMedicalPrescription = /* GraphQL */ `
  subscription OnDeleteMedicalPrescription($owner: String) {
    onDeleteMedicalPrescription(owner: $owner) {
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
        owner
      }
      comment
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const onCreatePostConsultActMedAnalysis = /* GraphQL */ `
  subscription OnCreatePostConsultActMedAnalysis {
    onCreatePostConsultActMedAnalysis {
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
        owner
      }
      medicalAnalysis {
        id
        name
        code
        medicalAnalysis {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onUpdatePostConsultActMedAnalysis = /* GraphQL */ `
  subscription OnUpdatePostConsultActMedAnalysis {
    onUpdatePostConsultActMedAnalysis {
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
        owner
      }
      medicalAnalysis {
        id
        name
        code
        medicalAnalysis {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onDeletePostConsultActMedAnalysis = /* GraphQL */ `
  subscription OnDeletePostConsultActMedAnalysis {
    onDeletePostConsultActMedAnalysis {
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
        owner
      }
      medicalAnalysis {
        id
        name
        code
        medicalAnalysis {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onCreateMedicalAnalysis = /* GraphQL */ `
  subscription OnCreateMedicalAnalysis($owner: String) {
    onCreateMedicalAnalysis(owner: $owner) {
      id
      name
      code
      medicalAnalysis {
        items {
          id
          state
          date
        }
        nextToken
      }
      owner
    }
  }
`;
export const onUpdateMedicalAnalysis = /* GraphQL */ `
  subscription OnUpdateMedicalAnalysis($owner: String) {
    onUpdateMedicalAnalysis(owner: $owner) {
      id
      name
      code
      medicalAnalysis {
        items {
          id
          state
          date
        }
        nextToken
      }
      owner
    }
  }
`;
export const onDeleteMedicalAnalysis = /* GraphQL */ `
  subscription OnDeleteMedicalAnalysis($owner: String) {
    onDeleteMedicalAnalysis(owner: $owner) {
      id
      name
      code
      medicalAnalysis {
        items {
          id
          state
          date
        }
        nextToken
      }
      owner
    }
  }
`;
export const onCreatePostConsultActSurgicalInt = /* GraphQL */ `
  subscription OnCreatePostConsultActSurgicalInt {
    onCreatePostConsultActSurgicalInt {
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
        owner
      }
    }
  }
`;
export const onUpdatePostConsultActSurgicalInt = /* GraphQL */ `
  subscription OnUpdatePostConsultActSurgicalInt {
    onUpdatePostConsultActSurgicalInt {
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
        owner
      }
    }
  }
`;
export const onDeletePostConsultActSurgicalInt = /* GraphQL */ `
  subscription OnDeletePostConsultActSurgicalInt {
    onDeletePostConsultActSurgicalInt {
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
        owner
      }
    }
  }
`;
export const onCreatePathologicalHistorySurgicalInt = /* GraphQL */ `
  subscription OnCreatePathologicalHistorySurgicalInt {
    onCreatePathologicalHistorySurgicalInt {
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
        owner
      }
    }
  }
`;
export const onUpdatePathologicalHistorySurgicalInt = /* GraphQL */ `
  subscription OnUpdatePathologicalHistorySurgicalInt {
    onUpdatePathologicalHistorySurgicalInt {
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
        owner
      }
    }
  }
`;
export const onDeletePathologicalHistorySurgicalInt = /* GraphQL */ `
  subscription OnDeletePathologicalHistorySurgicalInt {
    onDeletePathologicalHistorySurgicalInt {
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
        owner
      }
    }
  }
`;
export const onCreateSurgicalIntervention = /* GraphQL */ `
  subscription OnCreateSurgicalIntervention($owner: String) {
    onCreateSurgicalIntervention(owner: $owner) {
      id
      name
      description
      surgicalIntervention {
        items {
          id
          state
          date
        }
        nextToken
      }
      pathologicalHistory {
        items {
          id
          date
        }
        nextToken
      }
      owner
    }
  }
`;
export const onUpdateSurgicalIntervention = /* GraphQL */ `
  subscription OnUpdateSurgicalIntervention($owner: String) {
    onUpdateSurgicalIntervention(owner: $owner) {
      id
      name
      description
      surgicalIntervention {
        items {
          id
          state
          date
        }
        nextToken
      }
      pathologicalHistory {
        items {
          id
          date
        }
        nextToken
      }
      owner
    }
  }
`;
export const onDeleteSurgicalIntervention = /* GraphQL */ `
  subscription OnDeleteSurgicalIntervention($owner: String) {
    onDeleteSurgicalIntervention(owner: $owner) {
      id
      name
      description
      surgicalIntervention {
        items {
          id
          state
          date
        }
        nextToken
      }
      pathologicalHistory {
        items {
          id
          date
        }
        nextToken
      }
      owner
    }
  }
`;
export const onCreatePhysicalExploration = /* GraphQL */ `
  subscription OnCreatePhysicalExploration($owner: String) {
    onCreatePhysicalExploration(owner: $owner) {
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
        owner
      }
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const onUpdatePhysicalExploration = /* GraphQL */ `
  subscription OnUpdatePhysicalExploration($owner: String, $doctor: String) {
    onUpdatePhysicalExploration(owner: $owner, doctor: $doctor) {
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
        owner
      }
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const onDeletePhysicalExploration = /* GraphQL */ `
  subscription OnDeletePhysicalExploration($owner: String) {
    onDeletePhysicalExploration(owner: $owner) {
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
        owner
      }
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const onCreateVitalSign = /* GraphQL */ `
  subscription OnCreateVitalSign($owner: String) {
    onCreateVitalSign(owner: $owner) {
      id
      blood_pressure
      breathing
      pulse
      temperature
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const onUpdateVitalSign = /* GraphQL */ `
  subscription OnUpdateVitalSign($owner: String, $doctor: String) {
    onUpdateVitalSign(owner: $owner, doctor: $doctor) {
      id
      blood_pressure
      breathing
      pulse
      temperature
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const onDeleteVitalSign = /* GraphQL */ `
  subscription OnDeleteVitalSign($owner: String) {
    onDeleteVitalSign(owner: $owner) {
      id
      blood_pressure
      breathing
      pulse
      temperature
      doctor
      secretary
      patient
      owner
    }
  }
`;
export const onCreateRegionalExploration = /* GraphQL */ `
  subscription OnCreateRegionalExploration($owner: String) {
    onCreateRegionalExploration(owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateRegionalExploration = /* GraphQL */ `
  subscription OnUpdateRegionalExploration($owner: String, $doctor: String) {
    onUpdateRegionalExploration(owner: $owner, doctor: $doctor) {
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
      owner
    }
  }
`;
export const onDeleteRegionalExploration = /* GraphQL */ `
  subscription OnDeleteRegionalExploration($owner: String) {
    onDeleteRegionalExploration(owner: $owner) {
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
      owner
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($owner: String) {
    onCreateCategory(owner: $owner) {
      id
      name
      description
      module
      owner
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($owner: String) {
    onUpdateCategory(owner: $owner) {
      id
      name
      description
      module
      owner
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($owner: String) {
    onDeleteCategory(owner: $owner) {
      id
      name
      description
      module
      owner
    }
  }
`;
