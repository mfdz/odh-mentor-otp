"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const SvgMax = ({
  title,
  ...props
}) => /*#__PURE__*/_react.default.createElement("svg", _extends({
  viewBox: "0 0 390 390"
}, props), title ? /*#__PURE__*/_react.default.createElement("title", null, title) : null, /*#__PURE__*/_react.default.createElement("path", {
  d: "M257.4 300h7.6c16.6 0 30-13.4 30-30V92c0-16.6-13.4-30-30-30h-56.5l40.3-29.9 11.6 9.9c.8.6 1.7 1 2.6 1 1.1 0 2.2-.5 3-1.4 1.4-1.7 1.2-4.2-.4-5.6l-14-12c-.7-.6-1.6-1-2.6-1H141c-1 0-1.9.3-2.6 1l-14 12c-1.7 1.4-1.9 4-.4 5.6 1.4 1.7 4 1.9 5.6.4l11.6-9.9L181.5 62H125c-16.6 0-30 13.4-30 30v178c0 16.6 13.4 30 30 30h7.6L84 372h26l10.8-16h148.4l10.8 16h26l-48.6-72zm6.6-34c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zM153.1 31h83.8L195 62l-41.9-31zm5.4 45h73c3.9 0 7 3.1 7 7s-3.1 7-7 7h-73c-3.9 0-7-3.1-7-7s3.1-7 7-7zM111 112c0-4.4 3.6-8 8-8h152c4.4 0 8 3.6 8 8v100c0 4.4-3.6 8-8 8H119c-4.4 0-8-3.6-8-8V112zm131.2 204h-94.4l10.8-16h72.8l10.8 16zM126 266c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zm2.9 78l10.8-16h110.6l10.8 16H128.9z"
}));

var _default = SvgMax;
exports.default = _default;
module.exports = exports.default;

//# sourceMappingURL=Max.js