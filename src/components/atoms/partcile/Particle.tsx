import Particles from "react-tsparticles";
import { INIT_PARTICLE_PARAMS } from "../../../common/consts";

const Particle = (): JSX.Element => {
  return <Particles id="tsparticles" params={{ INIT_PARTICLE_PARAMS }} />;
};

export default Particle;
