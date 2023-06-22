import { 
  OWNER_PROFILE_SEND, 
  OWNER_PROFILE_SEND_SUCCESSFUL, 
  OWNER_PROFILE_SEND_FAILED, 
} from "./actionTypes"

export const getOwnerProflie = user => {
    return {
        type: OWNER_PROFILE_SEND,
        payload: { user },
    }
}

export const getOwnerProflieSuccessful = user => {
    return {
      type: OWNER_PROFILE_SEND_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const getOwnerProflieFailed = user => {
    return {
      type: OWNER_PROFILE_SEND_FAILED,
      payload: user,
    }
  }