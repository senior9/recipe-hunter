import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChiefCard from '../ChiefCard/ChiefCard';

const Chief = () => {
    const chiefData= useLoaderData();
    console.log(chiefData);
    return (
        <div className='d-flex gap-5 flex-column container'>
             
             {
                chiefData.map(singleChief =><ChiefCard
                key={singleChief.id}
                singleChief={singleChief}
                
                >
                </ChiefCard> )
                
             }
        </div>
    );
};

export default Chief;