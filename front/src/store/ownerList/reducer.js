import { 
    GET_ALL_OWNER,
    GET_ALL_OWNER_FAILED, 
    GET_ALL_OWNER_SUCCESSFUL 
} from "./actionTypes"

const initialState = {
    owenrListError: null,
    message: null,
    loading: false,
    allOwner:null,
}

const getAllOwnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_OWNER:
            state = {
                ...state,
                loading: true,
                owenrListError: null,
            }
            break
        case GET_ALL_OWNER_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                allOwner: action.payload,
                owenrListError: null,
            }
            break
        case GET_ALL_OWNER_FAILED:
            state = {
                ...state,
                loading: false,
                allOwner: null,
                owenrListError: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default getAllOwnerReducer
