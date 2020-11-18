import {
    LIST_CUM_RAP_REQUEST,
    LIST_CUM_RAP_SUCCESS,
    LIST_CUM_RAP_FAILED
} from './constants'
import createAction from './../../../../redux/Actions'
import {getListCumRapApi} from './../../../../Services/clientApi'
const actApiListRap=(maHeThongRap)=>{
    return (dispatch)=>{
        dispatch(createAction(LIST_CUM_RAP_REQUEST,null));
        getListCumRapApi(maHeThongRap)
        .then((r)=>{dispatch(createAction(LIST_CUM_RAP_SUCCESS,r.data))})
        .catch((e)=>{dispatch(createAction(LIST_CUM_RAP_FAILED,e))})
    }
}

export default actApiListRap