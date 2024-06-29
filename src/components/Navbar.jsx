import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import logo from "../../public/Assets/IMG/Tempe Ibu Marmi.svg";
import '../styles/Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className='navbar'>
      <Navbar.Brand href="#">
        <Image src={logo}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='navBurger'>
        <Nav className="ml-auto option">
          {['Beranda', 'Kelebihan', 'Testimoni', 'Tentang Kami', 'Hubungi Kami'].map(section => (
            <Nav.Link 
              key={section}
              href={`#${section.replace(/\s/g, '').toLowerCase()}`} 
              className="nav-item"
            >
              {section}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
