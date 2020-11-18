
import {
    LIST_CUM_RAP_REQUEST,
    LIST_CUM_RAP_SUCCESS,
    LIST_CUM_RAP_FAILED
} from './constants'

const intinialState ={
    loading:false,
    data:null,
    err:null
}

const listRapReducer=(state=intinialState,action)=>{
    switch(action.type){
        case LIST_CUM_RAP_REQUEST:
            state.loading=true;
            state.data=null;
            state.err=null;
            return {...state}
        case LIST_CUM_RAP_SUCCESS:
            state.loading=false;
            state.data=action.payload;
            state.err=null;
            return {...state}
        case LIST_CUM_RAP_FAILED:
            state.loading=false;
            state.data=null;
            state.err=action.payload;
            return {...state}
        default:
            return {...state}
    }
}

export default listRapReducer