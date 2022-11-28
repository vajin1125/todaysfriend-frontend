webpackHotUpdate("static\\development\\pages\\newmulti.js",{

/***/ "./node_modules/react-day-picker/lib/src/addons/MomentLocaleUtils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-day-picker/lib/src/addons/MomentLocaleUtils.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDay = formatDay;
exports.formatMonthTitle = formatMonthTitle;
exports.formatWeekdayShort = formatWeekdayShort;
exports.formatWeekdayLong = formatWeekdayLong;
exports.getFirstDayOfWeek = getFirstDayOfWeek;
exports.getMonths = getMonths;
exports.formatDate = formatDate;
exports.parseDate = parseDate;

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatDay(day) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  return (0, _moment2.default)(day).locale(locale).format('ddd ll');
} /* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle */

function formatMonthTitle(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  return (0, _moment2.default)(date).locale(locale).format('MMMM YYYY');
}

function formatWeekdayShort(day) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  return (0, _moment2.default)().locale(locale)._locale.weekdaysMin()[day];
}

function formatWeekdayLong(day) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  return (0, _moment2.default)().locale(locale)._locale.weekdays()[day];
}

function getFirstDayOfWeek() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';

  var localeData = _moment2.default.localeData(locale);
  return localeData.firstDayOfWeek();
}

function getMonths() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';

  var months = [];
  var i = 0;
  while (i < 12) {
    months.push((0, _moment2.default)().locale(locale).month(i).format('MMMM'));
    i += 1;
  }
  return months;
}

function formatDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'L';
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';

  return (0, _moment2.default)(date).locale(locale).format(Array.isArray(format) ? format[0] : format);
}

function parseDate(str) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'L';
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';

  var m = (0, _moment2.default)(str, format, locale, true);
  if (m.isValid()) {
    return m.toDate();
  }
  return undefined;
}

exports.default = {
  formatDay: formatDay,
  formatMonthTitle: formatMonthTitle,
  formatWeekdayShort: formatWeekdayShort,
  formatWeekdayLong: formatWeekdayLong,
  getFirstDayOfWeek: getFirstDayOfWeek,
  getMonths: getMonths,
  formatDate: formatDate,
  parseDate: parseDate
};
//# sourceMappingURL=MomentLocaleUtils.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/moment.js":
/*!*************************************************!*\
  !*** ./node_modules/react-day-picker/moment.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env node */

module.exports = __webpack_require__(/*! ./lib/src/addons/MomentLocaleUtils */ "./node_modules/react-day-picker/lib/src/addons/MomentLocaleUtils.js");
module.exports.localeUtils = __webpack_require__(/*! ./lib/src/addons/MomentLocaleUtils */ "./node_modules/react-day-picker/lib/src/addons/MomentLocaleUtils.js");


/***/ }),

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
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-day-picker/moment */ "./node_modules/react-day-picker/moment.js");
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_3__);
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






var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.handleDayClick = _this.handleDayClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      selectedDays: []
    };
    return _this;
  }

  _createClass(Example, [{
    key: "handleDayClick",
    value: function handleDayClick(day, _ref) {
      var selected = _ref.selected;
      var selectedDays = this.state.selectedDays;

      if (selected) {
        var selectedIndex = selectedDays.findIndex(function (selectedDay) {
          return react_day_picker__WEBPACK_IMPORTED_MODULE_1__["DateUtils"].isSameDay(selectedDay, day);
        });
        selectedDays.splice(selectedIndex, 1);
      } else {
        console.log(day.toISOString());
        selectedDays.push(day);
      }

      this.setState({
        selectedDays: selectedDays
      });
      console.log(this.state.selectedDays);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        style: {
          width: 300
        },
        onClick: this.onClickTextarea,
        value: this.state.selectedDays,
        readOnly: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_day_picker__WEBPACK_IMPORTED_MODULE_1___default.a, {
        format: "M/D/YYYY",
        formatDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_2__["formatDate"],
        parseDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_2__["parseDate"],
        selectedDays: this.state.selectedDays,
        onDayClick: this.handleDayClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "hahaha"));
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
//# sourceMappingURL=newmulti.js.6d1f260980fa1a7f8b2f.hot-update.js.map