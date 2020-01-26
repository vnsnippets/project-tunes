/**
 * Author: Vidush H. Namah (2020)
 * 
 */
import * as ACTIONS from '../Actions';

const INITIAL = {
    Status: false,
    Playing: false,
    Details: {}
};


export const Actions = {
    
};

export default PlayerStateReducer = (state = INITIAL, action = {}) => {
    switch (action.type) {
        case ACTIONS.PLAYER.SAGA_LAUNCH_AUDIO:
            console.log('[Audio] Start playing')
            return {
                ...state,
                Status: true,
                Playing: true,
                Details: {
                    Name: action.payload
                }
            }
        
        case ACTIONS.PLAYER.SAGA_PAUSE_AUDIO:
            console.log('[Audio] Pause playing')
            return {
                ...state,
                Status: true,
                Playing: false
            }

        default:
            return state;
    }
}