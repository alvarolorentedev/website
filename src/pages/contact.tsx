import React from "react";
import Layout from "@theme/Layout";
import { ContactMe } from "../components/contact/ContactMe";


const title = "Contact Me";
const description =
  "Get in touch to discuss fractional CTO support, engineering strategy, architecture, or speaking.";

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
