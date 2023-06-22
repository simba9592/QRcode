import { 
  GET_ALL_OWNER, 
  GET_ALL_OWNER_SUCCESSFUL, 
  GET_ALL_OWNER_FAILED, 
} from "./actionTypes"

export const getAllOwner = user => {
    return {
        type: GET_ALL_OWNER,
        payload: { user },
    }
}

export const getAllOwnerSuccessful = user => {
    return {
      type: GET_ALL_OWNER_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const getAllOwnerFailed = user => {
    return {
      type: GET_ALL_OWNER_FAILED,
      payload: user,
    }
  }