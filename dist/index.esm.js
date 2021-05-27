import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      type = _ref.type;
  return /*#__PURE__*/React.createElement("button", {
    className: classNames("Button", {
      "Button-disabled": "Button-disabled"
    }),
    disabled: disabled,
    onClick: onClick,
    type: type
  }, children);
}

Button.defaultProps = {
  disabled: false,
  type: "button"
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "reset", "submit"])
};
Button.displayName = "Button";

export { Button };
