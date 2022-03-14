import React from "react";
import ContactInfo from "../components/ContactInfo";
import Layout from "../components/Layout";
import Request from "../components/Request";

function contact() {
  const heading = "Contact information";
  const text = "Beautifully Minimal";

  return (
    <Layout heading={heading} text={text}>
      <ContactInfo />
      <div className="h-80 bg-custom-gray4"></div>
      <Request />
    </Layout>
  );
}

export default contact;
