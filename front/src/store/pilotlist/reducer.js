import { 
    GET_ALL_PILOT,
    GET_ALL_PILOT_FAILED, 
    GET_ALL_PILOT_SUCCESSFUL 
} from "./actionTypes"

const initialState = {
    owenrListError: null,
    message: null,
    loading: false,
    allPilot:null,
}

const getAllPilotReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PILOT:
            state = {
                ...state,
                loading: true,
                owenrListError: null,
            }
            break
        case GET_ALL_PILOT_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                allPilot: action.payload,
                owenrListError: null,
            }
            break
        case GET_ALL_PILOT_FAILED:
            state = {
                ...state,
                loading: false,
                allPilot: null,
                owenrListError: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default getAllPilotReducer
