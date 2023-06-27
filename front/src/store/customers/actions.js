import { 
  SEND_CUSTOMERS, 
  SEND_CUSTOMERS_SUCCESSFUL, 
  SEND_CUSTOMERS_FAILED, 
} from "./actionTypes"

export const sendCustomers = user => {
    return {
        type: SEND_CUSTOMERS,
        payload: { user },
    }
}

export const sendCustomersSuccessful = user => {
    return {
      type: SEND_CUSTOMERS_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const sendCustomersFailed = user => {
    return {
      type: SEND_CUSTOMERS_FAILED,
      payload: user,
    }
  }