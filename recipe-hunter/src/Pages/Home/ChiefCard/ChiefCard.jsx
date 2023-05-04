import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ChiefCard = (singleChief) => {
  const { chefName, likes, numRecipes, pictureUrl, yearsOfExperience } =
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
      <button className="btn btn-outline-warning text-danger fs-3 fw-bold">View Recipe</button>
    </Card>
  </Col>







  );
};

export default ChiefCard;
