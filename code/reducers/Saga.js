import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as ACTIONS from './Actions';
import { FeaturedController } from '../service';

function* FetchFeaturedSagaHandler() {
    try {
        yield put({ type: ACTIONS.FEATURED.SAGA_FETCH_START });
        
        const data = yield FeaturedController.Fetch();
        if (!data || data == {}) 
            yield put({ type: ACTIONS.FEATURED.SAGA_FETCH_FAILURE, payload: e });
        else
            yield put({ type: ACTIONS.FEATURED.SAGA_FETCH_SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: ACTIONS.FEATURED.SAGA_FETCH_FAILURE, payload: e })
    }
}

function* RootSaga() {
    console.log("[SAGA] Waiting for action triggers.");

    yield takeLatest(ACTIONS.FEATURED.TRIGGER_FETCH, FetchFeaturedSagaHandler);
}

export default RootSaga;