import {
    DETAIL_PAGE_REQUEST,
    DETAIL_PAGE_SUCCESS,
    DETAIL_PAGE_FAILED
} from './constants'
import createAction from './../../../../redux/Actions'
import {getDetailPhim} from './../../.././../Services/clientApi'
const actApi=(maPhim)=>{
    return dispatch => {
        dispatch(createAction(DETAIL_PAGE_REQUEST,null));
        getDetailPhim(maPhim)
        .then(r=>dispatch(createAction(DETAIL_PAGE_SUCCESS,r.data)))
        .catch(e=>dispatch(DETAIL_PAGE_FAILED,e))
    }
}
export default actApi