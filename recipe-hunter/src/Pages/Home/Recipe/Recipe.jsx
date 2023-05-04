import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Recipe.css"
import Image from "react-bootstrap/esm/Image";
import { AiFillLike } from "react-icons/ai";
import RecipeCard from "../RecipeCard/RecipeCard";

const Recipe = () => {
  const recipeInfo = useLoaderData();
  console.log(recipeInfo);
  const {
    chef_name,
    chef_picture,
    likes,
    num_of_recipes,
    recipes,
    short_bio,
    years_of_experience,
  } = recipeInfo;
  return (
    <>
    <h1 className="text-center text-info ">Chief Recipe</h1>
    <div className="container mt-3">
        
        <div className="recipe-info d-flex align-items-center gap-5 mx-5 justify-content-center">
          <div className="image-banner mx-5">
          <Image src={chef_picture} roundedCircle />
          </div>
          <div className="chief-recipe text-white mx-5 fs-4">
              <button className="rounded-pill btn btn-outline-warning"><h2>Chief Name :{chef_name}</h2></button>
              <p> <button  className="rounded-pill btn btn-outline-info mx-1">Bio :</button>   {short_bio}</p>
              <p> <button className="rounded-pill btn btn-outline-info"> Number Of Recipe :</button>  {num_of_recipes}</p>
              <p> <button className="rounded-pill btn btn-outline-info">Experience :</button> {years_of_experience}</p>
              <p><AiFillLike style={{fontSize:'2rem',color:'bisque'}}></AiFillLike> : {likes}</p>
          </div>
        </div>
      </div>

      <div>
      <div className="container justify-content-center gx-5   mt-5">
        <div className="row align-items-center">
          {recipes.map((recipe) => (
            <div className="col-md-4" key={recipe}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </div>      
      </div>
    </>
  );
};

export default Recipe;
