import {takeLatest, all, call, put} from 'redux-saga/effects';

import {UserActionTypes} from '../user/user.types';

import {clearCart} from './cart.actions';

export function* clearCartSignOut() {
    yield put(clearCart());
}


export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGNNOUTL_SIGNiN_SUCCESS, clearCartSignOut)
}


export function* cartSagas() {

    yield all([call(onSignOutSuccess)]);
}