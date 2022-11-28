webpackHotUpdate("static\\development\\pages\\booking.js",{

/***/ "./pages/booking.js":
/*!**************************!*\
  !*** ./pages/booking.js ***!
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
/* harmony import */ var antd_lib_auto_complete_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/auto-complete/style/css */ "./node_modules/antd/lib/auto-complete/style/css.js");
/* harmony import */ var antd_lib_auto_complete_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/auto-complete */ "./node_modules/antd/lib/auto-complete/index.js");
/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/modal/style/css */ "./node_modules/antd/lib/modal/style/css.js");
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/antd/lib/select/style/css.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd/lib/form/style/css */ "./node_modules/antd/lib/form/style/css.js");
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_base_url__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/base_url */ "./pages/components/base_url.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/Footer */ "./pages/components/Footer.js");
/* harmony import */ var _components_images__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/images */ "./pages/components/images.js");
/* harmony import */ var _components_language_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/language_list */ "./pages/components/language_list.js");
/* harmony import */ var _components_country_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/country_list */ "./pages/components/country_list.js");






















var _jsxFileName = "D:\\Development\\todays-friend\\frontend\\todays-friend\\pages\\booking.js";


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










var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_21___default.a.Item;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a.Option;
var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a.TextArea;
var countryOption = _components_country_list__WEBPACK_IMPORTED_MODULE_31__["country_list"].map(function (country) {
  return react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
    key: country.toString(),
    value: country,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, country);
});
var languageOption = _components_language_list__WEBPACK_IMPORTED_MODULE_30__["language_list"].map(function (language) {
  return react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
    key: language.name.toString(),
    value: language.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, language.name);
});

function agesChange(value) {
  console.log("selected ".concat(value));
}

function nationalityChange(value) {
  console.log("selected ".concat(value));
}

function genderChange(value) {
  console.log("selected ".concat(value));
}

function langChange(value) {
  console.log("selected ".concat(value));
} // inputNumber


function inputNumberonChange(value) {
  console.log('changed', value);
}

var BookingForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BookingForm, _React$Component);

  function BookingForm(props) {
    var _this;

    _classCallCheck(this, BookingForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BookingForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "autocompleteCountry", function (value) {
      if (value == '') _this.setState({
        filterdata: []
      });else _this.setState({
        filterdata: _components_country_list__WEBPACK_IMPORTED_MODULE_31__["country_list"].filter(function (s) {
          return s.toLowerCase().substring(0, value.length) === value.toLowerCase();
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleConfirmEmailBlur", function (e) {
      var value = e.target.value;

      _this.setState({
        confirmDirty: _this.state.confirmDirty || !!value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validateToNextEmail", function (rule, value, callback) {
      var form = _this.props.form;

      if (value && _this.state.confirmDirty) {
        form.validateFields(['emailConfirm'], {
          force: true
        });
      }

      callback();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "compareToFirstEmail", function (rule, value, callback) {
      var form = _this.props.form;

      if (value && value !== form.getFieldValue('email')) {
        callback('Two email that you enter is inconsistent!');
      } else {
        callback();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "datepickeronChange", function (date, dateString) {
      console.log(date, dateString);

      _this.setState({
        bookingdate: dateString
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeMainSNS", function (value) {
      console.log(value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          _this.setState({
            loading: true
          });

          console.log('Received values of form: ', values);
          var bookingdate = _this.state.bookingdate;
          console.log('Booking Date:', bookingdate);
          axios__WEBPACK_IMPORTED_MODULE_24___default.a.post(_components_base_url__WEBPACK_IMPORTED_MODULE_26__["base_url"] + '/api/booking_register', {
            values: values,
            bookingdate: bookingdate
          }).then(function (response) {
            console.log('response:', response);

            if (response.data['type'] === 'success') {
              sessionStorage.setItem('booking_tourdate', bookingdate);
              sessionStorage.setItem('booking_language', values.language);
              sessionStorage.setItem('booking_numberofpeople', values.numberOfPeople);
              sessionStorage.setItem('booking_bookername', values.firstname + ' ' + values.lastname);
              sessionStorage.setItem('booking_email', values.email);
              next_router__WEBPACK_IMPORTED_MODULE_25___default.a.push('/summary');
            } else {
              this.setState({
                loading: false
              });

              antd_lib_modal__WEBPACK_IMPORTED_MODULE_15___default.a.error({
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
      confirmDirty: false,
      filterdata: [],
      bookingdate: '',
      loading: false
    };
    return _this;
  }

  _createClass(BookingForm, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 24,
        style: {
          height: '20vw',
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("img", {
        src: _components_images__WEBPACK_IMPORTED_MODULE_29__["booking_top_banner"],
        alt: "booking_top_banner",
        style: {
          width: '100%',
          position: 'absolute',
          left: 0,
          bottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("h1", {
        style: {
          textAlign: "center",
          marginTop: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Booking"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 12,
        style: {
          margin: "0 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("p", {
        style: {
          textAlign: "center",
          fontWeight: 600
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "We need brief information to confirm your reservation. We help locals who are prepareing to show you a treal local trip make more efficient arrangements and guidance. 'SNS ID' is not a mandatory entry. We use that in order to contact you immediately if there is any change in the circumstances of the tour that is unavoidable."))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_21___default.a, {
        className: "booking-form",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
        style: {
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: 10,
          padding: "30px 20px",
          width: 800,
          margin: "0 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "flex",
        justify: "space-around",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "First Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, getFieldDecorator('firstname', {
        rules: [{
          required: true,
          message: 'Please input your first name!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a, {
        size: "large",
        placeholder: "First Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "Last Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, getFieldDecorator('lastname', {
        rules: [{
          required: true,
          message: 'Please input your last name!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a, {
        size: "large",
        placeholder: "Last Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "flex",
        justify: "space-around",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "Age",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, getFieldDecorator('agerange', {
        rules: [{
          required: true,
          message: 'Please select your age range!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "large",
        onChange: agesChange,
        placeholder: "Select your age ranges",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "10s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "10s"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "20s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "20s"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "30s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "30s"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "40s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "40s"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "50s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "50s"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "60s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "60s"))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "Nationality",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, getFieldDecorator('nationality', {
        rules: [{
          required: true,
          message: 'Please input your nationality!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_9___default.a, {
        dataSource: this.state.filterdata,
        style: {
          width: "100%"
        },
        size: "large" // onSelect={onSelect}
        ,
        onSearch: this.autocompleteCountry,
        mode: "multiple",
        placeholder: "Please enter your nationality",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "flex",
        justify: "space-around",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "Gender",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, getFieldDecorator('gender', {
        rules: [{
          required: true,
          message: 'Please select your gender!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "large",
        onChange: genderChange,
        placeholder: "Select your gender",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "man",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "Man"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "woman",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Woman"))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "Language",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, getFieldDecorator('language', {
        rules: [{
          required: true,
          message: 'Please select your languages!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "large",
        mode: "multiple",
        onChange: langChange,
        placeholder: "Select your languages",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, languageOption))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "flex",
        justify: "space-around",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, getFieldDecorator('email', {
        rules: [{
          required: true,
          message: 'Please input your Email!'
        }, {
          type: 'email',
          message: 'The input is not valid!'
        }, {
          validator: this.validateToNextEmail
        }]
      })(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a, {
        size: "large",
        placeholder: "Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "Confirmed Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, getFieldDecorator('emailConfirm', {
        rules: [{
          type: 'email',
          message: 'The input is not valid!'
        }, {
          required: true,
          message: 'Please confirm your email!'
        }, {
          validator: this.compareToFirstEmail
        }]
      })(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a, {
        size: "large",
        placeholder: "Email confirmation",
        onBlur: this.handleConfirmEmailBlur,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "flex",
        justify: "space-around",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "Date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, getFieldDecorator('bookingDate', {
        rules: [{
          required: true,
          message: 'Please select booking date!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_7___default.a, {
        size: "large",
        style: {
          width: "100%"
        },
        onChange: this.datepickeronChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "Cell Number (Including country number)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, getFieldDecorator('phone', {
        rules: [{
          required: true,
          message: 'Please input your cell number!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a, {
        size: "large",
        placeholder: "Cell Number (Including country number)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "flex",
        justify: "space-around",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "Mainly used SNS",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, getFieldDecorator('mainSNS', {})(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_19___default.a, {
        size: "large",
        onChange: this.onChangeMainSNS,
        placeholder: "Select your mainly use SNS Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "Twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "Twitter"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "Facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, "Facebook"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "Instagram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, "Instagram"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "Whatapp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "Whatapp"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(Option, {
        value: "Snapchat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, "Snapchat"))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "SNS ID",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, getFieldDecorator('snsId', {})(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_17___default.a, {
        size: "large",
        placeholder: "SNS ID",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "flex",
        justify: "space-around",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "Number of People",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, getFieldDecorator('numberOfPeople', {
        rules: [{
          required: true,
          message: 'Please input number of people!'
        }, {
          type: 'number',
          message: 'Invalided input!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5___default.a, {
        size: "large",
        style: {
          width: "100%"
        },
        min: 1,
        max: 100000,
        onChange: inputNumberonChange,
        placeholder: "Number of people",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(FormItem, {
        label: "Things of Demand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, getFieldDecorator('note', {})(react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(TextArea, {
        placeholder: "Things to demand",
        autosize: {
          minRows: 3,
          maxRows: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
        type: "flex",
        justify: "center",
        style: {
          marginTop: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
        span: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
        spinning: this.state.loading,
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        htmlType: "submit",
        size: "large",
        type: "primary",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "Confirm"))))));
    }
  }]);

  return BookingForm;
}(react__WEBPACK_IMPORTED_MODULE_22___default.a.Component);

var WrappedBookingForm = antd_lib_form__WEBPACK_IMPORTED_MODULE_21___default.a.create()(BookingForm);

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
      return react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_27__["Header"], {
        selected: "booking",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(WrappedBookingForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_28__["Footer"], {
        selected: "booking",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_22___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/booking")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=booking.js.ea44452169a13a297674.hot-update.js.map