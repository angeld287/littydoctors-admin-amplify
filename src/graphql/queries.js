/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConsultingRoom = `query GetConsultingRoom($id: ID!) {
  getConsultingRoom(id: $id) {
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
export const listConsultingRooms = `query ListConsultingRooms(
  $filter: ModelConsultingRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listConsultingRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
    id
    name
  }
}
`;
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const getStripe = `query GetStripe($id: ID!) {
  getStripe(id: $id) {
    id
    source_token
    plan_id
    plan_name
    customer_id
    subscription_id
  }
}
`;
export const listStripes = `query ListStripes(
  $filter: ModelStripeFilterInput
  $limit: Int
  $nextToken: String
) {
  listStripes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      source_token
      plan_id
      plan_name
      customer_id
      subscription_id
    }
    nextToken
  }
}
`;
export const getDoctor = `query GetDoctor($id: ID!) {
  getDoctor(id: $id) {
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
export const listDoctors = `query ListDoctors(
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
      }
      image
    }
    nextToken
  }
}
`;
export const getPatient = `query GetPatient($id: ID!) {
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
  }
}
`;
export const listPatients = `query ListPatients(
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
    }
    nextToken
  }
}
`;
export const getRejection = `query GetRejection($id: ID!) {
  getRejection(id: $id) {
    id
    description
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const listRejections = `query ListRejections(
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
    }
    nextToken
  }
}
`;
export const getCancelation = `query GetCancelation($id: ID!) {
  getCancelation(id: $id) {
    id
    description
  }
}
`;
export const listCancelations = `query ListCancelations(
  $filter: ModelCancelationFilterInput
  $limit: Int
  $nextToken: String
) {
  listCancelations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
    }
    nextToken
  }
}
`;
export const getNotification = `query GetNotification($id: ID!) {
  getNotification(id: $id) {
    id
    state
    doctor
    secretary
    patient
    createdAt
  }
}
`;
export const listNotifications = `query ListNotifications(
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
    }
    nextToken
  }
}
`;
export const getConfirmation = `query GetConfirmation($id: ID!) {
  getConfirmation(id: $id) {
    id
  }
}
`;
export const listConfirmations = `query ListConfirmations(
  $filter: ModelConfirmationFilterInput
  $limit: Int
  $nextToken: String
) {
  listConfirmations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
    }
    nextToken
  }
}
`;
export const getModule = `query GetModule($id: ID!) {
  getModule(id: $id) {
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
export const listModules = `query ListModules(
  $filter: ModelModuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      fields {
        nextToken
      }
      image
      description
    }
    nextToken
  }
}
`;
export const getDoctorCustomModuleProps = `query GetDoctorCustomModuleProps($id: ID!) {
  getDoctorCustomModuleProps(id: $id) {
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
export const listDoctorCustomModulePropss = `query ListDoctorCustomModulePropss(
  $filter: ModelDoctorCustomModulePropsFilterInput
  $limit: Int
  $nextToken: String
) {
  listDoctorCustomModulePropss(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      active
      module {
        id
        name
        image
        description
      }
    }
    nextToken
  }
}
`;
export const getField = `query GetField($id: ID!) {
  getField(id: $id) {
    id
    name
  }
}
`;
export const listFields = `query ListFields(
  $filter: ModelFieldFilterInput
  $limit: Int
  $nextToken: String
) {
  listFields(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const getDoctorCustomFieldProps = `query GetDoctorCustomFieldProps($id: ID!) {
  getDoctorCustomFieldProps(id: $id) {
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
export const listDoctorCustomFieldPropss = `query ListDoctorCustomFieldPropss(
  $filter: ModelDoctorCustomFieldPropsFilterInput
  $limit: Int
  $nextToken: String
) {
  listDoctorCustomFieldPropss(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      required
      visible
      field {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getMedicalAppointment = `query GetMedicalAppointment($id: ID!) {
  getMedicalAppointment(id: $id) {
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
export const listMedicalAppointments = `query ListMedicalAppointments(
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
        nextToken
      }
      cancelation {
        id
        description
      }
      notification {
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
    nextToken
  }
}
`;
