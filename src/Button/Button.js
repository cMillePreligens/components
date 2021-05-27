import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.css";

function Button({ children, disabled, onClick, type }) {
  return (
    <button
      className={classNames("Button", { "Button-disabled": "Button-disabled" })}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  type: "button",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
};

Button.displayName = "Button";

export default Button;
