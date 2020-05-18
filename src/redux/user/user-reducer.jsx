import  {UserActionTypes } from './user.types';



const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.EMAIL_SIGNiN_SUCCESS:
        case UserActionTypes.GOOGLE_SIGNiN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error:null
            }
        case UserActionTypes.SIGNNOUTL_SIGNiN_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error:null
            }   
        case UserActionTypes.EMAIL_SIGNiN_FAILURE:
        case UserActionTypes.GOOGLE_SIGNiN_FAILURE:
        case UserActionTypes.SIGNNOUT_SIGNiN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:    
        return {
            ...state,
            error: action.payload
        }
        default: 
            return state;
    }
}

export default userReducer;