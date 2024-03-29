export const USER = {
    SIGN_UP: {
      SUCCESS: "USER_SIGN_UP_SUCCESS",
      FAILURE: "USER_SIGN_UP_FAILURE"
    },
    SET : {
       TOKEN: "USER_SET_TOKEN"
    },
    SIGN_IN: {
        SUCCESS: "USER_SIGN_IN_SUCCESS",
        FAILURE: "USER_SIGN_IN_FAILURE"
    },
    SIGN_OUT: {
        SUCCESS: "USER_SIGN_OUT_SUCCESS",
        FAILURE: "USER_SIGN_OUT_FAILURE"
    },
    RETRIEVE : {
        SUCCESS: "RETRIEVE_USER_SUCCESS",
        FAILURE: "RETRIEVE_USER_FAILURE"
    },
    GET_LIST: {
        SUCCESS: "USER_GET_LIST_SUCCESS",
        FAILURE: "USER_GET_LIST_FAILURE"
    },
    GET_MY_PROFILE: {
        SUCCESS: "GET_MY_PROFILE_SUCCESS",
        FAILURE: "GET_MY_PROFILE_FAILURE"
    },
    LOGGED_OUT: {
        SUCCESS: "LOGGED_OUT_SUCCESS"
    },
    EDIT_PROFILE: {
        SUCCESS: "EDIT_PROFILE_SUCCESS",
        FAILURE: "EDIT_PROFILE_FAILURE"
    },
    EDIT_FIELD: {
        SUCCESS: "EDIT_FIELD_SUCCESS",
        FAILURE: "EDIT_FIELD_FAILURE"
    }
};

export const INCIDENT = {
  GET : {
      SUCCESS: "GET_INCIDENTS_SUCCESS",
      FAILURE: "GET_INCIDENTS_FAILURE"
  },
  CREATE : {
      SUCCESS: "POST_INCIDENT_SUCCESS",
      FAILURE: "POST_INCIDENT_FAILURE"
  },
  DELETE: {
      SUCCESS: "DELETE_INCIDENT_SUCCESS",
      FAILURE: "DELETE_INCIDENT_FAILURE"
  },
  CHANGE_FILTER: {
      SUCCESS: "CHANGE_FILTER_SUCCESS",
      FAILURE: "CHANGE_FILTER_FAILURE"
  },
  RESET: {
      SUCCESS: "RESET_SUCCESS"
  },
    ADD_NARRATIVE: {
        SUCCESS: "ADD_NARRATIVE_SUCCESS",
        FAILURE: "ADD_NARRATIVE_FAILURE"
    },
    EDIT: {
        SUCCESS: "EDIT_INCIDENT_SUCCESS",
        FAILURE: "EDIT_INCIDENT_FAILURE"
    },
    DETAILS: {
        SUCCESS: "DETAILS_INCIDENT_SUCCESS",
        FAILURE: "DETAILS_INCIDENT_FAILURE"
    }
};

export const STATUS = {
    ACTIVE: "ACTIVE",
    DELETED: "DELETED",
    PAUSE: "PAUSE",
    RESOLVED: "RESOLVED",
    CANCELLED: "CANCELLED",
    NEW: "NEW"
};

export const HTTP_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
};

export const LOADING = {
    SPINNER : {
        START: "START_SPINNER",
        STOP: "STOP_SPINNER"
    }
};

export const NODE_ENV = {
    development : "development",
    production: "production"
};