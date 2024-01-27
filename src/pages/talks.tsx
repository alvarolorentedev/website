import React from "react";
import Layout from "@theme/Layout";

import Talk, { TalkMetadata } from "../components/talks/Talk";

import StreamingSuccess from "./assets/talks/streaming-success.md";
import IsUnitTestingDead from "./assets/talks/unit-testing-dead.md";

const talks: TalkMetadata[] = [
  {
    title: "Streaming Success: Optimizing DORA Metrics through Comprehensive Software Development Practices",
    description: <StreamingSuccess />,
    events: [
      {
        name: "Conferencia Agile Spain",
        location: "Barcelona, Spain",
        date: new Date(2023, 11),
      },
      {
        name: "Conferencia Agile Spain",
        location: "Barcelona, Spain",
        date: new Date(2023, 11),
      },
    ]
  },
  {
    title: "is unit testing dead?",
    description: <IsUnitTestingDead />,
    events: [
      {
        name: "XConf Unplugged",
        location: "Madrid, Spain",
        date: new Date(2018, 3),
      },
      {
        name: "XConf Unplugged",
        location: "Barcelona, Spain",
        date: new Date(2018, 4),
      },
    ]
  },
];

const title = "Talks";
const description = "Featured talks I presented on various events.";

export default function Talks(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {talks.map((talkData) => (
            <Talk key={talkData.title} {...talkData} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
