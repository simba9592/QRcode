import {   
    GET_PAYMENTS, 
    GET_PAYMENTS_SUCCESSFUL, 
    GET_PAYMENTS_FAILED,
} from "./actionTypes"

const initialState = {
    getpaymentserror: null,
    message: null,
    loading: false,
    paymentsdata:null,
}

const getPaymentsDetails = (state = initialState, action) => {
    switch (action.type) {
        case GET_PAYMENTS:
            state = {
                ...state,
                loading: true,
                getpaymentserror: null,
            }
            break
        case GET_PAYMENTS_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                paymentsdata: action.payload,
                getpaymentserror: null,
            }
            break
        case GET_PAYMENTS_FAILED:
            state = {
                ...state,
                loading: false,
                paymentsdata: null,
                getpaymentserror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default getPaymentsDetails
