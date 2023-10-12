import { IAuthReducer } from "../../interfaces";
import { IAuthState } from "../../interfaces/state";

/* STATE */
const INIT_AUTH_REDUCER_STATE: IAuthReducer = {
  accessToken: undefined,
  refreshToken: undefined,
  user: undefined,
};
const INIT_AUTH_STATE: IAuthState = {
  email: "",
  password: "",
};

/* COMPONENTS */
const INIT_PARTICLE_PARAMS = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    line_linked: {
      enable: false,
      opacity: 0.03,
    },
    move: {
      direction: "right",
      speed: 0.05,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};
const INIT_TYPE_WRITER_OPTIONS = {
  strings: [
    "Software Developer",
    "Freelancer",
    "MERN Stack Developer",
    "Open Source Contributor",
  ],
  autoStart: true,
  loop: true,
  deleteSpeed: 50,
};

export {
  INIT_AUTH_STATE,
  INIT_AUTH_REDUCER_STATE,
  INIT_PARTICLE_PARAMS,
  INIT_TYPE_WRITER_OPTIONS,
};
