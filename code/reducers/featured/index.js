/**
 * Author: Vidush H. Namah (2019)
 * 
 * Reducer for Featured Playlists
 * State schema
 * - Loading : Indicates whether data is being refreshed
 * - Data : List of featured playlists
 * - Error : Error message indicator
 */
import * as ACTIONS from '../Actions';

const INITIAL = {
  Data: {},
  Error: null,
  Loading: false
};

export const Actions = {
  AsyncRefreshList: () => ({
    type: ACTIONS.FEATURED.TRIGGER_FETCH
  })
};

export default MainStateReducer = (state = INITIAL, action = {}) => {
  switch (action.type) {
    case ACTIONS.FEATURED.SAGA_FETCH_START:
      console.log("[SAGA] Fetch featured started.");
      return {
        ...state,
        Error: null,
        Loading: true
      };

    case ACTIONS.FEATURED.SAGA_FETCH_SUCCESS:
      console.log("[SAGA] Fetch featured successful.")
      return {
        ...state,
        Error: null,
        Loading: false,
        Data: action.payload
      }
    
    case ACTIONS.FEATURED.SAGA_FETCH_FAILURE:
      console.log("[SAGA] Fetch featured failed");
      return {
        ...state,
        Loading: false,
        Error: {
          Title: "Oops",
          Message: "Failed to fetch the latest editor's picks."
        }
      }

    default:
      return state;
  }
}