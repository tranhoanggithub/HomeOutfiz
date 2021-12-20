import React, { Component } from "react";
import '../assets/css/style.css'
import fashion_ecommerce from '../Components/common/images/fashion_ecommerce.png'
import fashion_social_network  from '../Components/common/images/fashion_social_network.png'
import software_devs from '../Components/common/images/software_devs.png'
import Layer23 from '../Components/common/images/Layer23.png'
import Layer24 from '../Components/common/images/Layer24.png'
import Layer19 from '../Components/common/images/Layer19.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Software extends Component {
    
  render() {
    const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));
    return (
      <div>
          <session id="software">
        <h1 className="title">SOFTWARE DEVELOPMENT</h1>
        <p>Là nhà cung cấp dịch vụ phát triển phần mềm, chúng tôi mong muốn giúp khách hàng chuyển đổi những ý tưởng thành các giải pháp sáng tạo cho doanh nghiệp.</p>
        <p>Chúng tôi cung cấp trọn gói các dịch vụ phát triển phần mềm theo yêu cầu để giúp khách hàng phát triển doanh nghiệp và đạt được mục tiêu kinh doanh.</p>
        <p>Dù là phát triển phần mềm theo yêu cầu, ứng dụng di động, trang web thương mại điện tử hay ứng dụng web, chúng tôi đều cung cấp các giải pháp phần mềm phù hợp.</p>
          </session>
          <h2> Single Item</h2>

      </div>
    );
  }
}
export default Software; 