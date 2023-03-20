// this is where json file data from porjects comes in. Reusable component// dont forget to import it
// render six instances of projectgallery projects
import React from "react";
import Layout from "../components/Layout";

const Projects = () => {
  return (
    <div>
      <Layout>
        <h1>Project0</h1>
        <h1>Project1</h1>
        <h1>Project2</h1>
        <h1>Project3</h1>
        <h1>Project4</h1>
        <h1>Project5</h1>
      </Layout>
    </div>
  );
};

export default Projects;
