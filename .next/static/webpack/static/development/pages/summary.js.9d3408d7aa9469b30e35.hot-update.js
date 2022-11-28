webpackHotUpdate("static\\development\\pages\\summary.js",{

/***/ "./pages/summary.js":
/*!**************************!*\
  !*** ./pages/summary.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style/css */ "./node_modules/antd/lib/spin/style/css.js");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input-number/style/css */ "./node_modules/antd/lib/input-number/style/css.js");
/* harmony import */ var antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/antd/lib/input-number/index.js");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/date-picker/style/css */ "./node_modules/antd/lib/date-picker/style/css.js");
/* harmony import */ var antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/date-picker */ "./node_modules/antd/lib/date-picker/index.js");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/antd/lib/select/style/css.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/form/style/css */ "./node_modules/antd/lib/form/style/css.js");
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_base_url__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/base_url */ "./pages/components/base_url.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/Footer */ "./pages/components/Footer.js");
/* harmony import */ var _components_images__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/images */ "./pages/components/images.js");
/* harmony import */ var _components_language_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/language_list */ "./pages/components/language_list.js");
/* harmony import */ var _static_css_summary_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../static/css/summary.css */ "./static/css/summary.css");
/* harmony import */ var _static_css_summary_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_static_css_summary_css__WEBPACK_IMPORTED_MODULE_28__);


















var _jsxFileName = "D:\\Development\\todays-friend\\frontend\\todays-friend\\pages\\summary.js";


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











var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_17___default.a.Item;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default.a.Option;
var languageOption = _components_language_list__WEBPACK_IMPORTED_MODULE_27__["language_list"].map(function (language) {
  return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
    key: language.name.toString(),
    value: language.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, language.name);
});

function langChange(value) {
  console.log("selected ".concat(value));
}

function inputNumberonChange(value) {
  console.log('changed', value);
}

var BookingSummaryForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BookingSummaryForm, _React$Component);

  function BookingSummaryForm(props) {
    var _this;

    _classCallCheck(this, BookingSummaryForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BookingSummaryForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.setState({
        booking_tourname: sessionStorage.getItem('booking_tourname'),
        booking_tourdate: sessionStorage.getItem('booking_tourdate'),
        booking_starttime: sessionStorage.getItem('booking_tourstarttime'),
        booking_language: sessionStorage.getItem('booking_language'),
        booking_numberofpeople: sessionStorage.getItem('booking_numberofpeople'),
        booking_bookername: sessionStorage.getItem('booking_bookername'),
        booking_email: sessionStorage.getItem('booking_email'),
        booking_price: sessionStorage.getItem('booking_price')
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "datepickeronChange", function (date, dateString) {
      console.log(date, dateString);

      _this.setState({
        tourdate: dateString
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "timepickeronChange", function (time, timeString) {
      console.log(time, timeString);

      _this.setState({
        starttime: timeString
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
          var tourdate = _this.state.tourdate;
          var starttime = _this.state.starttime;
          console.log('Tour Date:', tourdate);
          console.log('Start Time:', starttime);
          axios__WEBPACK_IMPORTED_MODULE_21___default.a.post(_components_base_url__WEBPACK_IMPORTED_MODULE_22__["base_url"] + '/api/booking_summary', {
            values: values,
            tourdate: tourdate,
            starttime: starttime
          }).then(function (response) {
            console.log('response:', response);

            if (response.data['type'] === 'success') {
              next_router__WEBPACK_IMPORTED_MODULE_23___default.a.push('/payment');
            } else {
              this.setState({
                loading: false
              });
              Modal.error({
                title: 'Your booking has been failed!',
                content: 'Please try again !'
              });
            }
          }).catch(function (error) {
            console.log('error:', error);
          });
        }
      });
    });

    _this.state = {
      tourdate: '',
      starttime: '',
      loading: false,
      booking_tourname: '',
      booking_tourdate: '',
      booking_starttime: '',
      booking_language: [],
      booking_numberofpeople: '',
      booking_bookername: '',
      booking_email: '',
      booking_price: ''
    };
    return _this;
  }

  _createClass(BookingSummaryForm, [{
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
      return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 24,
        style: {
          height: '20vw',
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("img", {
        src: _components_images__WEBPACK_IMPORTED_MODULE_26__["booking_top_banner"],
        alt: "booking_top_banner",
        style: {
          width: '100%',
          position: 'absolute',
          left: 0,
          bottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("h1", {
        style: {
          textAlign: "center",
          marginTop: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Booking Summary"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 12,
        style: {
          margin: "0 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("p", {
        style: {
          textAlign: "center",
          fontWeight: 600
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Thank you for booking! A confirmation email has been sent to you email. Please check out the email. I hope you to have a good time with local friend!"))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_17___default.a, {
        className: "summary-form",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
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
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Tour Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), getFieldDecorator('tourname', {
        initialValue: this.state.booking_tourname,
        rules: [{
          required: true,
          message: 'Please input tour name!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
        size: "large",
        placeholder: "Tour Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Date of Tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), getFieldDecorator('tourdate', {
        initialValue: moment__WEBPACK_IMPORTED_MODULE_20___default()(this.state.booking_tourdate),
        rules: [{
          required: true,
          message: 'Please input date of tour'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_7___default.a, {
        size: "large",
        style: {
          width: "100%"
        },
        onChange: this.datepickeronChange,
        placeholder: "Date of tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Start time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), getFieldDecorator('starttime', {
        initialValue: this.state.booking_starttime,
        rules: [{
          required: true,
          message: 'Please input start time for your tour!'
        }]
      })( // <TimePicker size="large" style={{width:"100%"}} onChange={this.timepickeronChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} placeholder="Start time"/>
      react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default.a, {
        size: "large",
        onChange: this.onChangeMeetingTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "09:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "09:00"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "09:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "09:30"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "10:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "10:00"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "10:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "10:30"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "11:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "11:00"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "11:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "11:30"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "12:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "12:00"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "12:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "12:30"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "13:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "13:00"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "13:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "13:30"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "14:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "14:00"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "14:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "14:30"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "15:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "15:00"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "15:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "15:30"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "16:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "16:00"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "16:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "16:30"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "17:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "17:00"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "18:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "18:30"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "19:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "19:00"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "19:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "19:30"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
        value: "20:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "20:00")))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Language",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), getFieldDecorator('language', {
        initialValue: this.state.booking_language,
        rules: [{
          required: true,
          message: 'Please input your language!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default.a, {
        size: "large",
        mode: "multiple",
        onChange: langChange,
        placeholder: "Select your languages",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, languageOption))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: " Number of friend ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }), getFieldDecorator('numberOfPeople', {
        initialValue: this.state.booking_numberofpeople,
        rules: [{
          required: true,
          message: 'Please input number of people!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5___default.a, {
        size: "large",
        style: {
          width: "100%"
        },
        min: 1,
        max: 100000,
        onChange: inputNumberonChange,
        placeholder: "Number of people (total)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }), getFieldDecorator('bookername', {
        initialValue: this.state.booking_bookername,
        rules: [{
          required: true,
          message: 'Please input booker name!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
        size: "large",
        placeholder: "Booker Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }), getFieldDecorator('email', {
        initialValue: this.state.booking_email,
        rules: [{
          required: true,
          message: 'Please input your email!'
        }, {
          type: 'email',
          message: 'This input is not valid!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
        size: "large",
        placeholder: "Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }), getFieldDecorator('price', {
        initialValue: this.state.booking_price,
        rules: [{
          required: true,
          message: 'Please input price!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
        size: "large",
        placeholder: "Price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "flex",
        justify: "center",
        style: {
          marginTop: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
        spinning: this.state.loading,
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        size: "large",
        htmlType: "submit",
        type: "primary",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, "Confirm"))))));
    }
  }]);

  return BookingSummaryForm;
}(react__WEBPACK_IMPORTED_MODULE_18___default.a.Component);

var WrappedBookingSummaryForm = antd_lib_form__WEBPACK_IMPORTED_MODULE_17___default.a.create()(BookingSummaryForm);

var _default =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(_default, _React$Component2);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_24__["Header"], {
        selected: "summary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(WrappedBookingSummaryForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_25__["Footer"], {
        selected: "summary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_18___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/summary")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=summary.js.9d3408d7aa9469b30e35.hot-update.js.map