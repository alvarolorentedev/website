import React from "react";
import Layout from "@theme/Layout";

import Talk, { TalkMetadata } from "../components/talks/Talk";

import CuttingCosts from "./assets/talks/cutting-costs.md";
import LocalAIProductivity from "./assets/talks/local-ai-productivity.md";
import IsUnitTestingDead from "./assets/talks/unit-testing-dead.md";
import ProductThinkingPlatform from "./assets/talks/product-thinking-platform-engineering.md";
import StreamingSuccess from "./assets/talks/streaming-success.md";
import ConwaysLaw from "./assets/talks/conways-law-user-value-architecture.md";

const recentAppearances = [
];

const talks: TalkMetadata[] = [
  {
    title: "Productivity boost for tech experts using local AI",
    description: <LocalAIProductivity />,
    events: [
      {
        name: "DevFest Santiago de Compostela 2025",
        location: "Santiago de Compostela, Spain",
        date: new Date(2025, 9),
      },
    ],
  },
  {
    title:
      "Streaming Success: Optimizing DORA Metrics through Comprehensive Software Development Practices",
    description: <StreamingSuccess />,
    events: [
      {
        name: "Conferencia Agile Spain (CAS'23)",
        location: "Tarragona, Spain",
        date: new Date(2023, 10),
      },
      {
        name: "DevFest Santiago de Compostela 2024",
        location: "Santiago de Compostela, Spain",
        date: new Date(2024, 9),
      },
      {
        name: "DevBcn 2024",
        location: "L'Hospitalet de Llobregat, Spain",
        date: new Date(2024, 5),
      },
    ],
  },
  {
    title: "Is Unit Testing Dead?",
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
  {
    title: "The Value of Product Thinking in Platform Engineering",
    description: <ProductThinkingPlatform />,
    events: [],
  },
  {
    title:
      "Cutting Costs, Not Corners: Adapting Software Practices for Every Stage of Our Project",
    description: <CuttingCosts />,
    events: [],
  },
  {
    title:
      "Leveraging Conway's Law to Harmonize User Value & Architecture",
    description: <ConwaysLaw />,
    events: [],
  },
];

const title = "Talks";
const description =
  "Public talks and workshops on engineering leadership, software delivery, platform engineering, AI productivity, and architecture.";

const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

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
