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
interface IHomeTemplates extends ITypewriter {
  icons: Array<ISocialIcon>;
}
interface IAboutMe {
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
interface IProject {
  name: string;
  url: string;
  description: string;
}
interface IProjectsTemplate {
  projects: Array<IProject>;
}
interface ITypewriter {
  portfolioSkills: Array<string>;
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
  IProject,
  IProjectsTemplate,
  ITypewriter,
  IAboutMe,
};
