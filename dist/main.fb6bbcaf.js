// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/particlesjs/dist/particles.min.js":[function(require,module,exports) {
var define;
/*!
 * A lightweight, dependency-free and responsive javascript plugin for particle backgrounds.
 *
 * @author Marc Bruederlin <hello@marcbruederlin.com>
 * @version 2.2.3
 * @license MIT
 * @see https://github.com/marcbruederlin/particles.js
 */
var Particles=function(e,t){"use strict";var n,i={};function o(e,t){return e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0}return(n=function(){return function(){var e=this;e.defaults={responsive:null,selector:null,maxParticles:100,sizeVariations:3,showParticles:!0,speed:.5,color:"#000000",minDistance:120,connectParticles:!1},e.element=null,e.context=null,e.ratio=null,e.breakpoints=[],e.activeBreakpoint=null,e.breakpointSettings=[],e.originalSettings=null,e.storage=[],e.usingPolyfill=!1}}()).prototype.init=function(e){var t=this;return t.options=t._extend(t.defaults,e),t.originalSettings=JSON.parse(JSON.stringify(t.options)),t._animate=t._animate.bind(t),t._initializeCanvas(),t._initializeEvents(),t._registerBreakpoints(),t._checkResponsive(),t._initializeStorage(),t._animate(),t},n.prototype.destroy=function(){var t=this;t.storage=[],t.element.remove(),e.removeEventListener("resize",t.listener,!1),e.clearTimeout(t._animation),cancelAnimationFrame(t._animation)},n.prototype._initializeCanvas=function(){var n,i,o=this;if(!o.options.selector)return console.warn("particles.js: No selector specified! Check https://github.com/marcbruederlin/particles.js#options"),!1;o.element=t.querySelector(o.options.selector),o.context=o.element.getContext("2d"),n=e.devicePixelRatio||1,i=o.context.webkitBackingStorePixelRatio||o.context.mozBackingStorePixelRatio||o.context.msBackingStorePixelRatio||o.context.oBackingStorePixelRatio||o.context.backingStorePixelRatio||1,o.ratio=n/i,o.element.width=o.element.offsetParent?o.element.offsetParent.clientWidth*o.ratio:o.element.clientWidth*o.ratio,o.element.offsetParent&&"BODY"===o.element.offsetParent.nodeName?o.element.height=e.innerHeight*o.ratio:o.element.height=o.element.offsetParent?o.element.offsetParent.clientHeight*o.ratio:o.element.clientHeight*o.ratio,o.element.style.width="100%",o.element.style.height="100%",o.context.scale(o.ratio,o.ratio)},n.prototype._initializeEvents=function(){var t=this;t.listener=function(){t._resize()}.bind(this),e.addEventListener("resize",t.listener,!1)},n.prototype._initializeStorage=function(){var e=this;e.storage=[];for(var t=e.options.maxParticles;t--;)e.storage.push(new i(e.context,e.options))},n.prototype._registerBreakpoints=function(){var e,t,n,i=this,o=i.options.responsive||null;if("object"==typeof o&&null!==o&&o.length){for(e in o)if(n=i.breakpoints.length-1,t=o[e].breakpoint,o.hasOwnProperty(e)){for(;n>=0;)i.breakpoints[n]&&i.breakpoints[n]===t&&i.breakpoints.splice(n,1),n--;i.breakpoints.push(t),i.breakpointSettings[t]=o[e].options}i.breakpoints.sort(function(e,t){return t-e})}},n.prototype._checkResponsive=function(){var t,n=this,i=!1,o=e.innerWidth;if(n.options.responsive&&n.options.responsive.length&&null!==n.options.responsive){for(t in i=null,n.breakpoints)n.breakpoints.hasOwnProperty(t)&&o<=n.breakpoints[t]&&(i=n.breakpoints[t]);null!==i?(n.activeBreakpoint=i,n.options=n._extend(n.options,n.breakpointSettings[i])):null!==n.activeBreakpoint&&(n.activeBreakpoint=null,i=null,n.options=n._extend(n.options,n.originalSettings))}},n.prototype._refresh=function(){this._initializeStorage(),this._draw()},n.prototype._resize=function(){var t=this;t.element.width=t.element.offsetParent?t.element.offsetParent.clientWidth*t.ratio:t.element.clientWidth*t.ratio,t.element.offsetParent&&"BODY"===t.element.offsetParent.nodeName?t.element.height=e.innerHeight*t.ratio:t.element.height=t.element.offsetParent?t.element.offsetParent.clientHeight*t.ratio:t.element.clientHeight*t.ratio,t.context.scale(t.ratio,t.ratio),clearTimeout(t.windowDelay),t.windowDelay=e.setTimeout(function(){t._checkResponsive(),t._refresh()},50)},n.prototype._animate=function(){var t=this;t._draw(),t._animation=e.requestAnimFrame(t._animate)},n.prototype.resumeAnimation=function(){this._animation||this._animate()},n.prototype.pauseAnimation=function(){var t=this;if(t._animation){if(t.usingPolyfill)e.clearTimeout(t._animation);else(e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame)(t._animation);t._animation=null}},n.prototype._draw=function(){var t=this,n=t.element,i=n.offsetParent?n.offsetParent.clientWidth:n.clientWidth,r=n.offsetParent?n.offsetParent.clientHeight:n.clientHeight,a=t.options.showParticles,s=t.storage;n.offsetParent&&"BODY"===n.offsetParent.nodeName&&(r=e.innerHeight),t.context.clearRect(0,0,n.width,n.height),t.context.beginPath();for(var l=s.length;l--;){var c=s[l];a&&c._draw(),c._updateCoordinates(i,r)}t.options.connectParticles&&(s.sort(o),t._updateEdges())},n.prototype._updateEdges=function(){for(var e=this,t=e.options.minDistance,n=Math.sqrt,i=Math.abs,o=e.storage,r=o.length,a=0;a<r;a++)for(var s=o[a],l=a+1;l<r;l++){var c,f=o[l],p=s.x-f.x,h=s.y-f.y;if(c=n(p*p+h*h),i(p)>t)break;c<=t&&e._drawEdge(s,f,1.2-c/t)}},n.prototype._drawEdge=function(e,t,n){var i=this,o=i.context.createLinearGradient(e.x,e.y,t.x,t.y),r=this._hex2rgb(e.color),a=this._hex2rgb(t.color);o.addColorStop(0,"rgba("+r.r+","+r.g+","+r.b+","+n+")"),o.addColorStop(1,"rgba("+a.r+","+a.g+","+a.b+","+n+")"),i.context.beginPath(),i.context.strokeStyle=o,i.context.moveTo(e.x,e.y),i.context.lineTo(t.x,t.y),i.context.stroke(),i.context.fill(),i.context.closePath()},n.prototype._extend=function(e,t){return Object.keys(t).forEach(function(n){e[n]=t[n]}),e},n.prototype._hex2rgb=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},(i=function(n,i){var o=this,r=Math.random,a=i.speed,s=i.color instanceof Array?i.color[Math.floor(Math.random()*i.color.length)]:i.color;o.context=n,o.options=i;var l=t.querySelector(i.selector);o.x=l.offsetParent?r()*l.offsetParent.clientWidth:r()*l.clientWidth,l.offsetParent&&"BODY"===l.offsetParent.nodeName?o.y=r()*e.innerHeight:o.y=l.offsetParent?r()*l.offsetParent.clientHeight:r()*l.clientHeight,o.vx=r()*a*2-a,o.vy=r()*a*2-a,o.radius=r()*r()*i.sizeVariations,o.color=s,o._draw()}).prototype._draw=function(){var e=this;e.context.save(),e.context.translate(e.x,e.y),e.context.moveTo(0,0),e.context.beginPath(),e.context.arc(0,0,e.radius,0,2*Math.PI,!1),e.context.fillStyle=e.color,e.context.fill(),e.context.restore()},i.prototype._updateCoordinates=function(e,t){var n=this,i=n.x+this.vx,o=n.y+this.vy,r=n.radius;i+r>e?i=r:i-r<0&&(i=e-r),o+r>t?o=r:o-r<0&&(o=t-r),n.x=i,n.y=o},e.requestAnimFrame=function(){var t=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame;return t||(this._usingPolyfill=!0,function(t){return e.setTimeout(t,1e3/60)})}(),new n}(window,document);!function(){"use strict";"function"==typeof define&&define.amd?define("Particles",function(){return Particles}):"undefined"!=typeof module&&module.exports?module.exports=Particles:window.Particles=Particles}();
},{}],"js/particles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _particlesjs = _interopRequireDefault(require("particlesjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  var particles = _particlesjs.default.init({
    selector: '.background',
    connectParticles: 'true',
    color: '#408ec6',
    maxParticles: 70
  });

  particles.pauseAnimation();
  var paused = false;
  var background = document.getElementsByClassName('background')[0];
  var toggle_btn = document.getElementById('easter-egg');
  toggle_btn.addEventListener('click', function () {
    if (paused) {
      particles.resumeAnimation();
    } else {
      particles.pauseAnimation();
    }

    paused = !paused;
  }, false);
}
},{"particlesjs":"node_modules/particlesjs/dist/particles.min.js"}],"js/BrowseInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 CSS Dependencies: minus-btn, input[type="file"] 
*/
var BrowseInput =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(BrowseInput, _HTMLElement);

  var _super = _createSuper(BrowseInput);

  function BrowseInput() {
    _classCallCheck(this, BrowseInput);

    return _super.apply(this, arguments);
  }

  _createClass(BrowseInput, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      var _this = this;

      if ('showminus' === name) {
        if (newValue === 'true') {
          var minusBtn = document.createElement('div');
          minusBtn.classList.add('minus-btn');
          this.append(minusBtn);
          minusBtn.addEventListener('click', function () {
            _this.remove();
          });
        } else if (newValue === 'false') {
          this.querySelector('.minus-btn').remove();
        }
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      BrowseInput.count++;
      this.innerHTML = "\n            <style>\n                browse-input {\n                    align-self: flex-start;\n                    margin: 0.2rem;\n                    margin-left: 0;\n\n                    display: flex;\n                    flex-direction: row;\n                    justify-content: space-between;\n                    align-items: center;\n                    width: 100%;\n                }\n            </style> \n            <input type=\"file\" multiple>\n        ";
      this.classList.add('browse');

      if (this.hasAttribute('showminus')) {
        var showMinus = this.getAttribute('showminus');

        if (showMinus === "true") {
          var minusBtn = document.createElement('div');
          minusBtn.classList.add('minus-btn');
          this.append(minusBtn);
          minusBtn.addEventListener('click', function () {
            _this2.remove();
          });
        }
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      BrowseInput.count--;
    }
  }]);

  return BrowseInput;
}(
/*#__PURE__*/
_wrapNativeSuper(HTMLElement));

exports.default = BrowseInput;
BrowseInput.count = 0;
customElements.define('browse-input', BrowseInput);
},{}],"node_modules/google-charts/dist/googleCharts.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleCharts = exports.default = void 0;

/* googleCharts.js Version: 1.5.0 Built On: 2018-12-30 */
const loadScript = Symbol('loadScript');
const instance = Symbol('instance');

let _instance;

class GoogleChartsManager {
  get [instance]() {
    return _instance;
  }

  set [instance](value) {
    _instance = value;
  }

  constructor() {
    if (this[instance]) {
      return this[instance];
    }

    this[instance] = this;
  }

  reset() {
    _instance = null;
  }

  [loadScript]() {
    if (!this.scriptPromise) {
      this.scriptPromise = new Promise(resolve => {
        const body = document.getElementsByTagName('body')[0];
        const script = document.createElement('script');
        script.type = 'text/javascript';

        script.onload = function () {
          GoogleCharts.api = window.google;
          GoogleCharts.api.charts.load('current', {
            packages: ['corechart', 'table']
          });
          GoogleCharts.api.charts.setOnLoadCallback(() => {
            resolve();
          });
        };

        script.src = 'https://www.gstatic.com/charts/loader.js';
        body.appendChild(script);
      });
    }

    return this.scriptPromise;
  }

  load(callback, type) {
    return this[loadScript]().then(() => {
      if (type) {
        let config = {};

        if (type instanceof Object) {
          config = type;
        } else if (Array.isArray(type)) {
          config = {
            packages: type
          };
        } else {
          config = {
            packages: [type]
          };
        }

        this.api.charts.load('current', config);
        this.api.charts.setOnLoadCallback(callback);
      } else {
        if (typeof callback != 'function') {
          throw 'callback must be a function';
        } else {
          callback();
        }
      }
    });
  }

}

const GoogleCharts = new GoogleChartsManager();
exports.GoogleCharts = GoogleCharts;
var _default = GoogleChartsManager;
exports.default = _default;
},{}],"node_modules/core-js/internals/global.js":[function(require,module,exports) {
var global = arguments[3];
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

},{}],"node_modules/core-js/internals/fails.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

},{}],"node_modules/core-js/internals/descriptors.js":[function(require,module,exports) {
var fails = require('../internals/fails');

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

},{"../internals/fails":"node_modules/core-js/internals/fails.js"}],"node_modules/core-js/internals/object-property-is-enumerable.js":[function(require,module,exports) {
'use strict';
var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

},{}],"node_modules/core-js/internals/create-property-descriptor.js":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"node_modules/core-js/internals/classof-raw.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"node_modules/core-js/internals/indexed-object.js":[function(require,module,exports) {
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

},{"../internals/fails":"node_modules/core-js/internals/fails.js","../internals/classof-raw":"node_modules/core-js/internals/classof-raw.js"}],"node_modules/core-js/internals/require-object-coercible.js":[function(require,module,exports) {
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

},{}],"node_modules/core-js/internals/to-indexed-object.js":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"node_modules/core-js/internals/indexed-object.js","../internals/require-object-coercible":"node_modules/core-js/internals/require-object-coercible.js"}],"node_modules/core-js/internals/is-object.js":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"node_modules/core-js/internals/to-primitive.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"../internals/is-object":"node_modules/core-js/internals/is-object.js"}],"node_modules/core-js/internals/has.js":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"node_modules/core-js/internals/document-create-element.js":[function(require,module,exports) {

var global = require('../internals/global');
var isObject = require('../internals/is-object');

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/is-object":"node_modules/core-js/internals/is-object.js"}],"node_modules/core-js/internals/ie8-dom-define.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

},{"../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/document-create-element":"node_modules/core-js/internals/document-create-element.js"}],"node_modules/core-js/internals/object-get-own-property-descriptor.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPrimitive = require('../internals/to-primitive');
var has = require('../internals/has');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

},{"../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/object-property-is-enumerable":"node_modules/core-js/internals/object-property-is-enumerable.js","../internals/create-property-descriptor":"node_modules/core-js/internals/create-property-descriptor.js","../internals/to-indexed-object":"node_modules/core-js/internals/to-indexed-object.js","../internals/to-primitive":"node_modules/core-js/internals/to-primitive.js","../internals/has":"node_modules/core-js/internals/has.js","../internals/ie8-dom-define":"node_modules/core-js/internals/ie8-dom-define.js"}],"node_modules/core-js/internals/an-object.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

},{"../internals/is-object":"node_modules/core-js/internals/is-object.js"}],"node_modules/core-js/internals/object-define-property.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var anObject = require('../internals/an-object');
var toPrimitive = require('../internals/to-primitive');

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/ie8-dom-define":"node_modules/core-js/internals/ie8-dom-define.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/to-primitive":"node_modules/core-js/internals/to-primitive.js"}],"node_modules/core-js/internals/create-non-enumerable-property.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js","../internals/create-property-descriptor":"node_modules/core-js/internals/create-property-descriptor.js"}],"node_modules/core-js/internals/set-global.js":[function(require,module,exports) {

var global = require('../internals/global');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/create-non-enumerable-property":"node_modules/core-js/internals/create-non-enumerable-property.js"}],"node_modules/core-js/internals/shared-store.js":[function(require,module,exports) {

var global = require('../internals/global');
var setGlobal = require('../internals/set-global');

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/set-global":"node_modules/core-js/internals/set-global.js"}],"node_modules/core-js/internals/inspect-source.js":[function(require,module,exports) {
var store = require('../internals/shared-store');

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

},{"../internals/shared-store":"node_modules/core-js/internals/shared-store.js"}],"node_modules/core-js/internals/native-weak-map.js":[function(require,module,exports) {

var global = require('../internals/global');
var inspectSource = require('../internals/inspect-source');

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/inspect-source":"node_modules/core-js/internals/inspect-source.js"}],"node_modules/core-js/internals/is-pure.js":[function(require,module,exports) {
module.exports = false;

},{}],"node_modules/core-js/internals/shared.js":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var store = require('../internals/shared-store');

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

},{"../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/shared-store":"node_modules/core-js/internals/shared-store.js"}],"node_modules/core-js/internals/uid.js":[function(require,module,exports) {
var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

},{}],"node_modules/core-js/internals/shared-key.js":[function(require,module,exports) {
var shared = require('../internals/shared');
var uid = require('../internals/uid');

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"node_modules/core-js/internals/shared.js","../internals/uid":"node_modules/core-js/internals/uid.js"}],"node_modules/core-js/internals/hidden-keys.js":[function(require,module,exports) {
module.exports = {};

},{}],"node_modules/core-js/internals/internal-state.js":[function(require,module,exports) {

var NATIVE_WEAK_MAP = require('../internals/native-weak-map');
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var objectHas = require('../internals/has');
var shared = require('../internals/shared-store');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

},{"../internals/native-weak-map":"node_modules/core-js/internals/native-weak-map.js","../internals/global":"node_modules/core-js/internals/global.js","../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/create-non-enumerable-property":"node_modules/core-js/internals/create-non-enumerable-property.js","../internals/has":"node_modules/core-js/internals/has.js","../internals/shared-store":"node_modules/core-js/internals/shared-store.js","../internals/shared-key":"node_modules/core-js/internals/shared-key.js","../internals/hidden-keys":"node_modules/core-js/internals/hidden-keys.js"}],"node_modules/core-js/internals/redefine.js":[function(require,module,exports) {

var global = require('../internals/global');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var setGlobal = require('../internals/set-global');
var inspectSource = require('../internals/inspect-source');
var InternalStateModule = require('../internals/internal-state');

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/create-non-enumerable-property":"node_modules/core-js/internals/create-non-enumerable-property.js","../internals/has":"node_modules/core-js/internals/has.js","../internals/set-global":"node_modules/core-js/internals/set-global.js","../internals/inspect-source":"node_modules/core-js/internals/inspect-source.js","../internals/internal-state":"node_modules/core-js/internals/internal-state.js"}],"node_modules/core-js/internals/path.js":[function(require,module,exports) {

var global = require('../internals/global');

module.exports = global;

},{"../internals/global":"node_modules/core-js/internals/global.js"}],"node_modules/core-js/internals/get-built-in.js":[function(require,module,exports) {

var path = require('../internals/path');
var global = require('../internals/global');

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

},{"../internals/path":"node_modules/core-js/internals/path.js","../internals/global":"node_modules/core-js/internals/global.js"}],"node_modules/core-js/internals/to-integer.js":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

},{}],"node_modules/core-js/internals/to-length.js":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer":"node_modules/core-js/internals/to-integer.js"}],"node_modules/core-js/internals/to-absolute-index.js":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer":"node_modules/core-js/internals/to-integer.js"}],"node_modules/core-js/internals/array-includes.js":[function(require,module,exports) {
var toIndexedObject = require('../internals/to-indexed-object');
var toLength = require('../internals/to-length');
var toAbsoluteIndex = require('../internals/to-absolute-index');

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"node_modules/core-js/internals/to-indexed-object.js","../internals/to-length":"node_modules/core-js/internals/to-length.js","../internals/to-absolute-index":"node_modules/core-js/internals/to-absolute-index.js"}],"node_modules/core-js/internals/object-keys-internal.js":[function(require,module,exports) {
var has = require('../internals/has');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

},{"../internals/has":"node_modules/core-js/internals/has.js","../internals/to-indexed-object":"node_modules/core-js/internals/to-indexed-object.js","../internals/array-includes":"node_modules/core-js/internals/array-includes.js","../internals/hidden-keys":"node_modules/core-js/internals/hidden-keys.js"}],"node_modules/core-js/internals/enum-bug-keys.js":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

},{}],"node_modules/core-js/internals/object-get-own-property-names.js":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"node_modules/core-js/internals/object-keys-internal.js","../internals/enum-bug-keys":"node_modules/core-js/internals/enum-bug-keys.js"}],"node_modules/core-js/internals/object-get-own-property-symbols.js":[function(require,module,exports) {
exports.f = Object.getOwnPropertySymbols;

},{}],"node_modules/core-js/internals/own-keys.js":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var anObject = require('../internals/an-object');

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/object-get-own-property-names":"node_modules/core-js/internals/object-get-own-property-names.js","../internals/object-get-own-property-symbols":"node_modules/core-js/internals/object-get-own-property-symbols.js","../internals/an-object":"node_modules/core-js/internals/an-object.js"}],"node_modules/core-js/internals/copy-constructor-properties.js":[function(require,module,exports) {
var has = require('../internals/has');
var ownKeys = require('../internals/own-keys');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

},{"../internals/has":"node_modules/core-js/internals/has.js","../internals/own-keys":"node_modules/core-js/internals/own-keys.js","../internals/object-get-own-property-descriptor":"node_modules/core-js/internals/object-get-own-property-descriptor.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js"}],"node_modules/core-js/internals/is-forced.js":[function(require,module,exports) {
var fails = require('../internals/fails');

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;

},{"../internals/fails":"node_modules/core-js/internals/fails.js"}],"node_modules/core-js/internals/export.js":[function(require,module,exports) {

var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var setGlobal = require('../internals/set-global');
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var isForced = require('../internals/is-forced');

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/object-get-own-property-descriptor":"node_modules/core-js/internals/object-get-own-property-descriptor.js","../internals/create-non-enumerable-property":"node_modules/core-js/internals/create-non-enumerable-property.js","../internals/redefine":"node_modules/core-js/internals/redefine.js","../internals/set-global":"node_modules/core-js/internals/set-global.js","../internals/copy-constructor-properties":"node_modules/core-js/internals/copy-constructor-properties.js","../internals/is-forced":"node_modules/core-js/internals/is-forced.js"}],"node_modules/core-js/modules/es.object.get-own-property-descriptor.js":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toIndexedObject = require('../internals/to-indexed-object');
var nativeGetOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var DESCRIPTORS = require('../internals/descriptors');

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/to-indexed-object":"node_modules/core-js/internals/to-indexed-object.js","../internals/object-get-own-property-descriptor":"node_modules/core-js/internals/object-get-own-property-descriptor.js","../internals/descriptors":"node_modules/core-js/internals/descriptors.js"}],"node_modules/core-js/internals/engine-is-node.js":[function(require,module,exports) {

var classof = require('../internals/classof-raw');
var global = require('../internals/global');

module.exports = classof(global.process) == 'process';

},{"../internals/classof-raw":"node_modules/core-js/internals/classof-raw.js","../internals/global":"node_modules/core-js/internals/global.js"}],"node_modules/core-js/internals/engine-user-agent.js":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');

module.exports = getBuiltIn('navigator', 'userAgent') || '';

},{"../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js"}],"node_modules/core-js/internals/engine-v8-version.js":[function(require,module,exports) {


var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/engine-user-agent":"node_modules/core-js/internals/engine-user-agent.js"}],"node_modules/core-js/internals/native-symbol.js":[function(require,module,exports) {
var IS_NODE = require('../internals/engine-is-node');
var V8_VERSION = require('../internals/engine-v8-version');
var fails = require('../internals/fails');

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  /* global Symbol -- required for testing */
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});

},{"../internals/engine-is-node":"node_modules/core-js/internals/engine-is-node.js","../internals/engine-v8-version":"node_modules/core-js/internals/engine-v8-version.js","../internals/fails":"node_modules/core-js/internals/fails.js"}],"node_modules/core-js/internals/use-symbol-as-uid.js":[function(require,module,exports) {
var NATIVE_SYMBOL = require('../internals/native-symbol');

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

},{"../internals/native-symbol":"node_modules/core-js/internals/native-symbol.js"}],"node_modules/core-js/internals/is-array.js":[function(require,module,exports) {
var classof = require('../internals/classof-raw');

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

},{"../internals/classof-raw":"node_modules/core-js/internals/classof-raw.js"}],"node_modules/core-js/internals/to-object.js":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"node_modules/core-js/internals/require-object-coercible.js"}],"node_modules/core-js/internals/object-keys.js":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/object-keys-internal":"node_modules/core-js/internals/object-keys-internal.js","../internals/enum-bug-keys":"node_modules/core-js/internals/enum-bug-keys.js"}],"node_modules/core-js/internals/object-define-properties.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var anObject = require('../internals/an-object');
var objectKeys = require('../internals/object-keys');

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};

},{"../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/object-keys":"node_modules/core-js/internals/object-keys.js"}],"node_modules/core-js/internals/html.js":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');

