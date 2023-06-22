import { 
    GET_ALL_USER,
    GET_ALL_USER_FAILED, 
    GET_ALL_USER_SUCCESSFUL 
} from "./actionTypes"

const initialState = {
    userListError: null,
    message: null,
    loading: false,
    allUser:null,
}

const getAllUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USER:
            state = {
                ...state,
                loading: true,
                userListError: null,
            }
            break
        case GET_ALL_USER_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                allUser: action.payload,
                userListError: null,
            }
            break
        case GET_ALL_USER_FAILED:
            state = {
                ...state,
                loading: false,
                allUser: null,
                userListError: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default getAllUserReducer
