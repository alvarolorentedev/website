import React from "react";
import Footer from "@theme-original/Footer";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function FooterWrapper(props) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <iframe src="https://scalinghorizons.substack.com/embed" width="100%" height="150" frameborder="0" scrolling="no"></iframe>
      <Footer {...props} />
    </>
  );
}
