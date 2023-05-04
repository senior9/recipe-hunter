import React from 'react';
import BannerOner from "../../assets/Banner-1.png"
import { Outlet } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=" position-relative">
        <div className="image-wrapper">
          <img className='w-100 h-25' src={BannerOner} alt="Recipe image"/>
          <div className="overlay position-absolute bottom-50  start-0 w-100 text-white p-3">
            <h1 className="mb-2">Discover <br /> Delicious <span className='text-warning'>Recipes</span></h1>
            <p className="mb-2">Find new recipes to try and impress your friends <br /> And family with your cooking skills.</p>
            <button type="button" className="btn btn-warning">See Details</button>
          </div>
        </div>
{/* <Outlet></Outlet> */}
      </div>
      

      
    );
};

export default Banner;