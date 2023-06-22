import { 
  GET_ALL_AIRPLANE, 
  GET_ALL_AIRPLANE_SUCCESSFUL, 
  GET_ALL_AIRPLANE_FAILED, 
} from "./actionTypes"

export const getAllAirplane = user => {
    return {
        type: GET_ALL_AIRPLANE,
        payload: { user },
    }
}

export const getAllAirplaneSuccessful = user => {
    return {
      type: GET_ALL_AIRPLANE_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const getAllAirplaneFailed = user => {
    return {
      type: GET_ALL_AIRPLANE_FAILED,
      payload: user,
    }
  }