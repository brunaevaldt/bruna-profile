webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/ProjectItem.js":
/*!********************************************!*\
  !*** ./components/Projects/ProjectItem.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _projectItem_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectItem.module.css */ \"./components/Projects/projectItem.module.css\");\n/* harmony import */ var _projectItem_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projectItem_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/giwan/Projects/bruna-profile/components/Projects/ProjectItem.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar ProjectItem = function ProjectItem(_ref) {\n  var project = _ref.project;\n  return __jsx(\"div\", {\n    className: _projectItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.projectItem,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    className: _projectItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.projectItemTitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, project.role), __jsx(\"p\", {\n    className: _projectItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.projectItemDescription,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, project.description), __jsx(ProjectItemCompany, {\n    company: project.company,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }));\n};\n\n_c = ProjectItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectItem);\n\nvar ProjectItemCompany = function ProjectItemCompany(_ref2) {\n  var company = _ref2.company;\n  return __jsx(\"div\", {\n    className: _projectItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.projectItemCompanyContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _projectItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.projectItemCompany,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: company.logo,\n    alt: company.name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, company.description)));\n};\n\n_c2 = ProjectItemCompany;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProjectItem\");\n$RefreshReg$(_c2, \"ProjectItemCompany\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0SXRlbS5qcz9mNDA3Il0sIm5hbWVzIjpbIlByb2plY3RJdGVtIiwicHJvamVjdCIsInN0eWxlcyIsInByb2plY3RJdGVtIiwicHJvamVjdEl0ZW1UaXRsZSIsInJvbGUiLCJwcm9qZWN0SXRlbURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJjb21wYW55IiwiUHJvamVjdEl0ZW1Db21wYW55IiwicHJvamVjdEl0ZW1Db21wYW55Q29udGFpbmVyIiwicHJvamVjdEl0ZW1Db21wYW55IiwibG9nbyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQ2hCO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUVELDhEQUFNLENBQUNFLGdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDSCxPQUFPLENBQUNJLElBQWpELENBREosRUFFSTtBQUFHLGFBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksc0JBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOENMLE9BQU8sQ0FBQ00sV0FBdEQsQ0FGSixFQUdJLE1BQUMsa0JBQUQ7QUFBb0IsV0FBTyxFQUFFTixPQUFPLENBQUNPLE9BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURnQjtBQUFBLENBQXBCOztLQUFNUixXO0FBUVNBLDBFQUFmOztBQUVBLElBQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFHRCxPQUFILFNBQUdBLE9BQUg7QUFBQSxTQUN2QjtBQUFLLGFBQVMsRUFBRU4sOERBQU0sQ0FBQ1EsMkJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRVIsOERBQU0sQ0FBQ1Msa0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRUgsT0FBTyxDQUFDSSxJQUFsQjtBQUF3QixPQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssSUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJTCxPQUFPLENBQUNELFdBQVosQ0FGSixDQURKLENBRHVCO0FBQUEsQ0FBM0I7O01BQU1FLGtCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0SXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvamVjdEl0ZW0ubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBQcm9qZWN0SXRlbSA9ICh7IHByb2plY3QgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdEl0ZW19PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdEl0ZW1UaXRsZX0+e3Byb2plY3Qucm9sZX08L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0SXRlbURlc2NyaXB0aW9ufT57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxQcm9qZWN0SXRlbUNvbXBhbnkgY29tcGFueT17cHJvamVjdC5jb21wYW55fSAvPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdEl0ZW07XG5cbmNvbnN0IFByb2plY3RJdGVtQ29tcGFueSA9ICh7IGNvbXBhbnkgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdEl0ZW1Db21wYW55Q29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0SXRlbUNvbXBhbnl9PlxuICAgICAgICAgICAgPGltZyBzcmM9e2NvbXBhbnkubG9nb30gYWx0PXtjb21wYW55Lm5hbWV9IC8+XG4gICAgICAgICAgICA8cD57Y29tcGFueS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects/ProjectItem.js\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Projects/projectItem.module.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/Projects/projectItem.module.css ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".projectItem_projectItem__3dT_W {\\n    display: grid;\\n    grid-template-columns: 2fr 1fr;\\n    grid-template-rows: 1fr 2fr;\\n    color: var(--color-text-light);\\n    margin-bottom: calc(var(--unit) * 4);\\n}\\n\\n.projectItem_projectItem__3dT_W h2 {\\n    margin: 0;\\n}\\n\\n.projectItem_projectItemTitle__2Ptoc {\\n    margin: 0;\\n    color: var(--color-primary-dark);\\n    line-height: 1em;\\n    font-weight: normal;\\n}\\n\\n.projectItem_projectItemDescription__1oe0Y {\\n    font-size: var(--font-size-default);\\n    grid-row-start: 2;\\n    margin: var(--unit) 0;\\n    font-family: \\\"Georgia\\\", \\\"serif\\\";\\n}\\n\\n.projectItem_projectItemCompanyContainer__cNxGa {\\n    grid-row: 1 / -1;\\n    margin-left: calc(var(--unit) * 2);\\n    place-self: end;\\n}\\n\\n.projectItem_projectItemCompany__3uwEj {\\n    background-color: var(--color-background-clear);\\n    padding: calc(var(--unit) * 2) var(--unit);\\n    border-radius: var(--unit);\\n    text-align: center;\\n}\\n\\n.projectItem_projectItemCompany__3uwEj p {\\n    font-size: 0.5em;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/Projects/projectItem.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,8BAA8B;IAC9B,oCAAoC;AACxC;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,SAAS;IACT,gCAAgC;IAChC,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;IACnC,iBAAiB;IACjB,qBAAqB;IACrB,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,+CAA+C;IAC/C,0CAA0C;IAC1C,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB\",\"sourcesContent\":[\".projectItem {\\n    display: grid;\\n    grid-template-columns: 2fr 1fr;\\n    grid-template-rows: 1fr 2fr;\\n    color: var(--color-text-light);\\n    margin-bottom: calc(var(--unit) * 4);\\n}\\n\\n.projectItem h2 {\\n    margin: 0;\\n}\\n\\n.projectItemTitle {\\n    margin: 0;\\n    color: var(--color-primary-dark);\\n    line-height: 1em;\\n    font-weight: normal;\\n}\\n\\n.projectItemDescription {\\n    font-size: var(--font-size-default);\\n    grid-row-start: 2;\\n    margin: var(--unit) 0;\\n    font-family: \\\"Georgia\\\", \\\"serif\\\";\\n}\\n\\n.projectItemCompanyContainer {\\n    grid-row: 1 / -1;\\n    margin-left: calc(var(--unit) * 2);\\n    place-self: end;\\n}\\n\\n.projectItemCompany {\\n    background-color: var(--color-background-clear);\\n    padding: calc(var(--unit) * 2) var(--unit);\\n    border-radius: var(--unit);\\n    text-align: center;\\n}\\n\\n.projectItemCompany p {\\n    font-size: 0.5em;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"projectItem\": \"projectItem_projectItem__3dT_W\",\n\t\"projectItemTitle\": \"projectItem_projectItemTitle__2Ptoc\",\n\t\"projectItemDescription\": \"projectItem_projectItemDescription__1oe0Y\",\n\t\"projectItemCompanyContainer\": \"projectItem_projectItemCompanyContainer__cNxGa\",\n\t\"projectItemCompany\": \"projectItem_projectItemCompany__3uwEj\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9wcm9qZWN0SXRlbS5tb2R1bGUuY3NzP2Y2MGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLDhCQUE4QixRQUFTLG9DQUFvQyxvQkFBb0IscUNBQXFDLGtDQUFrQyxxQ0FBcUMsMkNBQTJDLEdBQUcsd0NBQXdDLGdCQUFnQixHQUFHLDBDQUEwQyxnQkFBZ0IsdUNBQXVDLHVCQUF1QiwwQkFBMEIsR0FBRyxnREFBZ0QsMENBQTBDLHdCQUF3Qiw0QkFBNEIsMENBQTBDLEdBQUcscURBQXFELHVCQUF1Qix5Q0FBeUMsc0JBQXNCLEdBQUcsNENBQTRDLHNEQUFzRCxpREFBaUQsaUNBQWlDLHlCQUF5QixHQUFHLDhDQUE4Qyx1QkFBdUIsR0FBRyxTQUFTLDJHQUEyRyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLHdDQUF3QyxvQkFBb0IscUNBQXFDLGtDQUFrQyxxQ0FBcUMsMkNBQTJDLEdBQUcscUJBQXFCLGdCQUFnQixHQUFHLHVCQUF1QixnQkFBZ0IsdUNBQXVDLHVCQUF1QiwwQkFBMEIsR0FBRyw2QkFBNkIsMENBQTBDLHdCQUF3Qiw0QkFBNEIsMENBQTBDLEdBQUcsa0NBQWtDLHVCQUF1Qix5Q0FBeUMsc0JBQXNCLEdBQUcseUJBQXlCLHNEQUFzRCxpREFBaUQsaUNBQWlDLHlCQUF5QixHQUFHLDJCQUEyQix1QkFBdUIsR0FBRyxxQkFBcUI7QUFDNTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL2NvbXBvbmVudHMvUHJvamVjdHMvcHJvamVjdEl0ZW0ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9qZWN0SXRlbV9wcm9qZWN0SXRlbV9fM2RUX1cge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbGlnaHQpO1xcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXVuaXQpICogNCk7XFxufVxcblxcbi5wcm9qZWN0SXRlbV9wcm9qZWN0SXRlbV9fM2RUX1cgaDIge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0SXRlbV9wcm9qZWN0SXRlbVRpdGxlX18yUHRvYyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktZGFyayk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5wcm9qZWN0SXRlbV9wcm9qZWN0SXRlbURlc2NyaXB0aW9uX18xb2UwWSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWRlZmF1bHQpO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgbWFyZ2luOiB2YXIoLS11bml0KSAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIkdlb3JnaWFcXFwiLCBcXFwic2VyaWZcXFwiO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW1fcHJvamVjdEl0ZW1Db21wYW55Q29udGFpbmVyX19jTnhHYSB7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXVuaXQpICogMik7XFxuICAgIHBsYWNlLXNlbGY6IGVuZDtcXG59XFxuXFxuLnByb2plY3RJdGVtX3Byb2plY3RJdGVtQ29tcGFueV9fM3V3RWoge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kLWNsZWFyKTtcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS11bml0KSAqIDIpIHZhcigtLXVuaXQpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS11bml0KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW1fcHJvamVjdEl0ZW1Db21wYW55X18zdXdFaiBwIHtcXG4gICAgZm9udC1zaXplOiAwLjVlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvUHJvamVjdHMvcHJvamVjdEl0ZW0ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0MsMENBQTBDO0lBQzFDLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2plY3RJdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWxpZ2h0KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS11bml0KSAqIDQpO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0gaDIge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0SXRlbVRpdGxlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1kYXJrKTtcXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnByb2plY3RJdGVtRGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIG1hcmdpbjogdmFyKC0tdW5pdCkgMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHZW9yZ2lhXFxcIiwgXFxcInNlcmlmXFxcIjtcXG59XFxuXFxuLnByb2plY3RJdGVtQ29tcGFueUNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXVuaXQpICogMik7XFxuICAgIHBsYWNlLXNlbGY6IGVuZDtcXG59XFxuXFxuLnByb2plY3RJdGVtQ29tcGFueSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQtY2xlYXIpO1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXVuaXQpICogMikgdmFyKC0tdW5pdCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXVuaXQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0SXRlbUNvbXBhbnkgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC41ZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInByb2plY3RJdGVtXCI6IFwicHJvamVjdEl0ZW1fcHJvamVjdEl0ZW1fXzNkVF9XXCIsXG5cdFwicHJvamVjdEl0ZW1UaXRsZVwiOiBcInByb2plY3RJdGVtX3Byb2plY3RJdGVtVGl0bGVfXzJQdG9jXCIsXG5cdFwicHJvamVjdEl0ZW1EZXNjcmlwdGlvblwiOiBcInByb2plY3RJdGVtX3Byb2plY3RJdGVtRGVzY3JpcHRpb25fXzFvZTBZXCIsXG5cdFwicHJvamVjdEl0ZW1Db21wYW55Q29udGFpbmVyXCI6IFwicHJvamVjdEl0ZW1fcHJvamVjdEl0ZW1Db21wYW55Q29udGFpbmVyX19jTnhHYVwiLFxuXHRcInByb2plY3RJdGVtQ29tcGFueVwiOiBcInByb2plY3RJdGVtX3Byb2plY3RJdGVtQ29tcGFueV9fM3V3RWpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Projects/projectItem.module.css\n");

/***/ })

})