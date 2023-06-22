import { 
    GET_ALL_AIRPLANE,
    GET_ALL_AIRPLANE_FAILED, 
    GET_ALL_AIRPLANE_SUCCESSFUL 
} from "./actionTypes"

const initialState = {
    airplaneListError: null,
    message: null,
    loading: false,
    allAirplane:null,
}

const getAllAirplaneReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_AIRPLANE:
            state = {
                ...state,
                loading: true,
                airplaneListError: null,
            }
            break
        case GET_ALL_AIRPLANE_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                allAirplane: action.payload,
                airplaneListError: null,
            }
            break
        case GET_ALL_AIRPLANE_FAILED:
            state = {
                ...state,
                loading: false,
                allAirplane: null,
                airplaneListError: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default getAllAirplaneReducer
