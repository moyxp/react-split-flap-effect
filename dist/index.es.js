function _typeof(obj) {
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

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault$1(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = require('react');

var React__default = _interopDefault$1(React);

var PropTypes = _interopDefault$1(require('prop-types'));

function _defineProperty$1(obj, key, value) {
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

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
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

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1(source, excluded);

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

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
}

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1();
}

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray$1(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit$1(arr, i) {
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

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@-webkit-keyframes styles_flapDownTop__1BWl_ {\n  from {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg)\n  }\n\n  50%, to {\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg)\n  }\n}\n\n@keyframes styles_flapDownTop__1BWl_ {\n  from {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg)\n  }\n\n  50%, to {\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg)\n  }\n}\n\n@-webkit-keyframes styles_flapDownBottom___KC9f {\n  from, 50% {\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg)\n  }\n\n  90% {\n    -webkit-transform: rotateX(20deg);\n            transform: rotateX(20deg)\n  }\n\n  80%, to {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg)\n  }\n}\n\n@keyframes styles_flapDownBottom___KC9f {\n  from, 50% {\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg)\n  }\n\n  90% {\n    -webkit-transform: rotateX(20deg);\n            transform: rotateX(20deg)\n  }\n\n  80%, to {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg)\n  }\n}\n\n.styles_digit__3_I6o {\n  color: white;\n  background-color: black;\n  position: relative;\n  display: inline-block;\n  box-sizing: content-box;\n  width: 1.1ch;\n  height: 1em;\n  font-family: sans-serif;\n  line-height: 1em;\n  text-align: center\n}\n\n.styles_digit__3_I6o[data-mode=\"words\"] {\n    width: 100%;\n  }\n\n.styles_digit__3_I6o[data-mode=\"alpha\"] {\n    width: 1.7ch;\n  }\n\n.styles_hinge__2iwrZ {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 3;\n  box-sizing: border-box;\n  height: 0.04em;\n  background-color: inherit;\n}\n\n.styles_flap__1tzQn {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  background-color: inherit;\n  background: inherit;\n  z-index: 1;\n  border-radius: inherit;\n  box-sizing: border-box\n}\n\n.styles_flap__1tzQn.styles_animated__eXIXQ {\n    -webkit-animation-duration: 300ms;\n            animation-duration: 300ms;\n    z-index: 2;\n  }\n\n.styles_flap__1tzQn.styles_top__1as09 {\n    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 0, 0 0);\n            clip-path: polygon(0 50%, 100% 50%, 100% 0, 0 0)\n  }\n\n.styles_flap__1tzQn.styles_top__1as09.styles_animated__eXIXQ {\n      -webkit-transform: rotateX(50deg);\n              transform: rotateX(50deg);\n      opacity: 0.40;\n    }\n\n.styles_flap__1tzQn.styles_top__1as09.styles_animated__eXIXQ.styles_final__1af3r {\n      opacity: 1;\n      -webkit-animation-name: styles_flapDownTop__1BWl_;\n              animation-name: styles_flapDownTop__1BWl_;\n      -webkit-animation-timing-function: ease-in;\n              animation-timing-function: ease-in;\n    }\n\n.styles_flap__1tzQn.styles_bottom__1CYW9 {\n    -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 50%, 0 50%);\n            clip-path: polygon(0 100%, 100% 100%, 100% 50%, 0 50%)\n  }\n\n.styles_flap__1tzQn.styles_bottom__1CYW9.styles_animated__eXIXQ.styles_final__1af3r {\n      -webkit-animation-name: styles_flapDownBottom___KC9f;\n              animation-name: styles_flapDownBottom___KC9f;\n      -webkit-animation-timing-function: ease-out;\n              animation-timing-function: ease-out;\n    }\n";
var styles = {
  "digit": "styles_digit__3_I6o",
  "hinge": "styles_hinge__2iwrZ",
  "flap": "styles_flap__1tzQn",
  "animated": "styles_animated__eXIXQ",
  "top": "styles_top__1as09",
  "final": "styles_final__1af3r",
  "flapDownTop": "styles_flapDownTop__1BWl_",
  "bottom": "styles_bottom__1CYW9",
  "flapDownBottom": "styles_flapDownBottom___KC9f"
};
styleInject(css);

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */

  /* global define */
  (function () {
    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = _typeof(arg);

        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);

          if (inner) {
            classes.push(inner);
          }
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }

      return classes.join(' ');
    }

    if (module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});

