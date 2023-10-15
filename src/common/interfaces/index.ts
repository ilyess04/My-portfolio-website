import { ReactNode } from "react";

interface IKeys {
  [key: string]: string;
}
interface IPageProps {
  children: JSX.Element | null | undefined | ReactNode;
}
interface ISocialIcon {
  url: string;
  child: ReactNode;
}
interface IHomeTemplates {
  icons: Array<ISocialIcon>;
}
interface IAboutGithub {
  githubUserName: string;
}
interface IStack {
  elements: Array<ReactNode>;
}
interface IAboutCard {
  otherActivities: Array<string>;
}
interface IAboutTemplate extends IAboutGithub {
  skills: Array<ReactNode>;
  tools: Array<ReactNode>;
  otherActivities: Array<string>;
}

export type {
  IKeys,
  IPageProps,
  ISocialIcon,
  IHomeTemplates,
  IAboutGithub,
  IAboutTemplate,
  IStack,
  IAboutCard,
};
