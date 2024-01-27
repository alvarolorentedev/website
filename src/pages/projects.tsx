import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "Socialtion",
    description:
      "Create & schedule your social media from Notions",
    url: "https://socialtion.com/",
    image: require(`${assetsDir}/socialtion.png`),
    role: "Founder",
  },
  {
    title: "Podcastion",
    description:
      "Host your podcast in Notion",
    url: "https://podcastion.com/",
    image: require(`${assetsDir}/podcastion.png`),
    role: "Founder",
  },
  {
    title: "Barklarm",
    description:
      "Display the status of your projects build & monitoring natively to your OS",
    url: "https://barklarm.com/",
    image: require(`${assetsDir}/barklarm.png`),
    role: "Founder",
  },
  {
    title: "Tarant",
    description:
      "The Universal Actor Model",
    url: "https://tarant.dev/",
    image: require(`${assetsDir}/tarant.png`),
    role: "co-Founder",
  },
];

const title = "Projects";
const description = "Featured projects I was/am involved in.";

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
