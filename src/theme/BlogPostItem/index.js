import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";

import {
  BlogSeriesHeader,
  BlogSeriesNavigator,
} from "@site/src/components/BlogSeries";

function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? "margin-bottom--xl" : undefined;
}

export default function BlogPostItem({ children, className }) {
  const containerClassName = useContainerClassName();

  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      <BlogSeriesHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogSeriesNavigator />
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
