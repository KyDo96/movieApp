import {
    HOME_PAGE_REQUEST,
    HOME_PAGE_SUCCESS,
    HOME_PAGE_FAILED
} from './constants'
import Axios from 'axios'
const actApi=(dispatch)=>{
    return ()=>{dispatch(actHomePageRequest());
        Axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10',
            method:'GET'
        })
        .then((r)=>{console.log(r.data)})
        .catch((e)=>{console.log(e)})
    }
}

const actHomePageRequest=()=>{
    return {
        type:HOME_PAGE_REQUEST
    }
}
const actHomePageSuccess=(data)=>{
    return {
        type:HOME_PAGE_SUCCESS,
        payload:data
    }
}
const actHomePageFailed=(err)=>{
    return {
        type:HOME_PAGE_FAILED,
        payload:err
    }
}

export default actApi