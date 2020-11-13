import {combineReducers} from 'redux'
import homePageReducer from './../containers/HomeTemplate/HomePage/modules/reducer'
import searchingFilmReducer from './../components/HomePage/SearchingFilm/modules/reducer'
import listFilmReducer from './../components/HomePage/ListPhim/modules/reducer'
const rootReducer=combineReducers({
    homePageReducer,
    searchingFilmReducer,
    listFilmReducer
})

export default rootReducer;