import { 
  GET_ALL_PILOT, 
  GET_ALL_PILOT_SUCCESSFUL, 
  GET_ALL_PILOT_FAILED, 
} from "./actionTypes"

export const getAllPilot = user => {
    return {
        type: GET_ALL_PILOT,
        payload: { user },
    }
}

export const getAllPilotSuccessful = user => {
    return {
      type: GET_ALL_PILOT_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const getAllPilotFailed = user => {
    return {
      type: GET_ALL_PILOT_FAILED,
      payload: user,
    }
  }