import React from "react";
import Layout from "@theme/Layout";

import { Service, ServiceData } from "../components/services/Service";

const assetsDir = "./assets/services";
const projects: ServiceData[] = [
  {
    title: "Fractional CTO advisory",
    description:
      "Ongoing strategic support for founders and engineering leaders who need senior technical direction, clearer priorities, and better decision-making rhythms.",
    image: require(`${assetsDir}/consult.png`),
    url: "https://cal.com/alvarolorente/30min",
    role: "Advisor",
  },
  {
    title: "Engineering and architecture audit",
    description:
      "A structured review of architecture, delivery flow, team interfaces, and engineering practices to identify the highest-leverage fixes.",
    image: require(`${assetsDir}/consult.png`),
    url: "https://cal.com/alvarolorente/30min",
    role: "Consultant",
  },
  {
    title: "Leadership mentoring for engineering managers",
    description:
      "Targeted coaching for leaders who want to improve technical strategy, organizational influence, and the way they guide teams through change.",
    image: require(`${assetsDir}/coach-mentor.png`),
    url: "https://cal.com/alvarolorente/30min",
    role: "Mentor & Coach",
  },
];

const title = "Services";
const description =
  "Fractional CTO advisory, engineering audits, and leadership support for software companies that need sharper technical direction.";

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
