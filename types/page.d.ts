import type { PageProps, LayoutProps } from "./props";

export type PageComponent = (props: PageProps) => ReactNode | Promise<ReactNode>;
export type LayoutComponent = (props: LayoutProps) => ReactNode | Promise<ReactNode>;
