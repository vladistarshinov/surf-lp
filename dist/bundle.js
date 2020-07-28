/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js":
/*!**********************************************************************!*\
  !*** ./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js ***!
  \**********************************************************************/
/*! exports provided: _, a, b, c, d, e, f, g, h, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _typeof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _classCallCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _objectWithoutProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _inherits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _possibleConstructorReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _getPrototypeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _slicedToArray; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js":
/*!******************************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-contenteditable-mask-element.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");





var HTMLContenteditableMaskElement =
/*#__PURE__*/
function (_HTMLMaskElement) {
  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["d"])(HTMLContenteditableMaskElement, _HTMLMaskElement);

  function HTMLContenteditableMaskElement() {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, HTMLContenteditableMaskElement);

    return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(HTMLContenteditableMaskElement).apply(this, arguments));
  }

  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(HTMLContenteditableMaskElement, [{
    key: "_unsafeSelect",

    /**
      Sets HTMLElement selection
      @override
    */
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "_unsafeSelectionStart",

    /**
      Returns HTMLElement selection start
      @override
    */
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && selection.anchorOffset;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && this._unsafeSelectionStart + String(selection).length;
    }
  }, {
    key: "value",
    get: function get() {
      // $FlowFixMe
      return this.input.textContent;
    },
    set: function set(value) {
      this.input.textContent = value;
    }
  }]);

  return HTMLContenteditableMaskElement;
}(_html_mask_element_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

/* harmony default export */ __webpack_exports__["default"] = (HTMLContenteditableMaskElement);


/***/ }),

/***/ "./node_modules/imask/esm/controls/html-mask-element.js":
/*!**************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-mask-element.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");




/** Bridge between HTMLElement and {@link Masked} */

var HTMLMaskElement =
/*#__PURE__*/
function (_MaskElement) {
  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["d"])(HTMLMaskElement, _MaskElement);

  /** Mapping between HTMLElement events and mask internal events */

  /** HTMLElement to use mask on */

  /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */
  function HTMLMaskElement(input) {
    var _this;

    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, HTMLMaskElement);

    _this = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(HTMLMaskElement).call(this));
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  /** */
  // $FlowFixMe https://github.com/facebook/flow/issues/2839


  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(HTMLMaskElement, [{
    key: "_unsafeSelect",

    /**
      Sets HTMLElement selection
      @override
    */
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "bindEvents",

    /**
      Binds HTMLElement events to mask internal events
      @override
    */
    value: function bindEvents(handlers) {
      var _this2 = this;

      Object.keys(handlers).forEach(function (event) {
        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
      });
    }
    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;

      Object.keys(this._handlers).forEach(function (event) {
        return _this3._toggleEventHandler(event);
      });
    }
    /** */

  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }

      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }, {
    key: "rootElement",
    get: function get() {
      return this.input.getRootNode ? this.input.getRootNode() : document;
    }
    /**
      Is element in focus
      @readonly
    */

  }, {
    key: "isActive",
    get: function get() {
      //$FlowFixMe
      return this.input === this.rootElement.activeElement;
    }
    /**
      Returns HTMLElement selection start
      @override
    */

  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
  }]);

  return HTMLMaskElement;
}(_mask_element_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].HTMLMaskElement = HTMLMaskElement;

/* harmony default export */ __webpack_exports__["default"] = (HTMLMaskElement);


/***/ }),

/***/ "./node_modules/imask/esm/controls/input.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/controls/input.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../masked/range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");



















/** Listens to element events and controls changes between element and {@link Masked} */

var InputMask =
/*#__PURE__*/
function () {
  /**
    View element
    @readonly
  */

  /**
    Internal {@link Masked} model
    @readonly
  */

  /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
  function InputMask(el, opts) {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, InputMask);

    this.el = el instanceof _mask_element_js__WEBPACK_IMPORTED_MODULE_15__["default"] ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_17__["default"](el) : new _html_mask_element_js__WEBPACK_IMPORTED_MODULE_16__["default"](el);
    this.masked = Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_7__["default"])(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this._bindEvents(); // refresh


    this.updateValue();

    this._onChange();
  }
  /** Read or update mask */


  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(InputMask, [{
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof _masked_date_js__WEBPACK_IMPORTED_MODULE_14__["default"];
    }
  }, {
    key: "_bindEvents",

    /**
      Starts listening to element events
      @protected
    */
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
    /**
      Stops listening to element events
      @protected
     */

  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }
    /**
      Fires custom event
      @protected
     */

  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(function (l) {
        return l.apply(void 0, args);
      });
    }
    /**
      Current selection start
      @readonly
    */

  }, {
    key: "_saveSelection",

    /**
      Stores current selection
      @protected
    */
    value: function _saveSelection()
    /* ev */
    {
      if (this.value !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
    /** Syncronizes model value from view */

  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */

  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue) this.el.value = newValue;
      if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask,
          restOpts = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(opts, ["mask"]);

      var updateMask = !this.maskEquals(mask);
      var updateOpts = !Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["objectIncludes"])(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */

  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

      this._delayUpdateCursor(cursorPos);
    }
    /**
      Delays cursor update to support mobile browsers
      @private
    */

  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;

      this._abortUpdateCursor();

      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function () {
        if (!_this.el) return; // if was destroyed

        _this.cursorPos = _this._changingCursorPos;

        _this._abortUpdateCursor();
      }, 10);
    }
    /**
      Fires custom events
      @protected
    */

  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);

      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }
    /**
      Aborts delayed cursor update
      @private
    */

  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
    /** Aligns cursor to nearest available position */

  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT);
    }
    /** Aligns cursor only if selection is empty */

  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      this.alignCursor();
    }
    /** Adds listener on custom event */

  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];

      this._listeners[ev].push(handler);

      return this;
    }
    /** Removes custom event listener */

  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev]) return this;

      if (!handler) {
        delete this._listeners[ev];
        return this;
      }

      var hIndex = this._listeners[ev].indexOf(handler);

      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }
    /** Handles view input event */

  }, {
    key: "_onInput",
    value: function _onInput(e) {
      this._inputEvent = e;

      this._abortUpdateCursor(); // fix strange IE behavior


      if (!this._selection) return this.updateValue();
      var details = new _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]( // new state
      this.el.value, this.cursorPos, // old state
      this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
    /** Handles view change event and commits model value */

  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }

      this.masked.doCommit();
      this.updateControl();

      this._saveSelection();
    }
    /** Handles view drop event, prevents by default */

  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */

  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents(); // $FlowFixMe why not do so?


      this._listeners.length = 0; // $FlowFixMe

      delete this.el;
    }
  }, {
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set(mask) {
      if (this.maskEquals(mask)) return;

      if (!(mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_5__["default"].Masked) && this.masked.constructor === Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_7__["maskedClass"])(mask)) {
        this.masked.updateOptions({
          mask: mask
        });
        return;
      }

      var masked = Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
        mask: mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
    /** Raw value */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Unmasked value */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Typed unmasked value */

  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */

  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);

      this._saveSelection();
    }
  }]);

  return InputMask;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_5__["default"].InputMask = InputMask;

/* harmony default export */ __webpack_exports__["default"] = (InputMask);


/***/ }),

/***/ "./node_modules/imask/esm/controls/mask-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/controls/mask-element.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");



/**
  Generic element API to use with mask
  @interface
*/
var MaskElement =
/*#__PURE__*/
function () {
  function MaskElement() {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, MaskElement);
  }

  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(MaskElement, [{
    key: "select",

    /** Safely sets element selection */
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",

    /** Should be overriden in subclasses */
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }, {
    key: "selectionStart",

    /** */

    /** */

    /** */

    /** Safely returns selection start */
    get: function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
  }]);

  return MaskElement;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskElement = MaskElement;

/* harmony default export */ __webpack_exports__["default"] = (MaskElement);


/***/ }),

/***/ "./node_modules/imask/esm/core/action-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/action-details.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/imask/esm/core/utils.js");



/** Provides details of changing input */

var ActionDetails =
/*#__PURE__*/
function () {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */
  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, ActionDetails);

    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  /**
    Start changing position
    @readonly
  */


  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(ActionDetails, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
      Inserted symbols count
      @readonly
    */

  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
    /**
      Inserted symbols
      @readonly
    */

  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
      Removed symbols count
      @readonly
    */

  }, {
    key: "removedCount",
    get: function get() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
      this.oldValue.length - this.value.length, 0);
    }
    /**
      Removed symbols
      @readonly
    */

  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
      Unchanged head symbols
      @readonly
    */

  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
    /**
      Unchanged tail symbols
      @readonly
    */

  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
      Remove direction
      @readonly
    */

  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount) return _utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE; // align right if delete at right or if range removed (event with backspace)

      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? _utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT : _utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT;
    }
  }]);

  return ActionDetails;
}();

/* harmony default export */ __webpack_exports__["default"] = (ActionDetails);


/***/ }),

/***/ "./node_modules/imask/esm/core/change-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/change-details.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");


/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/
var ChangeDetails =
/*#__PURE__*/
function () {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */
  function ChangeDetails(details) {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, ChangeDetails);

    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }
  /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */


  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(ChangeDetails, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
    /** Total offset considering all changes */

  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);

  return ChangeDetails;
}();

/* harmony default export */ __webpack_exports__["default"] = (ChangeDetails);


/***/ }),

/***/ "./node_modules/imask/esm/core/continuous-tail-details.js":
/*!****************************************************************!*\
  !*** ./node_modules/imask/esm/core/continuous-tail-details.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");


/** Provides details of continuous extracted tail */
var ContinuousTailDetails =
/*#__PURE__*/
function () {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */
  function ContinuousTailDetails() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : undefined;

    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, ContinuousTailDetails);

    this.value = value;
    this.from = from;
    this.stop = stop;
  }

  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(ContinuousTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.value.length) return '';
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return ContinuousTailDetails;
}();

/* harmony default export */ __webpack_exports__["default"] = (ContinuousTailDetails);


/***/ }),

/***/ "./node_modules/imask/esm/core/holder.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/core/holder.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // currently available only for input-like elements
  return new IMask.InputMask(el, opts);
}

/* harmony default export */ __webpack_exports__["default"] = (IMask);


/***/ }),

/***/ "./node_modules/imask/esm/core/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/imask/esm/core/utils.js ***!
  \**********************************************/
/*! exports provided: DIRECTION, escapeRegExp, forceDirection, indexInDirection, isString, objectIncludes, posInDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION", function() { return DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceDirection", function() { return forceDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexInDirection", function() { return indexInDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectIncludes", function() { return objectIncludes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posInDirection", function() { return posInDirection; });
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");


/** Checks if value is string */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/

var DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};
/**
  Direction
  @enum {string}
*/

/** Returns next char index in direction */
function indexInDirection(pos, direction) {
  if (direction === DIRECTION.LEFT) --pos;
  return pos;
}
/** Returns next char position in direction */

function posInDirection(pos, direction) {
  switch (direction) {
    case DIRECTION.LEFT:
    case DIRECTION.FORCE_LEFT:
      return --pos;

    case DIRECTION.RIGHT:
    case DIRECTION.FORCE_RIGHT:
      return ++pos;

    default:
      return pos;
  }
}
/** */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;

    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;

    default:
      return direction;
  }
}
/** Escapes regular expression control chars */

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

function objectIncludes(b, a) {
  if (a === b) return true;
  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;

    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i])) return false;
    }

    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["_"])(a) === 'object' && Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["_"])(b) === 'object') {
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    }

    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }

  return false;
}
/** Selection range */




/***/ }),

/***/ "./node_modules/imask/esm/imask.js":
/*!*****************************************!*\
  !*** ./node_modules/imask/esm/imask.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./masked/range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controls/mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./controls/html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./controls/html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./controls/input.js */ "./node_modules/imask/esm/controls/input.js");






















/* harmony default export */ __webpack_exports__["default"] = (_core_holder_js__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ }),

/***/ "./node_modules/imask/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/imask/esm/index.js ***!
  \*****************************************/
/*! exports provided: Masked, createMask, MaskedRegExp, MaskedPattern, MaskedRange, MaskedDate, MaskElement, HTMLMaskElement, HTMLContenteditableMaskElement, InputMask, MaskedEnum, MaskedNumber, MaskedFunction, MaskedDynamic, PIPE_TYPE, createPipe, pipe, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Masked", function() { return _masked_base_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMask", function() { return _masked_factory_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedRegExp", function() { return _masked_regexp_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedPattern", function() { return _masked_pattern_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./masked/range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedRange", function() { return _masked_range_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedDate", function() { return _masked_date_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controls/mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskElement", function() { return _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./controls/html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLMaskElement", function() { return _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./controls/html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLContenteditableMaskElement", function() { return _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./controls/input.js */ "./node_modules/imask/esm/controls/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputMask", function() { return _controls_input_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _imask_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./imask.js */ "./node_modules/imask/esm/imask.js");
/* harmony import */ var _masked_enum_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./masked/enum.js */ "./node_modules/imask/esm/masked/enum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedEnum", function() { return _masked_enum_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _masked_number_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./masked/number.js */ "./node_modules/imask/esm/masked/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedNumber", function() { return _masked_number_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _masked_function_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./masked/function.js */ "./node_modules/imask/esm/masked/function.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedFunction", function() { return _masked_function_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./masked/dynamic.js */ "./node_modules/imask/esm/masked/dynamic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedDynamic", function() { return _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _masked_pipe_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./masked/pipe.js */ "./node_modules/imask/esm/masked/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PIPE_TYPE", function() { return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_24__["PIPE_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPipe", function() { return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_24__["createPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_24__["pipe"]; });



























try {
  globalThis.IMask = _imask_js__WEBPACK_IMPORTED_MODULE_19__["default"];
} catch (e) {}

/* harmony default export */ __webpack_exports__["default"] = (_imask_js__WEBPACK_IMPORTED_MODULE_19__["default"]);


/***/ }),

/***/ "./node_modules/imask/esm/masked/base.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/base.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






/** Supported mask type */

/** Provides common masking stuff */
var Masked =
/*#__PURE__*/
function () {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */
  // $FlowFixMe no ideas

  /** Transforms value before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing in the end of editing */

  /** Format typed value to string */

  /** Parse strgin to get typed value */

  /** Enable characters overwriting */

  /** */
  function Masked(opts) {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, Masked);

    this._value = '';

    this._update(Object.assign({}, Masked.DEFAULTS, {}, opts));

    this.isInitialized = true;
  }
  /** Sets and applies new options */


  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(Masked, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length) return;
      this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
      Sets new options
      @protected
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
    /** Mask state */

  }, {
    key: "reset",

    /** Resets value */
    value: function reset() {
      this._value = '';
    }
    /** */

  }, {
    key: "resolve",

    /** Resolve new value */
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }
    /** */

  }, {
    key: "nearestInputPos",

    /** Finds nearest input position in direction */
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    /** Extracts value in range considering flags */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */
    // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tail));
      return tail.appendTo(this);
    }
    /** Appends char */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      ch = this.doPrepare(ch, flags);
      if (!ch) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this._value += ch;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        inserted: ch,
        rawInserted: ch
      });
    }
    /** Appends char */

  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
      var consistentState = this.state;

      var details = this._appendCharRaw(ch, flags);

      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;

        if (appended && checkTail != null) {
          // validation ok, check tail
          var beforeTailState = this.state;

          if (this.overwrite) {
            consistentTail = checkTail.state;
            checkTail.shiftBefore(this.value.length);
          }

          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

          if (appended && tailDetails.inserted) this.state = beforeTailState;
        } // revert all if something went wrong


        if (!appended) {
          details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }

      return details;
    }
    /** Appends optional placeholder at end */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    /** Appends symbols considering flags */
    // $FlowFixMe no ideas

  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(str)) throw new Error('value should be string');
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var checkTail = Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(tail) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tail)) : tail;
      if (flags.tail) flags._beforeTailState = this.state;

      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      } // append tail but aggregate only tailShift


      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      return details;
    }
    /** */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    /** Calls function and reapplies current value */

  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput; // append lost trailing chars at end

      if (this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, '');
      }

      delete this._refreshing;
      return ret;
    }
    /** */

  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized) return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
    /**
      Prepares string before mask processing
      @protected
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
      Validates if value is acceptable
      @protected
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
      Does additional processing in the end of editing
      @protected
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    /** */

  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
    /** */

  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
    /** */

  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var startChangePos = this.nearestInputPos(start, removeDirection);
      var changeDetails = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        tailShift: startChangePos - start // adjust tailShift if start was aligned

      }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
        input: true
      }, tail));
      return changeDetails;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set(state) {
      this._value = state._value;
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.resolve(value);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set(value) {
      this.value = this.doFormat(value);
    }
    /** Value that includes raw user input */

  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }]);

  return Masked;
}();
Masked.DEFAULTS = {
  format: function format(v) {
    return v;
  },
  parse: function parse(v) {
    return v;
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].Masked = Masked;

/* harmony default export */ __webpack_exports__["default"] = (Masked);


/***/ }),

/***/ "./node_modules/imask/esm/masked/date.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/date.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./range.js */ "./node_modules/imask/esm/masked/range.js");














/** Date mask */

var MaskedDate =
/*#__PURE__*/
function (_MaskedPattern) {
  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedDate, _MaskedPattern);

  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /**
    @param {Object} opts
  */
  function MaskedDate(opts) {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, MaskedDate);

    return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDate).call(this, Object.assign({}, MaskedDate.DEFAULTS, {}, opts)));
  }
  /**
    @override
  */


  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(MaskedDate, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;

        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }

      Object.assign(opts.blocks, blocks); // add autofix

      Object.keys(opts.blocks).forEach(function (bk) {
        var b = opts.blocks[bk];
        if (!('autofix' in b)) b.autofix = opts.autofix;
      });

      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDate.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var date = this.date;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */

  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */

  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set(date) {
      this.typedValue = date;
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDate.prototype), "typedValue", this) : null;
    },
    set: function set(value) {
      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDate.prototype), "typedValue", value, this, true);
    }
  }]);

  return MaskedDate;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: function format(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: function parse(str) {
    var _str$split = str.split('.'),
        _str$split2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["i"])(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};

MaskedDate.GET_DEFAULT_BLOCKS = function () {
  return {
    d: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_12__["default"],
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_12__["default"],
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_12__["default"],
      from: 1900,
      to: 9999
    }
  };
};

_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedDate = MaskedDate;

/* harmony default export */ __webpack_exports__["default"] = (MaskedDate);


/***/ }),

/***/ "./node_modules/imask/esm/masked/dynamic.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/dynamic.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");








/** Dynamic mask for choosing apropriate mask in run-time */
var MaskedDynamic =
/*#__PURE__*/
function (_Masked) {
  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedDynamic, _Masked);

  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */
  function MaskedDynamic(opts) {
    var _this;

    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, MaskedDynamic);

    _this = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDynamic).call(this, Object.assign({}, MaskedDynamic.DEFAULTS, {}, opts)));
    _this.currentMask = null;
    return _this;
  }
  /**
    @override
  */


  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(MaskedDynamic, [{
    key: "_update",
    value: function _update(opts) {
      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDynamic.prototype), "_update", this).call(this, opts);

      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return Object(_factory_js__WEBPACK_IMPORTED_MODULE_6__["default"])(m);
        }) : [];
      }
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        var _this$currentMask;

        details.aggregate((_this$currentMask = this.currentMask)._appendChar.apply(_this$currentMask, arguments));
      }

      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset(); // $FlowFixMe - it's ok, we don't change current mask above

          var d = this.currentMask.append(insertValue, {
            raw: true
          });
          details.tailShift = d.inserted.length - prevValueBeforeTail.length;

          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }

      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask2 = this.currentMask).doValidate.apply(_this$currentMask2, args));
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      if (this.currentMask) this.currentMask.reset();
      this.compiledMasks.forEach(function (m) {
        return m.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "remove",

    /**
      @override
    */
    value: function remove() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

      if (this.currentMask) {
        var _this$currentMask3;

        details.aggregate((_this$currentMask3 = this.currentMask).remove.apply(_this$currentMask3, arguments)) // update with dispatch
        .aggregate(this._applyDispatch());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",

    /**
      @override
    */
    value: function extractInput() {
      var _this$currentMask4;

      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractInput.apply(_this$currentMask4, arguments) : '';
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask5, _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.currentMask ? (_this$currentMask5 = this.currentMask).extractTail.apply(_this$currentMask5, args) : (_get3 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask) this.currentMask.doCommit();

      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDynamic.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask6, _get4;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.currentMask ? (_this$currentMask6 = this.currentMask).nearestInputPos.apply(_this$currentMask6, args) : (_get4 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : '';
    },
    set: function set(value) {
      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDynamic.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    },
    set: function set(unmaskedValue) {
      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : '';
    } // probably typedValue should not be used with dynamic
    ,
    set: function set(value) {
      var unmaskedValue = String(value); // double check it

      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }

      this.unmaskedValue = unmaskedValue;
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return !!this.currentMask && this.currentMask.isComplete;
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDynamic.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function (m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set(state) {
      var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(state, ["compiledMasks", "currentMaskRef", "currentMask"]);

      this.compiledMasks.forEach(function (m, mi) {
        return m.state = compiledMasks[mi];
      });

      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }

      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDynamic.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedDynamic.prototype), "overwrite", this);
    },
    set: function set(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }]);

  return MaskedDynamic;
}(_base_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length) return;
    var inputValue = masked.rawInputValue; // simulate input

    var inputs = masked.compiledMasks.map(function (m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight: weight,
        index: index
      };
    }); // pop masks with longer values first

    inputs.sort(function (i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedDynamic = MaskedDynamic;

/* harmony default export */ __webpack_exports__["default"] = (MaskedDynamic);


/***/ }),

/***/ "./node_modules/imask/esm/masked/enum.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/enum.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");













/** Pattern which validates enum values */

var MaskedEnum =
/*#__PURE__*/
function (_MaskedPattern) {
  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedEnum, _MaskedPattern);

  function MaskedEnum() {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, MaskedEnum);

    return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedEnum).apply(this, arguments));
  }

  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(MaskedEnum, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedEnum;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedEnum = MaskedEnum;

/* harmony default export */ __webpack_exports__["default"] = (MaskedEnum);


/***/ }),

/***/ "./node_modules/imask/esm/masked/factory.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/factory.js ***!
  \**************************************************/
/*! exports provided: default, maskedClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskedClass", function() { return maskedClass; });
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");




/** Get Masked class by mask type */

function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  } // $FlowFixMe


  if (mask instanceof RegExp) return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedRegExp; // $FlowFixMe

  if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(mask)) return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedPattern; // $FlowFixMe

  if (mask instanceof Date || mask === Date) return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedDate; // $FlowFixMe

  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedNumber; // $FlowFixMe

  if (Array.isArray(mask) || mask === Array) return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedDynamic; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].Masked && mask.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].Masked) return mask; // $FlowFixMe

  if (mask instanceof Function) return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedFunction; // $FlowFixMe

  if (mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].Masked) return mask.constructor;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  // $FlowFixMe

  return _core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].Masked;
}
/** Creates new {@link Masked} depending on mask type */

function createMask(opts) {
  // $FlowFixMe
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].Masked && opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].Masked) return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].Masked && mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].Masked) return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
  return new MaskedClass(opts);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].createMask = createMask;

/* harmony default export */ __webpack_exports__["default"] = (createMask);



/***/ }),

/***/ "./node_modules/imask/esm/masked/function.js":
/*!***************************************************!*\
  !*** ./node_modules/imask/esm/masked/function.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");







/** Masking by custom Function */

var MaskedFunction =
/*#__PURE__*/
function (_Masked) {
  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedFunction, _Masked);

  function MaskedFunction() {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, MaskedFunction);

    return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedFunction).apply(this, arguments));
  }

  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(MaskedFunction, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;

      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedFunction;
}(_base_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedFunction = MaskedFunction;

/* harmony default export */ __webpack_exports__["default"] = (MaskedFunction);


/***/ }),

/***/ "./node_modules/imask/esm/masked/number.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/number.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");







/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/
var MaskedNumber =
/*#__PURE__*/
function (_Masked) {
  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedNumber, _Masked);

  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */
  function MaskedNumber(opts) {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, MaskedNumber);

    return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedNumber).call(this, Object.assign({}, MaskedNumber.DEFAULTS, {}, opts)));
  }
  /**
    @override
  */


  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(MaskedNumber, [{
    key: "_update",
    value: function _update(opts) {
      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedNumber.prototype), "_update", this).call(this, opts);

      this._updateRegExps();
    }
    /** */

  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      // use different regexp to process user input (more strict, input suffix) and tail shifting
      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      var midInput = '(0|([1-9]+\\d*))?';
      var mid = '\\d*';
      var end = (this.scale ? '(' + Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"])(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"]).join('') + ']', 'g');
      this._thousandsSeparatorRegExp = new RegExp(Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"])(this.thousandsSeparator), 'g');
    }
    /** */

  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    /** */

  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_get2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
    }
    /** */

  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var count = 0;

      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }

      return count;
    }
    /** */

  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;

      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["i"])(_this$_adjustRangeWit, 2);

      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

      this._value = this._removeThousandsSeparators(this.value);

      var appendDetails = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
    /** */

  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }

      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);

      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

      var separatorAroundToPos = this._findSeparatorAround(to);

      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit4 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["i"])(_this$_adjustRangeWit3, 2);

      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);

      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT:
          {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }

            break;
          }

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT:
          {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }

      return cursorPos;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

      var valid = regexp.test(this._removeThousandsSeparators(this.value));

      if (valid) {
        // validate as number
        var number = this.number;
        valid = valid && !isNaN(number) && ( // check min bound for negative values
        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
        this.max == null || this.max <= 0 || this.number <= this.max);
      }

      return valid && Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedNumber.prototype), "doValidate", this).call(this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }

      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedNumber.prototype), "doCommit", this).call(this);
    }
    /** */

  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
        return sign + num;
      }); // add leading zero

      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */

  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value) return value;
      var parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
    },
    set: function set(unmaskedValue) {
      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set(n) {
      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
    }
    /** Parsed Number */

  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set(number) {
      this.typedValue = number;
    }
    /**
      Is negative allowed
      @readonly
    */

  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);

  return MaskedNumber;
}(_base_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedNumber = MaskedNumber;

/* harmony default export */ __webpack_exports__["default"] = (MaskedNumber);


/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");












/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/
var MaskedPattern =
/*#__PURE__*/
function (_Masked) {
  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedPattern, _Masked);

  /** */

  /** */

  /** Single char for empty input */

  /** Show placeholder only when needed */
  function MaskedPattern() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, MaskedPattern);

    // TODO type $Shape<MaskedPatternOptions>={} does not work
    opts.definitions = Object.assign({}, _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_INPUT_DEFINITIONS"], opts.definitions);
    return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedPattern).call(this, Object.assign({}, MaskedPattern.DEFAULTS, {}, opts)));
  }
  /**
    @override
    @param {Object} opts
  */


  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(MaskedPattern, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedPattern.prototype), "_update", this).call(this, opts);

      this._rebuildMask();
    }
    /** */

  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;

      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs) return;
      var unmaskingBlock = false;
      var optionalBlock = false;

      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function () {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            }); // order by key length

            bNames.sort(function (a, b) {
              return b.length - a.length;
            }); // use block name with max length

            var bName = bNames[0];

            if (bName) {
              var maskedBlock = Object(_factory_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));

              if (maskedBlock) {
                _this._blocks.push(maskedBlock); // store block index


                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }

              i += bName.length - 1;
              return "continue";
            }
          }();

          if (_ret === "continue") continue;
        }

        var char = pattern[i];

        var _isInput = char in defs;

        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);

          continue;
        }

        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }

        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }

        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          _isInput = false;
        }

        var def = _isInput ? new _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
          parent: this,
          lazy: this.lazy,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
          char: char,
          isUnmasking: unmaskingBlock
        });

        this._blocks.push(def);
      }
    }
    /**
      @override
    */

  }, {
    key: "reset",

    /**
      @override
    */
    value: function reset() {
      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedPattern.prototype), "reset", this).call(this);

      this._blocks.forEach(function (b) {
        return b.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "doCommit",

    /**
      @override
    */
    value: function doCommit() {
      this._blocks.forEach(function (b) {
        return b.doCommit();
      });

      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedPattern.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "appendTail",

    /**
      @override
    */
    value: function appendTail(tail) {
      return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      ch = this.doPrepare(ch, flags);

      var blockIter = this._mapPosToBlock(this.value.length);

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (!blockIter) return details;

      for (var bi = blockIter.index;; ++bi) {
        var _block = this._blocks[bi];
        if (!_block) break;

        var blockDetails = _block._appendChar(ch, flags);

        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;

      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var chunkTail = new _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
      if (fromPos === toPos) return chunkTail;

      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_9__["default"]) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });

      return chunkTail;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      var input = '';

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
        input += b.extractInput(fromPos, toPos, flags);
      });

      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;

      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }

      return stopBefore;
    }
    /** Appends placeholder depending on laziness */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this.lazy && toBlockIndex == null) return details;

      var startBlockIter = this._mapPosToBlock(this.value.length);

      if (!startBlockIter) return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          var args = b._blocks != null ? [b._blocks.length] : [];

          var bDetails = b._appendPlaceholder.apply(b, args);

          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });

      return details;
    }
    /** Finds block in pos */

  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = '';

      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;

        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    /** */

  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
        return pos += b.value.length;
      }, 0);
    }
    /** */

  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      var fromBlockIter = this._mapPosToBlock(fromPos);

      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos); // process first block


        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          } // process last block


          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var removeDetails = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });

      return removeDetails;
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE;
      // TODO refactor - extract alignblock
      var beginBlockData = this._mapPosToBlock(cursorPos) || {
        index: 0,
        offset: 0
      };
      var beginBlockOffset = beginBlockData.offset,
          beginBlockIndex = beginBlockData.index;
      var beginBlock = this._blocks[beginBlockIndex];
      if (!beginBlock) return cursorPos;
      var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["forceDirection"])(direction));
      }

      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
      var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

      if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE) {
        // NONE direction used to calculate start input position if no chars were removed
        // FOR NONE:
        // -
        // input|any
        // ->
        //  any|input
        // <-
        //  filled-input|any
        // check if first block at left is input
        if (searchBlockIndex > 0) {
          var blockIndexAtLeft = searchBlockIndex - 1;
          var blockAtLeft = this._blocks[blockIndexAtLeft];
          var blockInputPos = blockAtLeft.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE); // is input

          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
            return this._blockStartPos(searchBlockIndex);
          }
        } // ->


        var firstInputAtRight = searchBlockIndex;

        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
          var blockAtRight = this._blocks[bi];

          var _blockInputPos = blockAtRight.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE);

          if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
            return this._blockStartPos(bi) + _blockInputPos;
          }
        } // <-
        // find first non-fixed symbol


        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
          var _block3 = this._blocks[_bi];

          var _blockInputPos2 = _block3.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE); // is input


          if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
            return this._blockStartPos(_bi) + _block3.value.length;
          }
        }

        return cursorPos;
      }

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT) {
        // -
        //  any|filled-input
        // <-
        //  any|first not empty is not-len-aligned
        //  not-0-aligned|any
        // ->
        //  any|not-len-aligned or end
        // check if first block at right is filled input
        var firstFilledBlockIndexAtRight;

        for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
          if (this._blocks[_bi2].value) {
            firstFilledBlockIndexAtRight = _bi2;
            break;
          }
        }

        if (firstFilledBlockIndexAtRight != null) {
          var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

          var _blockInputPos3 = filledBlock.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT);

          if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
            // filled block is input
            return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
          }
        } // <-
        // find this vars


        var firstFilledInputBlockIndex = -1;
        var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
          var _block4 = this._blocks[_bi3];

          var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT);

          if (!_block4.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

          if (_blockInputPos4 !== 0) {
            if (_blockInputPos4 !== _block4.value.length) {
              // aligned inside block - return immediately
              return this._blockStartPos(_bi3) + _blockInputPos4;
            } else {
              // found filled
              firstFilledInputBlockIndex = _bi3;
              break;
            }
          }
        }

        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT) {
          // try find first empty input before start searching position only when not forced
          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
            var _block5 = this._blocks[_bi4];

            var _blockInputPos5 = _block5.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE);

            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

            if (blockAlignedPos > cursorPos) break; // if block is not lazy input

            if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
          }
        } // process overflow


        if (firstFilledInputBlockIndex >= 0) {
          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
        } // for lazy if has aligned left inside fixed and has came to the start - use start position


        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
          return 0;
        }

        if (firstEmptyInputBlockIndex != null) {
          return this._blockStartPos(firstEmptyInputBlockIndex);
        } // find first input


        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
          var _block6 = this._blocks[_bi5];

          var _blockInputPos6 = _block6.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE); // is input


          if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
            return this._blockStartPos(_bi5) + _blockInputPos6;
          }
        }

        return 0;
      }

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT) {
        // ->
        //  any|not-len-aligned and filled
        //  any|not-len-aligned
        // <-
        //  not-0-aligned or start|any
        var firstInputBlockAlignedIndex;
        var firstInputBlockAlignedPos;

        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
          var _block7 = this._blocks[_bi6];

          var _blockInputPos7 = _block7.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE);

          if (_blockInputPos7 !== _block7.value.length) {
            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
            firstInputBlockAlignedIndex = _bi6;
            break;
          }
        }

        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
            var _block8 = this._blocks[_bi7];

            var _blockInputPos8 = _block8.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT);

            if (_blockInputPos8 !== _block8.value.length) {
              return this._blockStartPos(_bi7) + _blockInputPos8;
            }
          }

          return direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
        }

        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
          var _block9 = this._blocks[_bi8];

          var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT);

          if (_blockInputPos9 !== 0) {
            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

            if (alignedPos >= cursorPos) return alignedPos;
            break;
          }
        }
      }

      return cursorPos;
    }
    /** Get block by name */

  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */

  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;

      var indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(function (gi) {
        return _this4._blocks[gi];
      });
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedPattern.prototype), "state", this), {
        _blocks: this._blocks.map(function (b) {
          return b.state;
        })
      });
    },
    set: function set(state) {
      var _blocks = state._blocks,
          maskedState = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(state, ["_blocks"]);

      this._blocks.forEach(function (b, bi) {
        return b.state = _blocks[bi];
      });

      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedPattern.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isComplete;
      });
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function (str, b) {
        return str += b.unmaskedValue;
      }, '');
    },
    set: function set(unmaskedValue) {
      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // TODO return _value when not in change?
      return this._blocks.reduce(function (str, b) {
        return str += b.value;
      }, '');
    },
    set: function set(value) {
      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedPattern.prototype), "value", value, this, true);
    }
  }]);

  return MaskedPattern;
}(_base_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__["default"];
MaskedPattern.FixedDefinition = _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_8__["default"];

function isInput(block) {
  if (!block) return false;
  var value = block.value;
  return !value || block.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE) !== value.length;
}