var Flap = function Flap(_ref) {
  var _classnames;

  var _ref$bottom = _ref.bottom,
      bottom = _ref$bottom === void 0 ? false : _ref$bottom,
      _ref$animated = _ref.animated,
      animated = _ref$animated === void 0 ? false : _ref$animated,
      _ref$final = _ref["final"],
      _final = _ref$final === void 0 ? false : _ref$final,
      _ref$hinge = _ref.hinge,
      hinge = _ref$hinge === void 0 ? false : _ref$hinge,
      children = _ref.children;

  var classes = classnames(styles.flap, (_classnames = {}, _defineProperty$1(_classnames, styles.bottom, bottom), _defineProperty$1(_classnames, styles.top, !bottom), _defineProperty$1(_classnames, styles.animated, animated), _defineProperty$1(_classnames, styles["final"], _final), _classnames));
  return React__default.createElement("div", {
    className: classes
  }, children, hinge && React__default.createElement("div", {
    className: styles.hinge,
    "data-kind": "hinge"
  }));
};

Flap.propTypes = {
  bottom: PropTypes.bool,
  animated: PropTypes.bool,
  "final": PropTypes.bool,
  hinge: PropTypes.bool
};

var FlapDigit = function FlapDigit(_ref) {
  var className = _ref.className,
      css = _ref.css,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$prevValue = _ref.prevValue,
      prevValue = _ref$prevValue === void 0 ? '' : _ref$prevValue,
      _ref$final = _ref["final"],
      _final = _ref$final === void 0 ? false : _ref$final,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? null : _ref$mode,
      restProps = _objectWithoutProperties$1(_ref, ["className", "css", "value", "prevValue", "final", "mode"]);

  return React__default.createElement("div", {
    className: styles.digit,
    "data-kind": "digit",
    "data-mode": mode
  }, React__default.createElement(Flap, restProps, value), React__default.createElement(Flap, _extends$1({
    bottom: true
  }, restProps), prevValue), React__default.createElement(Flap, _extends$1({
    key: "top-".concat(prevValue),
    animated: true,
    "final": _final
  }, restProps), prevValue), _final && React__default.createElement(Flap, _extends$1({
    key: "bottom-".concat(value),
    bottom: true,
    animated: true,
    "final": true
  }, restProps), value));
};

FlapDigit.propTypes = {
  mode: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  prevValue: PropTypes.string,
  "final": PropTypes.bool
}; // to avoid in-between render states

var InitialCursor = {
  current: -1,
  previous: -1,
  target: 0
};

var FlapStack = function FlapStack(_ref) {
  var stack = _ref.stack,
      value = _ref.value,
      timing = _ref.timing,
      restProps = _objectWithoutProperties$1(_ref, ["stack", "value", "timing"]);

  var _useState = React.useState(InitialCursor),
      _useState2 = _slicedToArray$1(_useState, 2),
      cursor = _useState2[0],
      setCursor = _useState2[1];

  React.useEffect(function () {
    setCursor(InitialCursor);
  }, [stack]);
  React.useEffect(function () {
    var current = cursor.current,
        previous = cursor.previous;
    var target = Math.max(stack.indexOf(value), 0);

    var increment = function increment() {
      previous = current;

      if (current >= stack.length - 1) {
        current = 0;
      } else {
        current = current + 1;
      }

      setCursor({
        current: current,
        previous: previous,
        target: target
      });
    };

    increment();
    var timer = setInterval(function () {
      if (current === target) {
        clearInterval(timer);
      } else {
        increment();
      }
    }, timing);
    return function () {
      return clearInterval(timer);
    };
  }, [stack, value]);
  var current = cursor.current,
      previous = cursor.previous,
      target = cursor.target;
  return React__default.createElement(FlapDigit, _extends$1({
    value: stack[current],
    prevValue: stack[previous],
    "final": current === target
  }, restProps));
};

