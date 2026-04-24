import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "Socialtion",
    description:
      "A publishing workflow that turns Notion into a practical social media operating system.",
    url: "https://socialtion.com/",
    image: require(`${assetsDir}/socialtion.png`),
    role: "Founder",
  },
  {
    title: "Podcastion",
    description:
      "An opinionated product for managing podcast publishing and operations from Notion.",
    url: "https://podcastion.com/",
    image: require(`${assetsDir}/podcastion.png`),
    role: "Founder",
  },
  {
    title: "Barklarm",
    description:
      "A desktop utility that surfaces build and monitoring signals directly in the operating system.",
    url: "https://barklarm.com/",
    image: require(`${assetsDir}/barklarm.png`),
    role: "Founder",
  },
  {
    title: "Tarant",
    description:
      "A systems-oriented project exploring a universal actor model for distributed software.",
    url: "https://tarant.dev/",
    image: require(`${assetsDir}/tarant.png`),
    role: "Co-founder",
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
