(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["styled-components"] = factory();
	else
		root["styled-components"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.keyframes = exports.global = exports.toggle = exports.css = undefined;

	var _css = __webpack_require__(1);

	var _css2 = _interopRequireDefault(_css);

	var _toggle = __webpack_require__(11);

	var _toggle2 = _interopRequireDefault(_toggle);

	var _styled = __webpack_require__(12);

	var _styled2 = _interopRequireDefault(_styled);

	var _global = __webpack_require__(98);

	var _global2 = _interopRequireDefault(_global);

	var _keyframes = __webpack_require__(100);

	var _keyframes2 = _interopRequireDefault(_keyframes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.css = _css2.default;
	exports.toggle = _toggle2.default;
	exports.global = _global2.default;
	exports.keyframes = _keyframes2.default;
	/**
	 * Export constructors for consumption by users
	 */

	exports.default = _styled2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _interleave = __webpack_require__(2);

	var _interleave2 = _interopRequireDefault(_interleave);

	var _flatten = __webpack_require__(3);

	var _flatten2 = _interopRequireDefault(_flatten);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (strings) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }

	  return (0, _flatten2.default)((0, _interleave2.default)(strings, interpolations));
	};

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (strings, interpolations) {
	  return interpolations.reduce(function (array, interp, i) {
	    return array.concat(interp, strings[i + 1]);
	  }, [strings[0]]);
	};

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.objToCss = undefined;

	var _hyphenateStyleName = __webpack_require__(4);

	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

	var _isPlainObject = __webpack_require__(6);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var objToCss = exports.objToCss = function objToCss(obj) {
	  return Object.keys(obj).map(function (k) {
	    return (0, _hyphenateStyleName2.default)(k) + ': ' + obj[k] + ';';
	  }).join(' ');
	};

	var flatten = function flatten(chunks, executionContext) {
	  return chunks.reduce(function (array, chunk) {
	    /* Remove falsey values */
	    if (chunk === undefined || chunk === null || chunk === false || chunk === '') return array;
	    /* Flatten arrays */
	    if (Array.isArray(chunk)) return array.concat.apply(array, _toConsumableArray(flatten(chunk, executionContext)));
	    /* Either execute or defer the function */
	    if (typeof chunk === 'function') {
	      return executionContext ? array.concat.apply(array, _toConsumableArray(flatten([chunk(executionContext)], executionContext))) : array.concat(chunk);
	    }
	    /* Handle objects */
	    return array.concat((0, _isPlainObject2.default)(chunk) ? objToCss(chunk) : chunk.toString());
	  }, []);
	};

	exports.default = flatten;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var hyphenate = __webpack_require__(5);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(7),
	    isHostObject = __webpack_require__(9),
	    isObjectLike = __webpack_require__(10);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(8);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	exports.default = function (name, options) {
	  return function () {
	    var _ref;

	    var valueString = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	    var throwUnknown = function throwUnknown(unknownValue) {
	      var validValues = Object.keys(options).filter(function (v) {
	        return v !== 'default';
	      });
	      throw new Error(name + ': Unknown value \'' + unknownValue + '\'. Valid values are:\n' + validValues.join('\n'));
	    };

	    var values = valueString.split(/ +/).filter(function (s) {
	      return s.length > 0;
	    });
	    return (_ref = options.default ? [options.default] : []).concat.apply(_ref, _toConsumableArray(values.map(function (v) {
	      return v in options ? options[v] : throwUnknown(v);
	    }))).map(function (v) {
	      return v + ';';
	    });
	  };
	};

	/*
	* Toggle: Simple Namespaced styling
	*
	* example: flex = toggle('flex', {
	*   default: rules.display('flex'), // always included
	*   inline: rules.display('inline-flex'),
	*   vertical: rules.flexDirection('column'),
	* })
	*
	* flex() => `display: flex;`
	* flex('inline vertical') => `display: flex; display: inline-flex; flex-direction: column;`
	* */

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _css = __webpack_require__(1);

	var _css2 = _interopRequireDefault(_css);

	var _StyledComponent = __webpack_require__(13);

	var _StyledComponent2 = _interopRequireDefault(_StyledComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* todo: replace any with React.Component */
	var styled = function styled(tag) {
	  return function (strings) {
	    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      interpolations[_key - 1] = arguments[_key];
	    }

	    return (0, _StyledComponent2.default)(tag, _css2.default.apply(undefined, [strings].concat(interpolations)));
	  };
	};

	exports.default = styled;

	/* Shorthands for all valid HTML properties */
	// Thanks to ReactDOMFactories for this handy list!

	styled.a = styled('a');
	styled.abbr = styled('abbr');
	styled.address = styled('address');
	styled.area = styled('area');
	styled.article = styled('article');
	styled.aside = styled('aside');
	styled.audio = styled('audio');
	styled.b = styled('b');
	styled.base = styled('base');
	styled.bdi = styled('bdi');
	styled.bdo = styled('bdo');
	styled.big = styled('big');
	styled.blockquote = styled('blockquote');
	styled.body = styled('body');
	styled.br = styled('br');
	styled.button = styled('button');
	styled.canvas = styled('canvas');
	styled.caption = styled('caption');
	styled.cite = styled('cite');
	styled.code = styled('code');
	styled.col = styled('col');
	styled.colgroup = styled('colgroup');
	styled.data = styled('data');
	styled.datalist = styled('datalist');
	styled.dd = styled('dd');
	styled.del = styled('del');
	styled.details = styled('details');
	styled.dfn = styled('dfn');
	styled.dialog = styled('dialog');
	styled.div = styled('div');
	styled.dl = styled('dl');
	styled.dt = styled('dt');
	styled.em = styled('em');
	styled.embed = styled('embed');
	styled.fieldset = styled('fieldset');
	styled.figcaption = styled('figcaption');
	styled.figure = styled('figure');
	styled.footer = styled('footer');
	styled.form = styled('form');
	styled.h1 = styled('h1');
	styled.h2 = styled('h2');
	styled.h3 = styled('h3');
	styled.h4 = styled('h4');
	styled.h5 = styled('h5');
	styled.h6 = styled('h6');
	styled.head = styled('head');
	styled.header = styled('header');
	styled.hgroup = styled('hgroup');
	styled.hr = styled('hr');
	styled.html = styled('html');
	styled.i = styled('i');
	styled.iframe = styled('iframe');
	styled.img = styled('img');
	styled.input = styled('input');
	styled.ins = styled('ins');
	styled.kbd = styled('kbd');
	styled.keygen = styled('keygen');
	styled.label = styled('label');
	styled.legend = styled('legend');
	styled.li = styled('li');
	styled.link = styled('link');
	styled.main = styled('main');
	styled.map = styled('map');
	styled.mark = styled('mark');
	styled.menu = styled('menu');
	styled.menuitem = styled('menuitem');
	styled.meta = styled('meta');
	styled.meter = styled('meter');
	styled.nav = styled('nav');
	styled.noscript = styled('noscript');
	styled.object = styled('object');
	styled.ol = styled('ol');
	styled.optgroup = styled('optgroup');
	styled.option = styled('option');
	styled.output = styled('output');
	styled.p = styled('p');
	styled.param = styled('param');
	styled.picture = styled('picture');
	styled.pre = styled('pre');
	styled.progress = styled('progress');
	styled.q = styled('q');
	styled.rp = styled('rp');
	styled.rt = styled('rt');
	styled.ruby = styled('ruby');
	styled.s = styled('s');
	styled.samp = styled('samp');
	styled.script = styled('script');
	styled.section = styled('section');
	styled.select = styled('select');
	styled.small = styled('small');
	styled.source = styled('source');
	styled.span = styled('span');
	styled.strong = styled('strong');
	styled.style = styled('style');
	styled.sub = styled('sub');
	styled.summary = styled('summary');
	styled.sup = styled('sup');
	styled.table = styled('table');
	styled.tbody = styled('tbody');
	styled.td = styled('td');
	styled.textarea = styled('textarea');
	styled.tfoot = styled('tfoot');
	styled.th = styled('th');
	styled.thead = styled('thead');
	styled.time = styled('time');
	styled.title = styled('title');
	styled.tr = styled('tr');
	styled.track = styled('track');
	styled.u = styled('u');
	styled.ul = styled('ul');
	styled.var = styled('var');
	styled.video = styled('video');
	styled.wbr = styled('wbr');

	// SVG
	styled.circle = styled('circle');
	styled.clipPath = styled('clipPath');
	styled.defs = styled('defs');
	styled.ellipse = styled('ellipse');
	styled.g = styled('g');
	styled.image = styled('image');
	styled.line = styled('line');
	styled.linearGradient = styled('linearGradient');
	styled.mask = styled('mask');
	styled.path = styled('path');
	styled.pattern = styled('pattern');
	styled.polygon = styled('polygon');
	styled.polyline = styled('polyline');
	styled.radialGradient = styled('radialGradient');
	styled.rect = styled('rect');
	styled.stop = styled('stop');
	styled.svg = styled('svg');
	styled.text = styled('text');
	styled.tspan = styled('tspan');
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(14);

	var _ComponentStyle = __webpack_require__(47);

	var _ComponentStyle2 = _interopRequireDefault(_ComponentStyle);

	var _validAttr = __webpack_require__(94);

	var _validAttr2 = _interopRequireDefault(_validAttr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	exports.default = function (tagName, rules) {
	  var isTag = typeof tagName === 'string';
	  var componentStyle = new _ComponentStyle2.default(rules);

	  var StyledComponent = function (_Component) {
	    _inherits(StyledComponent, _Component);

	    function StyledComponent() {
	      _classCallCheck(this, StyledComponent);

	      return _possibleConstructorReturn(this, (StyledComponent.__proto__ || Object.getPrototypeOf(StyledComponent)).apply(this, arguments));
	    }

	    _createClass(StyledComponent, [{
	      key: 'getChildContext',
	      value: function getChildContext() {
	        return { theme: this.theme };
	      }
	    }, {
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        this.componentWillReceiveProps(this.props, this.context);
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(newProps, newContext) {
	        var _this2 = this;

	        this.theme = newContext && newContext.theme || {}; // pass through theme
	        var theme = Object.assign({}, this.theme); // copy to pass to styles so no side effects
	        var updateTheme = function updateTheme(values) {
	          _this2.theme = Object.assign({}, _this2.theme, values);
	        };
	        /* Execution context is props + theme + updateTheme */
	        var executionContext = Object.assign({}, newProps, { theme: theme, updateTheme: updateTheme });
	        /* Do all the work to generate the CSS because this can modify the theme */
	        this.generatedClassName = componentStyle.generateStyles(executionContext);
	        /* Inject the styles */
	        componentStyle.injectStyles(this.generatedClassName);
	      }

	      /* eslint-disable react/prop-types */

	    }, {
	      key: 'render',
	      value: function render() {
	        var _this3 = this;

	        var _props = this.props;
	        var className = _props.className;
	        var children = _props.children;


	        var propsForElement = {};
	        /* Don't pass through non HTML tags through to HTML elements */
	        Object.keys(this.props).filter(function (propName) {
	          return !isTag || (0, _validAttr2.default)(propName);
	        }).forEach(function (propName) {
	          propsForElement[propName] = _this3.props[propName];
	        });
	        propsForElement.className = [className, this.generatedClassName].filter(function (x) {
	          return x;
	        }).join(' ');

	        return (0, _react.createElement)(tagName, propsForElement, children);
	      }
	    }]);

	    return StyledComponent;
	  }(_react.Component);

	  StyledComponent.displayName = isTag ? 'styled.' + tagName : 'Styled(' + tagName.displayName + ')';
	  StyledComponent.childContextTypes = {
	    theme: _react.PropTypes.object
	  };
	  StyledComponent.contextTypes = {
	    theme: _react.PropTypes.object
	  };
	  return StyledComponent;
	};

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(15);


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	'use strict';

	var _assign = __webpack_require__(16);

	var ReactChildren = __webpack_require__(17);
	var ReactComponent = __webpack_require__(29);
	var ReactPureComponent = __webpack_require__(32);
	var ReactClass = __webpack_require__(33);
	var ReactDOMFactories = __webpack_require__(38);
	var ReactElement = __webpack_require__(21);
	var ReactPropTypes = __webpack_require__(44);
	var ReactVersion = __webpack_require__(45);

	var onlyChild = __webpack_require__(46);
	var warning = __webpack_require__(23);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if ((production) !== 'production') {
	  var ReactElementValidator = __webpack_require__(39);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if ((production) !== 'production') {
	  var warned = false;
	  __spread = function () {
	    (production) !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	'use strict';

	var PooledClass = __webpack_require__(18);
	var ReactElement = __webpack_require__(21);

	var emptyFunction = __webpack_require__(24);
	var traverseAllChildren = __webpack_require__(26);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(19);

	var invariant = __webpack_require__(20);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? (production) !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if ((production) !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	'use strict';

	var _assign = __webpack_require__(16);

	var ReactCurrentOwner = __webpack_require__(22);

	var warning = __webpack_require__(23);
	var canDefineProperty = __webpack_require__(25);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if ((production) !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if ((production) !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      (production) !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      (production) !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if ((production) !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	    var shadowChildren = Array.isArray(props.children) ? props.children.slice(0) : props.children;

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      Object.defineProperty(element, '_shadowChildren', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: shadowChildren
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._shadowChildren = shadowChildren;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if ((production) !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	ReactElement.REACT_ELEMENT_TYPE = REACT_ELEMENT_TYPE;

	module.exports = ReactElement;

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */

	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(24);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if ((production) !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */

	'use strict';

	var canDefineProperty = false;
	if ((production) !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(19);

	var ReactCurrentOwner = __webpack_require__(22);
	var ReactElement = __webpack_require__(21);

	var getIteratorFn = __webpack_require__(27);
	var invariant = __webpack_require__(20);
	var KeyEscapeUtils = __webpack_require__(28);
	var warning = __webpack_require__(23);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if ((production) !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          (production) !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if ((production) !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? (production) !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;

/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyEscapeUtils
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(19);

	var ReactNoopUpdateQueue = __webpack_require__(30);

	var canDefineProperty = __webpack_require__(25);
	var emptyObject = __webpack_require__(31);
	var invariant = __webpack_require__(20);
	var warning = __webpack_require__(23);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? (production) !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if ((production) !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          (production) !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */

	'use strict';

	var warning = __webpack_require__(23);

	function warnNoop(publicInstance, callerName) {
	  if ((production) !== 'production') {
	    var constructor = publicInstance.constructor;
	    (production) !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if ((production) !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPureComponent
	 */

	'use strict';

	var _assign = __webpack_require__(16);

	var ReactComponent = __webpack_require__(29);
	var ReactNoopUpdateQueue = __webpack_require__(30);

	var emptyObject = __webpack_require__(31);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(19),
	    _assign = __webpack_require__(16);

	var ReactComponent = __webpack_require__(29);
	var ReactElement = __webpack_require__(21);
	var ReactPropTypeLocations = __webpack_require__(34);
	var ReactPropTypeLocationNames = __webpack_require__(36);
	var ReactNoopUpdateQueue = __webpack_require__(30);

	var emptyObject = __webpack_require__(31);
	var invariant = __webpack_require__(20);
	var keyMirror = __webpack_require__(35);
	var keyOf = __webpack_require__(37);
	var warning = __webpack_require__(23);

	var MIXINS_KEY = keyOf({ mixins: null });

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});

	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if ((production) !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if ((production) !== 'production') {
	      validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if ((production) !== 'production') {
	      validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      (production) !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? (production) !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? (production) !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if ((production) !== 'production') {
	      var typeofSpec = typeof spec;
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      (production) !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ? (production) !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? (production) !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? (production) !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if ((production) !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? (production) !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? (production) !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? (production) !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? (production) !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if ((production) !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        (production) !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        (production) !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    var Constructor = function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if ((production) !== 'production') {
	        (production) !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if ((production) !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? (production) !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if ((production) !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? (production) !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if ((production) !== 'production') {
	      (production) !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      (production) !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	'use strict';

	var keyMirror = __webpack_require__(35);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(20);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? (production) !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if ((production) !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 */

	'use strict';

	var ReactElement = __webpack_require__(21);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if ((production) !== 'production') {
	  var ReactElementValidator = __webpack_require__(39);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(22);
	var ReactComponentTreeHook = __webpack_require__(40);
	var ReactElement = __webpack_require__(21);
	var ReactPropTypeLocations = __webpack_require__(34);

	var checkReactTypeSpec = __webpack_require__(41);

	var canDefineProperty = __webpack_require__(25);
	var getIteratorFn = __webpack_require__(27);
	var warning = __webpack_require__(23);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  (production) !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, ReactPropTypeLocations.prop, name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    (production) !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      (production) !== 'production' ? warning(false, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if ((production) !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            (production) !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentTreeHook
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(19);

	var ReactCurrentOwner = __webpack_require__(22);

	var invariant = __webpack_require__(20);
	var warning = __webpack_require__(23);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var itemMap;
	var rootIDSet;

	var itemByKey;
	var rootByKey;

	if (canUseCollections) {
	  itemMap = new Map();
	  rootIDSet = new Set();
	} else {
	  itemByKey = {};
	  rootByKey = {};
	}

	var unmountedIDs = [];

	// Use non-numeric keys to prevent V8 performance issues:
	// https://github.com/facebook/react/pull/7232
	function getKeyFromID(id) {
	  return '.' + id;
	}
	function getIDFromKey(key) {
	  return parseInt(key.substr(1), 10);
	}

	function get(id) {
	  if (canUseCollections) {
	    return itemMap.get(id);
	  } else {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  }
	}

	function remove(id) {
	  if (canUseCollections) {
	    itemMap['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  }
	}

	function create(id, element, parentID) {
	  var item = {
	    element: element,
	    parentID: parentID,
	    text: null,
	    childIDs: [],
	    isMounted: false,
	    updateCount: 0
	  };

	  if (canUseCollections) {
	    itemMap.set(id, item);
	  } else {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  }
	}

	function addRoot(id) {
	  if (canUseCollections) {
	    rootIDSet.add(id);
	  } else {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  }
	}

	function removeRoot(id) {
	  if (canUseCollections) {
	    rootIDSet['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  }
	}

	function getRegisteredIDs() {
	  if (canUseCollections) {
	    return Array.from(itemMap.keys());
	  } else {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  }
	}

	function getRootIDs() {
	  if (canUseCollections) {
	    return Array.from(rootIDSet.keys());
	  } else {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  }
	}

	function purgeDeep(id) {
	  var item = get(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    remove(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + name + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  (production) !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = get(id);
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = get(nextChildID);
	      !nextChild ? (production) !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? (production) !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? (production) !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent ID is missing.
	      }
	      !(nextChild.parentID === id) ? (production) !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    create(id, element, parentID);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = get(id);
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = get(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = get(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var type = topElement.type;
	      var name = typeof type === 'function' ? type.displayName || type.name : type;
	      var owner = topElement._owner;
	      info += describeComponentFrame(name || 'Unknown', topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = get(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = get(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = get(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = get(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = get(id);
	    return item ? item.updateCount : 0;
	  },


	  getRegisteredIDs: getRegisteredIDs,

	  getRootIDs: getRootIDs
	};

	module.exports = ReactComponentTreeHook;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule checkReactTypeSpec
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(19);

	var ReactPropTypeLocationNames = __webpack_require__(36);
	var ReactPropTypesSecret = __webpack_require__(43);

	var invariant = __webpack_require__(20);
	var warning = __webpack_require__(23);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && (production) === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(40);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? (production) !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      (production) !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if ((production) !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(40);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        (production) !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ },
/* 42 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypesSecret
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	'use strict';

	var ReactElement = __webpack_require__(21);
	var ReactPropTypeLocationNames = __webpack_require__(36);
	var ReactPropTypesSecret = __webpack_require__(43);

	var emptyFunction = __webpack_require__(24);
	var getIteratorFn = __webpack_require__(27);
	var warning = __webpack_require__(23);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	  symbol: createPrimitiveTypeChecker('symbol'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;

	function createChainableTypeChecker(validate) {
	  if ((production) !== 'production') {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if ((production) !== 'production') {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          (production) !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in the next major version. You may be ' + 'seeing this warning due to a third-party PropTypes library. ' + 'See https://fb.me/react-warning-dont-call-proptypes for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new PropTypeError('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    (production) !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    (production) !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }

	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }

	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }

	  return false;
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;

/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */

	'use strict';

	module.exports = '15.3.2';

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(19);

	var ReactElement = __webpack_require__(21);

	var invariant = __webpack_require__(20);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? (production) !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _hash = __webpack_require__(48);

	var _hash2 = _interopRequireDefault(_hash);

	var _sheet = __webpack_require__(49);

	var _flatten = __webpack_require__(3);

	var _flatten2 = _interopRequireDefault(_flatten);

	var _parse = __webpack_require__(50);

	var _parse2 = _interopRequireDefault(_parse);

	var _postcssNested = __webpack_require__(92);

	var _postcssNested2 = _interopRequireDefault(_postcssNested);

	var _toEmoji = __webpack_require__(93);

	var _toEmoji2 = _interopRequireDefault(_toEmoji);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var styleSheet = new _sheet.StyleSheet({ speedy: false, maxLength: 40 });
	var generated = {};
	var inserted = {};

	/*
	 ComponentStyle is all the CSS-specific stuff, not
	 the React-specific stuff.
	 */

	var ComponentStyle = function () {
	  function ComponentStyle(rules) {
	    _classCallCheck(this, ComponentStyle);

	    this.rules = rules;
	    if (!styleSheet.injected) styleSheet.inject();
	    this.insertedRule = styleSheet.insert('');
	  }

	  /*
	   * Flattens a rule set into valid CSS
	   * Hashes it, wraps the whole chunk in a ._hashName {}
	   * Parses that with PostCSS then runs PostCSS-Nested on it
	   * Returns the hash to be injected on render()
	   * */


	  _createClass(ComponentStyle, [{
	    key: 'generateStyles',
	    value: function generateStyles(executionContext) {
	      var flatCSS = (0, _flatten2.default)(this.rules, executionContext).join('');
	      var selector = (0, _toEmoji2.default)((0, _hash2.default)(flatCSS));
	      if (!generated[selector]) {
	        var root = (0, _parse2.default)('.' + selector + ' { ' + flatCSS + ' }');
	        (0, _postcssNested2.default)(root);
	        generated[selector] = root.toResult().css;
	      }
	      return selector;
	    }
	  }, {
	    key: 'injectStyles',
	    value: function injectStyles(selector) {
	      if (inserted[selector]) return;

	      this.insertedRule.appendRule(generated[selector]);
	      inserted[selector] = true;
	    }
	  }]);

	  return ComponentStyle;
	}();

	exports.default = ComponentStyle;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = doHash;
	// murmurhash2 via https://gist.github.com/raycmorgan/588423

	function doHash(str, seed) {
	  var m = 0x5bd1e995;
	  var r = 24;
	  var h = seed ^ str.length;
	  var length = str.length;
	  var currentIndex = 0;

	  while (length >= 4) {
	    var k = UInt32(str, currentIndex);

	    k = Umul32(k, m);
	    k ^= k >>> r;
	    k = Umul32(k, m);

	    h = Umul32(h, m);
	    h ^= k;

	    currentIndex += 4;
	    length -= 4;
	  }

	  switch (length) {
	    case 3:
	      h ^= UInt16(str, currentIndex);
	      h ^= str.charCodeAt(currentIndex + 2) << 16;
	      h = Umul32(h, m);
	      break;

	    case 2:
	      h ^= UInt16(str, currentIndex);
	      h = Umul32(h, m);
	      break;

	    case 1:
	      h ^= str.charCodeAt(currentIndex);
	      h = Umul32(h, m);
	      break;
	  }

	  h ^= h >>> 13;
	  h = Umul32(h, m);
	  h ^= h >>> 15;

	  return h >>> 0;
	}

	function UInt32(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
	}

	function UInt16(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
	}

	function Umul32(n, m) {
	  n = n | 0;
	  m = m | 0;
	  var nlo = n & 0xffff;
	  var nhi = n >>> 16;
	  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
	  return res;
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance
	- 'polyfills' on server side


	// usage

	import StyleSheet from 'glamor/lib/sheet'
	let styleSheet = new StyleSheet()

	styleSheet.inject()
	- 'injects' the stylesheet into the page (or into memory if on server)

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents


	*/

	function last(arr) {
	  return arr[arr.length - 1];
	}

	function sheetForTag(tag) {
	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      return document.styleSheets[i];
	    }
	  }
	}

	var isBrowser = typeof document !== 'undefined';
	var isDev = function (x) {
	  return x === 'development' || !x;
	}((production));
	var isTest = (production) === 'test';

	var oldIE = function () {
	  if (isBrowser) {
	    var div = document.createElement('div');
	    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
	    return div.getElementsByTagName('i').length === 1;
	  }
	}();

	function makeStyleTag() {
	  var tag = document.createElement('style');
	  tag.type = 'text/css';
	  tag.appendChild(document.createTextNode(''));
	  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
	  return tag;
	}

	var StyleSheet = exports.StyleSheet = function () {
	  function StyleSheet() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var _ref$speedy = _ref.speedy;
	    var speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy;
	    var _ref$maxLength = _ref.maxLength;
	    var maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

	    _classCallCheck(this, StyleSheet);

	    this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
	    this.sheet = undefined;
	    this.tags = [];
	    this.maxLength = maxLength;
	    this.ctr = 0;
	  }

	  _createClass(StyleSheet, [{
	    key: 'inject',
	    value: function inject() {
	      var _this = this;

	      if (this.injected) {
	        throw new Error('already injected stylesheet!');
	      }
	      if (isBrowser) {
	        // this section is just weird alchemy I found online off many sources
	        this.tags[0] = makeStyleTag();
	        // this weirdness brought to you by firefox
	        this.sheet = sheetForTag(this.tags[0]);
	      } else {
	        // server side 'polyfill'. just enough behavior to be useful.
	        this.sheet = {
	          cssRules: [],
	          insertRule: function insertRule(rule) {
	            // enough 'spec compliance' to be able to extract the rules later
	            // in other words, just the cssText field
	            var serverRule = { cssText: rule };
	            _this.sheet.cssRules.push(serverRule);
	            return { serverRule: serverRule, appendRule: function appendRule(newCss) {
	                return serverRule.cssText += newCss;
	              } };
	          }
	        };
	      }
	      this.injected = true;
	    }
	  }, {
	    key: 'speedy',
	    value: function speedy(bool) {
	      if (this.ctr !== 0) {
	        throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
	      }
	      this.isSpeedy = !!bool;
	    }
	  }, {
	    key: '_insert',
	    value: function _insert(rule) {
	      // this weirdness for perf, and chrome's weird bug
	      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
	      try {
	        this.sheet.insertRule(rule, this.sheet.cssRules.length); // todo - correct index here
	      } catch (e) {
	        if (isDev) {
	          // might need beter dx for this
	          console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
	        }
	      }
	    }
	  }, {
	    key: 'insert',
	    value: function insert(rule) {
	      var _this2 = this;

	      var insertedRule = void 0;

	      if (isBrowser) {
	        // this is the ultrafast version, works across browsers
	        if (this.isSpeedy && this.sheet.insertRule) {
	          this._insert(rule);
	        }
	        // more browser weirdness. I don't even know
	        else if (this.tags.length > 0 && last(this.tags).styleSheet) {
	            last(this.tags).styleSheet.cssText += rule;
	          } else {
	            (function () {
	              var textNode = document.createTextNode(rule);
	              last(_this2.tags).appendChild(textNode);
	              insertedRule = { textNode: textNode, appendRule: function appendRule(newCss) {
	                  return textNode.appendData(newCss);
	                } };

	              if (!_this2.isSpeedy) {
	                // sighhh
	                _this2.sheet = sheetForTag(last(_this2.tags));
	              }
	            })();
	          }
	      } else {
	        // server side is pretty simple
	        insertedRule = this.sheet.insertRule(rule);
	      }

	      this.ctr++;
	      if (isBrowser && this.ctr % this.maxLength === 0) {
	        this.tags.push(makeStyleTag());
	        this.sheet = sheetForTag(last(this.tags));
	      }
	      return insertedRule;
	    }
	  }, {
	    key: 'flush',
	    value: function flush() {
	      if (isBrowser) {
	        this.tags.forEach(function (tag) {
	          return tag.parentNode.removeChild(tag);
	        });
	        this.tags = [];
	        this.sheet = null;
	        this.ctr = 0;
	        // todo - look for remnants in document.styleSheets
	      } else {
	        // simpler on server
	        this.sheet.cssRules = [];
	      }
	      this.injected = false;
	    }
	  }, {
	    key: 'rules',
	    value: function rules() {
	      if (!isBrowser) {
	        return this.sheet.cssRules;
	      }
	      var arr = [];
	      this.tags.forEach(function (tag) {
	        return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
	      });
	      return arr;
	    }
	  }]);

	  return StyleSheet;
	}();

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = safeParse;

	var _input = __webpack_require__(51);

	var _input2 = _interopRequireDefault(_input);

	var _safeParser = __webpack_require__(58);

	var _safeParser2 = _interopRequireDefault(_safeParser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function safeParse(css, opts) {
	    var input = new _input2.default(css, opts);

	    var parser = new _safeParser2.default(input);
	    parser.tokenize();
	    parser.loop();

	    return parser.root;
	}
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// import PreviousMap    from './previous-map';

	var _cssSyntaxError = __webpack_require__(52);

	var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);

	var _path = __webpack_require__(57);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sequence = 0;

	/**
	 * @typedef  {object} filePosition
	 * @property {string} file   - path to file
	 * @property {number} line   - source line in file
	 * @property {number} column - source column in file
	 */

	/**
	 * Represents the source CSS.
	 *
	 * @example
	 * const root  = postcss.parse(css, { from: file });
	 * const input = root.source.input;
	 */

	var Input = function () {

	    /**
	     * @param {string} css    - input CSS source
	     * @param {object} [opts] - {@link Processor#process} options
	     */
	    function Input(css) {
	        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        _classCallCheck(this, Input);

	        /**
	         * @member {string} - input CSS source
	         *
	         * @example
	         * const input = postcss.parse('a{}', { from: file }).input;
	         * input.css //=> "a{}";
	         */
	        this.css = css.toString();

	        if (this.css[0] === '﻿' || this.css[0] === '￾') {
	            this.css = this.css.slice(1);
	        }

	        if (opts.from) {
	            if (/^\w+:\/\//.test(opts.from)) {
	                /**
	                 * @member {string} - The absolute path to the CSS source file
	                 *                    defined with the `from` option.
	                 *
	                 * @example
	                 * const root = postcss.parse(css, { from: 'a.css' });
	                 * root.source.input.file //=> '/home/ai/a.css'
	                 */
	                this.file = opts.from;
	            } else {
	                this.file = _path2.default.resolve(opts.from);
	            }
	        }

	        /*
	                let map = new PreviousMap(this.css, opts);
	                if ( map.text ) {
	                    /!**
	                     * @member {PreviousMap} - The input source map passed from
	                     *                         a compilation step before PostCSS
	                     *                         (for example, from Sass compiler).
	                     *
	                     * @example
	                     * root.source.input.map.consumer().sources //=> ['a.sass']
	                     *!/
	                    this.map = map;
	                    let file = map.consumer().file;
	                    if ( !this.file && file ) this.file = this.mapResolve(file);
	                }
	        */

	        if (!this.file) {
	            sequence += 1;
	            /**
	             * @member {string} - The unique ID of the CSS source. It will be
	             *                    created if `from` option is not provided
	             *                    (because PostCSS does not know the file path).
	             *
	             * @example
	             * const root = postcss.parse(css);
	             * root.source.input.file //=> undefined
	             * root.source.input.id   //=> "<input css 1>"
	             */
	            this.id = '<input css ' + sequence + '>';
	        }
	        if (this.map) this.map.file = this.from;
	    }

	    _createClass(Input, [{
	        key: 'error',
	        value: function error(message, line, column) {
	            var opts = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	            var result = void 0;
	            var origin = this.origin(line, column);
	            if (origin) {
	                result = new _cssSyntaxError2.default(message, origin.line, origin.column, origin.source, origin.file, opts.plugin);
	            } else {
	                result = new _cssSyntaxError2.default(message, line, column, this.css, this.file, opts.plugin);
	            }

	            result.input = { line: line, column: column, source: this.css };
	            if (this.file) result.input.file = this.file;

	            return result;
	        }

	        /**
	         * Reads the input source map and returns a symbol position
	         * in the input source (e.g., in a Sass file that was compiled
	         * to CSS before being passed to PostCSS).
	         *
	         * @param {number} line   - line in input CSS
	         * @param {number} column - column in input CSS
	         *
	         * @return {filePosition} position in input source
	         *
	         * @example
	         * root.source.input.origin(1, 1) //=> { file: 'a.css', line: 3, column: 1 }
	         */

	    }, {
	        key: 'origin',
	        value: function origin(line, column) {
	            if (!this.map) return false;
	            var consumer = this.map.consumer();

	            var from = consumer.originalPositionFor({ line: line, column: column });
	            if (!from.source) return false;

	            var result = {
	                file: this.mapResolve(from.source),
	                line: from.line,
	                column: from.column
	            };

	            var source = consumer.sourceContentFor(from.source);
	            if (source) result.source = source;

	            return result;
	        }
	    }, {
	        key: 'mapResolve',
	        value: function mapResolve(file) {
	            if (/^\w+:\/\//.test(file)) {
	                return file;
	            } else {
	                return _path2.default.resolve(this.map.consumer().sourceRoot || '.', file);
	            }
	        }

	        /**
	         * The CSS source identifier. Contains {@link Input#file} if the user
	         * set the `from` option, or {@link Input#id} if they did not.
	         * @type {string}
	         *
	         * @example
	         * const root = postcss.parse(css, { from: 'a.css' });
	         * root.source.input.from //=> "/home/ai/a.css"
	         *
	         * const root = postcss.parse(css);
	         * root.source.input.from //=> "<input css 1>"
	         */

	    }, {
	        key: 'from',
	        get: function get() {
	            return this.file || this.id;
	        }
	    }]);

	    return Input;
	}();

	exports.default = Input;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _supportsColor = __webpack_require__(53);

	var _supportsColor2 = _interopRequireDefault(_supportsColor);

	var _terminalHighlight = __webpack_require__(54);

	var _terminalHighlight2 = _interopRequireDefault(_terminalHighlight);

	var _warnOnce = __webpack_require__(56);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * The CSS parser throws this error for broken CSS.
	 *
	 * Custom parsers can throw this error for broken custom syntax using
	 * the {@link Node#error} method.
	 *
	 * PostCSS will use the input source map to detect the original error location.
	 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
	 * PostCSS will show the original position in the Sass file.
	 *
	 * If you need the position in the PostCSS input
	 * (e.g., to debug the previous compiler), use `error.input.file`.
	 *
	 * @example
	 * // Catching and checking syntax error
	 * try {
	 *   postcss.parse('a{')
	 * } catch (error) {
	 *   if ( error.name === 'CssSyntaxError' ) {
	 *     error //=> CssSyntaxError
	 *   }
	 * }
	 *
	 * @example
	 * // Raising error from plugin
	 * throw node.error('Unknown variable', { plugin: 'postcss-vars' });
	 */
	var CssSyntaxError = function () {

	    /**
	     * @param {string} message  - error message
	     * @param {number} [line]   - source line of the error
	     * @param {number} [column] - source column of the error
	     * @param {string} [source] - source code of the broken file
	     * @param {string} [file]   - absolute path to the broken file
	     * @param {string} [plugin] - PostCSS plugin name, if error came from plugin
	     */
	    function CssSyntaxError(message, line, column, source, file, plugin) {
	        _classCallCheck(this, CssSyntaxError);

	        /**
	         * @member {string} - Always equal to `'CssSyntaxError'`. You should
	         *                    always check error type
	         *                    by `error.name === 'CssSyntaxError'` instead of
	         *                    `error instanceof CssSyntaxError`, because
	         *                    npm could have several PostCSS versions.
	         *
	         * @example
	         * if ( error.name === 'CssSyntaxError' ) {
	         *   error //=> CssSyntaxError
	         * }
	         */
	        this.name = 'CssSyntaxError';
	        /**
	         * @member {string} - Error message.
	         *
	         * @example
	         * error.message //=> 'Unclosed block'
	         */
	        this.reason = message;

	        if (file) {
	            /**
	             * @member {string} - Absolute path to the broken file.
	             *
	             * @example
	             * error.file       //=> 'a.sass'
	             * error.input.file //=> 'a.css'
	             */
	            this.file = file;
	        }
	        if (source) {
	            /**
	             * @member {string} - Source code of the broken file.
	             *
	             * @example
	             * error.source       //=> 'a { b {} }'
	             * error.input.column //=> 'a b { }'
	             */
	            this.source = source;
	        }
	        if (plugin) {
	            /**
	             * @member {string} - Plugin name, if error came from plugin.
	             *
	             * @example
	             * error.plugin //=> 'postcss-vars'
	             */
	            this.plugin = plugin;
	        }
	        if (typeof line !== 'undefined' && typeof column !== 'undefined') {
	            /**
	             * @member {number} - Source line of the error.
	             *
	             * @example
	             * error.line       //=> 2
	             * error.input.line //=> 4
	             */
	            this.line = line;
	            /**
	             * @member {number} - Source column of the error.
	             *
	             * @example
	             * error.column       //=> 1
	             * error.input.column //=> 4
	             */
	            this.column = column;
	        }

	        this.setMessage();

	        if (Error.captureStackTrace) {
	            Error.captureStackTrace(this, CssSyntaxError);
	        }
	    }

	    _createClass(CssSyntaxError, [{
	        key: 'setMessage',
	        value: function setMessage() {
	            /**
	             * @member {string} - Full error text in the GNU error format
	             *                    with plugin, file, line and column.
	             *
	             * @example
	             * error.message //=> 'a.css:1:1: Unclosed block'
	             */
	            this.message = this.plugin ? this.plugin + ': ' : '';
	            this.message += this.file ? this.file : '<css input>';
	            if (typeof this.line !== 'undefined') {
	                this.message += ':' + this.line + ':' + this.column;
	            }
	            this.message += ': ' + this.reason;
	        }

	        /**
	         * Returns a few lines of CSS source that caused the error.
	         *
	         * If the CSS has an input source map without `sourceContent`,
	         * this method will return an empty string.
	         *
	         * @param {boolean} [color] whether arrow will be colored red by terminal
	         *                          color codes. By default, PostCSS will detect
	         *                          color support by `process.stdout.isTTY`
	         *                          and `process.env.NODE_DISABLE_COLORS`.
	         *
	         * @example
	         * error.showSourceCode() //=> "  4 | }
	         *                        //      5 | a {
	         *                        //    > 6 |   bad
	         *                        //        |   ^
	         *                        //      7 | }
	         *                        //      8 | b {"
	         *
	         * @return {string} few lines of CSS source that caused the error
	         */

	    }, {
	        key: 'showSourceCode',
	        value: function showSourceCode(color) {
	            var _this = this;

	            if (!this.source) return '';

	            var css = this.source;
	            if (typeof color === 'undefined') color = _supportsColor2.default;
	            if (color) css = (0, _terminalHighlight2.default)(css);

	            var lines = css.split(/\r?\n/);
	            var start = Math.max(this.line - 3, 0);
	            var end = Math.min(this.line + 2, lines.length);

	            var maxWidth = String(end).length;

	            return lines.slice(start, end).map(function (line, index) {
	                var number = start + 1 + index;
	                var padded = (' ' + number).slice(-maxWidth);
	                var gutter = ' ' + padded + ' | ';
	                if (number === _this.line) {
	                    var spacing = gutter.replace(/\d/g, ' ') + line.slice(0, _this.column - 1).replace(/[^\t]/g, ' ');
	                    return '>' + gutter + line + '\n ' + spacing + '^';
	                } else {
	                    return ' ' + gutter + line;
	                }
	            }).join('\n');
	        }

	        /**
	         * Returns error position, message and source code of the broken part.
	         *
	         * @example
	         * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
	         *                  //    > 1 | a {
	         *                  //        | ^"
	         *
	         * @return {string} error position, message and source code
	         */

	    }, {
	        key: 'toString',
	        value: function toString() {
	            var code = this.showSourceCode();
	            if (code) {
	                code = '\n\n' + code + '\n';
	            }
	            return this.name + ': ' + this.message + code;
	        }
	    }, {
	        key: 'generated',
	        get: function get() {
	            (0, _warnOnce2.default)('CssSyntaxError#generated is depreacted. Use input instead.');
	            return this.input;
	        }

	        /**
	         * @memberof CssSyntaxError#
	         * @member {Input} input - Input object with PostCSS internal information
	         *                         about input file. If input has source map
	         *                         from previous tool, PostCSS will use origin
	         *                         (for example, Sass) source. You can use this
	         *                         object to get PostCSS input source.
	         *
	         * @example
	         * error.input.file //=> 'a.css'
	         * error.file       //=> 'a.sass'
	         */

	    }]);

	    return CssSyntaxError;
	}();

	exports.default = CssSyntaxError;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	module.exports = false;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _tokenize = __webpack_require__(55);

	var _tokenize2 = _interopRequireDefault(_tokenize);

	var _input = __webpack_require__(51);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HIGHLIGHT_THEME = {
	    'brackets': [36, 39], // cyan
	    'string': [31, 39], // red
	    'at-word': [31, 39], // red
	    'comment': [90, 39], // gray
	    '{': [32, 39], // green
	    '}': [32, 39], // green
	    ':': [1, 22], // bold
	    ';': [1, 22], // bold
	    '(': [1, 22], // bold
	    ')': [1, 22] // bold
	};

	function code(color) {
	    return '\u001b[' + color + 'm';
	}

	function terminalHighlight(css) {
	    var tokens = (0, _tokenize2.default)(new _input2.default(css), { ignoreErrors: true });
	    var result = [];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        var _loop = function _loop() {
	            var token = _step.value;

	            var color = HIGHLIGHT_THEME[token[0]];
	            if (color) {
	                result.push(token[1].split(/\r?\n/).map(function (i) {
	                    return code(color[0]) + i + code(color[1]);
	                }).join('\n'));
	            } else {
	                result.push(token[1]);
	            }
	        };

	        for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            _loop();
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    return result.join('');
	}

	exports.default = terminalHighlight;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = tokenize;
	var SINGLE_QUOTE = '\''.charCodeAt(0);
	var DOUBLE_QUOTE = '"'.charCodeAt(0);
	var BACKSLASH = '\\'.charCodeAt(0);
	var SLASH = '/'.charCodeAt(0);
	var NEWLINE = '\n'.charCodeAt(0);
	var SPACE = ' '.charCodeAt(0);
	var FEED = '\f'.charCodeAt(0);
	var TAB = '\t'.charCodeAt(0);
	var CR = '\r'.charCodeAt(0);
	var OPEN_SQUARE = '['.charCodeAt(0);
	var CLOSE_SQUARE = ']'.charCodeAt(0);
	var OPEN_PARENTHESES = '('.charCodeAt(0);
	var CLOSE_PARENTHESES = ')'.charCodeAt(0);
	var OPEN_CURLY = '{'.charCodeAt(0);
	var CLOSE_CURLY = '}'.charCodeAt(0);
	var SEMICOLON = ';'.charCodeAt(0);
	var ASTERISK = '*'.charCodeAt(0);
	var COLON = ':'.charCodeAt(0);
	var AT = '@'.charCodeAt(0);

	var RE_AT_END = /[ \n\t\r\f\{\(\)'"\\;/\[\]#]/g;
	var RE_WORD_END = /[ \n\t\r\f\(\)\{\}:;@!'"\\\]\[#]|\/(?=\*)/g;
	var RE_BAD_BRACKET = /.[\\\/\("'\n]/;

	function tokenize(input) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var tokens = [];
	    var css = input.css.valueOf();

	    var ignore = options.ignoreErrors;

	    var code = void 0,
	        next = void 0,
	        quote = void 0,
	        lines = void 0,
	        last = void 0,
	        content = void 0,
	        escape = void 0,
	        nextLine = void 0,
	        nextOffset = void 0,
	        escaped = void 0,
	        escapePos = void 0,
	        prev = void 0,
	        n = void 0;

	    var length = css.length;
	    var offset = -1;
	    var line = 1;
	    var pos = 0;

	    function unclosed(what) {
	        throw input.error('Unclosed ' + what, line, pos - offset);
	    }

	    while (pos < length) {
	        code = css.charCodeAt(pos);

	        if (code === NEWLINE || code === FEED || code === CR && css.charCodeAt(pos + 1) !== NEWLINE) {
	            offset = pos;
	            line += 1;
	        }

	        switch (code) {
	            case NEWLINE:
	            case SPACE:
	            case TAB:
	            case CR:
	            case FEED:
	                next = pos;
	                do {
	                    next += 1;
	                    code = css.charCodeAt(next);
	                    if (code === NEWLINE) {
	                        offset = next;
	                        line += 1;
	                    }
	                } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);

	                tokens.push(['space', css.slice(pos, next)]);
	                pos = next - 1;
	                break;

	            case OPEN_SQUARE:
	                tokens.push(['[', '[', line, pos - offset]);
	                break;

	            case CLOSE_SQUARE:
	                tokens.push([']', ']', line, pos - offset]);
	                break;

	            case OPEN_CURLY:
	                tokens.push(['{', '{', line, pos - offset]);
	                break;

	            case CLOSE_CURLY:
	                tokens.push(['}', '}', line, pos - offset]);
	                break;

	            case COLON:
	                tokens.push([':', ':', line, pos - offset]);
	                break;

	            case SEMICOLON:
	                tokens.push([';', ';', line, pos - offset]);
	                break;

	            case OPEN_PARENTHESES:
	                prev = tokens.length ? tokens[tokens.length - 1][1] : '';
	                n = css.charCodeAt(pos + 1);
	                if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
	                    next = pos;
	                    do {
	                        escaped = false;
	                        next = css.indexOf(')', next + 1);
	                        if (next === -1) {
	                            if (ignore) {
	                                next = pos;
	                                break;
	                            } else {
	                                unclosed('bracket');
	                            }
	                        }
	                        escapePos = next;
	                        while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
	                            escapePos -= 1;
	                            escaped = !escaped;
	                        }
	                    } while (escaped);

	                    tokens.push(['brackets', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
	                    pos = next;
	                } else {
	                    next = css.indexOf(')', pos + 1);
	                    content = css.slice(pos, next + 1);

	                    if (next === -1 || RE_BAD_BRACKET.test(content)) {
	                        tokens.push(['(', '(', line, pos - offset]);
	                    } else {
	                        tokens.push(['brackets', content, line, pos - offset, line, next - offset]);
	                        pos = next;
	                    }
	                }

	                break;

	            case CLOSE_PARENTHESES:
	                tokens.push([')', ')', line, pos - offset]);
	                break;

	            case SINGLE_QUOTE:
	            case DOUBLE_QUOTE:
	                quote = code === SINGLE_QUOTE ? '\'' : '"';
	                next = pos;
	                do {
	                    escaped = false;
	                    next = css.indexOf(quote, next + 1);
	                    if (next === -1) {
	                        if (ignore) {
	                            next = pos + 1;
	                            break;
	                        } else {
	                            unclosed('quote');
	                        }
	                    }
	                    escapePos = next;
	                    while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
	                        escapePos -= 1;
	                        escaped = !escaped;
	                    }
	                } while (escaped);

	                content = css.slice(pos, next + 1);
	                lines = content.split('\n');
	                last = lines.length - 1;

	                if (last > 0) {
	                    nextLine = line + last;
	                    nextOffset = next - lines[last].length;
	                } else {
	                    nextLine = line;
	                    nextOffset = offset;
	                }

	                tokens.push(['string', css.slice(pos, next + 1), line, pos - offset, nextLine, next - nextOffset]);

	                offset = nextOffset;
	                line = nextLine;
	                pos = next;
	                break;

	            case AT:
	                RE_AT_END.lastIndex = pos + 1;
	                RE_AT_END.test(css);
	                if (RE_AT_END.lastIndex === 0) {
	                    next = css.length - 1;
	                } else {
	                    next = RE_AT_END.lastIndex - 2;
	                }
	                tokens.push(['at-word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
	                pos = next;
	                break;

	            case BACKSLASH:
	                next = pos;
	                escape = true;
	                while (css.charCodeAt(next + 1) === BACKSLASH) {
	                    next += 1;
	                    escape = !escape;
	                }
	                code = css.charCodeAt(next + 1);
	                if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
	                    next += 1;
	                }
	                tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
	                pos = next;
	                break;

	            default:
	                if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
	                    next = css.indexOf('*/', pos + 2) + 1;
	                    if (next === 0) {
	                        if (ignore) {
	                            next = css.length;
	                        } else {
	                            unclosed('comment');
	                        }
	                    }

	                    content = css.slice(pos, next + 1);
	                    lines = content.split('\n');
	                    last = lines.length - 1;

	                    if (last > 0) {
	                        nextLine = line + last;
	                        nextOffset = next - lines[last].length;
	                    } else {
	                        nextLine = line;
	                        nextOffset = offset;
	                    }

	                    tokens.push(['comment', content, line, pos - offset, nextLine, next - nextOffset]);

	                    offset = nextOffset;
	                    line = nextLine;
	                    pos = next;
	                } else {
	                    RE_WORD_END.lastIndex = pos + 1;
	                    RE_WORD_END.test(css);
	                    if (RE_WORD_END.lastIndex === 0) {
	                        next = css.length - 1;
	                    } else {
	                        next = RE_WORD_END.lastIndex - 2;
	                    }

	                    tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
	                    pos = next;
	                }

	                break;
	        }

	        pos++;
	    }

	    return tokens;
	}
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = warnOnce;
	var printed = {};

	function warnOnce(message) {
	    if (printed[message]) return;
	    printed[message] = true;

	    if (typeof console !== 'undefined' && console.warn) console.warn(message);
	}
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _tokenize2 = __webpack_require__(55);

	var _tokenize3 = _interopRequireDefault(_tokenize2);

	var _comment = __webpack_require__(59);

	var _comment2 = _interopRequireDefault(_comment);

	var _parser = __webpack_require__(63);

	var _parser2 = _interopRequireDefault(_parser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SafeParser = function (_Parser) {
	    _inherits(SafeParser, _Parser);

	    function SafeParser() {
	        _classCallCheck(this, SafeParser);

	        return _possibleConstructorReturn(this, (SafeParser.__proto__ || Object.getPrototypeOf(SafeParser)).apply(this, arguments));
	    }

	    _createClass(SafeParser, [{
	        key: 'tokenize',
	        value: function tokenize() {
	            this.tokens = (0, _tokenize3.default)(this.input, { ignoreErrors: true });
	        }
	    }, {
	        key: 'comment',
	        value: function comment(token) {
	            var node = new _comment2.default();
	            this.init(node, token[2], token[3]);
	            node.source.end = { line: token[4], column: token[5] };

	            var text = token[1].slice(2);
	            if (text.slice(-2) === '*/') text = text.slice(0, -2);

	            if (/^\s*$/.test(text)) {
	                node.text = '';
	                node.raws.left = text;
	                node.raws.right = '';
	            } else {
	                var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
	                node.text = match[2];
	                node.raws.left = match[1];
	                node.raws.right = match[3];
	            }
	        }
	    }, {
	        key: 'unclosedBracket',
	        value: function unclosedBracket() {}
	    }, {
	        key: 'unknownWord',
	        value: function unknownWord(start) {
	            var buffer = this.tokens.slice(start, this.pos + 1);
	            this.spaces += buffer.map(function (i) {
	                return i[1];
	            }).join('');
	        }
	    }, {
	        key: 'unexpectedClose',
	        value: function unexpectedClose() {
	            this.current.raws.after += '}';
	        }
	    }, {
	        key: 'doubleColon',
	        value: function doubleColon() {}
	    }, {
	        key: 'unnamedAtrule',
	        value: function unnamedAtrule(node) {
	            node.name = '';
	        }
	    }, {
	        key: 'precheckMissedSemicolon',
	        value: function precheckMissedSemicolon(tokens) {
	            var colon = this.colon(tokens);
	            if (colon === false) return;

	            var split = void 0;
	            for (split = colon - 1; split >= 0; split--) {
	                if (tokens[split][0] === 'word') break;
	            }
	            for (split -= 1; split >= 0; split--) {
	                if (tokens[split][0] !== 'space') {
	                    split += 1;
	                    break;
	                }
	            }
	            var other = tokens.splice(split, tokens.length - split);
	            this.decl(other);
	        }
	    }, {
	        key: 'checkMissedSemicolon',
	        value: function checkMissedSemicolon() {}
	    }, {
	        key: 'endFile',
	        value: function endFile() {
	            if (this.current.nodes && this.current.nodes.length) {
	                this.current.raws.semicolon = this.semicolon;
	            }
	            this.current.raws.after = (this.current.raws.after || '') + this.spaces;

	            while (this.current.parent) {
	                this.current = this.current.parent;
	                this.current.raws.after = '';
	            }
	        }
	    }]);

	    return SafeParser;
	}(_parser2.default);

	exports.default = SafeParser;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _warnOnce = __webpack_require__(56);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	var _node = __webpack_require__(60);

	var _node2 = _interopRequireDefault(_node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Represents a comment between declarations or statements (rule and at-rules).
	 *
	 * Comments inside selectors, at-rule parameters, or declaration values
	 * will be stored in the `raws` properties explained above.
	 *
	 * @extends Node
	 */
	var Comment = function (_Node) {
	    _inherits(Comment, _Node);

	    function Comment(defaults) {
	        _classCallCheck(this, Comment);

	        var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, defaults));

	        _this.type = 'comment';
	        return _this;
	    }

	    _createClass(Comment, [{
	        key: 'left',
	        get: function get() {
	            (0, _warnOnce2.default)('Comment#left was deprecated. Use Comment#raws.left');
	            return this.raws.left;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Comment#left was deprecated. Use Comment#raws.left');
	            this.raws.left = val;
	        }
	    }, {
	        key: 'right',
	        get: function get() {
	            (0, _warnOnce2.default)('Comment#right was deprecated. Use Comment#raws.right');
	            return this.raws.right;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Comment#right was deprecated. Use Comment#raws.right');
	            this.raws.right = val;
	        }

	        /**
	         * @memberof Comment#
	         * @member {string} text - the comment’s text
	         */

	        /**
	         * @memberof Comment#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node.
	         * * `left`: the space symbols between `/*` and the comment’s text.
	         * * `right`: the space symbols between the comment’s text.
	         */

	    }]);

	    return Comment;
	}(_node2.default);

	exports.default = Comment;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _cssSyntaxError = __webpack_require__(52);

	var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);

	var _stringifier = __webpack_require__(61);

	var _stringifier2 = _interopRequireDefault(_stringifier);

	var _stringify = __webpack_require__(62);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _warnOnce = __webpack_require__(56);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @typedef {object} position
	 * @property {number} line   - source line in file
	 * @property {number} column - source column in file
	 */

	/**
	 * @typedef {object} source
	 * @property {Input} input    - {@link Input} with input file
	 * @property {position} start - The starting position of the node’s source
	 * @property {position} end   - The ending position of the node’s source
	 */

	var cloneNode = function cloneNode(obj, parent) {
	    var cloned = new obj.constructor();

	    for (var i in obj) {
	        if (!obj.hasOwnProperty(i)) continue;
	        var value = obj[i];
	        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

	        if (i === 'parent' && type === 'object') {
	            if (parent) cloned[i] = parent;
	        } else if (i === 'source') {
	            cloned[i] = value;
	        } else if (value instanceof Array) {
	            cloned[i] = value.map(function (j) {
	                return cloneNode(j, cloned);
	            });
	        } else if (i !== 'before' && i !== 'after' && i !== 'between' && i !== 'semicolon') {
	            if (type === 'object' && value !== null) value = cloneNode(value);
	            cloned[i] = value;
	        }
	    }

	    return cloned;
	};

	/**
	 * All node classes inherit the following common methods.
	 *
	 * @abstract
	 */

	var Node = function () {

	    /**
	     * @param {object} [defaults] - value for node properties
	     */
	    function Node() {
	        var defaults = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        _classCallCheck(this, Node);

	        this.raws = {};
	        for (var name in defaults) {
	            this[name] = defaults[name];
	        }
	    }

	    /**
	     * Returns a CssSyntaxError instance containing the original position
	     * of the node in the source, showing line and column numbers and also
	     * a small excerpt to facilitate debugging.
	     *
	     * If present, an input source map will be used to get the original position
	     * of the source, even from a previous compilation step
	     * (e.g., from Sass compilation).
	     *
	     * This method produces very useful error messages.
	     *
	     * @param {string} message     - error description
	     * @param {object} [opts]      - options
	     * @param {string} opts.plugin - plugin name that created this error.
	     *                               PostCSS will set it automatically.
	     * @param {string} opts.word   - a word inside a node’s string that should
	     *                               be highlighted as the source of the error
	     * @param {number} opts.index  - an index inside a node’s string that should
	     *                               be highlighted as the source of the error
	     *
	     * @return {CssSyntaxError} error object to throw it
	     *
	     * @example
	     * if ( !variables[name] ) {
	     *   throw decl.error('Unknown variable ' + name, { word: name });
	     *   // CssSyntaxError: postcss-vars:a.sass:4:3: Unknown variable $black
	     *   //   color: $black
	     *   // a
	     *   //          ^
	     *   //   background: white
	     * }
	     */


	    _createClass(Node, [{
	        key: 'error',
	        value: function error(message) {
	            var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	            if (this.source) {
	                var pos = this.positionBy(opts);
	                return this.source.input.error(message, pos.line, pos.column, opts);
	            } else {
	                return new _cssSyntaxError2.default(message);
	            }
	        }

	        /**
	         * This method is provided as a convenience wrapper for {@link Result#warn}.
	         *
	         * @param {Result} result      - the {@link Result} instance
	         *                               that will receive the warning
	         * @param {string} text        - warning message
	         * @param {object} [opts]      - options
	         * @param {string} opts.plugin - plugin name that created this warning.
	         *                               PostCSS will set it automatically.
	         * @param {string} opts.word   - a word inside a node’s string that should
	         *                               be highlighted as the source of the warning
	         * @param {number} opts.index  - an index inside a node’s string that should
	         *                               be highlighted as the source of the warning
	         *
	         * @return {Warning} created warning object
	         *
	         * @example
	         * const plugin = postcss.plugin('postcss-deprecated', () => {
	         *   return (root, result) => {
	         *     root.walkDecls('bad', decl => {
	         *       decl.warn(result, 'Deprecated property bad');
	         *     });
	         *   };
	         * });
	         */

	    }, {
	        key: 'warn',
	        value: function warn(result, text, opts) {
	            var data = { node: this };
	            for (var i in opts) {
	                data[i] = opts[i];
	            }return result.warn(text, data);
	        }

	        /**
	         * Removes the node from its parent and cleans the parent properties
	         * from the node and its children.
	         *
	         * @example
	         * if ( decl.prop.match(/^-webkit-/) ) {
	         *   decl.remove();
	         * }
	         *
	         * @return {Node} node to make calls chain
	         */

	    }, {
	        key: 'remove',
	        value: function remove() {
	            if (this.parent) {
	                this.parent.removeChild(this);
	            }
	            this.parent = undefined;
	            return this;
	        }

	        /**
	         * Returns a CSS string representing the node.
	         *
	         * @param {stringifier|syntax} [stringifier] - a syntax to use
	         *                                             in string generation
	         *
	         * @return {string} CSS string of this node
	         *
	         * @example
	         * postcss.rule({ selector: 'a' }).toString() //=> "a {}"
	         */

	    }, {
	        key: 'toString',
	        value: function toString() {
	            var stringifier = arguments.length <= 0 || arguments[0] === undefined ? _stringify2.default : arguments[0];

	            if (stringifier.stringify) stringifier = stringifier.stringify;
	            var result = '';
	            stringifier(this, function (i) {
	                result += i;
	            });
	            return result;
	        }

	        /**
	         * Returns a clone of the node.
	         *
	         * The resulting cloned node and its (cloned) children will have
	         * a clean parent and code style properties.
	         *
	         * @param {object} [overrides] - new properties to override in the clone.
	         *
	         * @example
	         * const cloned = decl.clone({ prop: '-moz-' + decl.prop });
	         * cloned.raws.before  //=> undefined
	         * cloned.parent       //=> undefined
	         * cloned.toString()   //=> -moz-transform: scale(0)
	         *
	         * @return {Node} clone of the node
	         */

	    }, {
	        key: 'clone',
	        value: function clone() {
	            var overrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            var cloned = cloneNode(this);
	            for (var name in overrides) {
	                cloned[name] = overrides[name];
	            }
	            return cloned;
	        }

	        /**
	         * Shortcut to clone the node and insert the resulting cloned node
	         * before the current node.
	         *
	         * @param {object} [overrides] - new properties to override in the clone.
	         *
	         * @example
	         * decl.cloneBefore({ prop: '-moz-' + decl.prop });
	         *
	         * @return {Node} - new node
	         */

	    }, {
	        key: 'cloneBefore',
	        value: function cloneBefore() {
	            var overrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            var cloned = this.clone(overrides);
	            this.parent.insertBefore(this, cloned);
	            return cloned;
	        }

	        /**
	         * Shortcut to clone the node and insert the resulting cloned node
	         * after the current node.
	         *
	         * @param {object} [overrides] - new properties to override in the clone.
	         *
	         * @return {Node} - new node
	         */

	    }, {
	        key: 'cloneAfter',
	        value: function cloneAfter() {
	            var overrides = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            var cloned = this.clone(overrides);
	            this.parent.insertAfter(this, cloned);
	            return cloned;
	        }

	        /**
	         * Inserts node(s) before the current node and removes the current node.
	         *
	         * @param {...Node} nodes - node(s) to replace current one
	         *
	         * @example
	         * if ( atrule.name == 'mixin' ) {
	         *   atrule.replaceWith(mixinRules[atrule.params]);
	         * }
	         *
	         * @return {Node} current node to methods chain
	         */

	    }, {
	        key: 'replaceWith',
	        value: function replaceWith() {
	            if (this.parent) {
	                for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
	                    nodes[_key] = arguments[_key];
	                }

	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var node = _step.value;

	                        this.parent.insertBefore(this, node);
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                this.remove();
	            }

	            return this;
	        }

	        /**
	         * Removes the node from its current parent and inserts it
	         * at the end of `newParent`.
	         *
	         * This will clean the `before` and `after` code {@link Node#raws} data
	         * from the node and replace them with the indentation style of `newParent`.
	         * It will also clean the `between` property
	         * if `newParent` is in another {@link Root}.
	         *
	         * @param {Container} newParent - container node where the current node
	         *                                will be moved
	         *
	         * @example
	         * atrule.moveTo(atrule.root());
	         *
	         * @return {Node} current node to methods chain
	         */

	    }, {
	        key: 'moveTo',
	        value: function moveTo(newParent) {
	            this.cleanRaws(this.root() === newParent.root());
	            this.remove();
	            newParent.append(this);
	            return this;
	        }

	        /**
	         * Removes the node from its current parent and inserts it into
	         * a new parent before `otherNode`.
	         *
	         * This will also clean the node’s code style properties just as it would
	         * in {@link Node#moveTo}.
	         *
	         * @param {Node} otherNode - node that will be before current node
	         *
	         * @return {Node} current node to methods chain
	         */

	    }, {
	        key: 'moveBefore',
	        value: function moveBefore(otherNode) {
	            this.cleanRaws(this.root() === otherNode.root());
	            this.remove();
	            otherNode.parent.insertBefore(otherNode, this);
	            return this;
	        }

	        /**
	         * Removes the node from its current parent and inserts it into
	         * a new parent after `otherNode`.
	         *
	         * This will also clean the node’s code style properties just as it would
	         * in {@link Node#moveTo}.
	         *
	         * @param {Node} otherNode - node that will be after current node
	         *
	         * @return {Node} current node to methods chain
	         */

	    }, {
	        key: 'moveAfter',
	        value: function moveAfter(otherNode) {
	            this.cleanRaws(this.root() === otherNode.root());
	            this.remove();
	            otherNode.parent.insertAfter(otherNode, this);
	            return this;
	        }

	        /**
	         * Returns the next child of the node’s parent.
	         * Returns `undefined` if the current node is the last child.
	         *
	         * @return {Node|undefined} next node
	         *
	         * @example
	         * if ( comment.text === 'delete next' ) {
	         *   const next = comment.next();
	         *   if ( next ) {
	         *     next.remove();
	         *   }
	         * }
	         */

	    }, {
	        key: 'next',
	        value: function next() {
	            var index = this.parent.index(this);
	            return this.parent.nodes[index + 1];
	        }

	        /**
	         * Returns the previous child of the node’s parent.
	         * Returns `undefined` if the current node is the first child.
	         *
	         * @return {Node|undefined} previous node
	         *
	         * @example
	         * const annotation = decl.prev();
	         * if ( annotation.type == 'comment' ) {
	         *  readAnnotation(annotation.text);
	         * }
	         */

	    }, {
	        key: 'prev',
	        value: function prev() {
	            var index = this.parent.index(this);
	            return this.parent.nodes[index - 1];
	        }
	    }, {
	        key: 'toJSON',
	        value: function toJSON() {
	            var fixed = {};

	            for (var name in this) {
	                if (!this.hasOwnProperty(name)) continue;
	                if (name === 'parent') continue;
	                var value = this[name];

	                if (value instanceof Array) {
	                    fixed[name] = value.map(function (i) {
	                        if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && i.toJSON) {
	                            return i.toJSON();
	                        } else {
	                            return i;
	                        }
	                    });
	                } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.toJSON) {
	                    fixed[name] = value.toJSON();
	                } else {
	                    fixed[name] = value;
	                }
	            }

	            return fixed;
	        }

	        /**
	         * Returns a {@link Node#raws} value. If the node is missing
	         * the code style property (because the node was manually built or cloned),
	         * PostCSS will try to autodetect the code style property by looking
	         * at other nodes in the tree.
	         *
	         * @param {string} prop          - name of code style property
	         * @param {string} [defaultType] - name of default value, it can be missed
	         *                                 if the value is the same as prop
	         *
	         * @example
	         * const root = postcss.parse('a { background: white }');
	         * root.nodes[0].append({ prop: 'color', value: 'black' });
	         * root.nodes[0].nodes[1].raws.before   //=> undefined
	         * root.nodes[0].nodes[1].raw('before') //=> ' '
	         *
	         * @return {string} code style value
	         */

	    }, {
	        key: 'raw',
	        value: function raw(prop, defaultType) {
	            var str = new _stringifier2.default();
	            return str.raw(this, prop, defaultType);
	        }

	        /**
	         * Finds the Root instance of the node’s tree.
	         *
	         * @example
	         * root.nodes[0].nodes[0].root() === root
	         *
	         * @return {Root} root parent
	         */

	    }, {
	        key: 'root',
	        value: function root() {
	            var result = this;
	            while (result.parent) {
	                result = result.parent;
	            }return result;
	        }
	    }, {
	        key: 'cleanRaws',
	        value: function cleanRaws(keepBetween) {
	            delete this.raws.before;
	            delete this.raws.after;
	            if (!keepBetween) delete this.raws.between;
	        }
	    }, {
	        key: 'positionInside',
	        value: function positionInside(index) {
	            var string = this.toString();
	            var column = this.source.start.column;
	            var line = this.source.start.line;

	            for (var i = 0; i < index; i++) {
	                if (string[i] === '\n') {
	                    column = 1;
	                    line += 1;
	                } else {
	                    column += 1;
	                }
	            }

	            return { line: line, column: column };
	        }
	    }, {
	        key: 'positionBy',
	        value: function positionBy(opts) {
	            var pos = this.source.start;
	            if (opts.index) {
	                pos = this.positionInside(opts.index);
	            } else if (opts.word) {
	                var index = this.toString().indexOf(opts.word);
	                if (index !== -1) pos = this.positionInside(index);
	            }
	            return pos;
	        }
	    }, {
	        key: 'removeSelf',
	        value: function removeSelf() {
	            (0, _warnOnce2.default)('Node#removeSelf is deprecated. Use Node#remove.');
	            return this.remove();
	        }
	    }, {
	        key: 'replace',
	        value: function replace(nodes) {
	            (0, _warnOnce2.default)('Node#replace is deprecated. Use Node#replaceWith');
	            return this.replaceWith(nodes);
	        }
	    }, {
	        key: 'style',
	        value: function style(own, detect) {
	            (0, _warnOnce2.default)('Node#style() is deprecated. Use Node#raw()');
	            return this.raw(own, detect);
	        }
	    }, {
	        key: 'cleanStyles',
	        value: function cleanStyles(keepBetween) {
	            (0, _warnOnce2.default)('Node#cleanStyles() is deprecated. Use Node#cleanRaws()');
	            return this.cleanRaws(keepBetween);
	        }
	    }, {
	        key: 'before',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#before is deprecated. Use Node#raws.before');
	            return this.raws.before;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#before is deprecated. Use Node#raws.before');
	            this.raws.before = val;
	        }
	    }, {
	        key: 'between',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#between is deprecated. Use Node#raws.between');
	            return this.raws.between;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#between is deprecated. Use Node#raws.between');
	            this.raws.between = val;
	        }

	        /**
	         * @memberof Node#
	         * @member {string} type - String representing the node’s type.
	         *                         Possible values are `root`, `atrule`, `rule`,
	         *                         `decl`, or `comment`.
	         *
	         * @example
	         * postcss.decl({ prop: 'color', value: 'black' }).type //=> 'decl'
	         */

	        /**
	         * @memberof Node#
	         * @member {Container} parent - the node’s parent node.
	         *
	         * @example
	         * root.nodes[0].parent == root;
	         */

	        /**
	         * @memberof Node#
	         * @member {source} source - the input source of the node
	         *
	         * The property is used in source map generation.
	         *
	         * If you create a node manually (e.g., with `postcss.decl()`),
	         * that node will not have a `source` property and will be absent
	         * from the source map. For this reason, the plugin developer should
	         * consider cloning nodes to create new ones (in which case the new node’s
	         * source will reference the original, cloned node) or setting
	         * the `source` property manually.
	         *
	         * ```js
	         * // Bad
	         * const prefixed = postcss.decl({
	         *   prop: '-moz-' + decl.prop,
	         *   value: decl.value
	         * });
	         *
	         * // Good
	         * const prefixed = decl.clone({ prop: '-moz-' + decl.prop });
	         * ```
	         *
	         * ```js
	         * if ( atrule.name == 'add-link' ) {
	         *   const rule = postcss.rule({ selector: 'a', source: atrule.source });
	         *   atrule.parent.insertBefore(atrule, rule);
	         * }
	         * ```
	         *
	         * @example
	         * decl.source.input.from //=> '/home/ai/a.sass'
	         * decl.source.start      //=> { line: 10, column: 2 }
	         * decl.source.end        //=> { line: 10, column: 12 }
	         */

	        /**
	         * @memberof Node#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node. It also stores `*`
	         *   and `_` symbols before the declaration (IE hack).
	         * * `after`: the space symbols after the last child of the node
	         *   to the end of the node.
	         * * `between`: the symbols between the property and value
	         *   for declarations, selector and `{` for rules, or last parameter
	         *   and `{` for at-rules.
	         * * `semicolon`: contains true if the last child has
	         *   an (optional) semicolon.
	         * * `afterName`: the space between the at-rule name and its parameters.
	         * * `left`: the space symbols between `/*` and the comment’s text.
	         * * `right`: the space symbols between the comment’s text
	         *   and <code>*&#47;</code>.
	         * * `important`: the content of the important statement,
	         *   if it is not just `!important`.
	         *
	         * PostCSS cleans selectors, declaration values and at-rule parameters
	         * from comments and extra spaces, but it stores origin content in raws
	         * properties. As such, if you don’t change a declaration’s value,
	         * PostCSS will use the raw value with comments.
	         *
	         * @example
	         * const root = postcss.parse('a {\n  color:black\n}')
	         * root.first.first.raws //=> { before: '\n  ', between: ':' }
	         */

	    }]);

	    return Node;
	}();

	exports.default = Node;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* eslint-disable valid-jsdoc */

	var defaultRaw = {
	    colon: ': ',
	    indent: '    ',
	    beforeDecl: '\n',
	    beforeRule: '\n',
	    beforeOpen: ' ',
	    beforeClose: '\n',
	    beforeComment: '\n',
	    after: '\n',
	    emptyBody: '',
	    commentLeft: ' ',
	    commentRight: ' '
	};

	function capitalize(str) {
	    return str[0].toUpperCase() + str.slice(1);
	}

	var Stringifier = function () {
	    function Stringifier(builder) {
	        _classCallCheck(this, Stringifier);

	        this.builder = builder;
	    }

	    _createClass(Stringifier, [{
	        key: 'stringify',
	        value: function stringify(node, semicolon) {
	            this[node.type](node, semicolon);
	        }
	    }, {
	        key: 'root',
	        value: function root(node) {
	            this.body(node);
	            if (node.raws.after) this.builder(node.raws.after);
	        }
	    }, {
	        key: 'comment',
	        value: function comment(node) {
	            var left = this.raw(node, 'left', 'commentLeft');
	            var right = this.raw(node, 'right', 'commentRight');
	            this.builder('/*' + left + node.text + right + '*/', node);
	        }
	    }, {
	        key: 'decl',
	        value: function decl(node, semicolon) {
	            var between = this.raw(node, 'between', 'colon');
	            var string = node.prop + between + this.rawValue(node, 'value');

	            if (node.important) {
	                string += node.raws.important || ' !important';
	            }

	            if (semicolon) string += ';';
	            this.builder(string, node);
	        }
	    }, {
	        key: 'rule',
	        value: function rule(node) {
	            this.block(node, this.rawValue(node, 'selector'));
	        }
	    }, {
	        key: 'atrule',
	        value: function atrule(node, semicolon) {
	            var name = '@' + node.name;
	            var params = node.params ? this.rawValue(node, 'params') : '';

	            if (typeof node.raws.afterName !== 'undefined') {
	                name += node.raws.afterName;
	            } else if (params) {
	                name += ' ';
	            }

	            if (node.nodes) {
	                this.block(node, name + params);
	            } else {
	                var end = (node.raws.between || '') + (semicolon ? ';' : '');
	                this.builder(name + params + end, node);
	            }
	        }
	    }, {
	        key: 'body',
	        value: function body(node) {
	            var last = node.nodes.length - 1;
	            while (last > 0) {
	                if (node.nodes[last].type !== 'comment') break;
	                last -= 1;
	            }

	            var semicolon = this.raw(node, 'semicolon');
	            for (var i = 0; i < node.nodes.length; i++) {
	                var child = node.nodes[i];
	                var before = this.raw(child, 'before');
	                if (before) this.builder(before);
	                this.stringify(child, last !== i || semicolon);
	            }
	        }
	    }, {
	        key: 'block',
	        value: function block(node, start) {
	            var between = this.raw(node, 'between', 'beforeOpen');
	            this.builder(start + between + '{', node, 'start');

	            var after = void 0;
	            if (node.nodes && node.nodes.length) {
	                this.body(node);
	                after = this.raw(node, 'after');
	            } else {
	                after = this.raw(node, 'after', 'emptyBody');
	            }

	            if (after) this.builder(after);
	            this.builder('}', node, 'end');
	        }
	    }, {
	        key: 'raw',
	        value: function raw(node, own, detect) {
	            var value = void 0;
	            if (!detect) detect = own;

	            // Already had
	            if (own) {
	                value = node.raws[own];
	                if (typeof value !== 'undefined') return value;
	            }

	            var parent = node.parent;

	            // Hack for first rule in CSS
	            if (detect === 'before') {
	                if (!parent || parent.type === 'root' && parent.first === node) {
	                    return '';
	                }
	            }

	            // Floating child without parent
	            if (!parent) return defaultRaw[detect];

	            // Detect style by other nodes
	            var root = node.root();
	            if (!root.rawCache) root.rawCache = {};
	            if (typeof root.rawCache[detect] !== 'undefined') {
	                return root.rawCache[detect];
	            }

	            if (detect === 'before' || detect === 'after') {
	                return this.beforeAfter(node, detect);
	            } else {
	                var method = 'raw' + capitalize(detect);
	                if (this[method]) {
	                    value = this[method](root, node);
	                } else {
	                    root.walk(function (i) {
	                        value = i.raws[own];
	                        if (typeof value !== 'undefined') return false;
	                    });
	                }
	            }

	            if (typeof value === 'undefined') value = defaultRaw[detect];

	            root.rawCache[detect] = value;
	            return value;
	        }
	    }, {
	        key: 'rawSemicolon',
	        value: function rawSemicolon(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.nodes && i.nodes.length && i.last.type === 'decl') {
	                    value = i.raws.semicolon;
	                    if (typeof value !== 'undefined') return false;
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawEmptyBody',
	        value: function rawEmptyBody(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.nodes && i.nodes.length === 0) {
	                    value = i.raws.after;
	                    if (typeof value !== 'undefined') return false;
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawIndent',
	        value: function rawIndent(root) {
	            if (root.raws.indent) return root.raws.indent;
	            var value = void 0;
	            root.walk(function (i) {
	                var p = i.parent;
	                if (p && p !== root && p.parent && p.parent === root) {
	                    if (typeof i.raws.before !== 'undefined') {
	                        var parts = i.raws.before.split('\n');
	                        value = parts[parts.length - 1];
	                        value = value.replace(/[^\s]/g, '');
	                        return false;
	                    }
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawBeforeComment',
	        value: function rawBeforeComment(root, node) {
	            var value = void 0;
	            root.walkComments(function (i) {
	                if (typeof i.raws.before !== 'undefined') {
	                    value = i.raws.before;
	                    if (value.indexOf('\n') !== -1) {
	                        value = value.replace(/[^\n]+$/, '');
	                    }
	                    return false;
	                }
	            });
	            if (typeof value === 'undefined') {
	                value = this.raw(node, null, 'beforeDecl');
	            }
	            return value;
	        }
	    }, {
	        key: 'rawBeforeDecl',
	        value: function rawBeforeDecl(root, node) {
	            var value = void 0;
	            root.walkDecls(function (i) {
	                if (typeof i.raws.before !== 'undefined') {
	                    value = i.raws.before;
	                    if (value.indexOf('\n') !== -1) {
	                        value = value.replace(/[^\n]+$/, '');
	                    }
	                    return false;
	                }
	            });
	            if (typeof value === 'undefined') {
	                value = this.raw(node, null, 'beforeRule');
	            }
	            return value;
	        }
	    }, {
	        key: 'rawBeforeRule',
	        value: function rawBeforeRule(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.nodes && (i.parent !== root || root.first !== i)) {
	                    if (typeof i.raws.before !== 'undefined') {
	                        value = i.raws.before;
	                        if (value.indexOf('\n') !== -1) {
	                            value = value.replace(/[^\n]+$/, '');
	                        }
	                        return false;
	                    }
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawBeforeClose',
	        value: function rawBeforeClose(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.nodes && i.nodes.length > 0) {
	                    if (typeof i.raws.after !== 'undefined') {
	                        value = i.raws.after;
	                        if (value.indexOf('\n') !== -1) {
	                            value = value.replace(/[^\n]+$/, '');
	                        }
	                        return false;
	                    }
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawBeforeOpen',
	        value: function rawBeforeOpen(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.type !== 'decl') {
	                    value = i.raws.between;
	                    if (typeof value !== 'undefined') return false;
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawColon',
	        value: function rawColon(root) {
	            var value = void 0;
	            root.walkDecls(function (i) {
	                if (typeof i.raws.between !== 'undefined') {
	                    value = i.raws.between.replace(/[^\s:]/g, '');
	                    return false;
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'beforeAfter',
	        value: function beforeAfter(node, detect) {
	            var value = void 0;
	            if (node.type === 'decl') {
	                value = this.raw(node, null, 'beforeDecl');
	            } else if (node.type === 'comment') {
	                value = this.raw(node, null, 'beforeComment');
	            } else if (detect === 'before') {
	                value = this.raw(node, null, 'beforeRule');
	            } else {
	                value = this.raw(node, null, 'beforeClose');
	            }

	            var buf = node.parent;
	            var depth = 0;
	            while (buf && buf.type !== 'root') {
	                depth += 1;
	                buf = buf.parent;
	            }

	            if (value.indexOf('\n') !== -1) {
	                var indent = this.raw(node, null, 'indent');
	                if (indent.length) {
	                    for (var step = 0; step < depth; step++) {
	                        value += indent;
	                    }
	                }
	            }

	            return value;
	        }
	    }, {
	        key: 'rawValue',
	        value: function rawValue(node, prop) {
	            var value = node[prop];
	            var raw = node.raws[prop];
	            if (raw && raw.value === value) {
	                return raw.raw;
	            } else {
	                return value;
	            }
	        }
	    }]);

	    return Stringifier;
	}();

	exports.default = Stringifier;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = stringify;

	var _stringifier = __webpack_require__(61);

	var _stringifier2 = _interopRequireDefault(_stringifier);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function stringify(node, builder) {
	    var str = new _stringifier2.default(builder);
	    str.stringify(node);
	}
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _declaration = __webpack_require__(64);

	var _declaration2 = _interopRequireDefault(_declaration);

	var _tokenize = __webpack_require__(55);

	var _tokenize2 = _interopRequireDefault(_tokenize);

	var _comment = __webpack_require__(59);

	var _comment2 = _interopRequireDefault(_comment);

	var _atRule = __webpack_require__(65);

	var _atRule2 = _interopRequireDefault(_atRule);

	var _root = __webpack_require__(70);

	var _root2 = _interopRequireDefault(_root);

	var _rule = __webpack_require__(68);

	var _rule2 = _interopRequireDefault(_rule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Parser = function () {
	    function Parser(input) {
	        _classCallCheck(this, Parser);

	        this.input = input;

	        this.pos = 0;
	        this.root = new _root2.default();
	        this.current = this.root;
	        this.spaces = '';
	        this.semicolon = false;

	        this.root.source = { input: input, start: { line: 1, column: 1 } };
	    }

	    _createClass(Parser, [{
	        key: 'tokenize',
	        value: function tokenize() {
	            this.tokens = (0, _tokenize2.default)(this.input);
	        }
	    }, {
	        key: 'loop',
	        value: function loop() {
	            var token = void 0;
	            while (this.pos < this.tokens.length) {
	                token = this.tokens[this.pos];

	                switch (token[0]) {

	                    case 'space':
	                    case ';':
	                        this.spaces += token[1];
	                        break;

	                    case '}':
	                        this.end(token);
	                        break;

	                    case 'comment':
	                        this.comment(token);
	                        break;

	                    case 'at-word':
	                        this.atrule(token);
	                        break;

	                    case '{':
	                        this.emptyRule(token);
	                        break;

	                    default:
	                        this.other();
	                        break;
	                }

	                this.pos += 1;
	            }
	            this.endFile();
	        }
	    }, {
	        key: 'comment',
	        value: function comment(token) {
	            var node = new _comment2.default();
	            this.init(node, token[2], token[3]);
	            node.source.end = { line: token[4], column: token[5] };

	            var text = token[1].slice(2, -2);
	            if (/^\s*$/.test(text)) {
	                node.text = '';
	                node.raws.left = text;
	                node.raws.right = '';
	            } else {
	                var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
	                node.text = match[2];
	                node.raws.left = match[1];
	                node.raws.right = match[3];
	            }
	        }
	    }, {
	        key: 'emptyRule',
	        value: function emptyRule(token) {
	            var node = new _rule2.default();
	            this.init(node, token[2], token[3]);
	            node.selector = '';
	            node.raws.between = '';
	            this.current = node;
	        }
	    }, {
	        key: 'other',
	        value: function other() {
	            var token = void 0;
	            var end = false;
	            var type = null;
	            var colon = false;
	            var bracket = null;
	            var brackets = [];

	            var start = this.pos;
	            while (this.pos < this.tokens.length) {
	                token = this.tokens[this.pos];
	                type = token[0];

	                if (type === '(' || type === '[') {
	                    if (!bracket) bracket = token;
	                    brackets.push(type === '(' ? ')' : ']');
	                } else if (brackets.length === 0) {
	                    if (type === ';') {
	                        if (colon) {
	                            this.decl(this.tokens.slice(start, this.pos + 1));
	                            return;
	                        } else {
	                            break;
	                        }
	                    } else if (type === '{') {
	                        this.rule(this.tokens.slice(start, this.pos + 1));
	                        return;
	                    } else if (type === '}') {
	                        this.pos -= 1;
	                        end = true;
	                        break;
	                    } else if (type === ':') {
	                        colon = true;
	                    }
	                } else if (type === brackets[brackets.length - 1]) {
	                    brackets.pop();
	                    if (brackets.length === 0) bracket = null;
	                }

	                this.pos += 1;
	            }
	            if (this.pos === this.tokens.length) {
	                this.pos -= 1;
	                end = true;
	            }

	            if (brackets.length > 0) this.unclosedBracket(bracket);

	            if (end && colon) {
	                while (this.pos > start) {
	                    token = this.tokens[this.pos][0];
	                    if (token !== 'space' && token !== 'comment') break;
	                    this.pos -= 1;
	                }
	                this.decl(this.tokens.slice(start, this.pos + 1));
	                return;
	            }

	            this.unknownWord(start);
	        }
	    }, {
	        key: 'rule',
	        value: function rule(tokens) {
	            tokens.pop();

	            var node = new _rule2.default();
	            this.init(node, tokens[0][2], tokens[0][3]);

	            node.raws.between = this.spacesFromEnd(tokens);
	            this.raw(node, 'selector', tokens);
	            this.current = node;
	        }
	    }, {
	        key: 'decl',
	        value: function decl(tokens) {
	            var node = new _declaration2.default();
	            this.init(node);

	            var last = tokens[tokens.length - 1];
	            if (last[0] === ';') {
	                this.semicolon = true;
	                tokens.pop();
	            }
	            if (last[4]) {
	                node.source.end = { line: last[4], column: last[5] };
	            } else {
	                node.source.end = { line: last[2], column: last[3] };
	            }

	            while (tokens[0][0] !== 'word') {
	                node.raws.before += tokens.shift()[1];
	            }
	            node.source.start = { line: tokens[0][2], column: tokens[0][3] };

	            node.prop = '';
	            while (tokens.length) {
	                var type = tokens[0][0];
	                if (type === ':' || type === 'space' || type === 'comment') {
	                    break;
	                }
	                node.prop += tokens.shift()[1];
	            }

	            node.raws.between = '';

	            var token = void 0;
	            while (tokens.length) {
	                token = tokens.shift();

	                if (token[0] === ':') {
	                    node.raws.between += token[1];
	                    break;
	                } else {
	                    node.raws.between += token[1];
	                }
	            }

	            if (node.prop[0] === '_' || node.prop[0] === '*') {
	                node.raws.before += node.prop[0];
	                node.prop = node.prop.slice(1);
	            }
	            node.raws.between += this.spacesFromStart(tokens);
	            this.precheckMissedSemicolon(tokens);

	            for (var i = tokens.length - 1; i > 0; i--) {
	                token = tokens[i];
	                if (token[1] === '!important') {
	                    node.important = true;
	                    var string = this.stringFrom(tokens, i);
	                    string = this.spacesFromEnd(tokens) + string;
	                    if (string !== ' !important') node.raws.important = string;
	                    break;
	                } else if (token[1] === 'important') {
	                    var cache = tokens.slice(0);
	                    var str = '';
	                    for (var j = i; j > 0; j--) {
	                        var _type = cache[j][0];
	                        if (str.trim().indexOf('!') === 0 && _type !== 'space') {
	                            break;
	                        }
	                        str = cache.pop()[1] + str;
	                    }
	                    if (str.trim().indexOf('!') === 0) {
	                        node.important = true;
	                        node.raws.important = str;
	                        tokens = cache;
	                    }
	                }

	                if (token[0] !== 'space' && token[0] !== 'comment') {
	                    break;
	                }
	            }

	            this.raw(node, 'value', tokens);

	            if (node.value.indexOf(':') !== -1) this.checkMissedSemicolon(tokens);
	        }
	    }, {
	        key: 'atrule',
	        value: function atrule(token) {
	            var node = new _atRule2.default();
	            node.name = token[1].slice(1);
	            if (node.name === '') {
	                this.unnamedAtrule(node, token);
	            }
	            this.init(node, token[2], token[3]);

	            var last = false;
	            var open = false;
	            var params = [];

	            this.pos += 1;
	            while (this.pos < this.tokens.length) {
	                token = this.tokens[this.pos];

	                if (token[0] === ';') {
	                    node.source.end = { line: token[2], column: token[3] };
	                    this.semicolon = true;
	                    break;
	                } else if (token[0] === '{') {
	                    open = true;
	                    break;
	                } else if (token[0] === '}') {
	                    this.end(token);
	                    break;
	                } else {
	                    params.push(token);
	                }

	                this.pos += 1;
	            }
	            if (this.pos === this.tokens.length) {
	                last = true;
	            }

	            node.raws.between = this.spacesFromEnd(params);
	            if (params.length) {
	                node.raws.afterName = this.spacesFromStart(params);
	                this.raw(node, 'params', params);
	                if (last) {
	                    token = params[params.length - 1];
	                    node.source.end = { line: token[4], column: token[5] };
	                    this.spaces = node.raws.between;
	                    node.raws.between = '';
	                }
	            } else {
	                node.raws.afterName = '';
	                node.params = '';
	            }

	            if (open) {
	                node.nodes = [];
	                this.current = node;
	            }
	        }
	    }, {
	        key: 'end',
	        value: function end(token) {
	            if (this.current.nodes && this.current.nodes.length) {
	                this.current.raws.semicolon = this.semicolon;
	            }
	            this.semicolon = false;

	            this.current.raws.after = (this.current.raws.after || '') + this.spaces;
	            this.spaces = '';

	            if (this.current.parent) {
	                this.current.source.end = { line: token[2], column: token[3] };
	                this.current = this.current.parent;
	            } else {
	                this.unexpectedClose(token);
	            }
	        }
	    }, {
	        key: 'endFile',
	        value: function endFile() {
	            if (this.current.parent) this.unclosedBlock();
	            if (this.current.nodes && this.current.nodes.length) {
	                this.current.raws.semicolon = this.semicolon;
	            }
	            this.current.raws.after = (this.current.raws.after || '') + this.spaces;
	        }

	        // Helpers

	    }, {
	        key: 'init',
	        value: function init(node, line, column) {
	            this.current.push(node);

	            node.source = { start: { line: line, column: column }, input: this.input };
	            node.raws.before = this.spaces;
	            this.spaces = '';
	            if (node.type !== 'comment') this.semicolon = false;
	        }
	    }, {
	        key: 'raw',
	        value: function raw(node, prop, tokens) {
	            var token = void 0,
	                type = void 0;
	            var length = tokens.length;
	            var value = '';
	            var clean = true;
	            for (var i = 0; i < length; i += 1) {
	                token = tokens[i];
	                type = token[0];
	                if (type === 'comment' || type === 'space' && i === length - 1) {
	                    clean = false;
	                } else {
	                    value += token[1];
	                }
	            }
	            if (!clean) {
	                var raw = tokens.reduce(function (all, i) {
	                    return all + i[1];
	                }, '');
	                node.raws[prop] = { value: value, raw: raw };
	            }
	            node[prop] = value;
	        }
	    }, {
	        key: 'spacesFromEnd',
	        value: function spacesFromEnd(tokens) {
	            var lastTokenType = void 0;
	            var spaces = '';
	            while (tokens.length) {
	                lastTokenType = tokens[tokens.length - 1][0];
	                if (lastTokenType !== 'space' && lastTokenType !== 'comment') break;
	                spaces = tokens.pop()[1] + spaces;
	            }
	            return spaces;
	        }
	    }, {
	        key: 'spacesFromStart',
	        value: function spacesFromStart(tokens) {
	            var next = void 0;
	            var spaces = '';
	            while (tokens.length) {
	                next = tokens[0][0];
	                if (next !== 'space' && next !== 'comment') break;
	                spaces += tokens.shift()[1];
	            }
	            return spaces;
	        }
	    }, {
	        key: 'stringFrom',
	        value: function stringFrom(tokens, from) {
	            var result = '';
	            for (var i = from; i < tokens.length; i++) {
	                result += tokens[i][1];
	            }
	            tokens.splice(from, tokens.length - from);
	            return result;
	        }
	    }, {
	        key: 'colon',
	        value: function colon(tokens) {
	            var brackets = 0;
	            var token = void 0,
	                type = void 0,
	                prev = void 0;
	            for (var i = 0; i < tokens.length; i++) {
	                token = tokens[i];
	                type = token[0];

	                if (type === '(') {
	                    brackets += 1;
	                } else if (type === ')') {
	                    brackets -= 1;
	                } else if (brackets === 0 && type === ':') {
	                    if (!prev) {
	                        this.doubleColon(token);
	                    } else if (prev[0] === 'word' && prev[1] === 'progid') {
	                        continue;
	                    } else {
	                        return i;
	                    }
	                }

	                prev = token;
	            }
	            return false;
	        }

	        // Errors

	    }, {
	        key: 'unclosedBracket',
	        value: function unclosedBracket(bracket) {
	            throw this.input.error('Unclosed bracket', bracket[2], bracket[3]);
	        }
	    }, {
	        key: 'unknownWord',
	        value: function unknownWord(start) {
	            var token = this.tokens[start];
	            throw this.input.error('Unknown word', token[2], token[3]);
	        }
	    }, {
	        key: 'unexpectedClose',
	        value: function unexpectedClose(token) {
	            throw this.input.error('Unexpected }', token[2], token[3]);
	        }
	    }, {
	        key: 'unclosedBlock',
	        value: function unclosedBlock() {
	            var pos = this.current.source.start;
	            throw this.input.error('Unclosed block', pos.line, pos.column);
	        }
	    }, {
	        key: 'doubleColon',
	        value: function doubleColon(token) {
	            throw this.input.error('Double colon', token[2], token[3]);
	        }
	    }, {
	        key: 'unnamedAtrule',
	        value: function unnamedAtrule(node, token) {
	            throw this.input.error('At-rule without name', token[2], token[3]);
	        }
	    }, {
	        key: 'precheckMissedSemicolon',
	        value: function precheckMissedSemicolon(tokens) {
	            // Hook for Safe Parser
	            tokens;
	        }
	    }, {
	        key: 'checkMissedSemicolon',
	        value: function checkMissedSemicolon(tokens) {
	            var colon = this.colon(tokens);
	            if (colon === false) return;

	            var founded = 0;
	            var token = void 0;
	            for (var j = colon - 1; j >= 0; j--) {
	                token = tokens[j];
	                if (token[0] !== 'space') {
	                    founded += 1;
	                    if (founded === 2) break;
	                }
	            }
	            throw this.input.error('Missed semicolon', token[2], token[3]);
	        }
	    }]);

	    return Parser;
	}();

	exports.default = Parser;
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _warnOnce = __webpack_require__(56);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	var _node = __webpack_require__(60);

	var _node2 = _interopRequireDefault(_node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Represents a CSS declaration.
	 *
	 * @extends Node
	 *
	 * @example
	 * const root = postcss.parse('a { color: black }');
	 * const decl = root.first.first;
	 * decl.type       //=> 'decl'
	 * decl.toString() //=> ' color: black'
	 */
	var Declaration = function (_Node) {
	    _inherits(Declaration, _Node);

	    function Declaration(defaults) {
	        _classCallCheck(this, Declaration);

	        var _this = _possibleConstructorReturn(this, (Declaration.__proto__ || Object.getPrototypeOf(Declaration)).call(this, defaults));

	        _this.type = 'decl';
	        return _this;
	    }

	    _createClass(Declaration, [{
	        key: '_value',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#_value was deprecated. Use Node#raws.value');
	            return this.raws.value;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#_value was deprecated. Use Node#raws.value');
	            this.raws.value = val;
	        }
	    }, {
	        key: '_important',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#_important was deprecated. Use Node#raws.important');
	            return this.raws.important;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#_important was deprecated. Use Node#raws.important');
	            this.raws.important = val;
	        }

	        /**
	         * @memberof Declaration#
	         * @member {string} prop - the declaration’s property name
	         *
	         * @example
	         * const root = postcss.parse('a { color: black }');
	         * const decl = root.first.first;
	         * decl.prop //=> 'color'
	         */

	        /**
	         * @memberof Declaration#
	         * @member {string} value - the declaration’s value
	         *
	         * @example
	         * const root = postcss.parse('a { color: black }');
	         * const decl = root.first.first;
	         * decl.value //=> 'black'
	         */

	        /**
	         * @memberof Declaration#
	         * @member {boolean} important - `true` if the declaration
	         *                               has an !important annotation.
	         *
	         * @example
	         * const root = postcss.parse('a { color: black !important; color: red }');
	         * root.first.first.important //=> true
	         * root.first.last.important  //=> undefined
	         */

	        /**
	         * @memberof Declaration#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node. It also stores `*`
	         *   and `_` symbols before the declaration (IE hack).
	         * * `between`: the symbols between the property and value
	         *   for declarations, selector and `{` for rules, or last parameter
	         *   and `{` for at-rules.
	         * * `important`: the content of the important statement,
	         *   if it is not just `!important`.
	         *
	         * PostCSS cleans declaration from comments and extra spaces,
	         * but it stores origin content in raws properties.
	         * As such, if you don’t change a declaration’s value,
	         * PostCSS will use the raw value with comments.
	         *
	         * @example
	         * const root = postcss.parse('a {\n  color:black\n}')
	         * root.first.first.raws //=> { before: '\n  ', between: ':' }
	         */

	    }]);

	    return Declaration;
	}(_node2.default);

	exports.default = Declaration;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _container = __webpack_require__(66);

	var _container2 = _interopRequireDefault(_container);

	var _warnOnce = __webpack_require__(56);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Represents an at-rule.
	 *
	 * If it’s followed in the CSS by a {} block, this node will have
	 * a nodes property representing its children.
	 *
	 * @extends Container
	 *
	 * @example
	 * const root = postcss.parse('@charset "UTF-8"; @media print {}');
	 *
	 * const charset = root.first;
	 * charset.type  //=> 'atrule'
	 * charset.nodes //=> undefined
	 *
	 * const media = root.last;
	 * media.nodes   //=> []
	 */
	var AtRule = function (_Container) {
	    _inherits(AtRule, _Container);

	    function AtRule(defaults) {
	        _classCallCheck(this, AtRule);

	        var _this = _possibleConstructorReturn(this, (AtRule.__proto__ || Object.getPrototypeOf(AtRule)).call(this, defaults));

	        _this.type = 'atrule';
	        return _this;
	    }

	    _createClass(AtRule, [{
	        key: 'append',
	        value: function append() {
	            var _get2;

	            if (!this.nodes) this.nodes = [];

	            for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
	                children[_key] = arguments[_key];
	            }

	            return (_get2 = _get(AtRule.prototype.__proto__ || Object.getPrototypeOf(AtRule.prototype), 'append', this)).call.apply(_get2, [this].concat(children));
	        }
	    }, {
	        key: 'prepend',
	        value: function prepend() {
	            var _get3;

	            if (!this.nodes) this.nodes = [];

	            for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                children[_key2] = arguments[_key2];
	            }

	            return (_get3 = _get(AtRule.prototype.__proto__ || Object.getPrototypeOf(AtRule.prototype), 'prepend', this)).call.apply(_get3, [this].concat(children));
	        }
	    }, {
	        key: 'afterName',
	        get: function get() {
	            (0, _warnOnce2.default)('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
	            return this.raws.afterName;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
	            this.raws.afterName = val;
	        }
	    }, {
	        key: '_params',
	        get: function get() {
	            (0, _warnOnce2.default)('AtRule#_params was deprecated. Use AtRule#raws.params');
	            return this.raws.params;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('AtRule#_params was deprecated. Use AtRule#raws.params');
	            this.raws.params = val;
	        }

	        /**
	         * @memberof AtRule#
	         * @member {string} name - the at-rule’s name immediately follows the `@`
	         *
	         * @example
	         * const root  = postcss.parse('@media print {}');
	         * media.name //=> 'media'
	         * const media = root.first;
	         */

	        /**
	         * @memberof AtRule#
	         * @member {string} params - the at-rule’s parameters, the values
	         *                           that follow the at-rule’s name but precede
	         *                           any {} block
	         *
	         * @example
	         * const root  = postcss.parse('@media print, screen {}');
	         * const media = root.first;
	         * media.params //=> 'print, screen'
	         */

	        /**
	         * @memberof AtRule#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node. It also stores `*`
	         *   and `_` symbols before the declaration (IE hack).
	         * * `after`: the space symbols after the last child of the node
	         *   to the end of the node.
	         * * `between`: the symbols between the property and value
	         *   for declarations, selector and `{` for rules, or last parameter
	         *   and `{` for at-rules.
	         * * `semicolon`: contains true if the last child has
	         *   an (optional) semicolon.
	         * * `afterName`: the space between the at-rule name and its parameters.
	         *
	         * PostCSS cleans at-rule parameters from comments and extra spaces,
	         * but it stores origin content in raws properties.
	         * As such, if you don’t change a declaration’s value,
	         * PostCSS will use the raw value with comments.
	         *
	         * @example
	         * const root = postcss.parse('  @media\nprint {\n}')
	         * root.first.first.raws //=> { before: '  ',
	         *                       //     between: ' ',
	         *                       //     afterName: '\n',
	         *                       //     after: '\n' }
	         */

	    }]);

	    return AtRule;
	}(_container2.default);

	exports.default = AtRule;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _declaration = __webpack_require__(64);

	var _declaration2 = _interopRequireDefault(_declaration);

	var _warnOnce = __webpack_require__(56);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	var _comment = __webpack_require__(59);

	var _comment2 = _interopRequireDefault(_comment);

	var _node = __webpack_require__(60);

	var _node2 = _interopRequireDefault(_node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function cleanSource(nodes) {
	    return nodes.map(function (i) {
	        if (i.nodes) i.nodes = cleanSource(i.nodes);
	        delete i.source;
	        return i;
	    });
	}

	/**
	 * @callback childCondition
	 * @param {Node} node    - container child
	 * @param {number} index - child index
	 * @param {Node[]} nodes - all container children
	 * @return {boolean}
	 */

	/**
	 * @callback childIterator
	 * @param {Node} node    - container child
	 * @param {number} index - child index
	 * @return {false|undefined} returning `false` will break iteration
	 */

	/**
	 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
	 * inherit some common methods to help work with their children.
	 *
	 * Note that all containers can store any content. If you write a rule inside
	 * a rule, PostCSS will parse it.
	 *
	 * @extends Node
	 * @abstract
	 */

	var Container = function (_Node) {
	    _inherits(Container, _Node);

	    function Container() {
	        _classCallCheck(this, Container);

	        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	    }

	    _createClass(Container, [{
	        key: 'push',
	        value: function push(child) {
	            child.parent = this;
	            this.nodes.push(child);
	            return this;
	        }

	        /**
	         * Iterates through the container’s immediate children,
	         * calling `callback` for each child.
	         *
	         * Returning `false` in the callback will break iteration.
	         *
	         * This method only iterates through the container’s immediate children.
	         * If you need to recursively iterate through all the container’s descendant
	         * nodes, use {@link Container#walk}.
	         *
	         * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
	         * if you are mutating the array of child nodes during iteration.
	         * PostCSS will adjust the current index to match the mutations.
	         *
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * const root = postcss.parse('a { color: black; z-index: 1 }');
	         * const rule = root.first;
	         *
	         * for ( let decl of rule.nodes ) {
	         *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
	         *     // Cycle will be infinite, because cloneBefore moves the current node
	         *     // to the next index
	         * }
	         *
	         * rule.each(decl => {
	         *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
	         *     // Will be executed only for color and z-index
	         * });
	         */

	    }, {
	        key: 'each',
	        value: function each(callback) {
	            if (!this.lastEach) this.lastEach = 0;
	            if (!this.indexes) this.indexes = {};

	            this.lastEach += 1;
	            var id = this.lastEach;
	            this.indexes[id] = 0;

	            if (!this.nodes) return undefined;

	            var index = void 0,
	                result = void 0;
	            while (this.indexes[id] < this.nodes.length) {
	                index = this.indexes[id];
	                result = callback(this.nodes[index], index);
	                if (result === false) break;

	                this.indexes[id] += 1;
	            }

	            delete this.indexes[id];

	            return result;
	        }

	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each node.
	         *
	         * Like container.each(), this method is safe to use
	         * if you are mutating arrays during iteration.
	         *
	         * If you only need to iterate through the container’s immediate children,
	         * use {@link Container#each}.
	         *
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * root.walk(node => {
	         *   // Traverses all descendant nodes.
	         * });
	         */

	    }, {
	        key: 'walk',
	        value: function walk(callback) {
	            return this.each(function (child, i) {
	                var result = callback(child, i);
	                if (result !== false && child.walk) {
	                    result = child.walk(callback);
	                }
	                return result;
	            });
	        }

	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each declaration node.
	         *
	         * If you pass a filter, iteration will only happen over declarations
	         * with matching properties.
	         *
	         * Like {@link Container#each}, this method is safe
	         * to use if you are mutating arrays during iteration.
	         *
	         * @param {string|RegExp} [prop]   - string or regular expression
	         *                                   to filter declarations by property name
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * root.walkDecls(decl => {
	         *   checkPropertySupport(decl.prop);
	         * });
	         *
	         * root.walkDecls('border-radius', decl => {
	         *   decl.remove();
	         * });
	         *
	         * root.walkDecls(/^background/, decl => {
	         *   decl.value = takeFirstColorFromGradient(decl.value);
	         * });
	         */

	    }, {
	        key: 'walkDecls',
	        value: function walkDecls(prop, callback) {
	            if (!callback) {
	                callback = prop;
	                return this.walk(function (child, i) {
	                    if (child.type === 'decl') {
	                        return callback(child, i);
	                    }
	                });
	            } else if (prop instanceof RegExp) {
	                return this.walk(function (child, i) {
	                    if (child.type === 'decl' && prop.test(child.prop)) {
	                        return callback(child, i);
	                    }
	                });
	            } else {
	                return this.walk(function (child, i) {
	                    if (child.type === 'decl' && child.prop === prop) {
	                        return callback(child, i);
	                    }
	                });
	            }
	        }

	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each rule node.
	         *
	         * If you pass a filter, iteration will only happen over rules
	         * with matching selectors.
	         *
	         * Like {@link Container#each}, this method is safe
	         * to use if you are mutating arrays during iteration.
	         *
	         * @param {string|RegExp} [selector] - string or regular expression
	         *                                     to filter rules by selector
	         * @param {childIterator} callback   - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * const selectors = [];
	         * root.walkRules(rule => {
	         *   selectors.push(rule.selector);
	         * });
	         * console.log(`Your CSS uses ${selectors.length} selectors`);
	         */

	    }, {
	        key: 'walkRules',
	        value: function walkRules(selector, callback) {
	            if (!callback) {
	                callback = selector;

	                return this.walk(function (child, i) {
	                    if (child.type === 'rule') {
	                        return callback(child, i);
	                    }
	                });
	            } else if (selector instanceof RegExp) {
	                return this.walk(function (child, i) {
	                    if (child.type === 'rule' && selector.test(child.selector)) {
	                        return callback(child, i);
	                    }
	                });
	            } else {
	                return this.walk(function (child, i) {
	                    if (child.type === 'rule' && child.selector === selector) {
	                        return callback(child, i);
	                    }
	                });
	            }
	        }

	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each at-rule node.
	         *
	         * If you pass a filter, iteration will only happen over at-rules
	         * that have matching names.
	         *
	         * Like {@link Container#each}, this method is safe
	         * to use if you are mutating arrays during iteration.
	         *
	         * @param {string|RegExp} [name]   - string or regular expression
	         *                                   to filter at-rules by name
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * root.walkAtRules(rule => {
	         *   if ( isOld(rule.name) ) rule.remove();
	         * });
	         *
	         * let first = false;
	         * root.walkAtRules('charset', rule => {
	         *   if ( !first ) {
	         *     first = true;
	         *   } else {
	         *     rule.remove();
	         *   }
	         * });
	         */

	    }, {
	        key: 'walkAtRules',
	        value: function walkAtRules(name, callback) {
	            if (!callback) {
	                callback = name;
	                return this.walk(function (child, i) {
	                    if (child.type === 'atrule') {
	                        return callback(child, i);
	                    }
	                });
	            } else if (name instanceof RegExp) {
	                return this.walk(function (child, i) {
	                    if (child.type === 'atrule' && name.test(child.name)) {
	                        return callback(child, i);
	                    }
	                });
	            } else {
	                return this.walk(function (child, i) {
	                    if (child.type === 'atrule' && child.name === name) {
	                        return callback(child, i);
	                    }
	                });
	            }
	        }

	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each comment node.
	         *
	         * Like {@link Container#each}, this method is safe
	         * to use if you are mutating arrays during iteration.
	         *
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * root.walkComments(comment => {
	         *   comment.remove();
	         * });
	         */

	    }, {
	        key: 'walkComments',
	        value: function walkComments(callback) {
	            return this.walk(function (child, i) {
	                if (child.type === 'comment') {
	                    return callback(child, i);
	                }
	            });
	        }

	        /**
	         * Inserts new nodes to the start of the container.
	         *
	         * @param {...(Node|object|string|Node[])} children - new nodes
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
	         * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
	         * rule.append(decl1, decl2);
	         *
	         * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
	         * root.append({ selector: 'a' });                       // rule
	         * rule.append({ prop: 'color', value: 'black' });       // declaration
	         * rule.append({ text: 'Comment' })                      // comment
	         *
	         * root.append('a {}');
	         * root.first.append('color: black; z-index: 1');
	         */

	    }, {
	        key: 'append',
	        value: function append() {
	            for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
	                children[_key] = arguments[_key];
	            }

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var child = _step.value;

	                    var nodes = this.normalize(child, this.last);
	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        for (var _iterator2 = nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var node = _step2.value;
	                            this.nodes.push(node);
	                        }
	                    } catch (err) {
	                        _didIteratorError2 = true;
	                        _iteratorError2 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                _iterator2.return();
	                            }
	                        } finally {
	                            if (_didIteratorError2) {
	                                throw _iteratorError2;
	                            }
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return this;
	        }

	        /**
	         * Inserts new nodes to the end of the container.
	         *
	         * @param {...(Node|object|string|Node[])} children - new nodes
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
	         * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
	         * rule.prepend(decl1, decl2);
	         *
	         * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
	         * root.append({ selector: 'a' });                       // rule
	         * rule.append({ prop: 'color', value: 'black' });       // declaration
	         * rule.append({ text: 'Comment' })                      // comment
	         *
	         * root.append('a {}');
	         * root.first.append('color: black; z-index: 1');
	         */

	    }, {
	        key: 'prepend',
	        value: function prepend() {
	            for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                children[_key2] = arguments[_key2];
	            }

	            children = children.reverse();
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var child = _step3.value;

	                    var nodes = this.normalize(child, this.first, 'prepend').reverse();
	                    var _iteratorNormalCompletion4 = true;
	                    var _didIteratorError4 = false;
	                    var _iteratorError4 = undefined;

	                    try {
	                        for (var _iterator4 = nodes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                            var node = _step4.value;
	                            this.nodes.unshift(node);
	                        }
	                    } catch (err) {
	                        _didIteratorError4 = true;
	                        _iteratorError4 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                                _iterator4.return();
	                            }
	                        } finally {
	                            if (_didIteratorError4) {
	                                throw _iteratorError4;
	                            }
	                        }
	                    }

	                    for (var id in this.indexes) {
	                        this.indexes[id] = this.indexes[id] + nodes.length;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            return this;
	        }
	    }, {
	        key: 'cleanRaws',
	        value: function cleanRaws(keepBetween) {
	            _get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'cleanRaws', this).call(this, keepBetween);
	            if (this.nodes) {
	                var _iteratorNormalCompletion5 = true;
	                var _didIteratorError5 = false;
	                var _iteratorError5 = undefined;

	                try {
	                    for (var _iterator5 = this.nodes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                        var node = _step5.value;
	                        node.cleanRaws(keepBetween);
	                    }
	                } catch (err) {
	                    _didIteratorError5 = true;
	                    _iteratorError5 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                            _iterator5.return();
	                        }
	                    } finally {
	                        if (_didIteratorError5) {
	                            throw _iteratorError5;
	                        }
	                    }
	                }
	            }
	        }

	        /**
	         * Insert new node before old node within the container.
	         *
	         * @param {Node|number} exist             - child or child’s index.
	         * @param {Node|object|string|Node[]} add - new node
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }));
	         */

	    }, {
	        key: 'insertBefore',
	        value: function insertBefore(exist, add) {
	            exist = this.index(exist);

	            var type = exist === 0 ? 'prepend' : false;
	            var nodes = this.normalize(add, this.nodes[exist], type).reverse();
	            var _iteratorNormalCompletion6 = true;
	            var _didIteratorError6 = false;
	            var _iteratorError6 = undefined;

	            try {
	                for (var _iterator6 = nodes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    var node = _step6.value;
	                    this.nodes.splice(exist, 0, node);
	                }
	            } catch (err) {
	                _didIteratorError6 = true;
	                _iteratorError6 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                        _iterator6.return();
	                    }
	                } finally {
	                    if (_didIteratorError6) {
	                        throw _iteratorError6;
	                    }
	                }
	            }

	            var index = void 0;
	            for (var id in this.indexes) {
	                index = this.indexes[id];
	                if (exist <= index) {
	                    this.indexes[id] = index + nodes.length;
	                }
	            }

	            return this;
	        }

	        /**
	         * Insert new node after old node within the container.
	         *
	         * @param {Node|number} exist             - child or child’s index
	         * @param {Node|object|string|Node[]} add - new node
	         *
	         * @return {Node} this node for methods chain
	         */

	    }, {
	        key: 'insertAfter',
	        value: function insertAfter(exist, add) {
	            exist = this.index(exist);

	            var nodes = this.normalize(add, this.nodes[exist]).reverse();
	            var _iteratorNormalCompletion7 = true;
	            var _didIteratorError7 = false;
	            var _iteratorError7 = undefined;

	            try {
	                for (var _iterator7 = nodes[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                    var node = _step7.value;
	                    this.nodes.splice(exist + 1, 0, node);
	                }
	            } catch (err) {
	                _didIteratorError7 = true;
	                _iteratorError7 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                        _iterator7.return();
	                    }
	                } finally {
	                    if (_didIteratorError7) {
	                        throw _iteratorError7;
	                    }
	                }
	            }

	            var index = void 0;
	            for (var id in this.indexes) {
	                index = this.indexes[id];
	                if (exist < index) {
	                    this.indexes[id] = index + nodes.length;
	                }
	            }

	            return this;
	        }
	    }, {
	        key: 'remove',
	        value: function remove(child) {
	            if (typeof child !== 'undefined') {
	                (0, _warnOnce2.default)('Container#remove is deprecated. ' + 'Use Container#removeChild');
	                this.removeChild(child);
	            } else {
	                _get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'remove', this).call(this);
	            }
	            return this;
	        }

	        /**
	         * Removes node from the container and cleans the parent properties
	         * from the node and its children.
	         *
	         * @param {Node|number} child - child or child’s index
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * rule.nodes.length  //=> 5
	         * rule.removeChild(decl);
	         * rule.nodes.length  //=> 4
	         * decl.parent        //=> undefined
	         */

	    }, {
	        key: 'removeChild',
	        value: function removeChild(child) {
	            child = this.index(child);
	            this.nodes[child].parent = undefined;
	            this.nodes.splice(child, 1);

	            var index = void 0;
	            for (var id in this.indexes) {
	                index = this.indexes[id];
	                if (index >= child) {
	                    this.indexes[id] = index - 1;
	                }
	            }

	            return this;
	        }

	        /**
	         * Removes all children from the container
	         * and cleans their parent properties.
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * rule.removeAll();
	         * rule.nodes.length //=> 0
	         */

	    }, {
	        key: 'removeAll',
	        value: function removeAll() {
	            var _iteratorNormalCompletion8 = true;
	            var _didIteratorError8 = false;
	            var _iteratorError8 = undefined;

	            try {
	                for (var _iterator8 = this.nodes[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                    var node = _step8.value;
	                    node.parent = undefined;
	                }
	            } catch (err) {
	                _didIteratorError8 = true;
	                _iteratorError8 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
	                        _iterator8.return();
	                    }
	                } finally {
	                    if (_didIteratorError8) {
	                        throw _iteratorError8;
	                    }
	                }
	            }

	            this.nodes = [];
	            return this;
	        }

	        /**
	         * Passes all declaration values within the container that match pattern
	         * through callback, replacing those values with the returned result
	         * of callback.
	         *
	         * This method is useful if you are using a custom unit or function
	         * and need to iterate through all values.
	         *
	         * @param {string|RegExp} pattern      - replace pattern
	         * @param {object} opts                - options to speed up the search
	         * @param {string|string[]} opts.props - an array of property names
	         * @param {string} opts.fast           - string that’s used
	         *                                       to narrow down values and speed up
	                                                 the regexp search
	         * @param {function|string} callback   - string to replace pattern
	         *                                       or callback that returns a new
	         *                                       value.
	         *                                       The callback will receive
	         *                                       the same arguments as those
	         *                                       passed to a function parameter
	         *                                       of `String#replace`.
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
	         *   return 15 * parseInt(string) + 'px';
	         * });
	         */

	    }, {
	        key: 'replaceValues',
	        value: function replaceValues(pattern, opts, callback) {
	            if (!callback) {
	                callback = opts;
	                opts = {};
	            }

	            this.walkDecls(function (decl) {
	                if (opts.props && opts.props.indexOf(decl.prop) === -1) return;
	                if (opts.fast && decl.value.indexOf(opts.fast) === -1) return;

	                decl.value = decl.value.replace(pattern, callback);
	            });

	            return this;
	        }

	        /**
	         * Returns `true` if callback returns `true`
	         * for all of the container’s children.
	         *
	         * @param {childCondition} condition - iterator returns true or false.
	         *
	         * @return {boolean} is every child pass condition
	         *
	         * @example
	         * const noPrefixes = rule.every(i => i.prop[0] !== '-');
	         */

	    }, {
	        key: 'every',
	        value: function every(condition) {
	            return this.nodes.every(condition);
	        }

	        /**
	         * Returns `true` if callback returns `true` for (at least) one
	         * of the container’s children.
	         *
	         * @param {childCondition} condition - iterator returns true or false.
	         *
	         * @return {boolean} is some child pass condition
	         *
	         * @example
	         * const hasPrefix = rule.some(i => i.prop[0] === '-');
	         */

	    }, {
	        key: 'some',
	        value: function some(condition) {
	            return this.nodes.some(condition);
	        }

	        /**
	         * Returns a `child`’s index within the {@link Container#nodes} array.
	         *
	         * @param {Node} child - child of the current container.
	         *
	         * @return {number} child index
	         *
	         * @example
	         * rule.index( rule.nodes[2] ) //=> 2
	         */

	    }, {
	        key: 'index',
	        value: function index(child) {
	            if (typeof child === 'number') {
	                return child;
	            } else {
	                return this.nodes.indexOf(child);
	            }
	        }

	        /**
	         * The container’s first child.
	         *
	         * @type {Node}
	         *
	         * @example
	         * rule.first == rules.nodes[0];
	         */

	    }, {
	        key: 'normalize',
	        value: function normalize(nodes, sample) {
	            var _this2 = this;

	            if (typeof nodes === 'string') {
	                var parse = __webpack_require__(67);
	                nodes = cleanSource(parse(nodes).nodes);
	            } else if (!Array.isArray(nodes)) {
	                if (nodes.type === 'root') {
	                    nodes = nodes.nodes;
	                } else if (nodes.type) {
	                    nodes = [nodes];
	                } else if (nodes.prop) {
	                    if (typeof nodes.value === 'undefined') {
	                        throw new Error('Value field is missed in node creation');
	                    } else if (typeof nodes.value !== 'string') {
	                        nodes.value = String(nodes.value);
	                    }
	                    nodes = [new _declaration2.default(nodes)];
	                } else if (nodes.selector) {
	                    var Rule = __webpack_require__(68);
	                    nodes = [new Rule(nodes)];
	                } else if (nodes.name) {
	                    var AtRule = __webpack_require__(65);
	                    nodes = [new AtRule(nodes)];
	                } else if (nodes.text) {
	                    nodes = [new _comment2.default(nodes)];
	                } else {
	                    throw new Error('Unknown node type in node creation');
	                }
	            }

	            var processed = nodes.map(function (i) {
	                if (typeof i.raws === 'undefined') i = _this2.rebuild(i);

	                if (i.parent) i = i.clone();
	                if (typeof i.raws.before === 'undefined') {
	                    if (sample && typeof sample.raws.before !== 'undefined') {
	                        i.raws.before = sample.raws.before.replace(/[^\s]/g, '');
	                    }
	                }
	                i.parent = _this2;
	                return i;
	            });

	            return processed;
	        }
	    }, {
	        key: 'rebuild',
	        value: function rebuild(node, parent) {
	            var _this3 = this;

	            var fix = void 0;
	            if (node.type === 'root') {
	                var Root = __webpack_require__(70);
	                fix = new Root();
	            } else if (node.type === 'atrule') {
	                var AtRule = __webpack_require__(65);
	                fix = new AtRule();
	            } else if (node.type === 'rule') {
	                var Rule = __webpack_require__(68);
	                fix = new Rule();
	            } else if (node.type === 'decl') {
	                fix = new _declaration2.default();
	            } else if (node.type === 'comment') {
	                fix = new _comment2.default();
	            }

	            for (var i in node) {
	                if (i === 'nodes') {
	                    fix.nodes = node.nodes.map(function (j) {
	                        return _this3.rebuild(j, fix);
	                    });
	                } else if (i === 'parent' && parent) {
	                    fix.parent = parent;
	                } else if (node.hasOwnProperty(i)) {
	                    fix[i] = node[i];
	                }
	            }

	            return fix;
	        }
	    }, {
	        key: 'eachInside',
	        value: function eachInside(callback) {
	            (0, _warnOnce2.default)('Container#eachInside is deprecated. ' + 'Use Container#walk instead.');
	            return this.walk(callback);
	        }
	    }, {
	        key: 'eachDecl',
	        value: function eachDecl(prop, callback) {
	            (0, _warnOnce2.default)('Container#eachDecl is deprecated. ' + 'Use Container#walkDecls instead.');
	            return this.walkDecls(prop, callback);
	        }
	    }, {
	        key: 'eachRule',
	        value: function eachRule(selector, callback) {
	            (0, _warnOnce2.default)('Container#eachRule is deprecated. ' + 'Use Container#walkRules instead.');
	            return this.walkRules(selector, callback);
	        }
	    }, {
	        key: 'eachAtRule',
	        value: function eachAtRule(name, callback) {
	            (0, _warnOnce2.default)('Container#eachAtRule is deprecated. ' + 'Use Container#walkAtRules instead.');
	            return this.walkAtRules(name, callback);
	        }
	    }, {
	        key: 'eachComment',
	        value: function eachComment(callback) {
	            (0, _warnOnce2.default)('Container#eachComment is deprecated. ' + 'Use Container#walkComments instead.');
	            return this.walkComments(callback);
	        }
	    }, {
	        key: 'first',
	        get: function get() {
	            if (!this.nodes) return undefined;
	            return this.nodes[0];
	        }

	        /**
	         * The container’s last child.
	         *
	         * @type {Node}
	         *
	         * @example
	         * rule.last == rule.nodes[rule.nodes.length - 1];
	         */

	    }, {
	        key: 'last',
	        get: function get() {
	            if (!this.nodes) return undefined;
	            return this.nodes[this.nodes.length - 1];
	        }
	    }, {
	        key: 'semicolon',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#semicolon is deprecated. Use Node#raws.semicolon');
	            return this.raws.semicolon;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#semicolon is deprecated. Use Node#raws.semicolon');
	            this.raws.semicolon = val;
	        }
	    }, {
	        key: 'after',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#after is deprecated. Use Node#raws.after');
	            return this.raws.after;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#after is deprecated. Use Node#raws.after');
	            this.raws.after = val;
	        }

	        /**
	         * @memberof Container#
	         * @member {Node[]} nodes - an array containing the container’s children
	         *
	         * @example
	         * const root = postcss.parse('a { color: black }');
	         * root.nodes.length           //=> 1
	         * root.nodes[0].selector      //=> 'a'
	         * root.nodes[0].nodes[0].prop //=> 'color'
	         */

	    }]);

	    return Container;
	}(_node2.default);

	exports.default = Container;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parse;

	var _parser = __webpack_require__(63);

	var _parser2 = _interopRequireDefault(_parser);

	var _input = __webpack_require__(51);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function parse(css, opts) {
	    if (opts && opts.safe) {
	        throw new Error('Option safe was removed. ' + 'Use parser: require("postcss-safe-parser")');
	    }

	    var input = new _input2.default(css, opts);

	    var parser = new _parser2.default(input);
	    try {
	        parser.tokenize();
	        parser.loop();
	    } catch (e) {
	        if (e.name === 'CssSyntaxError' && opts && opts.from) {
	            if (/\.scss$/i.test(opts.from)) {
	                e.message += '\nYou tried to parse SCSS with ' + 'the standard CSS parser; ' + 'try again with the postcss-scss parser';
	            } else if (/\.less$/i.test(opts.from)) {
	                e.message += '\nYou tried to parse Less with ' + 'the standard CSS parser; ' + 'try again with the postcss-less parser';
	            }
	        }
	        throw e;
	    }

	    return parser.root;
	}
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _container = __webpack_require__(66);

	var _container2 = _interopRequireDefault(_container);

	var _warnOnce = __webpack_require__(56);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	var _list = __webpack_require__(69);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Represents a CSS rule: a selector followed by a declaration block.
	 *
	 * @extends Container
	 *
	 * @example
	 * const root = postcss.parse('a{}');
	 * const rule = root.first;
	 * rule.type       //=> 'rule'
	 * rule.toString() //=> 'a{}'
	 */
	var Rule = function (_Container) {
	    _inherits(Rule, _Container);

	    function Rule(defaults) {
	        _classCallCheck(this, Rule);

	        var _this = _possibleConstructorReturn(this, (Rule.__proto__ || Object.getPrototypeOf(Rule)).call(this, defaults));

	        _this.type = 'rule';
	        if (!_this.nodes) _this.nodes = [];
	        return _this;
	    }

	    /**
	     * An array containing the rule’s individual selectors.
	     * Groups of selectors are split at commas.
	     *
	     * @type {string[]}
	     *
	     * @example
	     * const root = postcss.parse('a, b { }');
	     * const rule = root.first;
	     *
	     * rule.selector  //=> 'a, b'
	     * rule.selectors //=> ['a', 'b']
	     *
	     * rule.selectors = ['a', 'strong'];
	     * rule.selector //=> 'a, strong'
	     */


	    _createClass(Rule, [{
	        key: 'selectors',
	        get: function get() {
	            return _list2.default.comma(this.selector);
	        },
	        set: function set(values) {
	            var match = this.selector ? this.selector.match(/,\s*/) : null;
	            var sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
	            this.selector = values.join(sep);
	        }
	    }, {
	        key: '_selector',
	        get: function get() {
	            (0, _warnOnce2.default)('Rule#_selector is deprecated. Use Rule#raws.selector');
	            return this.raws.selector;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Rule#_selector is deprecated. Use Rule#raws.selector');
	            this.raws.selector = val;
	        }

	        /**
	         * @memberof Rule#
	         * @member {string} selector - the rule’s full selector represented
	         *                             as a string
	         *
	         * @example
	         * const root = postcss.parse('a, b { }');
	         * const rule = root.first;
	         * rule.selector //=> 'a, b'
	         */

	        /**
	         * @memberof Rule#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node. It also stores `*`
	         *   and `_` symbols before the declaration (IE hack).
	         * * `after`: the space symbols after the last child of the node
	         *   to the end of the node.
	         * * `between`: the symbols between the property and value
	         *   for declarations, selector and `{` for rules, or last parameter
	         *   and `{` for at-rules.
	         * * `semicolon`: contains true if the last child has
	         *   an (optional) semicolon.
	         *
	         * PostCSS cleans selectors from comments and extra spaces,
	         * but it stores origin content in raws properties.
	         * As such, if you don’t change a declaration’s value,
	         * PostCSS will use the raw value with comments.
	         *
	         * @example
	         * const root = postcss.parse('a {\n  color:black\n}')
	         * root.first.first.raws //=> { before: '', between: ' ', after: '\n' }
	         */

	    }]);

	    return Rule;
	}(_container2.default);

	exports.default = Rule;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Contains helpers for safely splitting lists of CSS values,
	 * preserving parentheses and quotes.
	 *
	 * @example
	 * const list = postcss.list;
	 *
	 * @namespace list
	 */
	var list = {
	    split: function split(string, separators, last) {
	        var array = [];
	        var current = '';
	        var split = false;

	        var func = 0;
	        var quote = false;
	        var escape = false;

	        for (var i = 0; i < string.length; i++) {
	            var letter = string[i];

	            if (quote) {
	                if (escape) {
	                    escape = false;
	                } else if (letter === '\\') {
	                    escape = true;
	                } else if (letter === quote) {
	                    quote = false;
	                }
	            } else if (letter === '"' || letter === '\'') {
	                quote = letter;
	            } else if (letter === '(') {
	                func += 1;
	            } else if (letter === ')') {
	                if (func > 0) func -= 1;
	            } else if (func === 0) {
	                if (separators.indexOf(letter) !== -1) split = true;
	            }

	            if (split) {
	                if (current !== '') array.push(current.trim());
	                current = '';
	                split = false;
	            } else {
	                current += letter;
	            }
	        }

	        if (last || current !== '') array.push(current.trim());
	        return array;
	    },


	    /**
	     * Safely splits space-separated values (such as those for `background`,
	     * `border-radius`, and other shorthand properties).
	     *
	     * @param {string} string - space-separated values
	     *
	     * @return {string[]} splitted values
	     *
	     * @example
	     * postcss.list.space('1px calc(10% + 1px)') //=> ['1px', 'calc(10% + 1px)']
	     */
	    space: function space(string) {
	        var spaces = [' ', '\n', '\t'];
	        return list.split(string, spaces);
	    },


	    /**
	     * Safely splits comma-separated values (such as those for `transition-*`
	     * and `background` properties).
	     *
	     * @param {string} string - comma-separated values
	     *
	     * @return {string[]} splitted values
	     *
	     * @example
	     * postcss.list.comma('black, linear-gradient(white, black)')
	     * //=> ['black', 'linear-gradient(white, black)']
	     */
	    comma: function comma(string) {
	        var comma = ',';
	        return list.split(string, [comma], true);
	    }
	};

	exports.default = list;
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _container = __webpack_require__(66);

	var _container2 = _interopRequireDefault(_container);

	var _warnOnce = __webpack_require__(56);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Represents a CSS file and contains all its parsed nodes.
	 *
	 * @extends Container
	 *
	 * @example
	 * const root = postcss.parse('a{color:black} b{z-index:2}');
	 * root.type         //=> 'root'
	 * root.nodes.length //=> 2
	 */
	var Root = function (_Container) {
	    _inherits(Root, _Container);

	    function Root(defaults) {
	        _classCallCheck(this, Root);

	        var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, defaults));

	        _this.type = 'root';
	        if (!_this.nodes) _this.nodes = [];
	        return _this;
	    }

	    _createClass(Root, [{
	        key: 'removeChild',
	        value: function removeChild(child) {
	            child = this.index(child);

	            if (child === 0 && this.nodes.length > 1) {
	                this.nodes[1].raws.before = this.nodes[child].raws.before;
	            }

	            return _get(Root.prototype.__proto__ || Object.getPrototypeOf(Root.prototype), 'removeChild', this).call(this, child);
	        }
	    }, {
	        key: 'normalize',
	        value: function normalize(child, sample, type) {
	            var nodes = _get(Root.prototype.__proto__ || Object.getPrototypeOf(Root.prototype), 'normalize', this).call(this, child);

	            if (sample) {
	                if (type === 'prepend') {
	                    if (this.nodes.length > 1) {
	                        sample.raws.before = this.nodes[1].raws.before;
	                    } else {
	                        delete sample.raws.before;
	                    }
	                } else if (this.first !== sample) {
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;

	                    try {
	                        for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var node = _step.value;

	                            node.raws.before = sample.raws.before;
	                        }
	                    } catch (err) {
	                        _didIteratorError = true;
	                        _iteratorError = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                _iterator.return();
	                            }
	                        } finally {
	                            if (_didIteratorError) {
	                                throw _iteratorError;
	                            }
	                        }
	                    }
	                }
	            }

	            return nodes;
	        }

	        /**
	         * Returns a {@link Result} instance representing the root’s CSS.
	         *
	         * @param {processOptions} [opts] - options with only `to` and `map` keys
	         *
	         * @return {Result} result with current root’s CSS
	         *
	         * @example
	         * const root1 = postcss.parse(css1, { from: 'a.css' });
	         * const root2 = postcss.parse(css2, { from: 'b.css' });
	         * root1.append(root2);
	         * const result = root1.toResult({ to: 'all.css', map: true });
	         */

	    }, {
	        key: 'toResult',
	        value: function toResult() {
	            var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            var LazyResult = __webpack_require__(71);
	            var Processor = __webpack_require__(91);

	            var lazy = new LazyResult(new Processor(), this, opts);
	            return lazy.stringify();
	        }
	    }, {
	        key: 'remove',
	        value: function remove(child) {
	            (0, _warnOnce2.default)('Root#remove is deprecated. Use Root#removeChild');
	            this.removeChild(child);
	        }
	    }, {
	        key: 'prevMap',
	        value: function prevMap() {
	            (0, _warnOnce2.default)('Root#prevMap is deprecated. Use Root#source.input.map');
	            return this.source.input.map;
	        }

	        /**
	         * @memberof Root#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `after`: the space symbols after the last child to the end of file.
	         * * `semicolon`: is the last child has an (optional) semicolon.
	         *
	         * @example
	         * postcss.parse('a {}\n').raws //=> { after: '\n' }
	         * postcss.parse('a {}').raws   //=> { after: '' }
	         */

	    }]);

	    return Root;
	}(_container2.default);

	exports.default = Root;
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _mapGenerator = __webpack_require__(72);

	var _mapGenerator2 = _interopRequireDefault(_mapGenerator);

	var _stringify2 = __webpack_require__(62);

	var _stringify3 = _interopRequireDefault(_stringify2);

	var _warnOnce = __webpack_require__(56);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	var _result = __webpack_require__(89);

	var _result2 = _interopRequireDefault(_result);

	var _parse = __webpack_require__(67);

	var _parse2 = _interopRequireDefault(_parse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function isPromise(obj) {
	    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.then === 'function';
	}

	/**
	 * @callback onFulfilled
	 * @param {Result} result
	 */

	/**
	 * @callback onRejected
	 * @param {Error} error
	 */

	/**
	 * A Promise proxy for the result of PostCSS transformations.
	 *
	 * A `LazyResult` instance is returned by {@link Processor#process}.
	 *
	 * @example
	 * const lazy = postcss([cssnext]).process(css);
	 */

	var LazyResult = function () {
	    function LazyResult(processor, css, opts) {
	        _classCallCheck(this, LazyResult);

	        this.stringified = false;
	        this.processed = false;

	        var root = void 0;
	        if ((typeof css === 'undefined' ? 'undefined' : _typeof(css)) === 'object' && css.type === 'root') {
	            root = css;
	        } else if (css instanceof LazyResult || css instanceof _result2.default) {
	            root = css.root;
	            if (css.map) {
	                if (typeof opts.map === 'undefined') opts.map = {};
	                if (!opts.map.inline) opts.map.inline = false;
	                opts.map.prev = css.map;
	            }
	        } else {
	            var parser = _parse2.default;
	            if (opts.syntax) parser = opts.syntax.parse;
	            if (opts.parser) parser = opts.parser;
	            if (parser.parse) parser = parser.parse;

	            try {
	                root = parser(css, opts);
	            } catch (error) {
	                this.error = error;
	            }
	        }

	        this.result = new _result2.default(processor, root, opts);
	    }

	    /**
	     * Returns a {@link Processor} instance, which will be used
	     * for CSS transformations.
	     * @type {Processor}
	     */


	    _createClass(LazyResult, [{
	        key: 'warnings',


	        /**
	         * Processes input CSS through synchronous plugins
	         * and calls {@link Result#warnings()}.
	         *
	         * @return {Warning[]} warnings from plugins
	         */
	        value: function warnings() {
	            return this.sync().warnings();
	        }

	        /**
	         * Alias for the {@link LazyResult#css} property.
	         *
	         * @example
	         * lazy + '' === lazy.css;
	         *
	         * @return {string} output CSS
	         */

	    }, {
	        key: 'toString',
	        value: function toString() {
	            return this.css;
	        }

	        /**
	         * Processes input CSS through synchronous and asynchronous plugins
	         * and calls `onFulfilled` with a Result instance. If a plugin throws
	         * an error, the `onRejected` callback will be executed.
	         *
	         * It implements standard Promise API.
	         *
	         * @param {onFulfilled} onFulfilled - callback will be executed
	         *                                    when all plugins will finish work
	         * @param {onRejected}  onRejected  - callback will be execited on any error
	         *
	         * @return {Promise} Promise API to make queue
	         *
	         * @example
	         * postcss([cssnext]).process(css).then(result => {
	         *   console.log(result.css);
	         * });
	         */

	    }, {
	        key: 'then',
	        value: function then(onFulfilled, onRejected) {
	            return this.async().then(onFulfilled, onRejected);
	        }

	        /**
	         * Processes input CSS through synchronous and asynchronous plugins
	         * and calls onRejected for each error thrown in any plugin.
	         *
	         * It implements standard Promise API.
	         *
	         * @param {onRejected} onRejected - callback will be execited on any error
	         *
	         * @return {Promise} Promise API to make queue
	         *
	         * @example
	         * postcss([cssnext]).process(css).then(result => {
	         *   console.log(result.css);
	         * }).catch(error => {
	         *   console.error(error);
	         * });
	         */

	    }, {
	        key: 'catch',
	        value: function _catch(onRejected) {
	            return this.async().catch(onRejected);
	        }
	    }, {
	        key: 'handleError',
	        value: function handleError(error, plugin) {
	            try {
	                this.error = error;
	                if (error.name === 'CssSyntaxError' && !error.plugin) {
	                    error.plugin = plugin.postcssPlugin;
	                    error.setMessage();
	                } else if (plugin.postcssVersion) {
	                    var pluginName = plugin.postcssPlugin;
	                    var pluginVer = plugin.postcssVersion;
	                    var runtimeVer = this.result.processor.version;
	                    var a = pluginVer.split('.');
	                    var b = runtimeVer.split('.');

	                    if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
	                        (0, _warnOnce2.default)('Your current PostCSS version ' + 'is ' + runtimeVer + ', but ' + pluginName + ' ' + 'uses ' + pluginVer + '. Perhaps this is ' + 'the source of the error below.');
	                    }
	                }
	            } catch (err) {
	                if (console && console.error) console.error(err);
	            }
	        }
	    }, {
	        key: 'asyncTick',
	        value: function asyncTick(resolve, reject) {
	            var _this = this;

	            if (this.plugin >= this.processor.plugins.length) {
	                this.processed = true;
	                return resolve();
	            }

	            try {
	                (function () {
	                    var plugin = _this.processor.plugins[_this.plugin];
	                    var promise = _this.run(plugin);
	                    _this.plugin += 1;

	                    if (isPromise(promise)) {
	                        promise.then(function () {
	                            _this.asyncTick(resolve, reject);
	                        }).catch(function (error) {
	                            _this.handleError(error, plugin);
	                            _this.processed = true;
	                            reject(error);
	                        });
	                    } else {
	                        _this.asyncTick(resolve, reject);
	                    }
	                })();
	            } catch (error) {
	                this.processed = true;
	                reject(error);
	            }
	        }
	    }, {
	        key: 'async',
	        value: function async() {
	            var _this2 = this;

	            if (this.processed) {
	                return new Promise(function (resolve, reject) {
	                    if (_this2.error) {
	                        reject(_this2.error);
	                    } else {
	                        resolve(_this2.stringify());
	                    }
	                });
	            }
	            if (this.processing) {
	                return this.processing;
	            }

	            this.processing = new Promise(function (resolve, reject) {
	                if (_this2.error) return reject(_this2.error);
	                _this2.plugin = 0;
	                _this2.asyncTick(resolve, reject);
	            }).then(function () {
	                _this2.processed = true;
	                return _this2.stringify();
	            });

	            return this.processing;
	        }
	    }, {
	        key: 'sync',
	        value: function sync() {
	            if (this.processed) return this.result;
	            this.processed = true;

	            if (this.processing) {
	                throw new Error('Use process(css).then(cb) to work with async plugins');
	            }

	            if (this.error) throw this.error;

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this.result.processor.plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var plugin = _step.value;

	                    var promise = this.run(plugin);
	                    if (isPromise(promise)) {
	                        throw new Error('Use process(css).then(cb) to work with async plugins');
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return this.result;
	        }
	    }, {
	        key: 'run',
	        value: function run(plugin) {
	            this.result.lastPlugin = plugin;

	            try {
	                return plugin(this.result.root, this.result);
	            } catch (error) {
	                this.handleError(error, plugin);
	                throw error;
	            }
	        }
	    }, {
	        key: 'stringify',
	        value: function stringify() {
	            if (this.stringified) return this.result;
	            this.stringified = true;

	            this.sync();

	            var opts = this.result.opts;
	            var str = _stringify3.default;
	            if (opts.syntax) str = opts.syntax.stringify;
	            if (opts.stringifier) str = opts.stringifier;
	            if (str.stringify) str = str.stringify;

	            var map = new _mapGenerator2.default(str, this.result.root, this.result.opts);
	            var data = map.generate();
	            this.result.css = data[0];
	            this.result.map = data[1];

	            return this.result;
	        }
	    }, {
	        key: 'processor',
	        get: function get() {
	            return this.result.processor;
	        }

	        /**
	         * Options from the {@link Processor#process} call.
	         * @type {processOptions}
	         */

	    }, {
	        key: 'opts',
	        get: function get() {
	            return this.result.opts;
	        }

	        /**
	         * Processes input CSS through synchronous plugins, converts `Root`
	         * to a CSS string and returns {@link Result#css}.
	         *
	         * This property will only work with synchronous plugins.
	         * If the processor contains any asynchronous plugins
	         * it will throw an error. This is why this method is only
	         * for debug purpose, you should always use {@link LazyResult#then}.
	         *
	         * @type {string}
	         * @see Result#css
	         */

	    }, {
	        key: 'css',
	        get: function get() {
	            return this.stringify().css;
	        }

	        /**
	         * An alias for the `css` property. Use it with syntaxes
	         * that generate non-CSS output.
	         *
	         * This property will only work with synchronous plugins.
	         * If the processor contains any asynchronous plugins
	         * it will throw an error. This is why this method is only
	         * for debug purpose, you should always use {@link LazyResult#then}.
	         *
	         * @type {string}
	         * @see Result#content
	         */

	    }, {
	        key: 'content',
	        get: function get() {
	            return this.stringify().content;
	        }

	        /**
	         * Processes input CSS through synchronous plugins
	         * and returns {@link Result#map}.
	         *
	         * This property will only work with synchronous plugins.
	         * If the processor contains any asynchronous plugins
	         * it will throw an error. This is why this method is only
	         * for debug purpose, you should always use {@link LazyResult#then}.
	         *
	         * @type {SourceMapGenerator}
	         * @see Result#map
	         */

	    }, {
	        key: 'map',
	        get: function get() {
	            return this.stringify().map;
	        }

	        /**
	         * Processes input CSS through synchronous plugins
	         * and returns {@link Result#root}.
	         *
	         * This property will only work with synchronous plugins. If the processor
	         * contains any asynchronous plugins it will throw an error.
	         *
	         * This is why this method is only for debug purpose,
	         * you should always use {@link LazyResult#then}.
	         *
	         * @type {Root}
	         * @see Result#root
	         */

	    }, {
	        key: 'root',
	        get: function get() {
	            return this.sync().root;
	        }

	        /**
	         * Processes input CSS through synchronous plugins
	         * and returns {@link Result#messages}.
	         *
	         * This property will only work with synchronous plugins. If the processor
	         * contains any asynchronous plugins it will throw an error.
	         *
	         * This is why this method is only for debug purpose,
	         * you should always use {@link LazyResult#then}.
	         *
	         * @type {Message[]}
	         * @see Result#messages
	         */

	    }, {
	        key: 'messages',
	        get: function get() {
	            return this.sync().messages;
	        }
	    }]);

	    return LazyResult;
	}();

	exports.default = LazyResult;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jsBase = __webpack_require__(73);

	var _sourceMap = __webpack_require__(78);

	var _sourceMap2 = _interopRequireDefault(_sourceMap);

	var _path = __webpack_require__(57);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MapGenerator = function () {
	    function MapGenerator(stringify, root, opts) {
	        _classCallCheck(this, MapGenerator);

	        this.stringify = stringify;
	        this.mapOpts = opts.map || {};
	        this.root = root;
	        this.opts = opts;
	    }

	    _createClass(MapGenerator, [{
	        key: 'isMap',
	        value: function isMap() {
	            if (typeof this.opts.map !== 'undefined') {
	                return !!this.opts.map;
	            } else {
	                return this.previous().length > 0;
	            }
	        }
	    }, {
	        key: 'previous',
	        value: function previous() {
	            var _this = this;

	            if (!this.previousMaps) {
	                this.previousMaps = [];
	                this.root.walk(function (node) {
	                    if (node.source && node.source.input.map) {
	                        var map = node.source.input.map;
	                        if (_this.previousMaps.indexOf(map) === -1) {
	                            _this.previousMaps.push(map);
	                        }
	                    }
	                });
	            }

	            return this.previousMaps;
	        }
	    }, {
	        key: 'isInline',
	        value: function isInline() {
	            if (typeof this.mapOpts.inline !== 'undefined') {
	                return this.mapOpts.inline;
	            }

	            var annotation = this.mapOpts.annotation;
	            if (typeof annotation !== 'undefined' && annotation !== true) {
	                return false;
	            }

	            if (this.previous().length) {
	                return this.previous().some(function (i) {
	                    return i.inline;
	                });
	            } else {
	                return true;
	            }
	        }
	    }, {
	        key: 'isSourcesContent',
	        value: function isSourcesContent() {
	            if (typeof this.mapOpts.sourcesContent !== 'undefined') {
	                return this.mapOpts.sourcesContent;
	            }
	            if (this.previous().length) {
	                return this.previous().some(function (i) {
	                    return i.withContent();
	                });
	            } else {
	                return true;
	            }
	        }
	    }, {
	        key: 'clearAnnotation',
	        value: function clearAnnotation() {
	            if (this.mapOpts.annotation === false) return;

	            var node = void 0;
	            for (var i = this.root.nodes.length - 1; i >= 0; i--) {
	                node = this.root.nodes[i];
	                if (node.type !== 'comment') continue;
	                if (node.text.indexOf('# sourceMappingURL=') === 0) {
	                    this.root.removeChild(i);
	                }
	            }
	        }
	    }, {
	        key: 'setSourcesContent',
	        value: function setSourcesContent() {
	            var _this2 = this;

	            var already = {};
	            this.root.walk(function (node) {
	                if (node.source) {
	                    var from = node.source.input.from;
	                    if (from && !already[from]) {
	                        already[from] = true;
	                        var relative = _this2.relative(from);
	                        _this2.map.setSourceContent(relative, node.source.input.css);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'applyPrevMaps',
	        value: function applyPrevMaps() {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this.previous()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var prev = _step.value;

	                    var from = this.relative(prev.file);
	                    var root = prev.root || _path2.default.dirname(prev.file);
	                    var map = void 0;

	                    if (this.mapOpts.sourcesContent === false) {
	                        map = new _sourceMap2.default.SourceMapConsumer(prev.text);
	                        if (map.sourcesContent) {
	                            map.sourcesContent = map.sourcesContent.map(function () {
	                                return null;
	                            });
	                        }
	                    } else {
	                        map = prev.consumer();
	                    }

	                    this.map.applySourceMap(map, from, this.relative(root));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'isAnnotation',
	        value: function isAnnotation() {
	            if (this.isInline()) {
	                return true;
	            } else if (typeof this.mapOpts.annotation !== 'undefined') {
	                return this.mapOpts.annotation;
	            } else if (this.previous().length) {
	                return this.previous().some(function (i) {
	                    return i.annotation;
	                });
	            } else {
	                return true;
	            }
	        }
	    }, {
	        key: 'addAnnotation',
	        value: function addAnnotation() {
	            var content = void 0;

	            if (this.isInline()) {
	                content = 'data:application/json;base64,' + _jsBase.Base64.encode(this.map.toString());
	            } else if (typeof this.mapOpts.annotation === 'string') {
	                content = this.mapOpts.annotation;
	            } else {
	                content = this.outputFile() + '.map';
	            }

	            var eol = '\n';
	            if (this.css.indexOf('\r\n') !== -1) eol = '\r\n';

	            this.css += eol + '/*# sourceMappingURL=' + content + ' */';
	        }
	    }, {
	        key: 'outputFile',
	        value: function outputFile() {
	            if (this.opts.to) {
	                return this.relative(this.opts.to);
	            } else if (this.opts.from) {
	                return this.relative(this.opts.from);
	            } else {
	                return 'to.css';
	            }
	        }
	    }, {
	        key: 'generateMap',
	        value: function generateMap() {
	            this.generateString();
	            if (this.isSourcesContent()) this.setSourcesContent();
	            if (this.previous().length > 0) this.applyPrevMaps();
	            if (this.isAnnotation()) this.addAnnotation();

	            if (this.isInline()) {
	                return [this.css];
	            } else {
	                return [this.css, this.map];
	            }
	        }
	    }, {
	        key: 'relative',
	        value: function relative(file) {
	            if (/^\w+:\/\//.test(file)) return file;

	            var from = this.opts.to ? _path2.default.dirname(this.opts.to) : '.';

	            if (typeof this.mapOpts.annotation === 'string') {
	                from = _path2.default.dirname(_path2.default.resolve(from, this.mapOpts.annotation));
	            }

	            file = _path2.default.relative(from, file);
	            if (_path2.default.sep === '\\') {
	                return file.replace(/\\/g, '/');
	            } else {
	                return file;
	            }
	        }
	    }, {
	        key: 'sourcePath',
	        value: function sourcePath(node) {
	            if (this.mapOpts.from) {
	                return this.mapOpts.from;
	            } else {
	                return this.relative(node.source.input.from);
	            }
	        }
	    }, {
	        key: 'generateString',
	        value: function generateString() {
	            var _this3 = this;

	            this.css = '';
	            this.map = new _sourceMap2.default.SourceMapGenerator({ file: this.outputFile() });

	            var line = 1;
	            var column = 1;

	            var lines = void 0,
	                last = void 0;
	            this.stringify(this.root, function (str, node, type) {
	                _this3.css += str;

	                if (node && type !== 'end') {
	                    if (node.source && node.source.start) {
	                        _this3.map.addMapping({
	                            source: _this3.sourcePath(node),
	                            generated: { line: line, column: column - 1 },
	                            original: {
	                                line: node.source.start.line,
	                                column: node.source.start.column - 1
	                            }
	                        });
	                    } else {
	                        _this3.map.addMapping({
	                            source: '<no source>',
	                            original: { line: 1, column: 0 },
	                            generated: { line: line, column: column - 1 }
	                        });
	                    }
	                }

	                lines = str.match(/\n/g);
	                if (lines) {
	                    line += lines.length;
	                    last = str.lastIndexOf('\n');
	                    column = str.length - last;
	                } else {
	                    column += str.length;
	                }

	                if (node && type !== 'start') {
	                    if (node.source && node.source.end) {
	                        _this3.map.addMapping({
	                            source: _this3.sourcePath(node),
	                            generated: { line: line, column: column - 1 },
	                            original: {
	                                line: node.source.end.line,
	                                column: node.source.end.column
	                            }
	                        });
	                    } else {
	                        _this3.map.addMapping({
	                            source: '<no source>',
	                            original: { line: 1, column: 0 },
	                            generated: { line: line, column: column - 1 }
	                        });
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'generate',
	        value: function generate() {
	            this.clearAnnotation();

	            if (this.isMap()) {
	                return this.generateMap();
	            } else {
	                var result = '';
	                this.stringify(this.root, function (i) {
	                    result += i;
	                });
	                return [result];
	            }
	        }
	    }]);

	    return MapGenerator;
	}();

	exports.default = MapGenerator;
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * $Id: base64.js,v 2.15 2014/04/05 12:58:57 dankogai Exp dankogai $
	 *
	 *  Licensed under the MIT license.
	 *    http://opensource.org/licenses/mit-license
	 *
	 *  References:
	 *    http://en.wikipedia.org/wiki/Base64
	 */

	(function(global) {
	    'use strict';
	    // existing version for noConflict()
	    var _Base64 = global.Base64;
	    var version = "2.1.9";
	    // if node.js, we use Buffer
	    var buffer;
	    if (typeof module !== 'undefined' && module.exports) {
	        try {
	            buffer = __webpack_require__(74).Buffer;
	        } catch (err) {}
	    }
	    // constants
	    var b64chars
	        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	    var b64tab = function(bin) {
	        var t = {};
	        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
	        return t;
	    }(b64chars);
	    var fromCharCode = String.fromCharCode;
	    // encoder stuff
	    var cb_utob = function(c) {
	        if (c.length < 2) {
	            var cc = c.charCodeAt(0);
	            return cc < 0x80 ? c
	                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
	                                + fromCharCode(0x80 | (cc & 0x3f)))
	                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
	                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
	                   + fromCharCode(0x80 | ( cc         & 0x3f)));
	        } else {
	            var cc = 0x10000
	                + (c.charCodeAt(0) - 0xD800) * 0x400
	                + (c.charCodeAt(1) - 0xDC00);
	            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
	                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
	                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
	                    + fromCharCode(0x80 | ( cc         & 0x3f)));
	        }
	    };
	    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
	    var utob = function(u) {
	        return u.replace(re_utob, cb_utob);
	    };
	    var cb_encode = function(ccc) {
	        var padlen = [0, 2, 1][ccc.length % 3],
	        ord = ccc.charCodeAt(0) << 16
	            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
	            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
	        chars = [
	            b64chars.charAt( ord >>> 18),
	            b64chars.charAt((ord >>> 12) & 63),
	            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
	            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
	        ];
	        return chars.join('');
	    };
	    var btoa = global.btoa ? function(b) {
	        return global.btoa(b);
	    } : function(b) {
	        return b.replace(/[\s\S]{1,3}/g, cb_encode);
	    };
	    var _encode = buffer ? function (u) {
	        return (u.constructor === buffer.constructor ? u : new buffer(u))
	        .toString('base64')
	    }
	    : function (u) { return btoa(utob(u)) }
	    ;
	    var encode = function(u, urisafe) {
	        return !urisafe
	            ? _encode(String(u))
	            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
	                return m0 == '+' ? '-' : '_';
	            }).replace(/=/g, '');
	    };
	    var encodeURI = function(u) { return encode(u, true) };
	    // decoder stuff
	    var re_btou = new RegExp([
	        '[\xC0-\xDF][\x80-\xBF]',
	        '[\xE0-\xEF][\x80-\xBF]{2}',
	        '[\xF0-\xF7][\x80-\xBF]{3}'
	    ].join('|'), 'g');
	    var cb_btou = function(cccc) {
	        switch(cccc.length) {
	        case 4:
	            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
	                |    ((0x3f & cccc.charCodeAt(1)) << 12)
	                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
	                |     (0x3f & cccc.charCodeAt(3)),
	            offset = cp - 0x10000;
	            return (fromCharCode((offset  >>> 10) + 0xD800)
	                    + fromCharCode((offset & 0x3FF) + 0xDC00));
	        case 3:
	            return fromCharCode(
	                ((0x0f & cccc.charCodeAt(0)) << 12)
	                    | ((0x3f & cccc.charCodeAt(1)) << 6)
	                    |  (0x3f & cccc.charCodeAt(2))
	            );
	        default:
	            return  fromCharCode(
	                ((0x1f & cccc.charCodeAt(0)) << 6)
	                    |  (0x3f & cccc.charCodeAt(1))
	            );
	        }
	    };
	    var btou = function(b) {
	        return b.replace(re_btou, cb_btou);
	    };
	    var cb_decode = function(cccc) {
	        var len = cccc.length,
	        padlen = len % 4,
	        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
	            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
	            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
	            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
	        chars = [
	            fromCharCode( n >>> 16),
	            fromCharCode((n >>>  8) & 0xff),
	            fromCharCode( n         & 0xff)
	        ];
	        chars.length -= [0, 0, 2, 1][padlen];
	        return chars.join('');
	    };
	    var atob = global.atob ? function(a) {
	        return global.atob(a);
	    } : function(a){
	        return a.replace(/[\s\S]{1,4}/g, cb_decode);
	    };
	    var _decode = buffer ? function(a) {
	        return (a.constructor === buffer.constructor
	                ? a : new buffer(a, 'base64')).toString();
	    }
	    : function(a) { return btou(atob(a)) };
	    var decode = function(a){
	        return _decode(
	            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
	                .replace(/[^A-Za-z0-9\+\/]/g, '')
	        );
	    };
	    var noConflict = function() {
	        var Base64 = global.Base64;
	        global.Base64 = _Base64;
	        return Base64;
	    };
	    // export Base64
	    global.Base64 = {
	        VERSION: version,
	        atob: atob,
	        btoa: btoa,
	        fromBase64: decode,
	        toBase64: encode,
	        utob: utob,
	        encode: encode,
	        encodeURI: encodeURI,
	        btou: btou,
	        decode: decode,
	        noConflict: noConflict
	    };
	    // if ES5 is available, make Base64.extendString() available
	    if (typeof Object.defineProperty === 'function') {
	        var noEnum = function(v){
	            return {value:v,enumerable:false,writable:true,configurable:true};
	        };
	        global.Base64.extendString = function () {
	            Object.defineProperty(
	                String.prototype, 'fromBase64', noEnum(function () {
	                    return decode(this)
	                }));
	            Object.defineProperty(
	                String.prototype, 'toBase64', noEnum(function (urisafe) {
	                    return encode(this, urisafe)
	                }));
	            Object.defineProperty(
	                String.prototype, 'toBase64URI', noEnum(function () {
	                    return encode(this, true)
	                }));
	        };
	    }
	    // that's it!
	    if (global['Meteor']) {
	       Base64 = global.Base64; // for normal export in Meteor.js
	    }
	})(this);


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(75)
	var ieee754 = __webpack_require__(76)
	var isArray = __webpack_require__(77)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer, (function() { return this; }())))

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ },
/* 76 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 77 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright 2009-2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE.txt or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */
	exports.SourceMapGenerator = __webpack_require__(79).SourceMapGenerator;
	exports.SourceMapConsumer = __webpack_require__(85).SourceMapConsumer;
	exports.SourceNode = __webpack_require__(88).SourceNode;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var base64VLQ = __webpack_require__(80);
	var util = __webpack_require__(82);
	var ArraySet = __webpack_require__(83).ArraySet;
	var MappingList = __webpack_require__(84).MappingList;

	/**
	 * An instance of the SourceMapGenerator represents a source map which is
	 * being built incrementally. You may pass an object with the following
	 * properties:
	 *
	 *   - file: The filename of the generated source.
	 *   - sourceRoot: A root for all relative URLs in this source map.
	 */
	function SourceMapGenerator(aArgs) {
	  if (!aArgs) {
	    aArgs = {};
	  }
	  this._file = util.getArg(aArgs, 'file', null);
	  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
	  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
	  this._sources = new ArraySet();
	  this._names = new ArraySet();
	  this._mappings = new MappingList();
	  this._sourcesContents = null;
	}

	SourceMapGenerator.prototype._version = 3;

	/**
	 * Creates a new SourceMapGenerator based on a SourceMapConsumer
	 *
	 * @param aSourceMapConsumer The SourceMap.
	 */
	SourceMapGenerator.fromSourceMap =
	  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
	    var sourceRoot = aSourceMapConsumer.sourceRoot;
	    var generator = new SourceMapGenerator({
	      file: aSourceMapConsumer.file,
	      sourceRoot: sourceRoot
	    });
	    aSourceMapConsumer.eachMapping(function (mapping) {
	      var newMapping = {
	        generated: {
	          line: mapping.generatedLine,
	          column: mapping.generatedColumn
	        }
	      };

	      if (mapping.source != null) {
	        newMapping.source = mapping.source;
	        if (sourceRoot != null) {
	          newMapping.source = util.relative(sourceRoot, newMapping.source);
	        }

	        newMapping.original = {
	          line: mapping.originalLine,
	          column: mapping.originalColumn
	        };

	        if (mapping.name != null) {
	          newMapping.name = mapping.name;
	        }
	      }

	      generator.addMapping(newMapping);
	    });
	    aSourceMapConsumer.sources.forEach(function (sourceFile) {
	      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
	      if (content != null) {
	        generator.setSourceContent(sourceFile, content);
	      }
	    });
	    return generator;
	  };

	/**
	 * Add a single mapping from original source line and column to the generated
	 * source's line and column for this source map being created. The mapping
	 * object should have the following properties:
	 *
	 *   - generated: An object with the generated line and column positions.
	 *   - original: An object with the original line and column positions.
	 *   - source: The original source file (relative to the sourceRoot).
	 *   - name: An optional original token name for this mapping.
	 */
	SourceMapGenerator.prototype.addMapping =
	  function SourceMapGenerator_addMapping(aArgs) {
	    var generated = util.getArg(aArgs, 'generated');
	    var original = util.getArg(aArgs, 'original', null);
	    var source = util.getArg(aArgs, 'source', null);
	    var name = util.getArg(aArgs, 'name', null);

	    if (!this._skipValidation) {
	      this._validateMapping(generated, original, source, name);
	    }

	    if (source != null) {
	      source = String(source);
	      if (!this._sources.has(source)) {
	        this._sources.add(source);
	      }
	    }

	    if (name != null) {
	      name = String(name);
	      if (!this._names.has(name)) {
	        this._names.add(name);
	      }
	    }

	    this._mappings.add({
	      generatedLine: generated.line,
	      generatedColumn: generated.column,
	      originalLine: original != null && original.line,
	      originalColumn: original != null && original.column,
	      source: source,
	      name: name
	    });
	  };

	/**
	 * Set the source content for a source file.
	 */
	SourceMapGenerator.prototype.setSourceContent =
	  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
	    var source = aSourceFile;
	    if (this._sourceRoot != null) {
	      source = util.relative(this._sourceRoot, source);
	    }

	    if (aSourceContent != null) {
	      // Add the source content to the _sourcesContents map.
	      // Create a new _sourcesContents map if the property is null.
	      if (!this._sourcesContents) {
	        this._sourcesContents = Object.create(null);
	      }
	      this._sourcesContents[util.toSetString(source)] = aSourceContent;
	    } else if (this._sourcesContents) {
	      // Remove the source file from the _sourcesContents map.
	      // If the _sourcesContents map is empty, set the property to null.
	      delete this._sourcesContents[util.toSetString(source)];
	      if (Object.keys(this._sourcesContents).length === 0) {
	        this._sourcesContents = null;
	      }
	    }
	  };

	/**
	 * Applies the mappings of a sub-source-map for a specific source file to the
	 * source map being generated. Each mapping to the supplied source file is
	 * rewritten using the supplied source map. Note: The resolution for the
	 * resulting mappings is the minimium of this map and the supplied map.
	 *
	 * @param aSourceMapConsumer The source map to be applied.
	 * @param aSourceFile Optional. The filename of the source file.
	 *        If omitted, SourceMapConsumer's file property will be used.
	 * @param aSourceMapPath Optional. The dirname of the path to the source map
	 *        to be applied. If relative, it is relative to the SourceMapConsumer.
	 *        This parameter is needed when the two source maps aren't in the same
	 *        directory, and the source map to be applied contains relative source
	 *        paths. If so, those relative source paths need to be rewritten
	 *        relative to the SourceMapGenerator.
	 */
	SourceMapGenerator.prototype.applySourceMap =
	  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
	    var sourceFile = aSourceFile;
	    // If aSourceFile is omitted, we will use the file property of the SourceMap
	    if (aSourceFile == null) {
	      if (aSourceMapConsumer.file == null) {
	        throw new Error(
	          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
	          'or the source map\'s "file" property. Both were omitted.'
	        );
	      }
	      sourceFile = aSourceMapConsumer.file;
	    }
	    var sourceRoot = this._sourceRoot;
	    // Make "sourceFile" relative if an absolute Url is passed.
	    if (sourceRoot != null) {
	      sourceFile = util.relative(sourceRoot, sourceFile);
	    }
	    // Applying the SourceMap can add and remove items from the sources and
	    // the names array.
	    var newSources = new ArraySet();
	    var newNames = new ArraySet();

	    // Find mappings for the "sourceFile"
	    this._mappings.unsortedForEach(function (mapping) {
	      if (mapping.source === sourceFile && mapping.originalLine != null) {
	        // Check if it can be mapped by the source map, then update the mapping.
	        var original = aSourceMapConsumer.originalPositionFor({
	          line: mapping.originalLine,
	          column: mapping.originalColumn
	        });
	        if (original.source != null) {
	          // Copy mapping
	          mapping.source = original.source;
	          if (aSourceMapPath != null) {
	            mapping.source = util.join(aSourceMapPath, mapping.source)
	          }
	          if (sourceRoot != null) {
	            mapping.source = util.relative(sourceRoot, mapping.source);
	          }
	          mapping.originalLine = original.line;
	          mapping.originalColumn = original.column;
	          if (original.name != null) {
	            mapping.name = original.name;
	          }
	        }
	      }

	      var source = mapping.source;
	      if (source != null && !newSources.has(source)) {
	        newSources.add(source);
	      }

	      var name = mapping.name;
	      if (name != null && !newNames.has(name)) {
	        newNames.add(name);
	      }

	    }, this);
	    this._sources = newSources;
	    this._names = newNames;

	    // Copy sourcesContents of applied map.
	    aSourceMapConsumer.sources.forEach(function (sourceFile) {
	      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
	      if (content != null) {
	        if (aSourceMapPath != null) {
	          sourceFile = util.join(aSourceMapPath, sourceFile);
	        }
	        if (sourceRoot != null) {
	          sourceFile = util.relative(sourceRoot, sourceFile);
	        }
	        this.setSourceContent(sourceFile, content);
	      }
	    }, this);
	  };

	/**
	 * A mapping can have one of the three levels of data:
	 *
	 *   1. Just the generated position.
	 *   2. The Generated position, original position, and original source.
	 *   3. Generated and original position, original source, as well as a name
	 *      token.
	 *
	 * To maintain consistency, we validate that any new mapping being added falls
	 * in to one of these categories.
	 */
	SourceMapGenerator.prototype._validateMapping =
	  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
	                                              aName) {
	    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
	        && aGenerated.line > 0 && aGenerated.column >= 0
	        && !aOriginal && !aSource && !aName) {
	      // Case 1.
	      return;
	    }
	    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
	             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
	             && aGenerated.line > 0 && aGenerated.column >= 0
	             && aOriginal.line > 0 && aOriginal.column >= 0
	             && aSource) {
	      // Cases 2 and 3.
	      return;
	    }
	    else {
	      throw new Error('Invalid mapping: ' + JSON.stringify({
	        generated: aGenerated,
	        source: aSource,
	        original: aOriginal,
	        name: aName
	      }));
	    }
	  };

	/**
	 * Serialize the accumulated mappings in to the stream of base 64 VLQs
	 * specified by the source map format.
	 */
	SourceMapGenerator.prototype._serializeMappings =
	  function SourceMapGenerator_serializeMappings() {
	    var previousGeneratedColumn = 0;
	    var previousGeneratedLine = 1;
	    var previousOriginalColumn = 0;
	    var previousOriginalLine = 0;
	    var previousName = 0;
	    var previousSource = 0;
	    var result = '';
	    var next;
	    var mapping;
	    var nameIdx;
	    var sourceIdx;

	    var mappings = this._mappings.toArray();
	    for (var i = 0, len = mappings.length; i < len; i++) {
	      mapping = mappings[i];
	      next = ''

	      if (mapping.generatedLine !== previousGeneratedLine) {
	        previousGeneratedColumn = 0;
	        while (mapping.generatedLine !== previousGeneratedLine) {
	          next += ';';
	          previousGeneratedLine++;
	        }
	      }
	      else {
	        if (i > 0) {
	          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
	            continue;
	          }
	          next += ',';
	        }
	      }

	      next += base64VLQ.encode(mapping.generatedColumn
	                                 - previousGeneratedColumn);
	      previousGeneratedColumn = mapping.generatedColumn;

	      if (mapping.source != null) {
	        sourceIdx = this._sources.indexOf(mapping.source);
	        next += base64VLQ.encode(sourceIdx - previousSource);
	        previousSource = sourceIdx;

	        // lines are stored 0-based in SourceMap spec version 3
	        next += base64VLQ.encode(mapping.originalLine - 1
	                                   - previousOriginalLine);
	        previousOriginalLine = mapping.originalLine - 1;

	        next += base64VLQ.encode(mapping.originalColumn
	                                   - previousOriginalColumn);
	        previousOriginalColumn = mapping.originalColumn;

	        if (mapping.name != null) {
	          nameIdx = this._names.indexOf(mapping.name);
	          next += base64VLQ.encode(nameIdx - previousName);
	          previousName = nameIdx;
	        }
	      }

	      result += next;
	    }

	    return result;
	  };

	SourceMapGenerator.prototype._generateSourcesContent =
	  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
	    return aSources.map(function (source) {
	      if (!this._sourcesContents) {
	        return null;
	      }
	      if (aSourceRoot != null) {
	        source = util.relative(aSourceRoot, source);
	      }
	      var key = util.toSetString(source);
	      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
	        ? this._sourcesContents[key]
	        : null;
	    }, this);
	  };

	/**
	 * Externalize the source map.
	 */
	SourceMapGenerator.prototype.toJSON =
	  function SourceMapGenerator_toJSON() {
	    var map = {
	      version: this._version,
	      sources: this._sources.toArray(),
	      names: this._names.toArray(),
	      mappings: this._serializeMappings()
	    };
	    if (this._file != null) {
	      map.file = this._file;
	    }
	    if (this._sourceRoot != null) {
	      map.sourceRoot = this._sourceRoot;
	    }
	    if (this._sourcesContents) {
	      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
	    }

	    return map;
	  };

	/**
	 * Render the source map being generated to a string.
	 */
	SourceMapGenerator.prototype.toString =
	  function SourceMapGenerator_toString() {
	    return JSON.stringify(this.toJSON());
	  };

	exports.SourceMapGenerator = SourceMapGenerator;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 *
	 * Based on the Base 64 VLQ implementation in Closure Compiler:
	 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
	 *
	 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *  * Redistributions of source code must retain the above copyright
	 *    notice, this list of conditions and the following disclaimer.
	 *  * Redistributions in binary form must reproduce the above
	 *    copyright notice, this list of conditions and the following
	 *    disclaimer in the documentation and/or other materials provided
	 *    with the distribution.
	 *  * Neither the name of Google Inc. nor the names of its
	 *    contributors may be used to endorse or promote products derived
	 *    from this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	var base64 = __webpack_require__(81);

	// A single base 64 digit can contain 6 bits of data. For the base 64 variable
	// length quantities we use in the source map spec, the first bit is the sign,
	// the next four bits are the actual value, and the 6th bit is the
	// continuation bit. The continuation bit tells us whether there are more
	// digits in this value following this digit.
	//
	//   Continuation
	//   |    Sign
	//   |    |
	//   V    V
	//   101011

	var VLQ_BASE_SHIFT = 5;

	// binary: 100000
	var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

	// binary: 011111
	var VLQ_BASE_MASK = VLQ_BASE - 1;

	// binary: 100000
	var VLQ_CONTINUATION_BIT = VLQ_BASE;

	/**
	 * Converts from a two-complement value to a value where the sign bit is
	 * placed in the least significant bit.  For example, as decimals:
	 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
	 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
	 */
	function toVLQSigned(aValue) {
	  return aValue < 0
	    ? ((-aValue) << 1) + 1
	    : (aValue << 1) + 0;
	}

	/**
	 * Converts to a two-complement value from a value where the sign bit is
	 * placed in the least significant bit.  For example, as decimals:
	 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
	 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
	 */
	function fromVLQSigned(aValue) {
	  var isNegative = (aValue & 1) === 1;
	  var shifted = aValue >> 1;
	  return isNegative
	    ? -shifted
	    : shifted;
	}

	/**
	 * Returns the base 64 VLQ encoded value.
	 */
	exports.encode = function base64VLQ_encode(aValue) {
	  var encoded = "";
	  var digit;

	  var vlq = toVLQSigned(aValue);

	  do {
	    digit = vlq & VLQ_BASE_MASK;
	    vlq >>>= VLQ_BASE_SHIFT;
	    if (vlq > 0) {
	      // There are still more digits in this value, so we must make sure the
	      // continuation bit is marked.
	      digit |= VLQ_CONTINUATION_BIT;
	    }
	    encoded += base64.encode(digit);
	  } while (vlq > 0);

	  return encoded;
	};

	/**
	 * Decodes the next base 64 VLQ value from the given string and returns the
	 * value and the rest of the string via the out parameter.
	 */
	exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
	  var strLen = aStr.length;
	  var result = 0;
	  var shift = 0;
	  var continuation, digit;

	  do {
	    if (aIndex >= strLen) {
	      throw new Error("Expected more digits in base 64 VLQ value.");
	    }

	    digit = base64.decode(aStr.charCodeAt(aIndex++));
	    if (digit === -1) {
	      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
	    }

	    continuation = !!(digit & VLQ_CONTINUATION_BIT);
	    digit &= VLQ_BASE_MASK;
	    result = result + (digit << shift);
	    shift += VLQ_BASE_SHIFT;
	  } while (continuation);

	  aOutParam.value = fromVLQSigned(result);
	  aOutParam.rest = aIndex;
	};


/***/ },
/* 81 */
/***/ function(module, exports) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

	/**
	 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
	 */
	exports.encode = function (number) {
	  if (0 <= number && number < intToCharMap.length) {
	    return intToCharMap[number];
	  }
	  throw new TypeError("Must be between 0 and 63: " + number);
	};

	/**
	 * Decode a single base 64 character code digit to an integer. Returns -1 on
	 * failure.
	 */
	exports.decode = function (charCode) {
	  var bigA = 65;     // 'A'
	  var bigZ = 90;     // 'Z'

	  var littleA = 97;  // 'a'
	  var littleZ = 122; // 'z'

	  var zero = 48;     // '0'
	  var nine = 57;     // '9'

	  var plus = 43;     // '+'
	  var slash = 47;    // '/'

	  var littleOffset = 26;
	  var numberOffset = 52;

	  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
	  if (bigA <= charCode && charCode <= bigZ) {
	    return (charCode - bigA);
	  }

	  // 26 - 51: abcdefghijklmnopqrstuvwxyz
	  if (littleA <= charCode && charCode <= littleZ) {
	    return (charCode - littleA + littleOffset);
	  }

	  // 52 - 61: 0123456789
	  if (zero <= charCode && charCode <= nine) {
	    return (charCode - zero + numberOffset);
	  }

	  // 62: +
	  if (charCode == plus) {
	    return 62;
	  }

	  // 63: /
	  if (charCode == slash) {
	    return 63;
	  }

	  // Invalid base64 digit.
	  return -1;
	};


/***/ },
/* 82 */
/***/ function(module, exports) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	/**
	 * This is a helper function for getting values from parameter/options
	 * objects.
	 *
	 * @param args The object we are extracting values from
	 * @param name The name of the property we are getting.
	 * @param defaultValue An optional value to return if the property is missing
	 * from the object. If this is not specified and the property is missing, an
	 * error will be thrown.
	 */
	function getArg(aArgs, aName, aDefaultValue) {
	  if (aName in aArgs) {
	    return aArgs[aName];
	  } else if (arguments.length === 3) {
	    return aDefaultValue;
	  } else {
	    throw new Error('"' + aName + '" is a required argument.');
	  }
	}
	exports.getArg = getArg;

	var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
	var dataUrlRegexp = /^data:.+\,.+$/;

	function urlParse(aUrl) {
	  var match = aUrl.match(urlRegexp);
	  if (!match) {
	    return null;
	  }
	  return {
	    scheme: match[1],
	    auth: match[2],
	    host: match[3],
	    port: match[4],
	    path: match[5]
	  };
	}
	exports.urlParse = urlParse;

	function urlGenerate(aParsedUrl) {
	  var url = '';
	  if (aParsedUrl.scheme) {
	    url += aParsedUrl.scheme + ':';
	  }
	  url += '//';
	  if (aParsedUrl.auth) {
	    url += aParsedUrl.auth + '@';
	  }
	  if (aParsedUrl.host) {
	    url += aParsedUrl.host;
	  }
	  if (aParsedUrl.port) {
	    url += ":" + aParsedUrl.port
	  }
	  if (aParsedUrl.path) {
	    url += aParsedUrl.path;
	  }
	  return url;
	}
	exports.urlGenerate = urlGenerate;

	/**
	 * Normalizes a path, or the path portion of a URL:
	 *
	 * - Replaces consecutive slashes with one slash.
	 * - Removes unnecessary '.' parts.
	 * - Removes unnecessary '<dir>/..' parts.
	 *
	 * Based on code in the Node.js 'path' core module.
	 *
	 * @param aPath The path or url to normalize.
	 */
	function normalize(aPath) {
	  var path = aPath;
	  var url = urlParse(aPath);
	  if (url) {
	    if (!url.path) {
	      return aPath;
	    }
	    path = url.path;
	  }
	  var isAbsolute = exports.isAbsolute(path);

	  var parts = path.split(/\/+/);
	  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
	    part = parts[i];
	    if (part === '.') {
	      parts.splice(i, 1);
	    } else if (part === '..') {
	      up++;
	    } else if (up > 0) {
	      if (part === '') {
	        // The first part is blank if the path is absolute. Trying to go
	        // above the root is a no-op. Therefore we can remove all '..' parts
	        // directly after the root.
	        parts.splice(i + 1, up);
	        up = 0;
	      } else {
	        parts.splice(i, 2);
	        up--;
	      }
	    }
	  }
	  path = parts.join('/');

	  if (path === '') {
	    path = isAbsolute ? '/' : '.';
	  }

	  if (url) {
	    url.path = path;
	    return urlGenerate(url);
	  }
	  return path;
	}
	exports.normalize = normalize;

	/**
	 * Joins two paths/URLs.
	 *
	 * @param aRoot The root path or URL.
	 * @param aPath The path or URL to be joined with the root.
	 *
	 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
	 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
	 *   first.
	 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
	 *   is updated with the result and aRoot is returned. Otherwise the result
	 *   is returned.
	 *   - If aPath is absolute, the result is aPath.
	 *   - Otherwise the two paths are joined with a slash.
	 * - Joining for example 'http://' and 'www.example.com' is also supported.
	 */
	function join(aRoot, aPath) {
	  if (aRoot === "") {
	    aRoot = ".";
	  }
	  if (aPath === "") {
	    aPath = ".";
	  }
	  var aPathUrl = urlParse(aPath);
	  var aRootUrl = urlParse(aRoot);
	  if (aRootUrl) {
	    aRoot = aRootUrl.path || '/';
	  }

	  // `join(foo, '//www.example.org')`
	  if (aPathUrl && !aPathUrl.scheme) {
	    if (aRootUrl) {
	      aPathUrl.scheme = aRootUrl.scheme;
	    }
	    return urlGenerate(aPathUrl);
	  }

	  if (aPathUrl || aPath.match(dataUrlRegexp)) {
	    return aPath;
	  }

	  // `join('http://', 'www.example.com')`
	  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
	    aRootUrl.host = aPath;
	    return urlGenerate(aRootUrl);
	  }

	  var joined = aPath.charAt(0) === '/'
	    ? aPath
	    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

	  if (aRootUrl) {
	    aRootUrl.path = joined;
	    return urlGenerate(aRootUrl);
	  }
	  return joined;
	}
	exports.join = join;

	exports.isAbsolute = function (aPath) {
	  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
	};

	/**
	 * Make a path relative to a URL or another path.
	 *
	 * @param aRoot The root path or URL.
	 * @param aPath The path or URL to be made relative to aRoot.
	 */
	function relative(aRoot, aPath) {
	  if (aRoot === "") {
	    aRoot = ".";
	  }

	  aRoot = aRoot.replace(/\/$/, '');

	  // It is possible for the path to be above the root. In this case, simply
	  // checking whether the root is a prefix of the path won't work. Instead, we
	  // need to remove components from the root one by one, until either we find
	  // a prefix that fits, or we run out of components to remove.
	  var level = 0;
	  while (aPath.indexOf(aRoot + '/') !== 0) {
	    var index = aRoot.lastIndexOf("/");
	    if (index < 0) {
	      return aPath;
	    }

	    // If the only part of the root that is left is the scheme (i.e. http://,
	    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
	    // have exhausted all components, so the path is not relative to the root.
	    aRoot = aRoot.slice(0, index);
	    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
	      return aPath;
	    }

	    ++level;
	  }

	  // Make sure we add a "../" for each component we removed from the root.
	  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
	}
	exports.relative = relative;

	var supportsNullProto = (function () {
	  var obj = Object.create(null);
	  return !('__proto__' in obj);
	}());

	function identity (s) {
	  return s;
	}

	/**
	 * Because behavior goes wacky when you set `__proto__` on objects, we
	 * have to prefix all the strings in our set with an arbitrary character.
	 *
	 * See https://github.com/mozilla/source-map/pull/31 and
	 * https://github.com/mozilla/source-map/issues/30
	 *
	 * @param String aStr
	 */
	function toSetString(aStr) {
	  if (isProtoString(aStr)) {
	    return '$' + aStr;
	  }

	  return aStr;
	}
	exports.toSetString = supportsNullProto ? identity : toSetString;

	function fromSetString(aStr) {
	  if (isProtoString(aStr)) {
	    return aStr.slice(1);
	  }

	  return aStr;
	}
	exports.fromSetString = supportsNullProto ? identity : fromSetString;

	function isProtoString(s) {
	  if (!s) {
	    return false;
	  }

	  var length = s.length;

	  if (length < 9 /* "__proto__".length */) {
	    return false;
	  }

	  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
	      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
	      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
	      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
	      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
	      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
	      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
	      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
	      s.charCodeAt(length - 9) !== 95  /* '_' */) {
	    return false;
	  }

	  for (var i = length - 10; i >= 0; i--) {
	    if (s.charCodeAt(i) !== 36 /* '$' */) {
	      return false;
	    }
	  }

	  return true;
	}

	/**
	 * Comparator between two mappings where the original positions are compared.
	 *
	 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
	 * mappings with the same original source/line/column, but different generated
	 * line and column the same. Useful when searching for a mapping with a
	 * stubbed out mapping.
	 */
	function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
	  var cmp = mappingA.source - mappingB.source;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalLine - mappingB.originalLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalColumn - mappingB.originalColumn;
	  if (cmp !== 0 || onlyCompareOriginal) {
	    return cmp;
	  }

	  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.generatedLine - mappingB.generatedLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  return mappingA.name - mappingB.name;
	}
	exports.compareByOriginalPositions = compareByOriginalPositions;

	/**
	 * Comparator between two mappings with deflated source and name indices where
	 * the generated positions are compared.
	 *
	 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
	 * mappings with the same generated line and column, but different
	 * source/name/original line and column the same. Useful when searching for a
	 * mapping with a stubbed out mapping.
	 */
	function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
	  var cmp = mappingA.generatedLine - mappingB.generatedLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
	  if (cmp !== 0 || onlyCompareGenerated) {
	    return cmp;
	  }

	  cmp = mappingA.source - mappingB.source;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalLine - mappingB.originalLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalColumn - mappingB.originalColumn;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  return mappingA.name - mappingB.name;
	}
	exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

	function strcmp(aStr1, aStr2) {
	  if (aStr1 === aStr2) {
	    return 0;
	  }

	  if (aStr1 > aStr2) {
	    return 1;
	  }

	  return -1;
	}

	/**
	 * Comparator between two mappings with inflated source and name strings where
	 * the generated positions are compared.
	 */
	function compareByGeneratedPositionsInflated(mappingA, mappingB) {
	  var cmp = mappingA.generatedLine - mappingB.generatedLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = strcmp(mappingA.source, mappingB.source);
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalLine - mappingB.originalLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalColumn - mappingB.originalColumn;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  return strcmp(mappingA.name, mappingB.name);
	}
	exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var util = __webpack_require__(82);
	var has = Object.prototype.hasOwnProperty;

	/**
	 * A data structure which is a combination of an array and a set. Adding a new
	 * member is O(1), testing for membership is O(1), and finding the index of an
	 * element is O(1). Removing elements from the set is not supported. Only
	 * strings are supported for membership.
	 */
	function ArraySet() {
	  this._array = [];
	  this._set = Object.create(null);
	}

	/**
	 * Static method for creating ArraySet instances from an existing array.
	 */
	ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
	  var set = new ArraySet();
	  for (var i = 0, len = aArray.length; i < len; i++) {
	    set.add(aArray[i], aAllowDuplicates);
	  }
	  return set;
	};

	/**
	 * Return how many unique items are in this ArraySet. If duplicates have been
	 * added, than those do not count towards the size.
	 *
	 * @returns Number
	 */
	ArraySet.prototype.size = function ArraySet_size() {
	  return Object.getOwnPropertyNames(this._set).length;
	};

	/**
	 * Add the given string to this set.
	 *
	 * @param String aStr
	 */
	ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
	  var sStr = util.toSetString(aStr);
	  var isDuplicate = has.call(this._set, sStr);
	  var idx = this._array.length;
	  if (!isDuplicate || aAllowDuplicates) {
	    this._array.push(aStr);
	  }
	  if (!isDuplicate) {
	    this._set[sStr] = idx;
	  }
	};

	/**
	 * Is the given string a member of this set?
	 *
	 * @param String aStr
	 */
	ArraySet.prototype.has = function ArraySet_has(aStr) {
	  var sStr = util.toSetString(aStr);
	  return has.call(this._set, sStr);
	};

	/**
	 * What is the index of the given string in the array?
	 *
	 * @param String aStr
	 */
	ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
	  var sStr = util.toSetString(aStr);
	  if (has.call(this._set, sStr)) {
	    return this._set[sStr];
	  }
	  throw new Error('"' + aStr + '" is not in the set.');
	};

	/**
	 * What is the element at the given index?
	 *
	 * @param Number aIdx
	 */
	ArraySet.prototype.at = function ArraySet_at(aIdx) {
	  if (aIdx >= 0 && aIdx < this._array.length) {
	    return this._array[aIdx];
	  }
	  throw new Error('No element indexed by ' + aIdx);
	};

	/**
	 * Returns the array representation of this set (which has the proper indices
	 * indicated by indexOf). Note that this is a copy of the internal array used
	 * for storing the members so that no one can mess with internal state.
	 */
	ArraySet.prototype.toArray = function ArraySet_toArray() {
	  return this._array.slice();
	};

	exports.ArraySet = ArraySet;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2014 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var util = __webpack_require__(82);

	/**
	 * Determine whether mappingB is after mappingA with respect to generated
	 * position.
	 */
	function generatedPositionAfter(mappingA, mappingB) {
	  // Optimized for most common case
	  var lineA = mappingA.generatedLine;
	  var lineB = mappingB.generatedLine;
	  var columnA = mappingA.generatedColumn;
	  var columnB = mappingB.generatedColumn;
	  return lineB > lineA || lineB == lineA && columnB >= columnA ||
	         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
	}

	/**
	 * A data structure to provide a sorted view of accumulated mappings in a
	 * performance conscious manner. It trades a neglibable overhead in general
	 * case for a large speedup in case of mappings being added in order.
	 */
	function MappingList() {
	  this._array = [];
	  this._sorted = true;
	  // Serves as infimum
	  this._last = {generatedLine: -1, generatedColumn: 0};
	}

	/**
	 * Iterate through internal items. This method takes the same arguments that
	 * `Array.prototype.forEach` takes.
	 *
	 * NOTE: The order of the mappings is NOT guaranteed.
	 */
	MappingList.prototype.unsortedForEach =
	  function MappingList_forEach(aCallback, aThisArg) {
	    this._array.forEach(aCallback, aThisArg);
	  };

	/**
	 * Add the given source mapping.
	 *
	 * @param Object aMapping
	 */
	MappingList.prototype.add = function MappingList_add(aMapping) {
	  if (generatedPositionAfter(this._last, aMapping)) {
	    this._last = aMapping;
	    this._array.push(aMapping);
	  } else {
	    this._sorted = false;
	    this._array.push(aMapping);
	  }
	};

	/**
	 * Returns the flat, sorted array of mappings. The mappings are sorted by
	 * generated position.
	 *
	 * WARNING: This method returns internal data without copying, for
	 * performance. The return value must NOT be mutated, and should be treated as
	 * an immutable borrow. If you want to take ownership, you must make your own
	 * copy.
	 */
	MappingList.prototype.toArray = function MappingList_toArray() {
	  if (!this._sorted) {
	    this._array.sort(util.compareByGeneratedPositionsInflated);
	    this._sorted = true;
	  }
	  return this._array;
	};

	exports.MappingList = MappingList;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var util = __webpack_require__(82);
	var binarySearch = __webpack_require__(86);
	var ArraySet = __webpack_require__(83).ArraySet;
	var base64VLQ = __webpack_require__(80);
	var quickSort = __webpack_require__(87).quickSort;

	function SourceMapConsumer(aSourceMap) {
	  var sourceMap = aSourceMap;
	  if (typeof aSourceMap === 'string') {
	    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
	  }

	  return sourceMap.sections != null
	    ? new IndexedSourceMapConsumer(sourceMap)
	    : new BasicSourceMapConsumer(sourceMap);
	}

	SourceMapConsumer.fromSourceMap = function(aSourceMap) {
	  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
	}

	/**
	 * The version of the source mapping spec that we are consuming.
	 */
	SourceMapConsumer.prototype._version = 3;

	// `__generatedMappings` and `__originalMappings` are arrays that hold the
	// parsed mapping coordinates from the source map's "mappings" attribute. They
	// are lazily instantiated, accessed via the `_generatedMappings` and
	// `_originalMappings` getters respectively, and we only parse the mappings
	// and create these arrays once queried for a source location. We jump through
	// these hoops because there can be many thousands of mappings, and parsing
	// them is expensive, so we only want to do it if we must.
	//
	// Each object in the arrays is of the form:
	//
	//     {
	//       generatedLine: The line number in the generated code,
	//       generatedColumn: The column number in the generated code,
	//       source: The path to the original source file that generated this
	//               chunk of code,
	//       originalLine: The line number in the original source that
	//                     corresponds to this chunk of generated code,
	//       originalColumn: The column number in the original source that
	//                       corresponds to this chunk of generated code,
	//       name: The name of the original symbol which generated this chunk of
	//             code.
	//     }
	//
	// All properties except for `generatedLine` and `generatedColumn` can be
	// `null`.
	//
	// `_generatedMappings` is ordered by the generated positions.
	//
	// `_originalMappings` is ordered by the original positions.

	SourceMapConsumer.prototype.__generatedMappings = null;
	Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
	  get: function () {
	    if (!this.__generatedMappings) {
	      this._parseMappings(this._mappings, this.sourceRoot);
	    }

	    return this.__generatedMappings;
	  }
	});

	SourceMapConsumer.prototype.__originalMappings = null;
	Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
	  get: function () {
	    if (!this.__originalMappings) {
	      this._parseMappings(this._mappings, this.sourceRoot);
	    }

	    return this.__originalMappings;
	  }
	});

	SourceMapConsumer.prototype._charIsMappingSeparator =
	  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
	    var c = aStr.charAt(index);
	    return c === ";" || c === ",";
	  };

	/**
	 * Parse the mappings in a string in to a data structure which we can easily
	 * query (the ordered arrays in the `this.__generatedMappings` and
	 * `this.__originalMappings` properties).
	 */
	SourceMapConsumer.prototype._parseMappings =
	  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
	    throw new Error("Subclasses must implement _parseMappings");
	  };

	SourceMapConsumer.GENERATED_ORDER = 1;
	SourceMapConsumer.ORIGINAL_ORDER = 2;

	SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
	SourceMapConsumer.LEAST_UPPER_BOUND = 2;

	/**
	 * Iterate over each mapping between an original source/line/column and a
	 * generated line/column in this source map.
	 *
	 * @param Function aCallback
	 *        The function that is called with each mapping.
	 * @param Object aContext
	 *        Optional. If specified, this object will be the value of `this` every
	 *        time that `aCallback` is called.
	 * @param aOrder
	 *        Either `SourceMapConsumer.GENERATED_ORDER` or
	 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
	 *        iterate over the mappings sorted by the generated file's line/column
	 *        order or the original's source/line/column order, respectively. Defaults to
	 *        `SourceMapConsumer.GENERATED_ORDER`.
	 */
	SourceMapConsumer.prototype.eachMapping =
	  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
	    var context = aContext || null;
	    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

	    var mappings;
	    switch (order) {
	    case SourceMapConsumer.GENERATED_ORDER:
	      mappings = this._generatedMappings;
	      break;
	    case SourceMapConsumer.ORIGINAL_ORDER:
	      mappings = this._originalMappings;
	      break;
	    default:
	      throw new Error("Unknown order of iteration.");
	    }

	    var sourceRoot = this.sourceRoot;
	    mappings.map(function (mapping) {
	      var source = mapping.source === null ? null : this._sources.at(mapping.source);
	      if (source != null && sourceRoot != null) {
	        source = util.join(sourceRoot, source);
	      }
	      return {
	        source: source,
	        generatedLine: mapping.generatedLine,
	        generatedColumn: mapping.generatedColumn,
	        originalLine: mapping.originalLine,
	        originalColumn: mapping.originalColumn,
	        name: mapping.name === null ? null : this._names.at(mapping.name)
	      };
	    }, this).forEach(aCallback, context);
	  };

	/**
	 * Returns all generated line and column information for the original source,
	 * line, and column provided. If no column is provided, returns all mappings
	 * corresponding to a either the line we are searching for or the next
	 * closest line that has any mappings. Otherwise, returns all mappings
	 * corresponding to the given line and either the column we are searching for
	 * or the next closest column that has any offsets.
	 *
	 * The only argument is an object with the following properties:
	 *
	 *   - source: The filename of the original source.
	 *   - line: The line number in the original source.
	 *   - column: Optional. the column number in the original source.
	 *
	 * and an array of objects is returned, each with the following properties:
	 *
	 *   - line: The line number in the generated source, or null.
	 *   - column: The column number in the generated source, or null.
	 */
	SourceMapConsumer.prototype.allGeneratedPositionsFor =
	  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
	    var line = util.getArg(aArgs, 'line');

	    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
	    // returns the index of the closest mapping less than the needle. By
	    // setting needle.originalColumn to 0, we thus find the last mapping for
	    // the given line, provided such a mapping exists.
	    var needle = {
	      source: util.getArg(aArgs, 'source'),
	      originalLine: line,
	      originalColumn: util.getArg(aArgs, 'column', 0)
	    };

	    if (this.sourceRoot != null) {
	      needle.source = util.relative(this.sourceRoot, needle.source);
	    }
	    if (!this._sources.has(needle.source)) {
	      return [];
	    }
	    needle.source = this._sources.indexOf(needle.source);

	    var mappings = [];

	    var index = this._findMapping(needle,
	                                  this._originalMappings,
	                                  "originalLine",
	                                  "originalColumn",
	                                  util.compareByOriginalPositions,
	                                  binarySearch.LEAST_UPPER_BOUND);
	    if (index >= 0) {
	      var mapping = this._originalMappings[index];

	      if (aArgs.column === undefined) {
	        var originalLine = mapping.originalLine;

	        // Iterate until either we run out of mappings, or we run into
	        // a mapping for a different line than the one we found. Since
	        // mappings are sorted, this is guaranteed to find all mappings for
	        // the line we found.
	        while (mapping && mapping.originalLine === originalLine) {
	          mappings.push({
	            line: util.getArg(mapping, 'generatedLine', null),
	            column: util.getArg(mapping, 'generatedColumn', null),
	            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
	          });

	          mapping = this._originalMappings[++index];
	        }
	      } else {
	        var originalColumn = mapping.originalColumn;

	        // Iterate until either we run out of mappings, or we run into
	        // a mapping for a different line than the one we were searching for.
	        // Since mappings are sorted, this is guaranteed to find all mappings for
	        // the line we are searching for.
	        while (mapping &&
	               mapping.originalLine === line &&
	               mapping.originalColumn == originalColumn) {
	          mappings.push({
	            line: util.getArg(mapping, 'generatedLine', null),
	            column: util.getArg(mapping, 'generatedColumn', null),
	            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
	          });

	          mapping = this._originalMappings[++index];
	        }
	      }
	    }

	    return mappings;
	  };

	exports.SourceMapConsumer = SourceMapConsumer;

	/**
	 * A BasicSourceMapConsumer instance represents a parsed source map which we can
	 * query for information about the original file positions by giving it a file
	 * position in the generated source.
	 *
	 * The only parameter is the raw source map (either as a JSON string, or
	 * already parsed to an object). According to the spec, source maps have the
	 * following attributes:
	 *
	 *   - version: Which version of the source map spec this map is following.
	 *   - sources: An array of URLs to the original source files.
	 *   - names: An array of identifiers which can be referrenced by individual mappings.
	 *   - sourceRoot: Optional. The URL root from which all sources are relative.
	 *   - sourcesContent: Optional. An array of contents of the original source files.
	 *   - mappings: A string of base64 VLQs which contain the actual mappings.
	 *   - file: Optional. The generated file this source map is associated with.
	 *
	 * Here is an example source map, taken from the source map spec[0]:
	 *
	 *     {
	 *       version : 3,
	 *       file: "out.js",
	 *       sourceRoot : "",
	 *       sources: ["foo.js", "bar.js"],
	 *       names: ["src", "maps", "are", "fun"],
	 *       mappings: "AA,AB;;ABCDE;"
	 *     }
	 *
	 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
	 */
	function BasicSourceMapConsumer(aSourceMap) {
	  var sourceMap = aSourceMap;
	  if (typeof aSourceMap === 'string') {
	    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
	  }

	  var version = util.getArg(sourceMap, 'version');
	  var sources = util.getArg(sourceMap, 'sources');
	  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
	  // requires the array) to play nice here.
	  var names = util.getArg(sourceMap, 'names', []);
	  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
	  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
	  var mappings = util.getArg(sourceMap, 'mappings');
	  var file = util.getArg(sourceMap, 'file', null);

	  // Once again, Sass deviates from the spec and supplies the version as a
	  // string rather than a number, so we use loose equality checking here.
	  if (version != this._version) {
	    throw new Error('Unsupported version: ' + version);
	  }

	  sources = sources
	    .map(String)
	    // Some source maps produce relative source paths like "./foo.js" instead of
	    // "foo.js".  Normalize these first so that future comparisons will succeed.
	    // See bugzil.la/1090768.
	    .map(util.normalize)
	    // Always ensure that absolute sources are internally stored relative to
	    // the source root, if the source root is absolute. Not doing this would
	    // be particularly problematic when the source root is a prefix of the
	    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
	    .map(function (source) {
	      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
	        ? util.relative(sourceRoot, source)
	        : source;
	    });

	  // Pass `true` below to allow duplicate names and sources. While source maps
	  // are intended to be compressed and deduplicated, the TypeScript compiler
	  // sometimes generates source maps with duplicates in them. See Github issue
	  // #72 and bugzil.la/889492.
	  this._names = ArraySet.fromArray(names.map(String), true);
	  this._sources = ArraySet.fromArray(sources, true);

	  this.sourceRoot = sourceRoot;
	  this.sourcesContent = sourcesContent;
	  this._mappings = mappings;
	  this.file = file;
	}

	BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
	BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

	/**
	 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
	 *
	 * @param SourceMapGenerator aSourceMap
	 *        The source map that will be consumed.
	 * @returns BasicSourceMapConsumer
	 */
	BasicSourceMapConsumer.fromSourceMap =
	  function SourceMapConsumer_fromSourceMap(aSourceMap) {
	    var smc = Object.create(BasicSourceMapConsumer.prototype);

	    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
	    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
	    smc.sourceRoot = aSourceMap._sourceRoot;
	    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
	                                                            smc.sourceRoot);
	    smc.file = aSourceMap._file;

	    // Because we are modifying the entries (by converting string sources and
	    // names to indices into the sources and names ArraySets), we have to make
	    // a copy of the entry or else bad things happen. Shared mutable state
	    // strikes again! See github issue #191.

	    var generatedMappings = aSourceMap._mappings.toArray().slice();
	    var destGeneratedMappings = smc.__generatedMappings = [];
	    var destOriginalMappings = smc.__originalMappings = [];

	    for (var i = 0, length = generatedMappings.length; i < length; i++) {
	      var srcMapping = generatedMappings[i];
	      var destMapping = new Mapping;
	      destMapping.generatedLine = srcMapping.generatedLine;
	      destMapping.generatedColumn = srcMapping.generatedColumn;

	      if (srcMapping.source) {
	        destMapping.source = sources.indexOf(srcMapping.source);
	        destMapping.originalLine = srcMapping.originalLine;
	        destMapping.originalColumn = srcMapping.originalColumn;

	        if (srcMapping.name) {
	          destMapping.name = names.indexOf(srcMapping.name);
	        }

	        destOriginalMappings.push(destMapping);
	      }

	      destGeneratedMappings.push(destMapping);
	    }

	    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

	    return smc;
	  };

	/**
	 * The version of the source mapping spec that we are consuming.
	 */
	BasicSourceMapConsumer.prototype._version = 3;

	/**
	 * The list of original sources.
	 */
	Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
	  get: function () {
	    return this._sources.toArray().map(function (s) {
	      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
	    }, this);
	  }
	});

	/**
	 * Provide the JIT with a nice shape / hidden class.
	 */
	function Mapping() {
	  this.generatedLine = 0;
	  this.generatedColumn = 0;
	  this.source = null;
	  this.originalLine = null;
	  this.originalColumn = null;
	  this.name = null;
	}

	/**
	 * Parse the mappings in a string in to a data structure which we can easily
	 * query (the ordered arrays in the `this.__generatedMappings` and
	 * `this.__originalMappings` properties).
	 */
	BasicSourceMapConsumer.prototype._parseMappings =
	  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
	    var generatedLine = 1;
	    var previousGeneratedColumn = 0;
	    var previousOriginalLine = 0;
	    var previousOriginalColumn = 0;
	    var previousSource = 0;
	    var previousName = 0;
	    var length = aStr.length;
	    var index = 0;
	    var cachedSegments = {};
	    var temp = {};
	    var originalMappings = [];
	    var generatedMappings = [];
	    var mapping, str, segment, end, value;

	    while (index < length) {
	      if (aStr.charAt(index) === ';') {
	        generatedLine++;
	        index++;
	        previousGeneratedColumn = 0;
	      }
	      else if (aStr.charAt(index) === ',') {
	        index++;
	      }
	      else {
	        mapping = new Mapping();
	        mapping.generatedLine = generatedLine;

	        // Because each offset is encoded relative to the previous one,
	        // many segments often have the same encoding. We can exploit this
	        // fact by caching the parsed variable length fields of each segment,
	        // allowing us to avoid a second parse if we encounter the same
	        // segment again.
	        for (end = index; end < length; end++) {
	          if (this._charIsMappingSeparator(aStr, end)) {
	            break;
	          }
	        }
	        str = aStr.slice(index, end);

	        segment = cachedSegments[str];
	        if (segment) {
	          index += str.length;
	        } else {
	          segment = [];
	          while (index < end) {
	            base64VLQ.decode(aStr, index, temp);
	            value = temp.value;
	            index = temp.rest;
	            segment.push(value);
	          }

	          if (segment.length === 2) {
	            throw new Error('Found a source, but no line and column');
	          }

	          if (segment.length === 3) {
	            throw new Error('Found a source and line, but no column');
	          }

	          cachedSegments[str] = segment;
	        }

	        // Generated column.
	        mapping.generatedColumn = previousGeneratedColumn + segment[0];
	        previousGeneratedColumn = mapping.generatedColumn;

	        if (segment.length > 1) {
	          // Original source.
	          mapping.source = previousSource + segment[1];
	          previousSource += segment[1];

	          // Original line.
	          mapping.originalLine = previousOriginalLine + segment[2];
	          previousOriginalLine = mapping.originalLine;
	          // Lines are stored 0-based
	          mapping.originalLine += 1;

	          // Original column.
	          mapping.originalColumn = previousOriginalColumn + segment[3];
	          previousOriginalColumn = mapping.originalColumn;

	          if (segment.length > 4) {
	            // Original name.
	            mapping.name = previousName + segment[4];
	            previousName += segment[4];
	          }
	        }

	        generatedMappings.push(mapping);
	        if (typeof mapping.originalLine === 'number') {
	          originalMappings.push(mapping);
	        }
	      }
	    }

	    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
	    this.__generatedMappings = generatedMappings;

	    quickSort(originalMappings, util.compareByOriginalPositions);
	    this.__originalMappings = originalMappings;
	  };

	/**
	 * Find the mapping that best matches the hypothetical "needle" mapping that
	 * we are searching for in the given "haystack" of mappings.
	 */
	BasicSourceMapConsumer.prototype._findMapping =
	  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
	                                         aColumnName, aComparator, aBias) {
	    // To return the position we are searching for, we must first find the
	    // mapping for the given position and then return the opposite position it
	    // points to. Because the mappings are sorted, we can use binary search to
	    // find the best mapping.

	    if (aNeedle[aLineName] <= 0) {
	      throw new TypeError('Line must be greater than or equal to 1, got '
	                          + aNeedle[aLineName]);
	    }
	    if (aNeedle[aColumnName] < 0) {
	      throw new TypeError('Column must be greater than or equal to 0, got '
	                          + aNeedle[aColumnName]);
	    }

	    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
	  };

	/**
	 * Compute the last column for each generated mapping. The last column is
	 * inclusive.
	 */
	BasicSourceMapConsumer.prototype.computeColumnSpans =
	  function SourceMapConsumer_computeColumnSpans() {
	    for (var index = 0; index < this._generatedMappings.length; ++index) {
	      var mapping = this._generatedMappings[index];

	      // Mappings do not contain a field for the last generated columnt. We
	      // can come up with an optimistic estimate, however, by assuming that
	      // mappings are contiguous (i.e. given two consecutive mappings, the
	      // first mapping ends where the second one starts).
	      if (index + 1 < this._generatedMappings.length) {
	        var nextMapping = this._generatedMappings[index + 1];

	        if (mapping.generatedLine === nextMapping.generatedLine) {
	          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
	          continue;
	        }
	      }

	      // The last mapping for each line spans the entire line.
	      mapping.lastGeneratedColumn = Infinity;
	    }
	  };

	/**
	 * Returns the original source, line, and column information for the generated
	 * source's line and column positions provided. The only argument is an object
	 * with the following properties:
	 *
	 *   - line: The line number in the generated source.
	 *   - column: The column number in the generated source.
	 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
	 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - source: The original source file, or null.
	 *   - line: The line number in the original source, or null.
	 *   - column: The column number in the original source, or null.
	 *   - name: The original identifier, or null.
	 */
	BasicSourceMapConsumer.prototype.originalPositionFor =
	  function SourceMapConsumer_originalPositionFor(aArgs) {
	    var needle = {
	      generatedLine: util.getArg(aArgs, 'line'),
	      generatedColumn: util.getArg(aArgs, 'column')
	    };

	    var index = this._findMapping(
	      needle,
	      this._generatedMappings,
	      "generatedLine",
	      "generatedColumn",
	      util.compareByGeneratedPositionsDeflated,
	      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
	    );

	    if (index >= 0) {
	      var mapping = this._generatedMappings[index];

	      if (mapping.generatedLine === needle.generatedLine) {
	        var source = util.getArg(mapping, 'source', null);
	        if (source !== null) {
	          source = this._sources.at(source);
	          if (this.sourceRoot != null) {
	            source = util.join(this.sourceRoot, source);
	          }
	        }
	        var name = util.getArg(mapping, 'name', null);
	        if (name !== null) {
	          name = this._names.at(name);
	        }
	        return {
	          source: source,
	          line: util.getArg(mapping, 'originalLine', null),
	          column: util.getArg(mapping, 'originalColumn', null),
	          name: name
	        };
	      }
	    }

	    return {
	      source: null,
	      line: null,
	      column: null,
	      name: null
	    };
	  };

	/**
	 * Return true if we have the source content for every source in the source
	 * map, false otherwise.
	 */
	BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
	  function BasicSourceMapConsumer_hasContentsOfAllSources() {
	    if (!this.sourcesContent) {
	      return false;
	    }
	    return this.sourcesContent.length >= this._sources.size() &&
	      !this.sourcesContent.some(function (sc) { return sc == null; });
	  };

	/**
	 * Returns the original source content. The only argument is the url of the
	 * original source file. Returns null if no original source content is
	 * available.
	 */
	BasicSourceMapConsumer.prototype.sourceContentFor =
	  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
	    if (!this.sourcesContent) {
	      return null;
	    }

	    if (this.sourceRoot != null) {
	      aSource = util.relative(this.sourceRoot, aSource);
	    }

	    if (this._sources.has(aSource)) {
	      return this.sourcesContent[this._sources.indexOf(aSource)];
	    }

	    var url;
	    if (this.sourceRoot != null
	        && (url = util.urlParse(this.sourceRoot))) {
	      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
	      // many users. We can help them out when they expect file:// URIs to
	      // behave like it would if they were running a local HTTP server. See
	      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
	      var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
	      if (url.scheme == "file"
	          && this._sources.has(fileUriAbsPath)) {
	        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
	      }

	      if ((!url.path || url.path == "/")
	          && this._sources.has("/" + aSource)) {
	        return this.sourcesContent[this._sources.indexOf("/" + aSource)];
	      }
	    }

	    // This function is used recursively from
	    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
	    // don't want to throw if we can't find the source - we just want to
	    // return null, so we provide a flag to exit gracefully.
	    if (nullOnMissing) {
	      return null;
	    }
	    else {
	      throw new Error('"' + aSource + '" is not in the SourceMap.');
	    }
	  };

	/**
	 * Returns the generated line and column information for the original source,
	 * line, and column positions provided. The only argument is an object with
	 * the following properties:
	 *
	 *   - source: The filename of the original source.
	 *   - line: The line number in the original source.
	 *   - column: The column number in the original source.
	 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
	 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - line: The line number in the generated source, or null.
	 *   - column: The column number in the generated source, or null.
	 */
	BasicSourceMapConsumer.prototype.generatedPositionFor =
	  function SourceMapConsumer_generatedPositionFor(aArgs) {
	    var source = util.getArg(aArgs, 'source');
	    if (this.sourceRoot != null) {
	      source = util.relative(this.sourceRoot, source);
	    }
	    if (!this._sources.has(source)) {
	      return {
	        line: null,
	        column: null,
	        lastColumn: null
	      };
	    }
	    source = this._sources.indexOf(source);

	    var needle = {
	      source: source,
	      originalLine: util.getArg(aArgs, 'line'),
	      originalColumn: util.getArg(aArgs, 'column')
	    };

	    var index = this._findMapping(
	      needle,
	      this._originalMappings,
	      "originalLine",
	      "originalColumn",
	      util.compareByOriginalPositions,
	      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
	    );

	    if (index >= 0) {
	      var mapping = this._originalMappings[index];

	      if (mapping.source === needle.source) {
	        return {
	          line: util.getArg(mapping, 'generatedLine', null),
	          column: util.getArg(mapping, 'generatedColumn', null),
	          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
	        };
	      }
	    }

	    return {
	      line: null,
	      column: null,
	      lastColumn: null
	    };
	  };

	exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

	/**
	 * An IndexedSourceMapConsumer instance represents a parsed source map which
	 * we can query for information. It differs from BasicSourceMapConsumer in
	 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
	 * input.
	 *
	 * The only parameter is a raw source map (either as a JSON string, or already
	 * parsed to an object). According to the spec for indexed source maps, they
	 * have the following attributes:
	 *
	 *   - version: Which version of the source map spec this map is following.
	 *   - file: Optional. The generated file this source map is associated with.
	 *   - sections: A list of section definitions.
	 *
	 * Each value under the "sections" field has two fields:
	 *   - offset: The offset into the original specified at which this section
	 *       begins to apply, defined as an object with a "line" and "column"
	 *       field.
	 *   - map: A source map definition. This source map could also be indexed,
	 *       but doesn't have to be.
	 *
	 * Instead of the "map" field, it's also possible to have a "url" field
	 * specifying a URL to retrieve a source map from, but that's currently
	 * unsupported.
	 *
	 * Here's an example source map, taken from the source map spec[0], but
	 * modified to omit a section which uses the "url" field.
	 *
	 *  {
	 *    version : 3,
	 *    file: "app.js",
	 *    sections: [{
	 *      offset: {line:100, column:10},
	 *      map: {
	 *        version : 3,
	 *        file: "section.js",
	 *        sources: ["foo.js", "bar.js"],
	 *        names: ["src", "maps", "are", "fun"],
	 *        mappings: "AAAA,E;;ABCDE;"
	 *      }
	 *    }],
	 *  }
	 *
	 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
	 */
	function IndexedSourceMapConsumer(aSourceMap) {
	  var sourceMap = aSourceMap;
	  if (typeof aSourceMap === 'string') {
	    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
	  }

	  var version = util.getArg(sourceMap, 'version');
	  var sections = util.getArg(sourceMap, 'sections');

	  if (version != this._version) {
	    throw new Error('Unsupported version: ' + version);
	  }

	  this._sources = new ArraySet();
	  this._names = new ArraySet();

	  var lastOffset = {
	    line: -1,
	    column: 0
	  };
	  this._sections = sections.map(function (s) {
	    if (s.url) {
	      // The url field will require support for asynchronicity.
	      // See https://github.com/mozilla/source-map/issues/16
	      throw new Error('Support for url field in sections not implemented.');
	    }
	    var offset = util.getArg(s, 'offset');
	    var offsetLine = util.getArg(offset, 'line');
	    var offsetColumn = util.getArg(offset, 'column');

	    if (offsetLine < lastOffset.line ||
	        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
	      throw new Error('Section offsets must be ordered and non-overlapping.');
	    }
	    lastOffset = offset;

	    return {
	      generatedOffset: {
	        // The offset fields are 0-based, but we use 1-based indices when
	        // encoding/decoding from VLQ.
	        generatedLine: offsetLine + 1,
	        generatedColumn: offsetColumn + 1
	      },
	      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
	    }
	  });
	}

	IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
	IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

	/**
	 * The version of the source mapping spec that we are consuming.
	 */
	IndexedSourceMapConsumer.prototype._version = 3;

	/**
	 * The list of original sources.
	 */
	Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
	  get: function () {
	    var sources = [];
	    for (var i = 0; i < this._sections.length; i++) {
	      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
	        sources.push(this._sections[i].consumer.sources[j]);
	      }
	    }
	    return sources;
	  }
	});

	/**
	 * Returns the original source, line, and column information for the generated
	 * source's line and column positions provided. The only argument is an object
	 * with the following properties:
	 *
	 *   - line: The line number in the generated source.
	 *   - column: The column number in the generated source.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - source: The original source file, or null.
	 *   - line: The line number in the original source, or null.
	 *   - column: The column number in the original source, or null.
	 *   - name: The original identifier, or null.
	 */
	IndexedSourceMapConsumer.prototype.originalPositionFor =
	  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
	    var needle = {
	      generatedLine: util.getArg(aArgs, 'line'),
	      generatedColumn: util.getArg(aArgs, 'column')
	    };

	    // Find the section containing the generated position we're trying to map
	    // to an original position.
	    var sectionIndex = binarySearch.search(needle, this._sections,
	      function(needle, section) {
	        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
	        if (cmp) {
	          return cmp;
	        }

	        return (needle.generatedColumn -
	                section.generatedOffset.generatedColumn);
	      });
	    var section = this._sections[sectionIndex];

	    if (!section) {
	      return {
	        source: null,
	        line: null,
	        column: null,
	        name: null
	      };
	    }

	    return section.consumer.originalPositionFor({
	      line: needle.generatedLine -
	        (section.generatedOffset.generatedLine - 1),
	      column: needle.generatedColumn -
	        (section.generatedOffset.generatedLine === needle.generatedLine
	         ? section.generatedOffset.generatedColumn - 1
	         : 0),
	      bias: aArgs.bias
	    });
	  };

	/**
	 * Return true if we have the source content for every source in the source
	 * map, false otherwise.
	 */
	IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
	  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
	    return this._sections.every(function (s) {
	      return s.consumer.hasContentsOfAllSources();
	    });
	  };

	/**
	 * Returns the original source content. The only argument is the url of the
	 * original source file. Returns null if no original source content is
	 * available.
	 */
	IndexedSourceMapConsumer.prototype.sourceContentFor =
	  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
	    for (var i = 0; i < this._sections.length; i++) {
	      var section = this._sections[i];

	      var content = section.consumer.sourceContentFor(aSource, true);
	      if (content) {
	        return content;
	      }
	    }
	    if (nullOnMissing) {
	      return null;
	    }
	    else {
	      throw new Error('"' + aSource + '" is not in the SourceMap.');
	    }
	  };

	/**
	 * Returns the generated line and column information for the original source,
	 * line, and column positions provided. The only argument is an object with
	 * the following properties:
	 *
	 *   - source: The filename of the original source.
	 *   - line: The line number in the original source.
	 *   - column: The column number in the original source.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - line: The line number in the generated source, or null.
	 *   - column: The column number in the generated source, or null.
	 */
	IndexedSourceMapConsumer.prototype.generatedPositionFor =
	  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
	    for (var i = 0; i < this._sections.length; i++) {
	      var section = this._sections[i];

	      // Only consider this section if the requested source is in the list of
	      // sources of the consumer.
	      if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
	        continue;
	      }
	      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
	      if (generatedPosition) {
	        var ret = {
	          line: generatedPosition.line +
	            (section.generatedOffset.generatedLine - 1),
	          column: generatedPosition.column +
	            (section.generatedOffset.generatedLine === generatedPosition.line
	             ? section.generatedOffset.generatedColumn - 1
	             : 0)
	        };
	        return ret;
	      }
	    }

	    return {
	      line: null,
	      column: null
	    };
	  };

	/**
	 * Parse the mappings in a string in to a data structure which we can easily
	 * query (the ordered arrays in the `this.__generatedMappings` and
	 * `this.__originalMappings` properties).
	 */
	IndexedSourceMapConsumer.prototype._parseMappings =
	  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
	    this.__generatedMappings = [];
	    this.__originalMappings = [];
	    for (var i = 0; i < this._sections.length; i++) {
	      var section = this._sections[i];
	      var sectionMappings = section.consumer._generatedMappings;
	      for (var j = 0; j < sectionMappings.length; j++) {
	        var mapping = sectionMappings[j];

	        var source = section.consumer._sources.at(mapping.source);
	        if (section.consumer.sourceRoot !== null) {
	          source = util.join(section.consumer.sourceRoot, source);
	        }
	        this._sources.add(source);
	        source = this._sources.indexOf(source);

	        var name = section.consumer._names.at(mapping.name);
	        this._names.add(name);
	        name = this._names.indexOf(name);

	        // The mappings coming from the consumer for the section have
	        // generated positions relative to the start of the section, so we
	        // need to offset them to be relative to the start of the concatenated
	        // generated file.
	        var adjustedMapping = {
	          source: source,
	          generatedLine: mapping.generatedLine +
	            (section.generatedOffset.generatedLine - 1),
	          generatedColumn: mapping.generatedColumn +
	            (section.generatedOffset.generatedLine === mapping.generatedLine
	            ? section.generatedOffset.generatedColumn - 1
	            : 0),
	          originalLine: mapping.originalLine,
	          originalColumn: mapping.originalColumn,
	          name: name
	        };

	        this.__generatedMappings.push(adjustedMapping);
	        if (typeof adjustedMapping.originalLine === 'number') {
	          this.__originalMappings.push(adjustedMapping);
	        }
	      }
	    }

	    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
	    quickSort(this.__originalMappings, util.compareByOriginalPositions);
	  };

	exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ },
