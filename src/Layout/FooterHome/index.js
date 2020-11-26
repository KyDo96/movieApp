import React from "react";
import "./footerHome.scss";
export default function FooterHome() {
  return (
    <div className="footerHome">
      <div className="container">
        <div className="row pt-3 pb-2">
          <div className="col-4">
            <p>TIX</p>
            <div className="row">
              <div className="col-6">
                <a href="#">FAQ</a>
              </div>
              <div className="col-6">
                <a href="#">Thỏa thuận sử dụng</a>
              </div>
              <div className="col-6">
                <a href="#">Brand Guidelines</a>
              </div>
              <div className="col-6">
                <a href="#">Chính sách bảo mật</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <p>ĐỐI TÁC</p>
            <div classname="row">
              <div className="row col-sm-12 col-xs-12 linePartner">
                <a target="_blank" href="https://www.cgv.vn/" title="CGV">
                  <img
                    className="iconConnect"
                    src="/assets/img/icons/cgv.png"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
                <a target="_blank" href="http://bhdstar.vn" title="BHD">
                  <img
                    className="iconConnect"
                    src="/assets/img/icons/bhd.png"
                  />
                </a>
                <a target="_blank" href="http://galaxycine.vn" title="Galaxy">
                  <img
                    className="iconConnect"
                    src="/assets/img/icons/galaxycine.png"
                  />
                </a>
                <a
                  target="_blank"
                  href="http://cinestar.com.vn"
                  title="Cinestar"
                >
                  <img
                    className="iconConnect"
                    src="/assets/img/icons/cinestar.png"
                  />
                </a>
                <a
                  target="_blank"
                  href="http://lottecinemavn.com"
                  title="Lotte Cinema"
                >
                  <img
                    className="iconConnect"
                    ng-src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                    src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                  />
                </a>
              </div>
              <div className="row col-sm-12 col-xs-12 linePartner">
                <a target="_blank" href="https://www.megagscinemas.vn" title="MegaGS">
                    <img className="iconConnect" src="/assets/img/icons/megags.png" />
                </a>
                <a target="_blank" href="https://www.betacineplex.vn/" title="Beta">
                    <img className="iconConnect" src="/assets/img/icons/bt.jpg" />
                </a>
                <a target="_blank" href="http://ddcinema.vn" title="DDC">
                    <img className="iconConnect" src="/assets/img/icons/dongdacinema.png" />
                </a>
                <a target="_blank" href="https://touchcinema.com/" title="Touch Cinema">
                    <img className="iconConnect" src="/assets/img/icons/TOUCH.png" />
                </a>
                <a target="_blank" href="https://cinemaxvn.com/" title="Cinemax">
                    <img className="iconConnect" src="/assets/img/icons/cnx.jpg" />
                </a>
                </div>
               <div className="row col-sm-12 col-xs-12 linePartner">
  <a target="_blank" href="http://starlight.vn/" title="Starlight">
    <img className="iconConnect" src="/assets/img/icons/STARLIGHT.png" />
  </a>
  <a target="_blank" href="https://www.dcine.vn/" title="Dcine">
    <img className="iconConnect" src="/assets/img/icons/dcine.png" />
  </a>
  {/* <a target="_blank" href="https://momo.vn" title="MoMo">
        <img class="iconConnect" src="/assets/img/icons/momo.png">
    </a> */}
  <a target="_blank" href="https://zalopay.vn/" title="ZaloPay">
    <img className="iconConnect" src="/assets/img/icons/zalopay_icon.png" />
  </a>
  <a target="_blank" href="https://www.payoo.vn/" title="Payoo">
    <img className="iconConnect" src="/assets/img/icons/payoo.jpg" />
  </a>
  <a target="_blank" href="https://www.vietcombank.com.vn/" title="Vietcombank">
    <img className="iconConnect" src="/assets/img/icons/VCB.png" />
  </a>
</div>
                    <div className="row col-sm-12 col-xs-12 linePartner">
                    <a target="_blank" href="http://www.agribank.com.vn/" title="Agribank">
                        <img className="iconConnect" src="/assets/img/icons/AGRIBANK.png" />
                    </a>
                    <a target="_blank" href="https://www.vietinbank.vn/" title="Vietinbank">
                        <img className="iconConnect" src="/assets/img/icons/VIETTINBANK.png" />
                    </a>
                    <a target="_blank" href="https://www.indovinabank.com.vn/" title="IVB">
                        <img className="iconConnect" src="/assets/img/icons/IVB.png" />
                    </a>
                    <a target="_blank" href="http://123go.vn" title="123Go">
                        <img className="iconConnect" src="/assets/img/icons/123go.png" />
                    </a>
                    <a target="_blank" href="http://laban.vn" title="La Bàn">
                        <img className="iconConnect" src="/assets/img/icons/laban.png" />
                    </a>
                    </div>
                </div>
                </div>
          <div className="col-4">
            <div className='row'>
                <div className='col-6'>
                    <p className='text-center'>MOBILE APP</p>
                    <div className='row justify-content-center'>
                   <a style={{marginRight:'20px'}} href='#'><i class="fab fa-apple"></i></a> 
                   <a  href='#'><i class="fab fa-android"></i></a>
                   </div>
                </div>
                <div className='col-6'>
                    <p className='text-center'>SOCIAL</p>
                    <div className='row justify-content-center'>
                   <a style={{marginRight:'20px'}} href='#'><i class="fab fa-facebook"></i></a> 
                   <a href='#'><img className='zalo-icon' src='/assets/img/zalo-logo.png' alt=''/></a>
                   </div>
                </div>
            </div>
          </div>
      </div>
        <div style={{borderTop:"1px solid #4a4a4a"}} className='row p-0 pt-4'>
          <div>
          <img style={{width:'80px',borderRadius:'8px'}} src='/assets/img/zion-logo.jpg' alt=''/>
          </div>
          <div className='flex-grow-1 px-3'>
            <h7>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h7>
            <p style={{color:'#949494'}}>
            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.
            <br/>
            Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
            <br/>
            đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            <br/>
            Số Điện Thoại (Hotline): 1900 545 436
            <br/>
            Email: <span ><a style={{color:'#FB4226'}} href='#' > support@tix.vn</a></span>
            </p>
          </div>
          <div>
          <img style={{width:'130px'}} src='/assets/img/bo-cong-thuong.png' alt=''></img>
          </div>
        </div>
      </div>
    </div>
  );
}
