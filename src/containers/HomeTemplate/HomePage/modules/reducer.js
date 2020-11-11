import { data } from 'jquery'
import {
    HOME_PAGE_REQUEST,
    HOME_PAGE_SUCCESS,
    HOME_PAGE_FAILED
} from './constants'

const intinialState ={
    loading:false,
    data:null,
    err:null
}

const homePageReducer=(state=intinialState,action)=>{
    switch(action.type){
        case HOME_PAGE_REQUEST:
            state.loading=true;
            state.data=null;
            state.err=null;
            return {...state}
        case HOME_PAGE_SUCCESS:
            state.loading=false;
            state.data=action.payload;
            state.err=null;
            return {...state}
        case HOME_PAGE_REQUEST:
            state.loading=false;
            state.data=null;
            state.err=action.payload;
            return {...state}
        default:
            return {...state}
    }
}

export default homePageReducer