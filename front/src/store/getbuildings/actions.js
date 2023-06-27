import { 
  GET_BUILDING, 
  GET_BUILDING_SUCCESSFUL, 
  GET_BUILDING_FAILED, 
} from "./actionTypes"

export const getBuilding = user => {
    return {
        type: GET_BUILDING,
        payload: { user },
    }
}

export const getBuildingSuccessful = user => {
    return {
      type: GET_BUILDING_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const getBuildingFailed = user => {
    return {
      type: GET_BUILDING_FAILED,
      payload: user,
    }
  }