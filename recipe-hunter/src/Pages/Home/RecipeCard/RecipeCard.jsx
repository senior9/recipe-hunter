import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from 'react-rating';

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  const {recipe_name,rating,cooking_method,ingredients  } = recipe;
  const firstFiveIngredients = ingredients.slice(0, 5);
  return (
    <div  className="">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Recipe Name : {recipe_name}</Card.Title>
          <ListGroup className="list-group-flush"><ListGroup.Item><Card.Title>Method</Card.Title></ListGroup.Item></ListGroup>
          <Card.Text>
            
            {
                cooking_method < 100 ?(
                    <>{cooking_method}</>
                ): (<>
                {
                    cooking_method.slice(0,150)
                }.... <Link to="/login">Read More</Link>
                
                </>)
            }
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item><Card.Title>Ingredients</Card.Title></ListGroup.Item>
          {firstFiveIngredients.map((ingredient, index) => (
            <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Text className="d-flex justify-content-between align-items-center ">
            <div>
            <Rating
            style={{fontSize:'1.5 rem'}}
          className="text-warning"
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
            readonly
          ></Rating>
            </div>
            <div>
                <MdFavoriteBorder style={{fontSize:'1.5 rem'}}></MdFavoriteBorder>
            </div>
        </Card.Text>
      </Card>
    </div>
  );
};

export default RecipeCard;
