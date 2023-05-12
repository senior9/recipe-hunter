import React from 'react';
import images from "../../../assets/food/images-5.png";
import "./ExtraOtherSection.css"

const ExtraOtherSection = () => {
    return (
        <div className='custom d-flex mt-4 mb-4'>
            <div >
                <h1>
                Subscribed to Our <br /> Newsletter & Get Benefits
                </h1>
                <p>
                How to Make Valerian Tea? 
                </p>
                <div className='d-flex  align-items-stretch'>
                    <input className='input-email' type="email" name="email" placeholder='Enter your email' id="" />
                    <button className='btn btn-warning custom-btn fw-2 fs-3 text-white d-flex text-center justify-content-center' type="submit">Send</button>
                </div>
            </div>
            <div>
                 <img className='h-100 image' src={images} alt="" />
            </div>
        </div>
    );
};

export default ExtraOtherSection;