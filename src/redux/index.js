import {combineReducers} from 'redux'
import homePageReducer from './../containers/HomeTemplate/HomePage/modules/reducer'
import searchingFilmReducer from './../components/HomePage/SearchingFilm/modules/reducer'
import listFilmReducer from './../components/HomePage/ListPhim/modules/reducer'
import listRapReducer from './../components/HomePage/ListRap/modules/reducer'
import detailPageReducer from './../containers/HomeTemplate/DetailPage/modules/reducer'
const rootReducer=combineReducers({
    homePageReducer,
    searchingFilmReducer,
    listFilmReducer,
    listRapReducer,
    detailPageReducer
})

export default rootReducer;