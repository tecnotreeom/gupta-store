import {takeLatest, put, all, call} from 'redux-saga/effects';

import {UserActionTypes} from './user.types';

import {googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure} from './user.actions';

import {auth, googleProvider, createUserProfileDocument} from '../../firebase/firebase.utils';


export function* signInWithGoogle() {
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef  = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    }catch(error) {
        yield put(googleSignInFailure(error));
    }
}

export function* signInWithEmail({payload: {email, password}}, additionalData) {
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef  = yield call(createUserProfileDocument, user, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(emailSignInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    }catch(error){
        yield put(emailSignInFailure(error))
    }
}

export function* signUpStart({payload: {email, password, displayName}}) {
    try {
        const {user}  =  yield auth.createUserWithEmailAndPassword(email, password);

        yield put(signUpSuccess({user, password, additionalData: {displayName}}))

    }catch(error) {
      yield  put(signUpFailure(error));
    }
}
export function* signInWithSignUp({payload: {user, password, additionalData}}) {
    const userEmail = user.email;
    try{
        const {user} = yield auth.signInWithEmailAndPassword(userEmail, password);
        const userRef  = yield call(createUserProfileDocument, user, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(emailSignInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    }catch(error){
        yield put(emailSignInFailure(error))
    }
}


export function* signOutStart() {
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }catch(error){
        yield put(signOutFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGNiN_START, signInWithGoogle);
}

export function* onsignOutStart() {
    yield takeLatest(UserActionTypes.SIGNNOUT_SIGNiN_START, signOutStart);
};

export function* onEmailSinInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGNiN_START, signInWithEmail)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUpStart);
}
export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInWithSignUp)
}


export function* userSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSinInStart), call(onsignOutStart), call(onSignUpStart), call(onSignUpSuccess)]);
}