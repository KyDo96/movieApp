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
import {getListPhimApi,getListHeThongRapApi,getListCumRapApi} from './../../../../Services/clientApi'
import createAction from './../../../../redux/Actions'
const actApiListPhim=()=>{
    return (dispatch)=>{
        dispatch(createAction(HOME_PAGE_LIST_PHIM_REQUEST,null));
        getListPhimApi()
        .then((r)=>{dispatch(createAction(HOME_PAGE_LIST_PHIM_SUCCESS,r.data))})
        .catch((e)=>{dispatch(createAction(HOME_PAGE_LIST_PHIM_FAILED,e))})
    }
}
const actApiRap=()=>{
    return dispatch => {
        dispatch(createAction(HOME_PAGE_RAP_REQUEST,null));
        getListHeThongRapApi()
        .then((r)=>{
            dispatch(createAction(HOME_PAGE_HE_THONG_RAP_SUCCESS,r.data));
            dispatch(actApiCumRap(r.data[0].maHeThongRap))
        })
        .catch((e)=>{dispatch(createAction(HOME_PAGE_HE_THONG_RAP_FAILED,e))})
    }
}
const actApiCumRap=(maHeThongRap)=>{
    return dispatch=>{
        dispatch(createAction(HOME_PAGE_CUM_RAP_REQUEST,null))
        getListCumRapApi(maHeThongRap)
        .then(r=>dispatch(createAction(HOME_PAGE_CUM_RAP_SUCCESS,r.data)))
        .catch(e=>dispatch(createAction(HOME_PAGE_CUM_RAP_FAILED,e)))
    }
}
export {actApiListPhim,actApiRap,actApiCumRap}