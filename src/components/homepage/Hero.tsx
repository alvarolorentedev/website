import clsx from "clsx";
import React, { FunctionComponent } from "react";
import Link from "@docusaurus/Link";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.kicker}>Fractional CTO • Engineering Strategy • Architecture</p>
          <h1 className={clsx("hero__title", styles.title)}>
            I help software companies make sharper technical decisions
            <span className={styles.highlighted}> before growth exposes the gaps.</span>
          </h1>
          <p className={clsx("hero__subtitle", styles.subtitle)}>
            I work with founders and engineering leaders on strategy, architecture,
            delivery systems, and the organizational choices behind them.
          </p>
          <div className={styles.actions}>
            <a
              className="button button--primary button--lg"
              href="https://cal.com/alvarolorente/30min"
            >
              Book a strategy call
            </a>
            <Link className="button button--outline button--primary button--lg" to="/services">
              Explore services
            </Link>
          </div>
          <ul className={styles.proofPoints}>
            <li>Based in Spain, working remotely with global teams</li>
            <li>Founder, advisor, speaker, and engineering leadership writer</li>
            <li>Focused on scalable architecture and healthier delivery systems</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
