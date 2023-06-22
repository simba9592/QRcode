import { 
    PILOT_PROFILE_SEND, 
    PILOT_PROFILE_SEND_SUCCESSFUL, 
    PILOT_PROFILE_SEND_FAILED, 
} from "./actionTypes"

const initialState = {
    pilotProfileerror: null,
    loading: false,
    pilotprofile:null,
}

const getPilotProflieData = (state = initialState, action) => {
    switch (action.type) {
        case PILOT_PROFILE_SEND:
            state = {
                ...state,
                loading: true,
                pilotProfileerror: null,
            }
            break
        case PILOT_PROFILE_SEND_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                pilotprofile: action.payload,
                pilotProfileerror: null,
            }
            break
        case PILOT_PROFILE_SEND_FAILED:
            state = {
                ...state,
                loading: false,
                pilotprofile: null,
                pilotProfileerror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default getPilotProflieData