FlapStack.propTypes = {
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  timing: PropTypes.number.isRequired
};
var Presets = {
  NUM: ' 0123456789',
  ALPHANUM: ' 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
var Modes = {
  Numeric: 'num',
  Alphanumeric: 'alpha',
  Words: 'words'
};

var splitChars = function splitChars(v) {
  return String(v).split('').map(function (c) {
    return c.toUpperCase();
  });
};

var padValue = function padValue(v, length, padChar, padStart) {
  var trimmed = v.slice(0, length);
  return padStart ? String(trimmed).padStart(length, padChar) : String(trimmed).padEnd(length, padChar);
};

var FlapDisplay = function FlapDisplay(_ref) {
  var id = _ref.id,
      className = _ref.className,
      css = _ref.css,
      value = _ref.value,
      _ref$chars = _ref.chars,
      chars = _ref$chars === void 0 ? Presets.NUM : _ref$chars,
      words = _ref.words,
      length = _ref.length,
      _ref$padChar = _ref.padChar,
      padChar = _ref$padChar === void 0 ? ' ' : _ref$padChar,
      _ref$timing = _ref.timing,
      _ref$hinge = _ref.hinge,
      _ref$padMode = _ref.padMode,
      padMode = _ref$padMode === void 0 ? 'auto' : _ref$padMode,
      render = _ref.render,
      restProps = _objectWithoutProperties$1(_ref, ["id", "className", "css", "value", "chars", "words", "length", "padChar", "timing", "hinge", "padMode", "render"]);

  var _useState = React.useState([]),
      _useState2 = _slicedToArray$1(_useState, 2),
      stack = _useState2[0],
      setStack = _useState2[1];

  var _useState3 = React.useState(Modes.Numeric),
      _useState4 = _slicedToArray$1(_useState3, 2),
      mode = _useState4[0],
      setMode = _useState4[1];

  var _useState5 = React.useState([]),
      _useState6 = _slicedToArray$1(_useState5, 2),
      digits = _useState6[0],
      setDigits = _useState6[1];

  var _useState7 = React.useState([]),
      _useState8 = _slicedToArray$1(_useState7, 2),
      children = _useState8[0],
      setChildren = _useState8[1];

  React.useEffect(function () {
    if (words && words.length) {
      setStack(words);
      setMode(Modes.Words);
    } else {
      setStack(splitChars(chars));
      setMode(chars.match(/[a-z]/i) ? Modes.Alphanumeric : Modes.Numeric);
    }
  }, [chars, words]);
  React.useEffect(function () {
    if (words && words.length) {
      setDigits([value]);
    } else {
      var padStart = padMode === 'auto' ? !!value.match(/^[0-9.,+-]*$/) : padMode === 'start';
      setDigits(splitChars(padValue(value, length, padChar, padStart)));
    }
  }, [value, chars, words, length, padChar, padMode]);
  React.useEffect(function () {
    setChildren(digits.map(function (digit, i) {
      return React__default.createElement(FlapStack, _extends$1({
        key: i,
        stack: stack,
        value: digit,
        mode: mode
      }, restProps));
    }));
  }, [digits].concat(_toConsumableArray$1(Object.values(restProps))));
  return render ? render(_objectSpread2$1({
    id: id,
    className: className,
    css: css
  }, restProps, {
    children: children
  })) : React__default.createElement("div", {
    id: id,
    className: className,
    css: css,
    "aria-hidden": "true",
    "aria-label": value
  }, children);
};

FlapDisplay.propTypes = {
  id: PropTypes.string,
  css: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  chars: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.string),
  length: PropTypes.number,
  padChar: PropTypes.string,
  padMode: PropTypes.string,
  timing: PropTypes.number,
  hinge: PropTypes.bool,
  render: PropTypes.func
};
exports.FlapDisplay = FlapDisplay;
exports.Presets = Presets;
//# sourceMappingURL=index.es.js.map
