(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/App/App.jsx":
/*!*************************!*\
  !*** ./src/App/App.jsx ***!
  \*************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return connectedApp; });
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_common_ModalConductor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_components/common/ModalConductor */ "./src/_components/common/ModalConductor.jsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers */ "./src/_helpers/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_actions */ "./src/_actions/index.js");
/* harmony import */ var _NavBar_NavBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../NavBar/NavBar */ "./src/NavBar/NavBar.jsx");





var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/App/App.jsx";







var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    var dispatch = _this.props.dispatch;
    _helpers__WEBPACK_IMPORTED_MODULE_8__["history"].listen(function (location, action) {
      // clear alert on location change
      console.log("App.jsx detected location change.  Location: ", location, "action: ", action);
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_9__["alertActions"].clear());
    });
    return _this;
  }

  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      var alert = this.props.alert;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-8 col-sm-offset-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), alert.message && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "alert ".concat(alert.type),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, alert.message)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_common_ModalConductor__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

function mapStateToProps(state) {
  var alert = state.alert;
  return {
    alert: alert
  };
}

var connectedApp = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(App);


/***/ }),

/***/ "./src/App/index.js":
/*!**************************!*\
  !*** ./src/App/index.js ***!
  \**************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App/App.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _App__WEBPACK_IMPORTED_MODULE_0__["App"]; });



/***/ }),

/***/ "./src/GroupMembersPage/GroupMember.jsx":
/*!**********************************************!*\
  !*** ./src/GroupMembersPage/GroupMember.jsx ***!
  \**********************************************/
/*! exports provided: GroupMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMember", function() { return connectedGroupMember; });
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tools_funcs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/funcs */ "./src/tools/funcs.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Forms_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_components/Forms/Form */ "./src/_components/Forms/Form.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_actions */ "./src/_actions/index.js");
/* harmony import */ var _templates_GroupMember__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_templates/GroupMember */ "./src/_templates/GroupMember.json");
var _templates_GroupMember__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../_templates/GroupMember */ "./src/_templates/GroupMember.json", 1);






var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/GroupMembersPage/GroupMember.jsx";
//a page for an individual groupMember's details.








var GroupMember =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GroupMember, _React$Component);

  function GroupMember(props) {
    var _this;

    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GroupMember);

    _this = Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GroupMember).call(this, props));
    _this.state = {
      isEditing: false,
      groupMember: props.groupMember
    };
    _this.toggleEdit = _this.toggleEdit.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.updateGMState = _this.updateGMState.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GroupMember, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      if (this.props.groupMember.id !== next.groupMember.id) {
        this.setState({
          groupMember: next.groupMember
        });
      }
    }
  }, {
    key: "updateGMState",
    value: function updateGMState(event) {
      var field = event.target.name;
      var groupMember = this.state.groupMember;
      groupMember[field] = event.target.value;
      return this.setState({
        groupMember: groupMember
      });
    } //change the local editing state

  }, {
    key: "toggleEdit",
    value: function toggleEdit() {
      this.setState({
        isEditing: !this.state.isEditing
      });
    }
  }, {
    key: "render",
    value: function render() {
      var groupMember = this.props.groupMember;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "GroupMember Display:"), groupMember && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        key: groupMember.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "User URL: ", groupMember.user), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Associated Group: ", groupMember.group, ", Role:", " ", groupMember.group_role)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "User-Group Association: ", groupMember.url)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Created: ", groupMember.date_created, ", Edited:", " ", groupMember.date_updated, " "))));
    }
  }]);

  return GroupMember;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

GroupMember.propTypes = {
  groupMember: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};

function mapStateToProps(state, props) {
  var groupMember = {};

  if (state.groupMembers && state.groupMembers.results) {
    groupMember = Object.assign({}, state.groupMembers.results.find(function (groupMember) {
      return groupMember.id === Object(_tools_funcs__WEBPACK_IMPORTED_MODULE_8__["getIdFromURL"])(props.match.url);
    }));
    console.log("from mstp in groupMembers, assigned groupMember: ", groupMember);
  }

  return {
    groupMember: groupMember
  };
}

var connectedGroupMember = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(GroupMember);


/***/ }),

/***/ "./src/GroupMembersPage/GroupMembersPage.jsx":
/*!***************************************************!*\
  !*** ./src/GroupMembersPage/GroupMembersPage.jsx ***!
  \***************************************************/
/*! exports provided: GroupMembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMembersPage", function() { return connectedGroupMemberPage; });
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_actions */ "./src/_actions/index.js");
/* harmony import */ var _GroupMember__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GroupMember */ "./src/GroupMembersPage/GroupMember.jsx");
/* harmony import */ var _components_Pages_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_components/Pages/List */ "./src/_components/Pages/List.jsx");





var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/GroupMembersPage/GroupMembersPage.jsx";





 //TODO: display user names and group names instead of associated record numbers.

var GroupMembersPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GroupMembersPage, _React$Component);

  function GroupMembersPage() {
    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GroupMembersPage);

    return Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GroupMembersPage).apply(this, arguments));
  }

  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GroupMembersPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("GMP CDM PROPS: ", this.props);
      this.props.dispatch(_actions__WEBPACK_IMPORTED_MODULE_8__["groupMemberActions"].getAll());
    }
  }, {
    key: "render",
    value: function render() {
      console.log("GMP PROPS: ", this.props);
      var groupMembers = this.props.groupMembers;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-6 col-md-offset-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, groupMembers && groupMembers.loading && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Loading groupMembers..."), groupMembers && groupMembers.error && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "ERROR: ", groupMembers.error), groupMembers && groupMembers.results && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Pages_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        items: groupMembers,
        itemName: "groupMembers",
        component: _GroupMember__WEBPACK_IMPORTED_MODULE_9__["GroupMember"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }
  }]);

  return GroupMembersPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

function mapStateToProps(state) {
  var groupMembers = state.groupMembers;
  return {
    groupMembers: groupMembers
  };
}

var connectedGroupMemberPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(GroupMembersPage);


/***/ }),

/***/ "./src/GroupMembersPage/index.js":
/*!***************************************!*\
  !*** ./src/GroupMembersPage/index.js ***!
  \***************************************/
/*! exports provided: GroupMembersPage, GroupMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupMembersPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupMembersPage */ "./src/GroupMembersPage/GroupMembersPage.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupMembersPage", function() { return _GroupMembersPage__WEBPACK_IMPORTED_MODULE_0__["GroupMembersPage"]; });

/* harmony import */ var _GroupMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupMember */ "./src/GroupMembersPage/GroupMember.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupMember", function() { return _GroupMember__WEBPACK_IMPORTED_MODULE_1__["GroupMember"]; });




/***/ }),

/***/ "./src/GroupPage/Group.jsx":
/*!*********************************!*\
  !*** ./src/GroupPage/Group.jsx ***!
  \*********************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return connectedGroup; });
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tools_funcs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tools/funcs */ "./src/tools/funcs.jsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _components_Forms_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_components/Forms/Form */ "./src/_components/Forms/Form.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_actions */ "./src/_actions/index.js");
/* harmony import */ var _templates_Group__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_templates/Group */ "./src/_templates/Group.jsx");






var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/GroupPage/Group.jsx";







 //A page for displaying individual 'group' items.
//TODO: note that there is a lot of 'this.props.group'.... there is a better way to organize this notation - will have to research and implement on next refactor.

var Group =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Group, _React$Component);

  function Group(props, context) {
    var _this;

    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Group);

    _this = Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Group).call(this, props, context));
    _this.state = {
      isEditing: false,
      group: props.group
    };
    _this.toggleEdit = _this.toggleEdit.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.updateGroupState = _this.updateGroupState.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Group, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      if (this.props.group.id !== next.group.id) {
        this.setState({
          group: next.group
        });
      }
    }
  }, {
    key: "mapDispatchToProps",
    value: function mapDispatchToProps(dispatch) {
      return {
        actions: Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])(_actions__WEBPACK_IMPORTED_MODULE_12__["groupActions"], dispatch)
      };
    }
  }, {
    key: "updateGroupState",
    value: function updateGroupState(event) {
      console.log("updategroupstate triggering in group.  State: ", this.state);
      var field = event.target.name;
      var group = this.state.group;
      group[field] = event.target.value;
      return this.setState({
        group: group
      });
    } //TODO: there are toggleEdits for every parent of a form class.  Can these be centralized?

  }, {
    key: "toggleEdit",
    value: function toggleEdit() {
      this.setState({
        isEditing: !this.state.isEditing
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("GROUP PROPS: ", this.props);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-8 col-md-offset-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Group Display: ", this.props.group.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, this.props.group.description), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.props.group.url), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.props.group.date_updated), this.props.group.active && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Active"), this.props.group.parent_group && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Parent:this.props.group.parent_group"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.toggleEdit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Edit ", this.props.group.name), this.state.isEditing && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Editing ", this.props.group.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Forms_Form__WEBPACK_IMPORTED_MODULE_11__["default"], {
        actions: _actions__WEBPACK_IMPORTED_MODULE_12__["groupActions"],
        schema: _templates_Group__WEBPACK_IMPORTED_MODULE_13__["groupSchema"],
        uiSchema: _templates_Group__WEBPACK_IMPORTED_MODULE_13__["groupUISchema"],
        toggleEdit: this.toggleEdit,
        item: this.props.group,
        onChange: this.updateGroupState,
        onActiveChange: this.updateGroupState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })));
    }
  }]);

  return Group;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Group.propTypes = {
  group: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};