module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js"}],"node_modules/core-js/internals/object-create.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var defineProperties = require('../internals/object-define-properties');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = require('../internals/hidden-keys');
var html = require('../internals/html');
var documentCreateElement = require('../internals/document-create-element');
var sharedKey = require('../internals/shared-key');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

},{"../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/object-define-properties":"node_modules/core-js/internals/object-define-properties.js","../internals/enum-bug-keys":"node_modules/core-js/internals/enum-bug-keys.js","../internals/hidden-keys":"node_modules/core-js/internals/hidden-keys.js","../internals/html":"node_modules/core-js/internals/html.js","../internals/document-create-element":"node_modules/core-js/internals/document-create-element.js","../internals/shared-key":"node_modules/core-js/internals/shared-key.js"}],"node_modules/core-js/internals/object-get-own-property-names-external.js":[function(require,module,exports) {
var toIndexedObject = require('../internals/to-indexed-object');
var nativeGetOwnPropertyNames = require('../internals/object-get-own-property-names').f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};

},{"../internals/to-indexed-object":"node_modules/core-js/internals/to-indexed-object.js","../internals/object-get-own-property-names":"node_modules/core-js/internals/object-get-own-property-names.js"}],"node_modules/core-js/internals/well-known-symbol.js":[function(require,module,exports) {

var global = require('../internals/global');
var shared = require('../internals/shared');
var has = require('../internals/has');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/shared":"node_modules/core-js/internals/shared.js","../internals/has":"node_modules/core-js/internals/has.js","../internals/uid":"node_modules/core-js/internals/uid.js","../internals/native-symbol":"node_modules/core-js/internals/native-symbol.js","../internals/use-symbol-as-uid":"node_modules/core-js/internals/use-symbol-as-uid.js"}],"node_modules/core-js/internals/well-known-symbol-wrapped.js":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');

exports.f = wellKnownSymbol;

},{"../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/core-js/internals/define-well-known-symbol.js":[function(require,module,exports) {
var path = require('../internals/path');
var has = require('../internals/has');
var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
var defineProperty = require('../internals/object-define-property').f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};

},{"../internals/path":"node_modules/core-js/internals/path.js","../internals/has":"node_modules/core-js/internals/has.js","../internals/well-known-symbol-wrapped":"node_modules/core-js/internals/well-known-symbol-wrapped.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js"}],"node_modules/core-js/internals/set-to-string-tag.js":[function(require,module,exports) {
var defineProperty = require('../internals/object-define-property').f;
var has = require('../internals/has');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};

},{"../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js","../internals/has":"node_modules/core-js/internals/has.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/core-js/internals/a-function.js":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

},{}],"node_modules/core-js/internals/function-bind-context.js":[function(require,module,exports) {
var aFunction = require('../internals/a-function');

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"../internals/a-function":"node_modules/core-js/internals/a-function.js"}],"node_modules/core-js/internals/array-species-create.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var isArray = require('../internals/is-array');
var wellKnownSymbol = require('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

},{"../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/is-array":"node_modules/core-js/internals/is-array.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/core-js/internals/array-iteration.js":[function(require,module,exports) {
var bind = require('../internals/function-bind-context');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var arraySpeciesCreate = require('../internals/array-species-create');

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};

},{"../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/indexed-object":"node_modules/core-js/internals/indexed-object.js","../internals/to-object":"node_modules/core-js/internals/to-object.js","../internals/to-length":"node_modules/core-js/internals/to-length.js","../internals/array-species-create":"node_modules/core-js/internals/array-species-create.js"}],"node_modules/core-js/modules/es.symbol.js":[function(require,module,exports) {

'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var getBuiltIn = require('../internals/get-built-in');
var IS_PURE = require('../internals/is-pure');
var DESCRIPTORS = require('../internals/descriptors');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var fails = require('../internals/fails');
var has = require('../internals/has');
var isArray = require('../internals/is-array');
var isObject = require('../internals/is-object');
var anObject = require('../internals/an-object');
var toObject = require('../internals/to-object');
var toIndexedObject = require('../internals/to-indexed-object');
var toPrimitive = require('../internals/to-primitive');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var nativeObjectCreate = require('../internals/object-create');
var objectKeys = require('../internals/object-keys');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var shared = require('../internals/shared');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var uid = require('../internals/uid');
var wellKnownSymbol = require('../internals/well-known-symbol');
var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');
var setToStringTag = require('../internals/set-to-string-tag');
var InternalStateModule = require('../internals/internal-state');
var $forEach = require('../internals/array-iteration').forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/global":"node_modules/core-js/internals/global.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/native-symbol":"node_modules/core-js/internals/native-symbol.js","../internals/use-symbol-as-uid":"node_modules/core-js/internals/use-symbol-as-uid.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/has":"node_modules/core-js/internals/has.js","../internals/is-array":"node_modules/core-js/internals/is-array.js","../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/to-object":"node_modules/core-js/internals/to-object.js","../internals/to-indexed-object":"node_modules/core-js/internals/to-indexed-object.js","../internals/to-primitive":"node_modules/core-js/internals/to-primitive.js","../internals/create-property-descriptor":"node_modules/core-js/internals/create-property-descriptor.js","../internals/object-create":"node_modules/core-js/internals/object-create.js","../internals/object-keys":"node_modules/core-js/internals/object-keys.js","../internals/object-get-own-property-names":"node_modules/core-js/internals/object-get-own-property-names.js","../internals/object-get-own-property-names-external":"node_modules/core-js/internals/object-get-own-property-names-external.js","../internals/object-get-own-property-symbols":"node_modules/core-js/internals/object-get-own-property-symbols.js","../internals/object-get-own-property-descriptor":"node_modules/core-js/internals/object-get-own-property-descriptor.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js","../internals/object-property-is-enumerable":"node_modules/core-js/internals/object-property-is-enumerable.js","../internals/create-non-enumerable-property":"node_modules/core-js/internals/create-non-enumerable-property.js","../internals/redefine":"node_modules/core-js/internals/redefine.js","../internals/shared":"node_modules/core-js/internals/shared.js","../internals/shared-key":"node_modules/core-js/internals/shared-key.js","../internals/hidden-keys":"node_modules/core-js/internals/hidden-keys.js","../internals/uid":"node_modules/core-js/internals/uid.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js","../internals/well-known-symbol-wrapped":"node_modules/core-js/internals/well-known-symbol-wrapped.js","../internals/define-well-known-symbol":"node_modules/core-js/internals/define-well-known-symbol.js","../internals/set-to-string-tag":"node_modules/core-js/internals/set-to-string-tag.js","../internals/internal-state":"node_modules/core-js/internals/internal-state.js","../internals/array-iteration":"node_modules/core-js/internals/array-iteration.js"}],"node_modules/core-js/modules/es.symbol.description.js":[function(require,module,exports) {

// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var has = require('../internals/has');
var isObject = require('../internals/is-object');
var defineProperty = require('../internals/object-define-property').f;
var copyConstructorProperties = require('../internals/copy-constructor-properties');

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/global":"node_modules/core-js/internals/global.js","../internals/has":"node_modules/core-js/internals/has.js","../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js","../internals/copy-constructor-properties":"node_modules/core-js/internals/copy-constructor-properties.js"}],"node_modules/core-js/modules/es.symbol.iterator.js":[function(require,module,exports) {
var defineWellKnownSymbol = require('../internals/define-well-known-symbol');

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');

},{"../internals/define-well-known-symbol":"node_modules/core-js/internals/define-well-known-symbol.js"}],"node_modules/core-js/internals/create-property.js":[function(require,module,exports) {
'use strict';
var toPrimitive = require('../internals/to-primitive');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

},{"../internals/to-primitive":"node_modules/core-js/internals/to-primitive.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js","../internals/create-property-descriptor":"node_modules/core-js/internals/create-property-descriptor.js"}],"node_modules/core-js/internals/array-method-has-species-support.js":[function(require,module,exports) {
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

},{"../internals/fails":"node_modules/core-js/internals/fails.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js","../internals/engine-v8-version":"node_modules/core-js/internals/engine-v8-version.js"}],"node_modules/core-js/modules/es.array.concat.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isArray = require('../internals/is-array');
var isObject = require('../internals/is-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var createProperty = require('../internals/create-property');
var arraySpeciesCreate = require('../internals/array-species-create');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/is-array":"node_modules/core-js/internals/is-array.js","../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/to-object":"node_modules/core-js/internals/to-object.js","../internals/to-length":"node_modules/core-js/internals/to-length.js","../internals/create-property":"node_modules/core-js/internals/create-property.js","../internals/array-species-create":"node_modules/core-js/internals/array-species-create.js","../internals/array-method-has-species-support":"node_modules/core-js/internals/array-method-has-species-support.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js","../internals/engine-v8-version":"node_modules/core-js/internals/engine-v8-version.js"}],"node_modules/core-js/modules/es.array.filter.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $filter = require('../internals/array-iteration').filter;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/array-iteration":"node_modules/core-js/internals/array-iteration.js","../internals/array-method-has-species-support":"node_modules/core-js/internals/array-method-has-species-support.js"}],"node_modules/core-js/internals/array-method-is-strict.js":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

},{"../internals/fails":"node_modules/core-js/internals/fails.js"}],"node_modules/core-js/internals/array-for-each.js":[function(require,module,exports) {
'use strict';
var $forEach = require('../internals/array-iteration').forEach;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

},{"../internals/array-iteration":"node_modules/core-js/internals/array-iteration.js","../internals/array-method-is-strict":"node_modules/core-js/internals/array-method-is-strict.js"}],"node_modules/core-js/modules/es.array.for-each.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var forEach = require('../internals/array-for-each');

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/array-for-each":"node_modules/core-js/internals/array-for-each.js"}],"node_modules/core-js/internals/iterator-close.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

},{"../internals/an-object":"node_modules/core-js/internals/an-object.js"}],"node_modules/core-js/internals/call-with-safe-iteration-closing.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var iteratorClose = require('../internals/iterator-close');

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};

},{"../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/iterator-close":"node_modules/core-js/internals/iterator-close.js"}],"node_modules/core-js/internals/iterators.js":[function(require,module,exports) {
module.exports = {};

},{}],"node_modules/core-js/internals/is-array-iterator-method.js":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js","../internals/iterators":"node_modules/core-js/internals/iterators.js"}],"node_modules/core-js/internals/to-string-tag-support.js":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/core-js/internals/classof.js":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classofRaw = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

},{"../internals/to-string-tag-support":"node_modules/core-js/internals/to-string-tag-support.js","../internals/classof-raw":"node_modules/core-js/internals/classof-raw.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/core-js/internals/get-iterator-method.js":[function(require,module,exports) {
var classof = require('../internals/classof');
var Iterators = require('../internals/iterators');
var wellKnownSymbol = require('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"../internals/classof":"node_modules/core-js/internals/classof.js","../internals/iterators":"node_modules/core-js/internals/iterators.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/core-js/internals/array-from.js":[function(require,module,exports) {
'use strict';
var bind = require('../internals/function-bind-context');
var toObject = require('../internals/to-object');
var callWithSafeIterationClosing = require('../internals/call-with-safe-iteration-closing');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var toLength = require('../internals/to-length');
var createProperty = require('../internals/create-property');
var getIteratorMethod = require('../internals/get-iterator-method');

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};

},{"../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/to-object":"node_modules/core-js/internals/to-object.js","../internals/call-with-safe-iteration-closing":"node_modules/core-js/internals/call-with-safe-iteration-closing.js","../internals/is-array-iterator-method":"node_modules/core-js/internals/is-array-iterator-method.js","../internals/to-length":"node_modules/core-js/internals/to-length.js","../internals/create-property":"node_modules/core-js/internals/create-property.js","../internals/get-iterator-method":"node_modules/core-js/internals/get-iterator-method.js"}],"node_modules/core-js/internals/check-correctness-of-iteration.js":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

},{"../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/core-js/modules/es.array.from.js":[function(require,module,exports) {
var $ = require('../internals/export');
var from = require('../internals/array-from');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/array-from":"node_modules/core-js/internals/array-from.js","../internals/check-correctness-of-iteration":"node_modules/core-js/internals/check-correctness-of-iteration.js"}],"node_modules/core-js/internals/add-to-unscopables.js":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');
var create = require('../internals/object-create');
var definePropertyModule = require('../internals/object-define-property');

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

},{"../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js","../internals/object-create":"node_modules/core-js/internals/object-create.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js"}],"node_modules/core-js/modules/es.array.includes.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $includes = require('../internals/array-includes').includes;
var addToUnscopables = require('../internals/add-to-unscopables');

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/array-includes":"node_modules/core-js/internals/array-includes.js","../internals/add-to-unscopables":"node_modules/core-js/internals/add-to-unscopables.js"}],"node_modules/core-js/internals/correct-prototype-getter.js":[function(require,module,exports) {
var fails = require('../internals/fails');

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":"node_modules/core-js/internals/fails.js"}],"node_modules/core-js/internals/object-get-prototype-of.js":[function(require,module,exports) {
var has = require('../internals/has');
var toObject = require('../internals/to-object');
var sharedKey = require('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};

},{"../internals/has":"node_modules/core-js/internals/has.js","../internals/to-object":"node_modules/core-js/internals/to-object.js","../internals/shared-key":"node_modules/core-js/internals/shared-key.js","../internals/correct-prototype-getter":"node_modules/core-js/internals/correct-prototype-getter.js"}],"node_modules/core-js/internals/iterators-core.js":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/fails":"node_modules/core-js/internals/fails.js","../internals/object-get-prototype-of":"node_modules/core-js/internals/object-get-prototype-of.js","../internals/create-non-enumerable-property":"node_modules/core-js/internals/create-non-enumerable-property.js","../internals/has":"node_modules/core-js/internals/has.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js"}],"node_modules/core-js/internals/create-iterator-constructor.js":[function(require,module,exports) {
'use strict';
var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype;
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var setToStringTag = require('../internals/set-to-string-tag');
var Iterators = require('../internals/iterators');

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

},{"../internals/iterators-core":"node_modules/core-js/internals/iterators-core.js","../internals/object-create":"node_modules/core-js/internals/object-create.js","../internals/create-property-descriptor":"node_modules/core-js/internals/create-property-descriptor.js","../internals/set-to-string-tag":"node_modules/core-js/internals/set-to-string-tag.js","../internals/iterators":"node_modules/core-js/internals/iterators.js"}],"node_modules/core-js/internals/a-possible-prototype.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

},{"../internals/is-object":"node_modules/core-js/internals/is-object.js"}],"node_modules/core-js/internals/object-set-prototype-of.js":[function(require,module,exports) {
/* eslint-disable no-proto -- safe */
var anObject = require('../internals/an-object');
var aPossiblePrototype = require('../internals/a-possible-prototype');

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

},{"../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-possible-prototype":"node_modules/core-js/internals/a-possible-prototype.js"}],"node_modules/core-js/internals/define-iterator.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createIteratorConstructor = require('../internals/create-iterator-constructor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var Iterators = require('../internals/iterators');
var IteratorsCore = require('../internals/iterators-core');

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/create-iterator-constructor":"node_modules/core-js/internals/create-iterator-constructor.js","../internals/object-get-prototype-of":"node_modules/core-js/internals/object-get-prototype-of.js","../internals/object-set-prototype-of":"node_modules/core-js/internals/object-set-prototype-of.js","../internals/set-to-string-tag":"node_modules/core-js/internals/set-to-string-tag.js","../internals/create-non-enumerable-property":"node_modules/core-js/internals/create-non-enumerable-property.js","../internals/redefine":"node_modules/core-js/internals/redefine.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/iterators":"node_modules/core-js/internals/iterators.js","../internals/iterators-core":"node_modules/core-js/internals/iterators-core.js"}],"node_modules/core-js/modules/es.array.iterator.js":[function(require,module,exports) {
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var addToUnscopables = require('../internals/add-to-unscopables');
var Iterators = require('../internals/iterators');
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"../internals/to-indexed-object":"node_modules/core-js/internals/to-indexed-object.js","../internals/add-to-unscopables":"node_modules/core-js/internals/add-to-unscopables.js","../internals/iterators":"node_modules/core-js/internals/iterators.js","../internals/internal-state":"node_modules/core-js/internals/internal-state.js","../internals/define-iterator":"node_modules/core-js/internals/define-iterator.js"}],"node_modules/core-js/modules/es.array.join.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IndexedObject = require('../internals/indexed-object');
var toIndexedObject = require('../internals/to-indexed-object');
var arrayMethodIsStrict = require('../internals/array-method-is-strict');

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/indexed-object":"node_modules/core-js/internals/indexed-object.js","../internals/to-indexed-object":"node_modules/core-js/internals/to-indexed-object.js","../internals/array-method-is-strict":"node_modules/core-js/internals/array-method-is-strict.js"}],"node_modules/core-js/modules/es.array.map.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $map = require('../internals/array-iteration').map;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/array-iteration":"node_modules/core-js/internals/array-iteration.js","../internals/array-method-has-species-support":"node_modules/core-js/internals/array-method-has-species-support.js"}],"node_modules/core-js/internals/array-reduce.js":[function(require,module,exports) {
var aFunction = require('../internals/a-function');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');
var toLength = require('../internals/to-length');

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

},{"../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/to-object":"node_modules/core-js/internals/to-object.js","../internals/indexed-object":"node_modules/core-js/internals/indexed-object.js","../internals/to-length":"node_modules/core-js/internals/to-length.js"}],"node_modules/core-js/modules/es.array.reduce.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $reduce = require('../internals/array-reduce').left;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var CHROME_VERSION = require('../internals/engine-v8-version');
var IS_NODE = require('../internals/engine-is-node');

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/array-reduce":"node_modules/core-js/internals/array-reduce.js","../internals/array-method-is-strict":"node_modules/core-js/internals/array-method-is-strict.js","../internals/engine-v8-version":"node_modules/core-js/internals/engine-v8-version.js","../internals/engine-is-node":"node_modules/core-js/internals/engine-is-node.js"}],"node_modules/core-js/modules/es.array.reduce-right.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $reduceRight = require('../internals/array-reduce').right;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var CHROME_VERSION = require('../internals/engine-v8-version');
var IS_NODE = require('../internals/engine-is-node');

var STRICT_METHOD = arrayMethodIsStrict('reduceRight');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/array-reduce":"node_modules/core-js/internals/array-reduce.js","../internals/array-method-is-strict":"node_modules/core-js/internals/array-method-is-strict.js","../internals/engine-v8-version":"node_modules/core-js/internals/engine-v8-version.js","../internals/engine-is-node":"node_modules/core-js/internals/engine-is-node.js"}],"node_modules/core-js/modules/es.array.slice.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var isObject = require('../internals/is-object');
var isArray = require('../internals/is-array');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var toLength = require('../internals/to-length');
var toIndexedObject = require('../internals/to-indexed-object');
var createProperty = require('../internals/create-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/is-array":"node_modules/core-js/internals/is-array.js","../internals/to-absolute-index":"node_modules/core-js/internals/to-absolute-index.js","../internals/to-length":"node_modules/core-js/internals/to-length.js","../internals/to-indexed-object":"node_modules/core-js/internals/to-indexed-object.js","../internals/create-property":"node_modules/core-js/internals/create-property.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js","../internals/array-method-has-species-support":"node_modules/core-js/internals/array-method-has-species-support.js"}],"node_modules/core-js/modules/es.array.sort.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var aFunction = require('../internals/a-function');
var toObject = require('../internals/to-object');
var fails = require('../internals/fails');
var arrayMethodIsStrict = require('../internals/array-method-is-strict');

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/to-object":"node_modules/core-js/internals/to-object.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/array-method-is-strict":"node_modules/core-js/internals/array-method-is-strict.js"}],"node_modules/core-js/modules/es.date.to-json.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toObject = require('../internals/to-object');
var toPrimitive = require('../internals/to-primitive');

var FORCED = fails(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
});

// `Date.prototype.toJSON` method
// https://tc39.es/ecma262/#sec-date.prototype.tojson
$({ target: 'Date', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/to-object":"node_modules/core-js/internals/to-object.js","../internals/to-primitive":"node_modules/core-js/internals/to-primitive.js"}],"node_modules/core-js/modules/es.date.to-string.js":[function(require,module,exports) {
var redefine = require('../internals/redefine');

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}

},{"../internals/redefine":"node_modules/core-js/internals/redefine.js"}],"node_modules/core-js/modules/es.function.name.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var defineProperty = require('../internals/object-define-property').f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

},{"../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js"}],"node_modules/core-js/internals/object-assign.js":[function(require,module,exports) {
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var objectKeys = require('../internals/object-keys');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  /* global Symbol -- required for testing */
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;

},{"../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/object-keys":"node_modules/core-js/internals/object-keys.js","../internals/object-get-own-property-symbols":"node_modules/core-js/internals/object-get-own-property-symbols.js","../internals/object-property-is-enumerable":"node_modules/core-js/internals/object-property-is-enumerable.js","../internals/to-object":"node_modules/core-js/internals/to-object.js","../internals/indexed-object":"node_modules/core-js/internals/indexed-object.js"}],"node_modules/core-js/modules/es.object.assign.js":[function(require,module,exports) {
var $ = require('../internals/export');
var assign = require('../internals/object-assign');

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/object-assign":"node_modules/core-js/internals/object-assign.js"}],"node_modules/core-js/internals/object-to-array.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var objectKeys = require('../internals/object-keys');
var toIndexedObject = require('../internals/to-indexed-object');
var propertyIsEnumerable = require('../internals/object-property-is-enumerable').f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};

},{"../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/object-keys":"node_modules/core-js/internals/object-keys.js","../internals/to-indexed-object":"node_modules/core-js/internals/to-indexed-object.js","../internals/object-property-is-enumerable":"node_modules/core-js/internals/object-property-is-enumerable.js"}],"node_modules/core-js/modules/es.object.entries.js":[function(require,module,exports) {
var $ = require('../internals/export');
var $entries = require('../internals/object-to-array').entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/object-to-array":"node_modules/core-js/internals/object-to-array.js"}],"node_modules/core-js/internals/same-value.js":[function(require,module,exports) {
// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],"node_modules/core-js/modules/es.object.is.js":[function(require,module,exports) {
var $ = require('../internals/export');
var is = require('../internals/same-value');

// `Object.is` method
// https://tc39.es/ecma262/#sec-object.is
$({ target: 'Object', stat: true }, {
  is: is
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/same-value":"node_modules/core-js/internals/same-value.js"}],"node_modules/core-js/modules/es.object.keys.js":[function(require,module,exports) {
var $ = require('../internals/export');
var toObject = require('../internals/to-object');
var nativeKeys = require('../internals/object-keys');
var fails = require('../internals/fails');

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/to-object":"node_modules/core-js/internals/to-object.js","../internals/object-keys":"node_modules/core-js/internals/object-keys.js","../internals/fails":"node_modules/core-js/internals/fails.js"}],"node_modules/core-js/internals/object-to-string.js":[function(require,module,exports) {
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classof = require('../internals/classof');

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

},{"../internals/to-string-tag-support":"node_modules/core-js/internals/to-string-tag-support.js","../internals/classof":"node_modules/core-js/internals/classof.js"}],"node_modules/core-js/modules/es.object.to-string.js":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var redefine = require('../internals/redefine');
var toString = require('../internals/object-to-string');

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}

},{"../internals/to-string-tag-support":"node_modules/core-js/internals/to-string-tag-support.js","../internals/redefine":"node_modules/core-js/internals/redefine.js","../internals/object-to-string":"node_modules/core-js/internals/object-to-string.js"}],"node_modules/core-js/modules/es.object.values.js":[function(require,module,exports) {
var $ = require('../internals/export');
var $values = require('../internals/object-to-array').values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/object-to-array":"node_modules/core-js/internals/object-to-array.js"}],"node_modules/core-js/internals/regexp-flags.js":[function(require,module,exports) {
'use strict';
var anObject = require('../internals/an-object');

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"../internals/an-object":"node_modules/core-js/internals/an-object.js"}],"node_modules/core-js/internals/regexp-sticky-helpers.js":[function(require,module,exports) {
'use strict';

var fails = require('./fails');

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

},{"./fails":"node_modules/core-js/internals/fails.js"}],"node_modules/core-js/internals/regexp-exec.js":[function(require,module,exports) {
'use strict';
var regexpFlags = require('./regexp-flags');
var stickyHelpers = require('./regexp-sticky-helpers');

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

},{"./regexp-flags":"node_modules/core-js/internals/regexp-flags.js","./regexp-sticky-helpers":"node_modules/core-js/internals/regexp-sticky-helpers.js"}],"node_modules/core-js/modules/es.regexp.exec.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var exec = require('../internals/regexp-exec');

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/regexp-exec":"node_modules/core-js/internals/regexp-exec.js"}],"node_modules/core-js/modules/es.regexp.to-string.js":[function(require,module,exports) {
'use strict';
var redefine = require('../internals/redefine');
var anObject = require('../internals/an-object');
var fails = require('../internals/fails');
var flags = require('../internals/regexp-flags');

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}

},{"../internals/redefine":"node_modules/core-js/internals/redefine.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/regexp-flags":"node_modules/core-js/internals/regexp-flags.js"}],"node_modules/core-js/internals/freezing.js":[function(require,module,exports) {
var fails = require('../internals/fails');

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});

},{"../internals/fails":"node_modules/core-js/internals/fails.js"}],"node_modules/core-js/internals/internal-metadata.js":[function(require,module,exports) {
var hiddenKeys = require('../internals/hidden-keys');
var isObject = require('../internals/is-object');
var has = require('../internals/has');
var defineProperty = require('../internals/object-define-property').f;
var uid = require('../internals/uid');
var FREEZING = require('../internals/freezing');

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;

},{"../internals/hidden-keys":"node_modules/core-js/internals/hidden-keys.js","../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/has":"node_modules/core-js/internals/has.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js","../internals/uid":"node_modules/core-js/internals/uid.js","../internals/freezing":"node_modules/core-js/internals/freezing.js"}],"node_modules/core-js/internals/iterate.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var toLength = require('../internals/to-length');
var bind = require('../internals/function-bind-context');
var getIteratorMethod = require('../internals/get-iterator-method');
var iteratorClose = require('../internals/iterator-close');

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

},{"../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/is-array-iterator-method":"node_modules/core-js/internals/is-array-iterator-method.js","../internals/to-length":"node_modules/core-js/internals/to-length.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/get-iterator-method":"node_modules/core-js/internals/get-iterator-method.js","../internals/iterator-close":"node_modules/core-js/internals/iterator-close.js"}],"node_modules/core-js/internals/an-instance.js":[function(require,module,exports) {
module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};

},{}],"node_modules/core-js/internals/inherit-if-required.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var setPrototypeOf = require('../internals/object-set-prototype-of');

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

},{"../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/object-set-prototype-of":"node_modules/core-js/internals/object-set-prototype-of.js"}],"node_modules/core-js/internals/collection.js":[function(require,module,exports) {

'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var isForced = require('../internals/is-forced');
var redefine = require('../internals/redefine');
var InternalMetadataModule = require('../internals/internal-metadata');
var iterate = require('../internals/iterate');
var anInstance = require('../internals/an-instance');
var isObject = require('../internals/is-object');
var fails = require('../internals/fails');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var setToStringTag = require('../internals/set-to-string-tag');
var inheritIfRequired = require('../internals/inherit-if-required');

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/global":"node_modules/core-js/internals/global.js","../internals/is-forced":"node_modules/core-js/internals/is-forced.js","../internals/redefine":"node_modules/core-js/internals/redefine.js","../internals/internal-metadata":"node_modules/core-js/internals/internal-metadata.js","../internals/iterate":"node_modules/core-js/internals/iterate.js","../internals/an-instance":"node_modules/core-js/internals/an-instance.js","../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/check-correctness-of-iteration":"node_modules/core-js/internals/check-correctness-of-iteration.js","../internals/set-to-string-tag":"node_modules/core-js/internals/set-to-string-tag.js","../internals/inherit-if-required":"node_modules/core-js/internals/inherit-if-required.js"}],"node_modules/core-js/internals/redefine-all.js":[function(require,module,exports) {
var redefine = require('../internals/redefine');

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};

},{"../internals/redefine":"node_modules/core-js/internals/redefine.js"}],"node_modules/core-js/internals/set-species.js":[function(require,module,exports) {
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var definePropertyModule = require('../internals/object-define-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var DESCRIPTORS = require('../internals/descriptors');

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

},{"../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js","../internals/descriptors":"node_modules/core-js/internals/descriptors.js"}],"node_modules/core-js/internals/collection-strong.js":[function(require,module,exports) {
var define;
'use strict';
var defineProperty = require('../internals/object-define-property').f;
var create = require('../internals/object-create');
var redefineAll = require('../internals/redefine-all');
var bind = require('../internals/function-bind-context');
var anInstance = require('../internals/an-instance');
var iterate = require('../internals/iterate');
var defineIterator = require('../internals/define-iterator');
var setSpecies = require('../internals/set-species');
var DESCRIPTORS = require('../internals/descriptors');
var fastKey = require('../internals/internal-metadata').fastKey;
var InternalStateModule = require('../internals/internal-state');

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};

},{"../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js","../internals/object-create":"node_modules/core-js/internals/object-create.js","../internals/redefine-all":"node_modules/core-js/internals/redefine-all.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/an-instance":"node_modules/core-js/internals/an-instance.js","../internals/iterate":"node_modules/core-js/internals/iterate.js","../internals/define-iterator":"node_modules/core-js/internals/define-iterator.js","../internals/set-species":"node_modules/core-js/internals/set-species.js","../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/internal-metadata":"node_modules/core-js/internals/internal-metadata.js","../internals/internal-state":"node_modules/core-js/internals/internal-state.js"}],"node_modules/core-js/modules/es.set.js":[function(require,module,exports) {
'use strict';
var collection = require('../internals/collection');
var collectionStrong = require('../internals/collection-strong');

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

},{"../internals/collection":"node_modules/core-js/internals/collection.js","../internals/collection-strong":"node_modules/core-js/internals/collection-strong.js"}],"node_modules/core-js/internals/is-regexp.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

},{"../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/classof-raw":"node_modules/core-js/internals/classof-raw.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/core-js/internals/not-a-regexp.js":[function(require,module,exports) {
var isRegExp = require('../internals/is-regexp');

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};

},{"../internals/is-regexp":"node_modules/core-js/internals/is-regexp.js"}],"node_modules/core-js/internals/correct-is-regexp-logic.js":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

},{"../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/core-js/modules/es.string.includes.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/not-a-regexp":"node_modules/core-js/internals/not-a-regexp.js","../internals/require-object-coercible":"node_modules/core-js/internals/require-object-coercible.js","../internals/correct-is-regexp-logic":"node_modules/core-js/internals/correct-is-regexp-logic.js"}],"node_modules/core-js/internals/string-multibyte.js":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');
var requireObjectCoercible = require('../internals/require-object-coercible');

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

},{"../internals/to-integer":"node_modules/core-js/internals/to-integer.js","../internals/require-object-coercible":"node_modules/core-js/internals/require-object-coercible.js"}],"node_modules/core-js/modules/es.string.iterator.js":[function(require,module,exports) {
'use strict';
var charAt = require('../internals/string-multibyte').charAt;
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

},{"../internals/string-multibyte":"node_modules/core-js/internals/string-multibyte.js","../internals/internal-state":"node_modules/core-js/internals/internal-state.js","../internals/define-iterator":"node_modules/core-js/internals/define-iterator.js"}],"node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":[function(require,module,exports) {
'use strict';
// TODO: Remove from `core-js@4` since it's moved to entry points
require('../modules/es.regexp.exec');
var redefine = require('../internals/redefine');
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var regexpExec = require('../internals/regexp-exec');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};

},{"../modules/es.regexp.exec":"node_modules/core-js/modules/es.regexp.exec.js","../internals/redefine":"node_modules/core-js/internals/redefine.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js","../internals/regexp-exec":"node_modules/core-js/internals/regexp-exec.js","../internals/create-non-enumerable-property":"node_modules/core-js/internals/create-non-enumerable-property.js"}],"node_modules/core-js/internals/advance-string-index.js":[function(require,module,exports) {
'use strict';
var charAt = require('../internals/string-multibyte').charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

},{"../internals/string-multibyte":"node_modules/core-js/internals/string-multibyte.js"}],"node_modules/core-js/internals/get-substitution.js":[function(require,module,exports) {
var toObject = require('../internals/to-object');

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

},{"../internals/to-object":"node_modules/core-js/internals/to-object.js"}],"node_modules/core-js/internals/regexp-exec-abstract.js":[function(require,module,exports) {
var classof = require('./classof-raw');
var regexpExec = require('./regexp-exec');

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};


},{"./classof-raw":"node_modules/core-js/internals/classof-raw.js","./regexp-exec":"node_modules/core-js/internals/regexp-exec.js"}],"node_modules/core-js/modules/es.string.replace.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var toLength = require('../internals/to-length');
var toInteger = require('../internals/to-integer');
var requireObjectCoercible = require('../internals/require-object-coercible');
var advanceStringIndex = require('../internals/advance-string-index');
var getSubstitution = require('../internals/get-substitution');
var regExpExec = require('../internals/regexp-exec-abstract');

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});

},{"../internals/fix-regexp-well-known-symbol-logic":"node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/to-length":"node_modules/core-js/internals/to-length.js","../internals/to-integer":"node_modules/core-js/internals/to-integer.js","../internals/require-object-coercible":"node_modules/core-js/internals/require-object-coercible.js","../internals/advance-string-index":"node_modules/core-js/internals/advance-string-index.js","../internals/get-substitution":"node_modules/core-js/internals/get-substitution.js","../internals/regexp-exec-abstract":"node_modules/core-js/internals/regexp-exec-abstract.js"}],"node_modules/core-js/internals/collection-add-all.js":[function(require,module,exports) {
'use strict';
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');

// https://github.com/tc39/collection-methods
module.exports = function (/* ...elements */) {
  var set = anObject(this);
  var adder = aFunction(set.add);
  for (var k = 0, len = arguments.length; k < len; k++) {
    adder.call(set, arguments[k]);
  }
  return set;
};

},{"../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js"}],"node_modules/core-js/modules/esnext.set.add-all.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var collectionAddAll = require('../internals/collection-add-all');

