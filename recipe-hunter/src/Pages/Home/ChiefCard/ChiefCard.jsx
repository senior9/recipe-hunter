import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

const ChiefCard = (singleChief) => {
  const { id,chefName, likes, numRecipes, pictureUrl, yearsOfExperience } =
    singleChief.singleChief;
  return (

    <Col xs={6} md={6}>
    <Card className="m-5">
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{chefName}</Card.Title>
        <Card.Text>
          {yearsOfExperience} years of experience | {numRecipes} recipes | {likes} likes
        </Card.Text>

      </Card.Body>
      <Link to={`/recipe/${id}`} ><button className="btn btn-outline-warning text-danger fs-3 fw-bold">View Recipe</button></Link>
    </Card>
  </Col>







  );
};

export default ChiefCard;