_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedPattern = MaskedPattern;

/* harmony default export */ __webpack_exports__["default"] = (MaskedPattern);


/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js":
/*!*********************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/chunk-tail-details.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






var ChunksTailDetails =
/*#__PURE__*/
function () {
  /** */
  function ChunksTailDetails() {
    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, ChunksTailDetails);

    this.chunks = chunks;
    this.from = from;
  }

  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(ChunksTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join('');
    } // $FlowFixMe no ideas

  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk)) return;
      if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(tailChunk)) tailChunk = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && ( // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;

      if (tailChunk instanceof _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          var firstTailChunk;

          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        } // if tail chunk still has value


        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      // $FlowFixMe
      if (!(masked instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedPattern)) {
        var tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.toString());
        return tail.appendTo(masked);
      }

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];

        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

        var stop = chunk.stop;
        var chunkBlock = void 0;

        if (stop != null && ( // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }

          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }

        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last

          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted; // get not inserted chars

          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.chunks.length) return '';
      var chunkShiftPos = pos - this.from;
      var ci = 0;

      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shiftBefore(chunkShiftPos);

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function (c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set(state) {
      var chunks = state.chunks,
          props = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(state, ["chunks"]);

      Object.assign(this, props);
      this.chunks = chunks.map(function (cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](); // $FlowFixMe already checked above

        chunk.state = cstate;
        return chunk;
      });
    }
  }]);

  return ChunksTailDetails;
}();

/* harmony default export */ __webpack_exports__["default"] = (ChunksTailDetails);


/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/fixed-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/fixed-definition.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");





var PatternFixedDefinition =
/*#__PURE__*/
function () {
  /** */

  /** */

  /** */

  /** */
  function PatternFixedDefinition(opts) {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, PatternFixedDefinition);

    Object.assign(this, opts);
    this._value = '';
  }

  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(PatternFixedDefinition, [{
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE;
      var minPos = 0;
      var maxPos = this._value.length;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT:
          return minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this._value) return details;
      var appended = this.char === str[0];
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this._value) return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]('');
    } // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str, flags);

      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }

      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {}
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : '';
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return PatternFixedDefinition;
}();

/* harmony default export */ __webpack_exports__["default"] = (PatternFixedDefinition);


/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/input-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/input-definition.js ***!
  \*******************************************************************/
/*! exports provided: default, DEFAULT_INPUT_DEFINITIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_INPUT_DEFINITIONS", function() { return DEFAULT_INPUT_DEFINITIONS; });
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factory.js */ "./node_modules/imask/esm/masked/factory.js");






var DEFAULT_INPUT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
/** */

var PatternInputDefinition =
/*#__PURE__*/
function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternInputDefinition(opts) {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, PatternInputDefinition);

    var mask = opts.mask,
        blockOpts = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(opts, ["mask"]);

    this.masked = Object(_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
      mask: mask
    });
    Object.assign(this, blockOpts);
  }

  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(PatternInputDefinition, [{
    key: "reset",
    value: function reset() {
      this._isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      if (fromPos === 0 && toPos >= 1) {
        this._isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this._isFilled) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var state = this.masked.state; // simulate input

      var details = this.masked._appendChar(str, flags);

      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }

      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }

      details.skip = !details.inserted && !this.isOptional;
      this._isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;

      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this._isFilled || this.isOptional) return details;
      this._isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;

      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;

      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;

      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        _isFilled: this._isFilled
      };
    },
    set: function set(state) {
      this.masked.state = state.masked;
      this._isFilled = state._isFilled;
    }
  }]);

  return PatternInputDefinition;
}();

/* harmony default export */ __webpack_exports__["default"] = (PatternInputDefinition);



/***/ }),

/***/ "./node_modules/imask/esm/masked/pipe.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/pipe.js ***!
  \***********************************************/
/*! exports provided: PIPE_TYPE, createPipe, pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIPE_TYPE", function() { return PIPE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPipe", function() { return createPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");





/** Mask pipe source and destination types */

var PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */

function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = Object(_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mask);
  return function (value) {
    return masked.runIsolated(function (m) {
      m[from] = value;
      return m[to];
    });
  };
}
/** Pipes value through mask depending on mask type, source and destination options */

function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }

  return createPipe.apply(void 0, pipeArgs)(value);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].PIPE_TYPE = PIPE_TYPE;
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].createPipe = createPipe;
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].pipe = pipe;




/***/ }),

/***/ "./node_modules/imask/esm/masked/range.js":
/*!************************************************!*\
  !*** ./node_modules/imask/esm/masked/range.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");













/** Pattern which accepts ranges */

var MaskedRange =
/*#__PURE__*/
function (_MaskedPattern) {
  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedRange, _MaskedPattern);

  function MaskedRange() {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, MaskedRange);

    return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedRange).apply(this, arguments));
  }

  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(MaskedRange, [{
    key: "_update",

    /**
      @override
    */
    value: function _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, '0');
      var toStr = String(opts.to).padStart(maxLength, '0');
      var sameCharsCount = 0;

      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }

      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedRange.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = '';
      var maxstr = '';

      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["i"])(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];

      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }

      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      str = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
      if (!this.autofix) return str;
      var fromStr = String(this.from).padStart(this.maxLength, '0');
      var toStr = String(this.to).padStart(this.maxLength, '0');
      var val = this.value;
      var prepStr = '';

      for (var ci = 0; ci < str.length; ++ci) {
        var nextVal = val + prepStr + str[ci];

        var _this$boundaries = this.boundaries(nextVal),
            _this$boundaries2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["i"])(_this$boundaries, 2),
            minstr = _this$boundaries2[0],
            maxstr = _this$boundaries2[1];

        if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
      }

      return prepStr;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

      var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["i"])(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: "_matchFrom",

    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */
    get: function get() {
      return this.maxLength - String(this.from).length;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
    }
  }]);

  return MaskedRange;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedRange = MaskedRange;

/* harmony default export */ __webpack_exports__["default"] = (MaskedRange);


/***/ }),

/***/ "./node_modules/imask/esm/masked/regexp.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/regexp.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-3c58f0e3.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");







/** Masking by RegExp */

var MaskedRegExp =
/*#__PURE__*/
function (_Masked) {
  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedRegExp, _Masked);

  function MaskedRegExp() {
    Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this, MaskedRegExp);

    return Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedRegExp).apply(this, arguments));
  }

  Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(MaskedRegExp, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };

      Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_3c58f0e3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedRegExp;
}(_base_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedRegExp = MaskedRegExp;

/* harmony default export */ __webpack_exports__["default"] = (MaskedRegExp);


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


/***/ }),

/***/ "./node_modules/wowjs/dist/wow.js":
/*!****************************************!*\
  !*** ./node_modules/wowjs/dist/wow.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    Util.prototype.createEvent = function(event, bubble, cancel, detail) {
      var customEvent;
      if (bubble == null) {
        bubble = false;
      }
      if (cancel == null) {
        cancel = false;
      }
      if (detail == null) {
        detail = null;
      }
      if (document.createEvent != null) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        customEvent = document.createEventObject();
        customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
      return customEvent;
    };

    Util.prototype.emitEvent = function(elem, event) {
      if (elem.dispatchEvent != null) {
        return elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        return elem[event]();
      } else if (("on" + event) in (elem != null)) {
        return elem["on" + event]();
      }
    };

    Util.prototype.addEvent = function(elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };

    Util.prototype.removeEvent = function(elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };

    Util.prototype.innerHeight = function() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };

    return Util;

  })();

  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }

    WeakMap.prototype.get = function(key) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };

    WeakMap.prototype.set = function(key, value) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };

    return WeakMap;

  })());

  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    MutationObserver.notSupported = true;

    MutationObserver.prototype.observe = function() {};

    return MutationObserver;

  })());

  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
    this.getPropertyValue = function(prop) {
      var ref;
      if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function(_, _char) {
          return _char.toUpperCase();
        });
      }
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
    };
    return this;
  };

  getComputedStyleRX = /(\-([a-z]){1})/g;

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: null,
      scrollContainer: null
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = bind(this.scrollCallback, this);
      this.scrollHandler = bind(this.scrollHandler, this);
      this.resetAnimation = bind(this.resetAnimation, this);
      this.start = bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      this.animationNameCache = new WeakMap();
      this.wowEvent = this.util().createEvent(this.config.boxClass);
    }

    WOW.prototype.init = function() {
      var ref;
      this.element = window.document.documentElement;
      if ((ref = document.readyState) === "interactive" || ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };

    WOW.prototype.start = function() {
      var box, j, len, ref;
      this.stopped = false;
      this.boxes = (function() {
        var j, len, ref, results;
        ref = this.element.querySelectorAll("." + this.config.boxClass);
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      this.all = (function() {
        var j, len, ref, results;
        ref = this.boxes;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          ref = this.boxes;
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            this.applyStyle(box, true);
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        this.util().addEvent(window, 'resize', this.scrollHandler);
        this.interval = setInterval(this.scrollCallback, 50);
      }
      if (this.config.live) {
        return new MutationObserver((function(_this) {
          return function(records) {
            var k, len1, node, record, results;
            results = [];
            for (k = 0, len1 = records.length; k < len1; k++) {
              record = records[k];
              results.push((function() {
                var l, len2, ref1, results1;
                ref1 = record.addedNodes || [];
                results1 = [];
                for (l = 0, len2 = ref1.length; l < len2; l++) {
                  node = ref1[l];
                  results1.push(this.doSync(node));
                }
                return results1;
              }).call(_this));
            }
            return results;
          };
        })(this)).observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };

    WOW.prototype.stop = function() {
      this.stopped = true;
      this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
      this.util().removeEvent(window, 'resize', this.scrollHandler);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.sync = function(element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };

    WOW.prototype.doSync = function(element) {
      var box, j, len, ref, results;
      if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;
      ref = element.querySelectorAll("." + this.config.boxClass);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        if (indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);
          this.all.push(box);
          if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, true);
          }
          results.push(this.scrolled = true);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      box.className = box.className + " " + this.config.animateClass;
      if (this.config.callback != null) {
        this.config.callback(box);
      }
      this.util().emitEvent(box, this.wowEvent);
      this.util().addEvent(box, 'animationend', this.resetAnimation);
      this.util().addEvent(box, 'oanimationend', this.resetAnimation);
      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
      return box;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate((function(_this) {
        return function() {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      })(this));
    };

    WOW.prototype.animate = (function() {
      if ('requestAnimationFrame' in window) {
        return function(callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function(callback) {
          return callback();
        };
      }
    })();

    WOW.prototype.resetStyle = function() {
      var box, j, len, ref, results;
      ref = this.boxes;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        results.push(box.style.visibility = 'visible');
      }
      return results;
    };

    WOW.prototype.resetAnimation = function(event) {
      var target;
      if (event.type.toLowerCase().indexOf('animationend') >= 0) {
        target = event.target || event.srcElement;
        return target.className = target.className.replace(this.config.animateClass, '').trim();
      }
    };

    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;
    };

    WOW.prototype.vendors = ["moz", "webkit"];

    WOW.prototype.vendorSet = function(elem, properties) {
      var name, results, value, vendor;
      results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        results.push((function() {
          var j, len, ref, results1;
          ref = this.vendors;
          results1 = [];
          for (j = 0, len = ref.length; j < len; j++) {
            vendor = ref[j];
            results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    WOW.prototype.vendorCSS = function(elem, property) {
      var j, len, ref, result, style, vendor;
      style = getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      ref = this.vendors;
      for (j = 0, len = ref.length; j < len; j++) {
        vendor = ref[j];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };

    WOW.prototype.animationName = function(box) {
      var animationName, error;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };

    WOW.prototype.cacheAnimationName = function(box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };

    WOW.prototype.cachedAnimationName = function(box) {
      return this.animationNameCache.get(box);
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var j, len, ref, results;
          ref = this.boxes;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            results.push(box);
          }
          return results;
        }).call(this);
        if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util != null ? this._util : this._util = new Util();
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);


/***/ }),

/***/ "./src/assets/images/header/logo/header-logo.svg":
/*!*******************************************************!*\
  !*** ./src/assets/images/header/logo/header-logo.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/header/logo/header-logo.svg";

/***/ }),

/***/ "./src/assets/images/header/navigation/icon-shop.svg":
/*!***********************************************************!*\
  !*** ./src/assets/images/header/navigation/icon-shop.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/header/navigation/icon-shop.svg";

/***/ }),

/***/ "./src/assets/images/header/navigation/icon-sleep.svg":
/*!************************************************************!*\
  !*** ./src/assets/images/header/navigation/icon-sleep.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/header/navigation/icon-sleep.svg";

/***/ }),

/***/ "./src/assets/images/header/navigation/icon-surf.svg":
/*!***********************************************************!*\
  !*** ./src/assets/images/header/navigation/icon-surf.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/header/navigation/icon-surf.svg";

/***/ }),

/***/ "./src/assets/images/header/navigation/icon-travel.svg":
/*!*************************************************************!*\
  !*** ./src/assets/images/header/navigation/icon-travel.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/header/navigation/icon-travel.svg";

/***/ }),

/***/ "./src/assets/images/header/pagination/arrow-left.svg":
/*!************************************************************!*\
  !*** ./src/assets/images/header/pagination/arrow-left.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/header/pagination/arrow-left.svg";

/***/ }),

/***/ "./src/assets/images/header/pagination/arrow-right.svg":
/*!*************************************************************!*\
  !*** ./src/assets/images/header/pagination/arrow-right.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/header/pagination/arrow-right.svg";

/***/ }),

/***/ "./src/assets/images/shop/slider/bag-logo.png":
/*!****************************************************!*\
  !*** ./src/assets/images/shop/slider/bag-logo.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/shop/slider/bag-logo.png";

/***/ }),

/***/ "./src/assets/images/shop/slider/fin-logo.png":
/*!****************************************************!*\
  !*** ./src/assets/images/shop/slider/fin-logo.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/shop/slider/fin-logo.png";

/***/ }),

/***/ "./src/assets/images/shop/slider/finlight-logo.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/shop/slider/finlight-logo.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/shop/slider/finlight-logo.png";

/***/ }),

/***/ "./src/assets/images/shop/slider/leashb-logo.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/shop/slider/leashb-logo.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/shop/slider/leashb-logo.png";

/***/ }),

/***/ "./src/assets/images/shop/slider/leashg-logo.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/shop/slider/leashg-logo.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/shop/slider/leashg-logo.png";

/***/ }),

/***/ "./src/assets/images/shop/slider/pura-logo.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/shop/slider/pura-logo.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/shop/slider/pura-logo.png";

/***/ }),

/***/ "./src/assets/images/shop/slider/stomppad-logo.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/shop/slider/stomppad-logo.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/shop/slider/stomppad-logo.png";

/***/ }),

/***/ "./src/assets/images/shop/slider/surfboard-slide-1.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/shop/slider/surfboard-slide-1.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/shop/slider/surfboard-slide-1.png";

/***/ }),

/***/ "./src/assets/images/shop/slider/surfboard-slide-2.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/shop/slider/surfboard-slide-2.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/shop/slider/surfboard-slide-2.png";

/***/ }),

/***/ "./src/assets/images/shop/slider/surfboard-slide-3.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/shop/slider/surfboard-slide-3.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/shop/slider/surfboard-slide-3.png";

/***/ }),

/***/ "./src/assets/images/shop/slider/surfboard-slide-4.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/shop/slider/surfboard-slide-4.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/shop/slider/surfboard-slide-4.png";

/***/ }),

/***/ "./src/assets/images/shop/slider/wax-logo.png":
/*!****************************************************!*\
  !*** ./src/assets/images/shop/slider/wax-logo.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/shop/slider/wax-logo.png";

/***/ }),

/***/ "./src/assets/images/sleep/slider/star.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/sleep/slider/star.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sleep/slider/star.svg";

/***/ }),

/***/ "./src/assets/images/surf/map/content-icon-1.svg":
/*!*******************************************************!*\
  !*** ./src/assets/images/surf/map/content-icon-1.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/surf/map/content-icon-1.svg";

/***/ }),

/***/ "./src/assets/images/surf/map/content-icon-2.svg":
/*!*******************************************************!*\
  !*** ./src/assets/images/surf/map/content-icon-2.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/surf/map/content-icon-2.svg";

/***/ }),

/***/ "./src/assets/images/surf/map/content-icon-3.svg":
/*!*******************************************************!*\
  !*** ./src/assets/images/surf/map/content-icon-3.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/surf/map/content-icon-3.svg";

/***/ }),

/***/ "./src/assets/images/travel/slider/avia-logo-1.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/travel/slider/avia-logo-1.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/travel/slider/avia-logo-1.svg";

/***/ }),

/***/ "./src/assets/images/travel/slider/avia-logo-2.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/travel/slider/avia-logo-2.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/travel/slider/avia-logo-2.svg";

/***/ }),

/***/ "./src/assets/images/travel/slider/avia-logo-3.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/travel/slider/avia-logo-3.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/travel/slider/avia-logo-3.svg";

/***/ }),

/***/ "./src/assets/images/travel/slider/avia-logo-4.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/travel/slider/avia-logo-4.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/travel/slider/avia-logo-4.svg";

/***/ }),

/***/ "./src/assets/images/travel/slider/avia-logo-5.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/travel/slider/avia-logo-5.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/travel/slider/avia-logo-5.svg";

/***/ }),

/***/ "./src/assets/images/travel/slider/avia-logo-6.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/travel/slider/avia-logo-6.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/travel/slider/avia-logo-6.svg";

/***/ }),

/***/ "./src/assets/images/travel/slider/avia-logo-7.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/travel/slider/avia-logo-7.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/travel/slider/avia-logo-7.svg";

/***/ }),

/***/ "./src/assets/images/travel/slider/avia-logo-8.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/travel/slider/avia-logo-8.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/travel/slider/avia-logo-8.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_index_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/index.pug */ "./src/templates/index.pug");
/* harmony import */ var _templates_index_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_index_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/main.js */ "./src/scripts/main.js");

// Import styles

// Import scripts

console.log('all files loaded');

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/scripts/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ "./src/scripts/modules/calc.js");
/* harmony import */ var _modules_wowMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/wowMobile */ "./src/scripts/modules/wowMobile.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modals */ "./src/scripts/modules/modals.js");
/* harmony import */ var _modules_pulseBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pulseBtn */ "./src/scripts/modules/pulseBtn.js");
/* harmony import */ var _modules_currentDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/currentDate */ "./src/scripts/modules/currentDate.js");
/* harmony import */ var _modules_currentDate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_currentDate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/anchor */ "./src/scripts/modules/anchor.js");
/* harmony import */ var _modules_phonemask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/phonemask */ "./src/scripts/modules/phonemask.js");
/* harmony import */ var _modules_menuBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/menuBtn */ "./src/scripts/modules/menuBtn.js");
/* harmony import */ var _modules_shopDots__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/shopDots */ "./src/scripts/modules/shopDots.js");
/* harmony import */ var _modules_callbackWidget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/callbackWidget */ "./src/scripts/modules/callbackWidget.js");
/* harmony import */ var _modules_focusModalsInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/focusModalsInput */ "./src/scripts/modules/focusModalsInput.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/forms */ "./src/scripts/modules/forms.js");
/* harmony import */ var _modules_blog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/blog */ "./src/scripts/modules/blog.js");
















window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    Object(_modules_modals__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_menuBtn__WEBPACK_IMPORTED_MODULE_8__["default"])('.aside__nav', '.menu__btn');
    Object(_modules_shopDots__WEBPACK_IMPORTED_MODULE_9__["default"])('.surfboard-info__dots');
    Object(_modules_focusModalsInput__WEBPACK_IMPORTED_MODULE_11__["default"])('.info-box__data');
    Object(_modules_callbackWidget__WEBPACK_IMPORTED_MODULE_10__["default"])();
    Object(_modules_forms__WEBPACK_IMPORTED_MODULE_12__["default"])();
    Object(_modules_blog__WEBPACK_IMPORTED_MODULE_13__["default"])();
});

/***/ }),

/***/ "./src/scripts/modules/anchor.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/anchor.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const anchor = [...document.querySelectorAll('a[href^="#"]')],
      animationTime = 1500,
      framesCount = 100;

anchor.forEach(item => {
    item.addEventListener('click', e => {
        if (e.target) {
            e.preventDefault();
        }

        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

        let scroller = setInterval(function () {
            let scrollBy = coordY / framesCount;

            if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {

                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
        }, animationTime / framesCount);
    });
});

/* harmony default export */ __webpack_exports__["default"] = (anchor);

/***/ }),

