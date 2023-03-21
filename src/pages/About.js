import React from "react";
import Layout from "../components/Layout";
import "../pages/About.css";
// import Card from "react-bootstrap/Card";
import ContentCard from "../components/ContentCard";

const About = () => {
  return (
    <div>
      <Layout>
        <div className="aboutContainer">
          <div className="row pic">
            <img src={`${process.env.PUBLIC_URL}/lola.jpeg`} alt="Avatar" />
          </div>

          <div className="aboutContEl row">
            <ContentCard title="A little bit about me" />
            <ContentCard
              content="Lorem ipsum dolor sit amet. Aut quis fugit qui iusto dolorum sed officia animi. Eum eaque necessitatibus et provident possimus qui animi facere aut architecto nulla vel quas provident. Est enim animi eos sint consequatur qui voluptatem rerum ut deserunt sapiente qui voluptas expedita. Cum labore blanditiis ex quia labore ad tempora modi sit galisum adipisci eum atque nesciunt qui minus iste?

Eum culpa placeat qui quasi nisi sit dolores suscipit et mollitia quia in tempora voluptatem est nihil alias. Vel dolorum delectus ut incidunt perspiciatis aut alias quibusdam et laborum consequatur.

Cum earum quasi eum modi molestiae ut possimus assumenda vel beatae similique. At odit illum est saepe tempora ea dicta voluptas sit modi suscipit. Sed galisum enim et rerum fugit qui optio repellat! Eum facere sunt eos minus molestias hic libero galisumd"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
