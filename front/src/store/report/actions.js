import { 
  SEND_REPORT, 
  SEND_REPORT_SUCCESSFUL, 
  SEND_REPORT_FAILED, 
} from "./actionTypes"

export const sendReport = user => {
    return {
        type: SEND_REPORT,
        payload: { user },
    }
}

export const sendReportSuccessful = user => {
    return {
      type: SEND_REPORT_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const sendReportFailed = user => {
    return {
      type: SEND_REPORT_FAILED,
      payload: user,
    }
  }