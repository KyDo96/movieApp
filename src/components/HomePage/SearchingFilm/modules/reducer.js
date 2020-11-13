
import {
    SEARCHING_FILM_REQUEST,
    SEARCHING_FILM_SUCCESS,
    SEARCHING_FILM_FAILED
} from './constants'

const intinialState ={
    loading:false,
    data:null,
    err:null
}

const searchingFilmReducer=(state=intinialState,action)=>{
    switch(action.type){
        case SEARCHING_FILM_REQUEST:
            state.loading=true;
            state.data=null;
            state.err=null;
            return {...state}
        case SEARCHING_FILM_SUCCESS:
            state.loading=false;
            state.data=action.payload;
            state.err=null;
            return {...state}
        case SEARCHING_FILM_FAILED:
            state.loading=false;
            state.data=null;
            state.err=action.payload;
            return {...state}
        default:
            return {...state}
    }
}

export default searchingFilmReducer