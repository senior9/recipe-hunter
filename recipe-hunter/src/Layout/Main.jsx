import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../Shared/Banner/Banner';
import PopularCategory from '../Pages/Home/PopularCategory/PopularCategory';
import Chief from '../Pages/Home/Chiefs/Chief';

const Main = () => {
    return (
        <div>
            <Header></Header>
          <Banner></Banner>
          <Outlet></Outlet>
          <PopularCategory></PopularCategory>
            <Footer></Footer>
        </div>
    );
};

export default Main;