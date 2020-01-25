import * as ACTIONS from './Actions';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* RootSaga() {
    console.log("[SAGA] Waiting for action triggers.");
}

export default RootSaga;