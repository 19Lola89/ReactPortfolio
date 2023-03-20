import React from "react";
import Layout from "../components/Layout";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../pages/Contact.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCloudDownloadAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Layout>
        <div className="contCont">
          <div className="flex">
            This is where I need to figure out what to put
          </div>
          <div className="eventForm flex">
            <Card style={{ width: "30rem", height: "40rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body className="cardBody">
                <Card.Title>
                  Get in touch by leaving your details below
                </Card.Title>
                <Card.Text>What's your name?</Card.Text>
                <input className="nameSub" placeholder="Name"></input>
                <Card.Text>Enter your email address below</Card.Text>
                <input
                  className="mailSub"
                  placeholder="Enter your email here"
                ></input>
                <Card.Text>Thank you... add emoji</Card.Text>
                <Button variant="dark">Submit</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="sidebar flex">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} />
            </a>
            <a href="mailto:youremail@example.com">
              <FaEnvelope size={40} />
            </a>
            <a href="/path/to/file" download>
              <FaCloudDownloadAlt size={40} />
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
