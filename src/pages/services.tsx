import React from "react";
import Layout from "@theme/Layout";

import { Service, ServiceData } from "../components/services/Service";

const assetsDir = "./assets/services";
const services: ServiceData[] = [
  {
    title: "Fractional CTO advisory",
    description:
      "Ongoing senior technical leadership for founders and executive teams who need clearer priorities, stronger decision-making rhythms, and practical support shaping engineering strategy.",
    image: require(`${assetsDir}/fractional-cto.svg`),
    url: "https://cal.com/alvarolorente/30min",
    role: "Advisor",
  },
  {
    title: "AI and LLM product advisory",
    description:
      "Support teams building AI-enabled products, internal agents, and automation workflows with product evaluation, technical roadmap guidance, and implementation direction.",
    image: require(`${assetsDir}/ai-advisory.svg`),
    url: "https://cal.com/alvarolorente/30min",
    role: "AI",
  },
  {
    title: "Engineering strategy and operating model",
    description:
      "Define the team structure, decision rights, and delivery cadence that help organizations scale from startup pace to a more predictable engineering operating model.",
    image: require(`${assetsDir}/engineering-strategy.svg`),
    url: "https://cal.com/alvarolorente/30min",
    role: "Strategy",
  },
  {
    title: "Leadership mentoring and workshops",
    description:
      "Coaching for engineering managers and technical leaders who want to strengthen servant leadership, grow team ownership, and share better technical practices.",
    image: require(`${assetsDir}/mentoring-workshops.svg`),
    url: "https://cal.com/alvarolorente/30min",
    role: "Mentor",
  },
  {
    title: "Delivery excellence and DevOps",
    description:
      "Improve flow, reliability, and security with stronger CI/CD, observability, operational habits, and delivery metrics such as DORA in high-change environments.",
    image: require(`${assetsDir}/devops-delivery.svg`),
    url: "https://cal.com/alvarolorente/30min",
    role: "Delivery",
  },
  {
    title: "Architecture modernization",
    description:
      "Simplify complex systems, reduce technical friction, and guide re-architecture decisions across modular monoliths, microservices, DDD, and platform boundaries.",
    image: require(`${assetsDir}/architecture-modernization.svg`),
    url: "https://cal.com/alvarolorente/30min",
    role: "Architect",
  },
];

const title = "Services";
const description =
  "Services shaped by 15+ years in engineering leadership, architecture, platform engineering, delivery, and AI-enabled product work.";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {services.map((service) => (
            <Service key={service.title} {...service} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
