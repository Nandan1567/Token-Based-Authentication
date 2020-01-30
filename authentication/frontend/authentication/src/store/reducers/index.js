import * as actionType from '../actions/actionType';

const initialState = {
    token: null,
    error: null
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionType.AUTH_SUCCESS:
            return {...state, token: action.payload}

        case actionType.AUTH_FAIL:
            return {...state, error: action.payload}

        case actionType.AUTH_LOGOUT:
            return {...state, token: action.payload}
        
        default:
            return state
    }
}

export default reducer;