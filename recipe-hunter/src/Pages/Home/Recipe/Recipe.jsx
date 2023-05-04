import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipeInfo = useLoaderData();
    console.log(recipeInfo.chef_name);
    return (
        <div>
             hello world
        </div>
    );
};

export default Recipe;