import React from "react";
import Layout from "../components/Layout";
import ReqForm from "../components/ReqForm";
import ContactSideBar from "../components/ContactSideBar";
import backgroundImage from "../assets/pencil.png";

import "../pages/Contact.css";

const Contact = () => {
  const background = `url(${backgroundImage})`;
  return (
    <Layout>
      <div>
        <div
          className="contactContainer"
          style={{
            padding: "60px",
            display: "flex",
          }}
        >
          <div
            style={{
              margin: "20px",
              backgroundImage: background,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",

              flex: "2",
              display: "flex",

              marginLeft: "400px",
            }}
            className="centered"
          >
            <ReqForm />
          </div>
          <div className="row">
            <ContactSideBar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
