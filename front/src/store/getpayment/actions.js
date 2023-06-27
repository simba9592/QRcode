import { 
  GET_PAYMENTS, 
  GET_PAYMENTS_SUCCESSFUL, 
  GET_PAYMENTS_FAILED, 
} from "./actionTypes"

export const getPayments = user => {
    return {
        type: GET_PAYMENTS,
        payload: { user },
    }
}

export const getPaymentsSuccessful = user => {
    return {
      type: GET_PAYMENTS_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const getPaymentsFailed = user => {
    return {
      type: GET_PAYMENTS_FAILED,
      payload: user,
    }
  }