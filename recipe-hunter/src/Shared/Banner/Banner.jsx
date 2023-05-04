import React from 'react';
import BannerOner from "../../assets/Banner-1.png"
import { Outlet } from 'react-router-dom';
import "./Banner.css"

const Banner = () => {
    return (
        <div className=" position-relative">
        <div className="image-wrapper">
          <img className='w-100 h-25' src={BannerOner} alt="Recipe image"/>
          <div className="overlay position-absolute text-area    start-0 w-100 text-white p-3">
            <h1 className="mb-2 "><span className='discover'><span className='text-danger'>D</span>iscover</span> <br /> Delicious <span className='text-warning'>Recipes</span></h1>
            <p className="mb-2 text-recipe">Find new recipes to try and impress your friends <br /> And family with your cooking skills.</p>
            <button type="button" className="btn btn-warning fs-1 text-white fw-large p-3 w-25">Order Now</button>
          </div>
        </div>
{/* <Outlet></Outlet> */}
      </div>
      

      
    );
};

export default Banner;