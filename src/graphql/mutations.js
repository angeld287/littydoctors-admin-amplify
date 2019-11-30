/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConsultingRoom = `mutation CreateConsultingRoom($input: CreateConsultingRoomInput!) {
  createConsultingRoom(input: $input) {
    id
    modules {
      items {
        id
        name
        image
        description
      }
      nextToken
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
      }
      image
    }
    stripe {
      id
      source_token
      plan_id
      plan_name
      customer_id
      subscription_id
    }
    secretary
    location {
      id
      name
    }
  }
}
`;
export const updateConsultingRoom = `mutation UpdateConsultingRoom($input: UpdateConsultingRoomInput!) {
  updateConsultingRoom(input: $input) {
    id
    modules {
      items {
        id
        name
        image
        description
      }
      nextToken
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
      }
      image
    }
    stripe {
      id
      source_token
      plan_id
      plan_name
      customer_id
      subscription_id
    }
    secretary
    location {
      id
      name
    }
  }
}
`;
export const deleteConsultingRoom = `mutation DeleteConsultingRoom($input: DeleteConsultingRoomInput!) {
  deleteConsultingRoom(input: $input) {
    id
    modules {
      items {
        id
        name
        image
        description
      }
      nextToken
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
      }
      image
    }
    stripe {
      id
      source_token
      plan_id
      plan_name
      customer_id
      subscription_id
    }
    secretary
    location {
      id
      name
    }
  }
}
`;
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    id
    name
  }
}
`;
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
    id
    name
  }
}
`;
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
    id
    name
  }
}
`;
export const createStripe = `mutation CreateStripe($input: CreateStripeInput!) {
  createStripe(input: $input) {
    id
    source_token
    plan_id
    plan_name
    customer_id
    subscription_id
  }
}
`;
export const updateStripe = `mutation UpdateStripe($input: UpdateStripeInput!) {
  updateStripe(input: $input) {
    id
    source_token
    plan_id
    plan_name
    customer_id
    subscription_id
  }
}
`;
export const deleteStripe = `mutation DeleteStripe($input: DeleteStripeInput!) {
  deleteStripe(input: $input) {
    id
    source_token
    plan_id
    plan_name
    customer_id
    subscription_id
  }
}
`;
export const createDoctor = `mutation CreateDoctor($input: CreateDoctorInput!) {
  createDoctor(input: $input) {
    id
    name
    username
    email
    speciality
    sex
    consultingroom {
      id
      modules {
        nextToken
      }
      doctor {
        id
        name
        username
        email
        speciality
        sex
        image
      }
      stripe {
        id
        source_token
        plan_id
        plan_name
        customer_id
        subscription_id
      }
      secretary
      location {
        id
        name
      }
    }
    image
  }
}
`;
export const updateDoctor = `mutation UpdateDoctor($input: UpdateDoctorInput!) {
  updateDoctor(input: $input) {
    id
    name
    username
    email
    speciality
    sex
    consultingroom {
      id
      modules {
        nextToken
      }
      doctor {
        id
        name
        username
        email
        speciality
        sex
        image
      }
      stripe {
        id
        source_token
        plan_id
        plan_name
        customer_id
        subscription_id
      }
      secretary
      location {
        id
        name
      }
    }
    image
  }
}
`;
export const deleteDoctor = `mutation DeleteDoctor($input: DeleteDoctorInput!) {
  deleteDoctor(input: $input) {
    id
    name
    username
    email
    speciality
    sex
    consultingroom {
      id
      modules {
        nextToken
      }
      doctor {
        id
        name
        username
        email
        speciality
        sex
        image
      }
      stripe {
        id
        source_token
        plan_id
        plan_name
        customer_id
        subscription_id
      }
      secretary
      location {
        id
        name
      }
    }
    image
  }
}
`;
export const createPatient = `mutation CreatePatient($input: CreatePatientInput!) {
  createPatient(input: $input) {
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
  }
}
`;
export const updatePatient = `mutation UpdatePatient($input: UpdatePatientInput!) {
  updatePatient(input: $input) {
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
  }
}
`;
export const deletePatient = `mutation DeletePatient($input: DeletePatientInput!) {
  deletePatient(input: $input) {
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
  }
}
`;
export const createRejection = `mutation CreateRejection($input: CreateRejectionInput!) {
  createRejection(input: $input) {
    id
    description
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const updateRejection = `mutation UpdateRejection($input: UpdateRejectionInput!) {
  updateRejection(input: $input) {
    id
    description
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const deleteRejection = `mutation DeleteRejection($input: DeleteRejectionInput!) {
  deleteRejection(input: $input) {
    id
    description
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const createCancelation = `mutation CreateCancelation($input: CreateCancelationInput!) {
  createCancelation(input: $input) {
    id
    description
  }
}
`;
export const updateCancelation = `mutation UpdateCancelation($input: UpdateCancelationInput!) {
  updateCancelation(input: $input) {
    id
    description
  }
}
`;
export const deleteCancelation = `mutation DeleteCancelation($input: DeleteCancelationInput!) {
  deleteCancelation(input: $input) {
    id
    description
  }
}
`;
export const createNotification = `mutation CreateNotification($input: CreateNotificationInput!) {
  createNotification(input: $input) {
    id
    state
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const updateNotification = `mutation UpdateNotification($input: UpdateNotificationInput!) {
  updateNotification(input: $input) {
    id
    state
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const deleteNotification = `mutation DeleteNotification($input: DeleteNotificationInput!) {
  deleteNotification(input: $input) {
    id
    state
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const createConfirmation = `mutation CreateConfirmation($input: CreateConfirmationInput!) {
  createConfirmation(input: $input) {
    id
  }
}
`;
export const updateConfirmation = `mutation UpdateConfirmation($input: UpdateConfirmationInput!) {
  updateConfirmation(input: $input) {
    id
  }
}
`;
export const deleteConfirmation = `mutation DeleteConfirmation($input: DeleteConfirmationInput!) {
  deleteConfirmation(input: $input) {
    id
  }
}
`;
export const createModule = `mutation CreateModule($input: CreateModuleInput!) {
  createModule(input: $input) {
    id
    name
    fields {
      items {
        id
        name
      }
      nextToken
    }
    image
    description
  }
}
`;
export const updateModule = `mutation UpdateModule($input: UpdateModuleInput!) {
  updateModule(input: $input) {
    id
    name
    fields {
      items {
        id
        name
      }
      nextToken
    }
    image
    description
  }
}
`;
export const deleteModule = `mutation DeleteModule($input: DeleteModuleInput!) {
  deleteModule(input: $input) {
    id
    name
    fields {
      items {
        id
        name
      }
      nextToken
    }
    image
    description
  }
}
`;
export const createDoctorCustomModuleProps = `mutation CreateDoctorCustomModuleProps(
  $input: CreateDoctorCustomModulePropsInput!
) {
  createDoctorCustomModuleProps(input: $input) {
    id
    active
    module {
      id
      name
      fields {
        nextToken
      }
      image
      description
    }
  }
}
`;
export const updateDoctorCustomModuleProps = `mutation UpdateDoctorCustomModuleProps(
  $input: UpdateDoctorCustomModulePropsInput!
) {
  updateDoctorCustomModuleProps(input: $input) {
    id
    active
    module {
      id
      name
      fields {
        nextToken
      }
      image
      description
    }
  }
}
`;
export const deleteDoctorCustomModuleProps = `mutation DeleteDoctorCustomModuleProps(
  $input: DeleteDoctorCustomModulePropsInput!
) {
  deleteDoctorCustomModuleProps(input: $input) {
    id
    active
    module {
      id
      name
      fields {
        nextToken
      }
      image
      description
    }
  }
}
`;
export const createField = `mutation CreateField($input: CreateFieldInput!) {
  createField(input: $input) {
    id
    name
  }
}
`;
export const updateField = `mutation UpdateField($input: UpdateFieldInput!) {
  updateField(input: $input) {
    id
    name
  }
}
`;
export const deleteField = `mutation DeleteField($input: DeleteFieldInput!) {
  deleteField(input: $input) {
    id
    name
  }
}
`;
export const createDoctorCustomFieldProps = `mutation CreateDoctorCustomFieldProps(
  $input: CreateDoctorCustomFieldPropsInput!
) {
  createDoctorCustomFieldProps(input: $input) {
    id
    name
    required
    visible
    field {
      id
      name
    }
  }
}
`;
export const updateDoctorCustomFieldProps = `mutation UpdateDoctorCustomFieldProps(
  $input: UpdateDoctorCustomFieldPropsInput!
) {
  updateDoctorCustomFieldProps(input: $input) {
    id
    name
    required
    visible
    field {
      id
      name
    }
  }
}
`;
export const deleteDoctorCustomFieldProps = `mutation DeleteDoctorCustomFieldProps(
  $input: DeleteDoctorCustomFieldPropsInput!
) {
  deleteDoctorCustomFieldProps(input: $input) {
    id
    name
    required
    visible
    field {
      id
      name
    }
  }
}
`;
export const createMedicalAppointment = `mutation CreateMedicalAppointment($input: CreateMedicalAppointmentInput!) {
  createMedicalAppointment(input: $input) {
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
      consultingroom {
        id
        secretary
      }
      image
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
    read_client
    createdAt
  }
}
`;
export const updateMedicalAppointment = `mutation UpdateMedicalAppointment($input: UpdateMedicalAppointmentInput!) {
  updateMedicalAppointment(input: $input) {
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
      consultingroom {
        id
        secretary
      }
      image
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
    read_client
    createdAt
  }
}
`;
export const deleteMedicalAppointment = `mutation DeleteMedicalAppointment($input: DeleteMedicalAppointmentInput!) {
  deleteMedicalAppointment(input: $input) {
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
      consultingroom {
        id
        secretary
      }
      image
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
    read_client
    createdAt
  }
}
`;