// `Set.prototype.addAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  addAll: function addAll(/* ...elements */) {
    return collectionAddAll.apply(this, arguments);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/collection-add-all":"node_modules/core-js/internals/collection-add-all.js"}],"node_modules/core-js/internals/collection-delete-all.js":[function(require,module,exports) {
'use strict';
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');

// https://github.com/tc39/collection-methods
module.exports = function (/* ...elements */) {
  var collection = anObject(this);
  var remover = aFunction(collection['delete']);
  var allDeleted = true;
  var wasDeleted;
  for (var k = 0, len = arguments.length; k < len; k++) {
    wasDeleted = remover.call(collection, arguments[k]);
    allDeleted = allDeleted && wasDeleted;
  }
  return !!allDeleted;
};

},{"../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js"}],"node_modules/core-js/modules/esnext.set.delete-all.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var collectionDeleteAll = require('../internals/collection-delete-all');

// `Set.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  deleteAll: function deleteAll(/* ...elements */) {
    return collectionDeleteAll.apply(this, arguments);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/collection-delete-all":"node_modules/core-js/internals/collection-delete-all.js"}],"node_modules/core-js/internals/species-constructor.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var wellKnownSymbol = require('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

},{"../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/core-js/modules/esnext.set.difference.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var getBuiltIn = require('../internals/get-built-in');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var speciesConstructor = require('../internals/species-constructor');
var iterate = require('../internals/iterate');

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  difference: function difference(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
    var remover = aFunction(newSet['delete']);
    iterate(iterable, function (value) {
      remover.call(newSet, value);
    });
    return newSet;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/species-constructor":"node_modules/core-js/internals/species-constructor.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/internals/get-iterator.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var getIteratorMethod = require('../internals/get-iterator-method');

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};

},{"../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/get-iterator-method":"node_modules/core-js/internals/get-iterator-method.js"}],"node_modules/core-js/internals/get-set-iterator.js":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var getIterator = require('../internals/get-iterator');

module.exports = IS_PURE ? getIterator : function (it) {
  // eslint-disable-next-line no-undef -- safe
  return Set.prototype.values.call(it);
};

},{"../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/get-iterator":"node_modules/core-js/internals/get-iterator.js"}],"node_modules/core-js/modules/esnext.set.every.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var bind = require('../internals/function-bind-context');
var getSetIterator = require('../internals/get-set-iterator');
var iterate = require('../internals/iterate');

// `Set.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  every: function every(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return !iterate(iterator, function (value, stop) {
      if (!boundFunction(value, value, set)) return stop();
    }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/get-set-iterator":"node_modules/core-js/internals/get-set-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.set.filter.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var getBuiltIn = require('../internals/get-built-in');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var bind = require('../internals/function-bind-context');
var speciesConstructor = require('../internals/species-constructor');
var getSetIterator = require('../internals/get-set-iterator');
var iterate = require('../internals/iterate');

// `Set.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
    var adder = aFunction(newSet.add);
    iterate(iterator, function (value) {
      if (boundFunction(value, value, set)) adder.call(newSet, value);
    }, { IS_ITERATOR: true });
    return newSet;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/species-constructor":"node_modules/core-js/internals/species-constructor.js","../internals/get-set-iterator":"node_modules/core-js/internals/get-set-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.set.find.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var bind = require('../internals/function-bind-context');
var getSetIterator = require('../internals/get-set-iterator');
var iterate = require('../internals/iterate');

// `Set.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  find: function find(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate(iterator, function (value, stop) {
      if (boundFunction(value, value, set)) return stop(value);
    }, { IS_ITERATOR: true, INTERRUPTED: true }).result;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/get-set-iterator":"node_modules/core-js/internals/get-set-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.set.intersection.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var getBuiltIn = require('../internals/get-built-in');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var speciesConstructor = require('../internals/species-constructor');
var iterate = require('../internals/iterate');

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  intersection: function intersection(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
    var hasCheck = aFunction(set.has);
    var adder = aFunction(newSet.add);
    iterate(iterable, function (value) {
      if (hasCheck.call(set, value)) adder.call(newSet, value);
    });
    return newSet;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/species-constructor":"node_modules/core-js/internals/species-constructor.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.set.is-disjoint-from.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var iterate = require('../internals/iterate');

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  isDisjointFrom: function isDisjointFrom(iterable) {
    var set = anObject(this);
    var hasCheck = aFunction(set.has);
    return !iterate(iterable, function (value, stop) {
      if (hasCheck.call(set, value) === true) return stop();
    }, { INTERRUPTED: true }).stopped;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.set.is-subset-of.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var getBuiltIn = require('../internals/get-built-in');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var getIterator = require('../internals/get-iterator');
var iterate = require('../internals/iterate');

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  isSubsetOf: function isSubsetOf(iterable) {
    var iterator = getIterator(this);
    var otherSet = anObject(iterable);
    var hasCheck = otherSet.has;
    if (typeof hasCheck != 'function') {
      otherSet = new (getBuiltIn('Set'))(iterable);
      hasCheck = aFunction(otherSet.has);
    }
    return !iterate(iterator, function (value, stop) {
      if (hasCheck.call(otherSet, value) === false) return stop();
    }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/get-iterator":"node_modules/core-js/internals/get-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.set.is-superset-of.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var iterate = require('../internals/iterate');

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  isSupersetOf: function isSupersetOf(iterable) {
    var set = anObject(this);
    var hasCheck = aFunction(set.has);
    return !iterate(iterable, function (value, stop) {
      if (hasCheck.call(set, value) === false) return stop();
    }, { INTERRUPTED: true }).stopped;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.set.join.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var getSetIterator = require('../internals/get-set-iterator');
var iterate = require('../internals/iterate');

// `Set.prototype.join` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  join: function join(separator) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var sep = separator === undefined ? ',' : String(separator);
    var result = [];
    iterate(iterator, result.push, { that: result, IS_ITERATOR: true });
    return result.join(sep);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/get-set-iterator":"node_modules/core-js/internals/get-set-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.set.map.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var getBuiltIn = require('../internals/get-built-in');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var bind = require('../internals/function-bind-context');
var speciesConstructor = require('../internals/species-constructor');
var getSetIterator = require('../internals/get-set-iterator');
var iterate = require('../internals/iterate');

// `Set.prototype.map` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  map: function map(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
    var adder = aFunction(newSet.add);
    iterate(iterator, function (value) {
      adder.call(newSet, boundFunction(value, value, set));
    }, { IS_ITERATOR: true });
    return newSet;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/species-constructor":"node_modules/core-js/internals/species-constructor.js","../internals/get-set-iterator":"node_modules/core-js/internals/get-set-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.set.reduce.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var getSetIterator = require('../internals/get-set-iterator');
var iterate = require('../internals/iterate');

// `Set.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aFunction(callbackfn);
    iterate(iterator, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, value, set);
      }
    }, { IS_ITERATOR: true });
    if (noInitial) throw TypeError('Reduce of empty set with no initial value');
    return accumulator;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/get-set-iterator":"node_modules/core-js/internals/get-set-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.set.some.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var bind = require('../internals/function-bind-context');
var getSetIterator = require('../internals/get-set-iterator');
var iterate = require('../internals/iterate');

// `Set.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  some: function some(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate(iterator, function (value, stop) {
      if (boundFunction(value, value, set)) return stop();
    }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/get-set-iterator":"node_modules/core-js/internals/get-set-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.set.symmetric-difference.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var getBuiltIn = require('../internals/get-built-in');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var speciesConstructor = require('../internals/species-constructor');
var iterate = require('../internals/iterate');

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  symmetricDifference: function symmetricDifference(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
    var remover = aFunction(newSet['delete']);
    var adder = aFunction(newSet.add);
    iterate(iterable, function (value) {
      remover.call(newSet, value) || adder.call(newSet, value);
    });
    return newSet;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/species-constructor":"node_modules/core-js/internals/species-constructor.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.set.union.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var getBuiltIn = require('../internals/get-built-in');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var speciesConstructor = require('../internals/species-constructor');
var iterate = require('../internals/iterate');

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: IS_PURE }, {
  union: function union(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
    iterate(iterable, aFunction(newSet.add), { that: newSet });
    return newSet;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/species-constructor":"node_modules/core-js/internals/species-constructor.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/internals/dom-iterables.js":[function(require,module,exports) {
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

},{}],"node_modules/core-js/modules/web.dom-collections.for-each.js":[function(require,module,exports) {

var global = require('../internals/global');
var DOMIterables = require('../internals/dom-iterables');
var forEach = require('../internals/array-for-each');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/dom-iterables":"node_modules/core-js/internals/dom-iterables.js","../internals/array-for-each":"node_modules/core-js/internals/array-for-each.js","../internals/create-non-enumerable-property":"node_modules/core-js/internals/create-non-enumerable-property.js"}],"node_modules/core-js/modules/web.dom-collections.iterator.js":[function(require,module,exports) {

var global = require('../internals/global');
var DOMIterables = require('../internals/dom-iterables');
var ArrayIteratorMethods = require('../modules/es.array.iterator');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var wellKnownSymbol = require('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/dom-iterables":"node_modules/core-js/internals/dom-iterables.js","../modules/es.array.iterator":"node_modules/core-js/modules/es.array.iterator.js","../internals/create-non-enumerable-property":"node_modules/core-js/internals/create-non-enumerable-property.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/core-js/modules/web.url.to-json.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return URL.prototype.toString.call(this);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js"}],"node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"node_modules/core-js/internals/whitespaces.js":[function(require,module,exports) {
// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],"node_modules/core-js/internals/string-trim.js":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');
var whitespaces = require('../internals/whitespaces');

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

},{"../internals/require-object-coercible":"node_modules/core-js/internals/require-object-coercible.js","../internals/whitespaces":"node_modules/core-js/internals/whitespaces.js"}],"node_modules/core-js/internals/number-parse-float.js":[function(require,module,exports) {

var global = require('../internals/global');
var trim = require('../internals/string-trim').trim;
var whitespaces = require('../internals/whitespaces');

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/string-trim":"node_modules/core-js/internals/string-trim.js","../internals/whitespaces":"node_modules/core-js/internals/whitespaces.js"}],"node_modules/core-js/modules/es.parse-float.js":[function(require,module,exports) {
var $ = require('../internals/export');
var parseFloatImplementation = require('../internals/number-parse-float');

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/number-parse-float":"node_modules/core-js/internals/number-parse-float.js"}],"node_modules/core-js/modules/es.string.split.js":[function(require,module,exports) {
'use strict';
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var isRegExp = require('../internals/is-regexp');
var anObject = require('../internals/an-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
var speciesConstructor = require('../internals/species-constructor');
var advanceStringIndex = require('../internals/advance-string-index');
var toLength = require('../internals/to-length');
var callRegExpExec = require('../internals/regexp-exec-abstract');
var regexpExec = require('../internals/regexp-exec');
var fails = require('../internals/fails');

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);

},{"../internals/fix-regexp-well-known-symbol-logic":"node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js","../internals/is-regexp":"node_modules/core-js/internals/is-regexp.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/require-object-coercible":"node_modules/core-js/internals/require-object-coercible.js","../internals/species-constructor":"node_modules/core-js/internals/species-constructor.js","../internals/advance-string-index":"node_modules/core-js/internals/advance-string-index.js","../internals/to-length":"node_modules/core-js/internals/to-length.js","../internals/regexp-exec-abstract":"node_modules/core-js/internals/regexp-exec-abstract.js","../internals/regexp-exec":"node_modules/core-js/internals/regexp-exec.js","../internals/fails":"node_modules/core-js/internals/fails.js"}],"node_modules/dataframe-js/lib/reusables.js":[function(require,module,exports) {
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-float");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.set");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/esnext.set.add-all");

require("core-js/modules/esnext.set.delete-all");

require("core-js/modules/esnext.set.difference");

require("core-js/modules/esnext.set.every");

require("core-js/modules/esnext.set.filter");

require("core-js/modules/esnext.set.find");

require("core-js/modules/esnext.set.intersection");

require("core-js/modules/esnext.set.is-disjoint-from");

require("core-js/modules/esnext.set.is-subset-of");

require("core-js/modules/esnext.set.is-superset-of");

require("core-js/modules/esnext.set.join");

require("core-js/modules/esnext.set.map");

require("core-js/modules/esnext.set.reduce");

require("core-js/modules/esnext.set.some");

require("core-js/modules/esnext.set.symmetric-difference");

require("core-js/modules/esnext.set.union");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayOfType = isArrayOfType;
exports.isNumber = isNumber;
exports.arrayEqual = arrayEqual;
exports.transpose = transpose;
exports.makeGenerator = makeGenerator;
exports.iter = iter;
exports.chain = chain;
exports.xSplit = xSplit;
exports.xReplace = xReplace;
exports.xContains = xContains;
exports.hashCode = hashCode;

require("regenerator-runtime/runtime");

var _marked = regeneratorRuntime.mark(makeGenerator),
    _marked2 = regeneratorRuntime.mark(createIterGenerator);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function isArrayOfType(value, ofType) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return value instanceof Array && value.hasOwnProperty(index) && (ofType === String ? typeof value[index] === "string" : value[index] instanceof ofType) ? true : false;
}

function isNumber(x) {
  return !isNaN(parseFloat(x)) && isFinite(x);
}

function arrayEqual(a, b) {
  var byOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return byOrder ? Object.keys(a).map(function (x) {
    return a[x] === b[x];
  }).reduce(function (p, n) {
    return p ? n : p;
  }, true) : _toConsumableArray(new Set(a.filter(function (x) {
    return !new Set(b).has(x);
  }))).length === 0;
}

function transpose(table) {
  var tableSize = table.map(function (row) {
    return row.length;
  }).reduce(function (p, n) {
    return Math.max(p, n);
  }, 0);
  return _toConsumableArray(Array(tableSize).keys()).map(function (index) {
    return table.map(function (row) {
      return row[index];
    });
  });
}

function makeGenerator(x) {
  return regeneratorRuntime.wrap(function makeGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield(x, "t0", 1);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function createIterGenerator(data, func) {
  var abort,
      i,
      _iteratorNormalCompletion,
      _didIteratorError,
      _iteratorError,
      _iterator,
      _step,
      iteration,
      modifiedRow,
      _args2 = arguments;

  return regeneratorRuntime.wrap(function createIterGenerator$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          abort = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : function () {
            return false;
          };
          i = 0;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context2.prev = 5;
          _iterator = data[Symbol.iterator]();

        case 7:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context2.next = 18;
            break;
          }

          iteration = _step.value;

          if (!abort()) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return");

        case 11:
          modifiedRow = func(iteration, i++);

          if (!modifiedRow) {
            _context2.next = 15;
            break;
          }

          _context2.next = 15;
          return modifiedRow;

        case 15:
          _iteratorNormalCompletion = true;
          _context2.next = 7;
          break;

        case 18:
          _context2.next = 24;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](5);
          _didIteratorError = true;
          _iteratorError = _context2.t0;

        case 24:
          _context2.prev = 24;
          _context2.prev = 25;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 27:
          _context2.prev = 27;

          if (!_didIteratorError) {
            _context2.next = 30;
            break;
          }

          throw _iteratorError;

        case 30:
          return _context2.finish(27);

        case 31:
          return _context2.finish(24);

        case 32:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[5, 20, 24, 32], [25,, 27, 31]]);
}

function iter(data, func) {
  var abort = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return false;
  };
  return Array.from(createIterGenerator(data, func, abort));
}

function chain(data) {
  for (var _len = arguments.length, operations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    operations[_key - 1] = arguments[_key];
  }

  return Array.from(iter(data, operations.reduce(function (p, n) {
    return function (x, i) {
      var prev = p(x, i);
      var next = prev ? n(prev, i) : false;
      return next === true ? prev : next;
    };
  }, function (x) {
    return x;
  })));
}

function xSplit(stringToSplit) {
  for (var _len2 = arguments.length, patterns = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    patterns[_key2 - 1] = arguments[_key2];
  }

  return patterns.reduce(function (prev, next) {
    return prev.map(function (str) {
      return str.split(next);
    }).reduce(function (p, n) {
      return [].concat(_toConsumableArray(p), _toConsumableArray(n));
    }, []);
  }, [stringToSplit]);
}

function xReplace(stringToReplace) {
  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  return patterns.reduce(function (prev, next) {
    return prev.split(next[0]).join(next[1]);
  }, stringToReplace);
}

function xContains(stringToFilter) {
  for (var _len4 = arguments.length, patterns = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    patterns[_key4 - 1] = arguments[_key4];
  }

  return patterns.filter(function (pattern) {
    return stringToFilter.includes(pattern);
  });
}

function hashCode(str) {
  var hash = 0;
  var char;
  if (str.length === 0) return hash;

  for (var i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash;
}
},{"core-js/modules/es.symbol":"node_modules/core-js/modules/es.symbol.js","core-js/modules/es.symbol.description":"node_modules/core-js/modules/es.symbol.description.js","core-js/modules/es.symbol.iterator":"node_modules/core-js/modules/es.symbol.iterator.js","core-js/modules/es.array.concat":"node_modules/core-js/modules/es.array.concat.js","core-js/modules/es.array.filter":"node_modules/core-js/modules/es.array.filter.js","core-js/modules/es.array.from":"node_modules/core-js/modules/es.array.from.js","core-js/modules/es.array.includes":"node_modules/core-js/modules/es.array.includes.js","core-js/modules/es.array.iterator":"node_modules/core-js/modules/es.array.iterator.js","core-js/modules/es.array.join":"node_modules/core-js/modules/es.array.join.js","core-js/modules/es.array.map":"node_modules/core-js/modules/es.array.map.js","core-js/modules/es.array.reduce":"node_modules/core-js/modules/es.array.reduce.js","core-js/modules/es.date.to-string":"node_modules/core-js/modules/es.date.to-string.js","core-js/modules/es.object.keys":"node_modules/core-js/modules/es.object.keys.js","core-js/modules/es.object.to-string":"node_modules/core-js/modules/es.object.to-string.js","core-js/modules/es.parse-float":"node_modules/core-js/modules/es.parse-float.js","core-js/modules/es.regexp.exec":"node_modules/core-js/modules/es.regexp.exec.js","core-js/modules/es.regexp.to-string":"node_modules/core-js/modules/es.regexp.to-string.js","core-js/modules/es.set":"node_modules/core-js/modules/es.set.js","core-js/modules/es.string.includes":"node_modules/core-js/modules/es.string.includes.js","core-js/modules/es.string.iterator":"node_modules/core-js/modules/es.string.iterator.js","core-js/modules/es.string.split":"node_modules/core-js/modules/es.string.split.js","core-js/modules/esnext.set.add-all":"node_modules/core-js/modules/esnext.set.add-all.js","core-js/modules/esnext.set.delete-all":"node_modules/core-js/modules/esnext.set.delete-all.js","core-js/modules/esnext.set.difference":"node_modules/core-js/modules/esnext.set.difference.js","core-js/modules/esnext.set.every":"node_modules/core-js/modules/esnext.set.every.js","core-js/modules/esnext.set.filter":"node_modules/core-js/modules/esnext.set.filter.js","core-js/modules/esnext.set.find":"node_modules/core-js/modules/esnext.set.find.js","core-js/modules/esnext.set.intersection":"node_modules/core-js/modules/esnext.set.intersection.js","core-js/modules/esnext.set.is-disjoint-from":"node_modules/core-js/modules/esnext.set.is-disjoint-from.js","core-js/modules/esnext.set.is-subset-of":"node_modules/core-js/modules/esnext.set.is-subset-of.js","core-js/modules/esnext.set.is-superset-of":"node_modules/core-js/modules/esnext.set.is-superset-of.js","core-js/modules/esnext.set.join":"node_modules/core-js/modules/esnext.set.join.js","core-js/modules/esnext.set.map":"node_modules/core-js/modules/esnext.set.map.js","core-js/modules/esnext.set.reduce":"node_modules/core-js/modules/esnext.set.reduce.js","core-js/modules/esnext.set.some":"node_modules/core-js/modules/esnext.set.some.js","core-js/modules/esnext.set.symmetric-difference":"node_modules/core-js/modules/esnext.set.symmetric-difference.js","core-js/modules/esnext.set.union":"node_modules/core-js/modules/esnext.set.union.js","core-js/modules/web.dom-collections.iterator":"node_modules/core-js/modules/web.dom-collections.iterator.js","regenerator-runtime/runtime":"node_modules/regenerator-runtime/runtime.js"}],"node_modules/core-js/modules/es.array.index-of.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $indexOf = require('../internals/array-includes').indexOf;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/array-includes":"node_modules/core-js/internals/array-includes.js","../internals/array-method-is-strict":"node_modules/core-js/internals/array-method-is-strict.js"}],"node_modules/core-js/modules/es.map.js":[function(require,module,exports) {
'use strict';
var collection = require('../internals/collection');
var collectionStrong = require('../internals/collection-strong');

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

},{"../internals/collection":"node_modules/core-js/internals/collection.js","../internals/collection-strong":"node_modules/core-js/internals/collection-strong.js"}],"node_modules/core-js/modules/es.object.get-prototype-of.js":[function(require,module,exports) {
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toObject = require('../internals/to-object');
var nativeGetPrototypeOf = require('../internals/object-get-prototype-of');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});


},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/to-object":"node_modules/core-js/internals/to-object.js","../internals/object-get-prototype-of":"node_modules/core-js/internals/object-get-prototype-of.js","../internals/correct-prototype-getter":"node_modules/core-js/internals/correct-prototype-getter.js"}],"node_modules/core-js/modules/es.object.set-prototype-of.js":[function(require,module,exports) {
var $ = require('../internals/export');
var setPrototypeOf = require('../internals/object-set-prototype-of');

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/object-set-prototype-of":"node_modules/core-js/internals/object-set-prototype-of.js"}],"node_modules/core-js/internals/function-bind.js":[function(require,module,exports) {
'use strict';
var aFunction = require('../internals/a-function');
var isObject = require('../internals/is-object');

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};

},{"../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/is-object":"node_modules/core-js/internals/is-object.js"}],"node_modules/core-js/modules/es.reflect.construct.js":[function(require,module,exports) {
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var aFunction = require('../internals/a-function');
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var create = require('../internals/object-create');
var bind = require('../internals/function-bind');
var fails = require('../internals/fails');

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/object-create":"node_modules/core-js/internals/object-create.js","../internals/function-bind":"node_modules/core-js/internals/function-bind.js","../internals/fails":"node_modules/core-js/internals/fails.js"}],"node_modules/core-js/modules/esnext.map.delete-all.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var collectionDeleteAll = require('../internals/collection-delete-all');

// `Map.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  deleteAll: function deleteAll(/* ...elements */) {
    return collectionDeleteAll.apply(this, arguments);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/collection-delete-all":"node_modules/core-js/internals/collection-delete-all.js"}],"node_modules/core-js/internals/get-map-iterator.js":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var getIterator = require('../internals/get-iterator');

module.exports = IS_PURE ? getIterator : function (it) {
  // eslint-disable-next-line no-undef -- safe
  return Map.prototype.entries.call(it);
};

},{"../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/get-iterator":"node_modules/core-js/internals/get-iterator.js"}],"node_modules/core-js/modules/esnext.map.every.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var bind = require('../internals/function-bind-context');
var getMapIterator = require('../internals/get-map-iterator');
var iterate = require('../internals/iterate');

