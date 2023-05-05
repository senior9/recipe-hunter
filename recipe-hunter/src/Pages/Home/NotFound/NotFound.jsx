import React from 'react';
import Image from 'react-bootstrap/Image';
import FourNotFound from '../../../assets/Logo/not.png'

const NotFound = () => {
    return (
        <div className='d-flex text-align-center justify-content-center '>
              <Image className='w-50' src={FourNotFound} roundedCircle />
           
        </div>
    );
};

export default NotFound;