"use strict";

var _interopRequireWildcard = require("/Users/mahimagangavarapu/myProjects/candy-shop/candy-shop-client/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/mahimagangavarapu/myProjects/candy-shop/candy-shop-client/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/mahimagangavarapu/myProjects/candy-shop/candy-shop-client/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: Open-Sans, Helvetica, Sans-Serif;\n  background: whitesmoke;\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  ul {\n    list-style-type: none;\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
// import NavBar from './components/NavBar'
// import Home from './pages/Home'
// import About from './pages/About'
var Container = _styledComponents.default.div(_templateObject());

var GlobalStyleComponent = (0, _styledComponents.createGlobalStyle)(_templateObject2());

function App() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(GlobalStyleComponent, null), /*#__PURE__*/_react.default.createElement(Container, null, "hi"));
}

var _default = App;
exports.default = _default;
