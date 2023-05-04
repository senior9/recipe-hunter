import React from 'react';
import "./PopularCategory.css";
import image1 from "../../../assets/food/image-1.png"
import image2 from "../../../assets/food/image-2.png"
import image3 from "../../../assets/food/image-3.png"
import image4 from "../../../assets/food/image-4.png"

const PopularCategory = () => {

    return (
      <div className='bg-warning py-3'>  
        <div className="container">
        <h1 className='text-white text-center my-auto'>Popular Category </h1>
        <div className='container'>
        <div className="box"> 
        <img src={image1} alt="" />
        
        </div>
        <div className="box"> 
         <img src={image2} alt="" />
         </div>
        <div className="box"> 
        <img src={image3} alt="" />
        </div>
        <div className="box"> 
        <img src={image4} alt="" />
        </div>
        </div>
      </div>
      </div>
    )
};

export default PopularCategory;