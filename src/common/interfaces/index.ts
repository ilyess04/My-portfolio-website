import React, { ReactNode } from "react";

interface IKeys {
  [key: string]: string;
}
interface IPageProps {
  children: JSX.Element | null | undefined | ReactNode;
}
interface ISocialIcon {
  url: string;
  child: React.ReactNode;
}
interface IHomeTemplates {
  icons: Array<ISocialIcon>;
}
export type { IKeys, IPageProps, ISocialIcon, IHomeTemplates };
