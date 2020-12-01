webpackHotUpdate_N_E("pages/cv",{

/***/ "./components/cv/Work.js":
/*!*******************************!*\
  !*** ./components/cv/Work.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _work_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work.module.css */ \"./components/cv/work.module.css\");\n/* harmony import */ var _work_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_work_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/giwan/Projects/bruna-profile/components/cv/Work.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar getDate = function getDate(date) {\n  var event = new Date(date);\n  if (!event) return date;\n  return event.toLocaleDateString(\"en-UK\", {\n    year: \"numeric\",\n    month: \"short\"\n  });\n};\n\nvar Work = function Work(_ref) {\n  var work = _ref.work;\n  return __jsx(\"section\", {\n    className: _work_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.work,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, \"Work experience\"), work.map(function (workItem) {\n    return __jsx(\"div\", {\n      className: _work_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.workItem,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      className: _work_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.role,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 21\n      }\n    }, __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 25\n      }\n    }, workItem.position), __jsx(\"label\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 25\n      }\n    }, getDate(workItem.startDate), \" -\", \" \", getDate(workItem.endDate))), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 21\n      }\n    }, workItem.company), __jsx(\"ul\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 21\n      }\n    }, workItem.summary.map(function (item) {\n      return __jsx(\"li\", {\n        key: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 29\n        }\n      }, item);\n    })));\n  }));\n};\n\n_c = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\n\nvar _c;\n\n$RefreshReg$(_c, \"Work\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jdi9Xb3JrLmpzP2ZiNzYiXSwibmFtZXMiOlsiZ2V0RGF0ZSIsImRhdGUiLCJldmVudCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJXb3JrIiwid29yayIsInN0eWxlcyIsIm1hcCIsIndvcmtJdGVtIiwicm9sZSIsInBvc2l0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImNvbXBhbnkiLCJzdW1tYXJ5IiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBVTtBQUN0QixNQUFNQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixDQUFTRixJQUFULENBQWQ7QUFDQSxNQUFJLENBQUNDLEtBQUwsRUFBWSxPQUFPRCxJQUFQO0FBQ1osU0FBT0MsS0FBSyxDQUFDRSxrQkFBTixDQUF5QixPQUF6QixFQUFrQztBQUNyQ0MsUUFBSSxFQUFFLFNBRCtCO0FBRXJDQyxTQUFLLEVBQUU7QUFGOEIsR0FBbEMsQ0FBUDtBQUlILENBUEQ7O0FBU0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN2QixTQUNJO0FBQVMsYUFBUyxFQUFFQyx1REFBTSxDQUFDRCxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixFQUVLQSxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxRQUFEO0FBQUEsV0FDTjtBQUFLLGVBQVMsRUFBRUYsdURBQU0sQ0FBQ0UsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFFRix1REFBTSxDQUFDRyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRCxRQUFRLENBQUNFLFFBQWQsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS2IsT0FBTyxDQUFDVyxRQUFRLENBQUNHLFNBQVYsQ0FEWixRQUNvQyxHQURwQyxFQUVLZCxPQUFPLENBQUNXLFFBQVEsQ0FBQ0ksT0FBVixDQUZaLENBRkosQ0FESixFQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUosUUFBUSxDQUFDSyxPQUFiLENBUkosRUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tMLFFBQVEsQ0FBQ00sT0FBVCxDQUFpQlAsR0FBakIsQ0FBcUIsVUFBQ1EsSUFBRDtBQUFBLGFBQ2xCO0FBQUksV0FBRyxFQUFFQSxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBZ0JBLElBQWhCLENBRGtCO0FBQUEsS0FBckIsQ0FETCxDQVRKLENBRE07QUFBQSxHQUFULENBRkwsQ0FESjtBQXNCSCxDQXZCRDs7S0FBTVgsSTtBQXlCU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2N2L1dvcmsuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3dvcmsubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBnZXREYXRlID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGlmICghZXZlbnQpIHJldHVybiBkYXRlO1xuICAgIHJldHVybiBldmVudC50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VS1wiLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgIH0pO1xufTtcblxuY29uc3QgV29yayA9ICh7IHdvcmsgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLndvcmt9PlxuICAgICAgICAgICAgPGg0PldvcmsgZXhwZXJpZW5jZTwvaDQ+XG4gICAgICAgICAgICB7d29yay5tYXAoKHdvcmtJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53b3JrSXRlbX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9sZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3dvcmtJdGVtLnBvc2l0aW9ufTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldERhdGUod29ya0l0ZW0uc3RhcnREYXRlKX0gLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RGF0ZSh3b3JrSXRlbS5lbmREYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57d29ya0l0ZW0uY29tcGFueX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrSXRlbS5zdW1tYXJ5Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PntpdGVtfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdvcms7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cv/Work.js\n");

/***/ })

})