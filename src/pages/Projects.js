// this is where json file data from porjects comes in. Reusable component// dont forget to import it
// render six instances of projectgallery projects
import React from "react";
import Layout from "../components/Layout";
import projectData from "../details.json";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

// import {Link} from  "react-router-dom"
import "../pages/Projects.css";
// import ProjectGallery from "./ProjectGallery";

function Projects() {
  return (
    <div className="projectsBody">
      <Layout>
        <h1>Just pick the project you would like to see </h1>

        <Row xs={1} md={2} className="g-4">
          {projectData.map((project) => (
            <Col key={project.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="dark">Button</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Layout>
    </div>
  );
}

export default Projects;
