import React, { FunctionComponent } from "react";
import clsx from "clsx";
import styles from "./ContactMe.module.scss";

export interface ContactMeProps {
}

export const ContactMe: FunctionComponent<ContactMeProps> = ({
}) => {
  return (
      <div className="row">
        <div className="col">
          <h2>Send me an Email</h2>
          <form action="https://formsubmit.co/support@alvarolorente.dev" method="POST" className={styles.form}>
            <input type="text" name="name" placeholder="Your name" required />
            <input  type="email" name="email" placeholder="Your email" required />
            <button className="button button--primary" type="submit">Send</button>
          </form>
        </div>
        <div className="col">
          <div className="row">
            <h2>Or Book a Call</h2>
          </div>
          <div className="row">
            <a className="button button--primary" href="https://cal.com/kanekotic/30min">Book a 30 minutes call</a>
          </div>

          <div className="row margin-top--lg">
            <h2>or drop me a message</h2>
          </div>
          <div className="row">
            <a className="" href="https://www.linkedin.com/in/alvarolorentedev/">Say Hi! 👋️ on LinkedIn</a>
          </div>
        </div>
      </div>
  );
};
