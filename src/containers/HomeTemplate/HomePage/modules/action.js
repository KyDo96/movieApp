import {
    HOME_PAGE_LIST_PHIM_REQUEST,
    HOME_PAGE_LIST_PHIM_SUCCESS,
    HOME_PAGE_LIST_PHIM_FAILED,
    HOME_PAGE_RAP_REQUEST,
    HOME_PAGE_HE_THONG_RAP_SUCCESS,
    HOME_PAGE_HE_THONG_RAP_FAILED,
    HOME_PAGE_CUM_RAP_SUCCESS,
    HOME_PAGE_CUM_RAP_FAILED
} from './constants'
import Axios from 'axios'
import createAction from './../../../../redux/Actions'
const actApiListPhim=()=>{
    return (dispatch)=>{
        dispatch(createAction(HOME_PAGE_LIST_PHIM_REQUEST,null));
        Axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05',
            method:'GET'
        })
        .then((r)=>{dispatch(createAction(HOME_PAGE_LIST_PHIM_SUCCESS,r.data))})
        .catch((e)=>{dispatch(createAction(HOME_PAGE_LIST_PHIM_FAILED,e))})
    }
}
const actApiRap=()=>{
    return dispatch => {
        dispatch(createAction(HOME_PAGE_RAP_REQUEST,null));
        Axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
            method:'GET'
        })
        .then((r)=>{
            dispatch(createAction(HOME_PAGE_HE_THONG_RAP_SUCCESS,r.data));
            Axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${r.data[0].maHeThongRap}`,
                method:'GET'
            })
            .then(r=>dispatch(createAction(HOME_PAGE_CUM_RAP_SUCCESS,r.data)))
            .catch(e=>dispatch(createAction(HOME_PAGE_CUM_RAP_FAILED,e)))
        })
        .catch((e)=>{dispatch(createAction(HOME_PAGE_HE_THONG_RAP_FAILED,e))})
    }
}
export {actApiListPhim,actApiRap}