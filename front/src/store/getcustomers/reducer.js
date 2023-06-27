import {   
    SEND_GETCUSTOMER, 
    SEND_GETCUSTOMER_SUCCESSFUL, 
    SEND_GETCUSTOMER_FAILED,
} from "./actionTypes"

const initialState = {
    getcustomerserror: null,
    message: null,
    loading: false,
    customer:null,
}

const getCustomersDetails = (state = initialState, action) => {
    switch (action.type) {
        case SEND_GETCUSTOMER:
            state = {
                ...state,
                loading: true,
                getcustomerserror: null,
            }
            break
        case SEND_GETCUSTOMER_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                customer: action.payload,
                getcustomerserror: null,
            }
            break
        case SEND_GETCUSTOMER_FAILED:
            state = {
                ...state,
                loading: false,
                customer: null,
                getcustomerserror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default getCustomersDetails
