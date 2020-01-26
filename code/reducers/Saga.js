import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as ACTIONS from './Actions';
import { FeaturedController, PlaylistController } from '../service';

function* FetchFeaturedSagaHandler() {
    try {
        yield put({ type: ACTIONS.FEATURED.SAGA_FETCH_START });
        
        const data = yield FeaturedController.Fetch();
        if (!data || data == {}) 
            yield put({ type: ACTIONS.FEATURED.SAGA_FETCH_FAILURE });
        else
            yield put({ type: ACTIONS.FEATURED.SAGA_FETCH_SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: ACTIONS.FEATURED.SAGA_FETCH_FAILURE, payload: e })
    }
};

function* FetchPlaylistSagaHandler(action) {
    try {
        yield put({ type: ACTIONS.PLAYLIST.SAGA_FETCH_START });
        
        const data = yield call(PlaylistController.Fetch, action.payload);

        if (!data || data == {}) 
            yield put({ type: ACTIONS.PLAYLIST.SAGA_FETCH_FAILURE });
        else
            yield put({ type: ACTIONS.PLAYLIST.SAGA_FETCH_SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: ACTIONS.PLAYLIST.SAGA_FETCH_FAILURE, payload: e })
    }
};

function* PlayAudioHandler(action) {
    try {
        yield put({ type: ACTIONS.PLAYER.SAGA_LAUNCH_AUDIO, payload: action.payload.Name });
        
        //Make call to method to actually play audio
        //Missing codes here
    } catch (e) {
        yield put({ type: ACTIONS.PLAYLIST.SAGA_FETCH_FAILURE, payload: e })
    }
}

function* RootSaga() {
    console.log("[SAGA] Waiting for action triggers.");

    yield takeLatest(ACTIONS.FEATURED.TRIGGER_FETCH, FetchFeaturedSagaHandler);
    yield takeLatest(ACTIONS.PLAYLIST.TRIGGER_FETCH, FetchPlaylistSagaHandler);
    yield takeLatest(ACTIONS.PLAYLIST.TRIGGER_AUDIO, PlayAudioHandler);
};

export default RootSaga;