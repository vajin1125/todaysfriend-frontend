webpackHotUpdate("static\\development\\pages\\newmulti.js",{

/***/ "./pages/newmulti.js":
/*!***************************!*\
  !*** ./pages/newmulti.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-day-picker */ "./node_modules/react-day-picker/DayPicker.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_css_mypicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/css/mypicker.css */ "./static/css/mypicker.css");
/* harmony import */ var _static_css_mypicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_css_mypicker_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Development\\todays-friend\\frontend\\todays-friend\\pages\\newmulti.js";

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






var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickTextarea", function () {
      _this.state.pickerClassName === 'myPickerHide' ? _this.setState({
        pickerClassName: 'myPickerShow'
      }) : _this.setState({
        pickerClassName: 'myPickerHide'
      });
    });

    _this.handleDayClick = _this.handleDayClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      selectedDays: [],
      textareaDays: [],
      pickerClassName: 'myPickerHide'
    };
    return _this;
  }

  _createClass(Example, [{
    key: "handleDayClick",
    value: function handleDayClick(day, _ref) {
      var selected = _ref.selected;
      var _this$state = this.state,
          selectedDays = _this$state.selectedDays,
          textareaDays = _this$state.textareaDays;

      if (selected) {
        var selectedIndex = selectedDays.findIndex(function (selectedDay) {
          return react_day_picker__WEBPACK_IMPORTED_MODULE_1__["DateUtils"].isSameDay(selectedDay, day);
        });
        selectedDays.splice(selectedIndex, 1);
        textareaDays.splice(selectedIndex, 1);
      } else {
        selectedDays.push(day);
        console.log(day.toISOString());
        var newday = day.toISOString().split('T')[0];
        textareaDays.push(newday);
      }

      this.setState({
        selectedDays: selectedDays,
        textareaDays: textareaDays
      });
      console.log(this.state.selectedDays);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        style: {
          width: 300
        },
        onClick: this.onClickTextarea,
        value: this.state.textareaDays,
        readOnly: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.state.pickerClassName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_day_picker__WEBPACK_IMPORTED_MODULE_1___default.a, {
        selectedDays: this.state.selectedDays,
        onDayClick: this.handleDayClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "hahaha"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_day_picker__WEBPACK_IMPORTED_MODULE_1___default.a, {
        initialMonth: new Date(2019, 0, 1),
        selectedDays: [new Date(2019, -1, 18), new Date(2019, -1, 19)],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/newmulti")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=newmulti.js.62700118dda707926815.hot-update.js.map