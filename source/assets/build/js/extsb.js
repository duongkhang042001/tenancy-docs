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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@splitbee/web/dist/web.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/@splitbee/web/dist/web.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isBrowser = typeof window !== 'undefined';\nvar SCRIPT_URL = 'https://cdn.splitbee.io/sb.js';\nvar queue = [];\n\nvar handleLoad = function handleLoad() {\n  if (isBrowser && !window.splitbee) return;\n  splitbee.track = window.splitbee.track;\n  splitbee.user = window.splitbee.user;\n  splitbee.enableCookie = window.splitbee.enableCookie;\n  splitbee.reset = window.splitbee.reset;\n  queue.forEach(function (ev) {\n    if (ev.type === 'track') window.splitbee.track.apply(null, ev.payload);else if (ev.type === 'user') window.splitbee.user.set.apply(null, ev.payload);else if (ev.type === 'enableCookie') window.splitbee.enableCookie.apply(null, ev.payload);else if (ev.type === 'reset') window.splitbee.reset();\n  });\n  queue = [];\n};\n\nvar createAddToQueue = function createAddToQueue(type) {\n  return function () {\n    try {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      queue.push({\n        type: type,\n        payload: args\n      });\n\n      if (isBrowser && window.splitbee) {\n        handleLoad();\n      }\n\n      return Promise.resolve();\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n};\n\nvar initSplitbee = function initSplitbee(options) {\n  if (!isBrowser || window.splitbee) return;\n  var document = window.document;\n  var scriptUrl = options !== null && options !== void 0 && options.scriptUrl ? options.scriptUrl : SCRIPT_URL;\n  var injectedScript = document.querySelector(\"script[src='\" + scriptUrl + \"']\");\n\n  if (injectedScript) {\n    injectedScript.onload = handleLoad;\n    return;\n  }\n\n  var script = document.createElement('script');\n  script.src = scriptUrl;\n  script.async = true;\n\n  if (options) {\n    if (options.apiUrl) script.dataset.api = options.apiUrl;\n    if (options.token) script.dataset.token = options.token;\n    if (options.disableCookie) script.dataset.noCookie = '1';\n  }\n\n  script.onload = handleLoad;\n  document.head.appendChild(script);\n};\n\nvar splitbee = {\n  track: /*#__PURE__*/createAddToQueue('track'),\n  user: {\n    set: /*#__PURE__*/createAddToQueue('user')\n  },\n  init: initSplitbee,\n  enableCookie: /*#__PURE__*/createAddToQueue('enableCookie'),\n  reset: /*#__PURE__*/createAddToQueue('reset')\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (splitbee);\n//# sourceMappingURL=web.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNwbGl0YmVlL3dlYi9kaXN0L3dlYi5lc20uanM/NzgyOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSw4RUFBOEUsMEZBQTBGO0FBQ25QLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxhQUFhO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsdUVBQVEsRUFBQztBQUN4QiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9Ac3BsaXRiZWUvd2ViL2Rpc3Qvd2ViLmVzbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbnZhciBTQ1JJUFRfVVJMID0gJ2h0dHBzOi8vY2RuLnNwbGl0YmVlLmlvL3NiLmpzJztcbnZhciBxdWV1ZSA9IFtdO1xuXG52YXIgaGFuZGxlTG9hZCA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gIGlmIChpc0Jyb3dzZXIgJiYgIXdpbmRvdy5zcGxpdGJlZSkgcmV0dXJuO1xuICBzcGxpdGJlZS50cmFjayA9IHdpbmRvdy5zcGxpdGJlZS50cmFjaztcbiAgc3BsaXRiZWUudXNlciA9IHdpbmRvdy5zcGxpdGJlZS51c2VyO1xuICBzcGxpdGJlZS5lbmFibGVDb29raWUgPSB3aW5kb3cuc3BsaXRiZWUuZW5hYmxlQ29va2llO1xuICBzcGxpdGJlZS5yZXNldCA9IHdpbmRvdy5zcGxpdGJlZS5yZXNldDtcbiAgcXVldWUuZm9yRWFjaChmdW5jdGlvbiAoZXYpIHtcbiAgICBpZiAoZXYudHlwZSA9PT0gJ3RyYWNrJykgd2luZG93LnNwbGl0YmVlLnRyYWNrLmFwcGx5KG51bGwsIGV2LnBheWxvYWQpO2Vsc2UgaWYgKGV2LnR5cGUgPT09ICd1c2VyJykgd2luZG93LnNwbGl0YmVlLnVzZXIuc2V0LmFwcGx5KG51bGwsIGV2LnBheWxvYWQpO2Vsc2UgaWYgKGV2LnR5cGUgPT09ICdlbmFibGVDb29raWUnKSB3aW5kb3cuc3BsaXRiZWUuZW5hYmxlQ29va2llLmFwcGx5KG51bGwsIGV2LnBheWxvYWQpO2Vsc2UgaWYgKGV2LnR5cGUgPT09ICdyZXNldCcpIHdpbmRvdy5zcGxpdGJlZS5yZXNldCgpO1xuICB9KTtcbiAgcXVldWUgPSBbXTtcbn07XG5cbnZhciBjcmVhdGVBZGRUb1F1ZXVlID0gZnVuY3Rpb24gY3JlYXRlQWRkVG9RdWV1ZSh0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBxdWV1ZS5wdXNoKHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgcGF5bG9hZDogYXJnc1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc0Jyb3dzZXIgJiYgd2luZG93LnNwbGl0YmVlKSB7XG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgaW5pdFNwbGl0YmVlID0gZnVuY3Rpb24gaW5pdFNwbGl0YmVlKG9wdGlvbnMpIHtcbiAgaWYgKCFpc0Jyb3dzZXIgfHwgd2luZG93LnNwbGl0YmVlKSByZXR1cm47XG4gIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgdmFyIHNjcmlwdFVybCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuc2NyaXB0VXJsID8gb3B0aW9ucy5zY3JpcHRVcmwgOiBTQ1JJUFRfVVJMO1xuICB2YXIgaW5qZWN0ZWRTY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2NyaXB0W3NyYz0nXCIgKyBzY3JpcHRVcmwgKyBcIiddXCIpO1xuXG4gIGlmIChpbmplY3RlZFNjcmlwdCkge1xuICAgIGluamVjdGVkU2NyaXB0Lm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gc2NyaXB0VXJsO1xuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuYXBpVXJsKSBzY3JpcHQuZGF0YXNldC5hcGkgPSBvcHRpb25zLmFwaVVybDtcbiAgICBpZiAob3B0aW9ucy50b2tlbikgc2NyaXB0LmRhdGFzZXQudG9rZW4gPSBvcHRpb25zLnRva2VuO1xuICAgIGlmIChvcHRpb25zLmRpc2FibGVDb29raWUpIHNjcmlwdC5kYXRhc2V0Lm5vQ29va2llID0gJzEnO1xuICB9XG5cbiAgc2NyaXB0Lm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07XG5cbnZhciBzcGxpdGJlZSA9IHtcbiAgdHJhY2s6IC8qI19fUFVSRV9fKi9jcmVhdGVBZGRUb1F1ZXVlKCd0cmFjaycpLFxuICB1c2VyOiB7XG4gICAgc2V0OiAvKiNfX1BVUkVfXyovY3JlYXRlQWRkVG9RdWV1ZSgndXNlcicpXG4gIH0sXG4gIGluaXQ6IGluaXRTcGxpdGJlZSxcbiAgZW5hYmxlQ29va2llOiAvKiNfX1BVUkVfXyovY3JlYXRlQWRkVG9RdWV1ZSgnZW5hYmxlQ29va2llJyksXG4gIHJlc2V0OiAvKiNfX1BVUkVfXyovY3JlYXRlQWRkVG9RdWV1ZSgncmVzZXQnKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3BsaXRiZWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWIuZXNtLmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@splitbee/web/dist/web.esm.js\n");

/***/ }),

/***/ "./source/_assets/js/extsb.js":
/*!************************************!*\
  !*** ./source/_assets/js/extsb.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _splitbee_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splitbee/web */ \"./node_modules/@splitbee/web/dist/web.esm.js\");\n\n_splitbee_web__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init({\n  scriptUrl: \"https://tenancyforlaravel.com/bee.js\",\n  apiUrl: \"https://tenancyforlaravel.com/_hive\"\n});\n\nwindow.auth = function (username) {\n  if (!username) return window.location.replace('https://github.com/tenancy-for-laravel/saas-boilerplate');\n  _splitbee_web__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.set({\n    userId: username.substr(1)\n  })[\"finally\"](function () {\n    window.location.replace('https://github.com/tenancy-for-laravel/saas-boilerplate');\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2Fzc2V0cy9qcy9leHRzYi5qcz84ZmJjIl0sIm5hbWVzIjpbInNwbGl0YmVlIiwiaW5pdCIsInNjcmlwdFVybCIsImFwaVVybCIsIndpbmRvdyIsImF1dGgiLCJ1c2VybmFtZSIsImxvY2F0aW9uIiwicmVwbGFjZSIsInVzZXIiLCJzZXQiLCJ1c2VySWQiLCJzdWJzdHIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBQSxxREFBUSxDQUFDQyxJQUFULENBQWM7RUFDVkMsU0FBUyxFQUFFLHNDQUREO0VBRVZDLE1BQU0sRUFBRTtBQUZFLENBQWQ7O0FBS0FDLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjLFVBQVVDLFFBQVYsRUFBb0I7RUFDOUIsSUFBSSxDQUFFQSxRQUFOLEVBQWdCLE9BQU9GLE1BQU0sQ0FBQ0csUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IseURBQXhCLENBQVA7RUFFaEJSLHFEQUFRLENBQUNTLElBQVQsQ0FBY0MsR0FBZCxDQUFrQjtJQUNkQyxNQUFNLEVBQUVMLFFBQVEsQ0FBQ00sTUFBVCxDQUFnQixDQUFoQjtFQURNLENBQWxCLGFBRVcsWUFBTTtJQUNiUixNQUFNLENBQUNHLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLHlEQUF4QjtFQUNILENBSkQ7QUFLSCxDQVJEIiwiZmlsZSI6Ii4vc291cmNlL19hc3NldHMvanMvZXh0c2IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3BsaXRiZWUgZnJvbSAnQHNwbGl0YmVlL3dlYic7XG5cbnNwbGl0YmVlLmluaXQoe1xuICAgIHNjcmlwdFVybDogXCJodHRwczovL3RlbmFuY3lmb3JsYXJhdmVsLmNvbS9iZWUuanNcIixcbiAgICBhcGlVcmw6IFwiaHR0cHM6Ly90ZW5hbmN5Zm9ybGFyYXZlbC5jb20vX2hpdmVcIixcbn0pXG5cbndpbmRvdy5hdXRoID0gZnVuY3Rpb24gKHVzZXJuYW1lKSB7XG4gICAgaWYgKCEgdXNlcm5hbWUpIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnaHR0cHM6Ly9naXRodWIuY29tL3RlbmFuY3ktZm9yLWxhcmF2ZWwvc2Fhcy1ib2lsZXJwbGF0ZScpO1xuXG4gICAgc3BsaXRiZWUudXNlci5zZXQoe1xuICAgICAgICB1c2VySWQ6IHVzZXJuYW1lLnN1YnN0cigxKSxcbiAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2h0dHBzOi8vZ2l0aHViLmNvbS90ZW5hbmN5LWZvci1sYXJhdmVsL3NhYXMtYm9pbGVycGxhdGUnKTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/_assets/js/extsb.js\n");

/***/ }),

/***/ 2:
/*!******************************************!*\
  !*** multi ./source/_assets/js/extsb.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/tenancy-docs/tenancy-docs/source/_assets/js/extsb.js */"./source/_assets/js/extsb.js");


/***/ })

/******/ });