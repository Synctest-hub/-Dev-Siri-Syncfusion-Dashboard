import type { ReactNode } from "react";

interface InfiniteItems<T = string> {
  [key: string]: T;
}

export interface PageProps {
  params: InfiniteItems;
  searchParams?: any;
}

export interface LayoutProps {
  children: ReactNode;
  params: InfiniteItems;
}

export interface ContextProviderProps {
  children: ReactNode;
}

export interface NavButtonProps {
  title: string;
  customFunc(): void;
  icon: ReactNode;
  color: string;
  dotColor?: string;
}

export interface ButtonProps {
  color?: string;
  bgColor?: string;
  bgHoverColor?: string;
  text?: string;
  borderRadius?: string;
  useThemeBgColor?: boolean;
  size?: string;
  icon?: ReactNode;
  width?: string;
}

export interface GridOrderImageProps {
  ProductImage: string;
}

export interface GridOrderStatusProps {
  StatusBg: string;
  Status: string;
}

export interface GridEmployeeProfileProps {
  EmployeeImage: string;
  Name: string;
}

export interface GridEmployeeCountryProps {
  Country: string;
}

export interface CustomerGridImageProps {
  CustomerImage: string;
  CustomerName: string;
  CustomerEmail: string;
}

export interface CustomerGridStatusProps extends GridOrderStatusProps {}

export interface HeaderProps {
  category: string;
  title: string;
}

export interface StackedProps {
  width: string;
  height: string;
}

export interface SparkLineProps {
  id: string;
  height: string;
  width: string;
  color: string;
  data: Object[] | any[];
  type: "Line" | "Column" | "Area" | "WinLoss" | "Pie";
  currentColor: string;
}

export interface DoughnutProps {
  id: string;
  data: any;
  legendVisiblity?: boolean;
  height: string;
}
