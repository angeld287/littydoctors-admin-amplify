/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConsultingRoom = /* GraphQL */ `
  query GetConsultingRoom($id: ID!) {
    getConsultingRoom(id: $id) {
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
export const listConsultingRooms = /* GraphQL */ `
  query ListConsultingRooms(
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
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      owner
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
      }
      nextToken
    }
  }
`;
export const getDoctor = /* GraphQL */ `
  query GetDoctor($id: ID!) {
    getDoctor(id: $id) {
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
export const listDoctors = /* GraphQL */ `
  query ListDoctors(
    $filter: ModelDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRejection = /* GraphQL */ `
  query GetRejection($id: ID!) {
    getRejection(id: $id) {
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
export const listRejections = /* GraphQL */ `
  query ListRejections(
    $filter: ModelRejectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRejections(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getCancelation = /* GraphQL */ `
  query GetCancelation($id: ID!) {
    getCancelation(id: $id) {
      id
      description
      owner
    }
  }
`;
export const listCancelations = /* GraphQL */ `
  query ListCancelations(
    $filter: ModelCancelationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCancelations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        owner
      }
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getConfirmation = /* GraphQL */ `
  query GetConfirmation($id: ID!) {
    getConfirmation(id: $id) {
      id
      description
      owner
    }
  }
`;
export const listConfirmations = /* GraphQL */ `
  query ListConfirmations(
    $filter: ModelConfirmationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfirmations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        owner
      }
      nextToken
    }
  }
`;
export const getMedicalAppointment = /* GraphQL */ `
  query GetMedicalAppointment($id: ID!) {
    getMedicalAppointment(id: $id) {
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
export const listMedicalAppointments = /* GraphQL */ `
  query ListMedicalAppointments(
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
          owner
        }
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
          owner
        }
        rejection {
          nextToken
        }
        cancelation {
          id
          description
          owner
        }
        notification {
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
      nextToken
    }
  }
`;
export const getMedicalConsultation = /* GraphQL */ `
  query GetMedicalConsultation($id: ID!) {
    getMedicalConsultation(id: $id) {
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
export const listMedicalConsultations = /* GraphQL */ `
  query ListMedicalConsultations(
    $filter: ModelMedicalConsultationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicalConsultations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          owner
        }
        postConsultationsActivity {
          id
          doctor
          secretary
          patient
          owner
        }
        medicalHistory {
          id
          reason
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
      nextToken
    }
  }
`;
export const getMedicalHistory = /* GraphQL */ `
  query GetMedicalHistory($id: ID!) {
    getMedicalHistory(id: $id) {
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
export const listMedicalHistorys = /* GraphQL */ `
  query ListMedicalHistorys(
    $filter: ModelMedicalHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicalHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
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
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPatientHistory = /* GraphQL */ `
  query GetPatientHistory($id: ID!) {
    getPatientHistory(id: $id) {
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
export const listPatientHistorys = /* GraphQL */ `
  query ListPatientHistorys(
    $filter: ModelPatientHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatientHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getNonPathologicalHistory = /* GraphQL */ `
  query GetNonPathologicalHistory($id: ID!) {
    getNonPathologicalHistory(id: $id) {
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
export const listNonPathologicalHistorys = /* GraphQL */ `
  query ListNonPathologicalHistorys(
    $filter: ModelNonPathologicalHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonPathologicalHistorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPathologicalHistory = /* GraphQL */ `
  query GetPathologicalHistory($id: ID!) {
    getPathologicalHistory(id: $id) {
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
export const listPathologicalHistorys = /* GraphQL */ `
  query ListPathologicalHistorys(
    $filter: ModelPathologicalHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPathologicalHistorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getFamilyHistory = /* GraphQL */ `
  query GetFamilyHistory($id: ID!) {
    getFamilyHistory(id: $id) {
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
export const listFamilyHistorys = /* GraphQL */ `
  query ListFamilyHistorys(
    $filter: ModelFamilyHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilyHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDisease = /* GraphQL */ `
  query GetDisease($id: ID!) {
    getDisease(id: $id) {
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
export const listDiseases = /* GraphQL */ `
  query ListDiseases(
    $filter: ModelDiseaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiseases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        familyDetails {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getGynecoObstetricHistory = /* GraphQL */ `
  query GetGynecoObstetricHistory($id: ID!) {
    getGynecoObstetricHistory(id: $id) {
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
export const listGynecoObstetricHistorys = /* GraphQL */ `
  query ListGynecoObstetricHistorys(
    $filter: ModelGynecoObstetricHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGynecoObstetricHistorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAllergy = /* GraphQL */ `
  query GetAllergy($id: ID!) {
    getAllergy(id: $id) {
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
export const listAllergys = /* GraphQL */ `
  query ListAllergys(
    $filter: ModelAllergyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAllergys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        patients {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getMedicine = /* GraphQL */ `
  query GetMedicine($id: ID!) {
    getMedicine(id: $id) {
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
export const listMedicines = /* GraphQL */ `
  query ListMedicines(
    $filter: ModelMedicineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPostConsultationsActivity = /* GraphQL */ `
  query GetPostConsultationsActivity($id: ID!) {
    getPostConsultationsActivity(id: $id) {
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
export const listPostConsultationsActivitys = /* GraphQL */ `
  query ListPostConsultationsActivitys(
    $filter: ModelPostConsultationsActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostConsultationsActivitys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getMedicalPrescription = /* GraphQL */ `
  query GetMedicalPrescription($id: ID!) {
    getMedicalPrescription(id: $id) {
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
export const listMedicalPrescriptions = /* GraphQL */ `
  query ListMedicalPrescriptions(
    $filter: ModelMedicalPrescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicalPrescriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        frequency
        duration
        medications {
          id
          name
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
      nextToken
    }
  }
`;
export const getMedicalAnalysis = /* GraphQL */ `
  query GetMedicalAnalysis($id: ID!) {
    getMedicalAnalysis(id: $id) {
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
export const listMedicalAnalysiss = /* GraphQL */ `
  query ListMedicalAnalysiss(
    $filter: ModelMedicalAnalysisFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicalAnalysiss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        code
        medicalAnalysis {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getSurgicalIntervention = /* GraphQL */ `
  query GetSurgicalIntervention($id: ID!) {
    getSurgicalIntervention(id: $id) {
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
export const listSurgicalInterventions = /* GraphQL */ `
  query ListSurgicalInterventions(
    $filter: ModelSurgicalInterventionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurgicalInterventions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPhysicalExploration = /* GraphQL */ `
  query GetPhysicalExploration($id: ID!) {
    getPhysicalExploration(id: $id) {
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
export const listPhysicalExplorations = /* GraphQL */ `
  query ListPhysicalExplorations(
    $filter: ModelPhysicalExplorationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhysicalExplorations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getVitalSign = /* GraphQL */ `
  query GetVitalSign($id: ID!) {
    getVitalSign(id: $id) {
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
export const listVitalSigns = /* GraphQL */ `
  query ListVitalSigns(
    $filter: ModelVitalSignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVitalSigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRegionalExploration = /* GraphQL */ `
  query GetRegionalExploration($id: ID!) {
    getRegionalExploration(id: $id) {
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
export const listRegionalExplorations = /* GraphQL */ `
  query ListRegionalExplorations(
    $filter: ModelRegionalExplorationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegionalExplorations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      description
      module
      owner
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        module
        owner
      }
      nextToken
    }
  }
`;
