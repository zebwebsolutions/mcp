"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/developer/[did]",{

/***/ "./pages/developer/[did].js":
/*!**********************************!*\
  !*** ./pages/developer/[did].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header */ \"./components/header/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_logosTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/logosTags */ \"./components/logosTags.js\");\n/* harmony import */ var _components_developers_developerHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/developers/developerHeader */ \"./components/developers/developerHeader.js\");\n/* harmony import */ var _components_singlelisting_listingBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/singlelisting/listingBody */ \"./components/singlelisting/listingBody.js\");\n/* harmony import */ var _components_singlelisting_features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/singlelisting/features */ \"./components/singlelisting/features.js\");\n/* harmony import */ var _components_developers_developerBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/developers/developerBody */ \"./components/developers/developerBody.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst DeveloperPage = (param)=>{\n    let { developer  } = param;\n    _s();\n    const [featuredProperty, setFeaturedProperty] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        async function fetchProperties() {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].get(\"http://localhost:3000/properties/by-developer/\" + developer._id).then((response)=>setFeaturedProperty(response.data));\n        }\n        fetchProperties();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Single Listing Page - Marea Capital Properties\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rahmanzeb/Desktop/marea-frontend/pages/developer/[did].js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rahmanzeb/Desktop/marea-frontend/pages/developer/[did].js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rahmanzeb/Desktop/marea-frontend/pages/developer/[did].js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rahmanzeb/Desktop/marea-frontend/pages/developer/[did].js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rahmanzeb/Desktop/marea-frontend/pages/developer/[did].js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/rahmanzeb/Desktop/marea-frontend/pages/developer/[did].js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_developers_developerHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        name: developer.developerName,\n                        price: featuredProperty\n                    }, void 0, false, {\n                        fileName: \"/Users/rahmanzeb/Desktop/marea-frontend/pages/developer/[did].js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_developers_developerBody__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        developer: developer\n                    }, void 0, false, {\n                        fileName: \"/Users/rahmanzeb/Desktop/marea-frontend/pages/developer/[did].js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rahmanzeb/Desktop/marea-frontend/pages/developer/[did].js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/rahmanzeb/Desktop/marea-frontend/pages/developer/[did].js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DeveloperPage, \"CMiioXLCKmdokJR5S/BsXGWJCMg=\");\n_c = DeveloperPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeveloperPage);\nvar _c;\n$RefreshReg$(_c, \"DeveloperPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXZlbG9wZXIvW2RpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFFcUI7QUFDRTtBQUNQO0FBQ007QUFDbUI7QUFDRDtBQUNWO0FBQ087QUFDeEI7QUFDaEI7QUFtQ3pCLE1BQU1ZLGdCQUFnQixTQUFpQjtRQUFoQixFQUFDQyxVQUFTLEVBQUM7O0lBQzlCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR04sK0NBQVFBLENBQUMsSUFBSTtJQUM3REMsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLGVBQWVNLGtCQUFrQjtZQUM3QixNQUFNQyxNQUFNLE1BQU1OLGtEQUFTLENBQUMsbURBQW1ERSxVQUFVTSxHQUFHLEVBQzNGQyxJQUFJLENBQUNDLENBQUFBLFdBQVlOLG9CQUFvQk0sU0FBU0MsSUFBSTtRQUN2RDtRQUNBTjtJQUNKLEdBQUcsRUFBRTtJQUdMLHFCQUNROzswQkFDQSw4REFBQ2hCLGtEQUFJQTs7a0NBQ0QsOERBQUN1QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDQztnQkFBS0MsV0FBVzlCLHNFQUFXOztrQ0FDeEIsOERBQUNDLGlFQUFNQTs7Ozs7a0NBQ1AsOERBQUNHLDhFQUFlQTt3QkFDWm9CLE1BQU1aLFVBQVVtQixhQUFhO3dCQUM3QkMsT0FBT25COzs7Ozs7a0NBRVgsOERBQUNOLDRFQUFhQTt3QkFBQ0ssV0FBV0E7Ozs7Ozs7Ozs7OzswQkFJOUIsOERBQUNWLDBEQUFNQTs7Ozs7OztBQUduQjtHQWhDTVM7S0FBQUE7O0FBa0NOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RldmVsb3Blci9bZGlkXS5qcz8wYzYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnQG5leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTG9nb3NUYWdzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbG9nb3NUYWdzJ1xuaW1wb3J0IERldmVsb3BlckhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvZGV2ZWxvcGVycy9kZXZlbG9wZXJIZWFkZXInXG5pbXBvcnQgTGlzdGluZ0JvZHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaW5nbGVsaXN0aW5nL2xpc3RpbmdCb2R5J1xuaW1wb3J0IEZlYXR1cmVzIGZyb20gJ0AvY29tcG9uZW50cy9zaW5nbGVsaXN0aW5nL2ZlYXR1cmVzJ1xuaW1wb3J0IERldmVsb3BlckJvZHkgZnJvbSAnQC9jb21wb25lbnRzL2RldmVsb3BlcnMvZGV2ZWxvcGVyQm9keSdcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIGNvbnN0IFVSTCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZGV2ZWxvcGVycy9nZXQtYWxsYFxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFVSTClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgoZGV2ZWxvcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBkaWQ6IGAke2RldmVsb3Blci5faWR9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBwYXRocywgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcblxuICAgIGNvbnN0IFVSTCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZGV2ZWxvcGVycy9nZXQtZGV2ZWxvcGVyLyR7cGFyYW1zLmRpZH1gXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goVVJMKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGV2ZWxvcGVyOiBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY29uc3QgRGV2ZWxvcGVyUGFnZSA9ICh7ZGV2ZWxvcGVyfSkgPT4ge1xuICAgIGNvbnN0IFtmZWF0dXJlZFByb3BlcnR5LCBzZXRGZWF0dXJlZFByb3BlcnR5XSA9IHVzZVN0YXRlKG51bGwpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9wZXJ0aWVzKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvcGVydGllcy9ieS1kZXZlbG9wZXIvJyArIGRldmVsb3Blci5faWQpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBzZXRGZWF0dXJlZFByb3BlcnR5KHJlc3BvbnNlLmRhdGEpKVxuICAgICAgICB9XG4gICAgICAgIGZldGNoUHJvcGVydGllcygpXG4gICAgfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlNpbmdsZSBMaXN0aW5nIFBhZ2UgLSBNYXJlYSBDYXBpdGFsIFByb3BlcnRpZXM8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8RGV2ZWxvcGVySGVhZGVyIFxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtkZXZlbG9wZXIuZGV2ZWxvcGVyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2ZlYXR1cmVkUHJvcGVydHl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGV2ZWxvcGVyQm9keSBkZXZlbG9wZXI9e2RldmVsb3Blcn0gLz5cblxuXG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXZlbG9wZXJQYWdlIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJIZWFkZXIiLCJGb290ZXIiLCJMb2dvc1RhZ3MiLCJEZXZlbG9wZXJIZWFkZXIiLCJMaXN0aW5nQm9keSIsIkZlYXR1cmVzIiwiRGV2ZWxvcGVyQm9keSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJEZXZlbG9wZXJQYWdlIiwiZGV2ZWxvcGVyIiwiZmVhdHVyZWRQcm9wZXJ0eSIsInNldEZlYXR1cmVkUHJvcGVydHkiLCJmZXRjaFByb3BlcnRpZXMiLCJyZXMiLCJnZXQiLCJfaWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkZXZlbG9wZXJOYW1lIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/developer/[did].js\n"));

/***/ })

});