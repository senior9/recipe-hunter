import React from 'react';
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bannerLogo from '../../assets/Logo/recipe-pilot-logo.png'
import { Link, Outlet } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <>
        <Navbar bg="light" variant="light">
        <Container>
          <Link to='/'><img src={bannerLogo} alt="" /></Link>
          <Nav className="d-flex gap-5 ">
            <Link className='text-decoration-none text-secondary ' to='/'>Home</Link>
            <Link className='text-decoration-none text-secondary' to='/blog'>Blog</Link>
            <Link className='text-decoration-none text-secondary' to='/login'>Login</Link>
            <Image src="holder.js/171x180" roundedCircle />
          </Nav>
        </Container>
      </Navbar>
      <Outlet></Outlet>
        </>
    );
};

export default Header;