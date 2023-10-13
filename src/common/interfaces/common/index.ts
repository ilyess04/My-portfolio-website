import { ReactNode } from "react";

interface IKeys {
  [key: string]: string;
}
interface IPageProps {
  children: JSX.Element | null | undefined | ReactNode;
}
interface ICommonComponent {
  lang: IKeys;
}
export type { IKeys, IPageProps, ICommonComponent };
