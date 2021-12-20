import React, { Component } from "react";
import '../assets/css/style.css'
import fashion_ecommerce from '../Components/common/images/fashion_ecommerce.png'
import fashion_social_network  from '../Components/common/images/fashion_social_network.png'
import software_devs from '../Components/common/images/software_devs.png'
import Layer23 from '../Components/common/images/Layer23.png'
import Layer24 from '../Components/common/images/Layer24.png'
import Layer19 from '../Components/common/images/Layer19.png'

class Service extends Component {
  render() {
    return (
      <div>
          <section className="service">
        <div className="title">
          -<span>DỊCH VỤ</span>-
        </div>
        <div className="Boxs">
          <div className="box">
            <div className="fashion-ecommerce"><img src={fashion_ecommerce} /></div>
            <p>FASHION ECOMMERCE</p>
          </div>
          <div className="box">
            <div className="fashion-ecommerce"><img src={fashion_social_network} /></div>
            <p>FASHION SOCIAL NETWORK</p>
          </div>
          <div className="box" style={{borderRight:'none'}}>
            <div className="fashion-ecommerce"><img src={software_devs} /></div>
            <p>SOFTWARE DEVELOPMENT</p>
          </div>
        </div>
      </section>
      <section id="faction">
        <div className="faction-1">
          <div className="faction-1-left">
            <div><img src={Layer23} alt="" /></div>
            <div><img src={Layer24} alt="" /></div>
          </div>
          <div className="faction-1-right">
            <h1>FACTION ECOMMERCE</h1>
            <p style={{paddingTop: '5px',fontSize:'15px'}}><span>OUTFIZ</span>  Mong muốn tạo một địa điểm mua sắm tin cậy, nơi tập hợp các thời trang trong nước, kết hợp với các thương hiệu nước ngoài, giúp khách hàng mọi lứa tuổi có thể dễ dàng tìm kiếm và mua sắm những sản phẩm thời trang chất lượng và phù hợp với phong cách mỗi cá nhân. </p>
            <span>VỚI OUTFIZ</span>
            <p>- Tìm kiếm sản phẩm dễ dàng.</p>
            <p>- Sản phẩm đa dạng phong phú.</p>
            <p>- Nguồn gốc rõ ràng tin cậy.</p>
          </div>
        </div>
        <div className="faction-1 imgrps" style={{flexDirection: 'row-reverse',fontSize:'15px'}}>
          <div className="faction-1-left">
            <div><img className="imgrp" style={{width: '472px'}} src={Layer19} alt="" /></div>
          </div>
          <div className="faction-1-right" style={{borderLeft: '1rem solid #f0a83a', borderRight: 'none'}}>
            <h1>FASHION SOCIAL NETWORK</h1>
            <p style={{paddingTop: '5px'}}><span>CHIA SẺ VÀ KẾT NỐI </span> Chia sẻ phong cách cá nhân và kết nối với mọi người cùng sở thích.</p>
            <p style={{paddingTop: '5px'}}><span>CÁ TÍNH</span>  Thể hiện Cá tính và bản thân qua những bộ outfit.</p>
            <p style={{paddingTop: '5px'}}><span>TẢI LÊN VÀ GẮN THẺ</span>   Tải ảnh của bạn và gắn thẻ phù hợp hoặc các hình ảnh tương tự.</p>
          </div>
        </div>
      </section>
      </div>
    );
  }
}
export default Service; 