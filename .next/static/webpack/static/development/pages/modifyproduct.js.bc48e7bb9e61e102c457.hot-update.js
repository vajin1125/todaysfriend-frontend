webpackHotUpdate("static\\development\\pages\\modifyproduct.js",{

/***/ "./pages/components/Newgooglemap.js":
/*!******************************************!*\
  !*** ./pages/components/Newgooglemap.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Newgooglemap; });
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_geosuggest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-geosuggest */ "./node_modules/react-geosuggest/module/Geosuggest.esm.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_css_newgooglemap_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../static/css/newgooglemap.css */ "./static/css/newgooglemap.css");
/* harmony import */ var _static_css_newgooglemap_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_css_newgooglemap_css__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "D:\\Development\\todays-friend\\frontend\\todays-friend\\pages\\components\\Newgooglemap.js";


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




var MapWithAMarker = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_8__["withGoogleMap"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMap"], {
    defaultZoom: 11,
    center: props.defaultCenter,
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_8__["Marker"], {
    position: props.defaultCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
});

var Newgooglemap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Newgooglemap, _React$Component);

  function Newgooglemap(props) {
    var _this;

    _classCallCheck(this, Newgooglemap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Newgooglemap).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      if (typeof window !== "undefined") {
        _this.setState({
          mount: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSuggestSelect", function (suggest) {
      _this.setState({
        location: {
          lat: suggest.location.lat,
          lng: suggest.location.lng
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickMap", function (e) {
      var lat = e.latLng.lat();
      var lng = e.latLng.lng();

      _this.setState({
        location: {
          lat: lat,
          lng: lng
        }
      });

      _this.props.getMeetingPoint(_this.Latlngvalue.props.value);
    });

    _this.state = {
      mount: false,
      location: {
        lat: 37.566535,
        lng: 126.97796919999996
      }
    };
    return _this;
  }

  _createClass(Newgooglemap, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      this.props.meetingpointJson.lat != undefined ? this.setState({
        // location: {
        //     lat: this.props.lat,
        //     lng: this.props.lng
        // }
        location: this.props.meetingpointJson
      }) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, this.state.mount ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "flex",
        justify: "space-between",
        style: {
          marginBottom: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_geosuggest__WEBPACK_IMPORTED_MODULE_7__["default"], {
        placeholder: "Please type meeting point",
        onSuggestSelect: this.onSuggestSelect,
        location: new google.maps.LatLng(53.558572, 9.9278215),
        radius: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 11,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        ref: function ref(_ref) {
          return _this2.Latlngvalue = _ref;
        },
        readOnly: true,
        size: "large",
        value: this.state.location.lat + "," + this.state.location.lng,
        style: {
          marginTop: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }))) : null, this.state.location && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MapWithAMarker, {
        containerElement: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            height: "400px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }),
        mapElement: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            height: "100%"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }),
        defaultCenter: this.state.location,
        onClick: this.onClickMap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }));
    }
  }]);

  return Newgooglemap;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components\\Newgooglemap")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=modifyproduct.js.bc48e7bb9e61e102c457.hot-update.js.map