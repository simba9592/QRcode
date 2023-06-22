import { 
    OWNER_PROFILE_SEND, 
    OWNER_PROFILE_SEND_SUCCESSFUL, 
    OWNER_PROFILE_SEND_FAILED, 
} from "./actionTypes"

const initialState = {
    ownerProfileerror: null,
    loading: false,
    ownerprofile:null,
}

const getOwnerProflieData = (state = initialState, action) => {
    switch (action.type) {
        case OWNER_PROFILE_SEND:
            state = {
                ...state,
                loading: true,
                ownerProfileerror: null,
            }
            break
        case OWNER_PROFILE_SEND_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                ownerprofile: action.payload,
                ownerProfileerror: null,
            }
            break
        case OWNER_PROFILE_SEND_FAILED:
            state = {
                ...state,
                loading: false,
                ownerprofile: null,
                ownerProfileerror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default getOwnerProflieData
