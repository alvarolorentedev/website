import React from "react";
import Layout from "@theme/Layout";
import { ContactMe } from "../components/contact/ContactMe";


const title = "Contact Me";
const description = "Get in touch in the way you preffer.";

export default function Talks(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container">
        <iframe
            src="https://udify.app/chatbot/cIAFJaeA3Y8MZ46Q"
            style={{ width: "100%", height: "100%", minHeight: "700px" }}
            frameBorder="0"
            allow="microphone">
        </iframe>
      </main>
    </Layout>
  );
}
