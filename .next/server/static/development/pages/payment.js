module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/Footer.js":
/*!************************************!*\
  !*** ./pages/components/Footer.js ***!
  \************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style/css */ "antd/lib/row/style/css");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style/css */ "antd/lib/col/style/css");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "D:\\Development\\todays-friend\\frontend\\todays-friend\\pages\\components\\Footer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          height: 250,
          background: '#b5b8bf',
          marginTop: 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 24,
        style: {
          textAlign: 'center',
          paddingTop: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/policy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Terms & Legal | Security & Privacy | Cancel & Refund")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Company name: Todaysfriend | Representative: Kim Heein & Lee seungju | Company permit number: 101-17-99099"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Company Address: 55-17, Hoengun 4-gil, Gwanak-gu, Seoul, Republic of Korea"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Email: admin@todaysfriend.com"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Copyright @ Todaysfriend")));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/***/ }),

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style/css */ "antd/lib/row/style/css");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style/css */ "antd/lib/col/style/css");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images */ "./pages/components/images.js");
/* harmony import */ var _static_css_menu_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/css/menu.css */ "./static/css/menu.css");
/* harmony import */ var _static_css_menu_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_css_menu_css__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "D:\\Development\\todays-friend\\frontend\\todays-friend\\pages\\components\\Header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      sessionInfo: ''
    });

    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        sessionInfo: sessionStorage.getItem('session_username')
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          background: '#FFF',
          paddingBottom: 20,
          zIndex: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 22,
        style: {
          textAlign: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "https://www.facebook.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_6__["facebook"],
        alt: "facebook",
        style: {
          width: 35,
          marginLeft: 15,
          marginTop: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "https://www.instagram.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_6__["instagram"],
        alt: "instagram",
        style: {
          width: 35,
          marginLeft: 15,
          marginTop: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "https://www.youtube.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_6__["youtube"],
        alt: "youtube",
        style: {
          width: 35,
          marginLeft: 15,
          marginTop: 10,
          marginRight: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          background: '#FFF',
          paddingBottom: 10,
          zIndex: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "flex",
        justify: "space-around",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 3,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_6__["menu_about"],
        alt: "about",
        style: {
          width: 140
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 3,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/customized",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_6__["menu_customized"],
        alt: "customized",
        style: {
          width: 140
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 3,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_6__["menu_tourprogram"],
        alt: "tourprogram",
        style: {
          width: 140
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 4,
        style: {
          textAlign: 'center',
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_6__["logo"],
        alt: "logo",
        style: {
          width: 250,
          position: 'absolute',
          top: -30,
          left: '50%',
          marginLeft: -125
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), this.props.selected === 'index' ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/guidepage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_6__["friend"],
        alt: "friend",
        style: {
          width: 100,
          position: 'absolute',
          top: 50,
          left: '50%',
          marginLeft: -50,
          zIndex: 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })) : ''), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 3,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/signin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_6__["menu_belocal"],
        alt: "belocal",
        style: {
          width: 140
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 3,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/community",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_6__["menu_community"],
        alt: "community",
        style: {
          width: 140
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 3,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, this.state.sessionInfo ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/mypage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_6__["menu_mypage"],
        alt: "login",
        style: {
          width: 140
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/signin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
        src: _images__WEBPACK_IMPORTED_MODULE_6__["menu_login"],
        alt: "login",
        style: {
          width: 140
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/***/ }),

/***/ "./pages/components/images.js":
/*!************************************!*\
  !*** ./pages/components/images.js ***!
  \************************************/
/*! exports provided: logo, menu_about, menu_customized, menu_tourprogram, menu_belocal, menu_community, menu_login, menu_mypage, local_friend, foreigner_friend, guide_d, first, second, third, facebook, instagram, youtube, googleicon, facebookicon, kakaotalkicon, instagramicon, facebookicon_1, korea, video, friend, tourprogram, ask_circle, map, empty_map, seoul, jeonju, daegu, gyeongju, busan, jejudo, aboutus_top, aboutus_making, aboutus_platform, aboutus_purpose, aboutus_arrow, bg_customized, ask_sign, bg_tour, divider, bar_seoul, bar_busan, bar_jeju, bar_gyeonju, bar_jeonju, bar_daegu, bar_others, tour_box, tour_more, bg_seoul, product_summary_image, bg_busan, bg_jeju, booking_top_banner, community_top_banner, createproduct_top_banner, tour_image_sample, success_register_product, product_images, googlemap_marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logo", function() { return logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu_about", function() { return menu_about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu_customized", function() { return menu_customized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu_tourprogram", function() { return menu_tourprogram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu_belocal", function() { return menu_belocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu_community", function() { return menu_community; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu_login", function() { return menu_login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu_mypage", function() { return menu_mypage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "local_friend", function() { return local_friend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foreigner_friend", function() { return foreigner_friend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guide_d", function() { return guide_d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "second", function() { return second; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "third", function() { return third; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebook", function() { return facebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instagram", function() { return instagram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "youtube", function() { return youtube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleicon", function() { return googleicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookicon", function() { return facebookicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kakaotalkicon", function() { return kakaotalkicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instagramicon", function() { return instagramicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookicon_1", function() { return facebookicon_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "korea", function() { return korea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "video", function() { return video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friend", function() { return friend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tourprogram", function() { return tourprogram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ask_circle", function() { return ask_circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty_map", function() { return empty_map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seoul", function() { return seoul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jeonju", function() { return jeonju; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daegu", function() { return daegu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gyeongju", function() { return gyeongju; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "busan", function() { return busan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jejudo", function() { return jejudo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutus_top", function() { return aboutus_top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutus_making", function() { return aboutus_making; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutus_platform", function() { return aboutus_platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutus_purpose", function() { return aboutus_purpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutus_arrow", function() { return aboutus_arrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bg_customized", function() { return bg_customized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ask_sign", function() { return ask_sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bg_tour", function() { return bg_tour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divider", function() { return divider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bar_seoul", function() { return bar_seoul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bar_busan", function() { return bar_busan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bar_jeju", function() { return bar_jeju; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bar_gyeonju", function() { return bar_gyeonju; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bar_jeonju", function() { return bar_jeonju; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bar_daegu", function() { return bar_daegu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bar_others", function() { return bar_others; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tour_box", function() { return tour_box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tour_more", function() { return tour_more; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bg_seoul", function() { return bg_seoul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "product_summary_image", function() { return product_summary_image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bg_busan", function() { return bg_busan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bg_jeju", function() { return bg_jeju; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booking_top_banner", function() { return booking_top_banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "community_top_banner", function() { return community_top_banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createproduct_top_banner", function() { return createproduct_top_banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tour_image_sample", function() { return tour_image_sample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success_register_product", function() { return success_register_product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "product_images", function() { return product_images; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googlemap_marker", function() { return googlemap_marker; });
//////////////////////////// common
// logo
var logo = '../static/image/logo.png'; // menu

var menu_about = '../static/image/menu-about.png';
var menu_customized = '../static/image/menu-customized.png';
var menu_tourprogram = '../static/image/menu-tourprogram.png';
var menu_belocal = '../static/image/menu-belocal.png';
var menu_community = '../static/image/menu-community.png';
var menu_login = '../static/image/menu-login.png';
var menu_mypage = '../static/image/menu-mypage.png'; //guide page

var local_friend = '../static/image/local.jpg';
var foreigner_friend = '../static/image/foreigner.png';
var guide_d = '../static/image/guide-b.png';
var first = '../static/image/first.png';
var second = '../static/image/second.png';
var third = '../static/image/third.png'; // social

var facebook = '../static/image/facebook.png';
var instagram = '../static/image/instagram.png';
var youtube = '../static/image/youtube.png'; // Signin

var googleicon = './static/image/social/google.png';
var facebookicon = './static/image/social/facebook.png';
var kakaotalkicon = './static/image/social/kakaotalk.png';
var instagramicon = './static/image/social/instagram.png';
var facebookicon_1 = './static/image/social/facebook1.png'; // Korea

var korea = '../static/image/korea.png'; //////////////////////////// pages
// index

var video = '../static/video/background.mp4';
var friend = '../static/image/friend.png';
var tourprogram = '../static/image/tour-program.png';
var ask_circle = '../static/image/ask-circle.png';
var map = '../static/image/map.png';
var empty_map = '../static/image/empty-map.png';
var seoul = '../static/image/city_icon/seoul.png';
var jeonju = '../static/image/city_icon/jeonju.png';
var daegu = '../static/image/city_icon/daegu.png';
var gyeongju = '../static/image/city_icon/gyeongju.png';
var busan = '../static/image/city_icon/busan.png';
var jejudo = '../static/image/city_icon/jejudo.png'; // About us

var aboutus_top = '../static/image/aboutus-top.png';
var aboutus_making = '../static/image/aboutus-making.png';
var aboutus_platform = '../static/image/aboutus-platform.png';
var aboutus_purpose = '../static/image/aboutus-purpose.png';
var aboutus_arrow = '../static/image/aboutus-arrow.png'; // customized

var bg_customized = '../static/image/bg-customized.jpg';
var ask_sign = '../static/image/ask-sign.png'; // tour

var bg_tour = '../static/image/bg-tour.jpg';
var divider = '../static/image/divider.png';
var bar_seoul = '../static/image/bar-seoul.png';
var bar_busan = '../static/image/bar-busan.png';
var bar_jeju = '../static/image/bar-jeju.png';
var bar_gyeonju = '../static/image/bar-gyeonju.png';
var bar_jeonju = '../static/image/bar-jeonju.png';
var bar_daegu = '../static/image/bar-daegu.png';
var bar_others = '../static/image/bar-others.jpg';
var tour_box = '../static/image/tour-box.png';
var tour_more = '../static/image/tour-more.png'; // city

var bg_seoul = '../static/image/bg-seoul.jpg';
var product_summary_image = '../static/image/product_summary_image.jpg'; // 

var bg_busan = '../static/image/bg-busan.jpg';
var bg_jeju = '../static/image/bg-jeju.jpg'; //booking

var booking_top_banner = '../static/image/booking_top_banner.jpg'; // Community

var community_top_banner = '../static/image/community.jpg'; // Createproduct

var createproduct_top_banner = '../static/image/booking_top_banner.jpg'; // TourImage

var tour_image_sample = '../static/image/product/1.jpg'; // Register product

var success_register_product = '../static/image/success_register_product.png'; // Product detail

var product_images = [{
  original: '../static/image/product/1.jpg'
}, {
  original: '../static/image/product/2.jpg'
}, {
  original: '../static/image/product/3.jpg'
}, {
  original: '../static/image/product/4.jpg'
}, {
  original: '../static/image/product/6.jpg'
}, {
  original: '../static/image/product/7.jpg'
}]; // Google Map marker

var googlemap_marker = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjYxcHgiIGhlaWdodD0iNjVweCIgdmlld0JveD0iMCAwIDYxIDY1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4wLjQgKDgwNTQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmljb25zIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iZmxhZzMxIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMi4wMDAwMDApIj4KICAgICAgICAgICAgPHBhdGggZD0iTTIyLjAwODkyOSw2Mi4wMjcxMDE3IEwwLjA0MjA3NTg5MjksMCBMOC40MzYyMTY3MiwwIEwyMy4zMDM1NzE4LDYyLjAyNzEwMTcgTDIyLjAwODkyOSw2Mi4wMjcxMDE3IFoiIGlkPSJTaGFwZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiM0OTkwRTIiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTU3LjcyNjQ0Miw0LjM0NjM5MTc1IEw5Ljk1MzU3ODQxLDAuMTI3ODM1MDUyIEwxNi44MTYxOTcsMzAuODg1NzE1OCBMNTcuOTg1MzcwNSwyMy43MjY5NTIyIEw0Mi4xNTE1LDE1LjM3OTA2NzkgTDU3LjcyNjQ0Miw0LjM0NjM5MTc1IFoiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSIjRkY1NzIyIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTdGFyLTEiIGZpbGw9IiNGRkZGRkYiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjE2NTE3OSwgMTQuNTA5Mjc4KSByb3RhdGUoLTguMDAwMDAwKSB0cmFuc2xhdGUoLTMwLjE2NTE3OSwgLTE0LjUwOTI3OCkgIiBwb2ludHM9IjMwLjE2NTE3ODYgMTcuNjA5Mjc4NCAyNi4yMDgxMjQzIDE5LjUyNTE4MzcgMjYuOTYzODU0NCAxNS40NjcyMzEgMjMuNzYyNTMwMiAxMi41OTMzNzMgMjguMTg2NjUxNCAxMi4wMDEzMjU3IDMwLjE2NTE3ODYgOC4zMDkyNzgzNSAzMi4xNDM3MDU3IDEyLjAwMTMyNTcgMzYuNTY3ODI2OSAxMi41OTMzNzMgMzMuMzY2NTAyNyAxNS40NjcyMzEgMzQuMTIyMjMyOSAxOS41MjUxODM3ICI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';

/***/ }),

/***/ "./pages/payment.js":
/*!**************************!*\
  !*** ./pages/payment.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "antd/lib/button/style/css");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style/css */ "antd/lib/input/style/css");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row/style/css */ "antd/lib/row/style/css");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col/style/css */ "antd/lib/col/style/css");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/date-picker/style/css */ "antd/lib/date-picker/style/css");
/* harmony import */ var antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/date-picker */ "antd/lib/date-picker");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/form/style/css */ "antd/lib/form/style/css");
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-paypal-express-checkout */ "react-paypal-express-checkout");
/* harmony import */ var react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Footer */ "./pages/components/Footer.js");
/* harmony import */ var _components_images__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/images */ "./pages/components/images.js");












