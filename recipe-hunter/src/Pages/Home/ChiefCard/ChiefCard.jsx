import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const ChiefCard = (singleChief) => {
  const { chefName, likes, numRecipes, pictureUrl, yearsOfExperience } =
    singleChief.singleChief;
  return (
    <div className="container d-flex justify-content-center ">
      <Card className=" w-100 d-flex align-items-center flex-row justify-content-center">
        <div>
          <Card.Img
            className=""
            style={{ width: "200px", height: "200px" }}
            variant="top"
            src={pictureUrl}
          />
        </div>
        <div>
          <Card.Body>
            <Card.Title>{chefName}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </div>
        <div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default ChiefCard;
