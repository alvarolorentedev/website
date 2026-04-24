import React, { useEffect, useState } from "react";
import Footer from "@theme-original/Footer";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./Footer.module.scss";

export default function FooterWrapper(props) {
  const { siteConfig } = useDocusaurusContext();
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  useEffect(() => {
    if (!isSubscribeOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsSubscribeOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSubscribeOpen]);

  return (
    <>
      <button
        type="button"
        className={styles.subscribeButton}
        onClick={() => setIsSubscribeOpen(true)}
        aria-label="Subscribe to the newsletter"
        title="Subscribe to the newsletter"
      >
        Join Newsletter
      </button>
      {isSubscribeOpen ? (
        <div
          className={styles.overlay}
          onClick={() => setIsSubscribeOpen(false)}
          role="presentation"
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-subscribe-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsSubscribeOpen(false)}
              aria-label="Close subscribe modal"
            >
              ×
            </button>
            <div className={styles.embedFrame}>
              <iframe
                src="https://theengineeringtax.substack.com/embed"
                title={`${siteConfig.title} newsletter signup`}
                width="100%"
                height="320"
                frameBorder="0"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      ) : null}
      <Footer {...props} />
    </>
  );
}