// `Map.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  every: function every(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return !iterate(iterator, function (key, value, stop) {
      if (!boundFunction(value, key, map)) return stop();
    }, { AS_ENTRIES: true, IS_ITERATOR: true, INTERRUPTED: true }).stopped;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/get-map-iterator":"node_modules/core-js/internals/get-map-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.map.filter.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var getBuiltIn = require('../internals/get-built-in');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var bind = require('../internals/function-bind-context');
var speciesConstructor = require('../internals/species-constructor');
var getMapIterator = require('../internals/get-map-iterator');
var iterate = require('../internals/iterate');

// `Map.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
    var setter = aFunction(newMap.set);
    iterate(iterator, function (key, value) {
      if (boundFunction(value, key, map)) setter.call(newMap, key, value);
    }, { AS_ENTRIES: true, IS_ITERATOR: true });
    return newMap;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/species-constructor":"node_modules/core-js/internals/species-constructor.js","../internals/get-map-iterator":"node_modules/core-js/internals/get-map-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.map.find.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var bind = require('../internals/function-bind-context');
var getMapIterator = require('../internals/get-map-iterator');
var iterate = require('../internals/iterate');

// `Map.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  find: function find(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate(iterator, function (key, value, stop) {
      if (boundFunction(value, key, map)) return stop(value);
    }, { AS_ENTRIES: true, IS_ITERATOR: true, INTERRUPTED: true }).result;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/get-map-iterator":"node_modules/core-js/internals/get-map-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.map.find-key.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var bind = require('../internals/function-bind-context');
var getMapIterator = require('../internals/get-map-iterator');
var iterate = require('../internals/iterate');

// `Map.prototype.findKey` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  findKey: function findKey(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate(iterator, function (key, value, stop) {
      if (boundFunction(value, key, map)) return stop(key);
    }, { AS_ENTRIES: true, IS_ITERATOR: true, INTERRUPTED: true }).result;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/get-map-iterator":"node_modules/core-js/internals/get-map-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/internals/same-value-zero.js":[function(require,module,exports) {
// `SameValueZero` abstract operation
// https://tc39.es/ecma262/#sec-samevaluezero
module.exports = function (x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y || x != x && y != y;
};

},{}],"node_modules/core-js/modules/esnext.map.includes.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var getMapIterator = require('../internals/get-map-iterator');
var sameValueZero = require('../internals/same-value-zero');
var iterate = require('../internals/iterate');

// `Map.prototype.includes` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  includes: function includes(searchElement) {
    return iterate(getMapIterator(anObject(this)), function (key, value, stop) {
      if (sameValueZero(value, searchElement)) return stop();
    }, { AS_ENTRIES: true, IS_ITERATOR: true, INTERRUPTED: true }).stopped;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/get-map-iterator":"node_modules/core-js/internals/get-map-iterator.js","../internals/same-value-zero":"node_modules/core-js/internals/same-value-zero.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.map.key-of.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var getMapIterator = require('../internals/get-map-iterator');
var iterate = require('../internals/iterate');

// `Map.prototype.includes` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  keyOf: function keyOf(searchElement) {
    return iterate(getMapIterator(anObject(this)), function (key, value, stop) {
      if (value === searchElement) return stop(key);
    }, { AS_ENTRIES: true, IS_ITERATOR: true, INTERRUPTED: true }).result;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/get-map-iterator":"node_modules/core-js/internals/get-map-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.map.map-keys.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var getBuiltIn = require('../internals/get-built-in');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var bind = require('../internals/function-bind-context');
var speciesConstructor = require('../internals/species-constructor');
var getMapIterator = require('../internals/get-map-iterator');
var iterate = require('../internals/iterate');

// `Map.prototype.mapKeys` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  mapKeys: function mapKeys(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
    var setter = aFunction(newMap.set);
    iterate(iterator, function (key, value) {
      setter.call(newMap, boundFunction(value, key, map), value);
    }, { AS_ENTRIES: true, IS_ITERATOR: true });
    return newMap;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/species-constructor":"node_modules/core-js/internals/species-constructor.js","../internals/get-map-iterator":"node_modules/core-js/internals/get-map-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.map.map-values.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var getBuiltIn = require('../internals/get-built-in');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var bind = require('../internals/function-bind-context');
var speciesConstructor = require('../internals/species-constructor');
var getMapIterator = require('../internals/get-map-iterator');
var iterate = require('../internals/iterate');

// `Map.prototype.mapValues` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  mapValues: function mapValues(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
    var setter = aFunction(newMap.set);
    iterate(iterator, function (key, value) {
      setter.call(newMap, key, boundFunction(value, key, map));
    }, { AS_ENTRIES: true, IS_ITERATOR: true });
    return newMap;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/species-constructor":"node_modules/core-js/internals/species-constructor.js","../internals/get-map-iterator":"node_modules/core-js/internals/get-map-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.map.merge.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var iterate = require('../internals/iterate');

// `Map.prototype.merge` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  merge: function merge(iterable /* ...iterbles */) {
    var map = anObject(this);
    var setter = aFunction(map.set);
    var i = 0;
    while (i < arguments.length) {
      iterate(arguments[i++], setter, { that: map, AS_ENTRIES: true });
    }
    return map;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.map.reduce.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');
var getMapIterator = require('../internals/get-map-iterator');
var iterate = require('../internals/iterate');

// `Map.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aFunction(callbackfn);
    iterate(iterator, function (key, value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, key, map);
      }
    }, { AS_ENTRIES: true, IS_ITERATOR: true });
    if (noInitial) throw TypeError('Reduce of empty map with no initial value');
    return accumulator;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/get-map-iterator":"node_modules/core-js/internals/get-map-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.map.some.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var bind = require('../internals/function-bind-context');
var getMapIterator = require('../internals/get-map-iterator');
var iterate = require('../internals/iterate');

// `Set.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  some: function some(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate(iterator, function (key, value, stop) {
      if (boundFunction(value, key, map)) return stop();
    }, { AS_ENTRIES: true, IS_ITERATOR: true, INTERRUPTED: true }).stopped;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/get-map-iterator":"node_modules/core-js/internals/get-map-iterator.js","../internals/iterate":"node_modules/core-js/internals/iterate.js"}],"node_modules/core-js/modules/esnext.map.update.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var anObject = require('../internals/an-object');
var aFunction = require('../internals/a-function');

// `Set.prototype.update` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  update: function update(key, callback /* , thunk */) {
    var map = anObject(this);
    var length = arguments.length;
    aFunction(callback);
    var isPresentInMap = map.has(key);
    if (!isPresentInMap && length < 3) {
      throw TypeError('Updating absent value');
    }
    var value = isPresentInMap ? map.get(key) : aFunction(length > 2 ? arguments[2] : undefined)(key, map);
    map.set(key, callback(value, key, map));
    return map;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js"}],"node_modules/dataframe-js/lib/errors.js":[function(require,module,exports) {
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.map");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/esnext.map.delete-all");

require("core-js/modules/esnext.map.every");

require("core-js/modules/esnext.map.filter");

require("core-js/modules/esnext.map.find");

require("core-js/modules/esnext.map.find-key");

require("core-js/modules/esnext.map.includes");

require("core-js/modules/esnext.map.key-of");

require("core-js/modules/esnext.map.map-keys");

require("core-js/modules/esnext.map.map-values");

require("core-js/modules/esnext.map.merge");

require("core-js/modules/esnext.map.reduce");

require("core-js/modules/esnext.map.some");

require("core-js/modules/esnext.map.update");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrongTableNameError = exports.TableAlreadyExistsError = exports.SQLParseError = exports.ArgumentTypeError = exports.WrongSchemaError = exports.NoSuchColumnError = exports.MixedTypeError = exports.FileNotFoundError = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FileNotFoundError = function (_Error) {
  _inherits(FileNotFoundError, _Error);

  function FileNotFoundError(fileName) {
    var _this;

    _classCallCheck(this, FileNotFoundError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FileNotFoundError).call(this, Error));
    _this.message = "".concat(fileName, " not found. You maybe use a wrong path or url. Be sure you use absolute path, relative one being not supported.");
    _this.name = "FileNotFoundError";
    return _this;
  }

  return FileNotFoundError;
}(_wrapNativeSuper(Error));

exports.FileNotFoundError = FileNotFoundError;

var MixedTypeError = function (_TypeError) {
  _inherits(MixedTypeError, _TypeError);

  function MixedTypeError() {
    var _this2;

    _classCallCheck(this, MixedTypeError);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MixedTypeError).call(this, TypeError));

    for (var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++) {
      types[_key] = arguments[_key];
    }

    _this2.message = "can't work with multiple variable types: [".concat(types.join(","), "].");
    _this2.name = "MixedTypeError";
    return _this2;
  }

  return MixedTypeError;
}(_wrapNativeSuper(TypeError));

exports.MixedTypeError = MixedTypeError;

var NoSuchColumnError = function (_Error2) {
  _inherits(NoSuchColumnError, _Error2);

  function NoSuchColumnError(column, columns) {
    var _this3;

    _classCallCheck(this, NoSuchColumnError);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(NoSuchColumnError).call(this, Error));
    _this3.message = "".concat(column, " not found in [").concat(columns.join(", "), "].");
    _this3.name = "NoSuchColumnError";
    return _this3;
  }

  return NoSuchColumnError;
}(_wrapNativeSuper(Error));

exports.NoSuchColumnError = NoSuchColumnError;

var WrongSchemaError = function (_Error3) {
  _inherits(WrongSchemaError, _Error3);

  function WrongSchemaError(columns, expected) {
    var _this4;

    _classCallCheck(this, WrongSchemaError);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(WrongSchemaError).call(this, Error));
    _this4.message = "[".concat(columns.join(", "), "] while expecting [").concat(expected.join(", "), "].");
    _this4.name = "WrongSchemaError";
    return _this4;
  }

  return WrongSchemaError;
}(_wrapNativeSuper(Error));

exports.WrongSchemaError = WrongSchemaError;

var ArgumentTypeError = function (_TypeError2) {
  _inherits(ArgumentTypeError, _TypeError2);

  function ArgumentTypeError(input, expected) {
    var _this5;

    _classCallCheck(this, ArgumentTypeError);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(ArgumentTypeError).call(this, TypeError));
    _this5.message = "".concat(input && input.constructor ? input.constructor.name : _typeof(input), " while expecting ").concat(expected, ".");
    _this5.name = "ArgumentTypeError";
    return _this5;
  }

  return ArgumentTypeError;
}(_wrapNativeSuper(TypeError));

exports.ArgumentTypeError = ArgumentTypeError;

var SQLParseError = function (_Error4) {
  _inherits(SQLParseError, _Error4);

  function SQLParseError(message) {
    var _this6;

    _classCallCheck(this, SQLParseError);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(SQLParseError).call(this, Error));
    _this6.message = "".concat(message, ".");
    _this6.name = "SQLParseError";
    return _this6;
  }

  return SQLParseError;
}(_wrapNativeSuper(Error));

exports.SQLParseError = SQLParseError;

var TableAlreadyExistsError = function (_Error5) {
  _inherits(TableAlreadyExistsError, _Error5);

  function TableAlreadyExistsError(tableName) {
    var _this7;

    _classCallCheck(this, TableAlreadyExistsError);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(TableAlreadyExistsError).call(this, Error));
    _this7.message = "The SQL temporary table ".concat(tableName, " already exits. Use overwrite = true to overwrite it.");
    _this7.name = "TableAlreadyExistsError";
    return _this7;
  }

  return TableAlreadyExistsError;
}(_wrapNativeSuper(Error));

exports.TableAlreadyExistsError = TableAlreadyExistsError;

var WrongTableNameError = function (_Error6) {
  _inherits(WrongTableNameError, _Error6);

  function WrongTableNameError(tableName) {
    var _this8;

    _classCallCheck(this, WrongTableNameError);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(WrongTableNameError).call(this, Error));
    _this8.message = "The SQL temporary table ".concat(tableName, " is not allowed. Avoid to use Spaces, quotes, tabs....");
    _this8.name = "WrongTableNameError";
    return _this8;
  }

  return WrongTableNameError;
}(_wrapNativeSuper(Error));

exports.WrongTableNameError = WrongTableNameError;
},{"core-js/modules/es.symbol":"node_modules/core-js/modules/es.symbol.js","core-js/modules/es.symbol.description":"node_modules/core-js/modules/es.symbol.description.js","core-js/modules/es.symbol.iterator":"node_modules/core-js/modules/es.symbol.iterator.js","core-js/modules/es.array.concat":"node_modules/core-js/modules/es.array.concat.js","core-js/modules/es.array.index-of":"node_modules/core-js/modules/es.array.index-of.js","core-js/modules/es.array.iterator":"node_modules/core-js/modules/es.array.iterator.js","core-js/modules/es.array.join":"node_modules/core-js/modules/es.array.join.js","core-js/modules/es.date.to-string":"node_modules/core-js/modules/es.date.to-string.js","core-js/modules/es.function.name":"node_modules/core-js/modules/es.function.name.js","core-js/modules/es.map":"node_modules/core-js/modules/es.map.js","core-js/modules/es.object.get-prototype-of":"node_modules/core-js/modules/es.object.get-prototype-of.js","core-js/modules/es.object.set-prototype-of":"node_modules/core-js/modules/es.object.set-prototype-of.js","core-js/modules/es.object.to-string":"node_modules/core-js/modules/es.object.to-string.js","core-js/modules/es.reflect.construct":"node_modules/core-js/modules/es.reflect.construct.js","core-js/modules/es.regexp.to-string":"node_modules/core-js/modules/es.regexp.to-string.js","core-js/modules/es.string.iterator":"node_modules/core-js/modules/es.string.iterator.js","core-js/modules/esnext.map.delete-all":"node_modules/core-js/modules/esnext.map.delete-all.js","core-js/modules/esnext.map.every":"node_modules/core-js/modules/esnext.map.every.js","core-js/modules/esnext.map.filter":"node_modules/core-js/modules/esnext.map.filter.js","core-js/modules/esnext.map.find":"node_modules/core-js/modules/esnext.map.find.js","core-js/modules/esnext.map.find-key":"node_modules/core-js/modules/esnext.map.find-key.js","core-js/modules/esnext.map.includes":"node_modules/core-js/modules/esnext.map.includes.js","core-js/modules/esnext.map.key-of":"node_modules/core-js/modules/esnext.map.key-of.js","core-js/modules/esnext.map.map-keys":"node_modules/core-js/modules/esnext.map.map-keys.js","core-js/modules/esnext.map.map-values":"node_modules/core-js/modules/esnext.map.map-values.js","core-js/modules/esnext.map.merge":"node_modules/core-js/modules/esnext.map.merge.js","core-js/modules/esnext.map.reduce":"node_modules/core-js/modules/esnext.map.reduce.js","core-js/modules/esnext.map.some":"node_modules/core-js/modules/esnext.map.some.js","core-js/modules/esnext.map.update":"node_modules/core-js/modules/esnext.map.update.js","core-js/modules/web.dom-collections.iterator":"node_modules/core-js/modules/web.dom-collections.iterator.js"}],"node_modules/core-js/modules/es.object.freeze.js":[function(require,module,exports) {
var $ = require('../internals/export');
var FREEZING = require('../internals/freezing');
var fails = require('../internals/fails');
var isObject = require('../internals/is-object');
var onFreeze = require('../internals/internal-metadata').onFreeze;

var nativeFreeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { nativeFreeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/freezing":"node_modules/core-js/internals/freezing.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/internal-metadata":"node_modules/core-js/internals/internal-metadata.js"}],"node_modules/dataframe-js/lib/row.js":[function(require,module,exports) {
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.object.values");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _reusables = require("./reusables");

var _errors = require("./errors");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __columns__ = Symbol("columns");

var __values__ = Symbol("values");

var Row = function () {
  function Row(data, columns) {
    _classCallCheck(this, Row);

    if (!data) throw new _errors.ArgumentTypeError(data, "Row | Array | Object");
    this[__columns__] = columns ? columns : Object.keys(data);
    this[__values__] = Object.freeze(this._build(data));
  }

  _createClass(Row, [{
    key: Symbol.iterator,
    value: regeneratorRuntime.mark(function value() {
      var _i, _Object$values, value;

      return regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _i = 0, _Object$values = Object.values(this[__values__]);

            case 1:
              if (!(_i < _Object$values.length)) {
                _context.next = 8;
                break;
              }

              value = _Object$values[_i];
              _context.next = 5;
              return value;

            case 5:
              _i++;
              _context.next = 1;
              break;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, value, this);
    })
  }, {
    key: "__newInstance__",
    value: function __newInstance__(data, columns) {
      var _Object$assign;

      if (!(0, _reusables.arrayEqual)(this[__columns__], columns)) {
        return new Row(data, columns);
      }

      return Object.assign(Object.create(Object.getPrototypeOf(this)), this, (_Object$assign = {}, _defineProperty(_Object$assign, __values__, data), _defineProperty(_Object$assign, __columns__, _toConsumableArray(columns)), _Object$assign));
    }
  }, {
    key: "_build",
    value: function _build(data) {
      if (data instanceof Array) return this._fromArray(data);
      if (data instanceof Row) return this._fromObject(data[__values__]);
      if (data instanceof Object && data !== null) return this._fromObject(data);
      throw new _errors.ArgumentTypeError(data, "Row | Array | Object");
    }
  }, {
    key: "_fromObject",
    value: function _fromObject(object) {
      return Object.assign.apply(Object, [{}].concat(_toConsumableArray(this[__columns__].map(function (column) {
        return _defineProperty({}, column, object[column]);
      }))));
    }
  }, {
    key: "_fromArray",
    value: function _fromArray(array) {
      return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.entries(this[__columns__]).map(function (column) {
        return _defineProperty({}, column[1], array[column[0]]);
      }))));
    }
  }, {
    key: "toDict",
    value: function toDict() {
      return Object.assign({}, this[__values__]);
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return _toConsumableArray(this);
    }
  }, {
    key: "size",
    value: function size() {
      return this[__columns__].length;
    }
  }, {
    key: "hash",
    value: function hash() {
      return (0, _reusables.hashCode)(JSON.stringify(this[__values__]));
    }
  }, {
    key: "has",
    value: function has(columnName) {
      return this[__columns__].includes(columnName);
    }
  }, {
    key: "select",
    value: function select() {
      var _this = this;

      for (var _len = arguments.length, columnNames = new Array(_len), _key = 0; _key < _len; _key++) {
        columnNames[_key] = arguments[_key];
      }

      return this.__newInstance__(Object.assign.apply(Object, [{}].concat(_toConsumableArray(columnNames.map(function (column) {
        return _defineProperty({}, column, _this.get(column));
      })))), columnNames);
    }
  }, {
    key: "get",
    value: function get(columnToGet) {
      if (!this.has(columnToGet)) {
        throw new _errors.NoSuchColumnError(columnToGet, this[__columns__]);
      }

      return this[__values__][columnToGet];
    }
  }, {
    key: "set",
    value: function set(columnToSet, value) {
      var newRow = Object.assign({}, this[__values__], _defineProperty({}, columnToSet, value));
      return this.__newInstance__(newRow, Object.keys(newRow));
    }
  }, {
    key: "delete",
    value: function _delete(columnToDel) {
      if (!this.has(columnToDel)) {
        throw new _errors.NoSuchColumnError(columnToDel, this[__columns__]);
      }

      return this.select.apply(this, _toConsumableArray(this[__columns__].filter(function (column) {
        return column !== columnToDel;
      })));
    }
  }]);

  return Row;
}();

var _default = Row;
exports.default = _default;
},{"core-js/modules/es.symbol":"node_modules/core-js/modules/es.symbol.js","core-js/modules/es.symbol.description":"node_modules/core-js/modules/es.symbol.description.js","core-js/modules/es.symbol.iterator":"node_modules/core-js/modules/es.symbol.iterator.js","core-js/modules/es.array.concat":"node_modules/core-js/modules/es.array.concat.js","core-js/modules/es.array.filter":"node_modules/core-js/modules/es.array.filter.js","core-js/modules/es.array.from":"node_modules/core-js/modules/es.array.from.js","core-js/modules/es.array.includes":"node_modules/core-js/modules/es.array.includes.js","core-js/modules/es.array.iterator":"node_modules/core-js/modules/es.array.iterator.js","core-js/modules/es.array.map":"node_modules/core-js/modules/es.array.map.js","core-js/modules/es.date.to-string":"node_modules/core-js/modules/es.date.to-string.js","core-js/modules/es.object.assign":"node_modules/core-js/modules/es.object.assign.js","core-js/modules/es.object.entries":"node_modules/core-js/modules/es.object.entries.js","core-js/modules/es.object.freeze":"node_modules/core-js/modules/es.object.freeze.js","core-js/modules/es.object.get-prototype-of":"node_modules/core-js/modules/es.object.get-prototype-of.js","core-js/modules/es.object.keys":"node_modules/core-js/modules/es.object.keys.js","core-js/modules/es.object.to-string":"node_modules/core-js/modules/es.object.to-string.js","core-js/modules/es.object.values":"node_modules/core-js/modules/es.object.values.js","core-js/modules/es.regexp.to-string":"node_modules/core-js/modules/es.regexp.to-string.js","core-js/modules/es.string.includes":"node_modules/core-js/modules/es.string.includes.js","core-js/modules/es.string.iterator":"node_modules/core-js/modules/es.string.iterator.js","core-js/modules/web.dom-collections.iterator":"node_modules/core-js/modules/web.dom-collections.iterator.js","regenerator-runtime/runtime":"node_modules/regenerator-runtime/runtime.js","./reusables":"node_modules/dataframe-js/lib/reusables.js","./errors":"node_modules/dataframe-js/lib/errors.js"}],"node_modules/core-js/modules/es.object.get-own-property-descriptors.js":[function(require,module,exports) {
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var ownKeys = require('../internals/own-keys');
var toIndexedObject = require('../internals/to-indexed-object');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var createProperty = require('../internals/create-property');

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/own-keys":"node_modules/core-js/internals/own-keys.js","../internals/to-indexed-object":"node_modules/core-js/internals/to-indexed-object.js","../internals/object-get-own-property-descriptor":"node_modules/core-js/internals/object-get-own-property-descriptor.js","../internals/create-property":"node_modules/core-js/internals/create-property.js"}],"node_modules/dataframe-js/lib/symbol.js":[function(require,module,exports) {
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.object.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__hashes__ = exports.__groups__ = exports.__rows__ = exports.__columns__ = void 0;

var __columns__ = Symbol("columns");

exports.__columns__ = __columns__;

var __rows__ = Symbol("rows");

exports.__rows__ = __rows__;

var __groups__ = Symbol("groups");

exports.__groups__ = __groups__;

var __hashes__ = Symbol("hashes");

exports.__hashes__ = __hashes__;
},{"core-js/modules/es.symbol":"node_modules/core-js/modules/es.symbol.js","core-js/modules/es.symbol.description":"node_modules/core-js/modules/es.symbol.description.js","core-js/modules/es.object.to-string":"node_modules/core-js/modules/es.object.to-string.js"}],"node_modules/dataframe-js/lib/group.js":[function(require,module,exports) {
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupBy = groupBy;
exports.GroupedDataFrame = void 0;

require("regenerator-runtime/runtime");

var _symbol = require("./symbol");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GroupedDataFrame = function () {
  function GroupedDataFrame(df, columnNames, groups, hashes) {
    _classCallCheck(this, GroupedDataFrame);

    this[_symbol.__groups__] = groups;
    this[_symbol.__hashes__] = hashes;
    this.df = df;
    this.on = columnNames.length > 0 ? columnNames : df.listColumns();
  }

  _createClass(GroupedDataFrame, [{
    key: Symbol.iterator,
    value: regeneratorRuntime.mark(function value() {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, hash;

      return regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 3;
              _iterator = this[_symbol.__hashes__][Symbol.iterator]();

            case 5:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 12;
                break;
              }

              hash = _step.value;
              _context.next = 9;
              return this[_symbol.__groups__][hash];

            case 9:
              _iteratorNormalCompletion = true;
              _context.next = 5;
              break;

            case 12:
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](3);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 18:
              _context.prev = 18;
              _context.prev = 19;

              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }

            case 21:
              _context.prev = 21;

              if (!_didIteratorError) {
                _context.next = 24;
                break;
              }

              throw _iteratorError;

            case 24:
              return _context.finish(21);

            case 25:
              return _context.finish(18);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    })
  }, {
    key: "get",
    value: function get(hash) {
      return this[_symbol.__groups__][hash];
    }
  }, {
    key: "toCollection",
    value: function toCollection() {
      return _toConsumableArray(this);
    }
  }, {
    key: "show",
    value: function show() {
      var quiet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return _toConsumableArray(this).map(function (_ref) {
        var group = _ref.group,
            groupKey = _ref.groupKey;
        var groupLog = "--\n[".concat(JSON.stringify(groupKey), "]\n--");

        if (!quiet) {
          console.log(groupLog);
        }

        return groupLog + "\n" + group.show(10, quiet);
      }).reduce(function (p, n) {
        return p + "\n" + n;
      });
    }
  }, {
    key: "listGroups",
    value: function listGroups() {
      return _toConsumableArray(this).map(function (_ref2) {
        var groupKey = _ref2.groupKey;
        return groupKey;
      });
    }
  }, {
    key: "listHashs",
    value: function listHashs() {
      return this[_symbol.__hashes__];
    }
  }, {
    key: "map",
    value: function map(func) {
      var _ref4;

      var mapped = _toConsumableArray(this).map(function (_ref3) {
        var group = _ref3.group;
        return group.map(func);
      });

      return this.df.__newInstance__((_ref4 = []).concat.apply(_ref4, _toConsumableArray(mapped.map(function (group) {
        return group.toCollection();
      }))), mapped[0].listColumns());
    }
  }, {
    key: "filter",
    value: function filter(condition) {
      var _ref6;

      var mapped = _toConsumableArray(this).map(function (_ref5) {
        var group = _ref5.group;
        return group.filter(condition);
      }).filter(function (group) {
        return group.listColumns().length > 0;
      });

      return mapped.length === 0 ? this.df.__newInstance__([], this.df.listColumns()) : this.df.__newInstance__((_ref6 = []).concat.apply(_ref6, _toConsumableArray(mapped.map(function (group) {
        return group.toCollection();
      }))), this.df.listColumns());
    }
  }, {
    key: "chain",
    value: function chain() {
      var _ref8;

      for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }

      var mapped = _toConsumableArray(this).map(function (_ref7) {
        var group = _ref7.group;
        return group.chain.apply(group, funcs);
      });

      return this.df.__newInstance__((_ref8 = []).concat.apply(_ref8, _toConsumableArray(mapped.map(function (group) {
        return group.toCollection();
      }))), mapped[0].listColumns());
    }
  }, {
    key: "aggregate",
    value: function aggregate(func) {
      var columnName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "aggregation";
      return this.df.__newInstance__(_toConsumableArray(this).map(function (_ref9) {
        var group = _ref9.group,
            groupKey = _ref9.groupKey;
        return _objectSpread({}, groupKey, _defineProperty({}, columnName, func(group, groupKey)));
      }), [].concat(_toConsumableArray(this.on), [columnName]));
    }
  }, {
    key: "pivot",
    value: function pivot(columnToPivot) {
      var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (gdf) {
        return gdf.count();
      };
      var columns = [].concat(_toConsumableArray(this.on), _toConsumableArray(this.df.distinct(columnToPivot).toArray(columnToPivot)));
      return this.df.__newInstance__(this.aggregate(function (group) {
        return group.groupBy(columnToPivot).aggregate(function (gp, gk) {
          return _defineProperty({}, gk[columnToPivot], func(gp, gk));
        }).toArray("aggregation").reduce(function (p, n) {
          return _objectSpread({}, p, {}, n);
        }, {});
      }).toCollection().map(function (_ref11) {
        var aggregation = _ref11.aggregation,
            rest = _objectWithoutProperties(_ref11, ["aggregation"]);

        return _objectSpread({}, rest, {}, aggregation);
      }), columns);
    }
  }, {
    key: "melt",
    value: function melt() {
      var _this = this;

      var variableColumnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "variable";
      var valueColumnName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "value";
      var columns = [].concat(_toConsumableArray(this.on), [variableColumnName, valueColumnName]);
      return this.df.__newInstance__(this.aggregate(function (group) {
        return Object.entries(group.toDict()).reduce(function (tidy, _ref12) {
          var _ref13 = _slicedToArray(_ref12, 2),
              key = _ref13[0],
              value = _ref13[1];

          return [].concat(_toConsumableArray(tidy), _toConsumableArray(value.reduce(function (p, n) {
            var _ref14;

            return !_this.on.includes(key) ? [].concat(_toConsumableArray(p), [(_ref14 = {}, _defineProperty(_ref14, variableColumnName, key), _defineProperty(_ref14, valueColumnName, n), _ref14)]) : p;
          }, [])));
        }, []);
      }).toCollection().reduce(function (p, _ref15) {
        var aggregation = _ref15.aggregation,
            rest = _objectWithoutProperties(_ref15, ["aggregation"]);

        return [].concat(_toConsumableArray(p), _toConsumableArray(aggregation.map(function (x) {
          return _objectSpread({}, rest, {}, x);
        })));
      }, []), columns);
    }
  }]);

  return GroupedDataFrame;
}();

