import { 
  RECEIVE_REPORT, 
  RECEIVE_REPORT_SUCCESSFUL, 
  RECEIVE_REPORT_FAILED, 
} from "./actionTypes"

export const receiveReport = user => {
    return {
        type: RECEIVE_REPORT,
        payload: { user },
    }
}

export const receiveReportSuccessful = user => {
    return {
      type: RECEIVE_REPORT_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const receiveReportFailed = user => {
    return {
      type: RECEIVE_REPORT_FAILED,
      payload: user,
    }
  }