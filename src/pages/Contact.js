import React from "react";
import Layout from "../components/Layout";

import ReqForm from "../components/ReqForm";
import ContactSideBar from "../components/ContactSideBar";
import ContentCard from "../components/ContentCard";
import "../pages/Contact.css";

const Contact = () => {
  return (
    <div>
      <Layout>
        <div className="contactContainer">
          <div className="row">
            <ContentCard
              title="bla bla bla bla"
              content="Lorem ipsum dolor sit amet. Aut quis fugit qui iusto dolorum sed officia animi. Eum eaque necessitatibus et provident possimus qui animi facere aut architecto nulla vel quas provident. Est enim animi eos sint consequatur qui voluptatem rerum ut deserunt sapiente qui voluptas expedita. Cum labore blanditiis ex quia labore ad tempora modi sit galisum adipisci eum atque nesciunt qui minus iste?

              Eum culpa placeat qui quasi nisi sit dolores suscipit et mollitia quia in tempora voluptatem est nihil alias. Vel dolorum delectus ut incidunt perspiciatis aut alias quibusdam et laborum consequatur.
              
              Cum earum quasi eum modi molestiae ut possimus assumenda vel beatae similique. At odit illum est saepe tempora ea dicta voluptas sit modi suscipit. Sed galisum enim et rerum fugit qui optio repellat! Eum facere sunt eos minus molestias hic libero galisum"
            />
          </div>
          <div className="row">
            <ReqForm />
          </div>
          <div className="row">
            <ContactSideBar />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
