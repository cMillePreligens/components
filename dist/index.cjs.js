'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

function Button(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      type = _ref.type;
  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: classNames__default['default']("Button", {
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
  children: PropTypes__default['default'].node.isRequired,
  disabled: PropTypes__default['default'].bool,
  onClick: PropTypes__default['default'].func.isRequired,
  type: PropTypes__default['default'].oneOf(["button", "reset", "submit"])
};
Button.displayName = "Button";

exports.Button = Button;
