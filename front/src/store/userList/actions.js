import { 
  GET_ALL_USER, 
  GET_ALL_USER_SUCCESSFUL, 
  GET_ALL_USER_FAILED, 
} from "./actionTypes"

export const getAllUser = user => {
    return {
        type: GET_ALL_USER,
        payload: { user },
    }
}

export const getAllUserSuccessful = user => {
    return {
      type: GET_ALL_USER_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const getAllUserFailed = user => {
    return {
      type: GET_ALL_USER_FAILED,
      payload: user,
    }
  }