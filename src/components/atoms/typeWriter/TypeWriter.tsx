import Typewriter from "typewriter-effect";
import { INIT_TYPE_WRITER_OPTIONS } from "../../../common/consts";
import { ITypewriter } from "../../../common/interfaces";

const Type = ({ portfolioSkills }: ITypewriter): JSX.Element => {
  return (
    <Typewriter
      options={{
        strings: portfolioSkills,
        ...INIT_TYPE_WRITER_OPTIONS,
      }}
    />
  );
};

export default Type;