/***/ "./src/scripts/modules/blog.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/blog.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const blog = () => {

  const btnToBlog = document.querySelectorAll('.btn-to-blog'),
        btnFromBlog = document.querySelector('.btn-from-blog'),
        btnFromDescription = document.querySelector('.btn-from-description'),
        header = document.querySelector('.header'),
        surf = document.querySelector('.surf'),
        travel = document.querySelector('.travel'),
        sleep = document.querySelector('.sleep'),
        shop = document.querySelector('.shop'),
        footer = document.querySelector('.footer'),
        cardsBlog = document.querySelector('.cards-blog'),
        blog = document.querySelector('.blog'),
        beach = document.querySelector('.beach'),
        cardsBeach = document.querySelector('.cards-beach'),
        cardsImg = document.querySelector('.cards-img'),
        cardDescription = document.querySelector('.card-description'),
        beachTitle = document.querySelector('.beach-title'),
        ratingStar = document.querySelector('.rating'),
        priceFrom = document.querySelector('.price'),
        category = document.querySelector('.category');

  const getData = async url => {

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка по адресу ${url}, 
                            статус ошибки ${response.status}!`);
    }

    return await response.json();
  };

  const createCardRestaurant = features => {

    const {
      image,
      name,
      price,
      products,
      city,
      country,
      description,
      rating
    } = features;

    const card = document.createElement('a');
    card.classList = 'card card-blog';
    card.products = products;
    card.beach = [name, rating, description, city, country, image];

    card.insertAdjacentHTML('beforeend', `
              <img src="${image}" alt="image" class="card-image dark-bg"/>
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">${name}</h3>
                  <span class="card-tag tag">From ${price} $</span>
                </div>
                <div class="card-info">
                  <div class="category">${city} | ${country}</div>
                  <div class="rating">${rating}</div>
                </div>
              </div>
          `);

    cardsBlog.insertAdjacentElement('beforeend', card);
  };

  const openGoods = event => {
    const target = event.target;

    const click = target.closest('.card-blog');

    if (click) {

      const [name, rating, description, city, country, image] = click.beach;

      cardsBeach.textContent = '';
      blog.classList.add('hide');
      beach.classList.remove('hide');
      btnFromBlog.classList.add('hide');
      btnFromDescription.classList.remove('hide');

      beachTitle.textContent = name;
      ratingStar.textContent = rating;
      //priceFrom.textContent = `From ${price} $`;
      category.textContent = `${city} | ${country}`;
      cardsImg.src = image;
      cardDescription.textContent = description;
    }
  };

  btnToBlog.forEach(item => {
    item.addEventListener('click', e => {
      if (e.target) {
        e.preventDefault();
      }

      blog.classList.remove('hide');
      btnFromBlog.classList.remove('hide');
      header.classList.add('hide');
      surf.classList.add('hide');
      travel.classList.add('hide');
      sleep.classList.add('hide');
      shop.classList.add('hide');
      footer.classList.add('hide');
    });
  });

  btnFromBlog.addEventListener('click', () => {
    blog.classList.add('hide');
    header.classList.remove('hide');
    surf.classList.remove('hide');
    travel.classList.remove('hide');
    sleep.classList.remove('hide');
    shop.classList.remove('hide');
    footer.classList.remove('hide');
    btnFromBlog.classList.add('hide');
  });

  btnFromDescription.addEventListener('click', () => {
    blog.classList.remove('hide');
    beach.classList.add('hide');
    btnFromBlog.classList.remove('hide');
    btnFromDescription.classList.add('hide');
  });

  function init() {

    getData('../../assets/db/blog.json').then(data => {
      data.forEach(createCardRestaurant);
    });

    cardsBlog.addEventListener('click', openGoods);
  }

  init();
};

/* harmony default export */ __webpack_exports__["default"] = (blog);

/***/ }),

/***/ "./src/scripts/modules/calc.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/calc.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../../assets/images/sleep/slider/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="../../assets/images/sleep/slider/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.quantity').each(function () {
  var spinner = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

  btnUp.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
});

let sum = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nights').val() * jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sum').data('nights') + (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.guests').val() - 1) * jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sum').data('guests');
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sum').html('$' + sum);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.quantity-button').on('click', function () {
  var parents = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.content-slider__info');
  let sum = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nights', parents).val() * jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sum', parents).data('nights') + (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.guests', parents).val() - 1) * jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sum', parents).data('guests');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sum', parents).html('$' + sum);
});

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.quantity').each(function () {
  var parents = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.content-slider__info');
  let sum = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nights', parents).val() * jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sum', parents).data('nights') + (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.guests', parents).val() - 1) * jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sum', parents).data('guests');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sum', parents).html('$' + sum);
});

/***/ }),

/***/ "./src/scripts/modules/callbackWidget.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/callbackWidget.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const callbackWidget = () => {
      const btnWidget = (BtnSelector, MenuSelector) => {
            const menu = document.querySelector(MenuSelector),
                  btn = document.querySelector(BtnSelector);

            btn.addEventListener('click', e => {
                  if (e.target) {
                        e.preventDefault();
                  }

                  menu.classList.toggle(MenuSelector.slice(1) + '__active');
                  btn.classList.toggle(BtnSelector.slice(1) + '__active');
            });
      };

      const callbackPlugin = (BtnSelector, ModalSelector1, ModalSelector2) => {
            const modalSelector1 = document.querySelector(ModalSelector1),
                  modalSelector2 = document.querySelector(ModalSelector2),
                  btnQuestion = document.querySelector(BtnSelector);

            btnQuestion.addEventListener('click', e => {
                  if (e.target) {
                        e.preventDefault();
                  }

                  modalSelector1.classList.toggle('active');
                  modalSelector2.classList.remove('active');
            });
      };

      btnWidget('.btn-pulse', '.menu-callback');
      callbackPlugin('.btn-question', '.form-wrapper__feedback', '.form-wrapper__callback');
      callbackPlugin('.btn-phone', '.form-wrapper__callback', '.form-wrapper__feedback');
};
/* harmony default export */ __webpack_exports__["default"] = (callbackWidget);

/***/ }),

/***/ "./src/scripts/modules/currentDate.js":
/*!********************************************!*\
  !*** ./src/scripts/modules/currentDate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

document.getElementById('day').innerHTML = day;
document.getElementById('m_y').innerHTML = month + ' | ' + year;

/***/ }),

/***/ "./src/scripts/modules/focusModalsInput.js":
/*!*************************************************!*\
  !*** ./src/scripts/modules/focusModalsInput.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const focusModalsInput = InfoSelector => {
    const info = document.querySelectorAll(InfoSelector);

    info.forEach(item => {
        item.addEventListener('focus', () => {
            item.parentNode.classList.add('focus');
        });

        item.addEventListener('blur', () => {
            if (item.value == '') {
                item.parentNode.classList.remove('focus');
            }
        });
    });
};

/* harmony default export */ __webpack_exports__["default"] = (focusModalsInput);

/***/ }),

/***/ "./src/scripts/modules/forms.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/forms.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка...',
        success: 'Cпасибо! Мы свяжемся с вами через несколько минут!',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading; // textContent === innerHTML
        document.querySelector('.status').style.color = "yellow";
        document.querySelector('.status').style.textTransform = "capitalize";
        let result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            postData('../../assets/telegramAPI/server.php', formData).then(result => {
                console.log(result);
                statusMessage.textContent = message.success;
                statusMessage.style.color = "lime";
            }).catch(() => {
                statusMessage.textContent = message.failure;
                statusMessage.style.color = "red";
            }).finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                }, 5000);
            });
        });
    });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/scripts/modules/menuBtn.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/menuBtn.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menuBtn = (menuSelector, BtnSelector) => {
  const menu = document.querySelector(menuSelector),
        btn = document.querySelector(BtnSelector);

  btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    btn.classList.toggle('active');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (menuBtn);

/***/ }),

/***/ "./src/scripts/modules/modals.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/modals.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector) => {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', e => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.classList.remove('bounceOutDown');
                modal.classList.add('zoomIn');
                window.setTimeout(function () {
                    modal.style.display = "block";
                }, 500);
            });
        });

        close.addEventListener('click', () => {
            modal.classList.add('bounceOutDown');
            modal.classList.remove('zoomIn');
            window.setTimeout(function () {
                modal.style.display = "none";
            }, 500);
        });

        modal.addEventListener('click', e => {
            if (e.target === modal) {
                modal.classList.add('bounceOutDown');
                modal.classList.remove('zoomIn');
                window.setTimeout(function () {
                    modal.style.display = "none";
                }, 500);
            }
        });
    };

    const showModalByTime = (selector, time) => {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    };

    bindModal('.shop-btn', '.overlay', '.overlay .popup-close');
    showModalByTime('.overlay', 60000);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/scripts/modules/phonemask.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/phonemask.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");


const phonemask = document.querySelectorAll('.popup-form__input');

phonemask.forEach(item => {
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  const mask = Object(imask__WEBPACK_IMPORTED_MODULE_0__["default"])(item, maskOptions);
});

/* harmony default export */ __webpack_exports__["default"] = (phonemask);

/***/ }),

/***/ "./src/scripts/modules/pulseBtn.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/pulseBtn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let modalBtn = document.querySelectorAll('.btn-click'),
    forEach = Array.prototype.forEach;

forEach.call(modalBtn, function (b) {
    b.addEventListener('click', addElement);
});

function addElement(e) {
    let addDiv = document.createElement('div'),
        mValue = Math.max(this.clientWidth, this.clientHeight),
        sDiv = addDiv.style,
        px = 'px',
        rect = this.getBoundingClientRect();

    sDiv.width = sDiv.height = mValue + px;
    sDiv.top = e.clientY - rect.top - mValue / 2 + px;
    sDiv.left = e.clientX - rect.left - mValue / 2 + px;

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}

/* harmony default export */ __webpack_exports__["default"] = (modalBtn);

/***/ }),

/***/ "./src/scripts/modules/shopDots.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/shopDots.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const shopDots = BtnSelector => {
    const btn = document.querySelectorAll(BtnSelector);

    btn.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
};

/* harmony default export */ __webpack_exports__["default"] = (shopDots);

/***/ }),

/***/ "./src/scripts/modules/slider.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/slider.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);



jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header__slider').slick({
  infinite: true,
  fade: true,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="../../assets/images/header/pagination/arrow-left.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="../../assets/images/header/pagination/arrow-right.svg" alt=""></img>',
  asNavFor: '.slider-pagination',
  autoplay: true,
  autoplaySpeed: 10000
});

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider-pagination').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  asNavFor: '.header__slider',
  autoplay: true,
  autoplaySpeed: 10000,
  responsive: [{
    breakpoint: 841,
    settings: "unslick"
  }]
});

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.surf-map').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  focusOnSelect: true,
  asNavFor: '.surf-slider',
  responsive: [{
    breakpoint: 1101,
    settings: {
      slidesToShow: 3,
      centerMode: true
    }
  }, {
    breakpoint: 951,
    settings: {
      slidesToShow: 1.5,
      centerMode: true
    }
  }, {
    breakpoint: 601,
    settings: {
      slidesToShow: 0.85,
      centerMode: true
    }
  }, {
    breakpoint: 401,
    settings: {
      slidesToShow: 1,
      centerMode: false
    }
  }, {
    breakpoint: 361,
    settings: {
      slidesToShow: 1
    }
  }]
});

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.surf-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="../../assets/images/header/pagination/arrow-left.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="../../assets/images/header/pagination/arrow-right.svg" alt=""></img>',
  asNavFor: '.surf-map',
  responsive: [{
    breakpoint: 1250,
    settings: {
      slidesToShow: 3,
      centerMode: true
    }
  }, {
    breakpoint: 901,
    settings: {
      slidesToShow: 1.625,
      centerMode: true
    }
  }, {
    breakpoint: 601,
    settings: {
      slidesToShow: 1,
      centerMode: true
    }
  }, {
    breakpoint: 401,
    settings: {
      slidesToShow: 1,
      centerMode: false
    }
  }]
});

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content-slider, .shop-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<img class="slider-arrows slider-arrows__left" src="../../assets/images/header/pagination/arrow-left.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrows slider-arrows__right" src="../../assets/images/header/pagination/arrow-right.svg" alt=""></img>'
});

/***/ }),

/***/ "./src/scripts/modules/wowMobile.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/wowMobile.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wowjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wowjs */ "./node_modules/wowjs/dist/wow.js");
/* harmony import */ var wowjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wowjs__WEBPACK_IMPORTED_MODULE_0__);


let isMobile = false;
// check width's screen
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.clientWidth <= 480) {
        isMobile = true;
    }
    // flag >md
    if (!isMobile) {
        new wowjs__WEBPACK_IMPORTED_MODULE_0___default.a.WOW().init();
    }
});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/templates/index.pug":
/*!*********************************!*\
  !*** ./src/templates/index.pug ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!DOCTYPE html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Surf travel</title><link href=\"https://fonts.googleapis.com/css?family=Fira+Sans:100,300,400,500,800&amp;display=swap\" rel=\"stylesheet\"><link href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\"><!--link(rel='stylesheet', href='css/style.min.css')--></head><header class=\"header\"><div class=\"header__title\"><span>go</span><br><span>surf</span></div><!-- /.header__title--><div class=\"menu__btn\"><div class=\"menu__btn-circle\"><div class=\"menu__btn-line\"></div><div class=\"menu__btn-line\"></div><div class=\"menu__btn-line\"></div></div></div><!-- /.menu__btn--><div class=\"header__aside\"><div class=\"aside__logo\"><a href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/logo/header-logo.svg */ "./src/assets/images/header/logo/header-logo.svg") + "\" alt=\"\"></a></div><!-- /.aside__logo--><nav class=\"aside__nav\"><ul class=\"aside__nav-menu\"><li><a href=\"#map\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/navigation/icon-surf.svg */ "./src/assets/images/header/navigation/icon-surf.svg") + "\" alt=\"\"><span>Surf</span></a></li><li><a href=\"#airplanes\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/navigation/icon-travel.svg */ "./src/assets/images/header/navigation/icon-travel.svg") + "\" alt=\"\"><span>Travel</span></a></li><li><a href=\"#location\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/navigation/icon-sleep.svg */ "./src/assets/images/header/navigation/icon-sleep.svg") + "\" alt=\"\"><span>Sleep</span></a></li><li><a href=\"#goods\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/navigation/icon-shop.svg */ "./src/assets/images/header/navigation/icon-shop.svg") + "\" alt=\"\"><span>Shop</span></a></li></ul><!-- /.aside__nav-menu--></nav><!-- /.aside__nav--><!--.aside__search//img(src='../assets/images/header/navigation/icon-search.svg', alt='')--><!-- /.aside__search--><div class=\"aside__date\"><span class=\"aside__date-dd\" id=\"day\"></span><br><span class=\"aside__date-mm_yyyy\" id=\"m_y\"></span></div><!-- /.aside__date--><div class=\"aside__location\"><span>tyumen</span></div><!-- /.aside__location--></div><!-- /.header__aside--><div class=\"header__slider\"><div class=\"header__slider-page slider-page dark-bg\" style=\"background-image: url(../src/assets/images/header/main/header-bg-1.jpg);\"><div class=\"header__map\"><svg width=\"1001\" height=\"476\" viewbox=\"0 0 1001 496\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Map\"><g id=\"np_california_725261_000000 copy\" opacity=\"0.29827\"><path id=\"Shape\" d=\"M1008.08 163.448L443.182 -356.858V-747.19L28.1096 -770C24.9043 -762.456 4.36709 -740.714 7.57176 -728.596C11.43 -714.102 30.8387 -718.735 36.4776 -709.409C43.0661 -698.42 31.7291 -653.749 28.3457 -640.86C21.8759 -616.445 7.09676 -596.665 2.82235 -572.25C-4.35982 -531.263 10.1824 -534.53 37.7242 -508.927C84.141 -465.742 46.9244 -420.952 58.6176 -370.223C68.1146 -328.878 109.605 -307.554 124.8 -266.211C136.553 -234.37 152.697 -226.233 177.746 -202.947C177.153 -217.084 164.51 -258.785 188.253 -255.102C211.817 -251.478 202.736 -216.669 207.247 -202.115C211.045 -189.997 237.933 -165.761 215.616 -154.593C208.196 -150.91 187.066 -165.582 178.577 -169.503C184.572 -150.791 180.774 -131.367 190.271 -113.487C201.608 -92.162 213.835 -100.359 228.853 -88.7754C244.344 -76.8355 242.683 -63.1137 235.797 -45.0554C228.615 -26.2247 221.196 -29.1352 232.592 -6.44342C240.843 9.95119 254.85 30.7421 266.9 43.2164C273.904 50.4634 281.502 52.1267 288.506 61.3932C294.323 69.1155 292.067 79.2142 299.012 86.1638C310.883 98.1037 331.006 98.282 340.384 113.904C350.831 131.309 338.96 144.437 369.706 142.833C371.309 177.643 377.897 209.185 377.541 243.994C394.695 250.825 422.414 242.687 440.399 239.063C458.266 263.18 481.355 246.429 501.774 259.558C510.678 265.26 508.837 279.517 514.239 284.506C525.339 294.723 533.529 288.308 547.301 291.872C557.51 294.486 565.404 301.97 575.138 304.703C584.338 307.257 599.475 301.258 606.301 309.396C614.492 319.138 600.78 336.958 613.127 344.799C623.395 351.333 638.115 335.77 648.088 338.027C659.721 340.7 693.079 371.174 701.271 381.212C710.59 392.677 719.969 414.062 725.25 428.793C733.501 451.841 732.373 463.127 749.408 479.998C760.27 490.75 749.942 491.522 767.63 494.67C779.204 496.749 794.518 488.374 806.212 487.067C830.549 484.394 855.122 489.027 879.102 484.453C901.421 480.176 922.729 473.166 945.64 469.899C965.465 467.048 1000.37 469.246 1017.94 459.801C1036.99 449.643 1038.71 426.654 1011.17 430.932C1008.97 416.26 1018.77 396.003 1007.85 385.847C1023.04 365.056 1028.56 350.384 1030.93 324.959C1032 313.792 1032.48 301.436 1038 292.05C1043.4 282.783 1058.59 277.259 1061.56 269.299C1066.13 256.943 1058.83 251.419 1053.25 244.528C1049.69 240.073 1039.54 242.212 1036.63 238.291C1031.23 231.103 1036.57 223.678 1033.6 216.431C1024.94 195.462 1014.61 187.205 1008.08 163.444C1008.26 167.424 1008.44 171.463 1008.2 175.384\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><path class=\"path-animation-1\" id=\"Path 1\" d=\"M733.301 80.7978C706.16 100.409 728.585 125.736 740.838 155.869C744.469 164.798 740.21 173.628 730.317 174.745C709.044 177.146 661.743 128.476 656.948 145.064C651.997 162.197 687.696 210.779 689.022 213.458C700.672 236.981 688.382 272.501 667.842 284.007C653.228 292.194 606.488 259.605 593.42 246.524C507.839 160.858 551.604 190.45 442.71 116.321C434.374 110.647 425.438 105.047 415.869 102.304C406.013 99.4789 401.198 108.453 401.337 114.887C401.798 136.212 429.216 187.76 405.689 201.858C398.47 206.184 387.849 205.416 380.478 209.554C374.704 212.796 371.667 218.805 367.262 223.43\" stroke=\"white\" stroke-width=\"2\"></path><path class=\"animated fadeIn delay-4s\" id=\"Oval\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M364.5 232C368.09 232 371 229.09 371 225.5C371 221.91 368.09 219 364.5 219C360.91 219 358 221.91 358 225.5C358 229.09 360.91 232 364.5 232Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-2s\" id=\"Oval Copy 2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M661 363C662.657 363 664 361.657 664 360C664 358.343 662.657 357 661 357C659.343 357 658 358.343 658 360C658 361.657 659.343 363 661 363Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-3s\" id=\"Oval Copy 6\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M725 471C726.657 471 728 469.657 728 468C728 466.343 726.657 465 725 465C723.343 465 722 466.343 722 468C722 469.657 723.343 471 725 471Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-1s\" id=\"Oval Copy 7\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M574 322C575.657 322 577 320.657 577 319C577 317.343 575.657 316 574 316C572.343 316 571 317.343 571 319C571 320.657 572.343 322 574 322Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-5s\" id=\"Oval Copy\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M729.5 91C733.09 91 736 88.0899 736 84.5C736 80.9101 733.09 78 729.5 78C725.91 78 723 80.9101 723 84.5C723 88.0899 725.91 91 729.5 91Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-4s\" id=\"North Shore | Cors, FR\" d=\"M202.562 247H200.53L196.05 237.64C196.114 238.376 196.162 239.059 196.194 239.688C196.237 240.307 196.258 241.059 196.258 241.944V247H194.834V235.976H196.818L201.346 245.352C201.314 245.075 201.272 244.589 201.218 243.896C201.165 243.203 201.138 242.568 201.138 241.992V235.976H202.562V247ZM208.844 238.376C210.028 238.376 210.946 238.771 211.596 239.56C212.258 240.349 212.588 241.421 212.588 242.776C212.588 243.651 212.439 244.424 212.14 245.096C211.842 245.757 211.41 246.275 210.844 246.648C210.279 247.011 209.607 247.192 208.828 247.192C207.644 247.192 206.722 246.797 206.06 246.008C205.399 245.219 205.068 244.147 205.068 242.792C205.068 241.917 205.218 241.149 205.516 240.488C205.815 239.816 206.247 239.299 206.812 238.936C207.378 238.563 208.055 238.376 208.844 238.376ZM208.844 239.56C207.383 239.56 206.652 240.637 206.652 242.792C206.652 244.936 207.378 246.008 208.828 246.008C210.279 246.008 211.004 244.931 211.004 242.776C211.004 240.632 210.284 239.56 208.844 239.56ZM218.684 238.376C218.983 238.376 219.26 238.408 219.516 238.472L219.244 239.912C218.988 239.848 218.743 239.816 218.508 239.816C217.985 239.816 217.564 240.008 217.244 240.392C216.924 240.776 216.673 241.373 216.492 242.184V247H215.02V238.568H216.284L216.428 240.28C216.652 239.651 216.956 239.176 217.34 238.856C217.724 238.536 218.172 238.376 218.684 238.376ZM225.448 246.616C224.893 247 224.264 247.192 223.56 247.192C222.845 247.192 222.285 246.989 221.88 246.584C221.485 246.168 221.288 245.571 221.288 244.792V239.704H219.816V238.568H221.288V236.664L222.76 236.488V238.568H224.76L224.6 239.704H222.76V244.728C222.76 245.165 222.835 245.485 222.984 245.688C223.144 245.88 223.405 245.976 223.768 245.976C224.099 245.976 224.472 245.864 224.888 245.64L225.448 246.616ZM230.941 238.376C231.709 238.376 232.306 238.605 232.733 239.064C233.17 239.523 233.389 240.152 233.389 240.952V247H231.917V241.16C231.917 240.563 231.8 240.141 231.565 239.896C231.341 239.651 231.01 239.528 230.573 239.528C230.136 239.528 229.746 239.656 229.405 239.912C229.064 240.168 228.744 240.531 228.445 241V247H226.973V235.192L228.445 235.032V239.736C229.106 238.829 229.938 238.376 230.941 238.376ZM243.383 235.784C244.119 235.784 244.748 235.891 245.271 236.104C245.793 236.307 246.3 236.627 246.791 237.064L245.959 237.992C245.543 237.661 245.132 237.421 244.727 237.272C244.332 237.112 243.905 237.032 243.447 237.032C242.871 237.032 242.396 237.165 242.023 237.432C241.649 237.699 241.463 238.088 241.463 238.6C241.463 238.92 241.527 239.192 241.655 239.416C241.783 239.629 242.017 239.827 242.359 240.008C242.711 240.189 243.217 240.381 243.879 240.584C244.572 240.797 245.148 241.027 245.607 241.272C246.065 241.517 246.433 241.859 246.711 242.296C246.999 242.723 247.142 243.267 247.142 243.928C247.142 244.568 246.983 245.133 246.663 245.624C246.353 246.115 245.9 246.499 245.303 246.776C244.716 247.053 244.017 247.192 243.207 247.192C241.681 247.192 240.433 246.717 239.463 245.768L240.295 244.84C240.743 245.203 241.196 245.48 241.655 245.672C242.113 245.853 242.625 245.944 243.191 245.944C243.873 245.944 244.439 245.779 244.887 245.448C245.335 245.107 245.559 244.616 245.559 243.976C245.559 243.613 245.489 243.315 245.351 243.08C245.212 242.835 244.972 242.616 244.631 242.424C244.3 242.232 243.815 242.04 243.174 241.848C242.044 241.507 241.217 241.096 240.695 240.616C240.172 240.136 239.911 239.485 239.911 238.664C239.911 238.109 240.055 237.613 240.343 237.176C240.641 236.739 241.052 236.397 241.575 236.152C242.108 235.907 242.711 235.784 243.383 235.784ZM253.269 238.376C254.037 238.376 254.635 238.605 255.061 239.064C255.499 239.523 255.717 240.152 255.717 240.952V247H254.245V241.16C254.245 240.563 254.128 240.141 253.893 239.896C253.669 239.651 253.339 239.528 252.901 239.528C252.464 239.528 252.075 239.656 251.733 239.912C251.392 240.168 251.072 240.531 250.773 241V247H249.301V235.192L250.773 235.032V239.736C251.435 238.829 252.267 238.376 253.269 238.376ZM261.844 238.376C263.028 238.376 263.946 238.771 264.596 239.56C265.258 240.349 265.588 241.421 265.588 242.776C265.588 243.651 265.439 244.424 265.14 245.096C264.842 245.757 264.41 246.275 263.844 246.648C263.279 247.011 262.607 247.192 261.828 247.192C260.644 247.192 259.722 246.797 259.06 246.008C258.399 245.219 258.068 244.147 258.068 242.792C258.068 241.917 258.218 241.149 258.516 240.488C258.815 239.816 259.247 239.299 259.812 238.936C260.378 238.563 261.055 238.376 261.844 238.376ZM261.844 239.56C260.383 239.56 259.652 240.637 259.652 242.792C259.652 244.936 260.378 246.008 261.828 246.008C263.279 246.008 264.004 244.931 264.004 242.776C264.004 240.632 263.284 239.56 261.844 239.56ZM271.684 238.376C271.983 238.376 272.26 238.408 272.516 238.472L272.244 239.912C271.988 239.848 271.743 239.816 271.508 239.816C270.985 239.816 270.564 240.008 270.244 240.392C269.924 240.776 269.673 241.373 269.492 242.184V247H268.02V238.568H269.284L269.428 240.28C269.652 239.651 269.956 239.176 270.34 238.856C270.724 238.536 271.172 238.376 271.684 238.376ZM280.076 242.536C280.076 242.781 280.065 243.032 280.044 243.288H274.668C274.732 244.216 274.966 244.899 275.372 245.336C275.777 245.773 276.3 245.992 276.94 245.992C277.345 245.992 277.718 245.933 278.06 245.816C278.401 245.699 278.758 245.512 279.132 245.256L279.772 246.136C278.876 246.84 277.894 247.192 276.828 247.192C275.654 247.192 274.737 246.808 274.076 246.04C273.425 245.272 273.1 244.216 273.1 242.872C273.1 241.997 273.238 241.224 273.516 240.552C273.804 239.869 274.209 239.336 274.732 238.952C275.265 238.568 275.889 238.376 276.604 238.376C277.724 238.376 278.582 238.744 279.18 239.48C279.777 240.216 280.076 241.235 280.076 242.536ZM278.62 242.104C278.62 241.272 278.454 240.637 278.124 240.2C277.793 239.763 277.297 239.544 276.636 239.544C275.43 239.544 274.774 240.429 274.668 242.2H278.62V242.104ZM288.613 234.184V248.568H288.261V234.184H288.613ZM301.44 235.784C302.102 235.784 302.656 235.869 303.104 236.04C303.563 236.211 304.027 236.488 304.496 236.872L303.664 237.848C302.992 237.304 302.283 237.032 301.536 237.032C300.619 237.032 299.878 237.384 299.312 238.088C298.758 238.792 298.48 239.923 298.48 241.48C298.48 242.995 298.758 244.115 299.312 244.84C299.867 245.555 300.603 245.912 301.52 245.912C301.99 245.912 302.4 245.832 302.752 245.672C303.104 245.512 303.478 245.288 303.872 245L304.624 245.96C304.283 246.312 303.846 246.605 303.312 246.84C302.779 247.075 302.166 247.192 301.472 247.192C300.576 247.192 299.776 246.973 299.072 246.536C298.379 246.088 297.835 245.437 297.44 244.584C297.056 243.72 296.864 242.685 296.864 241.48C296.864 240.275 297.067 239.245 297.472 238.392C297.878 237.528 298.427 236.877 299.12 236.44C299.814 236.003 300.587 235.784 301.44 235.784ZM309.313 238.376C310.497 238.376 311.414 238.771 312.065 239.56C312.726 240.349 313.057 241.421 313.057 242.776C313.057 243.651 312.908 244.424 312.609 245.096C312.31 245.757 311.878 246.275 311.313 246.648C310.748 247.011 310.076 247.192 309.297 247.192C308.113 247.192 307.19 246.797 306.529 246.008C305.868 245.219 305.537 244.147 305.537 242.792C305.537 241.917 305.686 241.149 305.985 240.488C306.284 239.816 306.716 239.299 307.281 238.936C307.846 238.563 308.524 238.376 309.313 238.376ZM309.313 239.56C307.852 239.56 307.121 240.637 307.121 242.792C307.121 244.936 307.846 246.008 309.297 246.008C310.748 246.008 311.473 244.931 311.473 242.776C311.473 240.632 310.753 239.56 309.313 239.56ZM319.153 238.376C319.451 238.376 319.729 238.408 319.985 238.472L319.713 239.912C319.457 239.848 319.211 239.816 318.977 239.816C318.454 239.816 318.033 240.008 317.713 240.392C317.393 240.776 317.142 241.373 316.961 242.184V247H315.489V238.568H316.753L316.897 240.28C317.121 239.651 317.425 239.176 317.809 238.856C318.193 238.536 318.641 238.376 319.153 238.376ZM323.714 238.376C324.29 238.376 324.808 238.456 325.266 238.616C325.725 238.776 326.162 239.016 326.578 239.336L325.954 240.264C325.57 240.019 325.202 239.837 324.85 239.72C324.509 239.603 324.146 239.544 323.762 239.544C323.282 239.544 322.904 239.645 322.626 239.848C322.349 240.04 322.21 240.307 322.21 240.648C322.21 240.989 322.338 241.256 322.594 241.448C322.861 241.64 323.336 241.827 324.018 242.008C324.957 242.243 325.656 242.563 326.114 242.968C326.584 243.373 326.818 243.928 326.818 244.632C326.818 245.464 326.493 246.099 325.842 246.536C325.202 246.973 324.418 247.192 323.49 247.192C322.21 247.192 321.149 246.824 320.306 246.088L321.09 245.192C321.805 245.736 322.594 246.008 323.458 246.008C324.013 246.008 324.45 245.896 324.77 245.672C325.101 245.437 325.266 245.123 325.266 244.728C325.266 244.44 325.208 244.211 325.09 244.04C324.973 243.859 324.77 243.704 324.482 243.576C324.194 243.437 323.773 243.293 323.218 243.144C322.322 242.909 321.672 242.595 321.266 242.2C320.872 241.805 320.674 241.304 320.674 240.696C320.674 240.259 320.802 239.864 321.058 239.512C321.325 239.149 321.688 238.872 322.146 238.68C322.616 238.477 323.138 238.376 323.714 238.376ZM329.279 244.968C329.599 244.968 329.866 245.075 330.079 245.288C330.292 245.501 330.399 245.763 330.399 246.072C330.399 246.403 330.303 246.781 330.111 247.208L329.039 249.656H327.983L328.623 247C328.484 246.893 328.372 246.76 328.287 246.6C328.212 246.44 328.175 246.264 328.175 246.072C328.175 245.763 328.282 245.501 328.495 245.288C328.708 245.075 328.97 244.968 329.279 244.968ZM337.053 247V235.976H342.909L342.733 237.192H338.573V240.952H342.173V242.152H338.573V247H337.053ZM348.145 242.328H346.433V247H344.913V235.976H347.809C349.185 235.976 350.225 236.237 350.929 236.76C351.643 237.283 352.001 238.061 352.001 239.096C352.001 239.864 351.803 240.488 351.409 240.968C351.014 241.448 350.417 241.811 349.617 242.056L352.593 247H350.785L348.145 242.328ZM347.969 241.16C348.769 241.16 349.371 241 349.777 240.68C350.182 240.349 350.385 239.821 350.385 239.096C350.385 238.413 350.177 237.923 349.761 237.624C349.355 237.315 348.699 237.16 347.793 237.16H346.433V241.16H347.969Z\" fill=\"white\"></path><path class=\"animated fadeIn delay-5s\" id=\"Current Location\" d=\"M598.378 75.784C599.039 75.784 599.594 75.8693 600.042 76.04C600.501 76.2107 600.965 76.488 601.434 76.872L600.602 77.848C599.93 77.304 599.221 77.032 598.474 77.032C597.557 77.032 596.815 77.384 596.25 78.088C595.695 78.792 595.418 79.9227 595.418 81.48C595.418 82.9947 595.695 84.1147 596.25 84.84C596.805 85.5547 597.541 85.912 598.458 85.912C598.927 85.912 599.338 85.832 599.69 85.672C600.042 85.512 600.415 85.288 600.81 85L601.562 85.96C601.221 86.312 600.783 86.6053 600.25 86.84C599.717 87.0747 599.103 87.192 598.41 87.192C597.514 87.192 596.714 86.9733 596.01 86.536C595.317 86.088 594.773 85.4373 594.378 84.584C593.994 83.72 593.802 82.6853 593.802 81.48C593.802 80.2747 594.005 79.2453 594.41 78.392C594.815 77.528 595.365 76.8773 596.058 76.44C596.751 76.0027 597.525 75.784 598.378 75.784ZM609.401 87H608.137L608.025 85.688C607.705 86.2107 607.337 86.5947 606.921 86.84C606.505 87.0747 605.999 87.192 605.401 87.192C604.665 87.192 604.089 86.968 603.673 86.52C603.257 86.072 603.049 85.4373 603.049 84.616V78.568H604.521V84.456C604.521 85.032 604.623 85.4427 604.825 85.688C605.028 85.9227 605.359 86.04 605.817 86.04C606.639 86.04 607.343 85.5547 607.929 84.584V78.568H609.401V87ZM616.106 78.376C616.405 78.376 616.682 78.408 616.938 78.472L616.666 79.912C616.41 79.848 616.165 79.816 615.93 79.816C615.407 79.816 614.986 80.008 614.666 80.392C614.346 80.776 614.095 81.3733 613.914 82.184V87H612.442V78.568H613.706L613.85 80.28C614.074 79.6507 614.378 79.176 614.762 78.856C615.146 78.536 615.594 78.376 616.106 78.376ZM622.278 78.376C622.576 78.376 622.854 78.408 623.11 78.472L622.838 79.912C622.582 79.848 622.336 79.816 622.102 79.816C621.579 79.816 621.158 80.008 620.838 80.392C620.518 80.776 620.267 81.3733 620.086 82.184V87H618.614V78.568H619.878L620.022 80.28C620.246 79.6507 620.55 79.176 620.934 78.856C621.318 78.536 621.766 78.376 622.278 78.376ZM630.669 82.536C630.669 82.7813 630.659 83.032 630.637 83.288H625.261C625.325 84.216 625.56 84.8987 625.965 85.336C626.371 85.7733 626.893 85.992 627.533 85.992C627.939 85.992 628.312 85.9333 628.653 85.816C628.995 85.6987 629.352 85.512 629.725 85.256L630.365 86.136C629.469 86.84 628.488 87.192 627.421 87.192C626.248 87.192 625.331 86.808 624.669 86.04C624.019 85.272 623.693 84.216 623.693 82.872C623.693 81.9973 623.832 81.224 624.109 80.552C624.397 79.8693 624.803 79.336 625.325 78.952C625.859 78.568 626.483 78.376 627.197 78.376C628.317 78.376 629.176 78.744 629.773 79.48C630.371 80.216 630.669 81.2347 630.669 82.536ZM629.213 82.104C629.213 81.272 629.048 80.6373 628.717 80.2C628.387 79.7627 627.891 79.544 627.229 79.544C626.024 79.544 625.368 80.4293 625.261 82.2H629.213V82.104ZM636.988 78.376C637.756 78.376 638.353 78.6053 638.78 79.064C639.217 79.5227 639.436 80.152 639.436 80.952V87H637.964V81.16C637.964 80.5627 637.852 80.1413 637.628 79.896C637.404 79.6507 637.073 79.528 636.636 79.528C636.188 79.528 635.793 79.656 635.452 79.912C635.111 80.168 634.791 80.536 634.492 81.016V87H633.02V78.568H634.284L634.412 79.816C634.711 79.368 635.079 79.016 635.516 78.76C635.964 78.504 636.455 78.376 636.988 78.376ZM646.651 86.616C646.096 87 645.467 87.192 644.763 87.192C644.048 87.192 643.488 86.9893 643.083 86.584C642.688 86.168 642.491 85.5707 642.491 84.792V79.704H641.019V78.568H642.491V76.664L643.963 76.488V78.568H645.963L645.803 79.704H643.963V84.728C643.963 85.1653 644.038 85.4853 644.187 85.688C644.347 85.88 644.608 85.976 644.971 85.976C645.302 85.976 645.675 85.864 646.091 85.64L646.651 86.616ZM654.011 75.976V85.672H658.539L658.363 87H652.491V75.976H654.011ZM663.141 78.376C664.325 78.376 665.242 78.7707 665.893 79.56C666.554 80.3493 666.885 81.4213 666.885 82.776C666.885 83.6507 666.736 84.424 666.437 85.096C666.138 85.7573 665.706 86.2747 665.141 86.648C664.576 87.0107 663.904 87.192 663.125 87.192C661.941 87.192 661.018 86.7973 660.357 86.008C659.696 85.2187 659.365 84.1467 659.365 82.792C659.365 81.9173 659.514 81.1493 659.813 80.488C660.112 79.816 660.544 79.2987 661.109 78.936C661.674 78.5627 662.352 78.376 663.141 78.376ZM663.141 79.56C661.68 79.56 660.949 80.6373 660.949 82.792C660.949 84.936 661.674 86.008 663.125 86.008C664.576 86.008 665.301 84.9307 665.301 82.776C665.301 80.632 664.581 79.56 663.141 79.56ZM672.389 78.376C672.89 78.376 673.349 78.4507 673.765 78.6C674.181 78.7387 674.581 78.968 674.965 79.288L674.261 80.216C673.962 80.0027 673.669 79.848 673.381 79.752C673.104 79.6453 672.794 79.592 672.453 79.592C671.77 79.592 671.237 79.864 670.853 80.408C670.48 80.952 670.293 81.7573 670.293 82.824C670.293 83.8907 670.48 84.68 670.853 85.192C671.226 85.6933 671.76 85.944 672.453 85.944C672.784 85.944 673.088 85.896 673.365 85.8C673.642 85.6933 673.952 85.528 674.293 85.304L674.965 86.264C674.197 86.8827 673.338 87.192 672.389 87.192C671.248 87.192 670.346 86.808 669.685 86.04C669.034 85.272 668.709 84.2107 668.709 82.856C668.709 81.96 668.858 81.176 669.157 80.504C669.456 79.832 669.877 79.3093 670.421 78.936C670.976 78.5627 671.632 78.376 672.389 78.376ZM682.481 85.032C682.481 85.3733 682.54 85.6293 682.657 85.8C682.775 85.96 682.951 86.0827 683.185 86.168L682.849 87.192C682.412 87.1387 682.06 87.016 681.793 86.824C681.527 86.632 681.329 86.3333 681.201 85.928C680.636 86.7707 679.799 87.192 678.689 87.192C677.857 87.192 677.201 86.9573 676.721 86.488C676.241 86.0187 676.001 85.4053 676.001 84.648C676.001 83.752 676.321 83.064 676.961 82.584C677.612 82.104 678.529 81.864 679.713 81.864H681.009V81.24C681.009 80.6427 680.865 80.216 680.577 79.96C680.289 79.704 679.847 79.576 679.249 79.576C678.631 79.576 677.873 79.7253 676.977 80.024L676.609 78.952C677.655 78.568 678.625 78.376 679.521 78.376C680.513 78.376 681.255 78.6213 681.745 79.112C682.236 79.592 682.481 80.28 682.481 81.176V85.032ZM679.025 86.088C679.868 86.088 680.529 85.6507 681.009 84.776V82.84H679.905C678.348 82.84 677.569 83.416 677.569 84.568C677.569 85.0693 677.692 85.448 677.937 85.704C678.183 85.96 678.545 86.088 679.025 86.088ZM689.76 86.616C689.206 87 688.576 87.192 687.872 87.192C687.158 87.192 686.598 86.9893 686.192 86.584C685.798 86.168 685.6 85.5707 685.6 84.792V79.704H684.128V78.568H685.6V76.664L687.072 76.488V78.568H689.072L688.912 79.704H687.072V84.728C687.072 85.1653 687.147 85.4853 687.296 85.688C687.456 85.88 687.718 85.976 688.08 85.976C688.411 85.976 688.784 85.864 689.2 85.64L689.76 86.616ZM692.758 78.568V87H691.286V78.568H692.758ZM692.006 74.52C692.315 74.52 692.566 74.616 692.758 74.808C692.95 75 693.046 75.24 693.046 75.528C693.046 75.816 692.95 76.056 692.758 76.248C692.566 76.4293 692.315 76.52 692.006 76.52C691.707 76.52 691.462 76.4293 691.27 76.248C691.078 76.056 690.982 75.816 690.982 75.528C690.982 75.24 691.078 75 691.27 74.808C691.462 74.616 691.707 74.52 692.006 74.52ZM698.969 78.376C700.153 78.376 701.071 78.7707 701.721 79.56C702.383 80.3493 702.713 81.4213 702.713 82.776C702.713 83.6507 702.564 84.424 702.265 85.096C701.967 85.7573 701.535 86.2747 700.969 86.648C700.404 87.0107 699.732 87.192 698.953 87.192C697.769 87.192 696.847 86.7973 696.185 86.008C695.524 85.2187 695.193 84.1467 695.193 82.792C695.193 81.9173 695.343 81.1493 695.641 80.488C695.94 79.816 696.372 79.2987 696.937 78.936C697.503 78.5627 698.18 78.376 698.969 78.376ZM698.969 79.56C697.508 79.56 696.777 80.6373 696.777 82.792C696.777 84.936 697.503 86.008 698.953 86.008C700.404 86.008 701.129 84.9307 701.129 82.776C701.129 80.632 700.409 79.56 698.969 79.56ZM709.113 78.376C709.881 78.376 710.478 78.6053 710.905 79.064C711.342 79.5227 711.561 80.152 711.561 80.952V87H710.089V81.16C710.089 80.5627 709.977 80.1413 709.753 79.896C709.529 79.6507 709.198 79.528 708.761 79.528C708.313 79.528 707.918 79.656 707.577 79.912C707.236 80.168 706.916 80.536 706.617 81.016V87H705.145V78.568H706.409L706.537 79.816C706.836 79.368 707.204 79.016 707.641 78.76C708.089 78.504 708.58 78.376 709.113 78.376Z\" fill=\"white\"></path></g></svg></div><!-- /.header__map--><div class=\"slider-page__info\"><div class=\"subtitle-line_left slider-page__info-subtitle\">Surf</div><div class=\"slider-page__info-title animated fadeInLeft delay-1s\">North Shore</div><div class=\"subtitle-line_left slider-page__info-subtitle subtitle_second\">Condition</div><div class=\"slider-page__info-text animated fadeInRight delay-1s\">Radical</div><a class=\"slider-page__info-link\" href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-right.svg */ "./src/assets/images/header/pagination/arrow-right.svg") + "\" alt=\"\"></a></div><!-- /.slider-page__info--></div><!-- /.header__slider-page--><div class=\"header__slider-page slider-page dark-bg\" style=\"background-image: url(../src/assets/images/header/main/header-bg-2.jpg);\"><div class=\"header__map\"><svg width=\"1001\" height=\"476\" viewbox=\"0 0 1001 496\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Map\"><g id=\"np_california_725261_000000 copy\" opacity=\"0.29827\"><path id=\"Shape\" d=\"M1008.08 163.448L443.182 -356.858V-747.19L28.1096 -770C24.9043 -762.456 4.36709 -740.714 7.57176 -728.596C11.43 -714.102 30.8387 -718.735 36.4776 -709.409C43.0661 -698.42 31.7291 -653.749 28.3457 -640.86C21.8759 -616.445 7.09676 -596.665 2.82235 -572.25C-4.35982 -531.263 10.1824 -534.53 37.7242 -508.927C84.141 -465.742 46.9244 -420.952 58.6176 -370.223C68.1146 -328.878 109.605 -307.554 124.8 -266.211C136.553 -234.37 152.697 -226.233 177.746 -202.947C177.153 -217.084 164.51 -258.785 188.253 -255.102C211.817 -251.478 202.736 -216.669 207.247 -202.115C211.045 -189.997 237.933 -165.761 215.616 -154.593C208.196 -150.91 187.066 -165.582 178.577 -169.503C184.572 -150.791 180.774 -131.367 190.271 -113.487C201.608 -92.162 213.835 -100.359 228.853 -88.7754C244.344 -76.8355 242.683 -63.1137 235.797 -45.0554C228.615 -26.2247 221.196 -29.1352 232.592 -6.44342C240.843 9.95119 254.85 30.7421 266.9 43.2164C273.904 50.4634 281.502 52.1267 288.506 61.3932C294.323 69.1155 292.067 79.2142 299.012 86.1638C310.883 98.1037 331.006 98.282 340.384 113.904C350.831 131.309 338.96 144.437 369.706 142.833C371.309 177.643 377.897 209.185 377.541 243.994C394.695 250.825 422.414 242.687 440.399 239.063C458.266 263.18 481.355 246.429 501.774 259.558C510.678 265.26 508.837 279.517 514.239 284.506C525.339 294.723 533.529 288.308 547.301 291.872C557.51 294.486 565.404 301.97 575.138 304.703C584.338 307.257 599.475 301.258 606.301 309.396C614.492 319.138 600.78 336.958 613.127 344.799C623.395 351.333 638.115 335.77 648.088 338.027C659.721 340.7 693.079 371.174 701.271 381.212C710.59 392.677 719.969 414.062 725.25 428.793C733.501 451.841 732.373 463.127 749.408 479.998C760.27 490.75 749.942 491.522 767.63 494.67C779.204 496.749 794.518 488.374 806.212 487.067C830.549 484.394 855.122 489.027 879.102 484.453C901.421 480.176 922.729 473.166 945.64 469.899C965.465 467.048 1000.37 469.246 1017.94 459.801C1036.99 449.643 1038.71 426.654 1011.17 430.932C1008.97 416.26 1018.77 396.003 1007.85 385.847C1023.04 365.056 1028.56 350.384 1030.93 324.959C1032 313.792 1032.48 301.436 1038 292.05C1043.4 282.783 1058.59 277.259 1061.56 269.299C1066.13 256.943 1058.83 251.419 1053.25 244.528C1049.69 240.073 1039.54 242.212 1036.63 238.291C1031.23 231.103 1036.57 223.678 1033.6 216.431C1024.94 195.462 1014.61 187.205 1008.08 163.444C1008.26 167.424 1008.44 171.463 1008.2 175.384\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><path class=\"animated fadeIn delay-4s\" id=\"Oval\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M723.5 474C727.09 474 730 471.09 730 467.5C730 463.91 727.09 461 723.5 461C719.91 461 717 463.91 717 467.5C717 471.09 719.91 474 723.5 474Z\" fill=\"#4AF6CD\"></path><path class=\"path-animation-2\" id=\"Path 4\" d=\"M725.496 87.2599C729.605 123.796 745.321 132.792 761.406 153.081C766.173 159.093 769.464 170.254 768.186 177.88C765.439 194.281 734.475 179.789 741.241 198.626C748.228 218.081 777.049 240.198 778.522 241.844C791.456 256.298 805.575 297.977 807.15 322.48C808.271 339.914 784.809 340.223 776.423 336.564C721.503 312.603 743.046 311.442 689.213 313.857C685.092 314.041 680.897 314.695 677.901 318.465C674.816 322.349 678.074 334.015 681.06 339.994C690.956 359.807 719.642 390.225 721.869 419.158C722.552 428.036 720.275 434.369 720.844 443.171C721.29 450.065 723.505 457.753 724.836 465.044\" stroke=\"white\" stroke-width=\"2\"></path><path class=\"animated fadeIn delay-1s\" id=\"Oval Copy 2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M366 227C367.657 227 369 225.657 369 224C369 222.343 367.657 221 366 221C364.343 221 363 222.343 363 224C363 225.657 364.343 227 366 227Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-3s\" id=\"Oval Copy 6\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M660 364C661.657 364 663 362.657 663 361C663 359.343 661.657 358 660 358C658.343 358 657 359.343 657 361C657 362.657 658.343 364 660 364Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-2s\" id=\"Oval Copy 7\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M574 322C575.657 322 577 320.657 577 319C577 317.343 575.657 316 574 316C572.343 316 571 317.343 571 319C571 320.657 572.343 322 574 322Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-5s\" id=\"Oval Copy\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M729.5 91C733.09 91 736 88.0899 736 84.5C736 80.9101 733.09 78 729.5 78C725.91 78 723 80.9101 723 84.5C723 88.0899 725.91 91 729.5 91Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-4s\" id=\"South Shore | Capetown, SA\" d=\"M527.289 483.784C528.025 483.784 528.654 483.891 529.177 484.104C529.699 484.307 530.206 484.627 530.697 485.064L529.865 485.992C529.449 485.661 529.038 485.421 528.633 485.272C528.238 485.112 527.811 485.032 527.353 485.032C526.777 485.032 526.302 485.165 525.929 485.432C525.555 485.699 525.369 486.088 525.369 486.6C525.369 486.92 525.433 487.192 525.561 487.416C525.689 487.629 525.923 487.827 526.265 488.008C526.617 488.189 527.123 488.381 527.785 488.584C528.478 488.797 529.054 489.027 529.513 489.272C529.971 489.517 530.339 489.859 530.617 490.296C530.905 490.723 531.049 491.267 531.049 491.928C531.049 492.568 530.889 493.133 530.569 493.624C530.259 494.115 529.806 494.499 529.209 494.776C528.622 495.053 527.923 495.192 527.113 495.192C525.587 495.192 524.339 494.717 523.369 493.768L524.201 492.84C524.649 493.203 525.102 493.48 525.561 493.672C526.019 493.853 526.531 493.944 527.097 493.944C527.779 493.944 528.345 493.779 528.793 493.448C529.241 493.107 529.465 492.616 529.465 491.976C529.465 491.613 529.395 491.315 529.257 491.08C529.118 490.835 528.878 490.616 528.537 490.424C528.206 490.232 527.721 490.04 527.081 489.848C525.95 489.507 525.123 489.096 524.601 488.616C524.078 488.136 523.817 487.485 523.817 486.664C523.817 486.109 523.961 485.613 524.249 485.176C524.547 484.739 524.958 484.397 525.481 484.152C526.014 483.907 526.617 483.784 527.289 483.784ZM536.376 486.376C537.56 486.376 538.477 486.771 539.128 487.56C539.789 488.349 540.12 489.421 540.12 490.776C540.12 491.651 539.97 492.424 539.672 493.096C539.373 493.757 538.941 494.275 538.376 494.648C537.81 495.011 537.138 495.192 536.36 495.192C535.176 495.192 534.253 494.797 533.592 494.008C532.93 493.219 532.6 492.147 532.6 490.792C532.6 489.917 532.749 489.149 533.048 488.488C533.346 487.816 533.778 487.299 534.344 486.936C534.909 486.563 535.586 486.376 536.376 486.376ZM536.376 487.56C534.914 487.56 534.184 488.637 534.184 490.792C534.184 492.936 534.909 494.008 536.36 494.008C537.81 494.008 538.536 492.931 538.536 490.776C538.536 488.632 537.816 487.56 536.376 487.56ZM548.823 495H547.559L547.447 493.688C547.127 494.211 546.759 494.595 546.343 494.84C545.927 495.075 545.421 495.192 544.823 495.192C544.087 495.192 543.511 494.968 543.095 494.52C542.679 494.072 542.471 493.437 542.471 492.616V486.568H543.943V492.456C543.943 493.032 544.045 493.443 544.247 493.688C544.45 493.923 544.781 494.04 545.239 494.04C546.061 494.04 546.765 493.555 547.351 492.584V486.568H548.823V495ZM556.12 494.616C555.565 495 554.936 495.192 554.232 495.192C553.517 495.192 552.957 494.989 552.552 494.584C552.157 494.168 551.96 493.571 551.96 492.792V487.704H550.488V486.568H551.96V484.664L553.432 484.488V486.568H555.432L555.272 487.704H553.432V492.728C553.432 493.165 553.506 493.485 553.656 493.688C553.816 493.88 554.077 493.976 554.44 493.976C554.77 493.976 555.144 493.864 555.56 493.64L556.12 494.616ZM561.613 486.376C562.381 486.376 562.978 486.605 563.405 487.064C563.842 487.523 564.061 488.152 564.061 488.952V495H562.589V489.16C562.589 488.563 562.472 488.141 562.237 487.896C562.013 487.651 561.682 487.528 561.245 487.528C560.808 487.528 560.418 487.656 560.077 487.912C559.736 488.168 559.416 488.531 559.117 489V495H557.645V483.192L559.117 483.032V487.736C559.778 486.829 560.61 486.376 561.613 486.376ZM574.054 483.784C574.79 483.784 575.42 483.891 575.942 484.104C576.465 484.307 576.972 484.627 577.462 485.064L576.63 485.992C576.214 485.661 575.804 485.421 575.398 485.272C575.004 485.112 574.577 485.032 574.118 485.032C573.542 485.032 573.068 485.165 572.694 485.432C572.321 485.699 572.134 486.088 572.134 486.6C572.134 486.92 572.198 487.192 572.326 487.416C572.454 487.629 572.689 487.827 573.03 488.008C573.382 488.189 573.889 488.381 574.55 488.584C575.244 488.797 575.82 489.027 576.278 489.272C576.737 489.517 577.105 489.859 577.382 490.296C577.67 490.723 577.814 491.267 577.814 491.928C577.814 492.568 577.654 493.133 577.334 493.624C577.025 494.115 576.572 494.499 575.974 494.776C575.388 495.053 574.689 495.192 573.878 495.192C572.353 495.192 571.105 494.717 570.134 493.768L570.966 492.84C571.414 493.203 571.868 493.48 572.326 493.672C572.785 493.853 573.297 493.944 573.862 493.944C574.545 493.944 575.11 493.779 575.558 493.448C576.006 493.107 576.23 492.616 576.23 491.976C576.23 491.613 576.161 491.315 576.022 491.08C575.884 490.835 575.644 490.616 575.302 490.424C574.972 490.232 574.486 490.04 573.846 489.848C572.716 489.507 571.889 489.096 571.366 488.616C570.844 488.136 570.582 487.485 570.582 486.664C570.582 486.109 570.726 485.613 571.014 485.176C571.313 484.739 571.724 484.397 572.246 484.152C572.78 483.907 573.382 483.784 574.054 483.784ZM583.941 486.376C584.709 486.376 585.306 486.605 585.733 487.064C586.17 487.523 586.389 488.152 586.389 488.952V495H584.917V489.16C584.917 488.563 584.8 488.141 584.565 487.896C584.341 487.651 584.01 487.528 583.573 487.528C583.136 487.528 582.746 487.656 582.405 487.912C582.064 488.168 581.744 488.531 581.445 489V495H579.973V483.192L581.445 483.032V487.736C582.106 486.829 582.938 486.376 583.941 486.376ZM592.516 486.376C593.7 486.376 594.617 486.771 595.268 487.56C595.929 488.349 596.26 489.421 596.26 490.776C596.26 491.651 596.111 492.424 595.812 493.096C595.513 493.757 595.081 494.275 594.516 494.648C593.951 495.011 593.279 495.192 592.5 495.192C591.316 495.192 590.393 494.797 589.732 494.008C589.071 493.219 588.74 492.147 588.74 490.792C588.74 489.917 588.889 489.149 589.188 488.488C589.487 487.816 589.919 487.299 590.484 486.936C591.049 486.563 591.727 486.376 592.516 486.376ZM592.516 487.56C591.055 487.56 590.324 488.637 590.324 490.792C590.324 492.936 591.049 494.008 592.5 494.008C593.951 494.008 594.676 492.931 594.676 490.776C594.676 488.632 593.956 487.56 592.516 487.56ZM602.356 486.376C602.655 486.376 602.932 486.408 603.188 486.472L602.916 487.912C602.66 487.848 602.415 487.816 602.18 487.816C601.657 487.816 601.236 488.008 600.916 488.392C600.596 488.776 600.345 489.373 600.164 490.184V495H598.692V486.568H599.956L600.1 488.28C600.324 487.651 600.628 487.176 601.012 486.856C601.396 486.536 601.844 486.376 602.356 486.376ZM610.747 490.536C610.747 490.781 610.737 491.032 610.715 491.288H605.339C605.403 492.216 605.638 492.899 606.043 493.336C606.449 493.773 606.971 493.992 607.611 493.992C608.017 493.992 608.39 493.933 608.731 493.816C609.073 493.699 609.43 493.512 609.803 493.256L610.443 494.136C609.547 494.84 608.566 495.192 607.499 495.192C606.326 495.192 605.409 494.808 604.747 494.04C604.097 493.272 603.771 492.216 603.771 490.872C603.771 489.997 603.91 489.224 604.187 488.552C604.475 487.869 604.881 487.336 605.403 486.952C605.937 486.568 606.561 486.376 607.275 486.376C608.395 486.376 609.254 486.744 609.851 487.48C610.449 488.216 610.747 489.235 610.747 490.536ZM609.291 490.104C609.291 489.272 609.126 488.637 608.795 488.2C608.465 487.763 607.969 487.544 607.307 487.544C606.102 487.544 605.446 488.429 605.339 490.2H609.291V490.104ZM619.285 482.184V496.568H618.933V482.184H619.285ZM632.112 483.784C632.774 483.784 633.328 483.869 633.776 484.04C634.235 484.211 634.699 484.488 635.168 484.872L634.336 485.848C633.664 485.304 632.955 485.032 632.208 485.032C631.291 485.032 630.55 485.384 629.984 486.088C629.43 486.792 629.152 487.923 629.152 489.48C629.152 490.995 629.43 492.115 629.984 492.84C630.539 493.555 631.275 493.912 632.192 493.912C632.662 493.912 633.072 493.832 633.424 493.672C633.776 493.512 634.15 493.288 634.544 493L635.296 493.96C634.955 494.312 634.518 494.605 633.984 494.84C633.451 495.075 632.838 495.192 632.144 495.192C631.248 495.192 630.448 494.973 629.744 494.536C629.051 494.088 628.507 493.437 628.112 492.584C627.728 491.72 627.536 490.685 627.536 489.48C627.536 488.275 627.739 487.245 628.144 486.392C628.55 485.528 629.099 484.877 629.792 484.44C630.486 484.003 631.259 483.784 632.112 483.784ZM642.653 493.032C642.653 493.373 642.712 493.629 642.829 493.8C642.946 493.96 643.122 494.083 643.357 494.168L643.021 495.192C642.584 495.139 642.232 495.016 641.965 494.824C641.698 494.632 641.501 494.333 641.373 493.928C640.808 494.771 639.97 495.192 638.861 495.192C638.029 495.192 637.373 494.957 636.893 494.488C636.413 494.019 636.173 493.405 636.173 492.648C636.173 491.752 636.493 491.064 637.133 490.584C637.784 490.104 638.701 489.864 639.885 489.864H641.181V489.24C641.181 488.643 641.037 488.216 640.749 487.96C640.461 487.704 640.018 487.576 639.421 487.576C638.802 487.576 638.045 487.725 637.149 488.024L636.781 486.952C637.826 486.568 638.797 486.376 639.693 486.376C640.685 486.376 641.426 486.621 641.917 487.112C642.408 487.592 642.653 488.28 642.653 489.176V493.032ZM639.197 494.088C640.04 494.088 640.701 493.651 641.181 492.776V490.84H640.077C638.52 490.84 637.741 491.416 637.741 492.568C637.741 493.069 637.864 493.448 638.109 493.704C638.354 493.96 638.717 494.088 639.197 494.088ZM649.548 486.376C650.626 486.376 651.415 486.76 651.916 487.528C652.418 488.296 652.668 489.379 652.668 490.776C652.668 492.099 652.38 493.165 651.804 493.976C651.228 494.787 650.412 495.192 649.356 495.192C648.418 495.192 647.682 494.872 647.148 494.232V498.232L645.676 498.408V486.568H646.94L647.052 487.704C647.362 487.277 647.735 486.952 648.172 486.728C648.61 486.493 649.068 486.376 649.548 486.376ZM649.004 493.992C650.391 493.992 651.084 492.92 651.084 490.776C651.084 488.621 650.45 487.544 649.18 487.544C648.764 487.544 648.386 487.667 648.044 487.912C647.703 488.157 647.404 488.472 647.148 488.856V492.968C647.362 493.299 647.628 493.555 647.948 493.736C648.268 493.907 648.62 493.992 649.004 493.992ZM661.544 490.536C661.544 490.781 661.534 491.032 661.512 491.288H656.136C656.2 492.216 656.435 492.899 656.84 493.336C657.246 493.773 657.768 493.992 658.408 493.992C658.814 493.992 659.187 493.933 659.528 493.816C659.87 493.699 660.227 493.512 660.6 493.256L661.24 494.136C660.344 494.84 659.363 495.192 658.296 495.192C657.123 495.192 656.206 494.808 655.544 494.04C654.894 493.272 654.568 492.216 654.568 490.872C654.568 489.997 654.707 489.224 654.984 488.552C655.272 487.869 655.678 487.336 656.2 486.952C656.734 486.568 657.358 486.376 658.072 486.376C659.192 486.376 660.051 486.744 660.648 487.48C661.246 488.216 661.544 489.235 661.544 490.536ZM660.088 490.104C660.088 489.272 659.923 488.637 659.592 488.2C659.262 487.763 658.766 487.544 658.104 487.544C656.899 487.544 656.243 488.429 656.136 490.2H660.088V490.104ZM668.151 494.616C667.596 495 666.967 495.192 666.263 495.192C665.548 495.192 664.988 494.989 664.583 494.584C664.188 494.168 663.991 493.571 663.991 492.792V487.704H662.519V486.568H663.991V484.664L665.463 484.488V486.568H667.463L667.303 487.704H665.463V492.728C665.463 493.165 665.538 493.485 665.687 493.688C665.847 493.88 666.108 493.976 666.471 493.976C666.802 493.976 667.175 493.864 667.591 493.64L668.151 494.616ZM672.61 486.376C673.794 486.376 674.711 486.771 675.362 487.56C676.023 488.349 676.354 489.421 676.354 490.776C676.354 491.651 676.205 492.424 675.906 493.096C675.607 493.757 675.175 494.275 674.61 494.648C674.045 495.011 673.373 495.192 672.594 495.192C671.41 495.192 670.487 494.797 669.826 494.008C669.165 493.219 668.834 492.147 668.834 490.792C668.834 489.917 668.983 489.149 669.282 488.488C669.581 487.816 670.013 487.299 670.578 486.936C671.143 486.563 671.821 486.376 672.61 486.376ZM672.61 487.56C671.149 487.56 670.418 488.637 670.418 490.792C670.418 492.936 671.143 494.008 672.594 494.008C674.045 494.008 674.77 492.931 674.77 490.776C674.77 488.632 674.05 487.56 672.61 487.56ZM688.418 486.568L686.498 495H684.498L683.026 487.896L681.506 495H679.554L677.586 486.568H679.058L680.578 493.976L682.242 486.568H683.89L685.474 493.976L687.01 486.568H688.418ZM694.222 486.376C694.99 486.376 695.588 486.605 696.014 487.064C696.452 487.523 696.67 488.152 696.67 488.952V495H695.198V489.16C695.198 488.563 695.086 488.141 694.862 487.896C694.638 487.651 694.308 487.528 693.87 487.528C693.422 487.528 693.028 487.656 692.686 487.912C692.345 488.168 692.025 488.536 691.726 489.016V495H690.254V486.568H691.518L691.646 487.816C691.945 487.368 692.313 487.016 692.75 486.76C693.198 486.504 693.689 486.376 694.222 486.376ZM700.013 492.968C700.333 492.968 700.6 493.075 700.813 493.288C701.027 493.501 701.133 493.763 701.133 494.072C701.133 494.403 701.037 494.781 700.845 495.208L699.773 497.656H698.717L699.357 495C699.219 494.893 699.107 494.76 699.021 494.6C698.947 494.44 698.909 494.264 698.909 494.072C698.909 493.763 699.016 493.501 699.229 493.288C699.443 493.075 699.704 492.968 700.013 492.968ZM710.508 483.784C711.244 483.784 711.873 483.891 712.396 484.104C712.918 484.307 713.425 484.627 713.916 485.064L713.084 485.992C712.668 485.661 712.257 485.421 711.852 485.272C711.457 485.112 711.03 485.032 710.572 485.032C709.996 485.032 709.521 485.165 709.148 485.432C708.774 485.699 708.588 486.088 708.588 486.6C708.588 486.92 708.652 487.192 708.78 487.416C708.908 487.629 709.142 487.827 709.484 488.008C709.836 488.189 710.342 488.381 711.004 488.584C711.697 488.797 712.273 489.027 712.732 489.272C713.19 489.517 713.558 489.859 713.836 490.296C714.124 490.723 714.267 491.267 714.267 491.928C714.267 492.568 714.108 493.133 713.788 493.624C713.478 494.115 713.025 494.499 712.428 494.776C711.841 495.053 711.142 495.192 710.332 495.192C708.806 495.192 707.558 494.717 706.588 493.768L707.42 492.84C707.868 493.203 708.321 493.48 708.78 493.672C709.238 493.853 709.75 493.944 710.316 493.944C710.998 493.944 711.564 493.779 712.012 493.448C712.46 493.107 712.684 492.616 712.684 491.976C712.684 491.613 712.614 491.315 712.476 491.08C712.337 490.835 712.097 490.616 711.756 490.424C711.425 490.232 710.94 490.04 710.299 489.848C709.169 489.507 708.342 489.096 707.82 488.616C707.297 488.136 707.036 487.485 707.036 486.664C707.036 486.109 707.18 485.613 707.468 485.176C707.766 484.739 708.177 484.397 708.7 484.152C709.233 483.907 709.836 483.784 710.508 483.784ZM722.3 495L721.468 492.232H717.292L716.46 495H714.924L718.46 483.976H720.38L723.9 495H722.3ZM717.66 491H721.1L719.388 485.24L717.66 491Z\" fill=\"white\"></path><path class=\"animated fadeIn delay-5s\" id=\"Current Location\" d=\"M598.378 75.784C599.039 75.784 599.594 75.8693 600.042 76.04C600.501 76.2107 600.965 76.488 601.434 76.872L600.602 77.848C599.93 77.304 599.221 77.032 598.474 77.032C597.557 77.032 596.815 77.384 596.25 78.088C595.695 78.792 595.418 79.9227 595.418 81.48C595.418 82.9947 595.695 84.1147 596.25 84.84C596.805 85.5547 597.541 85.912 598.458 85.912C598.927 85.912 599.338 85.832 599.69 85.672C600.042 85.512 600.415 85.288 600.81 85L601.562 85.96C601.221 86.312 600.783 86.6053 600.25 86.84C599.717 87.0747 599.103 87.192 598.41 87.192C597.514 87.192 596.714 86.9733 596.01 86.536C595.317 86.088 594.773 85.4373 594.378 84.584C593.994 83.72 593.802 82.6853 593.802 81.48C593.802 80.2747 594.005 79.2453 594.41 78.392C594.815 77.528 595.365 76.8773 596.058 76.44C596.751 76.0027 597.525 75.784 598.378 75.784ZM609.401 87H608.137L608.025 85.688C607.705 86.2107 607.337 86.5947 606.921 86.84C606.505 87.0747 605.999 87.192 605.401 87.192C604.665 87.192 604.089 86.968 603.673 86.52C603.257 86.072 603.049 85.4373 603.049 84.616V78.568H604.521V84.456C604.521 85.032 604.623 85.4427 604.825 85.688C605.028 85.9227 605.359 86.04 605.817 86.04C606.639 86.04 607.343 85.5547 607.929 84.584V78.568H609.401V87ZM616.106 78.376C616.405 78.376 616.682 78.408 616.938 78.472L616.666 79.912C616.41 79.848 616.165 79.816 615.93 79.816C615.407 79.816 614.986 80.008 614.666 80.392C614.346 80.776 614.095 81.3733 613.914 82.184V87H612.442V78.568H613.706L613.85 80.28C614.074 79.6507 614.378 79.176 614.762 78.856C615.146 78.536 615.594 78.376 616.106 78.376ZM622.278 78.376C622.576 78.376 622.854 78.408 623.11 78.472L622.838 79.912C622.582 79.848 622.336 79.816 622.102 79.816C621.579 79.816 621.158 80.008 620.838 80.392C620.518 80.776 620.267 81.3733 620.086 82.184V87H618.614V78.568H619.878L620.022 80.28C620.246 79.6507 620.55 79.176 620.934 78.856C621.318 78.536 621.766 78.376 622.278 78.376ZM630.669 82.536C630.669 82.7813 630.659 83.032 630.637 83.288H625.261C625.325 84.216 625.56 84.8987 625.965 85.336C626.371 85.7733 626.893 85.992 627.533 85.992C627.939 85.992 628.312 85.9333 628.653 85.816C628.995 85.6987 629.352 85.512 629.725 85.256L630.365 86.136C629.469 86.84 628.488 87.192 627.421 87.192C626.248 87.192 625.331 86.808 624.669 86.04C624.019 85.272 623.693 84.216 623.693 82.872C623.693 81.9973 623.832 81.224 624.109 80.552C624.397 79.8693 624.803 79.336 625.325 78.952C625.859 78.568 626.483 78.376 627.197 78.376C628.317 78.376 629.176 78.744 629.773 79.48C630.371 80.216 630.669 81.2347 630.669 82.536ZM629.213 82.104C629.213 81.272 629.048 80.6373 628.717 80.2C628.387 79.7627 627.891 79.544 627.229 79.544C626.024 79.544 625.368 80.4293 625.261 82.2H629.213V82.104ZM636.988 78.376C637.756 78.376 638.353 78.6053 638.78 79.064C639.217 79.5227 639.436 80.152 639.436 80.952V87H637.964V81.16C637.964 80.5627 637.852 80.1413 637.628 79.896C637.404 79.6507 637.073 79.528 636.636 79.528C636.188 79.528 635.793 79.656 635.452 79.912C635.111 80.168 634.791 80.536 634.492 81.016V87H633.02V78.568H634.284L634.412 79.816C634.711 79.368 635.079 79.016 635.516 78.76C635.964 78.504 636.455 78.376 636.988 78.376ZM646.651 86.616C646.096 87 645.467 87.192 644.763 87.192C644.048 87.192 643.488 86.9893 643.083 86.584C642.688 86.168 642.491 85.5707 642.491 84.792V79.704H641.019V78.568H642.491V76.664L643.963 76.488V78.568H645.963L645.803 79.704H643.963V84.728C643.963 85.1653 644.038 85.4853 644.187 85.688C644.347 85.88 644.608 85.976 644.971 85.976C645.302 85.976 645.675 85.864 646.091 85.64L646.651 86.616ZM654.011 75.976V85.672H658.539L658.363 87H652.491V75.976H654.011ZM663.141 78.376C664.325 78.376 665.242 78.7707 665.893 79.56C666.554 80.3493 666.885 81.4213 666.885 82.776C666.885 83.6507 666.736 84.424 666.437 85.096C666.138 85.7573 665.706 86.2747 665.141 86.648C664.576 87.0107 663.904 87.192 663.125 87.192C661.941 87.192 661.018 86.7973 660.357 86.008C659.696 85.2187 659.365 84.1467 659.365 82.792C659.365 81.9173 659.514 81.1493 659.813 80.488C660.112 79.816 660.544 79.2987 661.109 78.936C661.674 78.5627 662.352 78.376 663.141 78.376ZM663.141 79.56C661.68 79.56 660.949 80.6373 660.949 82.792C660.949 84.936 661.674 86.008 663.125 86.008C664.576 86.008 665.301 84.9307 665.301 82.776C665.301 80.632 664.581 79.56 663.141 79.56ZM672.389 78.376C672.89 78.376 673.349 78.4507 673.765 78.6C674.181 78.7387 674.581 78.968 674.965 79.288L674.261 80.216C673.962 80.0027 673.669 79.848 673.381 79.752C673.104 79.6453 672.794 79.592 672.453 79.592C671.77 79.592 671.237 79.864 670.853 80.408C670.48 80.952 670.293 81.7573 670.293 82.824C670.293 83.8907 670.48 84.68 670.853 85.192C671.226 85.6933 671.76 85.944 672.453 85.944C672.784 85.944 673.088 85.896 673.365 85.8C673.642 85.6933 673.952 85.528 674.293 85.304L674.965 86.264C674.197 86.8827 673.338 87.192 672.389 87.192C671.248 87.192 670.346 86.808 669.685 86.04C669.034 85.272 668.709 84.2107 668.709 82.856C668.709 81.96 668.858 81.176 669.157 80.504C669.456 79.832 669.877 79.3093 670.421 78.936C670.976 78.5627 671.632 78.376 672.389 78.376ZM682.481 85.032C682.481 85.3733 682.54 85.6293 682.657 85.8C682.775 85.96 682.951 86.0827 683.185 86.168L682.849 87.192C682.412 87.1387 682.06 87.016 681.793 86.824C681.527 86.632 681.329 86.3333 681.201 85.928C680.636 86.7707 679.799 87.192 678.689 87.192C677.857 87.192 677.201 86.9573 676.721 86.488C676.241 86.0187 676.001 85.4053 676.001 84.648C676.001 83.752 676.321 83.064 676.961 82.584C677.612 82.104 678.529 81.864 679.713 81.864H681.009V81.24C681.009 80.6427 680.865 80.216 680.577 79.96C680.289 79.704 679.847 79.576 679.249 79.576C678.631 79.576 677.873 79.7253 676.977 80.024L676.609 78.952C677.655 78.568 678.625 78.376 679.521 78.376C680.513 78.376 681.255 78.6213 681.745 79.112C682.236 79.592 682.481 80.28 682.481 81.176V85.032ZM679.025 86.088C679.868 86.088 680.529 85.6507 681.009 84.776V82.84H679.905C678.348 82.84 677.569 83.416 677.569 84.568C677.569 85.0693 677.692 85.448 677.937 85.704C678.183 85.96 678.545 86.088 679.025 86.088ZM689.76 86.616C689.206 87 688.576 87.192 687.872 87.192C687.158 87.192 686.598 86.9893 686.192 86.584C685.798 86.168 685.6 85.5707 685.6 84.792V79.704H684.128V78.568H685.6V76.664L687.072 76.488V78.568H689.072L688.912 79.704H687.072V84.728C687.072 85.1653 687.147 85.4853 687.296 85.688C687.456 85.88 687.718 85.976 688.08 85.976C688.411 85.976 688.784 85.864 689.2 85.64L689.76 86.616ZM692.758 78.568V87H691.286V78.568H692.758ZM692.006 74.52C692.315 74.52 692.566 74.616 692.758 74.808C692.95 75 693.046 75.24 693.046 75.528C693.046 75.816 692.95 76.056 692.758 76.248C692.566 76.4293 692.315 76.52 692.006 76.52C691.707 76.52 691.462 76.4293 691.27 76.248C691.078 76.056 690.982 75.816 690.982 75.528C690.982 75.24 691.078 75 691.27 74.808C691.462 74.616 691.707 74.52 692.006 74.52ZM698.969 78.376C700.153 78.376 701.071 78.7707 701.721 79.56C702.383 80.3493 702.713 81.4213 702.713 82.776C702.713 83.6507 702.564 84.424 702.265 85.096C701.967 85.7573 701.535 86.2747 700.969 86.648C700.404 87.0107 699.732 87.192 698.953 87.192C697.769 87.192 696.847 86.7973 696.185 86.008C695.524 85.2187 695.193 84.1467 695.193 82.792C695.193 81.9173 695.343 81.1493 695.641 80.488C695.94 79.816 696.372 79.2987 696.937 78.936C697.503 78.5627 698.18 78.376 698.969 78.376ZM698.969 79.56C697.508 79.56 696.777 80.6373 696.777 82.792C696.777 84.936 697.503 86.008 698.953 86.008C700.404 86.008 701.129 84.9307 701.129 82.776C701.129 80.632 700.409 79.56 698.969 79.56ZM709.113 78.376C709.881 78.376 710.478 78.6053 710.905 79.064C711.342 79.5227 711.561 80.152 711.561 80.952V87H710.089V81.16C710.089 80.5627 709.977 80.1413 709.753 79.896C709.529 79.6507 709.198 79.528 708.761 79.528C708.313 79.528 707.918 79.656 707.577 79.912C707.236 80.168 706.916 80.536 706.617 81.016V87H705.145V78.568H706.409L706.537 79.816C706.836 79.368 707.204 79.016 707.641 78.76C708.089 78.504 708.58 78.376 709.113 78.376Z\" fill=\"white\"></path></g></svg></div><!-- /.header__map--><div class=\"slider-page__info\"><div class=\"subtitle-line_left slider-page__info-subtitle\">Surf</div><div class=\"slider-page__info-title title-header\">South Shore</div><div class=\"subtitle-line_left slider-page__info-subtitle subtitle_second\">Condition</div><div class=\"slider-page__info-text\">Radical</div><a class=\"slider-page__info-link\" href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-right.svg */ "./src/assets/images/header/pagination/arrow-right.svg") + "\" alt=\"\"></a></div><!-- /.slider-page__info--></div><!-- /.header__slider-page--><div class=\"header__slider-page slider-page dark-bg\" style=\"background-image: url(../src/assets/images/header/main/header-bg-3.jpg);\"><div class=\"header__map\"><svg width=\"1001\" height=\"476\" viewbox=\"0 0 1001 496\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Map\"><g id=\"np_california_725261_000000 copy\" opacity=\"0.29827\"><path id=\"Shape\" d=\"M1008.08 163.448L443.182 -356.858V-747.19L28.1096 -770C24.9043 -762.456 4.36709 -740.714 7.57176 -728.596C11.43 -714.102 30.8387 -718.735 36.4776 -709.409C43.0661 -698.42 31.7291 -653.749 28.3457 -640.86C21.8759 -616.445 7.09676 -596.665 2.82235 -572.25C-4.35982 -531.263 10.1824 -534.53 37.7242 -508.927C84.141 -465.742 46.9244 -420.952 58.6176 -370.223C68.1146 -328.878 109.605 -307.554 124.8 -266.211C136.553 -234.37 152.697 -226.233 177.746 -202.947C177.153 -217.084 164.51 -258.785 188.253 -255.102C211.817 -251.478 202.736 -216.669 207.247 -202.115C211.045 -189.997 237.933 -165.761 215.616 -154.593C208.196 -150.91 187.066 -165.582 178.577 -169.503C184.572 -150.791 180.774 -131.367 190.271 -113.487C201.608 -92.162 213.835 -100.359 228.853 -88.7754C244.344 -76.8355 242.683 -63.1137 235.797 -45.0554C228.615 -26.2247 221.196 -29.1352 232.592 -6.44342C240.843 9.95119 254.85 30.7421 266.9 43.2164C273.904 50.4634 281.502 52.1267 288.506 61.3932C294.323 69.1155 292.067 79.2142 299.012 86.1638C310.883 98.1037 331.006 98.282 340.384 113.904C350.831 131.309 338.96 144.437 369.706 142.833C371.309 177.643 377.897 209.185 377.541 243.994C394.695 250.825 422.414 242.687 440.399 239.063C458.266 263.18 481.355 246.429 501.774 259.558C510.678 265.26 508.837 279.517 514.239 284.506C525.339 294.723 533.529 288.308 547.301 291.872C557.51 294.486 565.404 301.97 575.138 304.703C584.338 307.257 599.475 301.258 606.301 309.396C614.492 319.138 600.78 336.958 613.127 344.799C623.395 351.333 638.115 335.77 648.088 338.027C659.721 340.7 693.079 371.174 701.271 381.212C710.59 392.677 719.969 414.062 725.25 428.793C733.501 451.841 732.373 463.127 749.408 479.998C760.27 490.75 749.942 491.522 767.63 494.67C779.204 496.749 794.518 488.374 806.212 487.067C830.549 484.394 855.122 489.027 879.102 484.453C901.421 480.176 922.729 473.166 945.64 469.899C965.465 467.048 1000.37 469.246 1017.94 459.801C1036.99 449.643 1038.71 426.654 1011.17 430.932C1008.97 416.26 1018.77 396.003 1007.85 385.847C1023.04 365.056 1028.56 350.384 1030.93 324.959C1032 313.792 1032.48 301.436 1038 292.05C1043.4 282.783 1058.59 277.259 1061.56 269.299C1066.13 256.943 1058.83 251.419 1053.25 244.528C1049.69 240.073 1039.54 242.212 1036.63 238.291C1031.23 231.103 1036.57 223.678 1033.6 216.431C1024.94 195.462 1014.61 187.205 1008.08 163.444C1008.26 167.424 1008.44 171.463 1008.2 175.384\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><path class=\"path-animation-3\" id=\"Path 2\" d=\"M729.114 83.9394C720.546 107.321 740.614 115.526 756.675 130.807C761.434 135.336 761.888 142.817 756.879 147.342C746.107 157.074 705.264 142.917 707.854 155.745C710.53 168.994 745.061 187.531 746.618 188.799C760.284 199.932 764.735 228.174 757.208 243.658C751.852 254.676 716.342 250.962 705.172 247.293C632.024 223.266 664.985 226.131 582.817 218.67C576.527 218.099 569.935 217.806 563.894 219.65C557.671 221.549 557.869 229.339 559.957 233.55C566.876 247.506 597.849 271.178 589.514 289.523C586.956 295.152 580.963 298.707 578.264 304.27C576.151 308.627 576.385 313.772 575.445 318.523\" stroke=\"white\" stroke-width=\"2\"></path><path class=\"animated fadeIn delay-4s\" id=\"Oval\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M573.5 326C577.09 326 580 323.09 580 319.5C580 315.91 577.09 313 573.5 313C569.91 313 567 315.91 567 319.5C567 323.09 569.91 326 573.5 326Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-2s\" id=\"Oval Copy 2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M661 363C662.657 363 664 361.657 664 360C664 358.343 662.657 357 661 357C659.343 357 658 358.343 658 360C658 361.657 659.343 363 661 363Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-3s\" id=\"Oval Copy 6\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M725 471C726.657 471 728 469.657 728 468C728 466.343 726.657 465 725 465C723.343 465 722 466.343 722 468C722 469.657 723.343 471 725 471Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-1s\" id=\"Oval Copy 7\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M365 228C366.657 228 368 226.657 368 225C368 223.343 366.657 222 365 222C363.343 222 362 223.343 362 225C362 226.657 363.343 228 365 228Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-5s\" id=\"Oval Copy\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M729.5 91C733.09 91 736 88.0899 736 84.5C736 80.9101 733.09 78 729.5 78C725.91 78 723 80.9101 723 84.5C723 88.0899 725.91 91 729.5 91Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-4s\" id=\"West Shore | Malibu,\" d=\"M398.41 310.976L396.17 322H394.218L392.186 312.768L390.138 322H388.234L385.994 310.976H387.482L389.258 320.672L391.386 310.976H393.002L395.178 320.672L397.018 310.976H398.41ZM406.544 317.536C406.544 317.781 406.534 318.032 406.512 318.288H401.136C401.2 319.216 401.435 319.899 401.84 320.336C402.246 320.773 402.768 320.992 403.408 320.992C403.814 320.992 404.187 320.933 404.528 320.816C404.87 320.699 405.227 320.512 405.6 320.256L406.24 321.136C405.344 321.84 404.363 322.192 403.296 322.192C402.123 322.192 401.206 321.808 400.544 321.04C399.894 320.272 399.568 319.216 399.568 317.872C399.568 316.997 399.707 316.224 399.984 315.552C400.272 314.869 400.678 314.336 401.2 313.952C401.734 313.568 402.358 313.376 403.072 313.376C404.192 313.376 405.051 313.744 405.648 314.48C406.246 315.216 406.544 316.235 406.544 317.536ZM405.088 317.104C405.088 316.272 404.923 315.637 404.592 315.2C404.262 314.763 403.766 314.544 403.104 314.544C401.899 314.544 401.243 315.429 401.136 317.2H405.088V317.104ZM411.183 313.376C411.759 313.376 412.276 313.456 412.735 313.616C413.194 313.776 413.631 314.016 414.047 314.336L413.423 315.264C413.039 315.019 412.671 314.837 412.319 314.72C411.978 314.603 411.615 314.544 411.231 314.544C410.751 314.544 410.372 314.645 410.095 314.848C409.818 315.04 409.679 315.307 409.679 315.648C409.679 315.989 409.807 316.256 410.063 316.448C410.33 316.64 410.804 316.827 411.487 317.008C412.426 317.243 413.124 317.563 413.583 317.968C414.052 318.373 414.287 318.928 414.287 319.632C414.287 320.464 413.962 321.099 413.311 321.536C412.671 321.973 411.887 322.192 410.959 322.192C409.679 322.192 408.618 321.824 407.775 321.088L408.559 320.192C409.274 320.736 410.063 321.008 410.927 321.008C411.482 321.008 411.919 320.896 412.239 320.672C412.57 320.437 412.735 320.123 412.735 319.728C412.735 319.44 412.676 319.211 412.559 319.04C412.442 318.859 412.239 318.704 411.951 318.576C411.663 318.437 411.242 318.293 410.687 318.144C409.791 317.909 409.14 317.595 408.735 317.2C408.34 316.805 408.143 316.304 408.143 315.696C408.143 315.259 408.271 314.864 408.527 314.512C408.794 314.149 409.156 313.872 409.615 313.68C410.084 313.477 410.607 313.376 411.183 313.376ZM420.62 321.616C420.065 322 419.436 322.192 418.732 322.192C418.017 322.192 417.457 321.989 417.052 321.584C416.657 321.168 416.46 320.571 416.46 319.792V314.704H414.988V313.568H416.46V311.664L417.932 311.488V313.568H419.932L419.772 314.704H417.932V319.728C417.932 320.165 418.006 320.485 418.156 320.688C418.316 320.88 418.577 320.976 418.94 320.976C419.27 320.976 419.644 320.864 420.06 320.64L420.62 321.616ZM429.179 310.784C429.915 310.784 430.545 310.891 431.067 311.104C431.59 311.307 432.097 311.627 432.587 312.064L431.755 312.992C431.339 312.661 430.929 312.421 430.523 312.272C430.129 312.112 429.702 312.032 429.243 312.032C428.667 312.032 428.193 312.165 427.819 312.432C427.446 312.699 427.259 313.088 427.259 313.6C427.259 313.92 427.323 314.192 427.451 314.416C427.579 314.629 427.814 314.827 428.155 315.008C428.507 315.189 429.014 315.381 429.675 315.584C430.369 315.797 430.945 316.027 431.403 316.272C431.862 316.517 432.23 316.859 432.507 317.296C432.795 317.723 432.939 318.267 432.939 318.928C432.939 319.568 432.779 320.133 432.459 320.624C432.15 321.115 431.697 321.499 431.099 321.776C430.513 322.053 429.814 322.192 429.003 322.192C427.478 322.192 426.23 321.717 425.259 320.768L426.091 319.84C426.539 320.203 426.993 320.48 427.451 320.672C427.91 320.853 428.422 320.944 428.987 320.944C429.67 320.944 430.235 320.779 430.683 320.448C431.131 320.107 431.355 319.616 431.355 318.976C431.355 318.613 431.286 318.315 431.147 318.08C431.009 317.835 430.769 317.616 430.427 317.424C430.097 317.232 429.611 317.04 428.971 316.848C427.841 316.507 427.014 316.096 426.491 315.616C425.969 315.136 425.707 314.485 425.707 313.664C425.707 313.109 425.851 312.613 426.139 312.176C426.438 311.739 426.849 311.397 427.371 311.152C427.905 310.907 428.507 310.784 429.179 310.784ZM439.066 313.376C439.834 313.376 440.431 313.605 440.858 314.064C441.295 314.523 441.514 315.152 441.514 315.952V322H440.042V316.16C440.042 315.563 439.925 315.141 439.69 314.896C439.466 314.651 439.135 314.528 438.698 314.528C438.261 314.528 437.871 314.656 437.53 314.912C437.189 315.168 436.869 315.531 436.57 316V322H435.098V310.192L436.57 310.032V314.736C437.231 313.829 438.063 313.376 439.066 313.376ZM447.641 313.376C448.825 313.376 449.742 313.771 450.393 314.56C451.054 315.349 451.385 316.421 451.385 317.776C451.385 318.651 451.236 319.424 450.937 320.096C450.638 320.757 450.206 321.275 449.641 321.648C449.076 322.011 448.404 322.192 447.625 322.192C446.441 322.192 445.518 321.797 444.857 321.008C444.196 320.219 443.865 319.147 443.865 317.792C443.865 316.917 444.014 316.149 444.313 315.488C444.612 314.816 445.044 314.299 445.609 313.936C446.174 313.563 446.852 313.376 447.641 313.376ZM447.641 314.56C446.18 314.56 445.449 315.637 445.449 317.792C445.449 319.936 446.174 321.008 447.625 321.008C449.076 321.008 449.801 319.931 449.801 317.776C449.801 315.632 449.081 314.56 447.641 314.56ZM457.481 313.376C457.78 313.376 458.057 313.408 458.313 313.472L458.041 314.912C457.785 314.848 457.54 314.816 457.305 314.816C456.782 314.816 456.361 315.008 456.041 315.392C455.721 315.776 455.47 316.373 455.289 317.184V322H453.817V313.568H455.081L455.225 315.28C455.449 314.651 455.753 314.176 456.137 313.856C456.521 313.536 456.969 313.376 457.481 313.376ZM465.872 317.536C465.872 317.781 465.862 318.032 465.84 318.288H460.464C460.528 319.216 460.763 319.899 461.168 320.336C461.574 320.773 462.096 320.992 462.736 320.992C463.142 320.992 463.515 320.933 463.856 320.816C464.198 320.699 464.555 320.512 464.928 320.256L465.568 321.136C464.672 321.84 463.691 322.192 462.624 322.192C461.451 322.192 460.534 321.808 459.872 321.04C459.222 320.272 458.896 319.216 458.896 317.872C458.896 316.997 459.035 316.224 459.312 315.552C459.6 314.869 460.006 314.336 460.528 313.952C461.062 313.568 461.686 313.376 462.4 313.376C463.52 313.376 464.379 313.744 464.976 314.48C465.574 315.216 465.872 316.235 465.872 317.536ZM464.416 317.104C464.416 316.272 464.251 315.637 463.92 315.2C463.59 314.763 463.094 314.544 462.432 314.544C461.227 314.544 460.571 315.429 460.464 317.2H464.416V317.104ZM474.41 309.184V323.568H474.058V309.184H474.41ZM493.237 322H491.765L491.381 317.024C491.221 315.072 491.131 313.573 491.109 312.528L488.725 320.752H487.301L484.789 312.512C484.789 313.845 484.72 315.387 484.581 317.136L484.213 322H482.773L483.685 310.976H485.733L488.053 318.992L490.261 310.976H492.325L493.237 322ZM501.434 320.032C501.434 320.373 501.493 320.629 501.61 320.8C501.728 320.96 501.904 321.083 502.138 321.168L501.802 322.192C501.365 322.139 501.013 322.016 500.746 321.824C500.48 321.632 500.282 321.333 500.154 320.928C499.589 321.771 498.752 322.192 497.642 322.192C496.81 322.192 496.154 321.957 495.674 321.488C495.194 321.019 494.954 320.405 494.954 319.648C494.954 318.752 495.274 318.064 495.914 317.584C496.565 317.104 497.482 316.864 498.666 316.864H499.962V316.24C499.962 315.643 499.818 315.216 499.53 314.96C499.242 314.704 498.8 314.576 498.202 314.576C497.584 314.576 496.826 314.725 495.93 315.024L495.562 313.952C496.608 313.568 497.578 313.376 498.474 313.376C499.466 313.376 500.208 313.621 500.698 314.112C501.189 314.592 501.434 315.28 501.434 316.176V320.032ZM497.978 321.088C498.821 321.088 499.482 320.651 499.962 319.776V317.84H498.858C497.301 317.84 496.522 318.416 496.522 319.568C496.522 320.069 496.645 320.448 496.89 320.704C497.136 320.96 497.498 321.088 497.978 321.088ZM505.981 322.192C505.437 322.192 505.005 322.032 504.685 321.712C504.376 321.381 504.221 320.923 504.221 320.336V310.176L505.693 310V320.304C505.693 320.539 505.731 320.709 505.805 320.816C505.891 320.923 506.029 320.976 506.221 320.976C506.424 320.976 506.605 320.944 506.765 320.88L507.149 321.904C506.797 322.096 506.408 322.192 505.981 322.192ZM510.461 313.568V322H508.989V313.568H510.461ZM509.709 309.52C510.018 309.52 510.269 309.616 510.461 309.808C510.653 310 510.749 310.24 510.749 310.528C510.749 310.816 510.653 311.056 510.461 311.248C510.269 311.429 510.018 311.52 509.709 311.52C509.41 311.52 509.165 311.429 508.973 311.248C508.781 311.056 508.685 310.816 508.685 310.528C508.685 310.24 508.781 310 508.973 309.808C509.165 309.616 509.41 309.52 509.709 309.52ZM517.36 313.376C518.32 313.376 519.083 313.765 519.648 314.544C520.214 315.312 520.496 316.389 520.496 317.776C520.496 318.651 520.363 319.424 520.096 320.096C519.83 320.757 519.446 321.275 518.944 321.648C518.443 322.011 517.856 322.192 517.184 322.192C516.299 322.192 515.552 321.819 514.944 321.072L514.8 322H513.504V310.176L514.976 310V314.624C515.584 313.792 516.379 313.376 517.36 313.376ZM516.832 321.024C517.483 321.024 517.99 320.763 518.352 320.24C518.726 319.707 518.912 318.885 518.912 317.776C518.912 316.635 518.742 315.813 518.4 315.312C518.059 314.8 517.574 314.544 516.944 314.544C516.198 314.544 515.542 314.981 514.976 315.856V319.888C515.2 320.24 515.472 320.517 515.792 320.72C516.123 320.923 516.47 321.024 516.832 321.024ZM529.276 322H528.012L527.9 320.688C527.58 321.211 527.212 321.595 526.796 321.84C526.38 322.075 525.874 322.192 525.276 322.192C524.54 322.192 523.964 321.968 523.548 321.52C523.132 321.072 522.924 320.437 522.924 319.616V313.568H524.396V319.456C524.396 320.032 524.498 320.443 524.7 320.688C524.903 320.923 525.234 321.04 525.692 321.04C526.514 321.04 527.218 320.555 527.804 319.584V313.568H529.276V322ZM532.701 319.968C533.021 319.968 533.288 320.075 533.501 320.288C533.714 320.501 533.821 320.763 533.821 321.072C533.821 321.403 533.725 321.781 533.533 322.208L532.461 324.656H531.405L532.045 322C531.906 321.893 531.794 321.76 531.709 321.6C531.634 321.44 531.597 321.264 531.597 321.072C531.597 320.763 531.704 320.501 531.917 320.288C532.13 320.075 532.392 319.968 532.701 319.968ZM544.331 310.784C544.992 310.784 545.547 310.869 545.995 311.04C546.454 311.211 546.918 311.488 547.387 311.872L546.555 312.848C545.883 312.304 545.174 312.032 544.427 312.032C543.51 312.032 542.768 312.384 542.203 313.088C541.648 313.792 541.371 314.923 541.371 316.48C541.371 317.995 541.648 319.115 542.203 319.84C542.758 320.555 543.494 320.912 544.411 320.912C544.88 320.912 545.291 320.832 545.643 320.672C545.995 320.512 546.368 320.288 546.763 320L547.515 320.96C547.174 321.312 546.736 321.605 546.203 321.84C545.67 322.075 545.056 322.192 544.363 322.192C543.467 322.192 542.667 321.973 541.963 321.536C541.27 321.088 540.726 320.437 540.331 319.584C539.947 318.72 539.755 317.685 539.755 316.48C539.755 315.275 539.958 314.245 540.363 313.392C540.768 312.528 541.318 311.877 542.011 311.44C542.704 311.003 543.478 310.784 544.331 310.784ZM555.3 322L554.468 319.232H550.292L549.46 322H547.924L551.46 310.976H553.38L556.9 322H555.3ZM550.66 318H554.1L552.388 312.24L550.66 318Z\" fill=\"white\"></path><path class=\"animated fadeIn delay-5s\" id=\"Current Location\" d=\"M598.378 75.784C599.039 75.784 599.594 75.8693 600.042 76.04C600.501 76.2107 600.965 76.488 601.434 76.872L600.602 77.848C599.93 77.304 599.221 77.032 598.474 77.032C597.557 77.032 596.815 77.384 596.25 78.088C595.695 78.792 595.418 79.9227 595.418 81.48C595.418 82.9947 595.695 84.1147 596.25 84.84C596.805 85.5547 597.541 85.912 598.458 85.912C598.927 85.912 599.338 85.832 599.69 85.672C600.042 85.512 600.415 85.288 600.81 85L601.562 85.96C601.221 86.312 600.783 86.6053 600.25 86.84C599.717 87.0747 599.103 87.192 598.41 87.192C597.514 87.192 596.714 86.9733 596.01 86.536C595.317 86.088 594.773 85.4373 594.378 84.584C593.994 83.72 593.802 82.6853 593.802 81.48C593.802 80.2747 594.005 79.2453 594.41 78.392C594.815 77.528 595.365 76.8773 596.058 76.44C596.751 76.0027 597.525 75.784 598.378 75.784ZM609.401 87H608.137L608.025 85.688C607.705 86.2107 607.337 86.5947 606.921 86.84C606.505 87.0747 605.999 87.192 605.401 87.192C604.665 87.192 604.089 86.968 603.673 86.52C603.257 86.072 603.049 85.4373 603.049 84.616V78.568H604.521V84.456C604.521 85.032 604.623 85.4427 604.825 85.688C605.028 85.9227 605.359 86.04 605.817 86.04C606.639 86.04 607.343 85.5547 607.929 84.584V78.568H609.401V87ZM616.106 78.376C616.405 78.376 616.682 78.408 616.938 78.472L616.666 79.912C616.41 79.848 616.165 79.816 615.93 79.816C615.407 79.816 614.986 80.008 614.666 80.392C614.346 80.776 614.095 81.3733 613.914 82.184V87H612.442V78.568H613.706L613.85 80.28C614.074 79.6507 614.378 79.176 614.762 78.856C615.146 78.536 615.594 78.376 616.106 78.376ZM622.278 78.376C622.576 78.376 622.854 78.408 623.11 78.472L622.838 79.912C622.582 79.848 622.336 79.816 622.102 79.816C621.579 79.816 621.158 80.008 620.838 80.392C620.518 80.776 620.267 81.3733 620.086 82.184V87H618.614V78.568H619.878L620.022 80.28C620.246 79.6507 620.55 79.176 620.934 78.856C621.318 78.536 621.766 78.376 622.278 78.376ZM630.669 82.536C630.669 82.7813 630.659 83.032 630.637 83.288H625.261C625.325 84.216 625.56 84.8987 625.965 85.336C626.371 85.7733 626.893 85.992 627.533 85.992C627.939 85.992 628.312 85.9333 628.653 85.816C628.995 85.6987 629.352 85.512 629.725 85.256L630.365 86.136C629.469 86.84 628.488 87.192 627.421 87.192C626.248 87.192 625.331 86.808 624.669 86.04C624.019 85.272 623.693 84.216 623.693 82.872C623.693 81.9973 623.832 81.224 624.109 80.552C624.397 79.8693 624.803 79.336 625.325 78.952C625.859 78.568 626.483 78.376 627.197 78.376C628.317 78.376 629.176 78.744 629.773 79.48C630.371 80.216 630.669 81.2347 630.669 82.536ZM629.213 82.104C629.213 81.272 629.048 80.6373 628.717 80.2C628.387 79.7627 627.891 79.544 627.229 79.544C626.024 79.544 625.368 80.4293 625.261 82.2H629.213V82.104ZM636.988 78.376C637.756 78.376 638.353 78.6053 638.78 79.064C639.217 79.5227 639.436 80.152 639.436 80.952V87H637.964V81.16C637.964 80.5627 637.852 80.1413 637.628 79.896C637.404 79.6507 637.073 79.528 636.636 79.528C636.188 79.528 635.793 79.656 635.452 79.912C635.111 80.168 634.791 80.536 634.492 81.016V87H633.02V78.568H634.284L634.412 79.816C634.711 79.368 635.079 79.016 635.516 78.76C635.964 78.504 636.455 78.376 636.988 78.376ZM646.651 86.616C646.096 87 645.467 87.192 644.763 87.192C644.048 87.192 643.488 86.9893 643.083 86.584C642.688 86.168 642.491 85.5707 642.491 84.792V79.704H641.019V78.568H642.491V76.664L643.963 76.488V78.568H645.963L645.803 79.704H643.963V84.728C643.963 85.1653 644.038 85.4853 644.187 85.688C644.347 85.88 644.608 85.976 644.971 85.976C645.302 85.976 645.675 85.864 646.091 85.64L646.651 86.616ZM654.011 75.976V85.672H658.539L658.363 87H652.491V75.976H654.011ZM663.141 78.376C664.325 78.376 665.242 78.7707 665.893 79.56C666.554 80.3493 666.885 81.4213 666.885 82.776C666.885 83.6507 666.736 84.424 666.437 85.096C666.138 85.7573 665.706 86.2747 665.141 86.648C664.576 87.0107 663.904 87.192 663.125 87.192C661.941 87.192 661.018 86.7973 660.357 86.008C659.696 85.2187 659.365 84.1467 659.365 82.792C659.365 81.9173 659.514 81.1493 659.813 80.488C660.112 79.816 660.544 79.2987 661.109 78.936C661.674 78.5627 662.352 78.376 663.141 78.376ZM663.141 79.56C661.68 79.56 660.949 80.6373 660.949 82.792C660.949 84.936 661.674 86.008 663.125 86.008C664.576 86.008 665.301 84.9307 665.301 82.776C665.301 80.632 664.581 79.56 663.141 79.56ZM672.389 78.376C672.89 78.376 673.349 78.4507 673.765 78.6C674.181 78.7387 674.581 78.968 674.965 79.288L674.261 80.216C673.962 80.0027 673.669 79.848 673.381 79.752C673.104 79.6453 672.794 79.592 672.453 79.592C671.77 79.592 671.237 79.864 670.853 80.408C670.48 80.952 670.293 81.7573 670.293 82.824C670.293 83.8907 670.48 84.68 670.853 85.192C671.226 85.6933 671.76 85.944 672.453 85.944C672.784 85.944 673.088 85.896 673.365 85.8C673.642 85.6933 673.952 85.528 674.293 85.304L674.965 86.264C674.197 86.8827 673.338 87.192 672.389 87.192C671.248 87.192 670.346 86.808 669.685 86.04C669.034 85.272 668.709 84.2107 668.709 82.856C668.709 81.96 668.858 81.176 669.157 80.504C669.456 79.832 669.877 79.3093 670.421 78.936C670.976 78.5627 671.632 78.376 672.389 78.376ZM682.481 85.032C682.481 85.3733 682.54 85.6293 682.657 85.8C682.775 85.96 682.951 86.0827 683.185 86.168L682.849 87.192C682.412 87.1387 682.06 87.016 681.793 86.824C681.527 86.632 681.329 86.3333 681.201 85.928C680.636 86.7707 679.799 87.192 678.689 87.192C677.857 87.192 677.201 86.9573 676.721 86.488C676.241 86.0187 676.001 85.4053 676.001 84.648C676.001 83.752 676.321 83.064 676.961 82.584C677.612 82.104 678.529 81.864 679.713 81.864H681.009V81.24C681.009 80.6427 680.865 80.216 680.577 79.96C680.289 79.704 679.847 79.576 679.249 79.576C678.631 79.576 677.873 79.7253 676.977 80.024L676.609 78.952C677.655 78.568 678.625 78.376 679.521 78.376C680.513 78.376 681.255 78.6213 681.745 79.112C682.236 79.592 682.481 80.28 682.481 81.176V85.032ZM679.025 86.088C679.868 86.088 680.529 85.6507 681.009 84.776V82.84H679.905C678.348 82.84 677.569 83.416 677.569 84.568C677.569 85.0693 677.692 85.448 677.937 85.704C678.183 85.96 678.545 86.088 679.025 86.088ZM689.76 86.616C689.206 87 688.576 87.192 687.872 87.192C687.158 87.192 686.598 86.9893 686.192 86.584C685.798 86.168 685.6 85.5707 685.6 84.792V79.704H684.128V78.568H685.6V76.664L687.072 76.488V78.568H689.072L688.912 79.704H687.072V84.728C687.072 85.1653 687.147 85.4853 687.296 85.688C687.456 85.88 687.718 85.976 688.08 85.976C688.411 85.976 688.784 85.864 689.2 85.64L689.76 86.616ZM692.758 78.568V87H691.286V78.568H692.758ZM692.006 74.52C692.315 74.52 692.566 74.616 692.758 74.808C692.95 75 693.046 75.24 693.046 75.528C693.046 75.816 692.95 76.056 692.758 76.248C692.566 76.4293 692.315 76.52 692.006 76.52C691.707 76.52 691.462 76.4293 691.27 76.248C691.078 76.056 690.982 75.816 690.982 75.528C690.982 75.24 691.078 75 691.27 74.808C691.462 74.616 691.707 74.52 692.006 74.52ZM698.969 78.376C700.153 78.376 701.071 78.7707 701.721 79.56C702.383 80.3493 702.713 81.4213 702.713 82.776C702.713 83.6507 702.564 84.424 702.265 85.096C701.967 85.7573 701.535 86.2747 700.969 86.648C700.404 87.0107 699.732 87.192 698.953 87.192C697.769 87.192 696.847 86.7973 696.185 86.008C695.524 85.2187 695.193 84.1467 695.193 82.792C695.193 81.9173 695.343 81.1493 695.641 80.488C695.94 79.816 696.372 79.2987 696.937 78.936C697.503 78.5627 698.18 78.376 698.969 78.376ZM698.969 79.56C697.508 79.56 696.777 80.6373 696.777 82.792C696.777 84.936 697.503 86.008 698.953 86.008C700.404 86.008 701.129 84.9307 701.129 82.776C701.129 80.632 700.409 79.56 698.969 79.56ZM709.113 78.376C709.881 78.376 710.478 78.6053 710.905 79.064C711.342 79.5227 711.561 80.152 711.561 80.952V87H710.089V81.16C710.089 80.5627 709.977 80.1413 709.753 79.896C709.529 79.6507 709.198 79.528 708.761 79.528C708.313 79.528 707.918 79.656 707.577 79.912C707.236 80.168 706.916 80.536 706.617 81.016V87H705.145V78.568H706.409L706.537 79.816C706.836 79.368 707.204 79.016 707.641 78.76C708.089 78.504 708.58 78.376 709.113 78.376Z\" fill=\"white\"></path></g></svg></div><!-- /.header__map--><div class=\"slider-page__info\"><div class=\"subtitle-line_left slider-page__info-subtitle\">Surf</div><div class=\"slider-page__info-title\">West Shore</div><div class=\"subtitle-line_left slider-page__info-subtitle subtitle_second\">Condition</div><div class=\"slider-page__info-text\">Radical</div><a class=\"slider-page__info-link\" href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-right.svg */ "./src/assets/images/header/pagination/arrow-right.svg") + "\" alt=\"\"></a></div><!-- /.slider-page__info--></div><!-- /.header__slider-page--><div class=\"header__slider-page slider-page dark-bg\" style=\"background-image: url(../src/assets/images/header/main/header-bg-4.jpg);\"><div class=\"header__map\"><svg width=\"1001\" height=\"476\" viewbox=\"0 0 1001 496\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Map\"><g id=\"np_california_725261_000000 copy\" opacity=\"0.29827\"><path id=\"Shape\" d=\"M1008.08 163.448L443.182 -356.858V-747.19L28.1096 -770C24.9043 -762.456 4.36709 -740.714 7.57176 -728.596C11.43 -714.102 30.8387 -718.735 36.4776 -709.409C43.0661 -698.42 31.7291 -653.749 28.3457 -640.86C21.8759 -616.445 7.09676 -596.665 2.82235 -572.25C-4.35982 -531.263 10.1824 -534.53 37.7242 -508.927C84.141 -465.742 46.9244 -420.952 58.6176 -370.223C68.1146 -328.878 109.605 -307.554 124.8 -266.211C136.553 -234.37 152.697 -226.233 177.746 -202.947C177.153 -217.084 164.51 -258.785 188.253 -255.102C211.817 -251.478 202.736 -216.669 207.247 -202.115C211.045 -189.997 237.933 -165.761 215.616 -154.593C208.196 -150.91 187.066 -165.582 178.577 -169.503C184.572 -150.791 180.774 -131.367 190.271 -113.487C201.608 -92.162 213.835 -100.359 228.853 -88.7754C244.344 -76.8355 242.683 -63.1137 235.797 -45.0554C228.615 -26.2247 221.196 -29.1352 232.592 -6.44342C240.843 9.95119 254.85 30.7421 266.9 43.2164C273.904 50.4634 281.502 52.1267 288.506 61.3932C294.323 69.1155 292.067 79.2142 299.012 86.1638C310.883 98.1037 331.006 98.282 340.384 113.904C350.831 131.309 338.96 144.437 369.706 142.833C371.309 177.643 377.897 209.185 377.541 243.994C394.695 250.825 422.414 242.687 440.399 239.063C458.266 263.18 481.355 246.429 501.774 259.558C510.678 265.26 508.837 279.517 514.239 284.506C525.339 294.723 533.529 288.308 547.301 291.872C557.51 294.486 565.404 301.97 575.138 304.703C584.338 307.257 599.475 301.258 606.301 309.396C614.492 319.138 600.78 336.958 613.127 344.799C623.395 351.333 638.115 335.77 648.088 338.027C659.721 340.7 693.079 371.174 701.271 381.212C710.59 392.677 719.969 414.062 725.25 428.793C733.501 451.841 732.373 463.127 749.408 479.998C760.27 490.75 749.942 491.522 767.63 494.67C779.204 496.749 794.518 488.374 806.212 487.067C830.549 484.394 855.122 489.027 879.102 484.453C901.421 480.176 922.729 473.166 945.64 469.899C965.465 467.048 1000.37 469.246 1017.94 459.801C1036.99 449.643 1038.71 426.654 1011.17 430.932C1008.97 416.26 1018.77 396.003 1007.85 385.847C1023.04 365.056 1028.56 350.384 1030.93 324.959C1032 313.792 1032.48 301.436 1038 292.05C1043.4 282.783 1058.59 277.259 1061.56 269.299C1066.13 256.943 1058.83 251.419 1053.25 244.528C1049.69 240.073 1039.54 242.212 1036.63 238.291C1031.23 231.103 1036.57 223.678 1033.6 216.431C1024.94 195.462 1014.61 187.205 1008.08 163.444C1008.26 167.424 1008.44 171.463 1008.2 175.384\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g><path class=\"animated fadeIn delay-4s\" id=\"Oval\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M659.5 364C663.09 364 666 361.09 666 357.5C666 353.91 663.09 351 659.5 351C655.91 351 653 353.91 653 357.5C653 361.09 655.91 364 659.5 364Z\" fill=\"#4AF6CD\"></path><path class=\"path-animation-4\" id=\"Path 3\" d=\"M729.719 85C725.863 111.513 734.894 120.816 742.123 138.145C744.264 143.28 744.469 151.763 742.214 156.894C737.366 167.929 718.985 151.876 720.151 166.422C721.355 181.446 736.896 202.466 737.596 203.903C743.747 216.527 745.75 248.552 742.363 266.11C739.952 278.603 723.971 274.392 718.944 270.231C686.024 242.986 700.858 246.235 663.879 237.774C661.048 237.127 658.081 236.795 655.363 238.886C652.562 241.039 652.651 249.872 653.591 254.647C656.704 270.472 670.644 297.315 666.893 318.116C665.742 324.499 663.044 328.531 661.83 334.838C660.879 339.779 660.984 345.613 660.561 351\" stroke=\"white\" stroke-width=\"2\"></path><path class=\"animated fadeIn delay-1s\" id=\"Oval Copy 2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M366 227C367.657 227 369 225.657 369 224C369 222.343 367.657 221 366 221C364.343 221 363 222.343 363 224C363 225.657 364.343 227 366 227Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-3s\" id=\"Oval Copy 6\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M725 471C726.657 471 728 469.657 728 468C728 466.343 726.657 465 725 465C723.343 465 722 466.343 722 468C722 469.657 723.343 471 725 471Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-2s\" id=\"Oval Copy 7\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M574 322C575.657 322 577 320.657 577 319C577 317.343 575.657 316 574 316C572.343 316 571 317.343 571 319C571 320.657 572.343 322 574 322Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-5s\" id=\"Oval Copy\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M729.5 91C733.09 91 736 88.0899 736 84.5C736 80.9101 733.09 78 729.5 78C725.91 78 723 80.9101 723 84.5C723 88.0899 725.91 91 729.5 91Z\" fill=\"#4AF6CD\"></path><path class=\"animated fadeIn delay-4s\" id=\"East Shore | Brisben, AU\" d=\"M493.068 376.976L492.892 378.192H488.62V381.792H492.332V383.008H488.62V386.784H493.196V388H487.1V376.976H493.068ZM501.075 386.032C501.075 386.373 501.134 386.629 501.251 386.8C501.368 386.96 501.544 387.083 501.779 387.168L501.443 388.192C501.006 388.139 500.654 388.016 500.387 387.824C500.12 387.632 499.923 387.333 499.795 386.928C499.23 387.771 498.392 388.192 497.283 388.192C496.451 388.192 495.795 387.957 495.315 387.488C494.835 387.019 494.595 386.405 494.595 385.648C494.595 384.752 494.915 384.064 495.555 383.584C496.206 383.104 497.123 382.864 498.307 382.864H499.603V382.24C499.603 381.643 499.459 381.216 499.171 380.96C498.883 380.704 498.44 380.576 497.843 380.576C497.224 380.576 496.467 380.725 495.571 381.024L495.203 379.952C496.248 379.568 497.219 379.376 498.115 379.376C499.107 379.376 499.848 379.621 500.339 380.112C500.83 380.592 501.075 381.28 501.075 382.176V386.032ZM497.619 387.088C498.462 387.088 499.123 386.651 499.603 385.776V383.84H498.499C496.942 383.84 496.163 384.416 496.163 385.568C496.163 386.069 496.286 386.448 496.531 386.704C496.776 386.96 497.139 387.088 497.619 387.088ZM506.23 379.376C506.806 379.376 507.323 379.456 507.782 379.616C508.241 379.776 508.678 380.016 509.094 380.336L508.47 381.264C508.086 381.019 507.718 380.837 507.366 380.72C507.025 380.603 506.662 380.544 506.278 380.544C505.798 380.544 505.419 380.645 505.142 380.848C504.865 381.04 504.726 381.307 504.726 381.648C504.726 381.989 504.854 382.256 505.11 382.448C505.377 382.64 505.851 382.827 506.534 383.008C507.473 383.243 508.171 383.563 508.63 383.968C509.099 384.373 509.334 384.928 509.334 385.632C509.334 386.464 509.009 387.099 508.358 387.536C507.718 387.973 506.934 388.192 506.006 388.192C504.726 388.192 503.665 387.824 502.822 387.088L503.606 386.192C504.321 386.736 505.11 387.008 505.974 387.008C506.529 387.008 506.966 386.896 507.286 386.672C507.617 386.437 507.782 386.123 507.782 385.728C507.782 385.44 507.723 385.211 507.606 385.04C507.489 384.859 507.286 384.704 506.998 384.576C506.71 384.437 506.289 384.293 505.734 384.144C504.838 383.909 504.187 383.595 503.782 383.2C503.387 382.805 503.19 382.304 503.19 381.696C503.19 381.259 503.318 380.864 503.574 380.512C503.841 380.149 504.203 379.872 504.662 379.68C505.131 379.477 505.654 379.376 506.23 379.376ZM515.667 387.616C515.112 388 514.483 388.192 513.779 388.192C513.064 388.192 512.504 387.989 512.099 387.584C511.704 387.168 511.507 386.571 511.507 385.792V380.704H510.035V379.568H511.507V377.664L512.979 377.488V379.568H514.979L514.819 380.704H512.979V385.728C512.979 386.165 513.053 386.485 513.203 386.688C513.363 386.88 513.624 386.976 513.987 386.976C514.317 386.976 514.691 386.864 515.107 386.64L515.667 387.616ZM524.226 376.784C524.962 376.784 525.592 376.891 526.114 377.104C526.637 377.307 527.144 377.627 527.634 378.064L526.802 378.992C526.386 378.661 525.976 378.421 525.57 378.272C525.176 378.112 524.749 378.032 524.29 378.032C523.714 378.032 523.24 378.165 522.866 378.432C522.493 378.699 522.306 379.088 522.306 379.6C522.306 379.92 522.37 380.192 522.498 380.416C522.626 380.629 522.861 380.827 523.202 381.008C523.554 381.189 524.061 381.381 524.722 381.584C525.416 381.797 525.992 382.027 526.45 382.272C526.909 382.517 527.277 382.859 527.554 383.296C527.842 383.723 527.986 384.267 527.986 384.928C527.986 385.568 527.826 386.133 527.506 386.624C527.197 387.115 526.744 387.499 526.146 387.776C525.56 388.053 524.861 388.192 524.05 388.192C522.525 388.192 521.277 387.717 520.306 386.768L521.138 385.84C521.586 386.203 522.04 386.48 522.498 386.672C522.957 386.853 523.469 386.944 524.034 386.944C524.717 386.944 525.282 386.779 525.73 386.448C526.178 386.107 526.402 385.616 526.402 384.976C526.402 384.613 526.333 384.315 526.194 384.08C526.056 383.835 525.816 383.616 525.474 383.424C525.144 383.232 524.658 383.04 524.018 382.848C522.888 382.507 522.061 382.096 521.538 381.616C521.016 381.136 520.754 380.485 520.754 379.664C520.754 379.109 520.898 378.613 521.186 378.176C521.485 377.739 521.896 377.397 522.418 377.152C522.952 376.907 523.554 376.784 524.226 376.784ZM534.113 379.376C534.881 379.376 535.478 379.605 535.905 380.064C536.342 380.523 536.561 381.152 536.561 381.952V388H535.089V382.16C535.089 381.563 534.972 381.141 534.737 380.896C534.513 380.651 534.182 380.528 533.745 380.528C533.308 380.528 532.918 380.656 532.577 380.912C532.236 381.168 531.916 381.531 531.617 382V388H530.145V376.192L531.617 376.032V380.736C532.278 379.829 533.11 379.376 534.113 379.376ZM542.688 379.376C543.872 379.376 544.789 379.771 545.44 380.56C546.101 381.349 546.432 382.421 546.432 383.776C546.432 384.651 546.283 385.424 545.984 386.096C545.685 386.757 545.253 387.275 544.688 387.648C544.123 388.011 543.451 388.192 542.672 388.192C541.488 388.192 540.565 387.797 539.904 387.008C539.243 386.219 538.912 385.147 538.912 383.792C538.912 382.917 539.061 382.149 539.36 381.488C539.659 380.816 540.091 380.299 540.656 379.936C541.221 379.563 541.899 379.376 542.688 379.376ZM542.688 380.56C541.227 380.56 540.496 381.637 540.496 383.792C540.496 385.936 541.221 387.008 542.672 387.008C544.123 387.008 544.848 385.931 544.848 383.776C544.848 381.632 544.128 380.56 542.688 380.56ZM552.528 379.376C552.826 379.376 553.104 379.408 553.36 379.472L553.088 380.912C552.832 380.848 552.586 380.816 552.352 380.816C551.829 380.816 551.408 381.008 551.088 381.392C550.768 381.776 550.517 382.373 550.336 383.184V388H548.864V379.568H550.128L550.272 381.28C550.496 380.651 550.8 380.176 551.184 379.856C551.568 379.536 552.016 379.376 552.528 379.376ZM560.919 383.536C560.919 383.781 560.909 384.032 560.887 384.288H555.511C555.575 385.216 555.81 385.899 556.215 386.336C556.621 386.773 557.143 386.992 557.783 386.992C558.189 386.992 558.562 386.933 558.903 386.816C559.245 386.699 559.602 386.512 559.975 386.256L560.615 387.136C559.719 387.84 558.738 388.192 557.671 388.192C556.498 388.192 555.581 387.808 554.919 387.04C554.269 386.272 553.943 385.216 553.943 383.872C553.943 382.997 554.082 382.224 554.359 381.552C554.647 380.869 555.053 380.336 555.575 379.952C556.109 379.568 556.733 379.376 557.447 379.376C558.567 379.376 559.426 379.744 560.023 380.48C560.621 381.216 560.919 382.235 560.919 383.536ZM559.463 383.104C559.463 382.272 559.298 381.637 558.967 381.2C558.637 380.763 558.141 380.544 557.479 380.544C556.274 380.544 555.618 381.429 555.511 383.2H559.463V383.104ZM569.456 375.184V389.568H569.104V375.184H569.456ZM583.292 382.176C584.049 382.304 584.663 382.571 585.132 382.976C585.601 383.381 585.836 384.011 585.836 384.864C585.836 386.955 584.38 388 581.468 388H578.428V376.976H581.036C582.433 376.976 583.5 377.205 584.236 377.664C584.983 378.123 585.356 378.821 585.356 379.76C585.356 380.4 585.153 380.933 584.748 381.36C584.353 381.787 583.868 382.059 583.292 382.176ZM579.948 378.176V381.648H581.612C582.252 381.648 582.775 381.493 583.18 381.184C583.596 380.875 583.804 380.437 583.804 379.872C583.804 379.232 583.585 378.789 583.148 378.544C582.721 378.299 582.071 378.176 581.196 378.176H579.948ZM581.468 386.784C582.364 386.784 583.047 386.651 583.516 386.384C583.996 386.117 584.236 385.611 584.236 384.864C584.236 384.139 584.007 383.616 583.548 383.296C583.089 382.976 582.492 382.816 581.756 382.816H579.948V386.784H581.468ZM591.747 379.376C592.045 379.376 592.323 379.408 592.579 379.472L592.307 380.912C592.051 380.848 591.805 380.816 591.571 380.816C591.048 380.816 590.627 381.008 590.307 381.392C589.987 381.776 589.736 382.373 589.555 383.184V388H588.083V379.568H589.347L589.491 381.28C589.715 380.651 590.019 380.176 590.403 379.856C590.787 379.536 591.235 379.376 591.747 379.376ZM595.726 379.568V388H594.254V379.568H595.726ZM594.974 375.52C595.284 375.52 595.534 375.616 595.726 375.808C595.918 376 596.014 376.24 596.014 376.528C596.014 376.816 595.918 377.056 595.726 377.248C595.534 377.429 595.284 377.52 594.974 377.52C594.676 377.52 594.43 377.429 594.238 377.248C594.046 377.056 593.95 376.816 593.95 376.528C593.95 376.24 594.046 376 594.238 375.808C594.43 375.616 594.676 375.52 594.974 375.52ZM601.058 379.376C601.634 379.376 602.151 379.456 602.61 379.616C603.069 379.776 603.506 380.016 603.922 380.336L603.298 381.264C602.914 381.019 602.546 380.837 602.194 380.72C601.853 380.603 601.49 380.544 601.106 380.544C600.626 380.544 600.247 380.645 599.97 380.848C599.693 381.04 599.554 381.307 599.554 381.648C599.554 381.989 599.682 382.256 599.938 382.448C600.205 382.64 600.679 382.827 601.362 383.008C602.301 383.243 602.999 383.563 603.458 383.968C603.927 384.373 604.162 384.928 604.162 385.632C604.162 386.464 603.837 387.099 603.186 387.536C602.546 387.973 601.762 388.192 600.834 388.192C599.554 388.192 598.493 387.824 597.65 387.088L598.434 386.192C599.149 386.736 599.938 387.008 600.802 387.008C601.357 387.008 601.794 386.896 602.114 386.672C602.445 386.437 602.61 386.123 602.61 385.728C602.61 385.44 602.551 385.211 602.434 385.04C602.317 384.859 602.114 384.704 601.826 384.576C601.538 384.437 601.117 384.293 600.562 384.144C599.666 383.909 599.015 383.595 598.61 383.2C598.215 382.805 598.018 382.304 598.018 381.696C598.018 381.259 598.146 380.864 598.402 380.512C598.669 380.149 599.031 379.872 599.49 379.68C599.959 379.477 600.482 379.376 601.058 379.376ZM610.095 379.376C611.055 379.376 611.817 379.765 612.383 380.544C612.948 381.312 613.231 382.389 613.231 383.776C613.231 384.651 613.097 385.424 612.831 386.096C612.564 386.757 612.18 387.275 611.679 387.648C611.177 388.011 610.591 388.192 609.919 388.192C609.033 388.192 608.287 387.819 607.679 387.072L607.535 388H606.239V376.176L607.711 376V380.624C608.319 379.792 609.113 379.376 610.095 379.376ZM609.567 387.024C610.217 387.024 610.724 386.763 611.087 386.24C611.46 385.707 611.647 384.885 611.647 383.776C611.647 382.635 611.476 381.813 611.135 381.312C610.793 380.8 610.308 380.544 609.679 380.544C608.932 380.544 608.276 380.981 607.711 381.856V385.888C607.935 386.24 608.207 386.517 608.527 386.72C608.857 386.923 609.204 387.024 609.567 387.024ZM622.107 383.536C622.107 383.781 622.096 384.032 622.075 384.288H616.699C616.763 385.216 616.997 385.899 617.403 386.336C617.808 386.773 618.331 386.992 618.971 386.992C619.376 386.992 619.749 386.933 620.091 386.816C620.432 386.699 620.789 386.512 621.163 386.256L621.803 387.136C620.907 387.84 619.925 388.192 618.859 388.192C617.685 388.192 616.768 387.808 616.107 387.04C615.456 386.272 615.131 385.216 615.131 383.872C615.131 382.997 615.269 382.224 615.547 381.552C615.835 380.869 616.24 380.336 616.763 379.952C617.296 379.568 617.92 379.376 618.635 379.376C619.755 379.376 620.613 379.744 621.211 380.48C621.808 381.216 622.107 382.235 622.107 383.536ZM620.651 383.104C620.651 382.272 620.485 381.637 620.155 381.2C619.824 380.763 619.328 380.544 618.667 380.544C617.461 380.544 616.805 381.429 616.699 383.2H620.651V383.104ZM628.426 379.376C629.194 379.376 629.791 379.605 630.218 380.064C630.655 380.523 630.874 381.152 630.874 381.952V388H629.402V382.16C629.402 381.563 629.29 381.141 629.066 380.896C628.842 380.651 628.511 380.528 628.074 380.528C627.626 380.528 627.231 380.656 626.89 380.912C626.548 381.168 626.228 381.536 625.93 382.016V388H624.458V379.568H625.722L625.85 380.816C626.148 380.368 626.516 380.016 626.954 379.76C627.402 379.504 627.892 379.376 628.426 379.376ZM634.217 385.968C634.537 385.968 634.803 386.075 635.017 386.288C635.23 386.501 635.337 386.763 635.337 387.072C635.337 387.403 635.241 387.781 635.049 388.208L633.977 390.656H632.921L633.561 388C633.422 387.893 633.31 387.76 633.225 387.6C633.15 387.44 633.113 387.264 633.113 387.072C633.113 386.763 633.219 386.501 633.433 386.288C633.646 386.075 633.907 385.968 634.217 385.968ZM647.863 388L647.031 385.232H642.855L642.023 388H640.487L644.023 376.976H645.943L649.463 388H647.863ZM643.223 384H646.663L644.951 378.24L643.223 384ZM658.558 384.464C658.558 385.2 658.404 385.851 658.094 386.416C657.796 386.971 657.353 387.408 656.766 387.728C656.19 388.037 655.497 388.192 654.686 388.192C653.46 388.192 652.51 387.856 651.838 387.184C651.177 386.501 650.846 385.595 650.846 384.464V376.976H652.366V384.352C652.366 385.205 652.558 385.845 652.942 386.272C653.326 386.699 653.908 386.912 654.686 386.912C655.476 386.912 656.062 386.704 656.446 386.288C656.83 385.861 657.022 385.216 657.022 384.352V376.976H658.558V384.464Z\" fill=\"white\"></path><path class=\"animated fadeIn delay-5s\" id=\"Current Location\" d=\"M598.378 75.784C599.039 75.784 599.594 75.8693 600.042 76.04C600.501 76.2107 600.965 76.488 601.434 76.872L600.602 77.848C599.93 77.304 599.221 77.032 598.474 77.032C597.557 77.032 596.815 77.384 596.25 78.088C595.695 78.792 595.418 79.9227 595.418 81.48C595.418 82.9947 595.695 84.1147 596.25 84.84C596.805 85.5547 597.541 85.912 598.458 85.912C598.927 85.912 599.338 85.832 599.69 85.672C600.042 85.512 600.415 85.288 600.81 85L601.562 85.96C601.221 86.312 600.783 86.6053 600.25 86.84C599.717 87.0747 599.103 87.192 598.41 87.192C597.514 87.192 596.714 86.9733 596.01 86.536C595.317 86.088 594.773 85.4373 594.378 84.584C593.994 83.72 593.802 82.6853 593.802 81.48C593.802 80.2747 594.005 79.2453 594.41 78.392C594.815 77.528 595.365 76.8773 596.058 76.44C596.751 76.0027 597.525 75.784 598.378 75.784ZM609.401 87H608.137L608.025 85.688C607.705 86.2107 607.337 86.5947 606.921 86.84C606.505 87.0747 605.999 87.192 605.401 87.192C604.665 87.192 604.089 86.968 603.673 86.52C603.257 86.072 603.049 85.4373 603.049 84.616V78.568H604.521V84.456C604.521 85.032 604.623 85.4427 604.825 85.688C605.028 85.9227 605.359 86.04 605.817 86.04C606.639 86.04 607.343 85.5547 607.929 84.584V78.568H609.401V87ZM616.106 78.376C616.405 78.376 616.682 78.408 616.938 78.472L616.666 79.912C616.41 79.848 616.165 79.816 615.93 79.816C615.407 79.816 614.986 80.008 614.666 80.392C614.346 80.776 614.095 81.3733 613.914 82.184V87H612.442V78.568H613.706L613.85 80.28C614.074 79.6507 614.378 79.176 614.762 78.856C615.146 78.536 615.594 78.376 616.106 78.376ZM622.278 78.376C622.576 78.376 622.854 78.408 623.11 78.472L622.838 79.912C622.582 79.848 622.336 79.816 622.102 79.816C621.579 79.816 621.158 80.008 620.838 80.392C620.518 80.776 620.267 81.3733 620.086 82.184V87H618.614V78.568H619.878L620.022 80.28C620.246 79.6507 620.55 79.176 620.934 78.856C621.318 78.536 621.766 78.376 622.278 78.376ZM630.669 82.536C630.669 82.7813 630.659 83.032 630.637 83.288H625.261C625.325 84.216 625.56 84.8987 625.965 85.336C626.371 85.7733 626.893 85.992 627.533 85.992C627.939 85.992 628.312 85.9333 628.653 85.816C628.995 85.6987 629.352 85.512 629.725 85.256L630.365 86.136C629.469 86.84 628.488 87.192 627.421 87.192C626.248 87.192 625.331 86.808 624.669 86.04C624.019 85.272 623.693 84.216 623.693 82.872C623.693 81.9973 623.832 81.224 624.109 80.552C624.397 79.8693 624.803 79.336 625.325 78.952C625.859 78.568 626.483 78.376 627.197 78.376C628.317 78.376 629.176 78.744 629.773 79.48C630.371 80.216 630.669 81.2347 630.669 82.536ZM629.213 82.104C629.213 81.272 629.048 80.6373 628.717 80.2C628.387 79.7627 627.891 79.544 627.229 79.544C626.024 79.544 625.368 80.4293 625.261 82.2H629.213V82.104ZM636.988 78.376C637.756 78.376 638.353 78.6053 638.78 79.064C639.217 79.5227 639.436 80.152 639.436 80.952V87H637.964V81.16C637.964 80.5627 637.852 80.1413 637.628 79.896C637.404 79.6507 637.073 79.528 636.636 79.528C636.188 79.528 635.793 79.656 635.452 79.912C635.111 80.168 634.791 80.536 634.492 81.016V87H633.02V78.568H634.284L634.412 79.816C634.711 79.368 635.079 79.016 635.516 78.76C635.964 78.504 636.455 78.376 636.988 78.376ZM646.651 86.616C646.096 87 645.467 87.192 644.763 87.192C644.048 87.192 643.488 86.9893 643.083 86.584C642.688 86.168 642.491 85.5707 642.491 84.792V79.704H641.019V78.568H642.491V76.664L643.963 76.488V78.568H645.963L645.803 79.704H643.963V84.728C643.963 85.1653 644.038 85.4853 644.187 85.688C644.347 85.88 644.608 85.976 644.971 85.976C645.302 85.976 645.675 85.864 646.091 85.64L646.651 86.616ZM654.011 75.976V85.672H658.539L658.363 87H652.491V75.976H654.011ZM663.141 78.376C664.325 78.376 665.242 78.7707 665.893 79.56C666.554 80.3493 666.885 81.4213 666.885 82.776C666.885 83.6507 666.736 84.424 666.437 85.096C666.138 85.7573 665.706 86.2747 665.141 86.648C664.576 87.0107 663.904 87.192 663.125 87.192C661.941 87.192 661.018 86.7973 660.357 86.008C659.696 85.2187 659.365 84.1467 659.365 82.792C659.365 81.9173 659.514 81.1493 659.813 80.488C660.112 79.816 660.544 79.2987 661.109 78.936C661.674 78.5627 662.352 78.376 663.141 78.376ZM663.141 79.56C661.68 79.56 660.949 80.6373 660.949 82.792C660.949 84.936 661.674 86.008 663.125 86.008C664.576 86.008 665.301 84.9307 665.301 82.776C665.301 80.632 664.581 79.56 663.141 79.56ZM672.389 78.376C672.89 78.376 673.349 78.4507 673.765 78.6C674.181 78.7387 674.581 78.968 674.965 79.288L674.261 80.216C673.962 80.0027 673.669 79.848 673.381 79.752C673.104 79.6453 672.794 79.592 672.453 79.592C671.77 79.592 671.237 79.864 670.853 80.408C670.48 80.952 670.293 81.7573 670.293 82.824C670.293 83.8907 670.48 84.68 670.853 85.192C671.226 85.6933 671.76 85.944 672.453 85.944C672.784 85.944 673.088 85.896 673.365 85.8C673.642 85.6933 673.952 85.528 674.293 85.304L674.965 86.264C674.197 86.8827 673.338 87.192 672.389 87.192C671.248 87.192 670.346 86.808 669.685 86.04C669.034 85.272 668.709 84.2107 668.709 82.856C668.709 81.96 668.858 81.176 669.157 80.504C669.456 79.832 669.877 79.3093 670.421 78.936C670.976 78.5627 671.632 78.376 672.389 78.376ZM682.481 85.032C682.481 85.3733 682.54 85.6293 682.657 85.8C682.775 85.96 682.951 86.0827 683.185 86.168L682.849 87.192C682.412 87.1387 682.06 87.016 681.793 86.824C681.527 86.632 681.329 86.3333 681.201 85.928C680.636 86.7707 679.799 87.192 678.689 87.192C677.857 87.192 677.201 86.9573 676.721 86.488C676.241 86.0187 676.001 85.4053 676.001 84.648C676.001 83.752 676.321 83.064 676.961 82.584C677.612 82.104 678.529 81.864 679.713 81.864H681.009V81.24C681.009 80.6427 680.865 80.216 680.577 79.96C680.289 79.704 679.847 79.576 679.249 79.576C678.631 79.576 677.873 79.7253 676.977 80.024L676.609 78.952C677.655 78.568 678.625 78.376 679.521 78.376C680.513 78.376 681.255 78.6213 681.745 79.112C682.236 79.592 682.481 80.28 682.481 81.176V85.032ZM679.025 86.088C679.868 86.088 680.529 85.6507 681.009 84.776V82.84H679.905C678.348 82.84 677.569 83.416 677.569 84.568C677.569 85.0693 677.692 85.448 677.937 85.704C678.183 85.96 678.545 86.088 679.025 86.088ZM689.76 86.616C689.206 87 688.576 87.192 687.872 87.192C687.158 87.192 686.598 86.9893 686.192 86.584C685.798 86.168 685.6 85.5707 685.6 84.792V79.704H684.128V78.568H685.6V76.664L687.072 76.488V78.568H689.072L688.912 79.704H687.072V84.728C687.072 85.1653 687.147 85.4853 687.296 85.688C687.456 85.88 687.718 85.976 688.08 85.976C688.411 85.976 688.784 85.864 689.2 85.64L689.76 86.616ZM692.758 78.568V87H691.286V78.568H692.758ZM692.006 74.52C692.315 74.52 692.566 74.616 692.758 74.808C692.95 75 693.046 75.24 693.046 75.528C693.046 75.816 692.95 76.056 692.758 76.248C692.566 76.4293 692.315 76.52 692.006 76.52C691.707 76.52 691.462 76.4293 691.27 76.248C691.078 76.056 690.982 75.816 690.982 75.528C690.982 75.24 691.078 75 691.27 74.808C691.462 74.616 691.707 74.52 692.006 74.52ZM698.969 78.376C700.153 78.376 701.071 78.7707 701.721 79.56C702.383 80.3493 702.713 81.4213 702.713 82.776C702.713 83.6507 702.564 84.424 702.265 85.096C701.967 85.7573 701.535 86.2747 700.969 86.648C700.404 87.0107 699.732 87.192 698.953 87.192C697.769 87.192 696.847 86.7973 696.185 86.008C695.524 85.2187 695.193 84.1467 695.193 82.792C695.193 81.9173 695.343 81.1493 695.641 80.488C695.94 79.816 696.372 79.2987 696.937 78.936C697.503 78.5627 698.18 78.376 698.969 78.376ZM698.969 79.56C697.508 79.56 696.777 80.6373 696.777 82.792C696.777 84.936 697.503 86.008 698.953 86.008C700.404 86.008 701.129 84.9307 701.129 82.776C701.129 80.632 700.409 79.56 698.969 79.56ZM709.113 78.376C709.881 78.376 710.478 78.6053 710.905 79.064C711.342 79.5227 711.561 80.152 711.561 80.952V87H710.089V81.16C710.089 80.5627 709.977 80.1413 709.753 79.896C709.529 79.6507 709.198 79.528 708.761 79.528C708.313 79.528 707.918 79.656 707.577 79.912C707.236 80.168 706.916 80.536 706.617 81.016V87H705.145V78.568H706.409L706.537 79.816C706.836 79.368 707.204 79.016 707.641 78.76C708.089 78.504 708.58 78.376 709.113 78.376Z\" fill=\"white\"></path></g></svg></div><!-- /.header__map--><div class=\"slider-page__info\"><div class=\"subtitle-line_left slider-page__info-subtitle\">Surf</div><div class=\"slider-page__info-title\">East Shore</div><div class=\"subtitle-line_left slider-page__info-subtitle subtitle_second\">Condition</div><div class=\"slider-page__info-text\">Radical</div><a class=\"slider-page__info-link\" href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-right.svg */ "./src/assets/images/header/pagination/arrow-right.svg") + "\" alt=\"\"></a></div><!-- /.slider-page__info--></div><!-- /.header__slider-page--></div><!-- /.header__slider--><div class=\"header__callback\"><!-- Call back widget--><div class=\"btn-wrapper\"><a class=\"btn-pulse\"><span></span><div class=\"box\"></div><div class=\"icon-phone\"><i class=\"fa fa-comment-o\"></i></div><div class=\"text\">Call back</div></a><nav class=\"menu-callback\"><a class=\"btn-question\"><i class=\"fa fa-envelope-o\"></i></a><a class=\"btn-phone\"><i class=\"fa fa-phone\"></i></a><a class=\"btn-vk\" href=\"https://vk.com/\"><i class=\"fa fa-vk\"></i></a></nav></div></div><!-- /.header__callback--><div class=\"slider-pagination animated fadeInUp delay-2s\"><div class=\"slider-pagination__item\"><div class=\"slider-item\"><div class=\"slider-item__number\">01</div><div class=\"slider-item__title\">North Shore</div></div><!-- /.slider-item--></div><!-- /.slider-pagination__item--><div class=\"slider-pagination__item\"><div class=\"slider-item\"><div class=\"slider-item__number\">02</div><div class=\"slider-item__title\">South Shore</div></div><!-- /.slider-item--></div><!-- /.slider-pagination__item--><div class=\"slider-pagination__item\"><div class=\"slider-item\"><div class=\"slider-item__number\">03</div><div class=\"slider-item__title\">West Shore</div></div><!-- /.slider-item--></div><!-- /.slider-pagination__item--><div class=\"slider-pagination__item\"><div class=\"slider-item\"><div class=\"slider-item__number\">04</div><div class=\"slider-item__title\">East Shore</div></div><!-- /.slider-item--></div><!-- /.slider-pagination__item--></div><!-- /.slider-pagination--></header><!-- /.header--><!-- Сentering content on large screens--><div class=\"container\"><section class=\"blog hide\"><div class=\"section-heading\"><span class=\"section-name\"><span>Top #8 beaches</span><h3>Top #8 beaches</h3></span></div><!-- /.section-heading--><div class=\"cards cards-blog\"></div><!-- /.cards--></section><!-- /.blog--><section class=\"beach hide\"><div class=\"section-heading\"><a class=\"btn-from-description\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-left.svg */ "./src/assets/images/header/pagination/arrow-left.svg") + "\"></a><h2 class=\"section-title beach-title\">Cloud Nine</h2><div class=\"card-info\"><div class=\"rating\">4.5</div><div class=\"category category-menu\">Siargao | Phillipines</div></div><!-- /.card-info--></div><!-- /.section-heading--><div class=\"cards cards-beach\"></div><!-- /.cards--><div class=\"img-descr\"><img class=\"cards-img\" src=\"xxxHTMLLINKxxx0.143199747473283120.5889307386126623xxx\"></div><div class=\"card-description\"></div><!-- /.card-description--></section><!-- /.menu--><div class=\"blog__btn\"><a class=\"btn btn-from-blog hide\" href=\"\">return <span class=\"btn-click\">back</span></a></div><!-- /.blog__btn--><section class=\"surf\" id=\"map\"><div class=\"block-name wow fadeInLeft\" data-wow-offset=\"400\"><span><span>surf</span><h3>surf</h3></span></div><!-- /.surf-title--><div class=\"surf-location\"><div class=\"info-subtitle wow fadeInRight\" data-wow-offset=\"400\"><div class=\"subtitle-line_left surf-location__subtitle\">current location</div><div class=\"surf-location__title\">tyumen <span>|</span> russia</div></div><!-- /.info-subtitle--></div><!-- /.surf-location--><div class=\"surf-map wow zoomInDown\" data-wow-offset=\"350\" data-wow-duration=\"1.5s\"><div class=\"mapinfo mapinfo--1 wow fadeInUp\" data-wow-offset=\"100\" data-wow-delay=\"1.6s\"><div class=\"mapinfo-placemark\"></div><div class=\"mapinfo-content\"><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__area\"><div class=\"mapinfo-content__area-title\">cloud nine</div><div class=\"mapinfo-content__area-subtitle\">philippines</div></div><!-- /.mapinfo-content__area--><a class=\"mapinfo-content__link\" href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-right.svg */ "./src/assets/images/header/pagination/arrow-right.svg") + "\" alt=\"\"></a></div><!-- /.mapinfo-content__block--><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-1.svg */ "./src/assets/images/surf/map/content-icon-1.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">3 - 5</div><div class=\"mapinfo-content__item-unit\">sure(ft)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-2.svg */ "./src/assets/images/surf/map/content-icon-2.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">+27.6</div><div class=\"mapinfo-content__item-unit\">tide(<sup>o</sup>&Scy;)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-3.svg */ "./src/assets/images/surf/map/content-icon-3.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">2 se</div><div class=\"mapinfo-content__item-unit\">wind(kts)</div></div><!-- /.mapinfo-content__item--></div><!-- /.mapinfo-content__block--></div><!-- /.mapinfo-content--></div><!-- /.mapinfo--><div class=\"mapinfo mapinfo--2 wow fadeInUp\" data-wow-offset=\"100\" data-wow-delay=\"1.7s\"><div class=\"mapinfo-placemark\"></div><div class=\"mapinfo-content\"><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__area\"><div class=\"mapinfo-content__area-title\">malibu beach</div><div class=\"mapinfo-content__area-subtitle\">USA</div></div><!-- /.mapinfo-content__area--><a class=\"mapinfo-content__link\" href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-right.svg */ "./src/assets/images/header/pagination/arrow-right.svg") + "\" alt=\"\"></a></div><!-- /.mapinfo-content__block--><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-1.svg */ "./src/assets/images/surf/map/content-icon-1.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">8 - 12</div><div class=\"mapinfo-content__item-unit\">sure(ft)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-2.svg */ "./src/assets/images/surf/map/content-icon-2.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">+32.3</div><div class=\"mapinfo-content__item-unit\">tide(<sup>o</sup>&Scy;)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-3.svg */ "./src/assets/images/surf/map/content-icon-3.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">3 se</div><div class=\"mapinfo-content__item-unit\">wind(kts)</div></div><!-- /.mapinfo-content__item--></div><!-- /.mapinfo-content__block--></div><!-- /.mapinfo-content--></div><!-- /.mapinfo--><div class=\"mapinfo mapinfo--3 wow fadeInUp\" data-wow-offset=\"100\" data-wow-delay=\"1.8s\"><div class=\"mapinfo-placemark\"></div><div class=\"mapinfo-content\"><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__area\"><div class=\"mapinfo-content__area-title\">garbanzo beach</div><div class=\"mapinfo-content__area-subtitle\">bagamas</div></div><!-- /.mapinfo-content__area--><a class=\"mapinfo-content__link\" href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-right.svg */ "./src/assets/images/header/pagination/arrow-right.svg") + "\" alt=\"\"></a></div><!-- /.mapinfo-content__block--><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-1.svg */ "./src/assets/images/surf/map/content-icon-1.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">5 - 9</div><div class=\"mapinfo-content__item-unit\">sure(ft)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-2.svg */ "./src/assets/images/surf/map/content-icon-2.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">+35.6</div><div class=\"mapinfo-content__item-unit\">tide(<sup>o</sup>&Scy;)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-3.svg */ "./src/assets/images/surf/map/content-icon-3.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">5 se</div><div class=\"mapinfo-content__item-unit\">wind(kts)</div></div><!-- /.mapinfo-content__item--></div><!-- /.mapinfo-content__block--></div><!-- /.mapinfo-content--></div><!-- /.mapinfo--><div class=\"mapinfo mapinfo--4 wow fadeInUp\" data-wow-offset=\"100\" data-wow-delay=\"1.9s\"><div class=\"mapinfo-placemark\"></div><div class=\"mapinfo-content\"><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__area\"><div class=\"mapinfo-content__area-title\">pecado beach</div><div class=\"mapinfo-content__area-subtitle\">brazilia</div></div><!-- /.mapinfo-content__area--><a class=\"mapinfo-content__link\" href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-right.svg */ "./src/assets/images/header/pagination/arrow-right.svg") + "\" alt=\"\"></a></div><!-- /.mapinfo-content__block--><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-1.svg */ "./src/assets/images/surf/map/content-icon-1.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">11 - 15</div><div class=\"mapinfo-content__item-unit\">sure(ft)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-2.svg */ "./src/assets/images/surf/map/content-icon-2.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">+38.3</div><div class=\"mapinfo-content__item-unit\">tide(<sup>o</sup>&Scy;)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-3.svg */ "./src/assets/images/surf/map/content-icon-3.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">6 se</div><div class=\"mapinfo-content__item-unit\">wind(kts)</div></div><!-- /.mapinfo-content__item--></div><!-- /.mapinfo-content__block--></div><!-- /.mapinfo-content--></div><!-- /.mapinfo--><div class=\"mapinfo mapinfo--5 wow fadeInUp\" data-wow-offset=\"100\" data-wow-delay=\"2s\"><div class=\"mapinfo-placemark\"></div><div class=\"mapinfo-content\"><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__area\"><div class=\"mapinfo-content__area-title\">vueux boucao</div><div class=\"mapinfo-content__area-subtitle\">france</div></div><!-- /.mapinfo-content__area--><a class=\"mapinfo-content__link\" href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-right.svg */ "./src/assets/images/header/pagination/arrow-right.svg") + "\" alt=\"\"></a></div><!-- /.mapinfo-content__block--><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-1.svg */ "./src/assets/images/surf/map/content-icon-1.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">6 - 11</div><div class=\"mapinfo-content__item-unit\">sure(ft)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-2.svg */ "./src/assets/images/surf/map/content-icon-2.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">+28.5</div><div class=\"mapinfo-content__item-unit\">tide(<sup>o</sup>&Scy;)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-3.svg */ "./src/assets/images/surf/map/content-icon-3.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">2 se</div><div class=\"mapinfo-content__item-unit\">wind(kts)</div></div><!-- /.mapinfo-content__item--></div><!-- /.mapinfo-content__block--></div><!-- /.mapinfo-content--></div><!-- /.mapinfo--><div class=\"mapinfo mapinfo--6 wow fadeInUp\" data-wow-offset=\"100\" data-wow-delay=\"2.1s\"><div class=\"mapinfo-placemark\"></div><div class=\"mapinfo-content\"><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__area\"><div class=\"mapinfo-content__area-title\">buffalo bay</div><div class=\"mapinfo-content__area-subtitle\">south africa</div></div><!-- /.mapinfo-content__area--><a class=\"mapinfo-content__link\" href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-right.svg */ "./src/assets/images/header/pagination/arrow-right.svg") + "\" alt=\"\"></a></div><!-- /.mapinfo-content__block--><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-1.svg */ "./src/assets/images/surf/map/content-icon-1.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">12 - 17</div><div class=\"mapinfo-content__item-unit\">sure(ft)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-2.svg */ "./src/assets/images/surf/map/content-icon-2.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">+40.2</div><div class=\"mapinfo-content__item-unit\">tide(<sup>o</sup>&Scy;)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-3.svg */ "./src/assets/images/surf/map/content-icon-3.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">7 se</div><div class=\"mapinfo-content__item-unit\">wind(kts)</div></div><!-- /.mapinfo-content__item--></div><!-- /.mapinfo-content__block--></div><!-- /.mapinfo-content--></div><!-- /.mapinfo--><div class=\"mapinfo mapinfo--7 wow fadeInUp\" data-wow-offset=\"100\" data-wow-delay=\"2.2s\"><div class=\"mapinfo-placemark\"></div><div class=\"mapinfo-content\"><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__area\"><div class=\"mapinfo-content__area-title\">varka beach</div><div class=\"mapinfo-content__area-subtitle\">india</div></div><!-- /.mapinfo-content__area--><a class=\"mapinfo-content__link\" href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-right.svg */ "./src/assets/images/header/pagination/arrow-right.svg") + "\" alt=\"\"></a></div><!-- /.mapinfo-content__block--><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-1.svg */ "./src/assets/images/surf/map/content-icon-1.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">10 - 15</div><div class=\"mapinfo-content__item-unit\">sure(ft)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-2.svg */ "./src/assets/images/surf/map/content-icon-2.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">+36.2</div><div class=\"mapinfo-content__item-unit\">tide(<sup>o</sup>&Scy;)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-3.svg */ "./src/assets/images/surf/map/content-icon-3.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">5 se</div><div class=\"mapinfo-content__item-unit\">wind(kts)</div></div><!-- /.mapinfo-content__item--></div><!-- /.mapinfo-content__block--></div><!-- /.mapinfo-content--></div><!-- /.mapinfo--><div class=\"mapinfo mapinfo--8 wow fadeInUp\" data-wow-offset=\"100\" data-wow-delay=\"2.3s\"><div class=\"mapinfo-placemark\"></div><div class=\"mapinfo-content\"><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__area\"><div class=\"mapinfo-content__area-title\">airlie beach</div><div class=\"mapinfo-content__area-subtitle\">australia</div></div><!-- /.mapinfo-content__area--><a class=\"mapinfo-content__link\" href=\"#\"><img src=\"" + __webpack_require__(/*! ../assets/images/header/pagination/arrow-right.svg */ "./src/assets/images/header/pagination/arrow-right.svg") + "\" alt=\"\"></a></div><!-- /.mapinfo-content__block--><div class=\"mapinfo-content__block\"><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-1.svg */ "./src/assets/images/surf/map/content-icon-1.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">9 - 13</div><div class=\"mapinfo-content__item-unit\">sure(ft)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-2.svg */ "./src/assets/images/surf/map/content-icon-2.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">+2.3</div><div class=\"mapinfo-content__item-unit\">tide(<sup>o</sup>&Scy;)</div></div><!-- /.mapinfo-content__item--><div class=\"mapinfo-content__item\"><img src=\"" + __webpack_require__(/*! ../assets/images/surf/map/content-icon-3.svg */ "./src/assets/images/surf/map/content-icon-3.svg") + "\" alt=\"\"><div class=\"mapinfo-content__item-value\">4 se</div><div class=\"mapinfo-content__item-unit\">wind(kts)</div></div><!-- /.mapinfo-content__item--></div><!-- /.mapinfo-content__block--></div><!-- /.mapinfo-content--><div class=\"mapinfo-coords\">34.0501 N -118.2446 W</div><!-- /.mapinfo-coords--></div><!-- /.mapinfo--></div><!-- /.surf-map--><div class=\"surf-slider\"><div class=\"surf-slider__img wow fadeInUp\" data-wow-offset=\"400\" data-wow-delay=\".2s\"><div class=\"surf-slider__box\" style=\"background-image: url(../src/assets/images/surf/slider/slide-1.png);\"><div class=\"surf-slider__item\"><div class=\"surf-slider__item-title\">cloud nine</div><div class=\"surf-slider__item-area\">siargao <span>|</span> philippines</div><div class=\"surf-slider__item-btn\"><a class=\"btn btn-to-blog\" href=\"#\">view <span class=\"btn-click\">blog</span></a></div></div><!-- /.surf-slider__item--></div><!-- /.surf-slider__box--></div><!-- /.surf-slider__img--><div class=\"surf-slider__img wow fadeInUp\" data-wow-offset=\"400\" data-wow-delay=\".4s\"><div class=\"surf-slider__box\" style=\"background-image: url(../src/assets/images/surf/slider/slide-2.png);\"><div class=\"surf-slider__item\"><div class=\"surf-slider__item-title\">malibu beach</div><div class=\"surf-slider__item-area\">california <span>|</span> usa</div><div class=\"surf-slider__item-btn\"><a class=\"btn btn-to-blog\" href=\"#\">view <span class=\"btn-click\">blog</span></a></div></div><!-- /.surf-slider__item--></div><!-- /.surf-slider__box--></div><!-- /.surf-slider__img--><div class=\"surf-slider__img wow fadeInUp\" data-wow-offset=\"400\" data-wow-delay=\".6s\"><div class=\"surf-slider__box\" style=\"background-image: url(../src/assets/images/surf/slider/slide-3.png);\"><div class=\"surf-slider__item\"><div class=\"surf-slider__item-title\">garbanzo beach</div><div class=\"surf-slider__item-area\">garbanzo <span>|</span> bagamas</div><div class=\"surf-slider__item-btn\"><a class=\"btn btn-to-blog\" href=\"#\">view <span class=\"btn-click\">blog</span></a></div></div><!-- /.surf-slider__item--></div><!-- /.surf-slider__box--></div><!-- /.surf-slider__img--><div class=\"surf-slider__img wow fadeInUp\" data-wow-offset=\"400\" data-wow-delay=\".8s\"><div class=\"surf-slider__box\" style=\"background-image: url(../src/assets/images/surf/slider/slide-4.png);\"><div class=\"surf-slider__item\"><div class=\"surf-slider__item-title\">pecado beach</div><div class=\"surf-slider__item-area\">rio de janeiro <span>|</span> brazilia</div><div class=\"surf-slider__item-btn\"><a class=\"btn btn-to-blog\" href=\"#\">view <span class=\"btn-click\">blog</span></a></div></div><!-- /.surf-slider__item--></div><!-- /.surf-slider__box--></div><!-- /.surf-slider__img--><div class=\"surf-slider__img\"><div class=\"surf-slider__box\" style=\"background-image: url(../src/assets/images/surf/slider/slide-5.png);\"><div class=\"surf-slider__item\"><div class=\"surf-slider__item-title\">vueux boucau</div><div class=\"surf-slider__item-area\">marseille <span>|</span> france</div><div class=\"surf-slider__item-btn\"><a class=\"btn btn-to-blog\" href=\"#\">view <span class=\"btn-click\">blog</span></a></div></div><!-- /.surf-slider__item--></div><!-- /.surf-slider__box--></div><!-- /.surf-slider__img--><div class=\"surf-slider__img\"><div class=\"surf-slider__box\" style=\"background-image: url(../src/assets/images/surf/slider/slide-6.png);\"><div class=\"surf-slider__item\"><div class=\"surf-slider__item-title\">buffalo bay</div><div class=\"surf-slider__item-area\">knysna<span>|</span> sa</div><div class=\"surf-slider__item-btn\"><a class=\"btn btn-to-blog\" href=\"#\">view <span class=\"btn-click\">blog</span></a></div></div><!-- /.surf-slider__item--></div><!-- /.surf-slider__box--></div><!-- /.surf-slider__img--><div class=\"surf-slider__img\"><div class=\"surf-slider__box\" style=\"background-image: url(../src/assets/images/surf/slider/slide-7.png);\"><div class=\"surf-slider__item\"><div class=\"surf-slider__item-title\">varka beach</div><div class=\"surf-slider__item-area\">goa <span>|</span> india</div><div class=\"surf-slider__item-btn\"><a class=\"btn btn-to-blog\" href=\"#\">view <span class=\"btn-click\">blog</span></a></div></div><!-- /.surf-slider__item--></div><!-- /.surf-slider__box--></div><!-- /.surf-slider__img--><div class=\"surf-slider__img\"><div class=\"surf-slider__box\" style=\"background-image: url(../src/assets/images/surf/slider/slide-8.png);\"><div class=\"surf-slider__item\"><div class=\"surf-slider__item-title\">airlie beach</div><div class=\"surf-slider__item-area\">queensland <span>|</span> australia</div><div class=\"surf-slider__item-btn\"><a class=\"btn btn-to-blog\" href=\"#\">view <span class=\"btn-click\">blog</span></a></div></div><!-- /.surf-slider__item--></div><!-- /.surf-slider__box--></div><!-- /.surf-slider__img--></div><!-- /.surf-slider--></section><!-- /.surf--><section class=\"travel content\" id=\"airplanes\"><div class=\"container\"><div class=\"block-name wow fadeInLeft\" data-wow-offset=\"400\"><span><span>travel</span><h3>travel</h3></span></div><!-- /.travel-title--><div class=\"content-slider\"><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/travel/slider/travel-bg-1.png);\"><div class=\"content-slider__headtitle\"><div class=\"wow fadeInRight info-subtitle\" data-wow-offset=\"400\"><div class=\"subtitle-line subtitle-line_left\">shore</div><div class=\"info-subtitle__description\">cloud nine<span>|</span> phillipines</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle wow zoomInUp\" data-wow-offset=\"100\" data-wow-duration=\"2s\" style=\"background-image: url(../src/assets/images/travel/slider/plane-slide-1.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">airline</div><div class=\"info-title__description\">virgin australia <img src=\"" + __webpack_require__(/*! ../assets/images/travel/slider/avia-logo-1.svg */ "./src/assets/images/travel/slider/avia-logo-1.svg") + "\" alt=\"\"></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform wow fadeInUp\" data-wow-offset=\"200\" data-wow-delay=\".2s\"><div class=\"content-slider__inform-subtitle\">destination</div><div class=\"content-slider__inform-title\">siargao<br/>phillipines</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform wow fadeInUp\" data-wow-offset=\"200\" data-wow-delay=\".4s\"><div class=\"content-slider__inform-subtitle\">distance</div><div class=\"content-slider__inform-title\">8,175 miles</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform wow fadeInUp\" data-wow-offset=\"200\" data-wow-delay=\".6s\"><div class=\"content-slider__inform-subtitle\">travel time</div><div class=\"content-slider__inform-title\">26 hours <br/> 12 minutes</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform wow fadeInUp\" data-wow-offset=\"200\" data-wow-delay=\".8s\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\">$2,138<small>round trip</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">flight</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/travel/slider/travel-bg-2.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">shore</div><div class=\"info-subtitle__description\">malibu beach <span>|</span> usa</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/travel/slider/plane-slide-2.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">airline</div><div class=\"info-title__description\">cambodian airways <img class=\"img\" src=\"" + __webpack_require__(/*! ../assets/images/travel/slider/avia-logo-2.svg */ "./src/assets/images/travel/slider/avia-logo-2.svg") + "\" alt=\"\" role=\"presentation\"/></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">destination</div><div class=\"content-slider__inform-title\">california<br/>usa</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">distance</div><div class=\"content-slider__inform-title\">6,021 miles</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">travel time</div><div class=\"content-slider__inform-title\">20 hours <br/> 48 minutes</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\">$1,798 <small>round trip</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">flight</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/travel/slider/travel-bg-3.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">shore</div><div class=\"info-subtitle__description\">garbanzo beach <span>|</span> bagamas</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/travel/slider/plane-slide-3.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">airline</div><div class=\"info-title__description\">aeroflot airways<img class=\"img\" src=\"" + __webpack_require__(/*! ../assets/images/travel/slider/avia-logo-3.svg */ "./src/assets/images/travel/slider/avia-logo-3.svg") + "\" alt=\"\" role=\"presentation\"/></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">destination</div><div class=\"content-slider__inform-title\">garbanzo<br/>bahamas</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">distance</div><div class=\"content-slider__inform-title\">5,178 miles</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">travel time</div><div class=\"content-slider__inform-title\">18 hours <br/> 44 minutes</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\">$1,564 <small>round trip</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">flight</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/travel/slider/travel-bg-4.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">shore</div><div class=\"info-subtitle__description\">pecado beach <span>|</span> brasil</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/travel/slider/plane-slide-4.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">airline</div><div class=\"info-title__description\">fuerza airways<img class=\"img\" src=\"" + __webpack_require__(/*! ../assets/images/travel/slider/avia-logo-4.svg */ "./src/assets/images/travel/slider/avia-logo-4.svg") + "\" alt=\"\" role=\"presentation\"/></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">destination</div><div class=\"content-slider__inform-title\">rio de janeiro<br/>brasil</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">distance</div><div class=\"content-slider__inform-title\">5,932 miles</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">travel time</div><div class=\"content-slider__inform-title\">20 hours <br/> 12 minutes</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\">$1,712<small>round trip</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">flight</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/travel/slider/travel-bg-5.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">shore</div><div class=\"info-subtitle__description\">vueux boucao  <span>|</span> france</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/travel/slider/plane-slide-5.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">airline</div><div class=\"info-title__description\">lufthansa airways<img class=\"img\" src=\"" + __webpack_require__(/*! ../assets/images/travel/slider/avia-logo-5.svg */ "./src/assets/images/travel/slider/avia-logo-5.svg") + "\" alt=\"\" role=\"presentation\"/></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">destination</div><div class=\"content-slider__inform-title\">marseille<br/>france</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">distance</div><div class=\"content-slider__inform-title\">3,871 miles</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">travel time</div><div class=\"content-slider__inform-title\">14 hours<br/> 18 minutes</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\">$1,233<small>round trip</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">flight</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/travel/slider/travel-bg-6.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">shore</div><div class=\"info-subtitle__description\">buffalo bay<span>|</span> south africa</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/travel/slider/plane-slide-6.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">airline</div><div class=\"info-title__description\">s7 airlines<img class=\"img\" src=\"" + __webpack_require__(/*! ../assets/images/travel/slider/avia-logo-6.svg */ "./src/assets/images/travel/slider/avia-logo-6.svg") + "\" alt=\"\" role=\"presentation\"/></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">destination</div><div class=\"content-slider__inform-title\">knysna<br/>south africa</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">distance</div><div class=\"content-slider__inform-title\">6,233 miles</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">travel time</div><div class=\"content-slider__inform-title\">21 hours <br/> 58 minutes</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\">$1,883<small>round trip</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">flight</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/travel/slider/travel-bg-7.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">shore</div><div class=\"info-subtitle__description\">varka beach <span>|</span> india</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/travel/slider/plane-slide-7.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">airline</div><div class=\"info-title__description\">air union airways<img class=\"img\" src=\"" + __webpack_require__(/*! ../assets/images/travel/slider/avia-logo-7.svg */ "./src/assets/images/travel/slider/avia-logo-7.svg") + "\" alt=\"\" role=\"presentation\"/></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">destination</div><div class=\"content-slider__inform-title\">goa<br/>india</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">distance</div><div class=\"content-slider__inform-title\">4,988 miles</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">travel time</div><div class=\"content-slider__inform-title\">17 hours<br/> 25 minutes</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\">$1,442<small>round trip</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">flight</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/travel/slider/travel-bg-8.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">shore</div><div class=\"info-subtitle__description\">airlie beach  <span>|</span> australia</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/travel/slider/plane-slide-8.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">airline</div><div class=\"info-title__description\">klm airlines <img class=\"img\" src=\"" + __webpack_require__(/*! ../assets/images/travel/slider/avia-logo-8.svg */ "./src/assets/images/travel/slider/avia-logo-8.svg") + "\" alt=\"\" role=\"presentation\"/></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">destination</div><div class=\"content-slider__inform-title\">queensland <br/>australia</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">distance</div><div class=\"content-slider__inform-title\">7,065 miles</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">travel time</div><div class=\"content-slider__inform-title\">23 hours<br/> 5 minutes</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\">$1,976<small>round trip</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">flight</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--></div><!-- /.content-slider--></div><!-- /.container--></section><!-- /.travel--><section class=\"sleep content\" id=\"location\"><div class=\"block-name wow fadeInLeft\" data-wow-offset=\"400\"><span><span>sleep</span><h3>sleep</h3></span></div><!-- /.sleep-title--><div class=\"content-slider\"><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/sleep/slider/sleep-bg-1.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle wow fadeInRight\" data-wow-offset=\"400\"><div class=\"subtitle-line subtitle-line_left\">resorts</div><div class=\"info-subtitle__description\">domumia villa<span>|</span> phillipines</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle wow zoomInUp\" data-wow-offset=\"100\" data-wow-duration=\"2s\" style=\"background-image: url(../src/assets/images/sleep/slider/bed-slide-1.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">rating</div><div class=\"info-title__description\">good <ul class=\"content__star-list star-list\"><li class=\"wow fadeInLeft\" data-wow-offset=\"100\" data-wow-delay=\"2.1s\"><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li class=\"wow fadeInLeft\" data-wow-offset=\"100\" data-wow-delay=\"2.2s\"><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li class=\"wow fadeInLeft\" data-wow-offset=\"100\" data-wow-delay=\"2.3s\"><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li class=\"wow fadeInLeft\" data-wow-offset=\"100\" data-wow-delay=\"2.4s\"><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li></ul></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform wow fadeInUp\" data-wow-offset=\"200\" data-wow-delay=\".2s\"><div class=\"content-slider__inform-subtitle\">resort</div><div class=\"content-slider__inform-title\">domumia villa <br/>siargao</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform wow fadeInUp\" data-wow-offset=\"200\" data-wow-delay=\".4s\"><div class=\"content-slider__inform-subtitle\"># of nights</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"nights\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"5\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">nights</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform wow fadeInUp\" data-wow-offset=\"200\" data-wow-delay=\".6s\"><div class=\"content-slider__inform-subtitle\"># of guests</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"guests\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"4\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">guests</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform wow fadeInUp\" data-wow-offset=\"200\" data-wow-delay=\".8s\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\"><span class=\"sum\" data-nights=\"55\" data-guests=\"25\"></span><small>per night</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">stay</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/sleep/slider/sleep-bg-2.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">resorts</div><div class=\"info-subtitle__description\">sea star <span>|</span> usa</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/sleep/slider/bed-slide-1.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">rating</div><div class=\"info-title__description\">good <ul class=\"content__star-list star-list\"><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li></ul></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">resort</div><div class=\"content-slider__inform-title\">sea star<br/>california</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of nights</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"nights\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"5\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">nights</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of guests</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"guests\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"4\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">guests</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\"><span class=\"sum\" data-nights=\"65\" data-guests=\"45\"></span><small>per night</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">stay</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/sleep/slider/sleep-bg-3.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">resorts</div><div class=\"info-subtitle__description\">safi sana <span>|</span> bagamas</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/sleep/slider/bed-slide-1.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">rating</div><div class=\"info-title__description\">excellent <ul class=\"content__star-list star-list\"><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li></ul></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">resort</div><div class=\"content-slider__inform-title\">safi sana<br/>garbanzo</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of nights</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"nights\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"5\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">nights</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of guests</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"guests\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"4\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">guests</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\"><span class=\"sum\" data-nights=\"75\" data-guests=\"50\"></span><small>per night</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">stay</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/sleep/slider/sleep-bg-4.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">resorts</div><div class=\"info-subtitle__description\">mini loft<span>|</span> brasil</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/sleep/slider/bed-slide-1.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">rating</div><div class=\"info-title__description\">satisfactory<ul class=\"content__star-list star-list\"><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li></ul></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">resort</div><div class=\"content-slider__inform-title\">mini loft<br/>rio de janeiro</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of nights</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"nights\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"5\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">nights</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of guests</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"guests\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"4\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">guests</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\"><span class=\"sum\" data-nights=\"40\" data-guests=\"30\"></span><small>per night</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">stay</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/sleep/slider/sleep-bg-5.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">resorts</div><div class=\"info-subtitle__description\">green house <span>|</span> france</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/sleep/slider/bed-slide-1.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">rating</div><div class=\"info-title__description\">good<ul class=\"content__star-list star-list\"><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li></ul></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">resort</div><div class=\"content-slider__inform-title\">green house <br/>marseille</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of nights</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"nights\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"5\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">nights</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of guests</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"guests\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"4\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">guests</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\"><span class=\"sum\" data-nights=\"40\" data-guests=\"45\"></span><small>per night</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">stay</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/sleep/slider/sleep-bg-6.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">resorts</div><div class=\"info-subtitle__description\">tree house <span>|</span> south africa</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/sleep/slider/bed-slide-1.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">rating</div><div class=\"info-title__description\">bad<ul class=\"content__star-list star-list\"><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li></ul></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">resort</div><div class=\"content-slider__inform-title\">tree house<br/>knysna</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of nights</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"nights\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"5\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">nights</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of guests</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"guests\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"4\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">guests</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\"><span class=\"sum\" data-nights=\"30\" data-guests=\"25\"></span><small>per night</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">stay</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/sleep/slider/sleep-bg-7.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">resorts</div><div class=\"info-subtitle__description\">paulo baandar <span>|</span> india</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/sleep/slider/bed-slide-1.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">rating</div><div class=\"info-title__description\">good<ul class=\"content__star-list star-list\"><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li></ul></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">resort</div><div class=\"content-slider__inform-title\">paulo baandar<br/>goa</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of nights</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"nights\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"5\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">nights</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of guests</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"guests\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"4\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">guests</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\"><span class=\"sum\" data-nights=\"35\" data-guests=\"45\"></span><small>per night</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">stay</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--><div class=\"content-slider__item\"><div class=\"content-slider__img\" style=\"background-image: url(../src/assets/images/sleep/slider/sleep-bg-8.png);\"><div class=\"content-slider__headtitle\"><div class=\"info-subtitle\"><div class=\"subtitle-line subtitle-line_left\">resorts</div><div class=\"info-subtitle__description\">auberge <span>|</span> australia</div></div><!-- /.info-subtitle--></div><!-- /.content-slider__headtitle--></div><!-- /.content-slider__img--><div class=\"content-slider__maintitle\" style=\"background-image: url(../src/assets/images/sleep/slider/bed-slide-1.png);\"><div class=\"info-title\"><div class=\"subtitle-line subtitle-line_right\">rating</div><div class=\"info-title__description\">excellent <ul class=\"content__star-list star-list\"><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li></ul></div></div><!-- /.info-title--></div><!-- /.content-slider__maintitle--><div class=\"content-slider__info\"><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\">resort</div><div class=\"content-slider__inform-title\">auberge<br/>queensland</div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of nights</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"nights\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"5\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">nights</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"># of guests</div><div class=\"content-slider__inform-title\"><div class=\"quantity\"><input class=\"guests\" type=\"number\" min=\"1\" max=\"50\" step=\"1\" value=\"4\"/></div><!-- /.quantity--><span class=\"quantity quantity_edit\">guests</span></div></div><!-- /.content-slider__inform--><div class=\"content-slider__inform\"><div class=\"content-slider__inform-subtitle\"> pricing</div><div class=\"content-slider__inform-title\"><span class=\"sum\" data-nights=\"60\" data-guests=\"40\"></span><small>per night</small></div></div><!-- /.content-slider__inform--></div><!-- /.content-slider__info--><div class=\"content-slider__btn\"><a class=\"btn\" href=\"#\">book <span class=\"btn-click\">stay</span></a></div><!-- /.content-slider__btn--></div><!-- /.content-slider__item--></div><!-- /.content-slider--></section><!-- /.sleep--><section class=\"shop\" id=\"goods\"><div class=\"block-name wow fadeInLeft\" data-wow-offset=\"400\"><span><span>shop</span><h3>shop</h3></span></div><!-- /.shop-title--><div class=\"shop-slider\"><div class=\"shop-slider__item\"><div class=\"shop-slider__info\"><div class=\"shop-slider__inform wow slideInLeft\" data-wow-offset=\"200\" data-wow-delay=\".2s\"><div class=\"shop-info\"><div class=\"subtitle-line subtitle-line_right\">style</div><div class=\"info-title__description\">north nugget tt surfboard</div></div><!-- /.shop-info--><div class=\"shop-price\"><ul class=\"shop__star-list star-list\"><li class=\"wow fadeInLeft\" data-wow-offset=\"100\" data-wow-delay=\"2.1s\"><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li class=\"wow fadeInLeft\" data-wow-offset=\"100\" data-wow-delay=\"2.2s\"><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li class=\"wow fadeInLeft\" data-wow-offset=\"100\" data-wow-delay=\"2.3s\"><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li class=\"wow fadeInLeft\" data-wow-offset=\"100\" data-wow-delay=\"2.4s\"><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li class=\"wow fadeInLeft\" data-wow-offset=\"100\" data-wow-delay=\"2.5s\"><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li></ul><span>$799<sup>99</sup></span></div><!-- /.shop-price--><div class=\"shop-slider__btn\"><a class=\"btn\">drop <span class=\"btn-click shop-btn\">in</span></a></div><!-- /.shop-slider__btn--></div><!-- /.shop-slider__inform--><div class=\"shop-slider__product\"><div class=\"surfboard wow fadeInUp\" data-wow-offset=\"200\"><img src=\"" + __webpack_require__(/*! ../assets/images/shop/slider/surfboard-slide-1.png */ "./src/assets/images/shop/slider/surfboard-slide-1.png") + "\" alt=\"\" role=\"presentation\"/><div class=\"surf-box--1 surfboard-info\"><div class=\"surfboard-info__dots\"><div class=\"dot-1\"></div><div class=\"dot-2\"></div></div><div class=\"surfboard-info__content\">double concave with vee shape low point</div></div><!-- /.surfboard-info--><div class=\"surf-box--2 surfboard-info\"><div class=\"surfboard-info__dots\"><div class=\"dot-1\"></div><div class=\"dot-2\"></div></div><div class=\"surfboard-info__content\">a soft rail is wrapped in water</div></div><!-- /.surfboard-info--><div class=\"surf-box--3 surfboard-info\"><div class=\"surfboard-info__dots\"><div class=\"dot-1\"></div><div class=\"dot-2\"></div></div><div class=\"surfboard-info__content\">improve mobility &amp; make turns heavy</div></div><!-- /.surfboard-info--></div><!-- /.surfboard--><div class=\"wow slideInRight extras\" data-wow-offset=\"200\" data-wow-delay=\".4s\"><div class=\"extras__head\">Extras</div><div class=\"extras-blocks\"><div class=\"extras-block\"><div class=\"extras-block__logo\"><img src=\"" + __webpack_require__(/*! ../assets/images/shop/slider/wax-logo.png */ "./src/assets/images/shop/slider/wax-logo.png") + "\" alt=\"\" role=\"presentation\"/></div><div class=\"extras-block__title\">sex wax</div><div class=\"extras-block__price\">$24.99</div></div><!-- /.extras-block--><div class=\"extras-block\"><div class=\"extras-block__logo\"><img src=\"" + __webpack_require__(/*! ../assets/images/shop/slider/pura-logo.png */ "./src/assets/images/shop/slider/pura-logo.png") + "\" alt=\"\" role=\"presentation\"/></div><div class=\"extras-block__title\">pura vida</div><div class=\"extras-block__price\">$27.99</div></div><!-- /.extras-block--></div><!-- /.extras-blocks--></div></div><!-- /.shop-slider__product--></div><!-- /.shop-slider__info--></div><!-- /.shop-slider__item--><div class=\"shop-slider__item\"><div class=\"shop-slider__info\"><div class=\"shop-slider__inform\"><div class=\"shop-info\"><div class=\"subtitle-line subtitle-line_right\">style</div><div class=\"info-title__description\">south coast surfboard</div></div><!-- /.shop-info--><div class=\"shop-price\"><ul class=\"shop__star-list star-list\"><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li></ul><span>$569<sup>99</sup></span></div><!-- /.shop-price--><div class=\"shop-slider__btn\"><a class=\"btn\">drop <span class=\"btn-click shop-btn\">in</span></a></div><!-- /.shop-slider__btn--></div><!-- /.shop-slider__inform--><div class=\"shop-slider__product\"><div class=\"surfboard\"><img src=\"" + __webpack_require__(/*! ../assets/images/shop/slider/surfboard-slide-2.png */ "./src/assets/images/shop/slider/surfboard-slide-2.png") + "\" alt=\"\" role=\"presentation\"/><div class=\"surf-box--1 surfboard-info\"><div class=\"surfboard-info__dots\"><div class=\"dot-1\"></div><div class=\"dot-2\"></div></div><div class=\"surfboard-info__content\">the ability to swim in any body of water</div></div><!-- /.surfboard-info--><div class=\"surf-box--2 surfboard-info\"><div class=\"surfboard-info__dots\"><div class=\"dot-1\"></div><div class=\"dot-2\"></div></div><div class=\"surfboard-info__content\">often used by photographers, fishers, lifeguards</div></div><!-- /.surfboard-info--><div class=\"surf-box--3 surfboard-info\"><div class=\"surfboard-info__dots\"><div class=\"dot-1\"></div><div class=\"dot-2\"></div></div><div class=\"surfboard-info__content\">have a good water resistance</div></div><!-- /.surfboard-info--></div><!-- /.surfboard--><div class=\"extras\"><div class=\"extras__head\">Extras</div><div class=\"extras-blocks\"><div class=\"extras-block\"><div class=\"extras-block__logo\"><img src=\"" + __webpack_require__(/*! ../assets/images/shop/slider/leashg-logo.png */ "./src/assets/images/shop/slider/leashg-logo.png") + "\" alt=\"\" role=\"presentation\"/></div><div class=\"extras-block__title\">leash wax</div><div class=\"extras-block__price\">$21.99</div></div><!-- /.extras-block--><div class=\"extras-block\"><div class=\"extras-block__logo\"><img src=\"" + __webpack_require__(/*! ../assets/images/shop/slider/fin-logo.png */ "./src/assets/images/shop/slider/fin-logo.png") + "\" alt=\"\" role=\"presentation\"/></div><div class=\"extras-block__title\">fin fastlight</div><div class=\"extras-block__price\">$32.99</div></div><!-- /.extras-block--></div><!-- /.extras-blocks--></div></div><!-- /.shop-slider__product--></div><!-- /.shop-slider__info--></div><!-- /.shop-slider__item--><div class=\"shop-slider__item\"><div class=\"shop-slider__info\"><div class=\"shop-slider__inform\"><div class=\"shop-info\"><div class=\"subtitle-line subtitle-line_right\">style</div><div class=\"info-title__description\">west pill head surfboard</div></div><!-- /.shop-info--><div class=\"shop-price\"><ul class=\"shop__star-list star-list\"><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li></ul><span>$699<sup>99</sup></span></div><!-- /.shop-price--><div class=\"shop-slider__btn\"><a class=\"btn\">drop <span class=\"btn-click shop-btn\">in</span></a></div><!-- /.shop-slider__btn--></div><!-- /.shop-slider__inform--><div class=\"shop-slider__product\"><div class=\"surfboard\"><img src=\"" + __webpack_require__(/*! ../assets/images/shop/slider/surfboard-slide-3.png */ "./src/assets/images/shop/slider/surfboard-slide-3.png") + "\" alt=\"\" role=\"presentation\"/><div class=\"surf-box--1 surfboard-info\"><div class=\"surfboard-info__dots\"><div class=\"dot-1\"></div><div class=\"dot-2\"></div></div><div class=\"surfboard-info__content\">good stability on almost any wave</div></div><!-- /.surfboard-info--><div class=\"surf-box--2 surfboard-info\"><div class=\"surfboard-info__dots\"><div class=\"dot-1\"></div><div class=\"dot-2\"></div></div><div class=\"surfboard-info__content\">differs in a rigid design and shows big mobility</div></div><!-- /.surfboard-info--><div class=\"surf-box--3 surfboard-info\"><div class=\"surfboard-info__dots\"><div class=\"dot-1\"></div><div class=\"dot-2\"></div></div><div class=\"surfboard-info__content\">allows to comfortably go out to the middle waves</div></div><!-- /.surfboard-info--></div><!-- /.surfboard--><div class=\"extras\"><div class=\"extras__head\">Extras</div><div class=\"extras-blocks\"><div class=\"extras-block\"><div class=\"extras-block__logo\"><img src=\"" + __webpack_require__(/*! ../assets/images/shop/slider/leashb-logo.png */ "./src/assets/images/shop/slider/leashb-logo.png") + "\" alt=\"\" role=\"presentation\"/></div><div class=\"extras-block__title\">leash wax</div><div class=\"extras-block__price\">$21.99</div></div><!-- /.extras-block--><div class=\"extras-block\"><div class=\"extras-block__logo\"><img src=\"" + __webpack_require__(/*! ../assets/images/shop/slider/stomppad-logo.png */ "./src/assets/images/shop/slider/stomppad-logo.png") + "\" alt=\"\" role=\"presentation\"/></div><div class=\"extras-block__title\">stomp pad</div><div class=\"extras-block__price\">$37.99</div></div><!-- /.extras-block--></div><!-- /.extras-blocks--></div></div><!-- /.shop-slider__product--></div><!-- /.shop-slider__info--></div><!-- /.shop-slider__item--><div class=\"shop-slider__item\"><div class=\"shop-slider__info\"><div class=\"shop-slider__inform\"><div class=\"shop-info\"><div class=\"subtitle-line subtitle-line_right\">style</div><div class=\"info-title__description\">surftech ch islands</div></div><!-- /.shop-info--><div class=\"shop-price\"><ul class=\"shop__star-list star-list\"><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li><li><img src=\"" + __webpack_require__(/*! ../assets/images/sleep/slider/star.svg */ "./src/assets/images/sleep/slider/star.svg") + "\" alt=\"\" role=\"presentation\"/></li></ul><span>$759<sup>99</sup></span></div><!-- /.shop-price--><div class=\"shop-slider__btn\"><a class=\"btn\">drop <span class=\"btn-click shop-btn\">in</span></a></div><!-- /.shop-slider__btn--></div><!-- /.shop-slider__inform--><div class=\"shop-slider__product\"><div class=\"surfboard\"><img src=\"" + __webpack_require__(/*! ../assets/images/shop/slider/surfboard-slide-4.png */ "./src/assets/images/shop/slider/surfboard-slide-4.png") + "\" alt=\"\" role=\"presentation\"/><div class=\"surf-box--1 surfboard-info\"><div class=\"surfboard-info__dots\"><div class=\"dot-1\"></div><div class=\"dot-2\"></div></div><div class=\"surfboard-info__content\">helps to master professional tricks</div></div><!-- /.surfboard-info--><div class=\"surf-box--2 surfboard-info\"><div class=\"surfboard-info__dots\"><div class=\"dot-1\"></div><div class=\"dot-2\"></div></div><div class=\"surfboard-info__content\">suitable for small waves</div></div><!-- /.surfboard-info--><div class=\"surf-box--3 surfboard-info\"><div class=\"surfboard-info__dots\"><div class=\"dot-1\"></div><div class=\"dot-2\"></div></div><div class=\"surfboard-info__content\">forked tail for good acceleration &amp; mobility</div></div><!-- /.surfboard-info--></div><!-- /.surfboard--><div class=\"extras\"><div class=\"extras__head\">Extras</div><div class=\"extras-blocks\"><div class=\"extras-block\"><div class=\"extras-block__logo\"><img src=\"" + __webpack_require__(/*! ../assets/images/shop/slider/finlight-logo.png */ "./src/assets/images/shop/slider/finlight-logo.png") + "\" alt=\"\" role=\"presentation\"/></div><div class=\"extras-block__title\">3Dfin fastlight</div><div class=\"extras-block__price\">$34.99</div></div><!-- /.extras-block--><div class=\"extras-block\"><div class=\"extras-block__logo\"><img src=\"" + __webpack_require__(/*! ../assets/images/shop/slider/bag-logo.png */ "./src/assets/images/shop/slider/bag-logo.png") + "\" alt=\"\" role=\"presentation\"/></div><div class=\"extras-block__title\">surf bag</div><div class=\"extras-block__price\">$18.99</div></div><!-- /.extras-block--></div><!-- /.extras-blocks--></div></div><!-- /.shop-slider__product--></div><!-- /.shop-slider__info--></div><!-- /.shop-slider__item--></div></section></div><!-- /.container--><footer class=\"footer\"><a class=\"btn\">go <span class=\"btn-click\">surf</span></a><div class=\"footer__copyright\">&copy; Go-Surf 2018. All Rights Reserved.</div></footer><!-- /.footer--><wrapper class=\"overlay bounceIn\" id=\"overlay\"><div class=\"popup\"><div class=\"popup-title\">feedback form</div><!-- /.popup-title--><div class=\"popup-close\" id=\"popup-close\">&times;</div><!-- /.popup-close--><div class=\"popup-form dark-bg\"><form class=\"main-form\" action=\"#\"><div class=\"popup-form__header\">get a personalized offer<br><span> to purchase surfing equipment!</span><label class=\"popup-form__label\"><span>Enter </span>your phone number</label><input class=\"popup-form__input\" type=\"tel\" name=\"phone\" placeholder=\"7(999)999-99-99\" required><button class=\"button popup-form__btn btn-click\">Submit</button><small class=\"popup-form__note\"><span class=\"agreement\">* I <span class=\"agreement__main\"> agree to the processing of my </span><a href=\"#\">personal data </a><span class=\"agreement__main\"> by clicking on the Submit button </span></span></small></div><!-- /.popup-form__header--></form><!-- /.main-form--></div><!-- /.popup-form--></div><!-- /.popup--></wrapper><!-- /.overlay--><wrapper><div class=\"form-wrapper__feedback\"><input class=\"form-toggle\" type=\"checkbox\" name=\"toggle\" id=\"form-toggle\"><div class=\"form-container\"><label class=\"form-toggle\" for=\"form-toggle\"><i class=\"fa fa-question-circle-o\"></i><span>Ask question</span></label><form class=\"feedback-form dark-bg\" style=\"background: url(../assets/images/feedback/feed-bg.jpg);\" action=\"#\"><div class=\"info-box\"><label class=\"info-box__header\">Your name</label><input class=\"info-box__data\" type=\"text\" name=\"user_name\" required></div><!-- /.info-box--><div class=\"info-box\"><label class=\"info-box__header\">E-mail</label><input class=\"info-box__data\" type=\"email\" name=\"email\" required></div><!-- /.info-box--><div class=\"info-box\"><label class=\"info-box__header\">Number</label><input class=\"info-box__data popup-form__input\" type=\"tel\" name=\"phone\" required></div><!-- /.info-box--><div class=\"info-box\"><label class=\"info-box__header\">Message</label><textarea class=\"info-box__data\" name=\"message\" required></textarea></div><!-- /.info-box--><div class=\"info-box\"><label class=\"checkbox checkbox-option\"><input class=\"checkbox__input\" type=\"checkbox\" required><span class=\"checkbox_span\"></span><span class=\"info-box__endheader\">i <span>agree to the processing of my </span><a href=\"#\">personal data</a></span></label></div><!-- /.info-box--><button class=\"button btn-click\">Submit</button></form><!-- /.feedback-form--></div><!-- /.form-container--><!-- /.form-toggle--></div><!-- /.form-wrapper__feedback--></wrapper><!-- /wrapper--><wrapper class=\"callback\"><div class=\"form-wrapper__callback\"><input class=\"form-toggle__callback\" type=\"checkbox\" name=\"toggle\" id=\"form-toggle__callback\"><div class=\"form-container__callback\"><form class=\"callback-form dark-bg\" style=\"background-image: url(../assets/images/callback/call-bg.jpg);\" action=\"#\"><div class=\"info-box\"> <div class=\"header-box\"><span class=\"header-first\">Leave </span><span class=\"header-second\">your number and we will call you back in a few minutes</span></div></div><!-- /.info-box--><div class=\"info-box\"><label class=\"info-box__header\" for=\"phone\">Number</label><input class=\"info-box__data popup-form__input\" type=\"tel\" name=\"phone\" required></div><!-- /.info-box--><div class=\"info-box\"><label class=\"checkbox checkbox-option\"><input class=\"checkbox__input\" type=\"checkbox\" required><span class=\"checkbox_span\"></span><span class=\"info-box__endheader\">i <span>agree to the processing of my </span><a href=\"#\">personal data</a></span></label></div><!-- /.info-box--><button class=\"button btn-click\">Submit</button></form><!-- /.callback-form--><label class=\"form-toggle__callback\" for=\"form-toggle__callback\"><i class=\"fa fa-phone\"></i><span>Leave phone</span></label><!-- /.form-toggle__callback--></div><!-- /.form-container__callback--><!-- /.form-toggle__callback--></div><!-- /.form-wrapper__callback--></wrapper><!-- /.callback-->";

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map