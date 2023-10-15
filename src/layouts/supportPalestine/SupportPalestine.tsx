import { Container } from "react-bootstrap";

const SupportPalestine = (): JSX.Element => {
  return (
    <div className="container">
      <a
        className="support-palestine"
        href="https://www.islamic-relief.org.uk/giving/appeals/palestine/"
        target="_blank"
        rel="nofollow noopener"
        title="Donate to support Palestine"
      >
        <div
          className="support-palestine__flag"
          role="img"
          aria-label="Flag of Palestine"
        >
          <div className="background">
            <div className="top"></div>
            <div className="middle"></div>
            <div className="triangle"></div>
          </div>
        </div>
        <div className="support-palestine__label">
          Donate to support Palestine
        </div>
      </a>
    </div>
  );
};
export default SupportPalestine;
