webpackHotUpdate("static\\development\\pages\\city.js",{

/***/ "./pages/city.js":
/*!***********************!*\
  !*** ./pages/city.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/spin/style/css */ "./node_modules/antd/lib/spin/style/css.js");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/antd/lib/select/style/css.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/date-picker/style/css */ "./node_modules/antd/lib/date-picker/style/css.js");
/* harmony import */ var antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/date-picker */ "./node_modules/antd/lib/date-picker/index.js");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/es/YouTube.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Footer */ "./pages/components/Footer.js");
/* harmony import */ var _components_images__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/images */ "./pages/components/images.js");
/* harmony import */ var _components_language_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/language_list */ "./pages/components/language_list.js");
/* harmony import */ var _components_base_url__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/base_url */ "./pages/components/base_url.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);












var _jsxFileName = "D:\\Development\\todays-friend\\frontend\\todays-friend\\pages\\city.js";


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










var RangePicker = antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_11___default.a.RangePicker;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a.Option;
var languageOption = _components_language_list__WEBPACK_IMPORTED_MODULE_19__["language_list"].map(function (language) {
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Option, {
    key: language.name.toString(),
    value: language.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, language.name);
}); // Viedo player

var opts = {
  height: '240',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      var surl = window.location.href;
      var spl_url = surl.split("=");
      var cityname = spl_url[1];
      document.title = cityname + "-Todays Friend";

      _this.setState({
        loading: true
      });

      _this.setState({
        cityBar: "bar_" + cityname
      });

      axios__WEBPACK_IMPORTED_MODULE_14___default()({
        method: 'post',
        url: _components_base_url__WEBPACK_IMPORTED_MODULE_20__["base_url"] + "/api/city_products",
        data: {
          cityname: cityname
        }
      }).then(function (response) {
        console.log(response);

        _this.setState({
          productsData: response.data[0],
          productsImgData: response.data[1],
          loading: false
        });

        var mergeArray = _this.state.productsImgData.map(function (x) {
          return Object.assign(x, _this.state.productsData.find(function (y) {
            return y.pdu_ustr == x.pdu_ustr;
          }));
        });

        _this.setState({
          cityArray: mergeArray
        });
      }).catch(function (error) {
        console.log(error);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cityBarGen", function () {
      if (_this.state.cityBar != '') {
        var bar = _this.state.cityBar;
        if (bar === 'bar_seoul') return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
          src: _components_images__WEBPACK_IMPORTED_MODULE_18__["bar_seoul"],
          alt: _this.state.cityBar,
          style: {
            width: '90%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        });
        if (bar === 'bar_busan') return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
          src: _components_images__WEBPACK_IMPORTED_MODULE_18__["bar_busan"],
          alt: _this.state.cityBar,
          style: {
            width: '90%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        });
        if (bar === 'bar_jeju') return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
          src: _components_images__WEBPACK_IMPORTED_MODULE_18__["bar_jeju"],
          alt: _this.state.cityBar,
          style: {
            width: '90%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        });
        if (bar === 'bar_gyeonju') return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
          src: _components_images__WEBPACK_IMPORTED_MODULE_18__["bar_gyeonju"],
          alt: _this.state.cityBar,
          style: {
            width: '90%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        });
        if (bar === 'bar_jeonju') return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
          src: _components_images__WEBPACK_IMPORTED_MODULE_18__["bar_jeonju"],
          alt: _this.state.cityBar,
          style: {
            width: '90%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        });
        if (bar === 'bar_daegu') return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
          src: _components_images__WEBPACK_IMPORTED_MODULE_18__["bar_daegu"],
          alt: _this.state.cityBar,
          style: {
            width: '90%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        });
        if (bar === 'bar_others') return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
          src: _components_images__WEBPACK_IMPORTED_MODULE_18__["bar_others"],
          alt: _this.state.cityBar,
          style: {
            width: '90%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeTime", function (value) {
      console.log("selected Time ".concat(value));

      _this.setState({
        selectTime: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "langChange", function (value) {
      console.log("selected ".concat(value));

      _this.setState({
        language: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeDate", function (date, dateString) {
      console.log(date, dateString);

      _this.setState({
        fromDate: dateString[0],
        toDate: dateString[1]
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlurTime", function (value) {
      console.log("selectedDate", _this.state.selectTime);
    });

    _this.state = {
      filterdata: [],
      productsData: [],
      productsImgData: [],
      cityArray: [],
      cityBar: '',
      loading: false,
      fromDate: '',
      toDate: '',
      selectTime: '',
      language: []
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      console.log("Date", this.state.fromDate, this.state.toDate);
      console.log("Time", this.state.selectTime);
      console.log("Language", this.state.language);
      var cityArray = this.state.cityArray;
      var productCard = cityArray.map(function (product) {
        var imageLink = _components_base_url__WEBPACK_IMPORTED_MODULE_20__["base_url"] + "/" + product.pdu_img_url + "/" + product.pdu_img_name;
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          href: "/product_detail?id=" + product.id,
          key: product.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          style: {
            width: "95%",
            height: 200,
            border: "1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: 30,
            float: "right",
            marginBottom: 20
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
          span: 10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "productImage",
          style: {
            width: "100%",
            height: 200
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
          src: imageLink,
          alt: "product image",
          style: {
            width: "100%",
            height: 198,
            borderRadius: "20px 0 0 20px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
          span: 14,
          style: {
            textAlign: "justify",
            padding: 10
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, product.pdu_name), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "flex",
          justify: "space-between",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
          span: 10,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, product.pdu_type)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
          span: 10,
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          style: {
            width: 100,
            backgroundColor: "#0498c7",
            borderRadius: '20px 0 0 20px',
            textAlign: 'center',
            padding: '3px 10px',
            fontSize: 12,
            position: 'absolute',
            top: -20,
            right: -10
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
          style: {
            color: "#fff"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, "\u20A9   ", product.pdu_price)))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "flex",
          justify: "space-after",
          style: {
            height: 60
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          style: {
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineClamp: 3
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, product.pdu_brief_description)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "clock-circle",
          theme: "twoTone",
          twoToneColor: "#eb2f96",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, "  ", product.pdu_duration)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "smile",
          theme: "twoTone",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, "  ", product.pdu_price_include))))));
      });
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_16__["Header"], {
        selected: "city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 24,
        style: {
          height: '20vw',
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
        src: _components_images__WEBPACK_IMPORTED_MODULE_18__["booking_top_banner"],
        alt: "booking_top_banner",
        style: {
          width: '100%',
          position: 'absolute',
          left: 0,
          bottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
        src: _components_images__WEBPACK_IMPORTED_MODULE_18__["korea"],
        alt: "korea",
        style: {
          width: 200,
          position: 'absolute',
          left: '50%',
          bottom: -80,
          marginLeft: -100,
          zIndex: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          background: '#FFF',
          textAlign: 'center',
          paddingTop: 80
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
        src: _components_images__WEBPACK_IMPORTED_MODULE_18__["divider"],
        alt: "divider",
        style: {
          width: 630
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          width: 900,
          margin: '0 auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          marginTop: 20,
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, this.cityBarGen()), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          marginTop: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(RangePicker, {
        onChange: this.onChangeDate,
        style: {},
        placeholder: ['Day', 'Day'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
        placeholder: "Time",
        style: {
          width: "100%"
        },
        onChange: this.handleChangeTime,
        onBlur: this.onBlurTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Option, {
        value: "before12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "Before 12"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Option, {
        value: "12-17",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "12 ~ 17"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Option, {
        value: "after17",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "After 17"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
        mode: "multiple",
        onChange: this.langChange,
        placeholder: "Languages",
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, languageOption)))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_7___default.a, {
        spinning: this.state.loading,
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          width: "60%",
          margin: '0 auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "flex",
        justify: "center",
        style: {
          marginTop: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_youtube__WEBPACK_IMPORTED_MODULE_15__["default"], {
        videoId: "4pSzhZ76GdM",
        opts: opts // onReady={this._onReady}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        style: {
          textAlign: 'left',
          fontSize: 16,
          color: '#0498c7'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "As the biggest city, Korea's past, present and future coexist. You can do everything In the capital city.")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, productCard))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_17__["Footer"], {
        selected: "city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/city")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=city.js.4e8ab579a0a392021080.hot-update.js.map