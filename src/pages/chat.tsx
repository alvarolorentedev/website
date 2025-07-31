import React from "react";
import Layout from "@theme/Layout";
import ChatCompoment from "../components/Chat/Chat";


const title = "Virtual Me";
const description = "Talk to a virtual Alvaro Lorente, so you can know me better.";

export default function Chat(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>
        <ChatCompoment />
      </main>
    </Layout>
  );
};

