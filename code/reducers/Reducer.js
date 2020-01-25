/**
 * Author: Vidush H. Namah (2019)
 * 
 * Reducers for all screens are combined here
 * File acts as the main Reducer connection point
 */

import { combineReducers } from 'redux';

import FeaturedStateReducer from './featured';

export default combineReducers({
    FeaturedState: FeaturedStateReducer
});