function mapStateToProps(state, props) {
  var group = {
    name: "",
    description: "",
    url: "",
    date_created: "",
    date_updated: "",
    active: "",
    key: ""
  }; //the last element in the array is the empty string after the last slash.  2nd last is the '1'.
  //TODO: there is a better way to do this.  currently grabbing and updating page with group display after data is found after updating the URL with an ID.
  //a better way to do this is to make a onclick method that grabs the key (and group) from the selected value and routing it here.

  if (state.groups && state.groups.results) {
    group = Object.assign({}, state.groups.results.find(function (group) {
      return group.id === Object(_tools_funcs__WEBPACK_IMPORTED_MODULE_9__["getIdFromURL"])(props.match.url);
    }));
    console.log("from mstp in groups, returned group: ", group);
  }

  return {
    group: group
  };
}

var connectedGroup = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(Group);


/***/ }),

/***/ "./src/GroupPage/GroupsPage.jsx":
/*!**************************************!*\
  !*** ./src/GroupPage/GroupsPage.jsx ***!
  \**************************************/
/*! exports provided: GroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPage", function() { return connectedGroupsPage; });
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_actions */ "./src/_actions/index.js");
/* harmony import */ var _components_common_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_components/common/Pagination */ "./src/_components/common/Pagination.jsx");
/* harmony import */ var _components_Forms_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_components/Forms/Form */ "./src/_components/Forms/Form.jsx");
/* harmony import */ var _components_Pages_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_components/Pages/List */ "./src/_components/Pages/List.jsx");
/* harmony import */ var _templates_Group__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_templates/Group */ "./src/_templates/Group.jsx");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Group */ "./src/GroupPage/Group.jsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/GroupPage/GroupsPage.jsx";








 //The container page to show lists of groups, as well as any other pertinent functionality for groups.

var GroupsPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GroupsPage, _React$Component);

  function GroupsPage(props) {
    var _this;

    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GroupsPage);

    _this = Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GroupsPage).call(this, props));
    _this.state = {
      isEditing: false,
      groups: []
    };
    _this.toggleEdit = _this.toggleEdit.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  } //are we in an editing state?  (in this case - is the 'new group' button showing?)


  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GroupsPage, [{
    key: "toggleEdit",
    value: function toggleEdit() {
      this.setState({
        isEditing: !this.state.isEditing
      });
    } //get all groups once our components are finished mounting.

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch(_actions__WEBPACK_IMPORTED_MODULE_8__["groupActions"].getAll());
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("in CDU Groups: ", prevProps, prevState, snapshot);
    } //whats currently happening is that i am requesting state change with page=2, then the page is refreshing, causing state to go back to 1.

  }, {
    key: "render",
    value: function render() {
      var groups = this.props.groups;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, groups && groups.loading && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Loading groups..."), groups && groups.error && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "ERROR: ", groups.error), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.toggleEdit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Add New Group"), this.state.isEditing && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Forms_Form__WEBPACK_IMPORTED_MODULE_10__["default"], {
        toggleEdit: this.toggleEdit,
        actions: _actions__WEBPACK_IMPORTED_MODULE_8__["groupActions"],
        items: groups,
        schema: _templates_Group__WEBPACK_IMPORTED_MODULE_12__["groupSchema"],
        uiSchema: _templates_Group__WEBPACK_IMPORTED_MODULE_12__["groupUISchema"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), groups && groups.results && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Pages_List__WEBPACK_IMPORTED_MODULE_11__["default"], {
        items: groups,
        itemName: "groups",
        component: _Group__WEBPACK_IMPORTED_MODULE_13__["Group"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_common_Pagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
        actions: _actions__WEBPACK_IMPORTED_MODULE_8__["groupActions"],
        items: groups,
        parentProps: this.props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }));
    }
  }]);

  return GroupsPage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function mapStateToProps(state) {
  var groups = state.groups,
      currentPage = state.currentPage;
  return {
    groups: groups,
    currentPage: currentPage
  };
}

var connectedGroupsPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(GroupsPage);


/***/ }),

/***/ "./src/GroupPage/index.js":
/*!********************************!*\
  !*** ./src/GroupPage/index.js ***!
  \********************************/
/*! exports provided: Group, GroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupsPage */ "./src/GroupPage/GroupsPage.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupsPage", function() { return _GroupsPage__WEBPACK_IMPORTED_MODULE_0__["GroupsPage"]; });

/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "./src/GroupPage/Group.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _Group__WEBPACK_IMPORTED_MODULE_1__["Group"]; });




/***/ }),

/***/ "./src/LoginPage/LoginPage.jsx":
/*!*************************************!*\
  !*** ./src/LoginPage/LoginPage.jsx ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return connectedLoginPage; });
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_actions */ "./src/_actions/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_helpers */ "./src/_helpers/index.js");







var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/LoginPage/LoginPage.jsx";





var LoginPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LoginPage, _React$Component);

  function LoginPage(props) {
    var _this;

    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginPage);

    _this = Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LoginPage).call(this, props)); // reset login status

    _this.props.dispatch(_actions__WEBPACK_IMPORTED_MODULE_9__["userActions"].logout());

    _this.state = {
      username: "",
      password: "",
      submitted: false
    };
    _this.handleChange = _this.handleChange.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    return _this;
  }

  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LoginPage, [{
    key: "handleChange",
    value: function handleChange(e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      this.setState(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
    }
  }, {
    key: "showState",
    value: function showState() {
      console.log("STATE: ", _helpers__WEBPACK_IMPORTED_MODULE_10__["store"].getState());
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.setState({
        submitted: true
      });
      var _this$state = this.state,
          username = _this$state.username,
          password = _this$state.password;

      if (username && password) {
        this.props.dispatch(_actions__WEBPACK_IMPORTED_MODULE_9__["userActions"].login(username, password));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          username = _this$state2.username,
          password = _this$state2.password,
          submitted = _this$state2.submitted;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-6 col-md-offset-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        name: "form",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group" + (submitted && !username ? " has-error" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Username"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "username",
        value: username,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), submitted && !username && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "help-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Username is required")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group" + (submitted && !password ? " has-error" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password",
        value: password,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), submitted && !password && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "help-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Password is required")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Login"))));
    }
  }]);

  return LoginPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

function mapStateToProps(state) {
  var loggingIn = state.authentication.loggingIn;
  return {
    loggingIn: loggingIn
  };
}

var connectedLoginPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(LoginPage);


/***/ }),

/***/ "./src/LoginPage/index.js":
/*!********************************!*\
  !*** ./src/LoginPage/index.js ***!
  \********************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginPage */ "./src/LoginPage/LoginPage.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return _LoginPage__WEBPACK_IMPORTED_MODULE_0__["LoginPage"]; });



/***/ }),

/***/ "./src/NavBar/NavBar.jsx":
/*!*******************************!*\
  !*** ./src/NavBar/NavBar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/NavBar/NavBar.jsx";



var NavBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavBar, _React$Component);

  function NavBar() {
    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    return Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar).apply(this, arguments));
  }

  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/groups/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "Groups"), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/users/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "Users"), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/groupmembers/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, "Group Members"), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "Logout"));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/UserPage/User.jsx":
/*!*******************************!*\
  !*** ./src/UserPage/User.jsx ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return connectedUser; });
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tools_funcs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/funcs */ "./src/tools/funcs.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Forms_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_components/Forms/Form */ "./src/_components/Forms/Form.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_actions */ "./src/_actions/index.js");
/* harmony import */ var _templates_User__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_templates/User */ "./src/_templates/User.jsx");






var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/UserPage/User.jsx";
//a page for an individual user's details.








var User =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(User, _React$Component);

  function User(props) {
    var _this;

    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, User);

    _this = Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(User).call(this, props));
    _this.state = {
      isEditing: false,
      user: props.user
    };
    _this.toggleEdit = _this.toggleEdit.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.updateUserState = _this.updateUserState.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  } //this triggers after form update


  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(User, [{
    key: "updateUserState",
    value: function updateUserState(event) {
      console.log("event sent to updateuserstate: ", event);
      this.setState({
        user: event.formData
      });
      console.log("updateUserState triggering.");
    } //change the local editing state

  }, {
    key: "toggleEdit",
    value: function toggleEdit() {
      console.log("toggleEdit triggered.");
      this.setState({
        isEditing: !this.state.isEditing
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "User Display:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, this.state.user.username, " ", this.state.user.email), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.state.user.first_name, " ", this.props.user.last_name), this.props.user.is_active && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Active"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.toggleEdit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Edit ", this.props.user.username), this.state.isEditing && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Editing ", this.props.user.username), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Forms_Form__WEBPACK_IMPORTED_MODULE_10__["default"], {
        actions: _actions__WEBPACK_IMPORTED_MODULE_11__["userActions"],
        schema: _templates_User__WEBPACK_IMPORTED_MODULE_12__["userSchema"],
        uiSchema: _templates_User__WEBPACK_IMPORTED_MODULE_12__["userUISchema"],
        toggleEdit: this.toggleEdit,
        item: this.props.user,
        onChange: this.updateUserState,
        onActiveChange: this.updateUserState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })));
    }
  }]);

  return User;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

