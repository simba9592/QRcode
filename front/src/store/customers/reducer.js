import {   
    SEND_CUSTOMERS, 
    SEND_CUSTOMERS_SUCCESSFUL, 
    SEND_CUSTOMERS_FAILED,
} from "./actionTypes"

const initialState = {
    sendcustomerserror: null,
    message: null,
    loading: false,
    customersdata:null,
}

const sendCustomersDetails = (state = initialState, action) => {
    switch (action.type) {
        case SEND_CUSTOMERS:
            state = {
                ...state,
                loading: true,
                sendcustomerserror: null,
            }
            break
        case SEND_CUSTOMERS_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                customersdata: action.payload,
                sendcustomerserror: null,
            }
            break
        case SEND_CUSTOMERS_FAILED:
            state = {
                ...state,
                loading: false,
                customersdata: null,
                sendcustomerserror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default sendCustomersDetails
