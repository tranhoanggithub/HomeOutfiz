import React from 'react';
import '../../assets/css/style.css'
import '../../assets/css/responsive.css'
import Logo from '../common/images/Logo.png' ;
import iconVN from '../common/images/iconVN.png';
import  { AiOutlineDown } from 'react-icons/ai';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Item} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import banner1 from '../common/images/banner1.jpg';
import banner2 from '../common/images/banner2.jpg';

function Header() {
  return (
    <div>
       
       <sesion className="menu">
          <div className="logo"><img src={Logo} /></div>
          <div className="menu-mid">
            <div className="menu-mid-b">Giới thiệu</div>
            <div className="menu-mid-b">Dịch vụ</div>
            <div className="menu-mid-b">Tuyển dụng</div>
            <div className="menu-mid-b">Tin tức</div>
            <div className="menu-mid-b">Liên hệ</div>
          </div>
          <div className="menu-right">
            <div>  <img src={iconVN} /><span style={{fontSize: '15px', padding: '0px 10px'}}>VIE <AiOutlineDown /></span></div>
          </div>
      </sesion>
      <session id="menu-close">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="menu">
                                <Navbar.Brand href="#home"> <div className="logo"><img src={Logo} /></div></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link ><div className="menu-mid-b">Giới thiệu</div></Nav.Link>
                                    <Nav.Link ><div className="menu-mid-b">Dịch vụ</div></Nav.Link>
                                    <Nav.Link ><div className="menu-mid-b">Tuyển dụng</div></Nav.Link>
                                    <Nav.Link ><div className="menu-mid-b">Tin tức</div></Nav.Link>
                                    <Nav.Link ><div className="menu-mid-b">Liên hệ</div></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
      </session>
        {/* slider */}
    <Carousel variant="dark">
  <Carousel.Item>
  <div className="box-slider">
  <div className="bs">
    <h1>KEEP GOING -TOGETHER</h1>
    <p>WE BELIEVE.</p>
    <p>
      Coming together is a <span>Beginning</span> staying togrther is{" "}
      <span>Progress</span>,and working together is <span> Success</span>.
    </p>
  </div>
</div>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
  <div class="box-slider">
          <div class="bs">
            <h1>OUTFIZ</h1>
            <p> <span>OUTFIZ</span> là mạng xã hội đầu tiên ở Việt Nam. Với OUTFIZ người dùng có thể  <span>Chia Sẻ ,Kết Nối</span> tự do thể hiện <span> Cá tính thời trang </span>của mình</p>
          </div>
        
        </div>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

  </Carousel.Item>

</Carousel>
        
      
        
    </div>
  );
}
 
export default Header;