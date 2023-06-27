import { 
  SEND_BUILDING, 
  SEND_BUILDING_SUCCESSFUL, 
  SEND_BUILDING_FAILED, 
} from "./actionTypes"

export const sendBuilding = user => {
    return {
        type: SEND_BUILDING,
        payload: { user },
    }
}

export const sendBuildingsSuccessful = user => {
    return {
      type: SEND_BUILDING_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const sendBuildingsFailed = user => {
    return {
      type: SEND_BUILDING_FAILED,
      payload: user,
    }
  }