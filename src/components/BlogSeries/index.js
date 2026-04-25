import React from "react";
import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";

import styles from "./styles.module.scss";

function getAllBlogPostMetadata() {
  const context = require.context(
    "~blog/default",
    false,
    /^\.\/site-blog-.*\.json$/,
  );

  return context
    .keys()
    .map((key) => context(key))
    .map((entry) => entry.default ?? entry)
    .filter((metadata) => !metadata?.unlisted && !metadata?.frontMatter?.draft);
}

function getSeriesPosts(seriesName) {
  return getAllBlogPostMetadata()
    .filter((metadata) => metadata.frontMatter?.series === seriesName)
    .sort((left, right) => new Date(left.date) - new Date(right.date));
}

function HeaderSeriesPill({ seriesName, seriesCount }) {
  return (
    <div className={styles.seriesHeader}>
      <span className={styles.seriesLabel}>Series</span>
      <span className={styles.seriesName}>{seriesName}</span>
      <span className={styles.seriesCount}>
        {seriesCount} {seriesCount === 1 ? "post" : "posts"}
      </span>
    </div>
  );
}

function SeriesNavigator({ seriesName, currentPost, seriesPosts }) {
  if (seriesPosts.length < 2) {
    return null;
  }

  const currentIndex = seriesPosts.findIndex(
    (post) => post.permalink === currentPost.permalink,
  );

  if (currentIndex === -1) {
    return null;
  }

  const previousPost = seriesPosts[currentIndex - 1];
  const nextPost = seriesPosts[currentIndex + 1];

  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <aside
      className={styles.seriesNavigator}
      aria-label={`Series ${seriesName}`}
    >
      <div className={styles.seriesNavigatorMeta}>
        <span className={styles.seriesLabel}>In this series</span>
        <span className={styles.seriesPosition}>
          {currentIndex + 1} of {seriesPosts.length}
        </span>
      </div>
      <div className={styles.seriesNavigatorLinks}>
        {previousPost ? (
          <Link className={styles.seriesLink} to={previousPost.permalink}>
            <span className={styles.direction}>Previous</span>
            <span>{previousPost.title}</span>
          </Link>
        ) : (
          <span className={styles.seriesSpacer} />
        )}
        {nextPost ? (
          <Link className={styles.seriesLink} to={nextPost.permalink}>
            <span className={styles.direction}>Next</span>
            <span>{nextPost.title}</span>
          </Link>
        ) : (
          <span className={styles.seriesSpacer} />
        )}
      </div>
    </aside>
  );
}

export function BlogSeriesHeader() {
  const { metadata } = useBlogPost();
  const seriesName = metadata.frontMatter?.series;

  if (!seriesName) {
    return null;
  }

  const seriesPosts = getSeriesPosts(seriesName);

  return (
    <HeaderSeriesPill
      seriesName={seriesName}
      seriesCount={seriesPosts.length || 1}
    />
  );
}

export function BlogSeriesNavigator() {
  const { metadata, isBlogPostPage } = useBlogPost();
  const seriesName = metadata.frontMatter?.series;

  if (!isBlogPostPage || !seriesName) {
    return null;
  }

  const seriesPosts = getSeriesPosts(seriesName);

  return (
    <SeriesNavigator
      currentPost={metadata}
      seriesName={seriesName}
      seriesPosts={seriesPosts}
    />
  );
}