/* 86 */
/***/ function(module, exports) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	exports.GREATEST_LOWER_BOUND = 1;
	exports.LEAST_UPPER_BOUND = 2;

	/**
	 * Recursive implementation of binary search.
	 *
	 * @param aLow Indices here and lower do not contain the needle.
	 * @param aHigh Indices here and higher do not contain the needle.
	 * @param aNeedle The element being searched for.
	 * @param aHaystack The non-empty array being searched.
	 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
	 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
	 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 */
	function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
	  // This function terminates when one of the following is true:
	  //
	  //   1. We find the exact element we are looking for.
	  //
	  //   2. We did not find the exact element, but we can return the index of
	  //      the next-closest element.
	  //
	  //   3. We did not find the exact element, and there is no next-closest
	  //      element than the one we are searching for, so we return -1.
	  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
	  var cmp = aCompare(aNeedle, aHaystack[mid], true);
	  if (cmp === 0) {
	    // Found the element we are looking for.
	    return mid;
	  }
	  else if (cmp > 0) {
	    // Our needle is greater than aHaystack[mid].
	    if (aHigh - mid > 1) {
	      // The element is in the upper half.
	      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
	    }

	    // The exact needle element was not found in this haystack. Determine if
	    // we are in termination case (3) or (2) and return the appropriate thing.
	    if (aBias == exports.LEAST_UPPER_BOUND) {
	      return aHigh < aHaystack.length ? aHigh : -1;
	    } else {
	      return mid;
	    }
	  }
	  else {
	    // Our needle is less than aHaystack[mid].
	    if (mid - aLow > 1) {
	      // The element is in the lower half.
	      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
	    }

	    // we are in termination case (3) or (2) and return the appropriate thing.
	    if (aBias == exports.LEAST_UPPER_BOUND) {
	      return mid;
	    } else {
	      return aLow < 0 ? -1 : aLow;
	    }
	  }
	}

	/**
	 * This is an implementation of binary search which will always try and return
	 * the index of the closest element if there is no exact hit. This is because
	 * mappings between original and generated line/col pairs are single points,
	 * and there is an implicit region between each of them, so a miss just means
	 * that you aren't on the very start of a region.
	 *
	 * @param aNeedle The element you are looking for.
	 * @param aHaystack The array that is being searched.
	 * @param aCompare A function which takes the needle and an element in the
	 *     array and returns -1, 0, or 1 depending on whether the needle is less
	 *     than, equal to, or greater than the element, respectively.
	 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
	 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
	 */
	exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
	  if (aHaystack.length === 0) {
	    return -1;
	  }

	  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
	                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
	  if (index < 0) {
	    return -1;
	  }

	  // We have found either the exact element, or the next-closest element than
	  // the one we are searching for. However, there may be more than one such
	  // element. Make sure we always return the smallest of these.
	  while (index - 1 >= 0) {
	    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
	      break;
	    }
	    --index;
	  }

	  return index;
	};


