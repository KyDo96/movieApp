import {
    HOME_PAGE_LIST_PHIM_REQUEST,
    HOME_PAGE_LIST_PHIM_SUCCESS,
    HOME_PAGE_LIST_PHIM_FAILED,
    HOME_PAGE_RAP_REQUEST,
    HOME_PAGE_HE_THONG_RAP_SUCCESS,
    HOME_PAGE_HE_THONG_RAP_FAILED,
    HOME_PAGE_CUM_RAP_SUCCESS,
    HOME_PAGE_CUM_RAP_FAILED,
    HOME_PAGE_CUM_RAP_REQUEST
} from './constants'

const intinialState ={
    loadingListPhim:false,
    loadingRap:false,
    loadingCumRap:false,
    dataListPhim:null,
    dataListHeThongRap:null,
    dataListCumRap:null,
    errListPhim:null,
    errListHeThongRap:null,
    errListCumRap:null,
}

const homePageReducer=(state=intinialState,action)=>{
    switch(action.type){
        case HOME_PAGE_LIST_PHIM_REQUEST:
            state.loadingListPhim=true;
            state.dataListPhim=null;
            state.errListPhim=null;
            return {...state}
        case HOME_PAGE_LIST_PHIM_SUCCESS:
            state.loadingListPhim=false;
            state.dataListPhim=action.payload;
            state.errListPhim=null;
            return {...state}
        case HOME_PAGE_LIST_PHIM_FAILED:
            state.loadingListPhim=false;
            state.dataListPhim=null;
            state.errListPhim=action.payload;
            return {...state}
        case HOME_PAGE_RAP_REQUEST:
            state.loadingRap=true;
            state.dataListHeThongRap=null;
            state.errListHeThongRap=null;
            state.dataListCumRap=null;
            state.errListCumRap=null;
            return {...state}
        case HOME_PAGE_HE_THONG_RAP_SUCCESS:
            state.dataListHeThongRap=action.payload;
            state.errListHeThongRap=null;
            return {...state}
        case HOME_PAGE_HE_THONG_RAP_FAILED:
            state.loadingRap=false;
            state.dataListHeThongRap=null;
            state.errListHeThongRap=action.payload;
            return {...state}
        case HOME_PAGE_CUM_RAP_SUCCESS:
            state.loadingCumRap=false;
            state.loadingRap=false
            state.dataListCumRap=action.payload;
            state.errListCumRap=null;
            return {...state}
        case HOME_PAGE_CUM_RAP_FAILED:
            state.loadingCumRap=false;
            state.loadingRap=false
            state.dataListCumRap=null;
            state.errListCumRap=action.payload;
            return {...state}
        case HOME_PAGE_CUM_RAP_REQUEST:
            state.loadingCumRap=true;
            state.dataListCumRap=null;
            state.errListCumRap=null;
            return{...state}
        default:
            return {...state}
    }
}

export default homePageReducer