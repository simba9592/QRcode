import {   
    GET_BUILDING, 
    GET_BUILDING_SUCCESSFUL, 
    GET_BUILDING_FAILED, 
} from "./actionTypes"

const initialState = {
    getbuildingerror: null,
    message: null,
    loading: false,
    buildingdata:null,
}

const getBuildingDetails = (state = initialState, action) => {
    switch (action.type) {
        case GET_BUILDING:
            state = {
                ...state,
                loading: true,
                getbuildingerror: null,
            }
            break
        case GET_BUILDING_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                buildingdata: action.payload,
                getbuildingerror: null,
            }
            break
        case GET_BUILDING_FAILED:
            state = {
                ...state,
                loading: false,
                buildingdata: null,
                getbuildingerror: action.payload,
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default getBuildingDetails