exports.GroupedDataFrame = GroupedDataFrame;

function groupBy(df, columnNames) {
  var rowsByGroup = {};
  var hashes = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = df.toCollection(true)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var row = _step2.value;
      var hash = row.select.apply(row, _toConsumableArray(columnNames)).hash();

      if (!rowsByGroup[hash]) {
        hashes.push(hash);
        rowsByGroup[hash] = [];
      }

      rowsByGroup[hash].push(row);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var groups = hashes.reduce(function (groups, hash) {
    var _rowsByGroup$hash$;

    groups[hash] = {
      groupKey: (_rowsByGroup$hash$ = rowsByGroup[hash][0]).select.apply(_rowsByGroup$hash$, _toConsumableArray(columnNames)).toDict(),
      hash: hash,
      group: new df.constructor(rowsByGroup[hash], df.listColumns())
    };
    return groups;
  }, {});
  return new GroupedDataFrame(df, columnNames, groups, hashes);
}
},{"core-js/modules/es.symbol":"node_modules/core-js/modules/es.symbol.js","core-js/modules/es.symbol.description":"node_modules/core-js/modules/es.symbol.description.js","core-js/modules/es.symbol.iterator":"node_modules/core-js/modules/es.symbol.iterator.js","core-js/modules/es.array.concat":"node_modules/core-js/modules/es.array.concat.js","core-js/modules/es.array.filter":"node_modules/core-js/modules/es.array.filter.js","core-js/modules/es.array.for-each":"node_modules/core-js/modules/es.array.for-each.js","core-js/modules/es.array.from":"node_modules/core-js/modules/es.array.from.js","core-js/modules/es.array.includes":"node_modules/core-js/modules/es.array.includes.js","core-js/modules/es.array.index-of":"node_modules/core-js/modules/es.array.index-of.js","core-js/modules/es.array.iterator":"node_modules/core-js/modules/es.array.iterator.js","core-js/modules/es.array.map":"node_modules/core-js/modules/es.array.map.js","core-js/modules/es.array.reduce":"node_modules/core-js/modules/es.array.reduce.js","core-js/modules/es.date.to-string":"node_modules/core-js/modules/es.date.to-string.js","core-js/modules/es.object.entries":"node_modules/core-js/modules/es.object.entries.js","core-js/modules/es.object.get-own-property-descriptor":"node_modules/core-js/modules/es.object.get-own-property-descriptor.js","core-js/modules/es.object.get-own-property-descriptors":"node_modules/core-js/modules/es.object.get-own-property-descriptors.js","core-js/modules/es.object.keys":"node_modules/core-js/modules/es.object.keys.js","core-js/modules/es.object.to-string":"node_modules/core-js/modules/es.object.to-string.js","core-js/modules/es.regexp.to-string":"node_modules/core-js/modules/es.regexp.to-string.js","core-js/modules/es.string.includes":"node_modules/core-js/modules/es.string.includes.js","core-js/modules/es.string.iterator":"node_modules/core-js/modules/es.string.iterator.js","core-js/modules/web.dom-collections.for-each":"node_modules/core-js/modules/web.dom-collections.for-each.js","core-js/modules/web.dom-collections.iterator":"node_modules/core-js/modules/web.dom-collections.iterator.js","regenerator-runtime/runtime":"node_modules/regenerator-runtime/runtime.js","./symbol":"node_modules/dataframe-js/lib/symbol.js"}],"node_modules/core-js/internals/native-promise-constructor.js":[function(require,module,exports) {

var global = require('../internals/global');

module.exports = global.Promise;

},{"../internals/global":"node_modules/core-js/internals/global.js"}],"node_modules/core-js/internals/engine-is-ios.js":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":"node_modules/core-js/internals/engine-user-agent.js"}],"node_modules/core-js/internals/task.js":[function(require,module,exports) {


var global = require('../internals/global');
var fails = require('../internals/fails');
var bind = require('../internals/function-bind-context');
var html = require('../internals/html');
var createElement = require('../internals/document-create-element');
var IS_IOS = require('../internals/engine-is-ios');
var IS_NODE = require('../internals/engine-is-node');

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/function-bind-context":"node_modules/core-js/internals/function-bind-context.js","../internals/html":"node_modules/core-js/internals/html.js","../internals/document-create-element":"node_modules/core-js/internals/document-create-element.js","../internals/engine-is-ios":"node_modules/core-js/internals/engine-is-ios.js","../internals/engine-is-node":"node_modules/core-js/internals/engine-is-node.js"}],"node_modules/core-js/internals/engine-is-webos-webkit.js":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');

module.exports = /web0s(?!.*chrome)/i.test(userAgent);

},{"../internals/engine-user-agent":"node_modules/core-js/internals/engine-user-agent.js"}],"node_modules/core-js/internals/microtask.js":[function(require,module,exports) {


var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var macrotask = require('../internals/task').set;
var IS_IOS = require('../internals/engine-is-ios');
var IS_WEBOS_WEBKIT = require('../internals/engine-is-webos-webkit');
var IS_NODE = require('../internals/engine-is-node');

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};

},{"../internals/global":"node_modules/core-js/internals/global.js","../internals/object-get-own-property-descriptor":"node_modules/core-js/internals/object-get-own-property-descriptor.js","../internals/task":"node_modules/core-js/internals/task.js","../internals/engine-is-ios":"node_modules/core-js/internals/engine-is-ios.js","../internals/engine-is-webos-webkit":"node_modules/core-js/internals/engine-is-webos-webkit.js","../internals/engine-is-node":"node_modules/core-js/internals/engine-is-node.js"}],"node_modules/core-js/internals/new-promise-capability.js":[function(require,module,exports) {
'use strict';
var aFunction = require('../internals/a-function');

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"../internals/a-function":"node_modules/core-js/internals/a-function.js"}],"node_modules/core-js/internals/promise-resolve.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var newPromiseCapability = require('../internals/new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/new-promise-capability":"node_modules/core-js/internals/new-promise-capability.js"}],"node_modules/core-js/internals/host-report-errors.js":[function(require,module,exports) {

var global = require('../internals/global');

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};

},{"../internals/global":"node_modules/core-js/internals/global.js"}],"node_modules/core-js/internals/perform.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

},{}],"node_modules/core-js/modules/es.promise.js":[function(require,module,exports) {


'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var global = require('../internals/global');
var getBuiltIn = require('../internals/get-built-in');
var NativePromise = require('../internals/native-promise-constructor');
var redefine = require('../internals/redefine');
var redefineAll = require('../internals/redefine-all');
var setToStringTag = require('../internals/set-to-string-tag');
var setSpecies = require('../internals/set-species');
var isObject = require('../internals/is-object');
var aFunction = require('../internals/a-function');
var anInstance = require('../internals/an-instance');
var inspectSource = require('../internals/inspect-source');
var iterate = require('../internals/iterate');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var speciesConstructor = require('../internals/species-constructor');
var task = require('../internals/task').set;
var microtask = require('../internals/microtask');
var promiseResolve = require('../internals/promise-resolve');
var hostReportErrors = require('../internals/host-report-errors');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var InternalStateModule = require('../internals/internal-state');
var isForced = require('../internals/is-forced');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_NODE = require('../internals/engine-is-node');
var V8_VERSION = require('../internals/engine-v8-version');

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/is-pure":"node_modules/core-js/internals/is-pure.js","../internals/global":"node_modules/core-js/internals/global.js","../internals/get-built-in":"node_modules/core-js/internals/get-built-in.js","../internals/native-promise-constructor":"node_modules/core-js/internals/native-promise-constructor.js","../internals/redefine":"node_modules/core-js/internals/redefine.js","../internals/redefine-all":"node_modules/core-js/internals/redefine-all.js","../internals/set-to-string-tag":"node_modules/core-js/internals/set-to-string-tag.js","../internals/set-species":"node_modules/core-js/internals/set-species.js","../internals/is-object":"node_modules/core-js/internals/is-object.js","../internals/a-function":"node_modules/core-js/internals/a-function.js","../internals/an-instance":"node_modules/core-js/internals/an-instance.js","../internals/inspect-source":"node_modules/core-js/internals/inspect-source.js","../internals/iterate":"node_modules/core-js/internals/iterate.js","../internals/check-correctness-of-iteration":"node_modules/core-js/internals/check-correctness-of-iteration.js","../internals/species-constructor":"node_modules/core-js/internals/species-constructor.js","../internals/task":"node_modules/core-js/internals/task.js","../internals/microtask":"node_modules/core-js/internals/microtask.js","../internals/promise-resolve":"node_modules/core-js/internals/promise-resolve.js","../internals/host-report-errors":"node_modules/core-js/internals/host-report-errors.js","../internals/new-promise-capability":"node_modules/core-js/internals/new-promise-capability.js","../internals/perform":"node_modules/core-js/internals/perform.js","../internals/internal-state":"node_modules/core-js/internals/internal-state.js","../internals/is-forced":"node_modules/core-js/internals/is-forced.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js","../internals/engine-is-node":"node_modules/core-js/internals/engine-is-node.js","../internals/engine-v8-version":"node_modules/core-js/internals/engine-v8-version.js"}],"node_modules/core-js/modules/es.string.match.js":[function(require,module,exports) {
'use strict';
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var toLength = require('../internals/to-length');
var requireObjectCoercible = require('../internals/require-object-coercible');
var advanceStringIndex = require('../internals/advance-string-index');
var regExpExec = require('../internals/regexp-exec-abstract');

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

},{"../internals/fix-regexp-well-known-symbol-logic":"node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js","../internals/an-object":"node_modules/core-js/internals/an-object.js","../internals/to-length":"node_modules/core-js/internals/to-length.js","../internals/require-object-coercible":"node_modules/core-js/internals/require-object-coercible.js","../internals/advance-string-index":"node_modules/core-js/internals/advance-string-index.js","../internals/regexp-exec-abstract":"node_modules/core-js/internals/regexp-exec-abstract.js"}],"node_modules/d3-collection/src/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.prefix = void 0;
var prefix = "$";
exports.prefix = prefix;

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function (key) {
    return prefix + key in this;
  },
  get: function (key) {
    return this[prefix + key];
  },
  set: function (key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function (key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function () {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function () {
    var keys = [];

    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));

    return keys;
  },
  values: function () {
    var values = [];

    for (var property in this) if (property[0] === prefix) values.push(this[property]);

    return values;
  },
  entries: function () {
    var entries = [];

    for (var property in this) if (property[0] === prefix) entries.push({
      key: property.slice(1),
      value: this[property]
    });

    return entries;
  },
  size: function () {
    var size = 0;

    for (var property in this) if (property[0] === prefix) ++size;

    return size;
  },
  empty: function () {
    for (var property in this) if (property[0] === prefix) return false;

    return true;
  },
  each: function (f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map(); // Copy constructor.

  if (object instanceof Map) object.each(function (value, key) {
    map.set(key, value);
  }); // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
      var i = -1,
          n = object.length,
          o;
      if (f == null) while (++i < n) map.set(i, object[i]);else while (++i < n) map.set(f(o = object[i], i, object), o);
    } // Convert object to map.
    else if (object) for (var key in object) map.set(key, object[key]);
  return map;
}

var _default = map;
exports.default = _default;
},{}],"node_modules/d3-collection/src/nest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _map = _interopRequireDefault(require("./map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = (0, _map.default)(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function (values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });
    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array,
        sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();else array = [], map.each(function (v, k) {
      array.push({
        key: k,
        values: entries(v, depth)
      });
    });
    return sortKey != null ? array.sort(function (a, b) {
      return sortKey(a.key, b.key);
    }) : array;
  }

  return nest = {
    object: function (array) {
      return apply(array, 0, createObject, setObject);
    },
    map: function (array) {
      return apply(array, 0, createMap, setMap);
    },
    entries: function (array) {
      return entries(apply(array, 0, createMap, setMap), 0);
    },
    key: function (d) {
      keys.push(d);
      return nest;
    },
    sortKeys: function (order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    },
    sortValues: function (order) {
      sortValues = order;
      return nest;
    },
    rollup: function (f) {
      rollup = f;
      return nest;
    }
  };
}

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return (0, _map.default)();
}

function setMap(map, key, value) {
  map.set(key, value);
}
},{"./map":"node_modules/d3-collection/src/map.js"}],"node_modules/d3-collection/src/set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map = _interopRequireWildcard(require("./map"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Set() {}

var proto = _map.default.prototype;
Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function (value) {
    value += "";
    this[_map.prefix + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set(); // Copy constructor.

  if (object instanceof Set) object.each(function (value) {
    set.add(value);
  }); // Otherwise, assume it’s an array.
  else if (object) {
      var i = -1,
          n = object.length;
      if (f == null) while (++i < n) set.add(object[i]);else while (++i < n) set.add(f(object[i], i, object));
    }
  return set;
}

var _default = set;
exports.default = _default;
},{"./map":"node_modules/d3-collection/src/map.js"}],"node_modules/d3-collection/src/keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(map) {
  var keys = [];

  for (var key in map) keys.push(key);

  return keys;
}
},{}],"node_modules/d3-collection/src/values.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(map) {
  var values = [];

  for (var key in map) values.push(map[key]);

  return values;
}
},{}],"node_modules/d3-collection/src/entries.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(map) {
  var entries = [];

  for (var key in map) entries.push({
    key: key,
    value: map[key]
  });

  return entries;
}
},{}],"node_modules/d3-collection/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "nest", {
  enumerable: true,
  get: function () {
    return _nest.default;
  }
});
Object.defineProperty(exports, "set", {
  enumerable: true,
  get: function () {
    return _set.default;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function () {
    return _map.default;
  }
});
Object.defineProperty(exports, "keys", {
  enumerable: true,
  get: function () {
    return _keys.default;
  }
});
Object.defineProperty(exports, "values", {
  enumerable: true,
  get: function () {
    return _values.default;
  }
});
Object.defineProperty(exports, "entries", {
  enumerable: true,
  get: function () {
    return _entries.default;
  }
});

var _nest = _interopRequireDefault(require("./nest"));

var _set = _interopRequireDefault(require("./set"));

var _map = _interopRequireDefault(require("./map"));

var _keys = _interopRequireDefault(require("./keys"));

var _values = _interopRequireDefault(require("./values"));

var _entries = _interopRequireDefault(require("./entries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./nest":"node_modules/d3-collection/src/nest.js","./set":"node_modules/d3-collection/src/set.js","./map":"node_modules/d3-collection/src/map.js","./keys":"node_modules/d3-collection/src/keys.js","./values":"node_modules/d3-collection/src/values.js","./entries":"node_modules/d3-collection/src/entries.js"}],"node_modules/d3-dispatch/src/dispatch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var noop = {
  value: function () {}
};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }

  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {
      type: t,
      name: name
    };
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function (typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length; // If no callback was specified, return the callback of the given type and name.

    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;

      return;
    } // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.


    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);

    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function () {
    var copy = {},
        _ = this._;

    for (var t in _) copy[t] = _[t].slice();

    return new Dispatch(copy);
  },
  call: function (type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function (type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }

  if (callback != null) type.push({
    name: name,
    value: callback
  });
  return type;
}

var _default = dispatch;
exports.default = _default;
},{}],"node_modules/d3-dispatch/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "dispatch", {
  enumerable: true,
  get: function () {
    return _dispatch.default;
  }
});

var _dispatch = _interopRequireDefault(require("./dispatch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./dispatch.js":"node_modules/d3-dispatch/src/dispatch.js"}],"node_modules/d3-request/src/request.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _d3Collection = require("d3-collection");

var _d3Dispatch = require("d3-dispatch");

function _default(url, callback) {
  var request,
      event = (0, _d3Dispatch.dispatch)("beforesend", "progress", "load", "error"),
      mimeType,
      headers = (0, _d3Collection.map)(),
      xhr = new XMLHttpRequest(),
      user = null,
      password = null,
      response,
      responseType,
      timeout = 0; // If IE does not support CORS, use XDomainRequest.

  if (typeof XDomainRequest !== "undefined" && !("withCredentials" in xhr) && /^(http(s)?:)?\/\//.test(url)) xhr = new XDomainRequest();
  "onload" in xhr ? xhr.onload = xhr.onerror = xhr.ontimeout = respond : xhr.onreadystatechange = function (o) {
    xhr.readyState > 3 && respond(o);
  };

  function respond(o) {
    var status = xhr.status,
        result;

    if (!status && hasResponse(xhr) || status >= 200 && status < 300 || status === 304) {
      if (response) {
        try {
          result = response.call(request, xhr);
        } catch (e) {
          event.call("error", request, e);
          return;
        }
      } else {
        result = xhr;
      }

      event.call("load", request, result);
    } else {
      event.call("error", request, o);
    }
  }

  xhr.onprogress = function (e) {
    event.call("progress", request, e);
  };

  request = {
    header: function (name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers.get(name);
      if (value == null) headers.remove(name);else headers.set(name, value + "");
      return request;
    },
    // If mimeType is non-null and no Accept header is set, a default is used.
    mimeType: function (value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return request;
    },
    // Specifies what type the response value should take;
    // for instance, arraybuffer, blob, document, or text.
    responseType: function (value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return request;
    },
    timeout: function (value) {
      if (!arguments.length) return timeout;
      timeout = +value;
      return request;
    },
    user: function (value) {
      return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
    },
    password: function (value) {
      return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
    },
    // Specify how to convert the response content to a specific type;
    // changes the callback value on "load" events.
    response: function (value) {
      response = value;
      return request;
    },
    // Alias for send("GET", …).
    get: function (data, callback) {
      return request.send("GET", data, callback);
    },
    // Alias for send("POST", …).
    post: function (data, callback) {
      return request.send("POST", data, callback);
    },
    // If callback is non-null, it will be used for error and load events.
    send: function (method, data, callback) {
      xhr.open(method, url, true, user, password);
      if (mimeType != null && !headers.has("accept")) headers.set("accept", mimeType + ",*/*");
      if (xhr.setRequestHeader) headers.each(function (value, name) {
        xhr.setRequestHeader(name, value);
      });
      if (mimeType != null && xhr.overrideMimeType) xhr.overrideMimeType(mimeType);
      if (responseType != null) xhr.responseType = responseType;
      if (timeout > 0) xhr.timeout = timeout;
      if (callback == null && typeof data === "function") callback = data, data = null;
      if (callback != null && callback.length === 1) callback = fixCallback(callback);
      if (callback != null) request.on("error", callback).on("load", function (xhr) {
        callback(null, xhr);
      });
      event.call("beforesend", request, xhr);
      xhr.send(data == null ? null : data);
      return request;
    },
    abort: function () {
      xhr.abort();
      return request;
    },
    on: function () {
      var value = event.on.apply(event, arguments);
      return value === event ? request : value;
    }
  };

  if (callback != null) {
    if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
    return request.get(callback);
  }

  return request;
}

function fixCallback(callback) {
  return function (error, xhr) {
    callback(error == null ? xhr : null);
  };
}

function hasResponse(xhr) {
  var type = xhr.responseType;
  return type && type !== "text" ? xhr.response // null on error
  : xhr.responseText; // "" on error
}
},{"d3-collection":"node_modules/d3-collection/src/index.js","d3-dispatch":"node_modules/d3-dispatch/src/index.js"}],"node_modules/d3-request/src/type.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(defaultMimeType, response) {
  return function (url, callback) {
    var r = (0, _request.default)(url).mimeType(defaultMimeType).response(response);

    if (callback != null) {
      if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
      return r.get(callback);
    }

    return r;
  };
}
},{"./request":"node_modules/d3-request/src/request.js"}],"node_modules/d3-request/src/html.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = _interopRequireDefault(require("./type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _type.default)("text/html", function (xhr) {
  return document.createRange().createContextualFragment(xhr.responseText);
});

exports.default = _default;
},{"./type":"node_modules/d3-request/src/type.js"}],"node_modules/d3-request/src/json.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = _interopRequireDefault(require("./type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _type.default)("application/json", function (xhr) {
  return JSON.parse(xhr.responseText);
});

exports.default = _default;
},{"./type":"node_modules/d3-request/src/type.js"}],"node_modules/d3-request/src/text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = _interopRequireDefault(require("./type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _type.default)("text/plain", function (xhr) {
  return xhr.responseText;
});

exports.default = _default;
},{"./type":"node_modules/d3-request/src/type.js"}],"node_modules/d3-request/src/xml.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = _interopRequireDefault(require("./type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _type.default)("application/xml", function (xhr) {
  var xml = xhr.responseXML;
  if (!xml) throw new Error("parse error");
  return xml;
});

exports.default = _default;
},{"./type":"node_modules/d3-request/src/type.js"}],"node_modules/d3-dsv/src/dsv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function (name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function (row, i) {
    return f(object(row), i, columns);
  };
} // Compute unique columns in order of discovery.


function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];
  rows.forEach(function (row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });
  return columns;
}

function _default(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert,
        columns,
        rows = parseRows(text, function (row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [],
        // output rows
    N = text.length,
        I = 0,
        // current character index
    n = 0,
        // current line number
    t,
        // current token
    eof = N <= 0,
        // current token followed by EOF?
    eol = false; // current token followed by EOL?
    // Strip the trailing newline.

    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL; // Unescape quotes.

      var i,
          j = I,
          c;

      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);

        if ((i = I) >= N) eof = true;else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;else if (c === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE) ++I;
        }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      } // Find next delimiter or newline.


      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;else if (c === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE) ++I;
        } else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      } // Return last token before EOF.


      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];

      while (t !== EOL && t !== EOF) row.push(t), t = token();

      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function (row) {
      return columns.map(function (column) {
        return formatValue(row[column]);
      }).join(delimiter);
    })).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(text) {
    return text == null ? "" : reFormat.test(text += "") ? "\"" + text.replace(/"/g, "\"\"") + "\"" : text;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatRows: formatRows
  };
}
},{}],"node_modules/d3-dsv/src/csv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csvFormatRows = exports.csvFormat = exports.csvParseRows = exports.csvParse = void 0;

var _dsv = _interopRequireDefault(require("./dsv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var csv = (0, _dsv.default)(",");
var csvParse = csv.parse;
exports.csvParse = csvParse;
var csvParseRows = csv.parseRows;
exports.csvParseRows = csvParseRows;
var csvFormat = csv.format;
exports.csvFormat = csvFormat;
var csvFormatRows = csv.formatRows;
exports.csvFormatRows = csvFormatRows;
},{"./dsv":"node_modules/d3-dsv/src/dsv.js"}],"node_modules/d3-dsv/src/tsv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tsvFormatRows = exports.tsvFormat = exports.tsvParseRows = exports.tsvParse = void 0;

var _dsv = _interopRequireDefault(require("./dsv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tsv = (0, _dsv.default)("\t");
var tsvParse = tsv.parse;
exports.tsvParse = tsvParse;
var tsvParseRows = tsv.parseRows;
exports.tsvParseRows = tsvParseRows;
var tsvFormat = tsv.format;
exports.tsvFormat = tsvFormat;
var tsvFormatRows = tsv.formatRows;
exports.tsvFormatRows = tsvFormatRows;
},{"./dsv":"node_modules/d3-dsv/src/dsv.js"}],"node_modules/d3-dsv/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "dsvFormat", {
  enumerable: true,
  get: function () {
    return _dsv.default;
  }
});
Object.defineProperty(exports, "csvParse", {
  enumerable: true,
  get: function () {
    return _csv.csvParse;
  }
});
Object.defineProperty(exports, "csvParseRows", {
  enumerable: true,
  get: function () {
    return _csv.csvParseRows;
  }
});
Object.defineProperty(exports, "csvFormat", {
  enumerable: true,
  get: function () {
    return _csv.csvFormat;
  }
});
Object.defineProperty(exports, "csvFormatRows", {
  enumerable: true,
  get: function () {
    return _csv.csvFormatRows;
  }
});
Object.defineProperty(exports, "tsvParse", {
  enumerable: true,
  get: function () {
    return _tsv.tsvParse;
  }
});
Object.defineProperty(exports, "tsvParseRows", {
  enumerable: true,
  get: function () {
    return _tsv.tsvParseRows;
  }
});
Object.defineProperty(exports, "tsvFormat", {
  enumerable: true,
  get: function () {
    return _tsv.tsvFormat;
  }
});
Object.defineProperty(exports, "tsvFormatRows", {
  enumerable: true,
  get: function () {
    return _tsv.tsvFormatRows;
  }
});

var _dsv = _interopRequireDefault(require("./dsv"));

var _csv = require("./csv");

var _tsv = require("./tsv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./dsv":"node_modules/d3-dsv/src/dsv.js","./csv":"node_modules/d3-dsv/src/csv.js","./tsv":"node_modules/d3-dsv/src/tsv.js"}],"node_modules/d3-request/src/dsv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(defaultMimeType, parse) {
  return function (url, row, callback) {
    if (arguments.length < 3) callback = row, row = null;
    var r = (0, _request.default)(url).mimeType(defaultMimeType);

    r.row = function (_) {
      return arguments.length ? r.response(responseOf(parse, row = _)) : row;
    };

    r.row(row);
    return callback ? r.get(callback) : r;
  };
}

