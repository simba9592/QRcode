import {   
    SEND_INVOICE, 
    SEND_INVOICE_SUCCESSFUL, 
    SEND_INVOICE_FAILED,
} from "./actionTypes"

const initialState = {
    sendinvoiceerror: null,
    message: null,
    loading: false,
    invoicedata:null,
}

const sendInvoiceDetails = (state = initialState, action) => {
    switch (action.type) {
        case SEND_INVOICE:
            state = {
                ...state,
                loading: true,
                sendinvoiceerror: null,
            }
            break
        case SEND_INVOICE_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                invoicedata: action.payload,
                sendinvoiceerror: null,
            }
            break
        case SEND_INVOICE_FAILED:
            state = {
                ...state,
                loading: false,
                invoicedata: null,
                sendinvoiceerror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default sendInvoiceDetails
