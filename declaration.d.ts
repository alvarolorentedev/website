declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.jpg";
declare module "*.png";
declare module "*.md";

declare module "@theme/IdealImage" {
  import type { ComponentType } from "react";

  const IdealImage: ComponentType<Record<string, unknown>>;
  export default IdealImage;
}

declare module "@theme/Layout" {
  import type { ComponentType, PropsWithChildren, ReactNode } from "react";

  export interface Props extends PropsWithChildren {
    children?: ReactNode;
    title?: string;
    description?: string;
    wrapperClassName?: string;
  }

  const Layout: ComponentType<Props>;
  export default Layout;
}

declare module "@docusaurus/Link" {
  import type { AnchorHTMLAttributes, ComponentType, ReactNode } from "react";

  export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: ReactNode;
    to?: string;
    href?: string;
  }

  const Link: ComponentType<Props>;
  export default Link;
}

declare module "@docusaurus/BrowserOnly" {
  import type { ComponentType, ReactNode } from "react";

  export interface Props {
    children?: ReactNode | (() => ReactNode);
    fallback?: ReactNode;
  }

  const BrowserOnly: ComponentType<Props>;
  export default BrowserOnly;
}
