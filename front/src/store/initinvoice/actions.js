import { 
  GET_ONE_INVOICE, 
  GET_ONE_INVOICE_SUCCESSFUL, 
  GET_ONE_INVOICE_FAILED, 
} from "./actionTypes"

export const getOneInvoice = user => {
    return {
        type: GET_ONE_INVOICE,
        payload: { user },
    }
}

export const getOneInvoiceSuccessful = user => {
    return {
      type: GET_ONE_INVOICE_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const getOneInvoiceFailed = user => {
    return {
      type: GET_ONE_INVOICE_FAILED,
      payload: user,
    }
  }