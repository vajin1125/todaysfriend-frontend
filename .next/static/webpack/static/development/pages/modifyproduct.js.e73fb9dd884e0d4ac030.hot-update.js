webpackHotUpdate("static\\development\\pages\\modifyproduct.js",{

/***/ "./pages/modifyproduct.js":
/*!********************************!*\
  !*** ./pages/modifyproduct.js ***!
  \********************************/
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
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/modal/style/css */ "./node_modules/antd/lib/modal/style/css.js");
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/date-picker/style/css */ "./node_modules/antd/lib/date-picker/style/css.js");
/* harmony import */ var antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/date-picker */ "./node_modules/antd/lib/date-picker/index.js");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/antd/lib/select/style/css.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/form/style/css */ "./node_modules/antd/lib/form/style/css.js");
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_base_url__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/base_url */ "./pages/components/base_url.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/Footer */ "./pages/components/Footer.js");
/* harmony import */ var _components_ModifyTourImage__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/ModifyTourImage */ "./pages/components/ModifyTourImage.js");
/* harmony import */ var _components_Newgooglemap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/Newgooglemap */ "./pages/components/Newgooglemap.js");
/* harmony import */ var _components_Googlemap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/Googlemap */ "./pages/components/Googlemap.js");
/* harmony import */ var _components_images__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/images */ "./pages/components/images.js");
/* harmony import */ var _components_language_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/language_list */ "./pages/components/language_list.js");
/* harmony import */ var _static_css_createproduct_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../static/css/createproduct.css */ "./static/css/createproduct.css");
/* harmony import */ var _static_css_createproduct_css__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_static_css_createproduct_css__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-day-picker */ "./node_modules/react-day-picker/DayPicker.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _static_css_mypicker_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../static/css/mypicker.css */ "./static/css/mypicker.css");
/* harmony import */ var _static_css_mypicker_css__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_static_css_mypicker_css__WEBPACK_IMPORTED_MODULE_36__);




















var _jsxFileName = "D:\\Development\\todays-friend\\frontend\\todays-friend\\pages\\modifyproduct.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_19___default.a.Item;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default.a.Option;
var RangePicker = antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_15___default.a.RangePicker;
var dateFormat = 'YYYY-MM-DD';
var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default.a.TextArea;
var for_modify_id;
var languageOption = _components_language_list__WEBPACK_IMPORTED_MODULE_32__["language_list"].map(function (language) {
  return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
    key: language.name.toString(),
    value: language.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, language.name);
}); // Type of tour Select

function tourTypeChange(value) {
  console.log("selected ".concat(value));
} // city select


function cityChange(value) {
  console.log("selected ".concat(value));
}

function languageChange(value) {
  console.log("selected ".concat(value));
} // Number of Guest


function numGuestonChange(value) {
  console.log('changed', value);
} // Price of tour


function priceChange(value) {
  console.log('changed', value);
}

var ModifyProductForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModifyProductForm, _React$Component);

  function ModifyProductForm(props) {
    var _this;

    _classCallCheck(this, ModifyProductForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModifyProductForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickTextarea", function () {
      _this.state.pickerClassName === 'myPickerHide' ? _this.setState({
        pickerClassName: 'myPickerShow'
      }) : _this.setState({
        pickerClassName: 'myPickerHide'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      var surl = window.location.href;
      var spl_url = surl.split("=");

      if (spl_url.length > 0) {
        for_modify_id = spl_url[1];
        console.log("nano:", for_modify_id);
      }

      axios__WEBPACK_IMPORTED_MODULE_21___default()({
        method: 'post',
        url: _components_base_url__WEBPACK_IMPORTED_MODULE_25__["base_url"] + "/api/get_modify_product",
        data: {
          productId: for_modify_id
        }
      }).then(function (response) {
        console.log(response);

        if (response.status === 200) {
          _this.setState({
            productData: response.data[0],
            productImgData: response.data[1],
            textareaDays: response.data[0]['pdu_unavailable_date']
          });

          _this.setState({
            meetingpointJson: {
              lat: parseFloat(response.data[0].pdu_meeting_point_lat),
              lng: parseFloat(response.data[0].pdu_meeting_point_lng)
            }
          });

          var notDaysArray = response.data[0]['pdu_unavailable_date'].split(",");

          _this.setState({
            textareaDays: notDaysArray
          });

          var array = [];
          notDaysArray.forEach(function (day) {
            var sp_day = day.split("-");
            array.push(new Date(sp_day[0], parseInt(sp_day[1]) - 1, sp_day[2]));
          });

          _this.setState({
            selectedDays: array
          });
        }
      }).catch(function (error) {
        console.log(error);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "autocompleteCountry", function (value) {
      if (value == '') _this.setState({
        filterdata: []
      });else _this.setState({
        filterdata: countries.filter(function (s) {
          return s.toLowerCase().substring(0, value.length) === value.toLowerCase();
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "autocompleteLanguage", function (value) {
      if (value == '') _this.setState({
        filterdata: []
      });else _this.setState({
        filterdata: languages.filter(function (s) {
          return s.toLowerCase().substring(0, value.length) === value.toLowerCase();
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getDuration", function () {
      console.log("Duration:", _this.duration.value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "tournameOnChange", function (e) {
      _this.setState({
        tourname: e.target.value
      });

      console.log(_this.state.tourname);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeMeetingTime", function (value) {
      console.log("selected ".concat(value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeDuration", function (value) {
      console.log("selected ".concat(value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "seasonOnChange", function (date, dateString) {
      console.log("season date form ~ to", dateString);

      _this.setState({
        seasondate: dateString
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeNotAllowed", function (date, dateString) {
      console.log("Not allowed Date:", dateString);

      _this.setState({
        notAllowedDate: dateString
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getUploadFiles", function (data) {
      _this.setState({
        uploadedFiles: data
      });

      console.log("Uploaded File list:", _this.state.uploadedFiles);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMeetingPoint", function (point) {
      // this.setState({
      //     meetingpoint: point
      // })
      var points = point.split(','); // this.setState({
      //     meetingpointJson: {
      //         lat: parseFloat(points[0]),
      //         lng: parseFloat(points[1])
      //     }
      // })

      _this.setState({
        meetingpointJson: point
      });

      console.log("MeetingPointJSON:", _this.state.meetingpointJson);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          _this.setState({
            loading: true
          }); // const meetingtime = this.meetingtime.state.value.format("HH:mm:ss")
          // const durationhours = this.duration.state.value.format("HH:mm:ss")


          var seasondate_from = _this.season.picker.state.value[0].format("YYYY-MM-DD");

          var seasondate_to = _this.season.picker.state.value[1].format("YYYY-MM-DD");

          var notAllowedDate = _this.state.textareaDays;
          var uploadedFiles = _this.state.uploadedFiles;
          var ustr = _this.state.productData.pdu_ustr;
          var meetingpoint = _this.state.meetingpoint;
          console.log('uploaded Files: ', uploadedFiles);
          console.log('Received values of form: ', values);
          console.log("logged in username:", sessionStorage.getItem('session_username'));
          var username = sessionStorage.getItem('session_username');

          _this.refs.UploadingTourImage.handleUpload();

          axios__WEBPACK_IMPORTED_MODULE_21___default()({
            method: 'post',
            url: _components_base_url__WEBPACK_IMPORTED_MODULE_25__["base_url"] + '/api/modify_product',
            data: {
              values: values,
              seasondate_from: seasondate_from,
              seasondate_to: seasondate_to,
              notAllowedDate: notAllowedDate,
              uploadedFiles: uploadedFiles,
              username: username,
              ustr: ustr,
              for_modify_id: for_modify_id,
              meetingpoint: meetingpoint
            }
          }).then(function (response) {
            console.log('response:', response);

            if (response.data['type'] === 'success') {
              next_router__WEBPACK_IMPORTED_MODULE_22___default.a.push("/successproduct");
            } else {
              _this.setState({
                loading: false
              });

              antd_lib_modal__WEBPACK_IMPORTED_MODULE_11___default.a.error({
                title: 'Product registeration has been failed!',
                content: 'Please try again !'
              });
            }
          }).catch(function (error) {
            console.log('error:', error);

            _this.setState({
              loading: false
            });

            antd_lib_modal__WEBPACK_IMPORTED_MODULE_11___default.a.error({
              title: 'Product registeration has been failed!',
              content: 'Please try again !'
            });
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "makeLanguageArray", function () {
      var langarray = [];

      if (_this.state.productData.length != 0) {
        var lang = _this.state.productData.pdu_language.split(',');

        langarray = _toConsumableArray(lang);
      }

      return langarray;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "makeSeasonArray", function () {
      var seasonarray = [];

      if (_this.state.productData.length != 0) {
        var fromdate = _this.state.productData.pdu_season_from;
        var todate = _this.state.productData.pdu_season_to;
        seasonarray = _toConsumableArray(fromdate);
        seasonarray = _toConsumableArray(todate);
      }

      return seasonarray;
    });

    _this.state = {
      filterdata: [],
      seasondate: [],
      notAllowedDate: '',
      uploadedFiles: [],
      loading: false,
      // for modify data
      productData: [],
      productImgData: [],
      language: [],
      meetingpoint: '',
      meetingpointJson: {
        lat: 0,
        lng: 0
      },
      selectedDays: [],
      textareaDays: [],
      pickerClassName: 'myPickerHide'
    };
    _this.handleDayClick = _this.handleDayClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ModifyProductForm, [{
    key: "handleDayClick",
    value: function handleDayClick(day, _ref) {
      var selected = _ref.selected;
      var _this$state = this.state,
          selectedDays = _this$state.selectedDays,
          textareaDays = _this$state.textareaDays;

      if (selected) {
        var selectedIndex = selectedDays.findIndex(function (selectedDay) {
          return react_day_picker__WEBPACK_IMPORTED_MODULE_34__["DateUtils"].isSameDay(selectedDay, day);
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
    // onFinish = () => {
    //     // console.log("OnFinish-meetingtime:", this.meetingtime.state.value.format("HH:mm:ss"))
    //     // console.log("OnFinish-duration:", this.duration.state.value.format("HH:mm:ss"))
    //     console.log("OnFinsh-notallowed:", this.notallowed.picker.state.value.format("YYYY-MM-DD"))      
    //     console.log("OnFinish-seasonfrom", this.season.picker.state.value[0].format("YYYY-MM-DD"))
    //     console.log("OnFinish-seasonto", this.season.picker.state.value[1].format("YYYY-MM-DD"))
    // }
    value: function render() {
      var _this2 = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$state2 = this.state,
          productData = _this$state2.productData,
          productImgData = _this$state2.productImgData;
      console.log("tourname:", productData.pdu_season_from);
      return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 24,
        style: {
          height: '20vw',
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("img", {
        src: _components_images__WEBPACK_IMPORTED_MODULE_31__["createproduct_top_banner"],
        alt: "createproduct_top_banner",
        style: {
          width: '100%',
          position: 'absolute',
          left: 0,
          bottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "center",
        style: {
          marginTop: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, "Modify a Product")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "\uBAA8\uB4E0 \uB0B4\uC6A9\uC740 \uC601\uC5B4 \uB610\uB294 \uAC00\uC774\uB4DC\uAC00 \uC9C4\uD589\uB420 \uC678\uAD6D\uC5B4\uB85C \uC791\uC131\uD574\uC8FC\uC154\uC57C \uD569\uB2C8\uB2E4. \uC791\uC131\uB41C \uC0C1\uD488\uC740 '\uC624\uB298\uC758 \uCE5C\uAD6C'\uC5D0\uC11C \uAC80\uD1A0 \uD6C4 \uC218\uC815 \uC694\uCCAD \uB610\uB294 \uC0C1\uD488\uB4F1\uB85D\uC744 \uC9C4\uD589\uD560 \uC608\uC815\uC785\uB2C8\uB2E4. \uC0C1\uD488\uC5D0 \uB300\uD55C \uAC80\uC99D\uC774 \uD544\uC694\uD560 \uACBD\uC6B0 '\uC624\uB298\uC758 \uCE5C\uAD6C'\uB9E4\uB2C8\uC800\uAC00 \uC785\uB825\uB41C \uC5F0\uB77D\uCC98\uB85C \uC548\uB0B4\uB97C \uB4DC\uB9B0 \uD6C4, \uD22C\uC5B4\uC77C\uC815\uC744 \uD568\uAED8 \uCCB4\uD5D8\uD558\uC5EC \uCEE8\uC124\uD305\uC744 \uC9C4\uD589\uD560 \uC608\uC815\uC774\uBA70 \uADF8 \uC774\uD6C4 \uC0C1\uD488\uB4F1\uB85D\uC744 \uC9C4\uD589\uD569\uB2C8\uB2E4. \uC0C1\uD488\uAC80\uC99D\uC2DC \uBC1C\uC0DD\uD558\uB294 \uBE44\uC6A9\uC744 '\uC624\uB298\uC758 \uCE5C\uAD6C'\uC5D0\uC11C \uC9C0\uBD88 \uC0C1\uD488\uC758 \uC9C8\uC744 \uB192\uC774\uACE0 \uD22C\uC5B4\uC0C1\uD488 \uAC1C\uBC1C\uC790\uC758 \uD3B8\uC758\uB97C \uB3D5\uACE0\uC790 \uC0C1\uD488\uAC8C\uC2DC\uAE4C\uC9C0 \uC77C\uC815 \uC2DC\uAC04\uC774 \uC18C\uC694\uB420\uC218 \uC788\uC74C\uC744 \uCC38\uACE0\uD574\uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4!"))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_19___default.a, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        style: {
          textAlign: "center",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: 10,
          padding: "20px 20px",
          width: "100%",
          margin: "0 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
        style: {
          color: "red",
          fontSize: ".8em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "*\uC601\uC5B4\uB85C \uC791\uC131\uD574 \uC8FC\uC138\uC694")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "start",
        style: {
          marginBottom: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
        style: {
          fontSize: "1.5em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, "1. Basic Information")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Name of tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, getFieldDecorator('tourname', {
        initialValue: productData.pdu_name,
        rules: [{
          type: 'string',
          message: 'The input is not valid tour name!'
        }, {
          required: true,
          message: 'Please input your tour name!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default.a, {
        size: "large",
        onChange: this.tournameOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Type of tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, getFieldDecorator('tourtype', {
        initialValue: productData.pdu_type,
        rules: [{
          required: true,
          message: 'Please select your tour type!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default.a, {
        size: "large",
        onChange: tourTypeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "Night Tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, "Night Tour"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "Private Car Tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, "Private Car Tour"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "Food Tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, "Food Tour"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "Climbing Tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, "Climbing Tour"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "Walking Tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, "Walking Tour"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "Bicycle Tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, "Bicycle Tour"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "Market Tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }, "Market Tour"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "Nature Tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, "Nature Tour"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "Other",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, "Other"))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Country",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, getFieldDecorator('country', {
        initialValue: productData.pdu_country,
        rules: [{
          required: true,
          message: 'Please input your country!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default.a, {
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "City",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, getFieldDecorator('city', {
        initialValue: productData.pdu_city,
        rules: [{
          required: true,
          message: 'Please select your tour city!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default.a, {
        name: "city",
        size: "large",
        onChange: cityChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "seoul",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, "Seoul"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "busan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }, "Busan"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "gyeongju",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, "Gyeongju"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "jeonju",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, "Jeonju"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "jejuisland",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, "Jejuisland"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "daegu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, "Daegu"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "others",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, "Others"))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 15,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Language(3\uAC1C\uAD6D\uC5B4\uAE4C\uC9C0 \uC785\uB825\uAC00\uB2A5)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, getFieldDecorator('language', {
        initialValue: this.makeLanguageArray(),
        rules: [{
          required: true,
          message: 'Please input languages!'
        }, {
          type: 'array'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default.a, {
        mode: "multiple",
        style: {
          width: '100%'
        },
        placeholder: "Please select languages",
        onChange: languageChange,
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, languageOption))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 23,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Brief description of Tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, getFieldDecorator('briefDesc', {
        initialValue: productData.pdu_brief_description,
        rules: [{
          required: true,
          message: 'Please input your brief desciption of your tour!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(TextArea, {
        autosize: {
          minRows: 3,
          maxRows: 8
        },
        placeholder: "\uAC04\uB2E8\uD558\uAC8C \uB2F9\uC2E0\uC758 \uC0C1\uD488\uD2B9\uC9D5\uC5D0 \uB300\uD574 \uC124\uBA85\uD574\uC8FC\uC138\uC694.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 23,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Detailed description of Tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }, getFieldDecorator('detailedDesc', {
        initialValue: productData.pdu_detailed_description,
        rules: [{
          required: true,
          message: 'Please input your detail desciption of your tour!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(TextArea, {
        autosize: {
          minRows: 6,
          maxRows: 10
        },
        placeholder: "\uB2F9\uC2E0\uC774 \uB9CC\uB4E0 local\uC5EC\uD589\uC5D0 \uB300\uD574 \uC124\uBA85\uC744 \uC790\uC720\uB86D\uAC8C \uC791\uC131\uD574\uC8FC\uC138\uC694. Tip! \uB2F9\uC2E0\uC758 \uD22C\uC5B4\uB9CC\uC774 \uAC00\uC9C0\uACE0 \uC788\uB294 \uD2B9\uC9D5\uC5D0 \uB300\uD574 \uC124\uBA85\uD574\uC8FC\uC138\uC694. \uC678\uAD6D\uC778\uC740 \uC5B8\uC81C\uB098 local\uB2E4\uC6C0\uACFC funny\uD55C \uC0C1\uD488\uC744 \uCC3E\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 23,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Hash Tag (\uB2F9\uC2E0\uC758 \uC5EC\uD589\uC774 \uAC00\uC9C0\uACE0 \uC788\uB294 \uD2B9\uC9D5\uC744 4\uAC1C\uC758 Hash Tag \uB85C \uBCF4\uC5EC\uC8FC\uC138\uC694.)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, getFieldDecorator('hashtag', {
        initialValue: productData.pdu_hashtag,
        rules: [{
          required: true,
          message: 'Please input your hash tag of your tour!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default.a, {
        size: "large",
        placeholder: "Ex) #seoul #hiking #bicycle #picnic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 23,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Tour Image (\uD22C\uC5B4\uB97C \uB300\uD45C\uD558\uB294 \uC774\uBBF8\uC9C0\uB97C \uB123\uC5B4\uC8FC\uC138\uC694.)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_ModifyTourImage__WEBPACK_IMPORTED_MODULE_28__["ModifyTourImage"], {
        uploadedFileList: productImgData,
        getUploadFileList: this.getUploadFiles,
        ref: "UploadingTourImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "start",
        style: {
          marginTop: 30,
          marginBottom: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
        style: {
          fontSize: "1.5em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, "2. Course Information")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Meeting Time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, getFieldDecorator('meetingTime', {
        initialValue: productData.pdu_meeting_time,
        rules: [{
          required: true,
          message: 'Please input meeting time!'
        }]
      })( // <TimePicker ref={meetingtime => this.meetingtime = meetingtime} onChange={this.meetingTimeOnChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} style={{width:"100%"}} size="large"/>
      react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default.a, {
        size: "large",
        onChange: this.onChangeMeetingTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "09:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, "09:00"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "09:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, "09:30"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "10:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        },
        __self: this
      }, "10:00"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "10:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      }, "10:30"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "11:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      }, "11:00"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "11:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      }, "11:30"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "12:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, "12:00"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "12:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }, "12:30"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "13:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, "13:00"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "13:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }, "13:30"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "14:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        },
        __self: this
      }, "14:00"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "14:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        },
        __self: this
      }, "14:30"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "15:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576
        },
        __self: this
      }, "15:00"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "15:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }, "15:30"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "16:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, "16:00"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "16:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        },
        __self: this
      }, "16:30"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "17:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, "17:00"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "18:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      }, "18:30"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "19:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, "19:00"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "19:30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }, "19:30"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "20:00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        },
        __self: this
      }, "20:00"))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Duration (\uD22C\uC5B4 \uC18C\uC694\uC2DC\uAC04)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }, getFieldDecorator('duration', {
        // initialValue: moment(productData.pdu_duration, 'HH:mm:ss'),
        initialValue: productData.pdu_duration,
        rules: [{
          required: true,
          message: 'Please input duration of your tour!'
        }]
      })( // <TimePicker ref={duration => this.duration = duration} onChange={this.durationOnChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} style={{width:"100%"}} size="large"/>
      react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_17___default.a, {
        size: "large",
        onChange: this.onChangeDuration,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "30min",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        },
        __self: this
      }, "30min"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "1hr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      }, "1hr"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "1hr30min",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        },
        __self: this
      }, "1hr 30min"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "2hr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        },
        __self: this
      }, "2hr"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "2hr30min",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        },
        __self: this
      }, "2hr 30min"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "3hr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        },
        __self: this
      }, "3hr"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "3hr30min",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }, "3hr 30min"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "4hr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        },
        __self: this
      }, "4hr"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "4hr30min",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610
        },
        __self: this
      }, "4hr 30min"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "5hr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611
        },
        __self: this
      }, "5hr"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "5hr30min",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        },
        __self: this
      }, "5hr 30min"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "6hr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613
        },
        __self: this
      }, "6hr"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "6hr30min",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        },
        __self: this
      }, "6hr 30min"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "7hr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615
        },
        __self: this
      }, "7hr"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "7hr30min",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616
        },
        __self: this
      }, "7hr 30min"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(Option, {
        value: "8hr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617
        },
        __self: this
      }, "8hr"))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 23,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Meeting location of Tour (\uB124\uC774\uBC84\uC758 \uC601\uC5B4\uC8FC\uC18C\uB97C \uB9AC\uC6A9\uD558\uBA74 \uD3B8\uB9AC)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627
        },
        __self: this
      }, getFieldDecorator('meetingLocation', {
        initialValue: productData.pdu_location,
        rules: [{
          required: true,
          message: 'Please input meeting location of your tour!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default.a, {
        size: "large",
        placeholder: "Ex) exit 3, Dongmyo station, 1, Wangsan-ro, Dongdaemun-gu, Seoul",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 23,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
        style: {
          color: 'red',
          fontSize: 18
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643
        },
        __self: this
      }, "*  "), "Meeting Point"), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_Newgooglemap__WEBPACK_IMPORTED_MODULE_29__["default"], {
        getMeetingPoint: this.getMeetingPoint // lat={parseFloat(this.state.productData.pdu_meeting_point_lat)} 
        // lng={parseFloat(this.state.productData.pdu_meeting_point_lng)} 
        ,
        meetingpointJson: this.state.meetingpointJson,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 23,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Please describe directions and explain how to get there",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654
        },
        __self: this
      }, getFieldDecorator('howgetthere', {
        initialValue: productData.pdu_hottoget,
        rules: [{
          required: true,
          message: 'Please input how to get there!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(TextArea, {
        autosize: {
          minRows: 2,
          maxRows: 3
        },
        placeholder: "If you come out of exit 3 of Dongmyo station, you can find me",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "start",
        style: {
          marginTop: 30,
          marginBottom: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
        style: {
          fontSize: "1.5em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671
        },
        __self: this
      }, "3. Price & Other Information")), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Price of tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675
        },
        __self: this
      }, getFieldDecorator('price', {
        initialValue: productData.pdu_price,
        rules: [{
          required: true,
          message: 'Please input price!'
        }, {
          type: 'integer',
          message: 'Must be of type integer!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5___default.a, {
        size: "large",
        min: 0,
        max: 100000000,
        formatter: function formatter(value) {
          return "\u20A9 ".concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        parser: function parser(value) {
          return value.replace(/\₩\s?|(,*)/g, '');
        },
        onChange: this.priceChange,
        style: {
          width: "100%"
        },
        placeholder: "Ex) 30000(\uB2E8\uC704\uC0DD\uB7B5)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 686
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 15,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 698
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Price included (\uBE44\uC6A9\uC5D0 \uD3EC\uD568\uB41C \uC2DD\uC0AC, \uC5EC\uD589\uC9C0, \uCCB4\uD5D8\uB4F1\uC744 \uAC04\uB7B5\uD788 \uC791\uC131)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 699
        },
        __self: this
      }, getFieldDecorator('priceIncluded', {
        initialValue: productData.pdu_price_include,
        rules: [{
          required: true,
          message: 'Please input what is include in price!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default.a, {
        size: "large",
        placeholder: "Ex) lunch, snacks in the traditional market, rental fee to bicycle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 708
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 713
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Minimum Number of guest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 715
        },
        __self: this
      }, getFieldDecorator('minNumGuest', {
        initialValue: productData.pdu_min_guest,
        rules: [{
          required: true,
          message: 'Please input minimum number of guest!'
        }, {
          type: 'integer',
          message: 'Please input number!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5___default.a, {
        size: "large",
        min: 1,
        max: 1000,
        onChange: numGuestonChange,
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 726
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 730
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Maximum Number of guest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 731
        },
        __self: this
      }, getFieldDecorator('maxNumGuest', {
        initialValue: productData.pdu_max_guest,
        rules: [{
          required: true,
          message: 'Please input maximum number of guest!'
        },, {
          type: 'integer',
          message: 'Please input number!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5___default.a, {
        size: "large",
        min: 1,
        max: 1000,
        onChange: numGuestonChange,
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Season from (\uD22C\uC5B4 \uC6B4\uC601\uAE30\uAC04)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 751
        },
        __self: this
      }, getFieldDecorator('season', {
        initialValue: [moment__WEBPACK_IMPORTED_MODULE_24___default()(productData.pdu_season_from, dateFormat), moment__WEBPACK_IMPORTED_MODULE_24___default()(productData.pdu_season_to, dateFormat)],
        rules: [{
          required: true,
          message: 'Please input season of your tour!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(RangePicker, {
        ref: function ref(season) {
          return _this2.season = season;
        },
        name: "avaliable",
        size: "large",
        format: dateFormat,
        onChange: this.seasonOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 760
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 13,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Date not allowed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765
        },
        __self: this
      }, getFieldDecorator('notAllowed', {
        initialValue: moment__WEBPACK_IMPORTED_MODULE_24___default()(productData.pdu_unavailable_date, dateFormat)
      })( // <DatePicker ref={notallowed => this.notallowed = notallowed} size="large" format={dateFormat} onChange={this.onChangeNotAllowed} />
      react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(TextArea, {
        onClick: this.onClickTextarea,
        value: this.state.textareaDays,
        readOnly: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 773
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        className: this.state.pickerClassName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 779
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(react_day_picker__WEBPACK_IMPORTED_MODULE_34___default.a, {
        initialMonth: this.state.selectedDays[0],
        selectedDays: this.state.selectedDays,
        onDayClick: this.handleDayClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 780
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "space-around",
        style: {
          textAlign: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 791
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 23,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 792
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(FormItem, {
        label: "Please write any additional information for your guest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 793
        },
        __self: this
      }, getFieldDecorator('addNote', {
        initialValue: productData.pdu_additional_info,
        rules: [{
          required: true,
          message: 'Please input any additional information for your guest!'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(TextArea, {
        autosize: {
          minRows: 3,
          maxRows: 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 802
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "flex",
        justify: "center",
        style: {
          marginTop: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 808
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        span: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 809
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
        spinning: this.state.loading,
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 810
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        name: "completeBtn",
        htmlType: "submit",
        size: "large",
        type: "primary",
        block: true,
        style: {
          height: 60
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("span", {
        style: {
          fontSize: "1.5em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811
        },
        __self: this
      }, "\uC644 \uB8CC")))))))));
    }
  }]);

  return ModifyProductForm;
}(react__WEBPACK_IMPORTED_MODULE_20___default.a.Component);

var WrappedModifyProductForm = antd_lib_form__WEBPACK_IMPORTED_MODULE_19___default.a.create()(ModifyProductForm);

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
      return react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 829
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_26__["Header"], {
        selected: "modifyproduct",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 830
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(WrappedModifyProductForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 831
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_20___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_27__["Footer"], {
        selected: "modifyproduct",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 832
        },
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_20___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/modifyproduct")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=modifyproduct.js.e73fb9dd884e0d4ac030.hot-update.js.map