"use strict";

var _interopRequireDefault = require("/Users/mahimagangavarapu/myProjects/candy-shop/candy-shop-client/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavBar;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/mahimagangavarapu/myProjects/candy-shop/candy-shop-client/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\ndisplay: flex;\njustify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledNavBar = _styledComponents.default.div(_templateObject());

function NavBar() {
  return /*#__PURE__*/_react.default.createElement(StyledNavBar, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement("div", null, "home")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/about"
  }, /*#__PURE__*/_react.default.createElement("div", null, "about")));
}
