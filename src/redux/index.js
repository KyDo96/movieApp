import {combineReducers} from 'redux'
import homePageReducer from './../containers/HomeTemplate/HomePage/modules/reducer'
const rootReducer=combineReducers({
    homePageReducer,
})

export default rootReducer;