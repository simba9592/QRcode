import { 
  AIRPLANE_PROFILE_SEND, 
  AIRPLANE_PROFILE_SEND_SUCCESSFUL, 
  AIRPLANE_PROFILE_SEND_FAILED, 
} from "./actionTypes"

export const getAirplaneProflie = user => {
    return {
        type: AIRPLANE_PROFILE_SEND,
        payload: { user },
    }
}

export const getAirplaneProflieSuccessful = user => {
    return {
      type: AIRPLANE_PROFILE_SEND_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const getAirplaneProflieFailed = user => {
    return {
      type: AIRPLANE_PROFILE_SEND_FAILED,
      payload: user,
    }
  }