User.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};

function mapStateToProps(state, props) {
  var user = {
    first_name: "",
    last_name: "",
    url: "",
    date_created: "",
    date_updated: "",
    username: "",
    groups: []
  };

  if (state.users && state.users.results) {
    user = Object.assign({}, state.users.results.find(function (user) {
      return user.id === Object(_tools_funcs__WEBPACK_IMPORTED_MODULE_8__["getIdFromURL"])(props.match.url);
    }));
    console.log("from mstp in users, assigned user: ", user);
  }

  return {
    user: user
  };
}
/* TODO This might be the version of (below) that we need.  however, when doing this, i'm unable to export a connected page as 'UserPage' for some reason, and as a result, I can't import it properly later.  Need to do more research on why this is.
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GroupPage);
  */


var connectedUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(User);


/***/ }),

/***/ "./src/UserPage/UsersPage.jsx":
/*!************************************!*\
  !*** ./src/UserPage/UsersPage.jsx ***!
  \************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return connectedUserPage; });
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_actions */ "./src/_actions/index.js");
/* harmony import */ var _components_Pages_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_components/Pages/List */ "./src/_components/Pages/List.jsx");
/* harmony import */ var _components_common_Pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_components/common/Pagination */ "./src/_components/common/Pagination.jsx");
/* harmony import */ var _templates_User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_templates/User */ "./src/_templates/User.jsx");
/* harmony import */ var _components_Forms_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_components/Forms/Form */ "./src/_components/Forms/Form.jsx");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./User */ "./src/UserPage/User.jsx");






var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/UserPage/UsersPage.jsx";









var UsersPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UsersPage, _React$Component);

  function UsersPage(props) {
    var _this;

    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UsersPage);

    _this = Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UsersPage).call(this, props));
    _this.state = {
      isEditing: false,
      users: []
    };
    _this.toggleEdit = _this.toggleEdit.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.updateUserState = _this.updateUserState.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  } //function to help edit the group state as the form is changed.
  //TODO: note that this is never visited and has to be integrated.


  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UsersPage, [{
    key: "updateUserState",
    value: function updateUserState(event) {
      event.preventDefault();
      console.log("updateuserstate triggering in userspage.  State: ", this.state);
      var field = event.target.name;
      var user = this.state.user;
      user[field] = event.target.value;
      return this.setState({
        user: user
      });
    }
  }, {
    key: "toggleEdit",
    value: function toggleEdit() {
      this.setState({
        isEditing: !this.state.isEditing
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch(_actions__WEBPACK_IMPORTED_MODULE_8__["userActions"].getAll());
    }
  }, {
    key: "render",
    value: function render() {
      var users = this.props.users;
      console.log("In Render UsersPage, displaying Props: ", this.props, "and state: ", this.state);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-6 col-md-offset-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, users.loading && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Loading users..."), users.error && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "ERROR: ", users.error), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.toggleEdit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Add New User"), this.state.isEditing && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Forms_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onChange: this.updateUserState,
        toggleEdit: this.toggleEdit,
        actions: _actions__WEBPACK_IMPORTED_MODULE_8__["userActions"],
        items: users,
        schema: _templates_User__WEBPACK_IMPORTED_MODULE_11__["userSchema"],
        uiSchema: _templates_User__WEBPACK_IMPORTED_MODULE_11__["userUISchema"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), users && users.results && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Pages_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
        items: users,
        itemName: "users",
        component: _User__WEBPACK_IMPORTED_MODULE_13__["User"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, this.state.user), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_common_Pagination__WEBPACK_IMPORTED_MODULE_10__["default"], {
        actions: _actions__WEBPACK_IMPORTED_MODULE_8__["userActions"],
        items: users,
        parentProps: this.props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }));
    }
  }]);

  return UsersPage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function mapStateToProps(state) {
  console.log("IN MSTP IN USERS PAGE, STATE: ", state);
  var users = state.users,
      authentication = state.authentication;
  var auth = authentication.auth;
  return {
    auth: auth,
    users: users
  };
}

var connectedUserPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(UsersPage);


/***/ }),

/***/ "./src/UserPage/index.js":
/*!*******************************!*\
  !*** ./src/UserPage/index.js ***!
  \*******************************/
/*! exports provided: User, UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersPage */ "./src/UserPage/UsersPage.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return _UsersPage__WEBPACK_IMPORTED_MODULE_0__["UsersPage"]; });

/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/UserPage/User.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_1__["User"]; });




/***/ }),

/***/ "./src/_actions/alert.actions.js":
/*!***************************************!*\
  !*** ./src/_actions/alert.actions.js ***!
  \***************************************/
/*! exports provided: alertActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertActions", function() { return alertActions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./src/_constants/index.js");

var alertActions = {
  success: success,
  error: error,
  clear: clear
};

function success(message) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["alertConstants"].SUCCESS,
    message: message
  };
}

function error(message) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["alertConstants"].ERROR,
    message: message
  };
}

function clear() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["alertConstants"].CLEAR
  };
}

/***/ }),

/***/ "./src/_actions/group.actions.js":
/*!***************************************!*\
  !*** ./src/_actions/group.actions.js ***!
  \***************************************/
/*! exports provided: groupActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupActions", function() { return groupActions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./src/_constants/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/_services/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers */ "./src/_helpers/index.js");



var groupActions = {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove
};

function getAll() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return function (dispatch) {
    _services__WEBPACK_IMPORTED_MODULE_1__["groupService"].getAll(page).then(function (groups) {
      return dispatch(success(groups));
    }, function (error) {
      return dispatch(failure(error));
    });
  };

  function request() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].GETALL_REQUEST
    };
  }

  function success(groups) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].GETALL_SUCCESS,
      groups: groups
    };
  }

  function failure(error) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].GETALL_FAILURE,
      error: error
    };
  }
} //TODO: add user to group


function addUserToGroup(user, group) {
  console.log("ADDING USER ", user, "TO GROUP ", group); //return dispatch => {}
} //TODO: remove user from group


function removeUserFromGroup(user, group) {
  console.log("Removing user", user, "From group ", group);
} //TODO: make user a group admin


function makeGroupAdmin(user, group) {
  console.log("Making user ", user, "An admin for group: ", group);
}

function demoteGroupAdmin(user, group) {
  console.log("Demoting user ", user, "From admin of group: ", group);
} //TODO: create group within an existing parent group.  Should make use of Parent.


function create(group) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  //Functionality for creating new top-level groups.
  return function (dispatch) {
    _services__WEBPACK_IMPORTED_MODULE_1__["groupService"].create(group).then(function (group) {
      dispatch(success(group));
    }, function (error) {
      return dispatch(failure(error));
    });
  };

  function request() {
    console.log("GROUP CREATE REQUEST");
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].CREATE_REQUEST
    };
  }

  function success(group) {
    console.log("GROUP CREATE SUCCESS, group:", group);
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].CREATE_SUCCESS,
      group: group
    };
  }

  function failure(error) {
    console.log("GROUP CREATE FAILURE:", error);
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].CREATE_FAILURE,
      error: error
    };
  }
}

function read(id) {
  return function (dispatch) {
    _services__WEBPACK_IMPORTED_MODULE_1__["groupService"].read(id).then(function (group) {
      return dispatch(success(id));
    }, function (error) {
      return dispatch(failure(error, id));
    });
  };

  function request(id) {
    console.log("GROUP READ REQUEST: ", id);
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].READ_REQUEST
    };
  }

  function success(group) {
    console.log("GROUP READ SUCCESS", group);
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].READ_SUCCESS,
      group: group
    };
  }

  function failure(error, id) {
    console.log("GROUP READ FAILURE: ", error, " ID: ", id);
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].READ_FAILURE,
      error: error
    };
  }
}

function update(group) {
  return function (dispatch) {
    _services__WEBPACK_IMPORTED_MODULE_1__["groupService"].update(group).then(function (group) {
      dispatch(success(group));
    }, function (error) {
      return dispatch(failure(error));
    });
  };

  function request() {
    console.log("GROUP UPDATE REQUESTING");
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].UPDATE_REQUEST
    };
  }

  function success(group) {
    console.log("GROUP UPDATE SUCCESS, GROUP:", group);
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].UPDATE_SUCCESS,
      group: group
    };
  }

  function failure(error) {
    console.log("GROUP UPDATE ERROR:", error);
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].UPDATE_FAILURE,
      error: error
    };
  }
}