function responseOf(parse, row) {
  return function (request) {
    return parse(request.responseText, row);
  };
}
},{"./request":"node_modules/d3-request/src/request.js"}],"node_modules/d3-request/src/csv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _d3Dsv = require("d3-dsv");

var _dsv = _interopRequireDefault(require("./dsv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _dsv.default)("text/csv", _d3Dsv.csvParse);

exports.default = _default;
},{"d3-dsv":"node_modules/d3-dsv/src/index.js","./dsv":"node_modules/d3-request/src/dsv.js"}],"node_modules/d3-request/src/tsv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _d3Dsv = require("d3-dsv");

var _dsv = _interopRequireDefault(require("./dsv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _dsv.default)("text/tab-separated-values", _d3Dsv.tsvParse);

exports.default = _default;
},{"d3-dsv":"node_modules/d3-dsv/src/index.js","./dsv":"node_modules/d3-request/src/dsv.js"}],"node_modules/d3-request/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "request", {
  enumerable: true,
  get: function () {
    return _request.default;
  }
});
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function () {
    return _html.default;
  }
});
Object.defineProperty(exports, "json", {
  enumerable: true,
  get: function () {
    return _json.default;
  }
});
Object.defineProperty(exports, "text", {
  enumerable: true,
  get: function () {
    return _text.default;
  }
});
Object.defineProperty(exports, "xml", {
  enumerable: true,
  get: function () {
    return _xml.default;
  }
});
Object.defineProperty(exports, "csv", {
  enumerable: true,
  get: function () {
    return _csv.default;
  }
});
Object.defineProperty(exports, "tsv", {
  enumerable: true,
  get: function () {
    return _tsv.default;
  }
});

var _request = _interopRequireDefault(require("./src/request"));

var _html = _interopRequireDefault(require("./src/html"));

var _json = _interopRequireDefault(require("./src/json"));

var _text = _interopRequireDefault(require("./src/text"));

var _xml = _interopRequireDefault(require("./src/xml"));

var _csv = _interopRequireDefault(require("./src/csv"));

var _tsv = _interopRequireDefault(require("./src/tsv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./src/request":"node_modules/d3-request/src/request.js","./src/html":"node_modules/d3-request/src/html.js","./src/json":"node_modules/d3-request/src/json.js","./src/text":"node_modules/d3-request/src/text.js","./src/xml":"node_modules/d3-request/src/xml.js","./src/csv":"node_modules/d3-request/src/csv.js","./src/tsv":"node_modules/d3-request/src/tsv.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"node_modules/dataframe-js/lib/io.js":[function(require,module,exports) {
"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.date.to-json");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.match");

require("core-js/modules/web.url.to-json");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDSV = toDSV;
exports.toCSV = toCSV;
exports.toTSV = toTSV;
exports.toPSV = toPSV;
exports.toText = toText;
exports.toJSON = toJSON;
exports.fromDSV = fromDSV;
exports.fromCSV = fromCSV;
exports.fromTSV = fromTSV;
exports.fromPSV = fromPSV;
exports.fromText = fromText;
exports.fromJSON = fromJSON;

var _d3Request = require("d3-request");

var _d3Dsv = require("d3-dsv");

var _symbol = require("./symbol");

var _errors = require("./errors");

var FILE_PATTERN = /^(?:[/]|[./]|(?:[a-zA-z]:\/)).*$/;

function saveFile(path, content) {
  try {
    require("fs").writeFileSync(path, content);
  } catch (e) {
    console.warn("File system module is not available.");
  }
}

function loadTextFile(file, func) {
  if (FileReader && File) {
    var reader = new FileReader();

    reader.onload = function (event) {
      return func(event.target.result);
    };

    reader.readAsText(file);
  }
}

function addFileProtocol(path) {
  var isValidFilePath = String(path).match(FILE_PATTERN);

  if (isValidFilePath) {
    return "file://".concat(path);
  }

  return path;
}

function toDSV(df) {
  var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ";";
  var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var parser = (0, _d3Dsv.dsvFormat)(sep);
  var csvContent = header ? parser.format(df.toCollection(), df[_symbol.__columns__]) : parser.formatRows(df.toArray());

  if (path) {
    saveFile(df._cleanSavePath(path), csvContent);
  }

  return csvContent;
}

function toText(df) {
  var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ";";
  var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  return df.toDSV(sep, header, path);
}

function toCSV(df) {
  var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return df.toDSV(",", header, path);
}

function toTSV(df) {
  var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return df.toDSV("\t", header, path);
}

function toPSV(df) {
  var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return df.toDSV("|", header, path);
}

function toJSON(df) {
  var asCollection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var jsonContent = JSON.stringify(asCollection ? df.toCollection() : df.toDict());

  if (path) {
    saveFile(df._cleanSavePath(path), jsonContent);
  }

  return jsonContent;
}

function fromDSV(pathOrFile) {
  var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ";";
  var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var parser = (0, _d3Dsv.dsvFormat)(sep);
  return new Promise(function (resolve) {
    var parseText = function parseText(fileContent) {
      if (fileContent.includes("Error: ENOENT")) return resolve(null);
      var data = header ? parser.parse(fileContent) : parser.parseRows(fileContent);
      return resolve(data);
    };

    return typeof pathOrFile === "string" ? (0, _d3Request.text)(addFileProtocol(pathOrFile), parseText) : loadTextFile(pathOrFile, parseText);
  }).then(function (fileContent) {
    if (fileContent === null) {
      throw new _errors.FileNotFoundError(pathOrFile);
    }

    return fileContent;
  });
}

function fromText(pathOrFile) {
  var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ";";
  var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return fromDSV(pathOrFile, sep, header);
}

function fromCSV(pathOrFile) {
  var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return fromDSV(pathOrFile, ",", header);
}

function fromTSV(pathOrFile) {
  var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return fromDSV(pathOrFile, "\t", header);
}

function fromPSV(pathOrFile) {
  var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return fromDSV(pathOrFile, "|", header);
}

function fromJSON(pathOrFile) {
  return new Promise(function (resolve) {
    return typeof pathOrFile === "string" ? (0, _d3Request.json)(addFileProtocol(pathOrFile), resolve) : loadTextFile(pathOrFile, function (txt) {
      return resolve(JSON.parse(txt));
    });
  }).then(function (fileContent) {
    if (fileContent === null) {
      throw new _errors.FileNotFoundError(pathOrFile);
    }

    return fileContent;
  });
}
},{"core-js/modules/es.array.includes":"node_modules/core-js/modules/es.array.includes.js","core-js/modules/es.date.to-json":"node_modules/core-js/modules/es.date.to-json.js","core-js/modules/es.object.to-string":"node_modules/core-js/modules/es.object.to-string.js","core-js/modules/es.promise":"node_modules/core-js/modules/es.promise.js","core-js/modules/es.regexp.exec":"node_modules/core-js/modules/es.regexp.exec.js","core-js/modules/es.string.includes":"node_modules/core-js/modules/es.string.includes.js","core-js/modules/es.string.match":"node_modules/core-js/modules/es.string.match.js","core-js/modules/web.url.to-json":"node_modules/core-js/modules/web.url.to-json.js","d3-request":"node_modules/d3-request/index.js","d3-dsv":"node_modules/d3-dsv/src/index.js","./symbol":"node_modules/dataframe-js/lib/symbol.js","./errors":"node_modules/dataframe-js/lib/errors.js","fs":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/_empty.js"}],"node_modules/dataframe-js/lib/dataframe.js":[function(require,module,exports) {
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.reduce-right");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.date.to-json");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.is");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.object.values");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.set");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/esnext.set.add-all");

require("core-js/modules/esnext.set.delete-all");

require("core-js/modules/esnext.set.difference");

require("core-js/modules/esnext.set.every");

require("core-js/modules/esnext.set.filter");

require("core-js/modules/esnext.set.find");

require("core-js/modules/esnext.set.intersection");

require("core-js/modules/esnext.set.is-disjoint-from");

require("core-js/modules/esnext.set.is-subset-of");

require("core-js/modules/esnext.set.is-superset-of");

require("core-js/modules/esnext.set.join");

require("core-js/modules/esnext.set.map");

require("core-js/modules/esnext.set.reduce");

require("core-js/modules/esnext.set.some");

require("core-js/modules/esnext.set.symmetric-difference");

require("core-js/modules/esnext.set.union");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/web.url.to-json");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _reusables = require("./reusables");

var _errors = require("./errors");

var _row = _interopRequireDefault(require("./row"));

var _group = require("./group");

var _symbol = require("./symbol");

var io = _interopRequireWildcard(require("./io"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataFrame = function () {
  _createClass(DataFrame, null, [{
    key: "setDefaultModules",
    value: function setDefaultModules() {
      for (var _len = arguments.length, defaultModules = new Array(_len), _key = 0; _key < _len; _key++) {
        defaultModules[_key] = arguments[_key];
      }

      DataFrame.defaultModules = defaultModules;
    }
  }, {
    key: "fromDSV",
    value: function fromDSV() {
      return io.fromDSV.apply(io, arguments).then(function (content) {
        return new DataFrame(content);
      });
    }
  }, {
    key: "fromText",
    value: function fromText() {
      return io.fromText.apply(io, arguments).then(function (content) {
        return new DataFrame(content);
      });
    }
  }, {
    key: "fromCSV",
    value: function fromCSV() {
      return io.fromCSV.apply(io, arguments).then(function (content) {
        return new DataFrame(content);
      });
    }
  }, {
    key: "fromTSV",
    value: function fromTSV() {
      return io.fromTSV.apply(io, arguments).then(function (content) {
        return new DataFrame(content);
      });
    }
  }, {
    key: "fromPSV",
    value: function fromPSV() {
      return io.fromPSV.apply(io, arguments).then(function (content) {
        return new DataFrame(content);
      });
    }
  }, {
    key: "fromJSON",
    value: function fromJSON() {
      return io.fromJSON.apply(io, arguments).then(function (content) {
        return new DataFrame(content);
      });
    }
  }]);

  function DataFrame(data, columns) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, DataFrame);

    var _this$_build = this._build(data, columns);

    var _this$_build2 = _slicedToArray(_this$_build, 2);

    this[_symbol.__rows__] = _this$_build2[0];
    this[_symbol.__columns__] = _this$_build2[1];
    this.options = options;
    this.options.modules = [].concat(_toConsumableArray(DataFrame.defaultModules), _toConsumableArray(this.options.modules || []));
    Object.assign.apply(Object, [this].concat(_toConsumableArray(this.__instanciateModules__(this.options.modules))));
  }

  _createClass(DataFrame, [{
    key: Symbol.iterator,
    value: regeneratorRuntime.mark(function value() {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, row;

      return regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 3;
              _iterator = this[_symbol.__rows__][Symbol.iterator]();

            case 5:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 12;
                break;
              }

              row = _step.value;
              _context.next = 9;
              return row;

            case 9:
              _iteratorNormalCompletion = true;
              _context.next = 5;
              break;

            case 12:
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](3);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 18:
              _context.prev = 18;
              _context.prev = 19;

              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }

            case 21:
              _context.prev = 21;

              if (!_didIteratorError) {
                _context.next = 24;
                break;
              }

              throw _iteratorError;

            case 24:
              return _context.finish(21);

            case 25:
              return _context.finish(18);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    })
  }, {
    key: "_columnsAreEquals",
    value: function _columnsAreEquals(columns) {
      var columns2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this[_symbol.__columns__];

      for (var _i2 = 0, _Object$keys = Object.keys(columns); _i2 < _Object$keys.length; _i2++) {
        var key = _Object$keys[_i2];
        if (columns[key] !== columns2[key]) return false;
      }

      return true;
    }
  }, {
    key: "__newInstance__",
    value: function __newInstance__(data, columns) {
      if (!this._columnsAreEquals(columns) || !(data[0] instanceof _row.default)) {
        return new DataFrame(data, columns, this.options);
      }

      var firstRowColumns = Object.keys(data[0].toDict());

      if (!(0, _reusables.arrayEqual)(firstRowColumns, this[_symbol.__columns__], true)) {
        return new DataFrame(data, firstRowColumns, this.options);
      }

      var newInstance = new DataFrame([], [], this.options);
      newInstance[_symbol.__rows__] = _toConsumableArray(data);
      newInstance[_symbol.__columns__] = _toConsumableArray(columns);
      return newInstance;
    }
  }, {
    key: "__instanciateModules__",
    value: function __instanciateModules__(modules) {
      var _this = this;

      var df = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      return modules.map(function (Plugin) {
        var pluginInstance = new Plugin(df ? df : _this);
        return _defineProperty({}, pluginInstance.name, pluginInstance);
      });
    }
  }, {
    key: "_build",
    value: function _build(data, columns) {
      if (data instanceof DataFrame) {
        return this._fromArray(Array.from(data[_symbol.__rows__]), columns || data[_symbol.__columns__]);
      }

      if (data instanceof Array && data.length > 0) {
        return this._fromArray(data, columns || Array.from(new Set(data.slice(0, 10).concat(data.slice(-10, -1)).map(function (row) {
          return Object.keys(row);
        }).reduce(function (p, n) {
          return p.concat(n);
        }))));
      }

      if (data instanceof Array && data.length === 0) {
        return this._fromArray(data, columns ? columns : []);
      }

      if (data instanceof Object) {
        return this._fromDict(data, columns || Object.keys(data));
      }

      throw new _errors.ArgumentTypeError(data, "DataFrame | Array | Object");
    }
  }, {
    key: "_fromDict",
    value: function _fromDict(dict, columns) {
      return [(0, _reusables.transpose)(Object.values(dict)).map(function (row) {
        return new _row.default(row, columns);
      }), columns];
    }
  }, {
    key: "_fromArray",
    value: function _fromArray(array, columns) {
      return [array.map(function (row) {
        return new _row.default(row, columns);
      }), columns];
    }
  }, {
    key: "_joinByType",
    value: function _joinByType(gdf1, gdf2, type, newColumns) {
      var _this2 = this;

      var gdf2Hashs = gdf2.listHashs();
      return gdf1.toCollection().map(function (_ref2) {
        var group = _ref2.group,
            hash = _ref2.hash;
        var isContained = gdf2Hashs.includes(hash);
        var modifiedGroup = group;

        if (gdf2.get(hash)) {
          var gdf2Collection = gdf2.get(hash).group.toCollection();
          var combinedGroup = group.toCollection().map(function (row) {
            return gdf2Collection.map(function (row2) {
              return Object.assign({}, row2, row);
            });
          }).reduce(function (p, n) {
            return [].concat(_toConsumableArray(p), _toConsumableArray(n));
          }, []);
          modifiedGroup = _this2.__newInstance__(combinedGroup, newColumns);
        }

        var filterCondition = function filterCondition(bool) {
          return bool ? modifiedGroup : false;
        };

        if (type === "full") return modifiedGroup;
        return type === "out" ? filterCondition(!isContained) : filterCondition(isContained);
      }).filter(function (group) {
        return group;
      });
    }
  }, {
    key: "_join",
    value: function _join(dfToJoin, columnNames, types) {
      if (!(dfToJoin instanceof DataFrame)) throw new _errors.ArgumentTypeError(dfToJoin, "DataFrame");

      var newColumns = _toConsumableArray(new Set([].concat(_toConsumableArray(this.listColumns()), _toConsumableArray(dfToJoin.listColumns()))));

      var columns = Array.isArray(columnNames) ? columnNames : [columnNames];
      var gdf = this.groupBy.apply(this, _toConsumableArray(columns));
      var gdfToJoin = dfToJoin.groupBy.apply(dfToJoin, _toConsumableArray(columns));
      return [this.__newInstance__([], newColumns)].concat(_toConsumableArray((0, _reusables.iter)([].concat(_toConsumableArray(types[0] ? this._joinByType(gdf, gdfToJoin, types[0], newColumns) : []), _toConsumableArray(types[1] ? this._joinByType(gdfToJoin, gdf, types[1], newColumns) : [])), function (group) {
        return group.restructure(newColumns);
      }))).reduce(function (p, n) {
        return p.union(n);
      }).dropDuplicates();
    }
  }, {
    key: "_cleanSavePath",
    value: function _cleanSavePath(path) {
      return path.replace("file://", "/");
    }
  }, {
    key: "toDSV",
    value: function toDSV() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return io.toDSV.apply(io, [this].concat(args));
    }
  }, {
    key: "toCSV",
    value: function toCSV() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return io.toCSV.apply(io, [this].concat(args));
    }
  }, {
    key: "toTSV",
    value: function toTSV() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return io.toTSV.apply(io, [this].concat(args));
    }
  }, {
    key: "toPSV",
    value: function toPSV() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return io.toPSV.apply(io, [this].concat(args));
    }
  }, {
    key: "toText",
    value: function toText() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return io.toText.apply(io, [this].concat(args));
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return io.toJSON.apply(io, [this].concat(args));
    }
  }, {
    key: "toDict",
    value: function toDict() {
      var _this3 = this;

      return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.entries(this.transpose().toArray()).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            index = _ref4[0],
            column = _ref4[1];

        return _defineProperty({}, _this3[_symbol.__columns__][index], column);
      }))));
    }
  }, {
    key: "toArray",
    value: function toArray(columnName) {
      return columnName ? Array.from(this).map(function (row) {
        return row.get(columnName);
      }) : Array.from(this).map(function (row) {
        return row.toArray();
      });
    }
  }, {
    key: "toCollection",
    value: function toCollection(ofRows) {
      return ofRows ? Array.from(this) : Array.from(this).map(function (row) {
        return row.toDict();
      });
    }
  }, {
    key: "show",
    value: function show() {
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var quiet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var makeRow = function makeRow(row) {
        return "| ".concat(row.map(function (column) {
          var columnAsString = String(column);
          return columnAsString.length > 9 ? columnAsString.substring(0, 6) + "..." : columnAsString + Array(10 - columnAsString.length).join(" ");
        }).join(" | "), " |");
      };

      var header = makeRow(this[_symbol.__columns__]);
      var token = 0;
      var toShow = [header, Array(header.length).join("-")].concat(_toConsumableArray((0, _reusables.iter)(this[_symbol.__rows__], function (row) {
        token++;
        return makeRow(row.toArray());
      }, function () {
        return token >= rows;
      }))).join("\n");

      if (!quiet) {
        console.log(toShow);
      }

      return toShow;
    }
  }, {
    key: "dim",
    value: function dim() {
      return [this.count(), this[_symbol.__columns__].length];
    }
  }, {
    key: "transpose",
    value: function transpose(tranposeColumnNames) {
      var newColumns = [].concat(_toConsumableArray(tranposeColumnNames ? ["rowNames"] : []), _toConsumableArray(_toConsumableArray(Array(this.count()).keys()).reverse()));
      var transposedRows = (0, _reusables.transpose)((tranposeColumnNames ? this.push(this[_symbol.__columns__]) : this).toArray());
      return this.__newInstance__(transposedRows, newColumns.reverse()).restructure(newColumns);
    }
  }, {
    key: "count",
    value: function count() {
      return this[_symbol.__rows__].length;
    }
  }, {
    key: "countValue",
    value: function countValue(valueToCount) {
      var columnName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this[_symbol.__columns__][0];
      return this.filter(function (row) {
        return row.get(columnName) === valueToCount;
      }).count();
    }
  }, {
    key: "push",
    value: function push() {
      for (var _len8 = arguments.length, rows = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        rows[_key8] = arguments[_key8];
      }

      return this.union(new DataFrame(rows, this[_symbol.__columns__]));
    }
  }, {
    key: "replace",
    value: function replace(value, replacement, columnNames) {
      var _this4 = this;

      var columns = columnNames && columnNames.length > 0 ? columnNames : this[_symbol.__columns__];
      var values = Array.isArray(value) ? value : [value];
      return this.map(function (row) {
        return (columns.length > 0 ? columns : _this4[_symbol.__columns__]).reduce(function (p, n) {
          return values.includes(p.get(n)) ? p.set(n, replacement) : p;
        }, row);
      });
    }
  }, {
    key: "distinct",
    value: function distinct(columnName) {
      return this.__newInstance__(_defineProperty({}, columnName, _toConsumableArray(new Set(this.toArray(columnName)))), [columnName]);
    }
  }, {
    key: "unique",
    value: function unique(columnName) {
      return this.distinct(columnName);
    }
  }, {
    key: "listColumns",
    value: function listColumns() {
      return _toConsumableArray(this[_symbol.__columns__]);
    }
  }, {
    key: "select",
    value: function select() {
      for (var _len9 = arguments.length, columnNames = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        columnNames[_key9] = arguments[_key9];
      }

      return this.__newInstance__(this[_symbol.__rows__].map(function (row) {
        return row.select.apply(row, columnNames);
      }), columnNames);
    }
  }, {
    key: "withColumn",
    value: function withColumn(columnName) {
      var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return undefined;
      };
      return this.__newInstance__(this[_symbol.__rows__].map(function (row, index) {
        return row.set(columnName, func(row, index));
      }), this[_symbol.__columns__].includes(columnName) ? this[_symbol.__columns__] : [].concat(_toConsumableArray(this[_symbol.__columns__]), [columnName]));
    }
  }, {
    key: "restructure",
    value: function restructure(newColumnNames) {
      return this.__newInstance__(this[_symbol.__rows__], newColumnNames);
    }
  }, {
    key: "renameAll",
    value: function renameAll(newColumnNames) {
      if (newColumnNames.length !== this[_symbol.__columns__].length) {
        throw new _errors.WrongSchemaError(newColumnNames, this[_symbol.__columns__]);
      }

      return this.__newInstance__(this.toArray(), newColumnNames);
    }
  }, {
    key: "rename",
    value: function rename(columnName, replacement) {
      var newColumnNames = this[_symbol.__columns__].map(function (column) {
        return column === columnName ? replacement : column;
      });

      return this.renameAll(newColumnNames);
    }
  }, {
    key: "castAll",
    value: function castAll(typeFunctions) {
      var _this5 = this;

      if (typeFunctions.length !== this[_symbol.__columns__].length) {
        throw new _errors.WrongSchemaError(typeFunctions, this[_symbol.__columns__]);
      }

      return this.map(function (row) {
        return new _row.default(row.toArray().map(function (column, index) {
          return typeFunctions[index](column);
        }), _this5[_symbol.__columns__]);
      });
    }
  }, {
    key: "cast",
    value: function cast(columnName, typeFunction) {
      return this.withColumn(columnName, function (row) {
        return typeFunction(row.get(columnName));
      });
    }
  }, {
    key: "drop",
    value: function drop(columnName) {
      return this.__newInstance__(this[_symbol.__rows__].map(function (row) {
        return row.delete(columnName);
      }), this[_symbol.__columns__].filter(function (column) {
        return column !== columnName;
      }));
    }
  }, {
    key: "chain",
    value: function chain() {
      for (var _len10 = arguments.length, funcs = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        funcs[_key10] = arguments[_key10];
      }

      return this.__newInstance__(_toConsumableArray(_reusables.chain.apply(void 0, [this[_symbol.__rows__]].concat(funcs))), this[_symbol.__columns__]);
    }
  }, {
    key: "filter",
    value: function filter(condition) {
      var func = _typeof(condition) === "object" ? function (row) {
        return Object.entries(condition).map(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
              column = _ref7[0],
              value = _ref7[1];

          return Object.is(row.get(column), value);
        }).reduce(function (p, n) {
          return p && n;
        });
      } : condition;
      var filteredRows = (0, _reusables.iter)(this[_symbol.__rows__], function (row, i) {
        return func(row, i) ? row : false;
      });
      return this.__newInstance__(filteredRows, this[_symbol.__columns__]);
    }
  }, {
    key: "where",
    value: function where(condition) {
      return this.filter(condition);
    }
  }, {
    key: "find",
    value: function find(condition) {
      return this.filter(condition)[_symbol.__rows__][0];
    }
  }, {
    key: "map",
    value: function map(func) {
      return this.__newInstance__((0, _reusables.iter)(this[_symbol.__rows__], function (row, i) {
        return func(row, i);
      }), this[_symbol.__columns__]);
    }
  }, {
    key: "reduce",
    value: function reduce(func, init) {
      return typeof init === "undefined" ? this[_symbol.__rows__].reduce(function (p, n) {
        return func(p, n);
      }) : this[_symbol.__rows__].reduce(function (p, n) {
        return func(p, n);
      }, init);
    }
  }, {
    key: "reduceRight",
    value: function reduceRight(func, init) {
      return typeof init === "undefined" ? this[_symbol.__rows__].reduceRight(function (p, n) {
        return func(p, n);
      }) : this[_symbol.__rows__].reduceRight(function (p, n) {
        return func(p, n);
      }, init);
    }
  }, {
    key: "dropDuplicates",
    value: function dropDuplicates() {
      for (var _len11 = arguments.length, columnNames = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        columnNames[_key11] = arguments[_key11];
      }

      var groupCols = columnNames && columnNames.length > 0 ? columnNames : this[_symbol.__columns__];
      return this.groupBy.apply(this, _toConsumableArray(groupCols)).filter(function (row, i) {
        return i === 0;
      });
    }
  }, {
    key: "dropMissingValues",
    value: function dropMissingValues(columnNames) {
      var cols = columnNames && columnNames.length > 0 ? columnNames : this[_symbol.__columns__];
      return this.filter(function (row) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = cols[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var col = _step2.value;

            if ([NaN, undefined, null].includes(row.get(col))) {
              return false;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return true;
      });
    }
  }, {
    key: "fillMissingValues",
    value: function fillMissingValues(replacement, columnNames) {
      return this.replace([NaN, undefined, null], replacement, columnNames);
    }
  }, {
    key: "shuffle",
    value: function shuffle() {
      if (this.count() < 2) return this;
      return this.__newInstance__(this.reduce(function (p, n) {
        var index = Math.floor(Math.random() * (p.length - 1) + 1);
        return Array.isArray(p) ? [].concat(_toConsumableArray(p.slice(index, p.length + 1)), [n], _toConsumableArray(p.slice(0, index))) : [p, n];
      }), this[_symbol.__columns__]);
    }
  }, {
    key: "sample",
    value: function sample(percentage) {
      var nRows = this.count() * percentage;
      var token = 0;
      return this.__newInstance__((0, _reusables.iter)(this.shuffle()[_symbol.__rows__], function (row) {
        token++;
        return row;
      }, function () {
        return token >= nRows;
      }), this[_symbol.__columns__]);
    }
  }, {
    key: "bisect",
    value: function bisect(percentage) {
      var nRows = this.count() * percentage;
      var token = 0;
      var restRows = [];
      return [this.__newInstance__((0, _reusables.iter)(this.shuffle()[_symbol.__rows__], function (row) {
        if (token < nRows) {
          token++;
          return row;
        }

        restRows.push(row);
      }), this[_symbol.__columns__]), this.__newInstance__(restRows, this[_symbol.__columns__])];
    }
  }, {
    key: "groupBy",
    value: function groupBy() {
      for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }

      return (0, _group.groupBy)(this, args);
    }
  }, {
    key: "sortBy",
    value: function sortBy(columnNames) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var missingValuesPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "first";

      if (!Array.isArray(columnNames)) {
        columnNames = [columnNames];
      }

      var _columnNames = columnNames;

      var _missingValuesPosition = ["first", "last"].includes(missingValuesPosition) ? missingValuesPosition : "first";

      var _checkMissingValue = function _checkMissingValue(v) {
        return [NaN, null, undefined].includes(v);
      };

      var sortedRows = this[_symbol.__rows__].sort(function (p, n) {
        return _columnNames.map(function (col) {
          var _ref8 = [p.get(col), n.get(col)],
              pValue = _ref8[0],
              nValue = _ref8[1];

          if (_checkMissingValue(pValue)) {
            return _missingValuesPosition === "last" ? 1 : -1;
          } else if (_checkMissingValue(nValue)) {
            return _missingValuesPosition === "last" ? -1 : 1;
          } else if (_typeof(pValue) !== _typeof(nValue)) {
            throw new _errors.MixedTypeError([_typeof(pValue), _typeof(nValue)]);
          } else if (pValue > nValue) {
            return reverse ? -1 : 1;
          } else if (pValue < nValue) {
            return reverse ? 1 : -1;
          }

          return 0;
        }).reduce(function (acc, curr) {
          return acc || curr;
        });
      });

      if (_columnNames.length > 1) {
        var sortedRowsWithMissingValues = [];
        var sortedRowsWithoutMissingValues = [];
        sortedRows.forEach(function (row) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = _columnNames[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var col = _step3.value;

              if (_checkMissingValue(row.get(col))) {
                sortedRowsWithMissingValues.push(row);
                return;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          sortedRowsWithoutMissingValues.push(row);
        });
        return this.__newInstance__(missingValuesPosition === "last" ? sortedRowsWithoutMissingValues.concat(sortedRowsWithMissingValues) : sortedRowsWithMissingValues.concat(sortedRowsWithoutMissingValues), this[_symbol.__columns__]);
      }

      return this.__newInstance__(sortedRows, this[_symbol.__columns__]);
    }
  }, {
    key: "union",
    value: function union(dfToUnion) {
      if (!(dfToUnion instanceof DataFrame)) throw new _errors.ArgumentTypeError(dfToUnion, "DataFrame");

      if (!(0, _reusables.arrayEqual)(this[_symbol.__columns__], dfToUnion[_symbol.__columns__])) {
        throw new _errors.WrongSchemaError(dfToUnion[_symbol.__columns__], this[_symbol.__columns__]);
      }

      return this.__newInstance__([].concat(_toConsumableArray(this), _toConsumableArray(dfToUnion.restructure(this[_symbol.__columns__]))), this[_symbol.__columns__]);
    }
  }, {
    key: "join",
    value: function join(dfToJoin, columnNames) {
      var _this6 = this;

      var how = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "inner";
      var joinMethods = {
        inner: function inner() {
          return _this6.innerJoin(dfToJoin, columnNames);
        },
        full: function full() {
          return _this6.fullJoin(dfToJoin, columnNames);
        },
        outer: function outer() {
          return _this6.outerJoin(dfToJoin, columnNames);
        },
        left: function left() {
          return _this6.leftJoin(dfToJoin, columnNames);
        },
        right: function right() {
          return _this6.rightJoin(dfToJoin, columnNames);
        }
      };
      return joinMethods[how]();
    }
  }, {
    key: "innerJoin",
    value: function innerJoin(dfToJoin, columnNames) {
      return this._join(dfToJoin, columnNames, ["in"]);
    }
  }, {
    key: "fullJoin",
    value: function fullJoin(dfToJoin, columnNames) {
      return this._join(dfToJoin, columnNames, ["full", "full"]);
    }
  }, {
    key: "outerJoin",
    value: function outerJoin(dfToJoin, columnNames) {
      return this.fullJoin(dfToJoin, columnNames);
    }
  }, {
    key: "leftJoin",
    value: function leftJoin(dfToJoin, columnNames) {
      return this._join(dfToJoin, columnNames, ["full", "in"]);
    }
  }, {
    key: "rightJoin",
    value: function rightJoin(dfToJoin, columnNames) {
      return this._join(dfToJoin, columnNames, ["in", "full"]);
    }
  }, {
    key: "diff",
    value: function diff(dfToDiff, columnNames) {
      return this._join(dfToDiff, columnNames, ["out", "out"]);
    }
  }, {
    key: "head",
    value: function head() {
      var nRows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      return this.slice(0, nRows);
    }
  }, {
    key: "tail",
    value: function tail() {
      var nRows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      return this.slice(-nRows);
    }
  }, {
    key: "slice",
    value: function slice(startIndex, endIndex) {
      return this.__newInstance__(this[_symbol.__rows__].slice(startIndex || undefined, endIndex || undefined), this[_symbol.__columns__]);
    }
  }, {
    key: "getRow",
    value: function getRow(index) {
      return this[_symbol.__rows__][index];
    }
  }, {
    key: "setRow",
    value: function setRow(index) {
      var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (row) {
        return row;
      };
      var newRows = Array.from(this[_symbol.__rows__]);
      newRows[index] = func(newRows[index]);
      return this.__newInstance__(newRows, this[_symbol.__columns__]);
    }
  }]);

  return DataFrame;
}();

