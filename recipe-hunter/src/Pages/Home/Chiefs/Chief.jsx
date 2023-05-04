import React from "react";
import { useLoaderData } from "react-router-dom";
import ChiefCard from "../ChiefCard/ChiefCard";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import "./Chief.css"

const Chief = () => {
  const chiefData = useLoaderData();
  console.log(chiefData);
  return (
    <>
        <div className="bg-light mt-5 marquee">
        <marquee direction="left">The World Class Chiefs are here !!!! </marquee>

        </div>
      <div className="container d-flex gap-5  mt-5">
        <Row>
          <CardGroup>
            {chiefData.map((singleChief) => (
              <ChiefCard key={singleChief.id} singleChief={singleChief} />
            ))}
          </CardGroup>
        </Row>
      </div>
    </>
  );
};

export default Chief;
