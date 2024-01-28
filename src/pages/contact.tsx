import React from "react";
import Layout from "@theme/Layout";
import { ContactMe } from "../components/contact/ContactMe";


const title = "Contact Me";
const description = "Get in touch in the way you preffer.";

export default function Talks(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container">
        <h1>{title}</h1>
        <p>{description}</p>
        <ContactMe/>
      </main>
    </Layout>
  );
}
