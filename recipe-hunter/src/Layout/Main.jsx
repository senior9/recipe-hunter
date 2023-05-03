import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../Shared/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
                <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;