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
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
        owner
      }
      secretary
      location {
        id
        name
        deleted
        deletedAt
        createdAt
        owner
      }
      deleted
      deletedAt
      createdAt
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
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
        owner
      }
      secretary
      location {
        id
        name
        deleted
        deletedAt
        createdAt
        owner
      }
      deleted
      deletedAt
      createdAt
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
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
        owner
      }
      secretary
      location {
        id
        name
        deleted
        deletedAt
        createdAt
        owner
      }
      deleted
      deletedAt
      createdAt
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
      deleted
      deletedAt
      createdAt
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
      deleted
      deletedAt
      createdAt
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
      deleted
      deletedAt
      createdAt
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
      specialities {
        items {
          id
        }
        nextToken
      }
      subspecialies {
        items {
          id
        }
        nextToken
      }
      subspecialiessec {
        items {
          id
        }
        nextToken
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
          deleted
          deletedAt
          createdAt
          owner
        }
        secretary
        location {
          id
          name
          deleted
          deletedAt
          createdAt
          owner
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      image
      deleted
      deletedAt
      createdAt
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
      specialities {
        items {
          id
        }
        nextToken
      }
      subspecialies {
        items {
          id
        }
        nextToken
      }
      subspecialiessec {
        items {
          id
        }
        nextToken
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
          deleted
          deletedAt
          createdAt
          owner
        }
        secretary
        location {
          id
          name
          deleted
          deletedAt
          createdAt
          owner
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      image
      deleted
      deletedAt
      createdAt
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
      specialities {
        items {
          id
        }
        nextToken
      }
      subspecialies {
        items {
          id
        }
        nextToken
      }
      subspecialiessec {
        items {
          id
        }
        nextToken
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
          deleted
          deletedAt
          createdAt
          owner
        }
        secretary
        location {
          id
          name
          deleted
          deletedAt
          createdAt
          owner
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      image
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const createDoctorSpecialities = /* GraphQL */ `
  mutation CreateDoctorSpecialities(
    $input: CreateDoctorSpecialitiesInput!
    $condition: ModelDoctorSpecialitiesConditionInput
  ) {
    createDoctorSpecialities(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
        owner
      }
      speciality {
        id
        name
        code
        doctors {
          nextToken
        }
        subSpeciality {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
    }
  }
`;
export const updateDoctorSpecialities = /* GraphQL */ `
  mutation UpdateDoctorSpecialities(
    $input: UpdateDoctorSpecialitiesInput!
    $condition: ModelDoctorSpecialitiesConditionInput
  ) {
    updateDoctorSpecialities(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
        owner
      }
      speciality {
        id
        name
        code
        doctors {
          nextToken
        }
        subSpeciality {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
    }
  }
`;
export const deleteDoctorSpecialities = /* GraphQL */ `
  mutation DeleteDoctorSpecialities(
    $input: DeleteDoctorSpecialitiesInput!
    $condition: ModelDoctorSpecialitiesConditionInput
  ) {
    deleteDoctorSpecialities(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
        owner
      }
      speciality {
        id
        name
        code
        doctors {
          nextToken
        }
        subSpeciality {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
    }
  }
`;
export const createSpeciality = /* GraphQL */ `
  mutation CreateSpeciality(
    $input: CreateSpecialityInput!
    $condition: ModelSpecialityConditionInput
  ) {
    createSpeciality(input: $input, condition: $condition) {
      id
      name
      code
      doctors {
        items {
          id
        }
        nextToken
      }
      subSpeciality {
        items {
          id
          name
          code
          deleted
          deletedAt
          createdAt
          owner
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const updateSpeciality = /* GraphQL */ `
  mutation UpdateSpeciality(
    $input: UpdateSpecialityInput!
    $condition: ModelSpecialityConditionInput
  ) {
    updateSpeciality(input: $input, condition: $condition) {
      id
      name
      code
      doctors {
        items {
          id
        }
        nextToken
      }
      subSpeciality {
        items {
          id
          name
          code
          deleted
          deletedAt
          createdAt
          owner
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const deleteSpeciality = /* GraphQL */ `
  mutation DeleteSpeciality(
    $input: DeleteSpecialityInput!
    $condition: ModelSpecialityConditionInput
  ) {
    deleteSpeciality(input: $input, condition: $condition) {
      id
      name
      code
      doctors {
        items {
          id
        }
        nextToken
      }
      subSpeciality {
        items {
          id
          name
          code
          deleted
          deletedAt
          createdAt
          owner
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const createDoctorSubSpecialities = /* GraphQL */ `
  mutation CreateDoctorSubSpecialities(
    $input: CreateDoctorSubSpecialitiesInput!
    $condition: ModelDoctorSubSpecialitiesConditionInput
  ) {
    createDoctorSubSpecialities(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
        owner
      }
      subspeciality {
        id
        name
        code
        doctors {
          nextToken
        }
        subSpeciality {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
    }
  }
`;
export const updateDoctorSubSpecialities = /* GraphQL */ `
  mutation UpdateDoctorSubSpecialities(
    $input: UpdateDoctorSubSpecialitiesInput!
    $condition: ModelDoctorSubSpecialitiesConditionInput
  ) {
    updateDoctorSubSpecialities(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
        owner
      }
      subspeciality {
        id
        name
        code
        doctors {
          nextToken
        }
        subSpeciality {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
    }
  }
`;
export const deleteDoctorSubSpecialities = /* GraphQL */ `
  mutation DeleteDoctorSubSpecialities(
    $input: DeleteDoctorSubSpecialitiesInput!
    $condition: ModelDoctorSubSpecialitiesConditionInput
  ) {
    deleteDoctorSubSpecialities(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
        owner
      }
      subspeciality {
        id
        name
        code
        doctors {
          nextToken
        }
        subSpeciality {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
    }
  }
`;
export const createSubSpeciality = /* GraphQL */ `
  mutation CreateSubSpeciality(
    $input: CreateSubSpecialityInput!
    $condition: ModelSubSpecialityConditionInput
  ) {
    createSubSpeciality(input: $input, condition: $condition) {
      id
      name
      code
      doctors {
        items {
          id
        }
        nextToken
      }
      subSpeciality {
        items {
          id
          name
          code
          deleted
          deletedAt
          createdAt
          owner
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const updateSubSpeciality = /* GraphQL */ `
  mutation UpdateSubSpeciality(
    $input: UpdateSubSpecialityInput!
    $condition: ModelSubSpecialityConditionInput
  ) {
    updateSubSpeciality(input: $input, condition: $condition) {
      id
      name
      code
      doctors {
        items {
          id
        }
        nextToken
      }
      subSpeciality {
        items {
          id
          name
          code
          deleted
          deletedAt
          createdAt
          owner
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const deleteSubSpeciality = /* GraphQL */ `
  mutation DeleteSubSpeciality(
    $input: DeleteSubSpecialityInput!
    $condition: ModelSubSpecialityConditionInput
  ) {
    deleteSubSpeciality(input: $input, condition: $condition) {
      id
      name
      code
      doctors {
        items {
          id
        }
        nextToken
      }
      subSpeciality {
        items {
          id
          name
          code
          deleted
          deletedAt
          createdAt
          owner
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const createDoctorSsSecond = /* GraphQL */ `
  mutation CreateDoctorSsSecond(
    $input: CreateDoctorSSSecondInput!
    $condition: ModelDoctorSSSecondConditionInput
  ) {
    createDoctorSSSecond(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
        owner
      }
      subspecialitysec {
        id
        name
        code
        doctors {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
    }
  }
`;
export const updateDoctorSsSecond = /* GraphQL */ `
  mutation UpdateDoctorSsSecond(
    $input: UpdateDoctorSSSecondInput!
    $condition: ModelDoctorSSSecondConditionInput
  ) {
    updateDoctorSSSecond(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
        owner
      }
      subspecialitysec {
        id
        name
        code
        doctors {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
    }
  }
`;
export const deleteDoctorSsSecond = /* GraphQL */ `
  mutation DeleteDoctorSsSecond(
    $input: DeleteDoctorSSSecondInput!
    $condition: ModelDoctorSSSecondConditionInput
  ) {
    deleteDoctorSSSecond(input: $input, condition: $condition) {
      id
      doctor {
        id
        name
        username
        email
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
        owner
      }
      subspecialitysec {
        id
        name
        code
        doctors {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
    }
  }
`;
export const createSubSpecialitySecond = /* GraphQL */ `
  mutation CreateSubSpecialitySecond(
    $input: CreateSubSpecialitySecondInput!
    $condition: ModelSubSpecialitySecondConditionInput
  ) {
    createSubSpecialitySecond(input: $input, condition: $condition) {
      id
      name
      code
      doctors {
        items {
          id
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const updateSubSpecialitySecond = /* GraphQL */ `
  mutation UpdateSubSpecialitySecond(
    $input: UpdateSubSpecialitySecondInput!
    $condition: ModelSubSpecialitySecondConditionInput
  ) {
    updateSubSpecialitySecond(input: $input, condition: $condition) {
      id
      name
      code
      doctors {
        items {
          id
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const deleteSubSpecialitySecond = /* GraphQL */ `
  mutation DeleteSubSpecialitySecond(
    $input: DeleteSubSpecialitySecondInput!
    $condition: ModelSubSpecialitySecondConditionInput
  ) {
    deleteSubSpecialitySecond(input: $input, condition: $condition) {
      id
      name
      code
      doctors {
        items {
          id
        }
        nextToken
      }
      deleted
      deletedAt
      createdAt
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
        deleted
        deletedAt
        createdAt
        owner
      }
      doctor {
        id
        name
        username
        email
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
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
          deleted
          deletedAt
          createdAt
          owner
        }
        address
        code
        temporary_password
        marital_status
        birthdate
        approved_terms_conditions
        patientHistory {
          nextToken
        }
        deleted
        deletedAt
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
        deleted
        deletedAt
        createdAt
        owner
      }
      doctor {
        id
        name
        username
        email
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
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
          deleted
          deletedAt
          createdAt
          owner
        }
        address
        code
        temporary_password
        marital_status
        birthdate
        approved_terms_conditions
        patientHistory {
          nextToken
        }
        deleted
        deletedAt
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
        deleted
        deletedAt
        createdAt
        owner
      }
      doctor {
        id
        name
        username
        email
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
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
          deleted
          deletedAt
          createdAt
          owner
        }
        address
        code
        temporary_password
        marital_status
        birthdate
        approved_terms_conditions
        patientHistory {
          nextToken
        }
        deleted
        deletedAt
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
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
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
          deleted
          deletedAt
          createdAt
          owner
        }
        address
        code
        temporary_password
        marital_status
        birthdate
        approved_terms_conditions
        patientHistory {
          nextToken
        }
        deleted
        deletedAt
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
          code
          temporary_password
          marital_status
          birthdate
          approved_terms_conditions
          deleted
          deletedAt
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
        diagnosis {
          id
          commentary
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
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
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
          deleted
          deletedAt
          createdAt
          owner
        }
        address
        code
        temporary_password
        marital_status
        birthdate
        approved_terms_conditions
        patientHistory {
          nextToken
        }
        deleted
        deletedAt
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
          code
          temporary_password
          marital_status
          birthdate
          approved_terms_conditions
          deleted
          deletedAt
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
        diagnosis {
          id
          commentary
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
        specialities {
          nextToken
        }
        subspecialies {
          nextToken
        }
        subspecialiessec {
          nextToken
        }
        sex
        consultingroom {
          id
          secretary
          deleted
          deletedAt
          createdAt
          owner
        }
        image
        deleted
        deletedAt
        createdAt
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
          deleted
          deletedAt
          createdAt
          owner
        }
        address
        code
        temporary_password
        marital_status
        birthdate
        approved_terms_conditions
        patientHistory {
          nextToken
        }
        deleted
        deletedAt
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
          code
          temporary_password
          marital_status
          birthdate
          approved_terms_conditions
          deleted
          deletedAt
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
        diagnosis {
          id
          commentary
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
          deleted
          deletedAt
          createdAt
          owner
        }
        address
        code
        temporary_password
        marital_status
        birthdate
        approved_terms_conditions
        patientHistory {
          nextToken
        }
        deleted
        deletedAt
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
      diagnosis {
        id
        type {
          id
          name
          description
          module
          deleted
          deletedAt
          createdAt
          owner
        }
        evolution {
          id
          name
          description
          module
          deleted
          deletedAt
          createdAt
          owner
        }
        diagnosis {
          id
          name
          description
          deleted
          deletedAt
          createdAt
          owner
        }
        commentary
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
          deleted
          deletedAt
          createdAt
          owner
        }
        address
        code
        temporary_password
        marital_status
        birthdate
        approved_terms_conditions
        patientHistory {
          nextToken
        }
        deleted
        deletedAt
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
      diagnosis {
        id
        type {
          id
          name
          description
          module
          deleted
          deletedAt
          createdAt
          owner
        }
        evolution {
          id
          name
          description
          module
          deleted
          deletedAt
          createdAt
          owner
        }
        diagnosis {
          id
          name
          description
          deleted
          deletedAt
          createdAt
          owner
        }
        commentary
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
          deleted
          deletedAt
          createdAt
          owner
        }
        address
        code
        temporary_password
        marital_status
        birthdate
        approved_terms_conditions
        patientHistory {
          nextToken
        }
        deleted
        deletedAt
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
      diagnosis {
        id
        type {
          id
          name
          description
          module
          deleted
          deletedAt
          createdAt
          owner
        }
        evolution {
          id
          name
          description
          module
          deleted
          deletedAt
          createdAt
          owner
        }
        diagnosis {
          id
          name
          description
          deleted
          deletedAt
          createdAt
          owner
        }
        commentary
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
        deleted
        deletedAt
        createdAt
        owner
      }
      address
      code
      temporary_password
      marital_status
      birthdate
      approved_terms_conditions
      patientHistory {
        items {
          id
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      deleted
      deletedAt
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
        deleted
        deletedAt
        createdAt
        owner
      }
      address
      code
      temporary_password
      marital_status
      birthdate
      approved_terms_conditions
      patientHistory {
        items {
          id
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      deleted
      deletedAt
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
        deleted
        deletedAt
        createdAt
        owner
      }
      address
      code
      temporary_password
      marital_status
      birthdate
      approved_terms_conditions
      patientHistory {
        items {
          id
          doctor
          secretary
          patient
          createdAt
          owner
        }
        nextToken
      }
      deleted
      deletedAt
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
      deleted
      deletedAt
      createdAt
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
      deleted
      deletedAt
      createdAt
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
      deleted
      deletedAt
      createdAt
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
          risk_factor
          doctor
          secretary
          patient
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
        doctor
        secretary
        patient
        createdAt
        owner
      }
      familyHistory {
        items {
          id
          alive
          comment
          doctor
          secretary
          patient
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
          risk_factor
          doctor
          secretary
          patient
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
        doctor
        secretary
        patient
        createdAt
        owner
      }
      familyHistory {
        items {
          id
          alive
          comment
          doctor
          secretary
          patient
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
          risk_factor
          doctor
          secretary
          patient
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
        doctor
        secretary
        patient
        createdAt
        owner
      }
      familyHistory {
        items {
          id
          alive
          comment
          doctor
          secretary
          patient
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
        deleted
        deletedAt
        createdAt
        owner
      }
      active
      frequency
      comment
      risk_factor
      doctor
      secretary
      patient
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
        deleted
        deletedAt
        createdAt
        owner
      }
      active
      frequency
      comment
      risk_factor
      doctor
      secretary
      patient
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
        deleted
        deletedAt
        createdAt
        owner
      }
      active
      frequency
      comment
      risk_factor
      doctor
      secretary
      patient
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
      doctor
      secretary
      patient
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
      doctor
      secretary
      patient
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
      doctor
      secretary
      patient
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
        deleted
        deletedAt
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
      doctor
      secretary
      patient
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
        deleted
        deletedAt
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
      doctor
      secretary
      patient
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
        deleted
        deletedAt
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
      doctor
      secretary
      patient
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
          deleted
          deletedAt
          createdAt
          owner
        }
        alive
        diseases {
          nextToken
        }
        comment
        doctor
        secretary
        patient
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
        deleted
        deletedAt
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
          deleted
          deletedAt
          createdAt
          owner
        }
        alive
        diseases {
          nextToken
        }
        comment
        doctor
        secretary
        patient
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
        deleted
        deletedAt
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
          deleted
          deletedAt
          createdAt
          owner
        }
        alive
        diseases {
          nextToken
        }
        comment
        doctor
        secretary
        patient
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
        deleted
        deletedAt
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
      deleted
      deletedAt
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
      deleted
      deletedAt
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
      deleted
      deletedAt
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
      doctor
      secretary
      patient
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
      doctor
      secretary
      patient
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
      doctor
      secretary
      patient
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
      deleted
      deletedAt
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
      deleted
      deletedAt
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
      deleted
      deletedAt
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
        doctor
        secretary
        patient
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
        deleted
        deletedAt
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
        doctor
        secretary
        patient
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
        deleted
        deletedAt
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
        doctor
        secretary
        patient
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
        deleted
        deletedAt
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
        doctor
        secretary
        patient
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
        doctor
        secretary
        patient
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
        doctor
        secretary
        patient
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
          deleted
          deletedAt
          createdAt
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
        deleted
        deletedAt
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
          deleted
          deletedAt
          createdAt
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
        deleted
        deletedAt
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
          deleted
          deletedAt
          createdAt
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
        deleted
        deletedAt
        createdAt
        owner
      }
      createdAt
    }
  }
`;
export const createOthersFields = /* GraphQL */ `
  mutation CreateOthersFields(
    $input: CreateOthersFieldsInput!
    $condition: ModelOthersFieldsConditionInput
  ) {
    createOthersFields(input: $input, condition: $condition) {
      id
      field {
        id
        name
        modules
        deleted
        deletedAt
        createdAt
        owner
      }
      value
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const updateOthersFields = /* GraphQL */ `
  mutation UpdateOthersFields(
    $input: UpdateOthersFieldsInput!
    $condition: ModelOthersFieldsConditionInput
  ) {
    updateOthersFields(input: $input, condition: $condition) {
      id
      field {
        id
        name
        modules
        deleted
        deletedAt
        createdAt
        owner
      }
      value
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const deleteOthersFields = /* GraphQL */ `
  mutation DeleteOthersFields(
    $input: DeleteOthersFieldsInput!
    $condition: ModelOthersFieldsConditionInput
  ) {
    deleteOthersFields(input: $input, condition: $condition) {
      id
      field {
        id
        name
        modules
        deleted
        deletedAt
        createdAt
        owner
      }
      value
      deleted
      deletedAt
      createdAt
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
      deleted
      deletedAt
      createdAt
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
      deleted
      deletedAt
      createdAt
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
      deleted
      deletedAt
      createdAt
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
      deleted
      deletedAt
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
      deleted
      deletedAt
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
      deleted
      deletedAt
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
        deleted
        deletedAt
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
        deleted
        deletedAt
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
        deleted
        deletedAt
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
        deleted
        deletedAt
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
        deleted
        deletedAt
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
        deleted
        deletedAt
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
      deleted
      deletedAt
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
      deleted
      deletedAt
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
      deleted
      deletedAt
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
        others {
          nextToken
        }
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
        others {
          nextToken
        }
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
        others {
          nextToken
        }
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
      others {
        items {
          id
          value
          deleted
          deletedAt
          createdAt
          owner
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
      others {
        items {
          id
          value
          deleted
          deletedAt
          createdAt
          owner
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
      others {
        items {
          id
          value
          deleted
          deletedAt
          createdAt
          owner
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
      deleted
      deletedAt
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
      deleted
      deletedAt
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
      deleted
      deletedAt
      createdAt
      owner
    }
  }
`;
export const createDiagnosis = /* GraphQL */ `
  mutation CreateDiagnosis(
    $input: CreateDiagnosisInput!
    $condition: ModelDiagnosisConditionInput
  ) {
    createDiagnosis(input: $input, condition: $condition) {
      id
      type {
        id
        name
        description
        module
        deleted
        deletedAt
        createdAt
        owner
      }
      evolution {
        id
        name
        description
        module
        deleted
        deletedAt
        createdAt
        owner
      }
      diagnosis {
        id
        name
        description
        familyDetails {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      commentary
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const updateDiagnosis = /* GraphQL */ `
  mutation UpdateDiagnosis(
    $input: UpdateDiagnosisInput!
    $condition: ModelDiagnosisConditionInput
  ) {
    updateDiagnosis(input: $input, condition: $condition) {
      id
      type {
        id
        name
        description
        module
        deleted
        deletedAt
        createdAt
        owner
      }
      evolution {
        id
        name
        description
        module
        deleted
        deletedAt
        createdAt
        owner
      }
      diagnosis {
        id
        name
        description
        familyDetails {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      commentary
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
export const deleteDiagnosis = /* GraphQL */ `
  mutation DeleteDiagnosis(
    $input: DeleteDiagnosisInput!
    $condition: ModelDiagnosisConditionInput
  ) {
    deleteDiagnosis(input: $input, condition: $condition) {
      id
      type {
        id
        name
        description
        module
        deleted
        deletedAt
        createdAt
        owner
      }
      evolution {
        id
        name
        description
        module
        deleted
        deletedAt
        createdAt
        owner
      }
      diagnosis {
        id
        name
        description
        familyDetails {
          nextToken
        }
        deleted
        deletedAt
        createdAt
        owner
      }
      commentary
      doctor
      secretary
      patient
      createdAt
      owner
    }
  }
`;