DataFrame.defaultModules = [];
var _default = DataFrame;
exports.default = _default;
},{"core-js/modules/es.symbol":"node_modules/core-js/modules/es.symbol.js","core-js/modules/es.symbol.description":"node_modules/core-js/modules/es.symbol.description.js","core-js/modules/es.symbol.iterator":"node_modules/core-js/modules/es.symbol.iterator.js","core-js/modules/es.array.concat":"node_modules/core-js/modules/es.array.concat.js","core-js/modules/es.array.filter":"node_modules/core-js/modules/es.array.filter.js","core-js/modules/es.array.for-each":"node_modules/core-js/modules/es.array.for-each.js","core-js/modules/es.array.from":"node_modules/core-js/modules/es.array.from.js","core-js/modules/es.array.includes":"node_modules/core-js/modules/es.array.includes.js","core-js/modules/es.array.iterator":"node_modules/core-js/modules/es.array.iterator.js","core-js/modules/es.array.join":"node_modules/core-js/modules/es.array.join.js","core-js/modules/es.array.map":"node_modules/core-js/modules/es.array.map.js","core-js/modules/es.array.reduce":"node_modules/core-js/modules/es.array.reduce.js","core-js/modules/es.array.reduce-right":"node_modules/core-js/modules/es.array.reduce-right.js","core-js/modules/es.array.slice":"node_modules/core-js/modules/es.array.slice.js","core-js/modules/es.array.sort":"node_modules/core-js/modules/es.array.sort.js","core-js/modules/es.date.to-json":"node_modules/core-js/modules/es.date.to-json.js","core-js/modules/es.date.to-string":"node_modules/core-js/modules/es.date.to-string.js","core-js/modules/es.function.name":"node_modules/core-js/modules/es.function.name.js","core-js/modules/es.object.assign":"node_modules/core-js/modules/es.object.assign.js","core-js/modules/es.object.entries":"node_modules/core-js/modules/es.object.entries.js","core-js/modules/es.object.get-own-property-descriptor":"node_modules/core-js/modules/es.object.get-own-property-descriptor.js","core-js/modules/es.object.is":"node_modules/core-js/modules/es.object.is.js","core-js/modules/es.object.keys":"node_modules/core-js/modules/es.object.keys.js","core-js/modules/es.object.to-string":"node_modules/core-js/modules/es.object.to-string.js","core-js/modules/es.object.values":"node_modules/core-js/modules/es.object.values.js","core-js/modules/es.regexp.exec":"node_modules/core-js/modules/es.regexp.exec.js","core-js/modules/es.regexp.to-string":"node_modules/core-js/modules/es.regexp.to-string.js","core-js/modules/es.set":"node_modules/core-js/modules/es.set.js","core-js/modules/es.string.includes":"node_modules/core-js/modules/es.string.includes.js","core-js/modules/es.string.iterator":"node_modules/core-js/modules/es.string.iterator.js","core-js/modules/es.string.replace":"node_modules/core-js/modules/es.string.replace.js","core-js/modules/esnext.set.add-all":"node_modules/core-js/modules/esnext.set.add-all.js","core-js/modules/esnext.set.delete-all":"node_modules/core-js/modules/esnext.set.delete-all.js","core-js/modules/esnext.set.difference":"node_modules/core-js/modules/esnext.set.difference.js","core-js/modules/esnext.set.every":"node_modules/core-js/modules/esnext.set.every.js","core-js/modules/esnext.set.filter":"node_modules/core-js/modules/esnext.set.filter.js","core-js/modules/esnext.set.find":"node_modules/core-js/modules/esnext.set.find.js","core-js/modules/esnext.set.intersection":"node_modules/core-js/modules/esnext.set.intersection.js","core-js/modules/esnext.set.is-disjoint-from":"node_modules/core-js/modules/esnext.set.is-disjoint-from.js","core-js/modules/esnext.set.is-subset-of":"node_modules/core-js/modules/esnext.set.is-subset-of.js","core-js/modules/esnext.set.is-superset-of":"node_modules/core-js/modules/esnext.set.is-superset-of.js","core-js/modules/esnext.set.join":"node_modules/core-js/modules/esnext.set.join.js","core-js/modules/esnext.set.map":"node_modules/core-js/modules/esnext.set.map.js","core-js/modules/esnext.set.reduce":"node_modules/core-js/modules/esnext.set.reduce.js","core-js/modules/esnext.set.some":"node_modules/core-js/modules/esnext.set.some.js","core-js/modules/esnext.set.symmetric-difference":"node_modules/core-js/modules/esnext.set.symmetric-difference.js","core-js/modules/esnext.set.union":"node_modules/core-js/modules/esnext.set.union.js","core-js/modules/web.dom-collections.for-each":"node_modules/core-js/modules/web.dom-collections.for-each.js","core-js/modules/web.dom-collections.iterator":"node_modules/core-js/modules/web.dom-collections.iterator.js","core-js/modules/web.url.to-json":"node_modules/core-js/modules/web.url.to-json.js","regenerator-runtime/runtime":"node_modules/regenerator-runtime/runtime.js","./reusables":"node_modules/dataframe-js/lib/reusables.js","./errors":"node_modules/dataframe-js/lib/errors.js","./row":"node_modules/dataframe-js/lib/row.js","./group":"node_modules/dataframe-js/lib/group.js","./symbol":"node_modules/dataframe-js/lib/symbol.js","./io":"node_modules/dataframe-js/lib/io.js"}],"node_modules/core-js/modules/es.number.constructor.js":[function(require,module,exports) {

'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var isForced = require('../internals/is-forced');
var redefine = require('../internals/redefine');
var has = require('../internals/has');
var classof = require('../internals/classof-raw');
var inheritIfRequired = require('../internals/inherit-if-required');
var toPrimitive = require('../internals/to-primitive');
var fails = require('../internals/fails');
var create = require('../internals/object-create');
var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var defineProperty = require('../internals/object-define-property').f;
var trim = require('../internals/string-trim').trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}

},{"../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/global":"node_modules/core-js/internals/global.js","../internals/is-forced":"node_modules/core-js/internals/is-forced.js","../internals/redefine":"node_modules/core-js/internals/redefine.js","../internals/has":"node_modules/core-js/internals/has.js","../internals/classof-raw":"node_modules/core-js/internals/classof-raw.js","../internals/inherit-if-required":"node_modules/core-js/internals/inherit-if-required.js","../internals/to-primitive":"node_modules/core-js/internals/to-primitive.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/object-create":"node_modules/core-js/internals/object-create.js","../internals/object-get-own-property-names":"node_modules/core-js/internals/object-get-own-property-names.js","../internals/object-get-own-property-descriptor":"node_modules/core-js/internals/object-get-own-property-descriptor.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js","../internals/string-trim":"node_modules/core-js/internals/string-trim.js"}],"node_modules/core-js/modules/es.number.is-nan.js":[function(require,module,exports) {
var $ = require('../internals/export');

// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
$({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return number != number;
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js"}],"node_modules/dataframe-js/lib/modules/stat.js":[function(require,module,exports) {
"use strict";

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.function.name");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-nan");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reusables = require("../reusables");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stat = function () {
  function Stat(df) {
    _classCallCheck(this, Stat);

    this.df = df;
    this.name = "stat";
  }

  _createClass(Stat, [{
    key: "_castAsNumber",
    value: function _castAsNumber(columnName) {
      return this.df.withColumn(columnName, function (row) {
        return Number(row.get(columnName));
      }).filter(function (row) {
        return !Number.isNaN(row.get(columnName));
      });
    }
  }, {
    key: "sum",
    value: function sum(columnName) {
      return Number(this.df.reduce(function (p, n) {
        return (0, _reusables.isNumber)(n.get(columnName)) ? p + Number(n.get(columnName)) : p;
      }, 0));
    }
  }, {
    key: "max",
    value: function max(columnName) {
      return this._castAsNumber(columnName).reduce(function (p, n) {
        return n.get(columnName) > p.get(columnName) ? n : p;
      }).get(columnName);
    }
  }, {
    key: "min",
    value: function min(columnName) {
      return this._castAsNumber(columnName).reduce(function (p, n) {
        return p.get(columnName) > n.get(columnName) ? n : p;
      }).get(columnName);
    }
  }, {
    key: "mean",
    value: function mean(columnName) {
      var numericDF = this.df.filter(function (row) {
        return (0, _reusables.isNumber)(row.get(columnName));
      });
      return Number(numericDF.reduce(function (p, n) {
        return (0, _reusables.isNumber)(n.get(columnName)) ? p + Number(n.get(columnName)) : p;
      }, 0)) / numericDF.count();
    }
  }, {
    key: "average",
    value: function average(columnName) {
      return this.mean(columnName);
    }
  }, {
    key: "var",
    value: function _var(columnName) {
      var population = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var numericDF = this.df.filter(function (row) {
        return (0, _reusables.isNumber)(row.get(columnName));
      });
      var mean = this.mean(columnName);
      return Number(numericDF.reduce(function (p, n) {
        return p + Math.pow(n.get(columnName) - mean, 2);
      }, 0)) / (numericDF.count() - (population ? 0 : 1));
    }
  }, {
    key: "sd",
    value: function sd(columnName) {
      var population = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return Math.sqrt(this.var(columnName, population));
    }
  }, {
    key: "stats",
    value: function stats(columnName) {
      return {
        sum: this.sum(columnName),
        mean: this.mean(columnName),
        min: this.min(columnName),
        max: this.max(columnName),
        var: this.var(columnName),
        varpop: this.var(columnName, true),
        sd: this.sd(columnName),
        sdpop: this.sd(columnName, true)
      };
    }
  }]);

  return Stat;
}();

var _default = Stat;
exports.default = _default;
},{"core-js/modules/es.array.filter":"node_modules/core-js/modules/es.array.filter.js","core-js/modules/es.array.reduce":"node_modules/core-js/modules/es.array.reduce.js","core-js/modules/es.function.name":"node_modules/core-js/modules/es.function.name.js","core-js/modules/es.number.constructor":"node_modules/core-js/modules/es.number.constructor.js","core-js/modules/es.number.is-nan":"node_modules/core-js/modules/es.number.is-nan.js","../reusables":"node_modules/dataframe-js/lib/reusables.js"}],"node_modules/dataframe-js/lib/modules/matrix.js":[function(require,module,exports) {
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataframe = _interopRequireDefault(require("../dataframe"));

var _errors = require("../errors");

var _reusables = require("../reusables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Matrix = function () {
  function Matrix(df) {
    _classCallCheck(this, Matrix);

    this.df = df;
    this.name = "matrix";
  }

  _createClass(Matrix, [{
    key: "isCommutative",
    value: function isCommutative(df) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!(df instanceof _dataframe.default)) throw new _errors.ArgumentTypeError(df, "DataFrame");
      return (0, _reusables.arrayEqual)(this.df.dim(), reverse ? df.dim().reverse() : df.dim(), true);
    }
  }, {
    key: "add",
    value: function add(df) {
      var _this = this;

      if (!this.isCommutative(df)) {
        throw new _errors.WrongSchemaError(this.df.dim(), df.dim());
      }

      var columns = _toConsumableArray(Array(this.df.dim()[1]).keys());

      return this.df.__newInstance__(_toConsumableArray((0, _reusables.iter)(Object.keys(_toConsumableArray(this.df)), function (rowKey) {
        var a = _toConsumableArray(_this.df)[rowKey].toArray();

        var b = _toConsumableArray(df)[rowKey].toArray();

        return columns.map(function (column) {
          return a[column] + b[column];
        });
      })), this.df.listColumns());
    }
  }, {
    key: "product",
    value: function product(number) {
      if (!(typeof number === "number")) throw new _errors.ArgumentTypeError(number, "Number");
      return this.df.map(function (row) {
        return row.toArray().map(function (column) {
          return column * number;
        });
      });
    }
  }, {
    key: "dot",
    value: function dot(df) {
      var _this2 = this;

      if (!this.isCommutative(df, true)) {
        throw new _errors.WrongSchemaError(this.df.dim(), df.dim().reverse());
      }

      var columns = _toConsumableArray(Array(this.df.dim()[0]).keys());

      return this.df.__newInstance__(_toConsumableArray((0, _reusables.iter)(Object.keys(_toConsumableArray(this.df)), function (rowKey) {
        var a = _toConsumableArray(_this2.df)[rowKey].toArray();

        return _toConsumableArray((0, _reusables.iter)(columns, function (column) {
          var b = _toConsumableArray(df.transpose())[column].toArray();

          return Object.keys(b).reduce(function (p, n) {
            return p + b[n] * a[n];
          }, 0);
        }));
      })), columns);
    }
  }]);

  return Matrix;
}();

var _default = Matrix;
exports.default = _default;
},{"core-js/modules/es.symbol":"node_modules/core-js/modules/es.symbol.js","core-js/modules/es.symbol.description":"node_modules/core-js/modules/es.symbol.description.js","core-js/modules/es.symbol.iterator":"node_modules/core-js/modules/es.symbol.iterator.js","core-js/modules/es.array.from":"node_modules/core-js/modules/es.array.from.js","core-js/modules/es.array.iterator":"node_modules/core-js/modules/es.array.iterator.js","core-js/modules/es.array.map":"node_modules/core-js/modules/es.array.map.js","core-js/modules/es.array.reduce":"node_modules/core-js/modules/es.array.reduce.js","core-js/modules/es.date.to-string":"node_modules/core-js/modules/es.date.to-string.js","core-js/modules/es.function.name":"node_modules/core-js/modules/es.function.name.js","core-js/modules/es.object.keys":"node_modules/core-js/modules/es.object.keys.js","core-js/modules/es.object.to-string":"node_modules/core-js/modules/es.object.to-string.js","core-js/modules/es.regexp.to-string":"node_modules/core-js/modules/es.regexp.to-string.js","core-js/modules/es.string.iterator":"node_modules/core-js/modules/es.string.iterator.js","core-js/modules/web.dom-collections.iterator":"node_modules/core-js/modules/web.dom-collections.iterator.js","../dataframe":"node_modules/dataframe-js/lib/dataframe.js","../errors":"node_modules/dataframe-js/lib/errors.js","../reusables":"node_modules/dataframe-js/lib/reusables.js"}],"node_modules/core-js/modules/es.regexp.constructor.js":[function(require,module,exports) {

var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var isForced = require('../internals/is-forced');
var inheritIfRequired = require('../internals/inherit-if-required');
var defineProperty = require('../internals/object-define-property').f;
var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var isRegExp = require('../internals/is-regexp');
var getFlags = require('../internals/regexp-flags');
var stickyHelpers = require('../internals/regexp-sticky-helpers');
var redefine = require('../internals/redefine');
var fails = require('../internals/fails');
var setInternalState = require('../internals/internal-state').set;
var setSpecies = require('../internals/set-species');
var wellKnownSymbol = require('../internals/well-known-symbol');

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

},{"../internals/descriptors":"node_modules/core-js/internals/descriptors.js","../internals/global":"node_modules/core-js/internals/global.js","../internals/is-forced":"node_modules/core-js/internals/is-forced.js","../internals/inherit-if-required":"node_modules/core-js/internals/inherit-if-required.js","../internals/object-define-property":"node_modules/core-js/internals/object-define-property.js","../internals/object-get-own-property-names":"node_modules/core-js/internals/object-get-own-property-names.js","../internals/is-regexp":"node_modules/core-js/internals/is-regexp.js","../internals/regexp-flags":"node_modules/core-js/internals/regexp-flags.js","../internals/regexp-sticky-helpers":"node_modules/core-js/internals/regexp-sticky-helpers.js","../internals/redefine":"node_modules/core-js/internals/redefine.js","../internals/fails":"node_modules/core-js/internals/fails.js","../internals/internal-state":"node_modules/core-js/internals/internal-state.js","../internals/set-species":"node_modules/core-js/internals/set-species.js","../internals/well-known-symbol":"node_modules/core-js/internals/well-known-symbol.js"}],"node_modules/core-js/modules/es.array.find.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $find = require('../internals/array-iteration').find;
var addToUnscopables = require('../internals/add-to-unscopables');

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/array-iteration":"node_modules/core-js/internals/array-iteration.js","../internals/add-to-unscopables":"node_modules/core-js/internals/add-to-unscopables.js"}],"node_modules/core-js/modules/es.array.find-index.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $findIndex = require('../internals/array-iteration').findIndex;
var addToUnscopables = require('../internals/add-to-unscopables');

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/array-iteration":"node_modules/core-js/internals/array-iteration.js","../internals/add-to-unscopables":"node_modules/core-js/internals/add-to-unscopables.js"}],"node_modules/core-js/internals/string-trim-forced.js":[function(require,module,exports) {
var fails = require('../internals/fails');
var whitespaces = require('../internals/whitespaces');

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};

},{"../internals/fails":"node_modules/core-js/internals/fails.js","../internals/whitespaces":"node_modules/core-js/internals/whitespaces.js"}],"node_modules/core-js/modules/es.string.trim.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $trim = require('../internals/string-trim').trim;
var forcedStringTrimMethod = require('../internals/string-trim-forced');

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

},{"../internals/export":"node_modules/core-js/internals/export.js","../internals/string-trim":"node_modules/core-js/internals/string-trim.js","../internals/string-trim-forced":"node_modules/core-js/internals/string-trim-forced.js"}],"node_modules/dataframe-js/lib/modules/sql/sqlEngine.js":[function(require,module,exports) {
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.find-index");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-nan");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/es.string.trim");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sqlParser;

var _reusables = require("../../reusables");

var _errors = require("../../errors");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var REPLACMENTS = [["INNER JOIN", "INNERJOIN"], ["LEFT JOIN", "LEFTJOIN"], ["RIGHT JOIN", "RIGHTJOIN"], ["FULL JOIN", "FULLJOIN"], ["GROUP BY", "GROUPBY"]];
var WHERE_OPERATORS = {
  IN: function IN(a, b) {
    return b.includes(a);
  },
  LIKE: function LIKE(a, b) {
    return b.includes(a) || a.includes(b);
  },
  ">=": function _(a, b) {
    return a >= b;
  },
  "<=": function _(a, b) {
    return a <= b;
  },
  "!=": function _(a, b) {
    return a !== b;
  },
  "<": function _(a, b) {
    return a < b;
  },
  ">": function _(a, b) {
    return a > b;
  },
  "=": function _(a, b) {
    return a === b;
  },
  AND: function AND(a, b) {
    return a && b;
  },
  OR: function OR(a, b) {
    return a || b;
  }
};
var SELECT_FUNCTIONS = {
  COUNT: function COUNT(df) {
    return df.count();
  },
  SUM: function SUM(df, column) {
    return df.stat.sum(column);
  },
  MAX: function MAX(df, column) {
    return df.stat.max(column);
  },
  MIN: function MIN(df, column) {
    return df.stat.min(column);
  },
  AVG: function AVG(df, column) {
    return df.stat.mean(column);
  }
};

function match(value) {
  for (var _len = arguments.length, cases = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    cases[_key - 1] = arguments[_key];
  }

  var casesGen = (0, _reusables.makeGenerator)(cases);

  var checker = function checker(nextCase) {
    return nextCase[0](value) ? nextCase[1](value) : checker(casesGen.next().value);
  };

  return checker(casesGen.next().value);
}

function sqlArgsToArray(args) {
  return (0, _reusables.xReplace)(args.join(" "), [" ", ""]).split(",");
}

function joinHandler(operation, tables, type) {
  var ONKeywordLocation = operation.findIndex(function (word) {
    return word.toUpperCase() === "ON";
  }) + 1;
  return function (df) {
    return df.join(tables[operation[0]], sqlArgsToArray(operation.filter(function (word, loc) {
      return loc >= ONKeywordLocation;
    })), type);
  };
}

var OPERATIONS_HANDLER = {
  WHERE: function WHERE(operation) {
    var operationalTerms = (0, _reusables.xSplit)(operation.join(" "), " AND ", " OR ");
    return function (df) {
      return df.filter(function (row) {
        var conditionalOperators = operation.filter(function (term) {
          return ["AND", "OR"].includes(term.toUpperCase());
        });
        return operationalTerms.map(function (operationalTerm) {
          var operatorToApply = _reusables.xContains.apply(void 0, [operationalTerm].concat(_toConsumableArray(Object.keys(WHERE_OPERATORS))))[0];

          var terms = operationalTerm.split(operatorToApply).map(function (term) {
            return term.trim();
          });

          if (!row.has(terms[0]) && row.has(terms[1])) {
            return WHERE_OPERATORS[operatorToApply]((0, _reusables.xReplace)(terms[0].trim(), ['"', ""], ["'", ""], ["`", ""]), String(row.get(terms[1])));
          }

          var lastTermAsNumber = Number(terms[1]);
          return WHERE_OPERATORS[operatorToApply](String(row.get(terms[0])), Number.isNaN(lastTermAsNumber) ? (0, _reusables.xReplace)(terms[1].trim(), ['"', ""], ["'", ""], ["`", ""]) : lastTermAsNumber);
        }).reduce(function (prev, next) {
          return WHERE_OPERATORS[conditionalOperators.shift()](prev, next);
        });
      });
    };
  },
  JOIN: function JOIN(operation, tables) {
    return joinHandler(operation, tables, "inner");
  },
  INNERJOIN: function INNERJOIN(operation, tables) {
    return joinHandler(operation, tables, "inner");
  },
  LEFTJOIN: function LEFTJOIN(operation, tables) {
    return joinHandler(operation, tables, "left");
  },
  RIGHTJOIN: function RIGHTJOIN(operation, tables) {
    return joinHandler(operation, tables, "right");
  },
  FULLJOIN: function FULLJOIN(operation, tables) {
    return joinHandler(operation, tables, "full");
  },
  UNION: function UNION(operation, tables) {
    return function (df) {
      return df.union(operation[0].toUpperCase().includes("SELECT") ? sqlParser(operation.join(" "), tables) : tables[operation[0]]);
    };
  },
  GROUPBY: function GROUPBY(operation) {
    return function (df) {
      return df.groupBy.apply(df, _toConsumableArray(sqlArgsToArray(operation)));
    };
  }
};

function replaceTermsInQuery(query) {
  var replacedQuery = query;
  REPLACMENTS.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        joinType = _ref2[0],
        replacment = _ref2[1];

    replacedQuery = replacedQuery.replace(joinType, replacment).replace(joinType.toLowerCase(), replacment);
  });
  return replacedQuery;
}

