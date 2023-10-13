import React from "react";
import langFr from "../fr/fr";
import langEn from "../en/en";
import { IKeys } from "../../common/interfaces";

const LANG = {
  en: langEn,
  fr: langFr,
};
const LangContext = React.createContext<IKeys>(langEn);
export { LANG, LangContext };
