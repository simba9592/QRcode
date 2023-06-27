import {   
    SEND_BUILDING, 
    SEND_BUILDING_SUCCESSFUL, 
    SEND_BUILDING_FAILED,
} from "./actionTypes"

const initialState = {
    sendbuildingserror: null,
    message: null,
    loading: false,
    buildingsdata:null,
}

const sendBuildingsDetails = (state = initialState, action) => {
    switch (action.type) {
        case SEND_BUILDING:
            state = {
                ...state,
                loading: true,
                sendbuildingserror: null,
            }
            break
        case SEND_BUILDING_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                buildingsdata: action.payload,
                sendbuildingserror: null,
            }
            break
        case SEND_BUILDING_FAILED:
            state = {
                ...state,
                loading: false,
                buildingsdata: null,
                sendbuildingserror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default sendBuildingsDetails