var _jsxFileName = "D:\\Development\\todays-friend\\frontend\\todays-friend\\pages\\payment.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item;
var MonthPicker = antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_9___default.a.MonthPicker,
    RangePicker = antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_9___default.a.RangePicker,
    WeekPicker = antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_9___default.a.WeekPicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

var PaymentForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PaymentForm, _React$Component);

  function PaymentForm(props) {
    var _this;

    _classCallCheck(this, PaymentForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PaymentForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values); // axios.post( base_url + '/api/booking_summary', {values})
          // .then(function (response) {
          //     console.log('response:', response);
          // })
          // .catch(function (error) {
          //     console.log('error:', error);
          // });
        }
      });
    });

    return _this;
  }

  _createClass(PaymentForm, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 8
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 16
          }
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 24,
        style: {
          height: '20vw',
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
        src: _components_images__WEBPACK_IMPORTED_MODULE_17__["booking_top_banner"],
        alt: "booking_top_banner",
        style: {
          width: '100%',
          position: 'absolute',
          left: 0,
          bottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h1", {
        style: {
          textAlign: "center",
          marginTop: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Payment"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 12,
        style: {
          margin: "0 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        style: {
          textAlign: "center",
          fontWeight: 600
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "It's last procedure! If you want to enjoy the local life tour, you should pay this. Please fill out your payment information. You can experinece real local life with local friend!"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "summary-form",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "formBody",
        style: {
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: 10,
          padding: "30px 20px",
          width: 500,
          margin: "0 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Card Number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), getFieldDecorator('cardnumber', {
        rules: [{
          required: true,
          message: 'Please input card number!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Expairation of Date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), getFieldDecorator('expairDate', {
        rules: [{
          required: true,
          message: 'Please input expairation date!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(MonthPicker, {
        size: "large",
        onChange: onChange,
        placeholder: "Select Expairation Date",
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Security Code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), getFieldDecorator('secuCode', {
        rules: [{
          required: true,
          message: 'Please input security code!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "First Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), getFieldDecorator('firstname', {
        rules: [{
          required: true,
          message: 'Please input first name!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Last Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), getFieldDecorator('lastname', {
        rules: [{
          required: true,
          message: 'Please input last name!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "flex",
        style: {
          marginTop: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 12,
        style: {
          margin: "0 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        style: {
          textAlign: "center",
          fontWeight: 600
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "By confirming this reservation, you agree to the ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/policy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Terms & Legal, Cancel & Refund")), " policies."))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "flex",
        justify: "center",
        style: {
          marginTop: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        size: "large",
        htmlType: "submit",
        type: "primary",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Confirmation")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        size: "large",
        htmlType: "reset",
        type: "primary",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Cancel")))));
    }
  }]);

  return PaymentForm;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

var WrappedPaymentForm = antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.create()(PaymentForm);

var PaypalButton =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(PaypalButton, _React$Component2);

  function PaypalButton(props) {
    var _this2;

    _classCallCheck(this, PaypalButton);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(PaypalButton).call(this, props));
    _this2.state = {
      showPaypal: false
    };
    return _this2;
  }

  _createClass(PaypalButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window !== 'undefined') {
        this.setState({
          showPaypal: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var onSuccess = function onSuccess(payment) {
        // 1, 2, and ... Poof! You made it, everything's fine and dandy!
        console.log("Payment successful!", payment); // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
      };

      var onCancel = function onCancel(data) {
        // The user pressed "cancel" or closed the PayPal popup
        console.log('Payment cancelled!', data); // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
      };

      var onError = function onError(err) {
        // The main Paypal script could not be loaded or something blocked the script from loading
        console.log("Error!", err); // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
      };

      var env = 'sandbox'; // you can set this string to 'production'

      var currency = 'USD'; // you can set this string from your props or state  

      var total = 1; // this is the total amount (based on currency) to charge
      // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

      var client = {
        sandbox: 'AQXQ8tuz1pvbGAvvwVxIddulINB4ol35mkjX5FvwsEu5R_xc_r406-FVvv6Pl9niHFD7rzu5EtrDgIB5'
      };
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, this.state.showPaypal ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_14___default.a, {
        env: env,
        client: client,
        currency: currency,
        total: total,
        onError: onError,
        onSuccess: onSuccess,
        onCancel: onCancel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "undefined"));
    }
  }]);

  return PaypalButton;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

var _default =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(_default, _React$Component3);

  function _default(props) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_15__["Header"], {
        selsected: "payment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(WrappedPaymentForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "flex",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 4,
        style: {
          textAlign: "center",
          width: "100%",
          marginTop: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(PaypalButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_16__["Footer"], {
        selsected: "payment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);



/***/ }),

/***/ "./static/css/menu.css":
/*!*****************************!*\
  !*** ./static/css/menu.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/payment.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/payment.js */"./pages/payment.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style/css":
/*!********************************************!*\
  !*** external "antd/lib/button/style/css" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/col/style/css":
/*!*****************************************!*\
  !*** external "antd/lib/col/style/css" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style/css");

/***/ }),

/***/ "antd/lib/date-picker":
/*!***************************************!*\
  !*** external "antd/lib/date-picker" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ "antd/lib/date-picker/style/css":
/*!*************************************************!*\
  !*** external "antd/lib/date-picker/style/css" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker/style/css");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/form/style/css":
/*!******************************************!*\
  !*** external "antd/lib/form/style/css" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form/style/css");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/input/style/css":
/*!*******************************************!*\
  !*** external "antd/lib/input/style/css" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style/css");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/row/style/css":
/*!*****************************************!*\
  !*** external "antd/lib/row/style/css" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style/css");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-paypal-express-checkout":
/*!************************************************!*\
  !*** external "react-paypal-express-checkout" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-paypal-express-checkout");

/***/ })

/******/ });
//# sourceMappingURL=payment.js.map