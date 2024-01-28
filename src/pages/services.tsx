import React from "react";
import Layout from "@theme/Layout";

import { Service, ServiceData } from "../components/services/Service";

const assetsDir = "./assets/services";
const projects: ServiceData[] = [
  {
    title: "Engineering Strategy Support",
    description:
      "Assessing your strategy and assisting you in its evolution to achieve your goals. We will collaborate on iterating it together.",
    image: require(`${assetsDir}/consult.png`),
    url:"https://cal.com/kanekotic/30min",
    role: "Consultant",
  },
  {
    title: "Engineering Audit",
    description:
      "We will work together to conduct an orthogonal audit of your organization. We will assess your agile processes, architecture and more.",
    image: require(`${assetsDir}/consult.png`),
    url:"https://cal.com/kanekotic/30min",
    role: "Consultant",
  },
  {
    title: "Engineering Strategy Personal Growth",
    description:
      "Helping you improve and scale your capabilities on defining and handling the enginering strategy for your company or team.",
    image: require(`${assetsDir}/coach-mentor.png`),
    url:"https://cal.com/kanekotic/30min",
    role: "Mentor & Coach",
  },
];

const title = "Services";
const description = "I provide different services that adapts the best to your organization needs.";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Service key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