function remove(group) {
  return function (dispatch) {
    _services__WEBPACK_IMPORTED_MODULE_1__["groupService"].remove(group).then(function (group) {
      return dispatch(success(group));
    }, function (error) {
      return dispatch(failure(error));
    });
  };

  function request(group) {
    console.log(" GROUP DELETE REQUESTING", group);
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].DELETE_REQUEST
    };
  }

  function success(group) {
    console.log("GROUP DELETE SUCCESS, GROUP: ", group);
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].DELETE_SUCCESS,
      group: group
    };
  }

  function failure(error) {
    console.log("GROUP DELETE ERROR: ", error);
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupConstants"].DELETE_FAILURE,
      error: error
    };
  }
}

/***/ }),

/***/ "./src/_actions/groupMember.actions.js":
/*!*********************************************!*\
  !*** ./src/_actions/groupMember.actions.js ***!
  \*********************************************/
/*! exports provided: groupMemberActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupMemberActions", function() { return groupMemberActions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./src/_constants/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/_services/index.js");


var groupMemberActions = {
  getAll: getAll
};

function getAll() {
  console.log("groupMembers GETALL");
  return function (dispatch) {
    dispatch(request());
    _services__WEBPACK_IMPORTED_MODULE_1__["groupMemberService"].getAll().then(function (groupMembers) {
      return dispatch(success(groupMembers));
    }, function (error) {
      return dispatch(failure(error));
    });
  };

  function request() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupMemberConstants"].GETALL_REQUEST
    };
  }

  function success(groupMembers) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupMemberConstants"].GETALL_SUCCESS,
      groupMembers: groupMembers
    };
  }

  function failure(error) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["groupMemberConstants"].GETALL_FAILURE,
      error: error
    };
  }
}

/***/ }),

/***/ "./src/_actions/index.js":
/*!*******************************!*\
  !*** ./src/_actions/index.js ***!
  \*******************************/
/*! exports provided: alertActions, userActions, groupActions, groupMemberActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.actions */ "./src/_actions/alert.actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alertActions", function() { return _alert_actions__WEBPACK_IMPORTED_MODULE_0__["alertActions"]; });

/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.actions */ "./src/_actions/user.actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userActions", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_1__["userActions"]; });

/* harmony import */ var _group_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.actions */ "./src/_actions/group.actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupActions", function() { return _group_actions__WEBPACK_IMPORTED_MODULE_2__["groupActions"]; });

/* harmony import */ var _groupMember_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groupMember.actions */ "./src/_actions/groupMember.actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupMemberActions", function() { return _groupMember_actions__WEBPACK_IMPORTED_MODULE_3__["groupMemberActions"]; });






/***/ }),

/***/ "./src/_actions/user.actions.js":
/*!**************************************!*\
  !*** ./src/_actions/user.actions.js ***!
  \**************************************/
/*! exports provided: userActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userActions", function() { return userActions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./src/_constants/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/_services/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./src/_actions/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers */ "./src/_helpers/index.js");




var userActions = {
  login: login,
  logout: logout,
  getAll: getAll,
  create: create,
  read: read,
  update: update,
  remove: remove
};

function login(username, password) {
  return function (dispatch) {
    dispatch(request({
      username: username
    }));
    _services__WEBPACK_IMPORTED_MODULE_1__["userService"].login(username, password).then(function (user) {
      dispatch(success(user));
      _helpers__WEBPACK_IMPORTED_MODULE_3__["history"].push("/");
    }, function (error) {
      dispatch(failure(error));
      dispatch(___WEBPACK_IMPORTED_MODULE_2__["alertActions"].error(error));
    });
  };

  function request(user) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].LOGIN_REQUEST,
      user: user
    };
  }

  function success(user) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].LOGIN_SUCCESS,
      user: user
    };
  }

  function failure(error) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].LOGIN_FAILURE,
      error: error
    };
  }
}

function logout() {
  _services__WEBPACK_IMPORTED_MODULE_1__["userService"].logout();
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].LOGOUT
  };
}

function getAll() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return function (dispatch) {
    dispatch(request());
    _services__WEBPACK_IMPORTED_MODULE_1__["userService"].getAll(page).then(function (users) {
      dispatch(success(users));
    }, function (error) {
      return dispatch(failure(error));
    });
  };

  function request() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].GETALL_REQUEST
    };
  }

  function success(users) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].GETALL_SUCCESS,
      users: users
    };
  }

  function failure(error) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].GETALL_FAILURE,
      error: error
    };
  }
} //TODO: anonymize thisthis.props.dispatch CRUD functionality between groups and users.


function create(user) {
  //Functionality for this.props.dispatchcreating new top-level users.
  return function (dispatch) {
    _services__WEBPACK_IMPORTED_MODULE_1__["userService"].create(user).then(function (user) {
      dispatch(success(user));
    }, function (error) {
      return dispatch(failure(error));
    });
  };

  function request() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].CREATE_REQUEST
    };
  }

  function success(user) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].CREATE_SUCCESS,
      user: user
    };
  }

  function failure(error) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].CREATE_FAILURE,
      error: error
    };
  }
}

function read(id) {
  return function (dispatch) {
    _services__WEBPACK_IMPORTED_MODULE_1__["userService"].read(id).then(function (USER) {
      return dispatch(success(id));
    }, function (error) {
      return dispatch(failure(error, id));
    });
  };

  function request(id) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].READ_REQUEST
    };
  }

  function success(user) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].READ_SUCCESS,
      user: user
    };
  }

  function failure(error, id) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].READ_FAILURE,
      error: error
    };
  }
}

function update(user) {
  return function (dispatch) {
    _services__WEBPACK_IMPORTED_MODULE_1__["userService"].update(user).then(function (user) {
      dispatch(success(user));
    }, function (error) {
      return dispatch(failure(error));
    });
  };

  function request() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].UPDATE_REQUEST
    };
  }

  function success(user) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].UPDATE_SUCCESS,
      user: user
    };
  }

  function failure(error) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].UPDATE_FAILURE,
      error: error
    };
  }
}

function remove(user) {
  return function (dispatch) {
    _services__WEBPACK_IMPORTED_MODULE_1__["userService"].remove(user).then(function (user) {
      return dispatch(success(user));
    }, function (error) {
      return dispatch(failure(error));
    });
  };

  function request(id) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].DELETE_REQUEST
    };
  }

  function success(user) {
    console.log("In user action remove success, user is: ", user);
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].DELETE_SUCCESS,
      user: user
    };
  }

  function failure(error) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].DELETE_FAILURE,
      error: error
    };
  }
}

/***/ }),

/***/ "./src/_components/Forms/DeleteForm.jsx":
/*!**********************************************!*\
  !*** ./src/_components/Forms/DeleteForm.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/_components/Forms/DeleteForm.jsx";



var DeleteForm =
/*#__PURE__*/
function (_Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DeleteForm, _Component);

  function DeleteForm() {
    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DeleteForm);

    return Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DeleteForm).apply(this, arguments));
  }

  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DeleteForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        onSubmit: this.props.onRemove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "Delete"));
    }
  }]);

  return DeleteForm;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

DeleteForm.propTypes = {
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].func.isRequired,
  //the function to preform on item
  item: prop_types__WEBPACK_IMPORTED_MODULE_6__["PropTypes"].object.isRequired //the thing to remove

};
/* harmony default export */ __webpack_exports__["default"] = (DeleteForm);

/***/ }),

/***/ "./src/_components/Forms/Form.jsx":
/*!****************************************!*\
  !*** ./src/_components/Forms/Form.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsonschema_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-jsonschema-form */ "./node_modules/react-jsonschema-form/lib/index.js");
/* harmony import */ var react_jsonschema_form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsonschema_form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _DeleteForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DeleteForm */ "./src/_components/Forms/DeleteForm.jsx");






var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/_components/Forms/Form.jsx";




 //A form for adding a new _____.

var NewForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NewForm, _React$Component);

  function NewForm(props) {
    var _this;

    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NewForm);

    _this = Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NewForm).call(this, props));
    _this.onSubmit = _this.onSubmit.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.state = {
      prevItem: _this.props.item,
      item: _this.props.item
    };
    _this.updateItemState = _this.updateItemState.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.onRemove = _this.onRemove.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  } //function to help edit the state as the form is changed.


  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NewForm, [{
    key: "updateItemState",
    value: function updateItemState(e) {
      console.log("updateitemstate triggering in generic NewForm.  State: ", this.state);
      console.log("updateitemstate event: ", e);

      if (e.target) {
        var field = e.target.name;
        var item = this.state.item;
        item[field] = e.target.value;
        return this.setState({
          item: item
        });
      }
    } //TODO: reinstate form validation.  Validation exists on HTML side, but we probably want some amount of validation prior to submission.

  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      //e.formData is the object we'll be submitting, constructed from the editable form.
      //however, i don't yet know how to go about validating this information, since both the field names and content will vary.
      var data = e.formData;
      console.log("In NewForm, e is : ", e, " and data to submit is: ", data);

      if (this.state.prevItem) {
        data.id = this.state.prevItem.id;
        this.props.dispatch(this.props.actions.update(data));
        this.setState({
          prevItem: data,
          item: data
        });
      } else {
        this.props.dispatch(this.props.actions.create(data));
      }

      this.props.onChange(e);
      this.props.toggleEdit();
    }
  }, {
    key: "onRemove",
    value: function onRemove(e) {
      e.preventDefault(); //if there is a item, set it inactive using itemActions remove.

      var data = this.state.prevItem;

      if (data) {
        this.props.dispatch(this.props.actions.remove(data));
        this.props.toggleEdit();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_jsonschema_form__WEBPACK_IMPORTED_MODULE_9___default.a, {
        schema: this.props.schema,
        uiSchema: this.props.uiSchema,
        onBlur: this.updateItemState,
        onSubmit: this.onSubmit,
        formData: this.state.prevItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), this.state.prevItem && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_DeleteForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onRemove: this.onRemove,
        item: this.state.prevItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }));
    }
  }]);

  return NewForm;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

NewForm.propTypes = {
  schema: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  uiSchema: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  toggleEdit: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onActiveChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  item: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])()(NewForm));

/***/ }),

/***/ "./src/_components/Pages/List.jsx":
/*!****************************************!*\
  !*** ./src/_components/Pages/List.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");






var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/_components/Pages/List.jsx";
//a page for showing all users in a given list.




var List =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(List, _React$Component);

  function List(props) {
    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, List);

    return Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(List).call(this, props));
  }

  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log("In List CDU, props: ", this.props, " state: ", this.state);
      console.log("In List CDU, prevProps: ", prevProps, " prevState: ", prevState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          itemName = _this$props.itemName,
          component = _this$props.component;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, items.results.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          className: "list-group-item",
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
          to: "/" + itemName + "/" + item.id + "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, item.id), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
          path: "".concat(item.url, "}"),
          component: component,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }));
      }));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

List.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  itemName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  component: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired //the component that we feed into Route

};
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/_components/PrivateRoute.jsx":
/*!******************************************!*\
  !*** ./src/_components/PrivateRoute.jsx ***!
  \******************************************/
/*! exports provided: PrivateRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoute", function() { return PrivateRoute; });
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/_components/PrivateRoute.jsx";

 //Boot users back to the login page if they're not logged in.

var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      rest = Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: function render(props) {
      return localStorage.getItem("auth") ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: {
          pathname: "/login",
          state: {
            from: props.location
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/***/ }),

/***/ "./src/_components/common/ModalConductor.jsx":
/*!***************************************************!*\
  !*** ./src/_components/common/ModalConductor.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsonschema_form_lib_components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jsonschema-form/lib/components/Form */ "./node_modules/react-jsonschema-form/lib/components/Form.js");
/* harmony import */ var react_jsonschema_form_lib_components_Form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsonschema_form_lib_components_Form__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/_components/common/ModalConductor.jsx";
//A component for holding forms / pages / etc that are meant to go into the screen foreground to be focused on.



function ModalConductor(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_jsonschema_form_lib_components_Form__WEBPACK_IMPORTED_MODULE_1___default.a, Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ModalConductor);

/***/ }),

/***/ "./src/_components/common/Pagination.jsx":
/*!***********************************************!*\
  !*** ./src/_components/common/Pagination.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/_components/common/Pagination.jsx";



var Pagination =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Pagination, _React$Component);

  function Pagination(props) {
    var _this;

    Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Pagination);

    _this = Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Pagination).call(this, props));
    _this.state = {
      currentPage: 1,
      next: 2,
      previous: 0
    };
    _this.getNext = _this.getNext.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.getPrevious = _this.getPrevious.bind(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Pagination, [{
    key: "getNext",
    value: function getNext(e) {
      e.preventDefault();
      this.props.parentProps.dispatch(this.props.actions.getAll(this.state.currentPage + 1));
      this.setState({
        currentPage: this.state.currentPage + 1,
        previous: this.state.previous + 1,
        next: this.state.next + 1
      });
    }
  }, {
    key: "getPrevious",
    value: function getPrevious(e) {
      e.preventDefault();
      this.props.parentProps.dispatch(this.props.actions.getAll(this.state.currentPage - 1));
      this.setState({
        currentPage: this.state.currentPage - 1,
        previous: this.state.previous - 1,
        next: this.state.next - 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var items = this.props.items;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        style: {
          visibility: items.previous ? 'visible' : 'hidden'
        },
        onClick: this.getPrevious,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "<"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        style: {
          visibility: items.next ? 'visible' : 'hidden'
        },
        onClick: this.getNext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, ">"));
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Pagination.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  parentProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/_constants/alert.constants.js":
/*!*******************************************!*\
  !*** ./src/_constants/alert.constants.js ***!
  \*******************************************/
/*! exports provided: alertConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertConstants", function() { return alertConstants; });
var alertConstants = {
  SUCCESS: "ALERT_SUCCESS",
  ERROR: "ALERT_ERROR",
  CLEAR: "ALERT_CLEAR"
};

/***/ }),

/***/ "./src/_constants/group.constants.js":
/*!*******************************************!*\
  !*** ./src/_constants/group.constants.js ***!
  \*******************************************/
/*! exports provided: groupConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupConstants", function() { return groupConstants; });
var groupConstants = {
  GETALL_REQUEST: "GROUPS_GETALL_REQUEST",
  GETALL_SUCCESS: "GROUPS_GETALL_SUCCESS",
  GETALL_FAILURE: "GROUPS_GETALL_FAILURE",
  CREATE_REQUEST: "GROUPS_CREATE_REQUEST",
  CREATE_SUCCESS: "GROUPS_CREATE_SUCCESS",
  CREATE_FAILURE: "GROUPS_CREATE_FAILURE",
  READ_REQUEST: "GROUPS_READ_REQUEST",
  READ_SUCCESS: "GROUPS_READ_SUCCESS",
  READ_FAILURE: "GROUPS_READ_FAILURE",
  UPDATE_REQUEST: "GROUPS_UPDATE_REQUEST",
  UPDATE_SUCCESS: "GROUPS_UPDATE_SUCCESS",
  UPDATE_FAILURE: "GROUPS_UPDATE_FAILURE",
  DELETE_REQUEST: "GROUPS_DELETE_REQUEST",
  DELETE_SUCCESS: "GROUPS_DELETE_SUCCESS",
  DELETE_FAILURE: "GROUPS_DELETE_FAILURE"
};

/***/ }),

/***/ "./src/_constants/groupMember.constants.js":
/*!*************************************************!*\
  !*** ./src/_constants/groupMember.constants.js ***!
  \*************************************************/
/*! exports provided: groupMemberConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupMemberConstants", function() { return groupMemberConstants; });
var groupMemberConstants = {
  LOGIN_REQUEST: "GROUPMEMBERS_LOGIN_REQUEST",
  LOGIN_SUCCESS: "GROUPMEMBERS_LOGIN_SUCCESS",
  LOGIN_FAILURE: "GROUPMEMBERS_LOGIN_FAILURE",
  LOGOUT: "GROUPMEMBERS_LOGOUT",
  GETALL_REQUEST: "GROUPMEMBERS_GETALL_REQUEST",
  GETALL_SUCCESS: "GROUPMEMBERS_GETALL_SUCCESS",
  GETALL_FAILURE: "GROUPMEMBERS_GETALL_FAILURE"
};

/***/ }),

/***/ "./src/_constants/index.js":
/*!*********************************!*\
  !*** ./src/_constants/index.js ***!
  \*********************************/
/*! exports provided: alertConstants, userConstants, groupConstants, groupMemberConstants, systemConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.constants */ "./src/_constants/alert.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alertConstants", function() { return _alert_constants__WEBPACK_IMPORTED_MODULE_0__["alertConstants"]; });

/* harmony import */ var _user_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.constants */ "./src/_constants/user.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userConstants", function() { return _user_constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"]; });

/* harmony import */ var _group_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.constants */ "./src/_constants/group.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupConstants", function() { return _group_constants__WEBPACK_IMPORTED_MODULE_2__["groupConstants"]; });

/* harmony import */ var _groupMember_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groupMember.constants */ "./src/_constants/groupMember.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupMemberConstants", function() { return _groupMember_constants__WEBPACK_IMPORTED_MODULE_3__["groupMemberConstants"]; });

/* harmony import */ var _system_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system.constants */ "./src/_constants/system.constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "systemConstants", function() { return _system_constants__WEBPACK_IMPORTED_MODULE_4__["systemConstants"]; });







/***/ }),

/***/ "./src/_constants/system.constants.js":
/*!********************************************!*\
  !*** ./src/_constants/system.constants.js ***!
  \********************************************/