function sqlSplitter(query) {
  var splittedQuery = replaceTermsInQuery(query).split(" ");
  var fromLoc = splittedQuery.findIndex(function (word) {
    return word.toUpperCase() === "FROM";
  });

  if (fromLoc === -1) {
    throw new _errors.SQLParseError("Your query should contains FROM keyword");
  }

  return {
    selections: splittedQuery.slice(0, fromLoc),
    table: splittedQuery[fromLoc + 1],
    operations: splittedQuery.slice(fromLoc + 2, splittedQuery.length)
  };
}

function parseOperations(operations, tables) {
  var operationsLoc = operations.map(function (word, index) {
    return Object.keys(OPERATIONS_HANDLER).includes(word.toUpperCase()) ? index : undefined;
  }).filter(function (loc) {
    return loc !== undefined;
  });
  return operationsLoc.map(function (loc, index) {
    return OPERATIONS_HANDLER[operations[loc].toUpperCase()](operations.slice(loc + 1, operationsLoc[index + 1] ? operationsLoc[index + 1] : operations.length), tables);
  }).reduce(function (prev, next) {
    return function (df) {
      return next(prev(df));
    };
  }, function (df) {
    return df;
  });
}

function parseSelections(selections) {
  if (selections[0].toUpperCase() !== "SELECT") {
    throw new _errors.SQLParseError("Your query should begin with SELECT keyword");
  }

  selections.shift();
  return match(selections.join(" ").split(",").map(function (selection) {
    return selection.trim();
  }), [function (value) {
    return (0, _reusables.xReplace)(value[0], [" ", ""]) === "*";
  }, function () {
    return function (df) {
      return df;
    };
  }], [function (value) {
    return value[0].toUpperCase().includes("DISTINCT");
  }, function (value) {
    var columnName = (0, _reusables.xReplace)(value[0].split(" AS ")[0], ["DISTINCT", ""], ["distinct", ""], [" ", ""]);
    return function (df) {
      return df.distinct(columnName).rename(columnName, value[0].includes("AS") ? value[0].split("AS")[1].replace(" ", "") : columnName);
    };
  }], [function (value) {
    return _reusables.xContains.apply(void 0, [value[0].toUpperCase()].concat(_toConsumableArray(Object.keys(SELECT_FUNCTIONS))))[0];
  }, function (value) {
    return function (df) {
      var functionToApply = Object.keys(SELECT_FUNCTIONS).find(function (func) {
        return value[0].toUpperCase().includes(func);
      });

      var applyFunction = function applyFunction(dfToImpact) {
        return SELECT_FUNCTIONS[functionToApply](dfToImpact, (0, _reusables.xReplace)(value[0], ["".concat(functionToApply.toLowerCase(), "("), ""], ["".concat(functionToApply, "("), ""], ["(", ""], [")", ""]));
      };

      return df.on && df.df ? df.aggregate(applyFunction) : applyFunction(df);
    };
  }], [function () {
    return true;
  }, function (value) {
    return function (df) {
      return df.select.apply(df, _toConsumableArray(value.map(function (column) {
        return column.split(" AS ")[0].replace(" ", "");
      }))).renameAll(value.map(function (column) {
        return column.includes("AS") ? column.split("AS")[1].replace(" ", "") : column;
      }));
    };
  }]);
}

function sqlParser(query, tables) {
  var _sqlSplitter = sqlSplitter(query),
      selections = _sqlSplitter.selections,
      table = _sqlSplitter.table,
      operations = _sqlSplitter.operations;

  if (!table || !Object.keys(tables).includes(table)) {
    throw new _errors.SQLParseError("Wrong table name in your query: ".concat(table));
  }

  var applyOperations = parseOperations(operations, tables);
  var applySelections = parseSelections(selections);
  return applySelections(applyOperations(tables[table]));
}
},{"core-js/modules/es.symbol":"node_modules/core-js/modules/es.symbol.js","core-js/modules/es.symbol.description":"node_modules/core-js/modules/es.symbol.description.js","core-js/modules/es.symbol.iterator":"node_modules/core-js/modules/es.symbol.iterator.js","core-js/modules/es.array.concat":"node_modules/core-js/modules/es.array.concat.js","core-js/modules/es.array.filter":"node_modules/core-js/modules/es.array.filter.js","core-js/modules/es.array.find":"node_modules/core-js/modules/es.array.find.js","core-js/modules/es.array.find-index":"node_modules/core-js/modules/es.array.find-index.js","core-js/modules/es.array.for-each":"node_modules/core-js/modules/es.array.for-each.js","core-js/modules/es.array.from":"node_modules/core-js/modules/es.array.from.js","core-js/modules/es.array.includes":"node_modules/core-js/modules/es.array.includes.js","core-js/modules/es.array.iterator":"node_modules/core-js/modules/es.array.iterator.js","core-js/modules/es.array.join":"node_modules/core-js/modules/es.array.join.js","core-js/modules/es.array.map":"node_modules/core-js/modules/es.array.map.js","core-js/modules/es.array.reduce":"node_modules/core-js/modules/es.array.reduce.js","core-js/modules/es.array.slice":"node_modules/core-js/modules/es.array.slice.js","core-js/modules/es.date.to-string":"node_modules/core-js/modules/es.date.to-string.js","core-js/modules/es.number.constructor":"node_modules/core-js/modules/es.number.constructor.js","core-js/modules/es.number.is-nan":"node_modules/core-js/modules/es.number.is-nan.js","core-js/modules/es.object.keys":"node_modules/core-js/modules/es.object.keys.js","core-js/modules/es.object.to-string":"node_modules/core-js/modules/es.object.to-string.js","core-js/modules/es.regexp.exec":"node_modules/core-js/modules/es.regexp.exec.js","core-js/modules/es.regexp.to-string":"node_modules/core-js/modules/es.regexp.to-string.js","core-js/modules/es.string.includes":"node_modules/core-js/modules/es.string.includes.js","core-js/modules/es.string.iterator":"node_modules/core-js/modules/es.string.iterator.js","core-js/modules/es.string.replace":"node_modules/core-js/modules/es.string.replace.js","core-js/modules/es.string.split":"node_modules/core-js/modules/es.string.split.js","core-js/modules/es.string.trim":"node_modules/core-js/modules/es.string.trim.js","core-js/modules/web.dom-collections.iterator":"node_modules/core-js/modules/web.dom-collections.iterator.js","../../reusables":"node_modules/dataframe-js/lib/reusables.js","../../errors":"node_modules/dataframe-js/lib/errors.js"}],"node_modules/dataframe-js/lib/modules/sql/index.js":[function(require,module,exports) {
"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sqlEngine = _interopRequireDefault(require("./sqlEngine"));

var _dataframe = _interopRequireDefault(require("../../dataframe"));

var _errors = require("../../errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SQL = function () {
  _createClass(SQL, null, [{
    key: "request",
    value: function request(query) {
      if (!(typeof query === "string")) throw new _errors.ArgumentTypeError(query, "Stri g");
      return (0, _sqlEngine.default)(query, SQL.tables);
    }
  }, {
    key: "dropTables",
    value: function dropTables() {
      SQL.tables = {};
    }
  }, {
    key: "dropTable",
    value: function dropTable(tableName) {
      delete SQL.tables[tableName];
    }
  }, {
    key: "renameTable",
    value: function renameTable(tableName, replacement) {
      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      SQL.registerTable(SQL.tables[tableName], replacement, overwrite);
      SQL.dropTable(tableName);
    }
  }, {
    key: "listTables",
    value: function listTables() {
      return Object.keys(SQL.tables);
    }
  }, {
    key: "registerTable",
    value: function registerTable(df, tableName) {
      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!(df instanceof _dataframe.default)) throw new _errors.ArgumentTypeError(df, "DataFrame");
      var validation = new RegExp("^[a-zA-Z_][a-zA-Z0-9_]*$");

      if (!validation.test(tableName)) {
        throw new _errors.WrongTableNameError(tableName);
      }

      if (SQL.listTables().includes(tableName) && !overwrite) {
        throw new _errors.TableAlreadyExistsError(tableName);
      }

      SQL.tables[tableName] = df;
    }
  }]);

  function SQL(df) {
    _classCallCheck(this, SQL);

    this.df = df;
    this.name = "sql";
  }

  _createClass(SQL, [{
    key: "register",
    value: function register(tableName) {
      var overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      SQL.registerTable(this.df, tableName, overwrite);
      return this.df;
    }
  }]);

  return SQL;
}();

SQL.tables = {};
var _default = SQL;
exports.default = _default;
},{"core-js/modules/es.array.includes":"node_modules/core-js/modules/es.array.includes.js","core-js/modules/es.function.name":"node_modules/core-js/modules/es.function.name.js","core-js/modules/es.object.keys":"node_modules/core-js/modules/es.object.keys.js","core-js/modules/es.regexp.constructor":"node_modules/core-js/modules/es.regexp.constructor.js","core-js/modules/es.regexp.exec":"node_modules/core-js/modules/es.regexp.exec.js","core-js/modules/es.regexp.to-string":"node_modules/core-js/modules/es.regexp.to-string.js","core-js/modules/es.string.includes":"node_modules/core-js/modules/es.string.includes.js","./sqlEngine":"node_modules/dataframe-js/lib/modules/sql/sqlEngine.js","../../dataframe":"node_modules/dataframe-js/lib/dataframe.js","../../errors":"node_modules/dataframe-js/lib/errors.js"}],"node_modules/dataframe-js/lib/index.js":[function(require,module,exports) {
"use strict";

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DataFrame", {
  enumerable: true,
  get: function get() {
    return _dataframe.default;
  }
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _row.default;
  }
});
exports.Errors = exports.default = void 0;

var _dataframe = _interopRequireDefault(require("./dataframe"));

var _row = _interopRequireDefault(require("./row"));

var Errors = _interopRequireWildcard(require("./errors"));

exports.Errors = Errors;

var _stat = _interopRequireDefault(require("./modules/stat"));

var _matrix = _interopRequireDefault(require("./modules/matrix"));

var _index = _interopRequireDefault(require("./modules/sql/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dataframe.default.setDefaultModules(_stat.default, _matrix.default, _index.default);

_dataframe.default.sql = _index.default;
var _default = _dataframe.default;
exports.default = _default;
},{"core-js/modules/es.object.get-own-property-descriptor":"node_modules/core-js/modules/es.object.get-own-property-descriptor.js","./dataframe":"node_modules/dataframe-js/lib/dataframe.js","./row":"node_modules/dataframe-js/lib/row.js","./errors":"node_modules/dataframe-js/lib/errors.js","./modules/stat":"node_modules/dataframe-js/lib/modules/stat.js","./modules/matrix":"node_modules/dataframe-js/lib/modules/matrix.js","./modules/sql/index.js":"node_modules/dataframe-js/lib/modules/sql/index.js"}],"js/TacsChart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _googleCharts = require("google-charts");

var _dataframeJs = _interopRequireDefault(require("dataframe-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Uses Google Charts along with other elements to create this custom element
var TacsChart =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(TacsChart, _HTMLElement);

  var _super = _createSuper(TacsChart);

  function TacsChart() {
    _classCallCheck(this, TacsChart);

    return _super.apply(this, arguments);
  }

  _createClass(TacsChart, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      var _this = this;

      if (name === 'showminus') {
        if (newValue === 'true') {
          var minusBtn = document.createElement('div');
          minusBtn.classList.add('minus-btn');
          this.append(minusBtn);
          minusBtn.addEventListener('click', function () {
            _this.remove();
          });
        } else if (newValue === 'false') {
          this.querySelector('.minus-btn').remove();
        }
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.innerHTML = "\n            <style>\n                tacs-chart {\n                    position: relative;\n                }\n\n                tacs-chart .dropdown {\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    z-index: 2;\n                }\n\n                tacs-chart .minus-btn {\n                    position: absolute;\n                    top: 0;\n                    right: 0;\n                }\n\n                tacs-chart .tacs-container {\n                    margin-bottom: 2.5rem;\n                }\n            </style>\n            <div class=\"dropdown\">\n                <button class=\"dropdown-btn\">Dictionary</button>\n                <ul>\n                    <li><button>Dictionary</button></li>\n                    <li><button>Category</button></li>\n                    <li><button>Concept</button></li>\n                </ul>\n            </div>\n            <div class=\"tacs-container\"></div>\n        ";

      if (this.hasAttribute('showminus')) {
        var showMinus = this.getAttribute('showminus');

        if (showMinus === "true") {
          var minusBtn = document.createElement('div');
          minusBtn.classList.add('minus-btn');
          this.append(minusBtn);
          minusBtn.addEventListener('click', function () {
            _this2.remove();
          });
        }
      }

      var dropdownBtn = this.querySelector('.dropdown .dropdown-btn');
      var dropdownUl = this.querySelector('.dropdown ul');
      dropdownUl.style.display = 'none';
      dropdownBtn.addEventListener('focus', function () {
        return dropdownUl.style.display = 'block';
      });
      dropdownBtn.addEventListener('blur', function () {
        return dropdownUl.style.display = 'none';
      });
      var levels = this.querySelectorAll('.dropdown ul li button');
      levels.forEach(function (element) {
        var level = 'dict';

        switch (element.innerText) {
          case 'Dictionary':
            level = 'dict';
            break;

          case 'Category':
            level = 'cat';
            break;

          case 'Concept':
            level = 'concept';
            break;
        }

        element.addEventListener('mousedown', function () {
          _this2.drawChart({
            type: _this2.type,
            data: _this2.data,
            options: _this2.options,
            level: level,
            groups: _this2.groups
          });

          dropdownBtn.innerText = element.innerText;
        });
      });
      this.hasAttribute('type') ? this.drawChart({
        type: this.getAttribute('type')
      }) : this.drawChart();
    } // Wrapper method for drawChartCallback

  }, {
    key: "drawChart",
    value: function drawChart() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$type = _ref.type,
          type = _ref$type === void 0 ? 'PieChart' : _ref$type,
          data = _ref.data,
          _ref$level = _ref.level,
          level = _ref$level === void 0 ? 'dict' : _ref$level,
          options = _ref.options,
          groups = _ref.groups;

      this.level = level;
      this.type = type;
      this.data = data;
      this.options = options;
      this.groups = groups; // Set a callback to run when the Google Visualization API is loaded.

      _googleCharts.GoogleCharts.load(this.drawChartCallback.bind(this, type, data, level, options, groups));
    } // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.

  }, {
    key: "drawChartCallback",
    value: function drawChartCallback(type, data, level, options, groups) {
      if (options === undefined) {
        // Set chart options
        options = {
          width: 420,
          height: 320,
          backgroundColor: '#1f2761',
          chartArea: {
            width: '100%',
            height: '80%'
          },
          legend: {
            position: 'bottom',
            textStyle: {
              color: 'whitesmoke',
              fontName: 'EB Garamond'
            }
          },
          hAxis: {
            textStyle: {
              color: 'whitesmoke',
              fontName: 'EB Garamond',
              fontSize: 13
            }
          },
          vAxis: {
            textStyle: {
              color: 'whitesmoke',
              fontName: 'EB Garamond',
              fontSize: 13
            }
          },
          titleTextStyle: {
            color: 'whitesmoke',
            fontName: 'EB Garamond',
            fontSize: 20
          }
        };
      }

      if (data !== undefined) {
        // Draw based on level
        switch (type) {
          case 'PieChart':
            {
              // Make data table for Google Chart
              var googleData = new _googleCharts.GoogleCharts.api.visualization.DataTable();
              googleData.addColumn('string', 'terms');
              googleData.addColumn('number', 'frequency'); // Combine all tacs_count analysis in one string named 'count'

              var count = [];
              data.forEach(function (row) {
                return count = count.concat(row[1]);
              }); // Create a DataFrame from count

              var df = new _dataframeJs.default(count); // GroupBy the level selected and include the count for each group

              var res = df.groupBy(level).aggregate(function (group) {
                return group.reduce(function (p, n) {
                  return n.get('freq') + p;
                }, 0);
              }).rename('aggregation', 'groupCount').toArray(); // Add the result to the data table

              googleData.addRows(res);
              data = googleData;
              break;
            }

          case 'ColumnChart':
            {
              var result; // Counter for groups iterated 

              var group = 0; // Counter for files iterated

              var file = 0;
              groups.forEach(function (fileCount) {
                // Combine all the files of the group to count[]
                var count = [];

                for (var i = file; i < fileCount + file; i++) {
                  count = count.concat(data[i][1]);
                } // Create a DataFrame from count


                var df = new _dataframeJs.default(count); // GroupBy the level selected and include the count for each group

                var res = df.groupBy(level).aggregate(function (group) {
                  return group.reduce(function (p, n) {
                    return n.get('freq') + p;
                  }, 0);
                }).rename('aggregation', 'groupCount').toArray();
                res.unshift(['Term', 'Group ' + ++group]);
                if (result === undefined) result = new _dataframeJs.default(res);else result = result.withColumn(group + 1, function (_, index) {
                  return res[index][1];
                });
                file += fileCount;
              });
              data = _googleCharts.GoogleCharts.api.visualization.arrayToDataTable(result.toArray());
              options.chartArea = {
                width: '85%',
                height: '80%'
              };
              this.querySelector('.tacs-container').style.marginTop = '1.5rem';
              break;
            }

          case 'BarChart':
            {
              var _result = [];
              data.forEach(function (row) {
                var df = new _dataframeJs.default(row[1]); // GroupBy the level selected and include the count for each group

                var res = df.groupBy(level).aggregate(function (group) {
                  return group.reduce(function (p, n) {
                    return n.get('freq') + p;
                  }, 0);
                }).rename('aggregation', 'groupCount').toArray();
                res.unshift(['file', row[0]]); // TODO: Make row[2] to blob

                var blob = new Blob([row[2]], {
                  type: 'text/html;charset=utf-8'
                });
                var url = URL.createObjectURL(blob);
                res.push(["link", url]);
                res = Object.fromEntries(res);

                _result.push(res);
              });
              options.isStacked = 'percent';

              var _df = new _dataframeJs.default(_result);

              _result = _df.toArray();

              _result.unshift(_df.listColumns());

              _result[0][_result[0].length - 1] = {
                role: 'link'
              };
              data = _googleCharts.GoogleCharts.api.visualization.arrayToDataTable(_result);
              options.chartArea = {
                width: '80%',
                height: '80%'
              };
              break;
            }
        }
      } // The below conditional statements outline the default behaviour


      if (data === undefined) {
        switch (type) {
          case 'PieChart':
            data = new _googleCharts.GoogleCharts.api.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([['Mushrooms', 3], ['Onions', 1], ['Olives', 1], ['Zucchini', 1], ['Pepperoni', 2]]);
            break;

          case 'ColumnChart':
            data = new _googleCharts.GoogleCharts.api.visualization.DataTable();
            data.addColumn('string', 'Year');
            data.addColumn('number', 'Sales');
            data.addColumn('number', 'Expenses');
            data.addRows([['2004', 1000, 400], ['2005', 1170, 460], ['2006', 860, 580], ['2007', 1030, 540]]);
            break;

          case 'BarChart':
            data = _googleCharts.GoogleCharts.api.visualization.arrayToDataTable([['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General', 'Western', 'Literature', {
              role: 'annotation'
            }], ['2010', 10, 24, 20, 32, 18, 5, ''], ['2020', 16, 22, 23, 30, 16, 9, ''], ['2030', 28, 19, 29, 30, 12, 13, '']]);
            options.isStacked = 'percent';
            break;
        }
      } // Instantiate and draw our chart, passing in some options.


      var chart;
      if (type === 'ColumnChart') chart = new _googleCharts.GoogleCharts.api.visualization.ColumnChart(this.querySelector('.tacs-container'));else if (type === 'BarChart') {
        chart = new _googleCharts.GoogleCharts.api.visualization.BarChart(this.querySelector('.tacs-container'));

        _googleCharts.GoogleCharts.api.visualization.events.addListener(chart, 'select', function () {
          var row = chart.getSelection()[0].row;
          var link = data.getValue(row, 3);
          window.open(link);
        });
      } else chart = new _googleCharts.GoogleCharts.api.visualization.PieChart(this.querySelector('.tacs-container'));
      chart.draw(data, options);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['showminus', 'type'];
    }
  }]);

  return TacsChart;
}(
/*#__PURE__*/
_wrapNativeSuper(HTMLElement));

exports.default = TacsChart;
customElements.define('tacs-chart', TacsChart);
},{"google-charts":"node_modules/google-charts/dist/googleCharts.esm.js","dataframe-js":"node_modules/dataframe-js/lib/index.js"}],"js/controller.js":[function(require,module,exports) {
"use strict";

var _dataframeJs = require("dataframe-js");

var _TacsChart = _interopRequireDefault(require("./TacsChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backend = 'http://127.0.0.1:5000'; // Add event listener for submitting the files

var body = document.querySelector('body');
var form = document.getElementById('form');
var loader = document.querySelector('.loader-container');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var formData = new FormData();
  var browseInput = document.querySelectorAll('browse-input');
  var groups = [];
  browseInput.forEach(function (selectedInput) {
    var selectedFiles = selectedInput.querySelectorAll('input');
    selectedFiles.forEach(function (selectedFiles) {
      if (selectedFiles.files.length !== 0) groups.push(selectedFiles.files.length);

      for (var i = 0; i < selectedFiles.files.length; i++) {
        // Add additional data to file to indicate that its in a specific group
        formData.append('file', selectedFiles.files[i]);
      }
    });
  }); // if( (groups.length === 0) || (groups.reduce((p,n) => p + n, 0) === 0) ) {
  //     alert('No file(s) selected');
  //     return;
  // }

  loader.style.display = 'flex';
  body.classList.add('stop-scrolling');
  fetch(backend + '/tacs', {
    method: 'POST',
    body: formData
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return responseHandler(groups, response);
  }).catch(function (error) {
    return alert(error);
  }).finally(function () {
    setTimeout(function () {
      loader.style.display = 'none';
      body.classList.remove('stop-scrolling'); // Display results page and scroll into view

      document.getElementById('pagebrake').scrollIntoView({
        behavior: 'smooth'
      });
    }, 1000);
  });
});

var responseHandler = function responseHandler(groups, response) {
  if (true) {
    groups = [1, 1];
  } // Add event listener for Exporting


  var exp = document.getElementById('export');
  exp.addEventListener('click', function () {
    // Get the results page 
    // Get the response from fetch
    var result = response.reduce(function (acc, file) {
      var df = new _dataframeJs.DataFrame(file[1]);
      df = df.withColumn('file', function () {
        return file[0];
      });
      df = df.restructure(['file', 'dict', 'cat', 'concept', 'freq', 'top_sub']);
      return acc.fullJoin(df, ['file', 'dict', 'cat', 'concept', 'freq', 'top_sub']);
    }, new _dataframeJs.DataFrame([]));
    var blob = new Blob([result.toCSV()], {
      encoding: 'UTF-8',
      type: 'text/csv;charset=UTF-8'
    });
    var blobURL = URL.createObjectURL(blob);
    var anchor = document.getElementById('export-anchor');
    anchor.href = blobURL;
    anchor.download = 'cybersec-analysis';
  });
  document.querySelector('main').style.display = 'block'; // Get the elements needed from the 3 sections

  var generalSection = document.getElementById('general-section');
  var comparissonSection = document.getElementById('comparisson-section');
  var specificSection = document.getElementById('specific-section');
  var generalChartContainer = generalSection.querySelector('.chart-container');
  var comparissonChartContainer = comparissonSection.querySelector('.chart-container');
  var specificChartContainer = specificSection.querySelector('.chart-container'); // Reset the 3 sections and hide them

  generalChartContainer.innerHTML = "";
  comparissonChartContainer.innerHTML = "";
  specificChartContainer.innerHTML = "";
  generalSection.style.display = 'none';
  comparissonSection.style.display = 'none';
  specificSection.style.display = 'none'; // If there is one file then display only the specific section

  if (response.length === 1) {
    specificSection.style.display = 'flex'; // Append specific chart

    var specificChart = new _TacsChart.default();
    specificChartContainer.append(specificChart); // Draw the charts

    specificChart.drawChart({
      data: response,
      type: 'BarChart'
    });
  } // If there is more than one file on the same group create the general and specific section


  if (groups.length === 1 && response.length > 1) {
    generalSection.style.display = 'flex';
    specificSection.style.display = 'flex'; // Append general and specific chart

    var generalChart = new _TacsChart.default();
    generalChartContainer.append(generalChart);

    var _specificChart = new _TacsChart.default();

    specificChartContainer.append(_specificChart); // Draw the charts

    generalChart.drawChart({
      data: response,
      type: 'PieChart'
    });

    _specificChart.drawChart({
      data: response,
      type: 'BarChart'
    });
  } // If there is multiple groups then create the general, comparisson, specific section


  if (groups.length > 1) {
    generalSection.style.display = 'flex';
    comparissonSection.style.display = 'flex';
    specificSection.style.display = 'flex'; // Append general, comparisson and specific chart

    var _generalChart = new _TacsChart.default();

    generalChartContainer.append(_generalChart);
    var comparissonChart = new _TacsChart.default();
    comparissonChartContainer.append(comparissonChart);

    var _specificChart2 = new _TacsChart.default();

    specificChartContainer.append(_specificChart2); // Draw the charts

    _generalChart.drawChart({
      data: response,
      type: 'PieChart'
    });

    comparissonChart.drawChart({
      data: response,
      type: 'ColumnChart',
      groups: groups
    });

    _specificChart2.drawChart({
      data: response,
      type: 'BarChart'
    });
  }
};
},{"dataframe-js":"node_modules/dataframe-js/lib/index.js","./TacsChart":"js/TacsChart.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

var _particles = _interopRequireDefault(require("./particles.js"));

var _BrowseInput = _interopRequireDefault(require("./BrowseInput.js"));

var _TacsChart = _interopRequireDefault(require("./TacsChart.js"));

require("./controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// document.querySelector('main').hidden = true;
window.onload = _particles.default; // Max browse-input elements we can have

var limit = 4; // Add event listener for adding browse-input elements

var browseBtn = document.getElementById('add-btn-browse');
browseBtn.addEventListener('click', function () {
  if (_BrowseInput.default.count !== limit) {
    var newBrowse = new _BrowseInput.default();
    newBrowse.setAttribute('showminus', 'true');
    browseBtn.before(newBrowse);
  }
}); // Add event listener for general container

var generalBtn = document.getElementById('add-btn-general');
generalBtn.addEventListener('click', function () {
  var oldChart = document.querySelector('#general-section tacs-chart');
  var newChart = oldChart.cloneNode(true);
  newChart.setAttribute('showminus', 'true');
  document.querySelector('#general-section .chart-container').append(newChart);
  newChart.drawChart({
    'type': oldChart.type,
    'level': oldChart.level,
    'data': oldChart.data
  });
}); // Add event listener for comparisson container

var comparissonBtn = document.getElementById('add-btn-comparisson');
comparissonBtn.addEventListener('click', function () {
  var oldChart = document.querySelector('#comparisson-section tacs-chart');
  var newChart = oldChart.cloneNode(true);
  newChart.setAttribute('showminus', 'true');
  document.querySelector('#comparisson-section .chart-container').append(newChart);
  newChart.drawChart({
    'type': oldChart.type,
    'level': oldChart.level,
    'data': oldChart.data,
    'groups': oldChart.groups
  });
});
},{"./particles.js":"js/particles.js","./BrowseInput.js":"js/BrowseInput.js","./TacsChart.js":"js/TacsChart.js","./controller.js":"js/controller.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51800" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map