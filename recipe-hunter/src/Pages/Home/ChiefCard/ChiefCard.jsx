import React, { Suspense, useState } from "react";
import { lazy } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import "./ChiefCard.css"


const LazyImage = lazy(() => import('../../../Shared/LazyImage/LazyImage'));
const ChiefCard = (singleChief) => {
  const { id,chefName, likes, numRecipes, pictureUrl, yearsOfExperience } =
    singleChief.singleChief;
    const [imageLoaded, setImageLoaded] = useState(false);

  return (

    <Col xs={6}  md={6} className="chief-card w-100   m-5  " >
    <Card className="m-5 w-100 ">
    <Suspense fallback={<div>Loading...</div>}>
          <LazyImage className=" w-100" src={pictureUrl} alt={chefName} />
        </Suspense>
      <Card.Body>
        <Card.Title>{chefName}</Card.Title>
        <Card.Text>
          {yearsOfExperience} years of experience | {numRecipes} recipes | {likes} likes
        </Card.Text>

      </Card.Body>
      <Link to={`/recipe/${id}`} ><button className="btn btn-outline-warning w-100 text-danger fs-3 fw-bold">View Recipe</button></Link>
    </Card>
  </Col>







  );
};

export default ChiefCard;