/*! exports provided: systemConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemConstants", function() { return systemConstants; });
var systemConstants = {
  BASE_URL: "http://localhost:8000/api"
};

/***/ }),

/***/ "./src/_constants/user.constants.js":
/*!******************************************!*\
  !*** ./src/_constants/user.constants.js ***!
  \******************************************/
/*! exports provided: userConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userConstants", function() { return userConstants; });
var userConstants = {
  LOGIN_REQUEST: "USERS_LOGIN_REQUEST",
  LOGIN_SUCCESS: "USERS_LOGIN_SUCCESS",
  LOGIN_FAILURE: "USERS_LOGIN_FAILURE",
  LOGOUT: "USERS_LOGOUT",
  GETALL_REQUEST: "USERS_GETALL_REQUEST",
  GETALL_SUCCESS: "USERS_GETALL_SUCCESS",
  GETALL_FAILURE: "USERS_GETALL_FAILURE",
  CREATE_REQUEST: "USERS_CREATE_REQUEST",
  CREATE_SUCCESS: "USERS_CREATE_SUCCESS",
  CREATE_FAILURE: "USERS_CREATE_FAILURE",
  READ_REQUEST: "USERS_READ_REQUEST",
  READ_SUCCESS: "USERS_READ_SUCCESS",
  READ_FAILURE: "USERS_READ_FAILURE",
  UPDATE_REQUEST: "USERS_UPDATE_REQUEST",
  UPDATE_SUCCESS: "USERS_UPDATE_SUCCESS",
  UPDATE_FAILURE: "USERS_UPDATE_FAILURE",
  DELETE_REQUEST: "USERS_DELETE_REQUEST",
  DELETE_SUCCESS: "USERS_DELETE_SUCCESS",
  DELETE_FAILURE: "USERS_DELETE_FAILURE"
};

/***/ }),

/***/ "./src/_helpers/auth-header.js":
/*!*************************************!*\
  !*** ./src/_helpers/auth-header.js ***!
  \*************************************/
/*! exports provided: authHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authHeader", function() { return authHeader; });
function authHeader() {
  // return authorization header with jwt token
  var user = JSON.parse(localStorage.getItem("auth"));

  if (user && user.access) {
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.access
    };
    return headers;
  } else {
    return {};
  }
}

/***/ }),

/***/ "./src/_helpers/history.js":
/*!*********************************!*\
  !*** ./src/_helpers/history.js ***!
  \*********************************/
/*! exports provided: history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");
//a custom history object for the router

var history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])();

/***/ }),

/***/ "./src/_helpers/index.js":
/*!*******************************!*\
  !*** ./src/_helpers/index.js ***!
  \*******************************/
/*! exports provided: history, store, authHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./src/_helpers/history.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "history", function() { return _history__WEBPACK_IMPORTED_MODULE_0__["history"]; });

/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/_helpers/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store__WEBPACK_IMPORTED_MODULE_1__["store"]; });

/* harmony import */ var _auth_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-header */ "./src/_helpers/auth-header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authHeader", function() { return _auth_header__WEBPACK_IMPORTED_MODULE_2__["authHeader"]; });





/***/ }),

/***/ "./src/_helpers/store.js":
/*!*******************************!*\
  !*** ./src/_helpers/store.js ***!
  \*******************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_reducers */ "./src/_reducers/index.js");




var loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], loggerMiddleware));

/***/ }),

/***/ "./src/_reducers/alert.reducer.js":
/*!****************************************!*\
  !*** ./src/_reducers/alert.reducer.js ***!
  \****************************************/
/*! exports provided: alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./src/_constants/index.js");

function alert() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["alertConstants"].SUCCESS:
      return {
        type: "alert-success",
        message: action.message
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["alertConstants"].ERROR:
      return {
        type: "alert-danger",
        message: action.message
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["alertConstants"].CLEAR:
      return {};

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/_reducers/authentication.reducer.js":
/*!*************************************************!*\
  !*** ./src/_reducers/authentication.reducer.js ***!
  \*************************************************/
/*! exports provided: authentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authentication", function() { return authentication; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./src/_constants/index.js");

var user = JSON.parse(localStorage.getItem("auth"));
var initialState = user ? {
  loggedIn: true,
  user: user
} : {};
function authentication() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].LOGIN_REQUEST:
      return {
        loading: true
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].LOGIN_FAILURE:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].LOGOUT:
      return {};

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/_reducers/group.reducer.js":
/*!****************************************!*\
  !*** ./src/_reducers/group.reducer.js ***!
  \****************************************/
/*! exports provided: groups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_constants */ "./src/_constants/index.js");


function groups() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["groupConstants"].CREATE_SUCCESS:
      return {
        results: state.results.concat(action.group)
      };

    case _constants__WEBPACK_IMPORTED_MODULE_1__["groupConstants"].GETALL_SUCCESS:
      return Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.groups);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["groupConstants"].UPDATE_SUCCESS:
      return {
        results: state.results.map(function (group) {
          if (action.group.id === group.id) {
            return Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.group);
          } else return group;
        }),
        count: state.count,
        next: state.next,
        previous: state.previous
      };

    case _constants__WEBPACK_IMPORTED_MODULE_1__["groupConstants"].DELETE_SUCCESS:
      return {
        results: state.results.map(function (group) {
          if (action.group.id === group.id) {
            return Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.group, {
              active: false
            });
          } else return group;
        }),
        count: state.count,
        next: state.next,
        previous: state.previous
      };

    case _constants__WEBPACK_IMPORTED_MODULE_1__["groupConstants"].CREATE_REQUEST:
    case _constants__WEBPACK_IMPORTED_MODULE_1__["groupConstants"].GETALL_REQUEST:
    case _constants__WEBPACK_IMPORTED_MODULE_1__["groupConstants"].UPDATE_REQUEST:
    case _constants__WEBPACK_IMPORTED_MODULE_1__["groupConstants"].DELETE_REQUEST:
      return {
        loading: true
      };

    case _constants__WEBPACK_IMPORTED_MODULE_1__["groupConstants"].CREATE_FAILURE:
    case _constants__WEBPACK_IMPORTED_MODULE_1__["groupConstants"].GETALL_FAILURE:
    case _constants__WEBPACK_IMPORTED_MODULE_1__["groupConstants"].UPDATE_FAILURE:
    case _constants__WEBPACK_IMPORTED_MODULE_1__["groupConstants"].DELETE_FAILURE:
      return {
        error: action.error,
        state: state
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/_reducers/groupmember.reducer.js":
/*!**********************************************!*\
  !*** ./src/_reducers/groupmember.reducer.js ***!
  \**********************************************/
/*! exports provided: groupMembers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupMembers", function() { return groupMembers; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./src/_constants/index.js");

function groupMembers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["groupMemberConstants"].GETALL_REQUEST:
      return {
        loading: true
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["groupMemberConstants"].GETALL_SUCCESS:
      return action.groupMembers;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["groupMemberConstants"].GETALL_FAILURE:
      return {
        error: action.error
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/_reducers/index.js":
/*!********************************!*\
  !*** ./src/_reducers/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _authentication_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.reducer */ "./src/_reducers/authentication.reducer.js");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.reducer */ "./src/_reducers/user.reducer.js");
/* harmony import */ var _alert_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.reducer */ "./src/_reducers/alert.reducer.js");
/* harmony import */ var _group_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group.reducer */ "./src/_reducers/group.reducer.js");
/* harmony import */ var _groupmember_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./groupmember.reducer */ "./src/_reducers/groupmember.reducer.js");






var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  authentication: _authentication_reducer__WEBPACK_IMPORTED_MODULE_1__["authentication"],
  users: _user_reducer__WEBPACK_IMPORTED_MODULE_2__["users"],
  groups: _group_reducer__WEBPACK_IMPORTED_MODULE_4__["groups"],
  groupMembers: _groupmember_reducer__WEBPACK_IMPORTED_MODULE_5__["groupMembers"],
  alert: _alert_reducer__WEBPACK_IMPORTED_MODULE_3__["alert"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/_reducers/user.reducer.js":
/*!***************************************!*\
  !*** ./src/_reducers/user.reducer.js ***!
  \***************************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_constants */ "./src/_constants/index.js");


