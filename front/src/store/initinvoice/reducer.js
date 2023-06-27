import { 
    GET_ONE_INVOICE,
    GET_ONE_INVOICE_FAILED, 
    GET_ONE_INVOICE_SUCCESSFUL 
} from "./actionTypes"

const initialState = {
    invoiceerror: null,
    message: null,
    loading: false,
    invoicedata:null,
}

const getOneInvoiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USER:
            state = {
                ...state,
                loading: true,
                invoiceerror: null,
            }
            break
        case GET_ALL_USER_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                invoicedata: action.payload,
                invoiceerror: null,
            }
            break
        case GET_ALL_USER_FAILED:
            state = {
                ...state,
                loading: false,
                invoicedata: null,
                invoiceerror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default getOneInvoiceReducer
