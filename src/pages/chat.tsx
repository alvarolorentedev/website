import React from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";


const title = "Virtual Me";
const description =
  "Chat with a virtual version of Alvaro to learn more about his background, work, and approach.";

export default function Chat(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>
        <BrowserOnly>
          {() => {
            const ChatComponent = require('../components/Chat/Chat').default;
            return <ChatComponent />;
          }}
        </BrowserOnly>
      </main>
    </Layout>
  );
};
