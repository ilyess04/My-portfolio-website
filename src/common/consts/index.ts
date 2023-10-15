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
  autoStart: true,
  loop: true,
  deleteSpeed: 50,
};

const GIT_PORTFOLIO_URL = "https://github.com/ilyess04/my-portfolio-website";
const LINKEDIN_URL = "https://linkedin.com/in/ilyess-sellami";
const INSTAGRAM_URL = "https://www.instagram.com/_ilyessellami";
const TWITTER_URL = "https://twitter.com/ilyess_sellami1";
const GITHUB_URL = "https://github.com/ilyess04";
const GITHUB_USERNAME = "ilyess04";

export {
  INIT_PARTICLE_PARAMS,
  INIT_TYPE_WRITER_OPTIONS,
  GITHUB_USERNAME,
  GIT_PORTFOLIO_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
  GITHUB_URL,
};
