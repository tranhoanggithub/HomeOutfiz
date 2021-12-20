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


function Menu() {
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
    </div>
  );
}
 
export default Menu;