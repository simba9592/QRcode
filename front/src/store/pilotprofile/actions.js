import { 
  PILOT_PROFILE_SEND, 
  PILOT_PROFILE_SEND_SUCCESSFUL, 
  PILOT_PROFILE_SEND_FAILED, 
} from "./actionTypes"

export const getPilotProflie = user => {
    return {
        type: PILOT_PROFILE_SEND,
        payload: { user },
    }
}

export const getPilotProflieSuccessful = user => {
    return {
      type: PILOT_PROFILE_SEND_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const getPilotProflieFailed = user => {
    return {
      type: PILOT_PROFILE_SEND_FAILED,
      payload: user,
    }
  }