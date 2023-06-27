import { 
  SEND_GETCUSTOMER, 
  SEND_GETCUSTOMER_SUCCESSFUL, 
  SEND_GETCUSTOMER_FAILED, 
} from "./actionTypes"

export const sendGetCustomer = user => {
    return {
        type: SEND_GETCUSTOMER,
        payload: { user },
    }
}

export const sendGetCustomerSuccessful = user => {
    return {
      type: SEND_GETCUSTOMER_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const sendGetCustomerFailed = user => {
    return {
      type: SEND_GETCUSTOMER_FAILED,
      payload: user,
    }
  }