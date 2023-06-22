import { 
    AIRPLANE_PROFILE_SEND, 
    AIRPLANE_PROFILE_SEND_SUCCESSFUL, 
    AIRPLANE_PROFILE_SEND_FAILED, 
} from "./actionTypes"

const initialState = {
    AirplaneProfileerror: null,
    loading: false,
    Airplaneprofile:null,
}

const getAirplaneProflieData = (state = initialState, action) => {
    switch (action.type) {
        case AIRPLANE_PROFILE_SEND:
            state = {
                ...state,
                loading: true,
                AirplaneProfileerror: null,
            }
            break
        case AIRPLANE_PROFILE_SEND_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                Airplaneprofile: action.payload,
                AirplaneProfileerror: null,
            }
            break
        case AIRPLANE_PROFILE_SEND_FAILED:
            state = {
                ...state,
                loading: false,
                Airplaneprofile: null,
                AirplaneProfileerror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default getAirplaneProflieData
