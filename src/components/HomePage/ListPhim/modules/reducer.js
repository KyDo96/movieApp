
import {
    LIST_FILM_REQUEST,
    LIST_FILM_SUCCESS,
    LIST_FILM_FAILED
} from './constants'

const intinialState ={
    loading:false,
    data:null,
    err:null
}

const listFilmReducer=(state=intinialState,action)=>{
    switch(action.type){
        case LIST_FILM_REQUEST:
            state.loading=true;
            state.data=null;
            state.err=null;
            return {...state}
        case LIST_FILM_SUCCESS:
            state.loading=false;
            state.data=action.payload;
            state.err=null;
            return {...state}
        case LIST_FILM_FAILED:
            state.loading=false;
            state.data=null;
            state.err=action.payload;
            return {...state}
        default:
            return {...state}
    }
}

export default listFilmReducer