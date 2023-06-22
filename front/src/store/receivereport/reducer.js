import { 
    RECEIVE_REPORT, 
    RECEIVE_REPORT_SUCCESSFUL, 
    RECEIVE_REPORT_FAILED, 
  } from "./actionTypes"

const initialState = {
    receivedataerror: null,
    message: null,
    loading: false,
    receivedata:null,
}

const receiveReportData = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_REPORT:
            state = {
                ...state,
                loading: true,
                receivedataerror: null,
            }
            break
        case RECEIVE_REPORT_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                receivedata: action.payload,
                receivedataerror: null,
            }
            break
        case RECEIVE_REPORT_FAILED:
            state = {
                ...state,
                loading: false,
                receivedata: null,
                receivedataerror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default receiveReportData
