webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@material-ui/icons/Send.js":
false,

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
false,

/***/ "./node_modules/mdi-material-ui/Pickaxe.js":
/*!*************************************************!*\
  !*** ./node_modules/mdi-material-ui/Pickaxe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createIcon = _interopRequireDefault(__webpack_require__(/*! ./util/createIcon */ "./node_modules/mdi-material-ui/util/createIcon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _createIcon["default"])('M14.79,10.62L3.5,21.9L2.1,20.5L13.38,9.21L14.79,10.62M19.27,7.73L19.86,7.14L19.07,6.35L19.71,5.71L18.29,4.29L17.65,4.93L16.86,4.14L16.27,4.73C14.53,3.31 12.57,2.17 10.47,1.37L9.64,3.16C11.39,4.08 13,5.19 14.5,6.5L14,7L17,10L17.5,9.5C18.81,11 19.92,12.61 20.84,14.36L22.63,13.53C21.83,11.43 20.69,9.47 19.27,7.73Z');

exports["default"] = _default;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _artifacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../artifacts */ "./artifacts/index.js");
/* harmony import */ var _artifacts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_artifacts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var mdi_material_ui_Pickaxe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mdi-material-ui/Pickaxe */ "./node_modules/mdi-material-ui/Pickaxe.js");
/* harmony import */ var mdi_material_ui_Pickaxe__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Pickaxe__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Root__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Root */ "./components/Root.js");
/* harmony import */ var use_ether_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! use-ether-provider */ "./node_modules/use-ether-provider/dist/index.js");
/* harmony import */ var use_ether_provider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(use_ether_provider__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "/Users/admin/Projects/erc20-faucet/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 // import Router, {useRouter} from 'next/router';




 // import InputBase from '@material-ui/core/InputBase';

 // import SendIcon from '@material-ui/icons/Send';




var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    header: {
      backgroundColor: '#000000',
      padding: '20px',
      margin: '0 0 20px 0'
    },
    font: {
      color: '#ffffff'
    },
    cell: {
      backgroundColor: '#eeeeee',
      borderRadius: '5px',
      padding: '5px'
    },
    line: {
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    mainCont: {
      padding: '10px',
      margin: 'auto',
      maxWidth: '600px'
    },
    inputCont: {
      padding: '20px'
    },
    input: {
      // flex: 1,
      margin: '20px 0'
    },
    btnIcon: {
      margin: '0 0 0 10px'
    },
    upper: {
      margin: '50px 0 0 0'
    },
    tx: {
      margin: '0 0 10px 0'
    },
    smbtn: {
      height: '30px'
    }
  };
});

function _short(str, len) {
  return "".concat(str.substring(0, len), "...").concat(str.substring(str.length - len));
}

function validate(address, amount, currentAmount) {
  var stats = {
    eAddress: false,
    eAmount: false
  };

  if (!/^0x[0-9a-fA-F]{40}$/.test(address)) {
    stats.eAddress = true;
  }

  if (amount < 1 || _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(amount, 10) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(currentAmount, 10) > 1000) {
    stats.eAmount = true;
  }

  return stats;
}

var Index = function Index(_ref) {
  var dispatchGeneFetch = _ref.dispatchGeneFetch,
      _ref$pinnedDragons = _ref.pinnedDragons,
      pinnedDragons = _ref$pinnedDragons === void 0 ? [] : _ref$pinnedDragons,
      _ref$genes = _ref.genes,
      genes = _ref$genes === void 0 ? {} : _ref$genes;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      address = _useState[0],
      setAddress = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      amount = _useState2[0],
      setAmount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      txs = _useState3[0],
      setTxs = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      addrErr = _useState4[0],
      setAddrErr = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      amountErr = _useState5[0],
      setAmountErr = _useState5[1];

  var etherProvider = Object(use_ether_provider__WEBPACK_IMPORTED_MODULE_13__["useEtherProvider"])();
  var myAddress = Object(use_ether_provider__WEBPACK_IMPORTED_MODULE_13__["useAccount"])(etherProvider);

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      usdtContract = _useState6[0],
      setUsdtContract = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('0.0'),
      myBalance = _useState7[0],
      setMyBalance = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (etherProvider) {
      var contract = Object(_artifacts__WEBPACK_IMPORTED_MODULE_5__["getContractInstance"])(etherProvider.getSigner(), 4);
      setUsdtContract(contract);

      if (myAddress) {
        // console.log(myAddress);
        contract.balanceOf(myAddress).then(function (balance) {
          return setMyBalance(new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(balance.toString()).dividedBy(1e6).toString());
        });
      }
    }
  }, [myAddress, etherProvider]);
  return __jsx(_components_Root__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.font,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Bybit Testnet USDT Faucet")), __jsx("div", {
    className: classes.mainCont,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.inputCont,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: classes.cell,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "My Balance: ".concat(myBalance, " TUSDT"))), __jsx("div", {
    className: classes.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    required: true,
    id: 'address',
    label: 'ETH address',
    spellCheck: false,
    error: addrErr,
    helperText: addrErr ? 'eth address incorrect!' : '',
    className: classes.input,
    fullWidth: true,
    value: address,
    placeholder: '0x1234...',
    onChange: function onChange(e) {
      return setAddress(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.smbtn,
    variant: 'contained',
    size: 'small',
    onClick: function onClick(e) {
      return setAddress(myAddress);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Self")), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    required: true,
    id: 'amount',
    label: 'Token Amount',
    type: 'number',
    error: amountErr,
    helperText: amountErr ? 'can only mint up to 1 - 1000 TUSDT' : '',
    className: classes.input,
    fullWidth: true,
    value: amount,
    inputProps: {
      min: 1
    },
    onChange: function onChange(e) {
      return setAmount(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.iconButton,
    "aria-label": 'Mint',
    variant: 'contained',
    onClick: function onClick(e) {
      var _validate = validate(address, amount, myBalance),
          eAddress = _validate.eAddress,
          eAmount = _validate.eAmount;

      setAddrErr(eAddress);
      setAmountErr(eAmount); // console.log(`${eAddress}, ${eAmount}`);

      if (!eAddress && !eAmount) {
        usdtContract.mint(address, new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(amount).times(1e6).toString()).then(function (tx) {
          if (tx.hash) {
            setTxs([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(txs), [tx.hash]));
          }
        });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Mint Token", __jsx(mdi_material_ui_Pickaxe__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.btnIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }))), txs && txs.length > 0 && __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(classes.inputCont, classes.upper),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, txs.map(function (tx) {
    return __jsx("div", {
      key: tx,
      className: classes.tx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("a", {
      target: '_blank',
      href: "https://rinkeby.etherscan.io/tx/".concat(tx),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, _short(tx, 8)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c7fac8aa886f59df223e.hot-update.js.map