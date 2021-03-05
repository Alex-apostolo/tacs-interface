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
},{}],"js/TacsChart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _googleCharts = require("google-charts");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  function TacsChart(data) {
    var _this;

    _classCallCheck(this, TacsChart);

    _this = _super.call(this);
    _this.data = data;
    return _this;
  }

  _createClass(TacsChart, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      var _this2 = this;

      if (name === 'showminus') {
        if (newValue === 'true') {
          var minusBtn = document.createElement('div');
          minusBtn.classList.add('minus-btn');
          this.append(minusBtn);
          minusBtn.addEventListener('click', function () {
            _this2.remove();
          });
        } else if (newValue === 'false') {
          this.querySelector('.minus-btn').remove();
        }
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this3 = this;

      this.innerHTML = "\n            <style>\n                tacs-chart {\n                    position: relative;\n                }\n\n                tacs-chart .dropdown {\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    z-index: 2;\n                }\n\n                tacs-chart .minus-btn {\n                    position: absolute;\n                    top: 0;\n                    right: 0;\n                }\n\n                tacs-chart .tacs-container {\n                    margin-bottom: 2.5rem;\n                }\n            </style>\n                <div class=\"dropdown\">\n                    <button class=\"dropdown-btn\">Dictionary</button>\n                    <ul>\n                        <li><button>Dictionary</button></li>\n                        <li><button>Category</button></li>\n                        <li><button>Concept</button></li>\n                    </ul>\n                </div>\n            <div class=\"tacs-container\"></div>\n        ";

      if (this.hasAttribute('showminus')) {
        var showMinus = this.getAttribute('showminus');

        if (showMinus === "true") {
          var minusBtn = document.createElement('div');
          minusBtn.classList.add('minus-btn');
          this.append(minusBtn);
          minusBtn.addEventListener('click', function () {
            _this3.remove();
          });
        }
      }

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
          level = _ref$level === void 0 ? 'Dict' : _ref$level,
          options = _ref.options;

      // Set a callback to run when the Google Visualization API is loaded.
      _googleCharts.GoogleCharts.load(this.drawChartCallback.bind(this, type, data, level, options));
    } // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.

  }, {
    key: "drawChartCallback",
    value: function drawChartCallback(type, data, level, options) {
      if (options === undefined) {
        // Set chart options
        options = {
          width: 400,
          height: 300,
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
            var googleData = new _googleCharts.GoogleCharts.api.visualization.DataTable();
            googleData.addColumn('string', 'terms');
            googleData.addColumn('number', 'frequency'); // count consists of the tacs analysis

            var count = [];
            data.forEach(function (element) {
              return count = count.concat(element[1]);
            }); // TODO: Change based on level

            var res = Object.values(count.reduce(function (acc, cur) {
              return acc[cur.dict] ? acc[cur.dict].freq += cur.freq : acc[cur.dict] = _objectSpread({}, cur), acc;
            }, {})).map(function (item) {
              return [item.dict, item.freq];
            });
            googleData.addRows(res);
            data = googleData;
            break;

          case 'CoulmnChart':
            break;

          case 'BarChart':
            break;
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
      if (type === 'ColumnChart') chart = new _googleCharts.GoogleCharts.api.visualization.ColumnChart(this.querySelector('.tacs-container'));else if (type === 'BarChart') chart = new _googleCharts.GoogleCharts.api.visualization.BarChart(this.querySelector('.tacs-container'));else chart = new _googleCharts.GoogleCharts.api.visualization.PieChart(this.querySelector('.tacs-container'));
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
},{"google-charts":"node_modules/google-charts/dist/googleCharts.esm.js"}],"js/controller.js":[function(require,module,exports) {
"use strict";

var _TacsChart = _interopRequireDefault(require("./TacsChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backend = 'http://127.0.0.1:5000'; // Add event listener for submitting the files

var form = document.getElementById('form');
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
  });
  fetch(backend + '/tacs', {
    method: 'POST',
    body: formData
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return responseHandler(groups, response);
  });
});

var responseHandler = function responseHandler(groups, response) {
  // Display results page and scroll into view
  document.querySelector('main').style.display = 'block';
  document.getElementById('pagebrake').scrollIntoView({
    behavior: 'smooth'
  }); // Get the elements needed from the 3 sections

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

    var specificChart = new _TacsChart.default(response);
    specificChartContainer.append(specificChart); // Draw the charts

    specificChart.drawChart({
      data: specificChart.data,
      type: 'BarChart'
    });
  } // If there is more than one file on the same group create the general and specific section


  if (groups.length === 1 && response.length > 1) {
    generalSection.style.display = 'flex';
    specificSection.style.display = 'flex'; // Append general and specific chart

    var generalChart = new _TacsChart.default(response);
    generalChartContainer.append(generalChart);

    var _specificChart = new _TacsChart.default(response);

    specificChartContainer.append(_specificChart); // Draw the charts

    generalChart.drawChart({
      data: generalChart.data,
      type: 'PieChart'
    });

    _specificChart.drawChart({
      data: _specificChart.data,
      type: 'BarChart'
    });
  } // If there is multiple groups then create the general, comparisson, specific section


  if (groups.length > 1) {
    generalSection.style.display = 'flex';
    comparissonSection.style.display = 'flex';
    specificSection.style.display = 'flex'; // Append general, comparisson and specific chart

    var _generalChart = new _TacsChart.default(response);

    generalChartContainer.append(_generalChart);
    var comparissonChart = new _TacsChart.default(response);
    comparissonChartContainer.append(comparissonChart);

    var _specificChart2 = new _TacsChart.default(response);

    specificChartContainer.append(_specificChart2); // Draw the charts

    _generalChart.drawChart({
      data: _generalChart.data,
      type: 'PieChart'
    });

    comparissonChart.drawChart({
      data: comparissonChart.data,
      type: 'ColumnChart'
    });

    _specificChart2.drawChart({
      data: _specificChart2.data,
      type: 'BarChart'
    });
  }
};
},{"./TacsChart":"js/TacsChart.js"}],"js/index.js":[function(require,module,exports) {
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
  var newChart = new _TacsChart.default();
  newChart.setAttribute('showminus', 'true');
  document.querySelector('#general-section .chart-container').append(newChart);
}); // Add event listener for comparisson container

var comparissonBtn = document.getElementById('add-btn-comparisson');
comparissonBtn.addEventListener('click', function () {
  var newChart = new _TacsChart.default();
  newChart.setAttribute('showminus', 'true');
  newChart.setAttribute('type', 'ColumnChart');
  document.querySelector('#comparisson-section .chart-container').append(newChart);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57619" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map