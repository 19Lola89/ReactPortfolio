import React from "react";
import Card from "react-bootstrap/Card";

const ContentCard = (props) => {
  return (
    <div>
      <form className="aboutCard">
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{props.content}</p>
          </blockquote>
        </Card.Body>
      </form>
    </div>
  );
};

export default ContentCard;
