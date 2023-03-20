import React from "react";
import Layout from "../components/Layout";
import "../pages/About.css";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <div>
      <Layout>
        <div className="aboutContainer">
          <div className="row pic">
            <img
              src={`${process.env.PUBLIC_URL}/lola.jpeg`}
              // style={{
              //   width: "50%",
              //   height: "50%px",
              // }}
              alt="Avatar"
            />
          </div>

          <div className="aboutContEl row">
            <Card className="aboutCard">
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.{" "}
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
