import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "OctoLaunch",
    description:
      "A DevOps companion for correlating CI/CD events, deployments, incidents, and production signals.",
    url: "https://octolaunch.com/",
    image: require(`${assetsDir}/octolaunch-logo.svg`),
  },
  {
    title: "StrengthsOS",
    description:
      "A capability workflow for engineering leaders to define role expectations, assess gaps, and plan growth.",
    url: "https://strengthsos.com/",
    image: require(`${assetsDir}/strengthsos-logo-navbar.png`),
  },
  {
    title: "OpenCode Mobile",
    description:
      "A mobile companion for OpenCode that lets you inspect tasks, approve changes, and keep agent work moving.",
    url: "http://getopencode.app/",
    image: require(`${assetsDir}/opencode-logo.svg`),
  },
  {
    title: "Owlumi",
    description:
      "A calm storytelling companion for families that co-creates bedtime stories with a friendly owl mascot.",
    url: "http://playowlumi.com/",
    image: require(`${assetsDir}/owlumi-icon.png`),
  },
  {
    title: "Billly",
    description:
      "A WhatsApp-based expense manager that splits household bills automatically and sends payment links.",
    url: "https://billly.xyz/",
    image: require(`${assetsDir}/billly-logo-text.png`),
  },
  {
    title: "Barklarm",
    description:
      "A desktop app that centralizes build and monitoring alarms natively in the operating system.",
    url: "https://www.barklarm.com/",
    image: require(`${assetsDir}/barklarm-logo.svg`),
  },
  {
    title: "Flagbear",
    description:
      "A serviceless feature flag system for enabling and disabling features without a third-party platform.",
    url: "https://www.flagbear.dev/",
    image: require(`${assetsDir}/flagbear-logo.svg`),
  },
];

const title = "Projects";
const description =
  "Selected products and technical ventures I have built or helped shape.";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
