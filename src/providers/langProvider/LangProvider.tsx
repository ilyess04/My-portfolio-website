import { LangContext } from "../../lang/provider/Provider";
import { useSelector } from "react-redux";
import { IRootState, IPageProps } from "../../common/interfaces";
import { Elang } from "../../common/enums";
import EN from "../../lang/en/en";
import FR from "../../lang/fr/fr";

export default function LangProvider(props: IPageProps): JSX.Element {
  const lang = useSelector((state: IRootState) => state.setting.lang);
  let type = FR;
  if (lang === Elang.en) {
    type = EN;
  }
  return (
    <LangContext.Provider value={type}>{props.children}</LangContext.Provider>
  );
}
