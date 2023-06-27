import { 
  SEND_INVOICE, 
  SEND_INVOICE_SUCCESSFUL, 
  SEND_INVOICE_FAILED, 
} from "./actionTypes"

export const sendInvoice = user => {
    return {
        type: SEND_INVOICE,
        payload: { user },
    }
}

export const sendInvoiceSuccessful = user => {
    return {
      type: SEND_INVOICE_SUCCESSFUL,
      payload: user,
    }
  }
  
  export const sendInvoiceFailed = user => {
    return {
      type: SEND_INVOICE_FAILED,
      payload: user,
    }
  }