function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"].CREATE_SUCCESS:
      return {
        results: state.results.concat(action.user)
      };

    case _constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"].GETALL_SUCCESS:
      return Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.users);

    case _constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"].UPDATE_SUCCESS:
      console.log("In update success, results prior to clientside update are: ", state.results);
      var res = {
        results: state.results.map(function (user) {
          if (action.user.id === user.id) {
            console.log("in userConstants update, user is becoming: ", action.user);
            return Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.user);
          } else return user;
        }),
        count: state.count,
        next: state.next,
        previous: state.previous
      };
      console.log("and results after clientside update are: ", res);
      return res;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"].DELETE_SUCCESS:
      var results = {
        results: state.results.map(function (user) {
          if (action.user.id != user.id) {
            return user;
          } else {
            return {};
          }
        }),
        count: state.count,
        next: state.next,
        previous: state.previous
      };
      return results;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"].CREATE_REQUEST:
    case _constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"].GETALL_REQUEST:
    case _constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"].UPDATE_REQUEST:
    case _constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"].DELETE_REQUEST:
      return {
        loading: true
      };

    case _constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"].CREATE_FAILURE:
    case _constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"].GETALL_FAILURE:
    case _constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"].UPDATE_FAILURE:
    case _constants__WEBPACK_IMPORTED_MODULE_1__["userConstants"].DELETE_FAILURE:
      return {
        error: action.error,
        state: state
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/_services/group.service.js":
/*!****************************************!*\
  !*** ./src/_services/group.service.js ***!
  \****************************************/
/*! exports provided: groupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupService", function() { return groupService; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_helpers */ "./src/_helpers/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/_services/index.js");
/* harmony import */ var _tools_funcs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/funcs */ "./src/tools/funcs.jsx");
/* harmony import */ var _constants_system_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_constants/system.constants */ "./src/_constants/system.constants.js");




var groupService = {
  getAll: getAll,
  create: create,
  read: read,
  update: update,
  remove: remove
};

function getAll(page) {
  var requestOptions = {
    method: "GET",
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["authHeader"])()
  };
  console.log("Attempting get all on page: ", page);
  return fetch(_constants_system_constants__WEBPACK_IMPORTED_MODULE_3__["systemConstants"].BASE_URL + "/researchgroups/?page=".concat(page), requestOptions).then(handleGet);
}

function create(group) {
  var requestOptions = {
    method: "POST",
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["authHeader"])(),
    body: JSON.stringify({
      name: group.name,
      description: group.description
    })
  };
  return fetch(_constants_system_constants__WEBPACK_IMPORTED_MODULE_3__["systemConstants"].BASE_URL + "/researchgroups/", requestOptions).then(handleCreate);
}

function read(id) {
  var requestOptions = {
    method: "GET",
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["authHeader"])()
  };
  return fetch(_constants_system_constants__WEBPACK_IMPORTED_MODULE_3__["systemConstants"].BASE_URL + "/researchgroups/".concat(id, "/"), requestOptions).then(handleGet);
} //TODO: finish edit function


function update(group) {
  var requestOptions = {
    method: "PUT",
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["authHeader"])(),
    body: JSON.stringify({
      name: group.name,
      description: group.description
    })
  };
  return fetch(_constants_system_constants__WEBPACK_IMPORTED_MODULE_3__["systemConstants"].BASE_URL + "/researchgroups/".concat(group.id, "/"), requestOptions).then(handleUpdate);
} //Definition of "Remove" is to set active=false.  Currently, actual removal is not in the spec.


function remove(group) {
  var requestOptions = {
    method: "PUT",
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["authHeader"])(),
    body: JSON.stringify({
      name: group.name,
      description: group.description,
      active: false
    })
  };
  return fetch(_constants_system_constants__WEBPACK_IMPORTED_MODULE_3__["systemConstants"].BASE_URL + "/researchgroups/".concat(group.id, "/"), requestOptions).then(handleRemove);
} //handle responses for getall and get one


function handleGet(response) {
  return response.text().then(function (text) {
    var data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        _services__WEBPACK_IMPORTED_MODULE_1__["userService"].logout();
        Location.reload(true);
      }

      var error = data && data.message || response.statusText;
      return Promise.reject(error);
    } //need to be able to separate out our query for all groups (as seen in this below segment) from newly created / edited groups.


    if (data.results) {
      data.results.map(function (result) {
        return result.id = Object(_tools_funcs__WEBPACK_IMPORTED_MODULE_2__["getIdFromURL"])(result.url);
      });
    } else {
      data.id = Object(_tools_funcs__WEBPACK_IMPORTED_MODULE_2__["getIdFromURL"])(data.url);
    }

    console.log("In handleGet, data:", data);
    return data;
  });
}

function handleCreate(response) {
  return response.text().then(function (text) {
    var data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        _services__WEBPACK_IMPORTED_MODULE_1__["userService"].logout();
        Location.reload(true);
      }

      var error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    data.id = Object(_tools_funcs__WEBPACK_IMPORTED_MODULE_2__["getIdFromURL"])(data.url);
    return data;
  });
}

function handleUpdate(response) {
  return response.text().then(function (text) {
    var data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        _services__WEBPACK_IMPORTED_MODULE_1__["userService"].logout();
        Location.reload(true);
      }

      var error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    data.id = Object(_tools_funcs__WEBPACK_IMPORTED_MODULE_2__["getIdFromURL"])(data.url);
    return data;
  });
}

function handleRemove(response) {
  return response.text().then(function (text) {
    var data = text && JSON.parse(text);
    console.log("GROUP DELETE RESPONSE: ", response);

    if (!response.ok) {
      if (response.status === 401) {
        _services__WEBPACK_IMPORTED_MODULE_1__["userService"].logout();
        Location.reload(true);
      }

      var error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    console.log("Group Deactivated: ", data);
    return data;
  });
}

/***/ }),

/***/ "./src/_services/groupmember.service.js":
/*!**********************************************!*\
  !*** ./src/_services/groupmember.service.js ***!
  \**********************************************/
/*! exports provided: groupMemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupMemberService", function() { return groupMemberService; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_helpers */ "./src/_helpers/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/_services/index.js");
/* harmony import */ var _tools_funcs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/funcs */ "./src/tools/funcs.jsx");
/* harmony import */ var _constants_system_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_constants/system.constants */ "./src/_constants/system.constants.js");




var groupMemberService = {
  getAll: getAll
};
/*
  Functionality needed:
  -add user to group and group to user
    -ie - create groupMember line-item.
    postponing this for after generic user / group form has been created
*/

function getAll() {
  var requestOptions = {
    method: "GET",
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["authHeader"])()
  };
  return fetch(_constants_system_constants__WEBPACK_IMPORTED_MODULE_3__["systemConstants"].BASE_URL + "/groupmembers/", requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(function (text) {
    var data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        _services__WEBPACK_IMPORTED_MODULE_1__["userService"].logout();
        Location.reload(true);
      }

      var error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    data.results.map(function (result) {
      return result.id = Object(_tools_funcs__WEBPACK_IMPORTED_MODULE_2__["getIdFromURL"])(result.url);
    });
    return data;
  });
}

/***/ }),

/***/ "./src/_services/index.js":
/*!********************************!*\
  !*** ./src/_services/index.js ***!
  \********************************/
/*! exports provided: userService, groupService, groupMemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/_services/user.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_0__["userService"]; });

/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.service */ "./src/_services/group.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupService", function() { return _group_service__WEBPACK_IMPORTED_MODULE_1__["groupService"]; });

/* harmony import */ var _groupmember_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groupmember.service */ "./src/_services/groupmember.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupMemberService", function() { return _groupmember_service__WEBPACK_IMPORTED_MODULE_2__["groupMemberService"]; });





/***/ }),

/***/ "./src/_services/user.service.js":
/*!***************************************!*\
  !*** ./src/_services/user.service.js ***!
  \***************************************/
/*! exports provided: userService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return userService; });
/* harmony import */ var _home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers */ "./src/_helpers/index.js");
/* harmony import */ var _tools_funcs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/funcs */ "./src/tools/funcs.jsx");
/* harmony import */ var _constants_system_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_constants/system.constants */ "./src/_constants/system.constants.js");




var userService = {
  login: login,
  logout: logout,
  getAll: getAll,
  create: create,
  read: read,
  update: update,
  remove: remove
};

function login(username, password) {
  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  };
  return fetch(_constants_system_constants__WEBPACK_IMPORTED_MODULE_3__["systemConstants"].BASE_URL + "/token/", requestOptions).then(handleResponse).then(function (user) {
    // login successful if there's a jwt token in the response
    if (user.access) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      console.log("User saved to local web storage.");
      localStorage.setItem("auth", JSON.stringify(user));
    }

    return user;
  });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("auth");
}

function getAll(page) {
  var requestOptions = {
    method: "GET",
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["authHeader"])()
  };
  return fetch(_constants_system_constants__WEBPACK_IMPORTED_MODULE_3__["systemConstants"].BASE_URL + "/users/?page=".concat(page), requestOptions).then(handleGet);
}

function create(user) {
  var requestOptions = {
    method: "POST",
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["authHeader"])(),
    body: JSON.stringify({
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email
    })
  };
  console.log("ATTEMPT CREATE USERS REQUESTOPTIONS:", requestOptions);
  return fetch(_constants_system_constants__WEBPACK_IMPORTED_MODULE_3__["systemConstants"].BASE_URL + "/users/", requestOptions).then(handleCreate);
}

function read(id) {
  var requestOptions = {
    method: "GET",
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["authHeader"])()
  };
  console.log("ATTEMPTING FETCH OF USER: ", id, " FROM USERS");
  return fetch(_constants_system_constants__WEBPACK_IMPORTED_MODULE_3__["systemConstants"].BASE_URL + "/users/".concat(id, "/"), requestOptions).then(handleGet);
} //TODO: finish edit function


