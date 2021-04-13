"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgAccessible = ({
  title,
  ...props
}) => /*#__PURE__*/_react.default.createElement("svg", _extends({
  viewBox: "0 0 390 390"
}, props), title ? /*#__PURE__*/_react.default.createElement("title", null, title) : null, /*#__PURE__*/_react.default.createElement("path", {
  d: "M222.5 34.3c0 19-15.4 34.3-34.3 34.3-19 0-34.4-15.4-34.4-34.3 0-19 15.4-34.3 34.4-34.3 18.9 0 34.3 15.4 34.3 34.3zM98.6 207.2a88.361 88.361 0 00-31.2 67.5c0 48.9 39.7 88.6 88.6 88.6s88.6-39.7 88.6-88.6l21.4 34.5C251.3 356 207.6 390 156 390c-63.7 0-115.3-51.6-115.3-115.3 0-45.2 26.1-84.4 64-103.3l-6.1 35.8z"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M164.3 78.5l-79.7 27c-13.2 6.3-18.4 15.7-18.4 15.7l-34.4 52.1s-7.3 12.5 2.7 19.7c11.2 8.1 21.9-2.4 23.7-4.6l37.4-54 31.3-10.4-12.4 65.9s-3.5 13.9 5.5 24.9c8.2 10 18.3 11.8 18.3 11.8L247 247.9l52.7 85.8s3.7 6.9 9.5 9.3c4.1 1.7 8.5-.2 8.5-.2L356 320s9.6-7.1 1.7-19.9c-7.7-12.3-17.2-7.1-17.2-7.1l-14.3 8.8-52.7-90.8s-3.2-5.8-9-9.5-14.8-5.1-14.8-5.1L181.8 183l14.9-80s2.8-13.8-6.4-21.1c-9.1-7.3-20.2-4.8-26-3.4z"
}));

var _default = SvgAccessible;
exports.default = _default;
module.exports = exports.default;

//# sourceMappingURL=Accessible.js