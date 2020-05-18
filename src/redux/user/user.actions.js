import  {UserActionTypes } from './user.types';

export const setCurrentUser = user => (
    {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    }
);

export const googleSigniNStart = () => (
{
    type: UserActionTypes.GOOGLE_SIGNiN_START
}
);

export const googleSignInSuccess = (user) => (
    {
        type: UserActionTypes.GOOGLE_SIGNiN_SUCCESS,
        payload:user
    }
);

export const googleSignInFailure = error => (
    {
        type: UserActionTypes.GOOGLE_SIGNiN_FAILURE,
        payload:error
    }
);
export const emailSigniNStart = emailAndPassword => (
    {
        type: UserActionTypes.EMAIL_SIGNiN_START,
        payload: emailAndPassword
    }
);
            
export const emailSignInSuccess = (user) => (
    {
        type: UserActionTypes.EMAIL_SIGNiN_SUCCESS,
        payload:user
    }
);

export const emailSignInFailure = error => (
    {
        type: UserActionTypes.EMAIL_SIGNiN_FAILURE,
        payload:error
});

export const signOutStart  = () => ({
    type: UserActionTypes.SIGNNOUT_SIGNiN_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGNNOUTL_SIGNiN_SUCCESS
});


export const signOutFailure = error => (
    {
        type: UserActionTypes.SIGNNOUT_SIGNiN_FAILURE,
        payload:error
});


export const signUpStart = (signUpPayload) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload:signUpPayload
});

export const signUpSuccess = ({user, password, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user, password, additionalData}
});

export const signUpFailure = error => ({
    type: UserActionTypes.SIGNNOUT_SIGNiN_FAILURE,
    payload:error
})
        