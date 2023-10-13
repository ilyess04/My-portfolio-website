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
const CV_URL = "https://ilyessellami.com/wp-content/assets/cv.pdf";

export { INIT_PARTICLE_PARAMS, INIT_TYPE_WRITER_OPTIONS, CV_URL };
