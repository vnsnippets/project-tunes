/**
 * Author: Vidush H. Namah (2020)
 * 
 * Reducer for Featured Playlists
 * State schema
 * - Loading : Indicates whether data is being refreshed
 * - Data : List of featured playlists
 * - Error : Error message indicator
 */
import * as ACTIONS from '../Actions';

const INITIAL = {
    Data: {
        images: [],
        followers: {},
        description: null,
        name: null,
        "primary_color": null,
        owner: {},
        tracks: {}
    },
    Error: null,
    Loading: false
};

export const Actions = {
    AsyncRefreshPlaylist: (payload) => ({
        type: ACTIONS.PLAYLIST.TRIGGER_FETCH,
        payload: payload
    }),
    ClearSelection: () => ({
        type: ACTIONS.PLAYLIST.CLEAR_SELECTION
    }),
    LoadAudioFile: (payload) => ({
        type: ACTIONS.PLAYLIST.TRIGGER_AUDIO,
        payload: payload
    })
};

export default PlaylistStateReducer = (state = INITIAL, action = {}) => {    
    switch (action.type) {
        case ACTIONS.PLAYLIST.SAGA_FETCH_START:
            console.log("[SAGA] Fetch playlist started.");
            return {
                ...state,
                Error: null,
                Loading: true
            }

        case ACTIONS.PLAYLIST.SAGA_FETCH_SUCCESS:
            console.log("[SAGA] Fetch playlist successful.")
            return {
                ...state,
                Error: null,
                Loading: false,
                Data: action.payload
            }

        case ACTIONS.PLAYLIST.SAGA_FETCH_FAILURE:
            console.log("[SAGA] Fetch playlist failed");
            return {
                ...state,
                Loading: false,
                Error: {
                    Title: "Oops",
                    Message: "Failed to fetch the playlist items."
                }
            }

        case ACTIONS.PLAYLIST.CLEAR_SELECTION: {
            console.log("[PLAYLIST] Clear selection");
            return INITIAL;
        }

        default:
            return state;
    }
}