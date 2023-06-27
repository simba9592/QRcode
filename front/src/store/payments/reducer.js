import {   
    SEND_PAYMENTS, 
    SEND_PAYMENTS_SUCCESSFUL, 
    SEND_PAYMENTS_FAILED,
} from "./actionTypes"

const initialState = {
    sendpaymentserror: null,
    message: null,
    loading: false,
    paymentsdata:null,
}

const sendPaymentsDetails = (state = initialState, action) => {
    switch (action.type) {
        case SEND_PAYMENTS:
            state = {
                ...state,
                loading: true,
                sendpaymentserror: null,
            }
            break
        case SEND_PAYMENTS_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                paymentsdata: action.payload,
                sendpaymentserror: null,
            }
            break
        case SEND_PAYMENTS_FAILED:
            state = {
                ...state,
                loading: false,
                paymentsdata: null,
                sendpaymentserror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default sendPaymentsDetails
