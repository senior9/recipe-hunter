import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Home from '../Pages/Home/Home';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;