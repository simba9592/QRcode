import { 
  SEND_PAYMENTS, 
  SEND_PAYMENTS_SUCCESSFUL, 
  SEND_PAYMENTS_FAILED, 
} from "./actionTypes"

export const sendPayments = user => {
    return {
        type: SEND_PAYMENTS,
        payload: { user },
    }
}

export const sendPaymentsSuccessful = user => {
    return {
      type: SEND_PAYMENTS_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const sendPaymentsFailed = user => {
    return {
      type: SEND_PAYMENTS_FAILED,
      payload: user,
    }
  }