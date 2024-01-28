import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          Hi. I'm <span className={styles.highlighted}>Alvaro Lorente</span>,
          <br />
          Fractional CTO & Founder.
        </h1>
      </div>
    </header>
  );
};
