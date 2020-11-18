import Axios from 'axios'

const getListPhimApi=()=>{
    return Axios({
        url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05',
        method:'GET'
    })
}
const getListHeThongRapApi=()=>{
    return Axios({
        url:'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
        method:'GET'
    })
}
const getListCumRapApi=(maHeThongRap)=>{
    return Axios({
        url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
        method:'GET'
    })
}
export {getListPhimApi,getListHeThongRapApi,getListCumRapApi}