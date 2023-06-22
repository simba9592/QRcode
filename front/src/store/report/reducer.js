import {   
    SEND_REPORT, 
    SEND_REPORT_SUCCESSFUL, 
    SEND_REPORT_FAILED,
} from "./actionTypes"

const initialState = {
    sendreporterror: null,
    message: null,
    loading: false,
    reportdata:null,
}

const sendReportDetails = (state = initialState, action) => {
    switch (action.type) {
        case SEND_REPORT:
            state = {
                ...state,
                loading: true,
                sendreporterror: null,
            }
            break
        case SEND_REPORT_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                reportdata: action.payload,
                sendreporterror: null,
            }
            break
        case SEND_REPORT_FAILED:
            state = {
                ...state,
                loading: false,
                reportdata: null,
                sendreporterror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default sendReportDetails
