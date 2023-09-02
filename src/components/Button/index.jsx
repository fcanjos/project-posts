import P from "prop-types";
import "./styles.css";

export const Button = ({ text, onClick, disabled = false }) => (
  <button disabled={disabled} onClick={onClick} className="button">
    {text}
  </button>
);

Button.defaultProps = {
  disable: true,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