/***/ },
/* 87 */
/***/ function(module, exports) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	// It turns out that some (most?) JavaScript engines don't self-host
	// `Array.prototype.sort`. This makes sense because C++ will likely remain
	// faster than JS when doing raw CPU-intensive sorting. However, when using a
	// custom comparator function, calling back and forth between the VM's C++ and
	// JIT'd JS is rather slow *and* loses JIT type information, resulting in
	// worse generated code for the comparator function than would be optimal. In
	// fact, when sorting with a comparator, these costs outweigh the benefits of
	// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
	// a ~3500ms mean speed-up in `bench/bench.html`.

	/**
	 * Swap the elements indexed by `x` and `y` in the array `ary`.
	 *
	 * @param {Array} ary
	 *        The array.
	 * @param {Number} x
	 *        The index of the first item.
	 * @param {Number} y
	 *        The index of the second item.
	 */
	function swap(ary, x, y) {
	  var temp = ary[x];
	  ary[x] = ary[y];
	  ary[y] = temp;
	}

	/**
	 * Returns a random integer within the range `low .. high` inclusive.
	 *
	 * @param {Number} low
	 *        The lower bound on the range.
	 * @param {Number} high
	 *        The upper bound on the range.
	 */
	function randomIntInRange(low, high) {
	  return Math.round(low + (Math.random() * (high - low)));
	}

	/**
	 * The Quick Sort algorithm.
	 *
	 * @param {Array} ary
	 *        An array to sort.
	 * @param {function} comparator
	 *        Function to use to compare two items.
	 * @param {Number} p
	 *        Start index of the array
	 * @param {Number} r
	 *        End index of the array
	 */
	function doQuickSort(ary, comparator, p, r) {
	  // If our lower bound is less than our upper bound, we (1) partition the
	  // array into two pieces and (2) recurse on each half. If it is not, this is
	  // the empty array and our base case.

	  if (p < r) {
	    // (1) Partitioning.
	    //
	    // The partitioning chooses a pivot between `p` and `r` and moves all
	    // elements that are less than or equal to the pivot to the before it, and
	    // all the elements that are greater than it after it. The effect is that
	    // once partition is done, the pivot is in the exact place it will be when
	    // the array is put in sorted order, and it will not need to be moved
	    // again. This runs in O(n) time.

	    // Always choose a random pivot so that an input array which is reverse
	    // sorted does not cause O(n^2) running time.
	    var pivotIndex = randomIntInRange(p, r);
	    var i = p - 1;

	    swap(ary, pivotIndex, r);
	    var pivot = ary[r];

	    // Immediately after `j` is incremented in this loop, the following hold
	    // true:
	    //
	    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
	    //
	    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
	    for (var j = p; j < r; j++) {
	      if (comparator(ary[j], pivot) <= 0) {
	        i += 1;
	        swap(ary, i, j);
	      }
	    }

	    swap(ary, i + 1, j);
	    var q = i + 1;

	    // (2) Recurse on each half.

	    doQuickSort(ary, comparator, p, q - 1);
	    doQuickSort(ary, comparator, q + 1, r);
	  }
	}

	/**
	 * Sort the given array in-place with the given comparator function.
	 *
	 * @param {Array} ary
	 *        An array to sort.
	 * @param {function} comparator
	 *        Function to use to compare two items.
	 */
	exports.quickSort = function (ary, comparator) {
	  doQuickSort(ary, comparator, 0, ary.length - 1);
	};


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var SourceMapGenerator = __webpack_require__(79).SourceMapGenerator;
	var util = __webpack_require__(82);

	// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
	// operating systems these days (capturing the result).
	var REGEX_NEWLINE = /(\r?\n)/;

	// Newline character code for charCodeAt() comparisons
	var NEWLINE_CODE = 10;

	// Private symbol for identifying `SourceNode`s when multiple versions of
	// the source-map library are loaded. This MUST NOT CHANGE across
	// versions!
	var isSourceNode = "$$$isSourceNode$$$";

	/**
	 * SourceNodes provide a way to abstract over interpolating/concatenating
	 * snippets of generated JavaScript source code while maintaining the line and
	 * column information associated with the original source code.
	 *
	 * @param aLine The original line number.
	 * @param aColumn The original column number.
	 * @param aSource The original source's filename.
	 * @param aChunks Optional. An array of strings which are snippets of
	 *        generated JS, or other SourceNodes.
	 * @param aName The original identifier.
	 */
	function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
	  this.children = [];
	  this.sourceContents = {};
	  this.line = aLine == null ? null : aLine;
	  this.column = aColumn == null ? null : aColumn;
	  this.source = aSource == null ? null : aSource;
	  this.name = aName == null ? null : aName;
	  this[isSourceNode] = true;
	  if (aChunks != null) this.add(aChunks);
	}

	/**
	 * Creates a SourceNode from generated code and a SourceMapConsumer.
	 *
	 * @param aGeneratedCode The generated code
	 * @param aSourceMapConsumer The SourceMap for the generated code
	 * @param aRelativePath Optional. The path that relative sources in the
	 *        SourceMapConsumer should be relative to.
	 */
	SourceNode.fromStringWithSourceMap =
	  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
	    // The SourceNode we want to fill with the generated code
	    // and the SourceMap
	    var node = new SourceNode();

	    // All even indices of this array are one line of the generated code,
	    // while all odd indices are the newlines between two adjacent lines
	    // (since `REGEX_NEWLINE` captures its match).
	    // Processed fragments are removed from this array, by calling `shiftNextLine`.
	    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
	    var shiftNextLine = function() {
	      var lineContents = remainingLines.shift();
	      // The last line of a file might not have a newline.
	      var newLine = remainingLines.shift() || "";
	      return lineContents + newLine;
	    };

	    // We need to remember the position of "remainingLines"
	    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

	    // The generate SourceNodes we need a code range.
	    // To extract it current and last mapping is used.
	    // Here we store the last mapping.
	    var lastMapping = null;

	    aSourceMapConsumer.eachMapping(function (mapping) {
	      if (lastMapping !== null) {
	        // We add the code from "lastMapping" to "mapping":
	        // First check if there is a new line in between.
	        if (lastGeneratedLine < mapping.generatedLine) {
	          // Associate first line with "lastMapping"
	          addMappingWithCode(lastMapping, shiftNextLine());
	          lastGeneratedLine++;
	          lastGeneratedColumn = 0;
	          // The remaining code is added without mapping
	        } else {
	          // There is no new line in between.
	          // Associate the code between "lastGeneratedColumn" and
	          // "mapping.generatedColumn" with "lastMapping"
	          var nextLine = remainingLines[0];
	          var code = nextLine.substr(0, mapping.generatedColumn -
	                                        lastGeneratedColumn);
	          remainingLines[0] = nextLine.substr(mapping.generatedColumn -
	                                              lastGeneratedColumn);
	          lastGeneratedColumn = mapping.generatedColumn;
	          addMappingWithCode(lastMapping, code);
	          // No more remaining code, continue
	          lastMapping = mapping;
	          return;
	        }
	      }
	      // We add the generated code until the first mapping
	      // to the SourceNode without any mapping.
	      // Each line is added as separate string.
	      while (lastGeneratedLine < mapping.generatedLine) {
	        node.add(shiftNextLine());
	        lastGeneratedLine++;
	      }
	      if (lastGeneratedColumn < mapping.generatedColumn) {
	        var nextLine = remainingLines[0];
	        node.add(nextLine.substr(0, mapping.generatedColumn));
	        remainingLines[0] = nextLine.substr(mapping.generatedColumn);
	        lastGeneratedColumn = mapping.generatedColumn;
	      }
	      lastMapping = mapping;
	    }, this);
	    // We have processed all mappings.
	    if (remainingLines.length > 0) {
	      if (lastMapping) {
	        // Associate the remaining code in the current line with "lastMapping"
	        addMappingWithCode(lastMapping, shiftNextLine());
	      }
	      // and add the remaining lines without any mapping
	      node.add(remainingLines.join(""));
	    }

	    // Copy sourcesContent into SourceNode
	    aSourceMapConsumer.sources.forEach(function (sourceFile) {
	      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
	      if (content != null) {
	        if (aRelativePath != null) {
	          sourceFile = util.join(aRelativePath, sourceFile);
	        }
	        node.setSourceContent(sourceFile, content);
	      }
	    });

	    return node;

	    function addMappingWithCode(mapping, code) {
	      if (mapping === null || mapping.source === undefined) {
	        node.add(code);
	      } else {
	        var source = aRelativePath
	          ? util.join(aRelativePath, mapping.source)
	          : mapping.source;
	        node.add(new SourceNode(mapping.originalLine,
	                                mapping.originalColumn,
	                                source,
	                                code,
	                                mapping.name));
	      }
	    }
	  };

	/**
	 * Add a chunk of generated JS to this source node.
	 *
	 * @param aChunk A string snippet of generated JS code, another instance of
	 *        SourceNode, or an array where each member is one of those things.
	 */
	SourceNode.prototype.add = function SourceNode_add(aChunk) {
	  if (Array.isArray(aChunk)) {
	    aChunk.forEach(function (chunk) {
	      this.add(chunk);
	    }, this);
	  }
	  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
	    if (aChunk) {
	      this.children.push(aChunk);
	    }
	  }
	  else {
	    throw new TypeError(
	      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
	    );
	  }
	  return this;
	};

	/**
	 * Add a chunk of generated JS to the beginning of this source node.
	 *
	 * @param aChunk A string snippet of generated JS code, another instance of
	 *        SourceNode, or an array where each member is one of those things.
	 */
	SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
	  if (Array.isArray(aChunk)) {
	    for (var i = aChunk.length-1; i >= 0; i--) {
	      this.prepend(aChunk[i]);
	    }
	  }
	  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
	    this.children.unshift(aChunk);
	  }
	  else {
	    throw new TypeError(
	      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
	    );
	  }
	  return this;
	};

	/**
	 * Walk over the tree of JS snippets in this node and its children. The
	 * walking function is called once for each snippet of JS and is passed that
	 * snippet and the its original associated source's line/column location.
	 *
	 * @param aFn The traversal function.
	 */
	SourceNode.prototype.walk = function SourceNode_walk(aFn) {
	  var chunk;
	  for (var i = 0, len = this.children.length; i < len; i++) {
	    chunk = this.children[i];
	    if (chunk[isSourceNode]) {
	      chunk.walk(aFn);
	    }
	    else {
	      if (chunk !== '') {
	        aFn(chunk, { source: this.source,
	                     line: this.line,
	                     column: this.column,
	                     name: this.name });
	      }
	    }
	  }
	};

	/**
	 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
	 * each of `this.children`.
	 *
	 * @param aSep The separator.
	 */
	SourceNode.prototype.join = function SourceNode_join(aSep) {
	  var newChildren;
	  var i;
	  var len = this.children.length;
	  if (len > 0) {
	    newChildren = [];
	    for (i = 0; i < len-1; i++) {
	      newChildren.push(this.children[i]);
	      newChildren.push(aSep);
	    }
	    newChildren.push(this.children[i]);
	    this.children = newChildren;
	  }
	  return this;
	};

	/**
	 * Call String.prototype.replace on the very right-most source snippet. Useful
	 * for trimming whitespace from the end of a source node, etc.
	 *
	 * @param aPattern The pattern to replace.
	 * @param aReplacement The thing to replace the pattern with.
	 */
	SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
	  var lastChild = this.children[this.children.length - 1];
	  if (lastChild[isSourceNode]) {
	    lastChild.replaceRight(aPattern, aReplacement);
	  }
	  else if (typeof lastChild === 'string') {
	    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
	  }
	  else {
	    this.children.push(''.replace(aPattern, aReplacement));
	  }
	  return this;
	};

	/**
	 * Set the source content for a source file. This will be added to the SourceMapGenerator
	 * in the sourcesContent field.
	 *
	 * @param aSourceFile The filename of the source file
	 * @param aSourceContent The content of the source file
	 */
	SourceNode.prototype.setSourceContent =
	  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
	    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
	  };

	/**
	 * Walk over the tree of SourceNodes. The walking function is called for each
	 * source file content and is passed the filename and source content.
	 *
	 * @param aFn The traversal function.
	 */
	SourceNode.prototype.walkSourceContents =
	  function SourceNode_walkSourceContents(aFn) {
	    for (var i = 0, len = this.children.length; i < len; i++) {
	      if (this.children[i][isSourceNode]) {
	        this.children[i].walkSourceContents(aFn);
	      }
	    }

	    var sources = Object.keys(this.sourceContents);
	    for (var i = 0, len = sources.length; i < len; i++) {
	      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
	    }
	  };

	/**
	 * Return the string representation of this source node. Walks over the tree
	 * and concatenates all the various snippets together to one string.
	 */
	SourceNode.prototype.toString = function SourceNode_toString() {
	  var str = "";
	  this.walk(function (chunk) {
	    str += chunk;
	  });
	  return str;
	};

	/**
	 * Returns the string representation of this source node along with a source
	 * map.
	 */
	SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
	  var generated = {
	    code: "",
	    line: 1,
	    column: 0
	  };
	  var map = new SourceMapGenerator(aArgs);
	  var sourceMappingActive = false;
	  var lastOriginalSource = null;
	  var lastOriginalLine = null;
	  var lastOriginalColumn = null;
	  var lastOriginalName = null;
	  this.walk(function (chunk, original) {
	    generated.code += chunk;
	    if (original.source !== null
	        && original.line !== null
	        && original.column !== null) {
	      if(lastOriginalSource !== original.source
	         || lastOriginalLine !== original.line
	         || lastOriginalColumn !== original.column
	         || lastOriginalName !== original.name) {
	        map.addMapping({
	          source: original.source,
	          original: {
	            line: original.line,
	            column: original.column
	          },
	          generated: {
	            line: generated.line,
	            column: generated.column
	          },
	          name: original.name
	        });
	      }
	      lastOriginalSource = original.source;
	      lastOriginalLine = original.line;
	      lastOriginalColumn = original.column;
	      lastOriginalName = original.name;
	      sourceMappingActive = true;
	    } else if (sourceMappingActive) {
	      map.addMapping({
	        generated: {
	          line: generated.line,
	          column: generated.column
	        }
	      });
	      lastOriginalSource = null;
	      sourceMappingActive = false;
	    }
	    for (var idx = 0, length = chunk.length; idx < length; idx++) {
	      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
	        generated.line++;
	        generated.column = 0;
	        // Mappings end at eol
	        if (idx + 1 === length) {
	          lastOriginalSource = null;
	          sourceMappingActive = false;
	        } else if (sourceMappingActive) {
	          map.addMapping({
	            source: original.source,
	            original: {
	              line: original.line,
	              column: original.column
	            },
	            generated: {
	              line: generated.line,
	              column: generated.column
	            },
	            name: original.name
	          });
	        }
	      } else {
	        generated.column++;
	      }
	    }
	  });
	  this.walkSourceContents(function (sourceFile, sourceContent) {
	    map.setSourceContent(sourceFile, sourceContent);
	  });

	  return { code: generated.code, map: map };
	};

	exports.SourceNode = SourceNode;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _warning = __webpack_require__(90);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @typedef  {object} Message
	 * @property {string} type   - message type
	 * @property {string} plugin - source PostCSS plugin name
	 */

	/**
	 * Provides the result of the PostCSS transformations.
	 *
	 * A Result instance is returned by {@link LazyResult#then}
	 * or {@link Root#toResult} methods.
	 *
	 * @example
	 * postcss([cssnext]).process(css).then(function (result) {
	 *    console.log(result.css);
	 * });
	 *
	 * @example
	 * var result2 = postcss.parse(css).toResult();
	 */
	var Result = function () {

	  /**
	   * @param {Processor} processor - processor used for this transformation.
	   * @param {Root}      root      - Root node after all transformations.
	   * @param {processOptions} opts - options from the {@link Processor#process}
	   *                                or {@link Root#toResult}
	   */
	  function Result(processor, root, opts) {
	    _classCallCheck(this, Result);

	    /**
	     * @member {Processor} - The Processor instance used
	     *                       for this transformation.
	     *
	     * @example
	     * for ( let plugin of result.processor.plugins) {
	     *   if ( plugin.postcssPlugin === 'postcss-bad' ) {
	     *     throw 'postcss-good is incompatible with postcss-bad';
	     *   }
	     * });
	     */
	    this.processor = processor;
	    /**
	     * @member {Message[]} - Contains messages from plugins
	     *                       (e.g., warnings or custom messages).
	     *                       Each message should have type
	     *                       and plugin properties.
	     *
	     * @example
	     * postcss.plugin('postcss-min-browser', () => {
	     *   return (root, result) => {
	     *     var browsers = detectMinBrowsersByCanIUse(root);
	     *     result.messages.push({
	     *       type:    'min-browser',
	     *       plugin:  'postcss-min-browser',
	     *       browsers: browsers
	     *     });
	     *   };
	     * });
	     */
	    this.messages = [];
	    /**
	     * @member {Root} - Root node after all transformations.
	     *
	     * @example
	     * root.toResult().root == root;
	     */
	    this.root = root;
	    /**
	     * @member {processOptions} - Options from the {@link Processor#process}
	     *                            or {@link Root#toResult} call
	     *                            that produced this Result instance.
	     *
	     * @example
	     * root.toResult(opts).opts == opts;
	     */
	    this.opts = opts;
	    /**
	     * @member {string} - A CSS string representing of {@link Result#root}.
	     *
	     * @example
	     * postcss.parse('a{}').toResult().css //=> "a{}"
	     */
	    this.css = undefined;
	    /**
	     * @member {SourceMapGenerator} - An instance of `SourceMapGenerator`
	     *                                class from the `source-map` library,
	     *                                representing changes
	     *                                to the {@link Result#root} instance.
	     *
	     * @example
	     * result.map.toJSON() //=> { version: 3, file: 'a.css', … }
	     *
	     * @example
	     * if ( result.map ) {
	     *   fs.writeFileSync(result.opts.to + '.map', result.map.toString());
	     * }
	     */
	    this.map = undefined;
	  }

	  /**
	   * Returns for @{link Result#css} content.
	   *
	   * @example
	   * result + '' === result.css
	   *
	   * @return {string} string representing of {@link Result#root}
	   */


	  _createClass(Result, [{
	    key: 'toString',
	    value: function toString() {
	      return this.css;
	    }

	    /**
	     * Creates an instance of {@link Warning} and adds it
	     * to {@link Result#messages}.
	     *
	     * @param {string} text        - warning message
	     * @param {Object} [opts]      - warning options
	     * @param {Node}   opts.node   - CSS node that caused the warning
	     * @param {string} opts.word   - word in CSS source that caused the warning
	     * @param {number} opts.index  - index in CSS node string that caused
	     *                               the warning
	     * @param {string} opts.plugin - name of the plugin that created
	     *                               this warning. {@link Result#warn} fills
	     *                               this property automatically.
	     *
	     * @return {Warning} created warning
	     */

	  }, {
	    key: 'warn',
	    value: function warn(text) {
	      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      if (!opts.plugin) {
	        if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
	          opts.plugin = this.lastPlugin.postcssPlugin;
	        }
	      }

	      var warning = new _warning2.default(text, opts);
	      this.messages.push(warning);

	      return warning;
	    }

	    /**
	     * Returns warnings from plugins. Filters {@link Warning} instances
	     * from {@link Result#messages}.
	     *
	     * @example
	     * result.warnings().forEach(warn => {
	     *   console.warn(warn.toString());
	     * });
	     *
	     * @return {Warning[]} warnings from plugins
	     */

	  }, {
	    key: 'warnings',
	    value: function warnings() {
	      return this.messages.filter(function (i) {
	        return i.type === 'warning';
	      });
	    }

	    /**
	     * An alias for the {@link Result#css} property.
	     * Use it with syntaxes that generate non-CSS output.
	     * @type {string}
	     *
	     * @example
	     * result.css === result.content;
	     */

	  }, {
	    key: 'content',
	    get: function get() {
	      return this.css;
	    }
	  }]);

	  return Result;
	}();

	exports.default = Result;
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Represents a plugin’s warning. It can be created using {@link Node#warn}.
	 *
	 * @example
	 * if ( decl.important ) {
	 *     decl.warn(result, 'Avoid !important', { word: '!important' });
	 * }
	 */
	var Warning = function () {

	  /**
	   * @param {string} text        - warning message
	   * @param {Object} [opts]      - warning options
	   * @param {Node}   opts.node   - CSS node that caused the warning
	   * @param {string} opts.word   - word in CSS source that caused the warning
	   * @param {number} opts.index  - index in CSS node string that caused
	   *                               the warning
	   * @param {string} opts.plugin - name of the plugin that created
	   *                               this warning. {@link Result#warn} fills
	   *                               this property automatically.
	   */
	  function Warning(text) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Warning);

	    /**
	     * @member {string} - Type to filter warnings from
	     *                    {@link Result#messages}. Always equal
	     *                    to `"warning"`.
	     *
	     * @example
	     * const nonWarning = result.messages.filter(i => i.type !== 'warning')
	     */
	    this.type = 'warning';
	    /**
	     * @member {string} - The warning message.
	     *
	     * @example
	     * warning.text //=> 'Try to avoid !important'
	     */
	    this.text = text;

	    if (opts.node && opts.node.source) {
	      var pos = opts.node.positionBy(opts);
	      /**
	       * @member {number} - Line in the input file
	       *                    with this warning’s source
	       *
	       * @example
	       * warning.line //=> 5
	       */
	      this.line = pos.line;
	      /**
	       * @member {number} - Column in the input file
	       *                    with this warning’s source.
	       *
	       * @example
	       * warning.column //=> 6
	       */
	      this.column = pos.column;
	    }

	    for (var opt in opts) {
	      this[opt] = opts[opt];
	    }
	  }

	  /**
	   * Returns a warning position and message.
	   *
	   * @example
	   * warning.toString() //=> 'postcss-lint:a.css:10:14: Avoid !important'
	   *
	   * @return {string} warning position and message
	   */


	  _createClass(Warning, [{
	    key: 'toString',
	    value: function toString() {
	      if (this.node) {
	        return this.node.error(this.text, {
	          plugin: this.plugin,
	          index: this.index,
	          word: this.word
	        }).message;
	      } else if (this.plugin) {
	        return this.plugin + ': ' + this.text;
	      } else {
	        return this.text;
	      }
	    }

	    /**
	     * @memberof Warning#
	     * @member {string} plugin - The name of the plugin that created
	     *                           it will fill this property automatically.
	     *                           this warning. When you call {@link Node#warn}
	     *
	     * @example
	     * warning.plugin //=> 'postcss-important'
	     */

	    /**
	     * @memberof Warning#
	     * @member {Node} node - Contains the CSS node that caused the warning.
	     *
	     * @example
	     * warning.node.toString() //=> 'color: white !important'
	     */

	  }]);

	  return Warning;
	}();

	exports.default = Warning;
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lazyResult = __webpack_require__(71);

	var _lazyResult2 = _interopRequireDefault(_lazyResult);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @callback builder
	 * @param {string} part          - part of generated CSS connected to this node
	 * @param {Node}   node          - AST node
	 * @param {"start"|"end"} [type] - node’s part type
	 */

	/**
	 * @callback parser
	 *
	 * @param {string|toString} css   - string with input CSS or any object
	 *                                  with toString() method, like a Buffer
	 * @param {processOptions} [opts] - options with only `from` and `map` keys
	 *
	 * @return {Root} PostCSS AST
	 */

	/**
	 * @callback stringifier
	 *
	 * @param {Node} node       - start node for stringifing. Usually {@link Root}.
	 * @param {builder} builder - function to concatenate CSS from node’s parts
	 *                            or generate string and source map
	 *
	 * @return {void}
	 */

	/**
	 * @typedef {object} syntax
	 * @property {parser} parse          - function to generate AST by string
	 * @property {stringifier} stringify - function to generate string by AST
	 */

	/**
	 * @typedef {object} toString
	 * @property {function} toString
	 */

	/**
	 * @callback pluginFunction
	 * @param {Root} root     - parsed input CSS
	 * @param {Result} result - result to set warnings or check other plugins
	 */

	/**
	 * @typedef {object} Plugin
	 * @property {function} postcss - PostCSS plugin function
	 */

	/**
	 * @typedef {object} processOptions
	 * @property {string} from             - the path of the CSS source file.
	 *                                       You should always set `from`,
	 *                                       because it is used in source map
	 *                                       generation and syntax error messages.
	 * @property {string} to               - the path where you’ll put the output
	 *                                       CSS file. You should always set `to`
	 *                                       to generate correct source maps.
	 * @property {parser} parser           - function to generate AST by string
	 * @property {stringifier} stringifier - class to generate string by AST
	 * @property {syntax} syntax           - object with `parse` and `stringify`
	 * @property {object} map              - source map options
	 * @property {boolean} map.inline                    - does source map should
	 *                                                     be embedded in the output
	 *                                                     CSS as a base64-encoded
	 *                                                     comment
	 * @property {string|object|false|function} map.prev - source map content
	 *                                                     from a previous
	 *                                                     processing step
	 *                                                     (for example, Sass).
	 *                                                     PostCSS will try to find
	 *                                                     previous map
	 *                                                     automatically, so you
	 *                                                     could disable it by
	 *                                                     `false` value.
	 * @property {boolean} map.sourcesContent            - does PostCSS should set
	 *                                                     the origin content to map
	 * @property {string|false} map.annotation           - does PostCSS should set
	 *                                                     annotation comment to map
	 * @property {string} map.from                       - override `from` in map’s
	 *                                                     `sources`
	 */

	/**
	 * Contains plugins to process CSS. Create one `Processor` instance,
	 * initialize its plugins, and then use that instance on numerous CSS files.
	 *
	 * @example
	 * const processor = postcss([autoprefixer, precss]);
	 * processor.process(css1).then(result => console.log(result.css));
	 * processor.process(css2).then(result => console.log(result.css));
	 */
	var Processor = function () {

	  /**
	   * @param {Array.<Plugin|pluginFunction>|Processor} plugins - PostCSS
	   *        plugins. See {@link Processor#use} for plugin format.
	   */
	  function Processor() {
	    var plugins = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	    _classCallCheck(this, Processor);

	    /**
	     * @member {string} - Current PostCSS version.
	     *
	     * @example
	     * if ( result.processor.version.split('.')[0] !== '5' ) {
	     *   throw new Error('This plugin works only with PostCSS 5');
	     * }
	     */
	    this.version = '5.2.0';
	    /**
	     * @member {pluginFunction[]} - Plugins added to this processor.
	     *
	     * @example
	     * const processor = postcss([autoprefixer, precss]);
	     * processor.plugins.length //=> 2
	     */
	    this.plugins = this.normalize(plugins);
	  }

	  /**
	   * Adds a plugin to be used as a CSS processor.
	   *
	   * PostCSS plugin can be in 4 formats:
	   * * A plugin created by {@link postcss.plugin} method.
	   * * A function. PostCSS will pass the function a @{link Root}
	   *   as the first argument and current {@link Result} instance
	   *   as the second.
	   * * An object with a `postcss` method. PostCSS will use that method
	   *   as described in #2.
	   * * Another {@link Processor} instance. PostCSS will copy plugins
	   *   from that instance into this one.
	   *
	   * Plugins can also be added by passing them as arguments when creating
	   * a `postcss` instance (see [`postcss(plugins)`]).
	   *
	   * Asynchronous plugins should return a `Promise` instance.
	   *
	   * @param {Plugin|pluginFunction|Processor} plugin - PostCSS plugin
	   *                                                   or {@link Processor}
	   *                                                   with plugins
	   *
	   * @example
	   * const processor = postcss()
	   *   .use(autoprefixer)
	   *   .use(precss);
	   *
	   * @return {Processes} current processor to make methods chain
	   */


	  _createClass(Processor, [{
	    key: 'use',
	    value: function use(plugin) {
	      this.plugins = this.plugins.concat(this.normalize([plugin]));
	      return this;
	    }

	    /**
	     * Parses source CSS and returns a {@link LazyResult} Promise proxy.
	     * Because some plugins can be asynchronous it doesn’t make
	     * any transformations. Transformations will be applied
	     * in the {@link LazyResult} methods.
	     *
	     * @param {string|toString|Result} css - String with input CSS or
	     *                                       any object with a `toString()`
	     *                                       method, like a Buffer.
	     *                                       Optionally, send a {@link Result}
	     *                                       instance and the processor will
	     *                                       take the {@link Root} from it.
	     * @param {processOptions} [opts]      - options
	     *
	     * @return {LazyResult} Promise proxy
	     *
	     * @example
	     * processor.process(css, { from: 'a.css', to: 'a.out.css' })
	     *   .then(result => {
	     *      console.log(result.css);
	     *   });
	     */

	  }, {
	    key: 'process',
	    value: function process(css) {
	      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      return new _lazyResult2.default(this, css, opts);
	    }
	  }, {
	    key: 'normalize',
	    value: function normalize(plugins) {
	      var normalized = [];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var i = _step.value;

	          if (i.postcss) i = i.postcss;

	          if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && Array.isArray(i.plugins)) {
	            normalized = normalized.concat(i.plugins);
	          } else if (typeof i === 'function') {
	            normalized.push(i);
	          } else {
	            throw new Error(i + ' is not a PostCSS plugin');
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      return normalized;
	    }
	  }]);

	  return Processor;
	}();

	exports.default = Processor;
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function selectors(parent, node) {
	  var result = [];
	  parent.selectors.forEach(function (i) {
	    node.selectors.forEach(function (j) {
	      if (j.indexOf('&') === -1) {
	        result.push(i + ' ' + j);
	      } else {
	        result.push(j.replace(/&/g, i));
	      }
	    });
	  });
	  return result;
	}

	function pickComment(comment, after) {
	  if (comment && comment.type === 'comment') {
	    return comment.moveAfter(after);
	  } else {
	    return after;
	  }
	}

	function atruleChilds(rule, atrule) {
	  var children = [];
	  atrule.each(function (child) {
	    if (child.type === 'comment') {
	      children.push(child);
	    }
	    if (child.type === 'decl') {
	      children.push(child);
	    } else if (child.type === 'rule') {
	      child.selectors = selectors(rule, child);
	    } else if (child.type === 'atrule') {
	      atruleChilds(rule, child);
	    }
	  });
	  if (children.length) {
	    var clone = rule.clone({ nodes: [] });
	    for (var i = 0; i < children.length; i++) {
	      children[i].moveTo(clone);
	    }atrule.prepend(clone);
	  }
	}

	function processRule(rule, bubble) {
	  var unwrapped = false;
	  var after = rule;
	  rule.each(function (child) {
	    if (child.type === 'rule') {
	      unwrapped = true;
	      child.selectors = selectors(rule, child);
	      after = pickComment(child.prev(), after);
	      after = child.moveAfter(after);
	    } else if (child.type === 'atrule') {
	      if (bubble.indexOf(child.name) !== -1) {
	        unwrapped = true;
	        atruleChilds(rule, child);
	        after = pickComment(child.prev(), after);
	        after = child.moveAfter(after);
	      }
	    }
	  });
	  if (unwrapped) {
	    rule.raws.semicolon = true;
	    if (rule.nodes.length === 0) rule.remove();
	  }
	}

	var bubble = ['media', 'supports', 'document'];

	var process = function process(node) {
	  node.each(function (child) {
	    if (child.type === 'rule') {
	      processRule(child, bubble);
	    } else if (child.type === 'atrule') {
	      process(child);
	    }
	  });
	};

	exports.default = process;
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/* eslint-disable max-len */
	/*
	 * From: http://www.unicode.org/Public/emoji/1.0//emoji-data.txt
	 *
	 * Copy first column
	 * const codes = `PASTE HERE`
	 * const ints = codes.split("\n").map(c => parseInt(c, 16)).filter(int => int >= 8986)
	 * const ranges = ints.sort((a,b) => a - b).reduce((arr, code) => (code - (arr[arr.length - 1] || {}).end <= 1) ? (arr[arr.length-1].end = code) && arr : arr.concat({start:code, end:code}), [])
	 * ranges.map(range => range.start === range.end ? range.start.toString(16) : `${range.start.toString(16)}..${range.end.toString(16)}`).join(",").toUpperCase()
	 * */

	var emojiCodes = '231A..231B,2328,23CF,23E9..23F3,23F8..23FA,24C2,25AA..25AB,25B6,25C0,25FB..25FE,2600..2604,260E,2611,2614..2615,2618,261D,2620,2622..2623,2626,262A,262E..262F,2638..263A,2648..2653,2660,2663,2665..2666,2668,267B,267F,2692..2694,2696..2697,2699,269B..269C,26A0..26A1,26AA..26AB,26B0..26B1,26BD..26BE,26C4..26C5,26C8,26CE..26CF,26D1,26D3..26D4,26E9..26EA,26F0..26F5,26F7..26FA,26FD,2702,2705,2708..270D,270F,2712,2714,2716,271D,2721,2728,2733..2734,2744,2747,274C,274E,2753..2755,2757,2763..2764,2795..2797,27A1,27B0,27BF,2934..2935,2B05..2B07,2B1B..2B1C,2B50,2B55,3030,303D,3297,3299,1F004,1F0CF,1F170..1F171,1F17E..1F17F,1F18E,1F191..1F19A,1F1E6..1F1FF,1F201..1F202,1F21A,1F22F,1F232..1F23A,1F250..1F251,1F300..1F321,1F324..1F393,1F396..1F397,1F399..1F39B,1F39E..1F3F0,1F3F3..1F3F5,1F3F7..1F4FD,1F4FF..1F53D,1F549..1F54E,1F550..1F567,1F56F..1F570,1F573..1F579,1F587,1F58A..1F58D,1F590,1F595..1F596,1F5A5,1F5A8,1F5B1..1F5B2,1F5BC,1F5C2..1F5C4,1F5D1..1F5D3,1F5DC..1F5DE,1F5E1,1F5E3,1F5EF,1F5F3,1F5FA..1F64F,1F680..1F6C5,1F6CB..1F6D0,1F6E0..1F6E5,1F6E9,1F6EB..1F6EC,1F6F0,1F6F3,1F910..1F918,1F980..1F984,1F9C0';
	var emojiList = emojiCodes.split(',').reduce(function (arr, range) {
	  var matches = /(\w+)\.\.(\w+)/.exec(range);
	  if (matches) {
	    var _ret = function () {
	      var from = parseInt(matches[1], 16);
	      var to = parseInt(matches[2], 16);
	      return {
	        v: arr.concat.apply(arr, _toConsumableArray(Array(to - from + 1).fill().map(function (_, i) {
	          return from + i;
	        })))
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  } else {
	    return arr.concat(parseInt(range, 16));
	  }
	}, []);

	/* Some high number, usually 9-digit base-10. Map it to base-😎 */
	var toEmoji = function toEmoji(code) {
	  var lastDigit = String.fromCodePoint(emojiList[code % emojiList.length]);
	  return code > emojiList.length ? '' + toEmoji(Math.floor(code / emojiList.length)) + String.fromCodePoint(0x2006) + lastDigit : lastDigit;
	};

	exports.default = toEmoji;
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HTMLDOMPropertyConfig = __webpack_require__(95);

	var _HTMLDOMPropertyConfig2 = _interopRequireDefault(_HTMLDOMPropertyConfig);

	var _SVGDOMPropertyConfig = __webpack_require__(97);

	var _SVGDOMPropertyConfig2 = _interopRequireDefault(_SVGDOMPropertyConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* Logic copied from ReactDOMUnknownPropertyHook */
	/* Trying to avoid the unknown-prop errors on styled components
	 by filtering by React's attribute whitelist.
	 */

	var reactProps = {
	  children: true,
	  dangerouslySetInnerHTML: true,
	  key: true,
	  ref: true,
	  autoFocus: true,
	  defaultValue: true,
	  valueLink: true,
	  defaultChecked: true,
	  checkedLink: true,
	  innerHTML: true,
	  suppressContentEditableWarning: true,
	  onFocusIn: true,
	  onFocusOut: true,
	  className: true
	};

	var hasOwnProperty = {}.hasOwnProperty;

	exports.default = function (name) {
	  return hasOwnProperty.call(_HTMLDOMPropertyConfig2.default.Properties, name) || hasOwnProperty.call(_SVGDOMPropertyConfig2.default.Properties, name) || _HTMLDOMPropertyConfig2.default.isCustomAttribute(name.toLowerCase()) || hasOwnProperty.call(reactProps, name);
	};

	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule HTMLDOMPropertyConfig
	 */

	'use strict';

	var DOMProperty = __webpack_require__(96);

	var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

	var HTMLDOMPropertyConfig = {
	  isCustomAttribute: RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$')),
	  Properties: {
	    /**
	     * Standard Properties
	     */
	    accept: 0,
	    acceptCharset: 0,
	    accessKey: 0,
	    action: 0,
	    allowFullScreen: HAS_BOOLEAN_VALUE,
	    allowTransparency: 0,
	    alt: 0,
	    // specifies target context for links with `preload` type
	    as: 0,
	    async: HAS_BOOLEAN_VALUE,
	    autoComplete: 0,
	    // autoFocus is polyfilled/normalized by AutoFocusUtils
	    // autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    capture: HAS_BOOLEAN_VALUE,
	    cellPadding: 0,
	    cellSpacing: 0,
	    charSet: 0,
	    challenge: 0,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    cite: 0,
	    classID: 0,
	    className: 0,
	    cols: HAS_POSITIVE_NUMERIC_VALUE,
	    colSpan: 0,
	    content: 0,
	    contentEditable: 0,
	    contextMenu: 0,
	    controls: HAS_BOOLEAN_VALUE,
	    coords: 0,
	    crossOrigin: 0,
	    data: 0, // For `<object />` acts as `src`.
	    dateTime: 0,
	    'default': HAS_BOOLEAN_VALUE,
	    defer: HAS_BOOLEAN_VALUE,
	    dir: 0,
	    disabled: HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: 0,
	    encType: 0,
	    form: 0,
	    formAction: 0,
	    formEncType: 0,
	    formMethod: 0,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    formTarget: 0,
	    frameBorder: 0,
	    headers: 0,
	    height: 0,
	    hidden: HAS_BOOLEAN_VALUE,
	    high: 0,
	    href: 0,
	    hrefLang: 0,
	    htmlFor: 0,
	    httpEquiv: 0,
	    icon: 0,
	    id: 0,
	    inputMode: 0,
	    integrity: 0,
	    is: 0,
	    keyParams: 0,
	    keyType: 0,
	    kind: 0,
	    label: 0,
	    lang: 0,
	    list: 0,
	    loop: HAS_BOOLEAN_VALUE,
	    low: 0,
	    manifest: 0,
	    marginHeight: 0,
	    marginWidth: 0,
	    max: 0,
	    maxLength: 0,
	    media: 0,
	    mediaGroup: 0,
	    method: 0,
	    min: 0,
	    minLength: 0,
	    // Caution; `option.selected` is not updated if `select.multiple` is
	    // disabled with `removeAttribute`.
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    name: 0,
	    nonce: 0,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: HAS_BOOLEAN_VALUE,
	    optimum: 0,
	    pattern: 0,
	    placeholder: 0,
	    playsInline: HAS_BOOLEAN_VALUE,
	    poster: 0,
	    preload: 0,
	    profile: 0,
	    radioGroup: 0,
	    readOnly: HAS_BOOLEAN_VALUE,
	    referrerPolicy: 0,
	    rel: 0,
	    required: HAS_BOOLEAN_VALUE,
	    reversed: HAS_BOOLEAN_VALUE,
	    role: 0,
	    rows: HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: HAS_NUMERIC_VALUE,
	    sandbox: 0,
	    scope: 0,
	    scoped: HAS_BOOLEAN_VALUE,
	    scrolling: 0,
	    seamless: HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    shape: 0,
	    size: HAS_POSITIVE_NUMERIC_VALUE,
	    sizes: 0,
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: 0,
	    src: 0,
	    srcDoc: 0,
	    srcLang: 0,
	    srcSet: 0,
	    start: HAS_NUMERIC_VALUE,
	    step: 0,
	    style: 0,
	    summary: 0,
	    tabIndex: 0,
	    target: 0,
	    title: 0,
	    // Setting .type throws on non-<input> tags
	    type: 0,
	    useMap: 0,
	    value: 0,
	    width: 0,
	    wmode: 0,
	    wrap: 0,

	    /**
	     * RDFa Properties
	     */
	    about: 0,
	    datatype: 0,
	    inlist: 0,
	    prefix: 0,
	    // property is also supported for OpenGraph in meta tags.
	    property: 0,
	    resource: 0,
	    'typeof': 0,
	    vocab: 0,

	    /**
	     * Non-standard Properties
	     */
	    // autoCapitalize and autoCorrect are supported in Mobile Safari for
	    // keyboard hints.
	    autoCapitalize: 0,
	    autoCorrect: 0,
	    // autoSave allows WebKit/Blink to persist values of input fields on page reloads
	    autoSave: 0,
	    // color is for Safari mask-icon link
	    color: 0,
	    // itemProp, itemScope, itemType are for
	    // Microdata support. See http://schema.org/docs/gs.html
	    itemProp: 0,
	    itemScope: HAS_BOOLEAN_VALUE,
	    itemType: 0,
	    // itemID and itemRef are for Microdata support as well but
	    // only specified in the WHATWG spec document. See
	    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	    itemID: 0,
	    itemRef: 0,
	    // results show looking glass icon and recent searches on input
	    // search fields in WebKit/Blink
	    results: 0,
	    // IE-only attribute that specifies security restrictions on an iframe
	    // as an alternative to the sandbox attribute on IE<10
	    security: 0,
	    // IE-only attribute that controls focus behavior
	    unselectable: 0
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMPropertyNames: {}
	};

	module.exports = HTMLDOMPropertyConfig;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMProperty
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(19);

	var invariant = __webpack_require__(20);

	function checkMask(value, bitmask) {
	  return (value & bitmask) === bitmask;
	}

	var DOMPropertyInjection = {
	  /**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
	  MUST_USE_PROPERTY: 0x1,
	  HAS_BOOLEAN_VALUE: 0x4,
	  HAS_NUMERIC_VALUE: 0x8,
	  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,

	  /**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * isCustomAttribute: function that given an attribute name will return true
	   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
	   * attributes where it's impossible to enumerate all of the possible
	   * attribute names,
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
	   * attribute namespace URL. (Attribute names not specified use no namespace.)
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
	  injectDOMPropertyConfig: function (domPropertyConfig) {
	    var Injection = DOMPropertyInjection;
	    var Properties = domPropertyConfig.Properties || {};
	    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
	    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
	    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

	    if (domPropertyConfig.isCustomAttribute) {
	      DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
	    }

	    for (var propName in Properties) {
	      !!DOMProperty.properties.hasOwnProperty(propName) ? (production) !== 'production' ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.', propName) : _prodInvariant('48', propName) : void 0;

	      var lowerCased = propName.toLowerCase();
	      var propConfig = Properties[propName];

	      var propertyInfo = {
	        attributeName: lowerCased,
	        attributeNamespace: null,
	        propertyName: propName,
	        mutationMethod: null,

	        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
	        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
	        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
	        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
	        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
	      };
	      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? (production) !== 'production' ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s', propName) : _prodInvariant('50', propName) : void 0;

	      if ((production) !== 'production') {
	        DOMProperty.getPossibleStandardName[lowerCased] = propName;
	      }

	      if (DOMAttributeNames.hasOwnProperty(propName)) {
	        var attributeName = DOMAttributeNames[propName];
	        propertyInfo.attributeName = attributeName;
	        if ((production) !== 'production') {
	          DOMProperty.getPossibleStandardName[attributeName] = propName;
	        }
	      }

	      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
	        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
	      }

	      if (DOMPropertyNames.hasOwnProperty(propName)) {
	        propertyInfo.propertyName = DOMPropertyNames[propName];
	      }

	      if (DOMMutationMethods.hasOwnProperty(propName)) {
	        propertyInfo.mutationMethod = DOMMutationMethods[propName];
	      }

	      DOMProperty.properties[propName] = propertyInfo;
	    }
	  }
	};

	/* eslint-disable max-len */
	var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	/* eslint-enable max-len */

	/**
	 * DOMProperty exports lookup objects that can be used like functions:
	 *
	 *   > DOMProperty.isValid['id']
	 *   true
	 *   > DOMProperty.isValid['foobar']
	 *   undefined
	 *
	 * Although this may be confusing, it performs better in general.
	 *
	 * @see http://jsperf.com/key-exists
	 * @see http://jsperf.com/key-missing
	 */
	var DOMProperty = {

	  ID_ATTRIBUTE_NAME: 'data-reactid',
	  ROOT_ATTRIBUTE_NAME: 'data-reactroot',

	  ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
	  ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',

	  /**
	   * Map from property "standard name" to an object with info about how to set
	   * the property in the DOM. Each object contains:
	   *
	   * attributeName:
	   *   Used when rendering markup or with `*Attribute()`.
	   * attributeNamespace
	   * propertyName:
	   *   Used on DOM node instances. (This includes properties that mutate due to
	   *   external factors.)
	   * mutationMethod:
	   *   If non-null, used instead of the property or `setAttribute()` after
	   *   initial render.
	   * mustUseProperty:
	   *   Whether the property must be accessed and mutated as an object property.
	   * hasBooleanValue:
	   *   Whether the property should be removed when set to a falsey value.
	   * hasNumericValue:
	   *   Whether the property must be numeric or parse as a numeric and should be
	   *   removed when set to a falsey value.
	   * hasPositiveNumericValue:
	   *   Whether the property must be positive numeric or parse as a positive
	   *   numeric and should be removed when set to a falsey value.
	   * hasOverloadedBooleanValue:
	   *   Whether the property can be used as a flag as well as with a value.
	   *   Removed when strictly equal to false; present without a value when
	   *   strictly equal to true; present with a value otherwise.
	   */
	  properties: {},

	  /**
	   * Mapping from lowercase property names to the properly cased version, used
	   * to warn in the case of missing properties. Available only in __DEV__.
	   * @type {Object}
	   */
	  getPossibleStandardName: (production) !== 'production' ? {} : null,

	  /**
	   * All of the isCustomAttribute() functions that have been injected.
	   */
	  _isCustomAttributeFunctions: [],

	  /**
	   * Checks whether a property name is a custom attribute.
	   * @method
	   */
	  isCustomAttribute: function (attributeName) {
	    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
	      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
	      if (isCustomAttributeFn(attributeName)) {
	        return true;
	      }
	    }
	    return false;
	  },

	  injection: DOMPropertyInjection
	};

	module.exports = DOMProperty;

/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SVGDOMPropertyConfig
	 */

	'use strict';

	var NS = {
	  xlink: 'http://www.w3.org/1999/xlink',
	  xml: 'http://www.w3.org/XML/1998/namespace'
	};

	// We use attributes for everything SVG so let's avoid some duplication and run
	// code instead.
	// The following are all specified in the HTML config already so we exclude here.
	// - class (as className)
	// - color
	// - height
	// - id
	// - lang
	// - max
	// - media
	// - method
	// - min
	// - name
	// - style
	// - target
	// - type
	// - width
	var ATTRS = {
	  accentHeight: 'accent-height',
	  accumulate: 0,
	  additive: 0,
	  alignmentBaseline: 'alignment-baseline',
	  allowReorder: 'allowReorder',
	  alphabetic: 0,
	  amplitude: 0,
	  arabicForm: 'arabic-form',
	  ascent: 0,
	  attributeName: 'attributeName',
	  attributeType: 'attributeType',
	  autoReverse: 'autoReverse',
	  azimuth: 0,
	  baseFrequency: 'baseFrequency',
	  baseProfile: 'baseProfile',
	  baselineShift: 'baseline-shift',
	  bbox: 0,
	  begin: 0,
	  bias: 0,
	  by: 0,
	  calcMode: 'calcMode',
	  capHeight: 'cap-height',
	  clip: 0,
	  clipPath: 'clip-path',
	  clipRule: 'clip-rule',
	  clipPathUnits: 'clipPathUnits',
	  colorInterpolation: 'color-interpolation',
	  colorInterpolationFilters: 'color-interpolation-filters',
	  colorProfile: 'color-profile',
	  colorRendering: 'color-rendering',
	  contentScriptType: 'contentScriptType',
	  contentStyleType: 'contentStyleType',
	  cursor: 0,
	  cx: 0,
	  cy: 0,
	  d: 0,
	  decelerate: 0,
	  descent: 0,
	  diffuseConstant: 'diffuseConstant',
	  direction: 0,
	  display: 0,
	  divisor: 0,
	  dominantBaseline: 'dominant-baseline',
	  dur: 0,
	  dx: 0,
	  dy: 0,
	  edgeMode: 'edgeMode',
	  elevation: 0,
	  enableBackground: 'enable-background',
	  end: 0,
	  exponent: 0,
	  externalResourcesRequired: 'externalResourcesRequired',
	  fill: 0,
	  fillOpacity: 'fill-opacity',
	  fillRule: 'fill-rule',
	  filter: 0,
	  filterRes: 'filterRes',
	  filterUnits: 'filterUnits',
	  floodColor: 'flood-color',
	  floodOpacity: 'flood-opacity',
	  focusable: 0,
	  fontFamily: 'font-family',
	  fontSize: 'font-size',
	  fontSizeAdjust: 'font-size-adjust',
	  fontStretch: 'font-stretch',
	  fontStyle: 'font-style',
	  fontVariant: 'font-variant',
	  fontWeight: 'font-weight',
	  format: 0,
	  from: 0,
	  fx: 0,
	  fy: 0,
	  g1: 0,
	  g2: 0,
	  glyphName: 'glyph-name',
	  glyphOrientationHorizontal: 'glyph-orientation-horizontal',
	  glyphOrientationVertical: 'glyph-orientation-vertical',
	  glyphRef: 'glyphRef',
	  gradientTransform: 'gradientTransform',
	  gradientUnits: 'gradientUnits',
	  hanging: 0,
	  horizAdvX: 'horiz-adv-x',
	  horizOriginX: 'horiz-origin-x',
	  ideographic: 0,
	  imageRendering: 'image-rendering',
	  'in': 0,
	  in2: 0,
	  intercept: 0,
	  k: 0,
	  k1: 0,
	  k2: 0,
	  k3: 0,
	  k4: 0,
	  kernelMatrix: 'kernelMatrix',
	  kernelUnitLength: 'kernelUnitLength',
	  kerning: 0,
	  keyPoints: 'keyPoints',
	  keySplines: 'keySplines',
	  keyTimes: 'keyTimes',
	  lengthAdjust: 'lengthAdjust',
	  letterSpacing: 'letter-spacing',
	  lightingColor: 'lighting-color',
	  limitingConeAngle: 'limitingConeAngle',
	  local: 0,
	  markerEnd: 'marker-end',
	  markerMid: 'marker-mid',
	  markerStart: 'marker-start',
	  markerHeight: 'markerHeight',
	  markerUnits: 'markerUnits',
	  markerWidth: 'markerWidth',
	  mask: 0,
	  maskContentUnits: 'maskContentUnits',
	  maskUnits: 'maskUnits',
	  mathematical: 0,
	  mode: 0,
	  numOctaves: 'numOctaves',
	  offset: 0,
	  opacity: 0,
	  operator: 0,
	  order: 0,
	  orient: 0,
	  orientation: 0,
	  origin: 0,
	  overflow: 0,
	  overlinePosition: 'overline-position',
	  overlineThickness: 'overline-thickness',
	  paintOrder: 'paint-order',
	  panose1: 'panose-1',
	  pathLength: 'pathLength',
	  patternContentUnits: 'patternContentUnits',
	  patternTransform: 'patternTransform',
	  patternUnits: 'patternUnits',
	  pointerEvents: 'pointer-events',
	  points: 0,
	  pointsAtX: 'pointsAtX',
	  pointsAtY: 'pointsAtY',
	  pointsAtZ: 'pointsAtZ',
	  preserveAlpha: 'preserveAlpha',
	  preserveAspectRatio: 'preserveAspectRatio',
	  primitiveUnits: 'primitiveUnits',
	  r: 0,
	  radius: 0,
	  refX: 'refX',
	  refY: 'refY',
	  renderingIntent: 'rendering-intent',
	  repeatCount: 'repeatCount',
	  repeatDur: 'repeatDur',
	  requiredExtensions: 'requiredExtensions',
	  requiredFeatures: 'requiredFeatures',
	  restart: 0,
	  result: 0,
	  rotate: 0,
	  rx: 0,
	  ry: 0,
	  scale: 0,
	  seed: 0,
	  shapeRendering: 'shape-rendering',
	  slope: 0,
	  spacing: 0,
	  specularConstant: 'specularConstant',
	  specularExponent: 'specularExponent',
	  speed: 0,
	  spreadMethod: 'spreadMethod',
	  startOffset: 'startOffset',
	  stdDeviation: 'stdDeviation',
	  stemh: 0,
	  stemv: 0,
	  stitchTiles: 'stitchTiles',
	  stopColor: 'stop-color',
	  stopOpacity: 'stop-opacity',
	  strikethroughPosition: 'strikethrough-position',
	  strikethroughThickness: 'strikethrough-thickness',
	  string: 0,
	  stroke: 0,
	  strokeDasharray: 'stroke-dasharray',
	  strokeDashoffset: 'stroke-dashoffset',
	  strokeLinecap: 'stroke-linecap',
	  strokeLinejoin: 'stroke-linejoin',
	  strokeMiterlimit: 'stroke-miterlimit',
	  strokeOpacity: 'stroke-opacity',
	  strokeWidth: 'stroke-width',
	  surfaceScale: 'surfaceScale',
	  systemLanguage: 'systemLanguage',
	  tableValues: 'tableValues',
	  targetX: 'targetX',
	  targetY: 'targetY',
	  textAnchor: 'text-anchor',
	  textDecoration: 'text-decoration',
	  textRendering: 'text-rendering',
	  textLength: 'textLength',
	  to: 0,
	  transform: 0,
	  u1: 0,
	  u2: 0,
	  underlinePosition: 'underline-position',
	  underlineThickness: 'underline-thickness',
	  unicode: 0,
	  unicodeBidi: 'unicode-bidi',
	  unicodeRange: 'unicode-range',
	  unitsPerEm: 'units-per-em',
	  vAlphabetic: 'v-alphabetic',
	  vHanging: 'v-hanging',
	  vIdeographic: 'v-ideographic',
	  vMathematical: 'v-mathematical',
	  values: 0,
	  vectorEffect: 'vector-effect',
	  version: 0,
	  vertAdvY: 'vert-adv-y',
	  vertOriginX: 'vert-origin-x',
	  vertOriginY: 'vert-origin-y',
	  viewBox: 'viewBox',
	  viewTarget: 'viewTarget',
	  visibility: 0,
	  widths: 0,
	  wordSpacing: 'word-spacing',
	  writingMode: 'writing-mode',
	  x: 0,
	  xHeight: 'x-height',
	  x1: 0,
	  x2: 0,
	  xChannelSelector: 'xChannelSelector',
	  xlinkActuate: 'xlink:actuate',
	  xlinkArcrole: 'xlink:arcrole',
	  xlinkHref: 'xlink:href',
	  xlinkRole: 'xlink:role',
	  xlinkShow: 'xlink:show',
	  xlinkTitle: 'xlink:title',
	  xlinkType: 'xlink:type',
	  xmlBase: 'xml:base',
	  xmlns: 0,
	  xmlnsXlink: 'xmlns:xlink',
	  xmlLang: 'xml:lang',
	  xmlSpace: 'xml:space',
	  y: 0,
	  y1: 0,
	  y2: 0,
	  yChannelSelector: 'yChannelSelector',
	  z: 0,
	  zoomAndPan: 'zoomAndPan'
	};

	var SVGDOMPropertyConfig = {
	  Properties: {},
	  DOMAttributeNamespaces: {
	    xlinkActuate: NS.xlink,
	    xlinkArcrole: NS.xlink,
	    xlinkHref: NS.xlink,
	    xlinkRole: NS.xlink,
	    xlinkShow: NS.xlink,
	    xlinkTitle: NS.xlink,
	    xlinkType: NS.xlink,
	    xmlBase: NS.xml,
	    xmlLang: NS.xml,
	    xmlSpace: NS.xml
	  },
	  DOMAttributeNames: {}
	};

	Object.keys(ATTRS).forEach(function (key) {
	  SVGDOMPropertyConfig.Properties[key] = 0;
	  if (ATTRS[key]) {
	    SVGDOMPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
	  }
	});

	module.exports = SVGDOMPropertyConfig;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _css = __webpack_require__(1);

	var _css2 = _interopRequireDefault(_css);

	var _GlobalStyle = __webpack_require__(99);

	var _GlobalStyle2 = _interopRequireDefault(_GlobalStyle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var global = function global(strings) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }

	  var globalStyle = new _GlobalStyle2.default(_css2.default.apply(undefined, [strings].concat(interpolations)));
	  globalStyle.generateAndInject();
	};

	exports.default = global;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _parse = __webpack_require__(50);

	var _parse2 = _interopRequireDefault(_parse);

	var _sheet = __webpack_require__(49);

	var _postcssNested = __webpack_require__(92);

	var _postcssNested2 = _interopRequireDefault(_postcssNested);

	var _flatten = __webpack_require__(3);

	var _flatten2 = _interopRequireDefault(_flatten);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var styleSheet = new _sheet.StyleSheet({ speedy: false, maxLength: 40 });

	var ComponentStyle = function () {
	  function ComponentStyle(rules, selector) {
	    _classCallCheck(this, ComponentStyle);

	    this.rules = rules;
	    this.selector = selector;
	  }

	  _createClass(ComponentStyle, [{
	    key: 'generateAndInject',
	    value: function generateAndInject() {
	      if (!styleSheet.injected) styleSheet.inject();
	      var flatCSS = (0, _flatten2.default)(this.rules).join('');
	      if (this.selector) {
	        flatCSS = this.selector + ' {' + flatCSS + '\n}';
	      }
	      var root = (0, _parse2.default)(flatCSS);
	      (0, _postcssNested2.default)(root);
	      styleSheet.insert(root.toResult().css);
	    }
	  }]);

	  return ComponentStyle;
	}();

	exports.default = ComponentStyle;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _hash = __webpack_require__(48);

	var _hash2 = _interopRequireDefault(_hash);

	var _css = __webpack_require__(1);

	var _css2 = _interopRequireDefault(_css);

	var _GlobalStyle = __webpack_require__(99);

	var _GlobalStyle2 = _interopRequireDefault(_GlobalStyle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var replaceWhitespace = function replaceWhitespace(str) {
	  return str.replace(/\s|\\n/g, '');
	};

	exports.default = function (strings) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }

	  var rules = _css2.default.apply(undefined, [strings].concat(interpolations));
	  var name = 'k' + (0, _hash2.default)(replaceWhitespace(JSON.stringify(rules)));
	  var keyframes = new _GlobalStyle2.default(rules, '@keyframes ' + name);
	  keyframes.generateAndInject();
	  return name;
	};

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;