function update(user) {
  var requestOptions = {
    method: "put",
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["authHeader"])(),
    body: JSON.stringify({
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email
    })
  };
  console.log("USER SERVICE UPDATE RO'S:", requestOptions);
  console.log("ATTEMPT EDIT USER:", user);
  return fetch(_constants_system_constants__WEBPACK_IMPORTED_MODULE_3__["systemConstants"].BASE_URL + "/users/".concat(user.id, "/"), requestOptions).then(handleUpdate);
}

function remove(user) {
  var requestOptions = {
    method: "DELETE",
    headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["authHeader"])(),
    body: JSON.stringify(Object(_home_jono_Documents_work_radiam_gui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user))
  };
  console.log("ATTEMPT TO DELETE USER: ", user);
  return fetch(_constants_system_constants__WEBPACK_IMPORTED_MODULE_3__["systemConstants"].BASE_URL + "/users/".concat(user.id, "/"), requestOptions).then(handleDelete);
}

function handleResponse(response) {
  return response.text().then(function (text) {
    var data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        Location.reload(true);
      }

      var error = data && data.message || response.statusText;
      return Promise.reject(error);
    } //extract id from the url.  Can be removed once ID is pulled from API.
    //Will need to be repeated for all objects that lack explicit ID values.


    return data;
  });
} //handle responses for getall and get one


function handleGet(response) {
  return response.text().then(function (text) {
    var data = text && JSON.parse(text);
    console.log("USER FETCH RESPONSE: ", response);

    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        userService.logout();
        Location.reload(true);
      }

      var error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    console.log("traversing handleget in user.service"); //need to be able to separate out our query for all users (as seen in this below segment) from newly created / edited users.

    if (data.results) {
      console.log("All Users Received: ", data);
      data.results.map(function (result) {
        return result.id = Object(_tools_funcs__WEBPACK_IMPORTED_MODULE_2__["getIdFromURL"])(result.url);
      });
    } else {
      console.log("Single User received: ", data);
      data.id = Object(_tools_funcs__WEBPACK_IMPORTED_MODULE_2__["getIdFromURL"])(data.url);
    }

    return data;
  });
}

function handleCreate(response) {
  console.log("in handleCreate,response: ", response);
  return response.text().then(function (text) {
    var data = text && JSON.parse(text);
    console.log("USER CREATE RESPONSE: ", response);

    if (!response.ok) {
      if (response.status === 401) {
        userService.logout();
        Location.reload(true);
      }

      var error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    data.id = Object(_tools_funcs__WEBPACK_IMPORTED_MODULE_2__["getIdFromURL"])(data.url);
    console.log("User Created: ", data);
    return data;
  });
}

function handleUpdate(response) {
  return response.text().then(function (text) {
    var data = text && JSON.parse(text);
    console.log("USER UPDATE RESPONSE: ", response);

    if (!response.ok) {
      if (response.status === 401) {
        userService.logout();
        Location.reload(true);
      }

      var error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    data.id = Object(_tools_funcs__WEBPACK_IMPORTED_MODULE_2__["getIdFromURL"])(data.url);
    console.log("User Updated: ", data);
    return data;
  });
}

function handleDelete(response) {
  return response.text().then(function (text) {
    var data = text && JSON.parse(text);
    console.log("USER DELETE RESPONSE: ", response);

    if (!response.ok) {
      if (response.status === 401) {
        userService.logout();
        Location.reload(true);
      }

      var error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    console.log("User Deleted: ", data);
    return data;
  });
}

/***/ }),

/***/ "./src/_templates/Group.jsx":
/*!**********************************!*\
  !*** ./src/_templates/Group.jsx ***!
  \**********************************/
/*! exports provided: groupSchema, groupUISchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupSchema", function() { return groupSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupUISchema", function() { return groupUISchema; });
var groupSchema = {
  title: "Group",
  type: "object",
  required: ["name", "description"],
  properties: {
    name: {
      type: "string",
      title: "Group Name",
      default: ""
    },
    description: {
      type: "string",
      title: "Description",
      default: ""
    },
    active: {
      type: "boolean",
      title: "Active",
      default: true
    }
  }
};
var groupUISchema = {
  properties: {
    description: {
      "ui:widget": "textarea"
    }
  }
};

/***/ }),

/***/ "./src/_templates/GroupMember.json":
/*!*****************************************!*\
  !*** ./src/_templates/GroupMember.json ***!
  \*****************************************/
/*! exports provided: model, params, default */
/***/ (function(module) {

module.exports = {"model":"groupMember","params":{"group":{"type":"object","required":true,"display":true},"user":{"type":"object","required":true,"display":true},"group_role":{"type":"object","required":true,"display":true},"active":{"type":"boolean","required":false,"display":false},"url":{"type":"string","required":false,"display":false},"date_created":{"type":"datetime","required":false,"display":false},"date_updated":{"type":"datetime","required":false,"display":false},"date_expires":{"type":"datetime","required":false,"display":false}}};

/***/ }),

/***/ "./src/_templates/User.jsx":
/*!*********************************!*\
  !*** ./src/_templates/User.jsx ***!
  \*********************************/
/*! exports provided: userSchema, userUISchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSchema", function() { return userSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userUISchema", function() { return userUISchema; });
var userSchema = {
  title: "User",
  type: "object",
  required: ["username", "first_name", "last_name", "email"],
  properties: {
    username: {
      type: "string",
      title: "Username",
      default: ""
    },
    first_name: {
      type: "string",
      title: "First Name",
      default: ""
    },
    last_name: {
      type: "string",
      title: "Last Name",
      default: ""
    },
    email: {
      type: "string",
      title: "Email",
      default: ""
    },
    is_active: {
      type: "boolean",
      title: "Active",
      default: true
    }
  }
};
var userUISchema = {
  properties: {
    email: {
      "ui:options": {
        inputType: "email"
      }
    }
  }
};

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers */ "./src/_helpers/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginPage */ "./src/LoginPage/index.js");
/* harmony import */ var _GroupPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GroupPage */ "./src/GroupPage/index.js");
/* harmony import */ var _helpers_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_helpers/history */ "./src/_helpers/history.js");
/* harmony import */ var _GroupPage_Group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GroupPage/Group */ "./src/GroupPage/Group.jsx");
/* harmony import */ var _UserPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UserPage */ "./src/UserPage/index.js");
/* harmony import */ var _GroupMembersPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GroupMembersPage */ "./src/GroupMembersPage/index.js");
/* harmony import */ var _components_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/PrivateRoute */ "./src/_components/PrivateRoute.jsx");
/* harmony import */ var _UserPage_User__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UserPage/User */ "./src/UserPage/User.jsx");
var _jsxFileName = "/home/jono/Documents/work/radiam-gui/src/index.jsx";














Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: _helpers__WEBPACK_IMPORTED_MODULE_3__["store"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Router"], {
  history: _helpers_history__WEBPACK_IMPORTED_MODULE_8__["history"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["App"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__["PrivateRoute"], {
  exact: true,
  path: "/",
  component: _GroupPage__WEBPACK_IMPORTED_MODULE_7__["GroupsPage"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  path: "/login",
  component: _LoginPage__WEBPACK_IMPORTED_MODULE_6__["LoginPage"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  path: "/users",
  component: _UserPage__WEBPACK_IMPORTED_MODULE_10__["UsersPage"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  path: "/users/:id",
  component: _UserPage_User__WEBPACK_IMPORTED_MODULE_13__["User"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  path: "/groups",
  component: _GroupPage__WEBPACK_IMPORTED_MODULE_7__["GroupsPage"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  path: "/groups/:id",
  component: _GroupPage_Group__WEBPACK_IMPORTED_MODULE_9__["Group"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  path: "/groupmembers",
  component: _GroupMembersPage__WEBPACK_IMPORTED_MODULE_11__["GroupMembersPage"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  path: "/groupmembers/:id",
  component: _GroupMembersPage__WEBPACK_IMPORTED_MODULE_11__["GroupMember"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
})))), document.getElementById("root"));

/***/ }),

/***/ "./src/tools/funcs.jsx":
/*!*****************************!*\
  !*** ./src/tools/funcs.jsx ***!
  \*****************************/
/*! exports provided: getIdFromURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdFromURL", function() { return getIdFromURL; });
//NOTE that this used to produce a number and now produces a string in most circumstances.  for groupmembers it still produces a number.
function getIdFromURL(url) {
  var urlSplit = url.split("/");

  if (urlSplit.length < 2) {
    console.error("getIdFromURL in src/tools/funcs has been called inappropriately.  Did you send a URL, does it end in a `/`, and is the component ID contained between two `/` values at the end of the string?  null has been returned instead.");
    return null;
  }

  var key = urlSplit[urlSplit.length - 2];
  return key;
}

/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jono/Documents/work/radiam-gui/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/jono/Documents/work/radiam-gui/src/index.jsx */"./src/index.jsx");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map