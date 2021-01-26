(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/productDetails/Description.module.css":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/productDetails/Description.module.css ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".Description_box__2Nfn7 {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  padding: 40px 30px !important;\n}\n\n.Description_img__35CxC {\n  width: 220px;\n  height: 220px;\n  object-fit: contain;\n  margin-right: 248px;\n}\n\n.Description_con__1W8jH {\n  width: 878px;\n  color: #333333;\n}\n\n.Description_name__1Mg3r {\n  font-size: 30px;\n  color: #666;\n}\n\n.Description_model__3iPCf {\n  font-size: 28px;\n}\n\n.Description_title__3tXOj {\n  font-size: 24px;\n}\n\n.Description_desc__1_9bj {\n  font-size: 16px;\n}\n\n.Description_content__2zwbX {\n  width: 100%;\n  height: 100%;\n  max-width: 1440px;\n  min-width: 998px;\n  padding-left: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n}", "",{"version":3,"sources":["D:/git/abene-website-next/styles/productDetails/Description.module.css"],"names":[],"mappings":"AAAA;EACE,2BAAsB;OAAtB,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,2BAAsB;OAAtB,sBAAsB;AACxB","file":"Description.module.css","sourcesContent":[".box {\n  box-sizing: border-box;\n  padding: 40px 30px !important;\n}\n\n.img {\n  width: 220px;\n  height: 220px;\n  object-fit: contain;\n  margin-right: 248px;\n}\n\n.con {\n  width: 878px;\n  color: #333333;\n}\n\n.name {\n  font-size: 30px;\n  color: #666;\n}\n\n.model {\n  font-size: 28px;\n}\n\n.title {\n  font-size: 24px;\n}\n\n.desc {\n  font-size: 16px;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  max-width: 1440px;\n  min-width: 998px;\n  padding-left: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  box-sizing: border-box;\n}"]}]);
// Exports
exports.locals = {
	"box": "Description_box__2Nfn7",
	"img": "Description_img__35CxC",
	"con": "Description_con__1W8jH",
	"name": "Description_name__1Mg3r",
	"model": "Description_model__3iPCf",
	"title": "Description_title__3tXOj",
	"desc": "Description_desc__1_9bj",
	"content": "Description_content__2zwbX"
};
module.exports = exports;


/***/ }),

/***/ "./pages/website/productDetails/components/Description.js":
/*!****************************************************************!*\
  !*** ./pages/website/productDetails/components/Description.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_productDetails_Description_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/productDetails/Description.module.css */ "./styles/productDetails/Description.module.css");
/* harmony import */ var _styles_productDetails_Description_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_productDetails_Description_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\git\\abene-website-next\\pages\\website\\productDetails\\components\\Description.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function Description(_ref) {
  var data = _ref.data,
      image = _ref.image;
  return __jsx("div", {
    id: "Description",
    className: "container flex_row_center_between min_width ".concat(_styles_productDetails_Description_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.box, " ").concat(data ? 'display_block' : 'display_none'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: image,
    alt: "\u4EA7\u54C1\u63CF\u8FF0",
    className: _styles_productDetails_Description_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "flex_column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex_column ".concat(_styles_productDetails_Description_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.con),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "space_bottom ".concat(_styles_productDetails_Description_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "\u4EA7\u54C1\u63CF\u8FF0"), __jsx("div", {
    id: "data",
    className: _styles_productDetails_Description_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.desc,
    dangerouslySetInnerHTML: {
      __html: data
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }))));
}

_c = Description;

Description.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, image) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = {
              data: data,
              image: image
            };
            _context.next = 3;
            return res;

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Description);

var _c;

$RefreshReg$(_c, "Description");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/productDetails/Description.module.css":
/*!******************************************************!*\
  !*** ./styles/productDetails/Description.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Description.module.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/productDetails/Description.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Description.module.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/productDetails/Description.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Description.module.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/productDetails/Description.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Byb2R1Y3REZXRhaWxzL0Rlc2NyaXB0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dlYnNpdGUvcHJvZHVjdERldGFpbHMvY29tcG9uZW50cy9EZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Byb2R1Y3REZXRhaWxzL0Rlc2NyaXB0aW9uLm1vZHVsZS5jc3M/YWViZCJdLCJuYW1lcyI6WyJEZXNjcmlwdGlvbiIsImRhdGEiLCJpbWFnZSIsInN0eWxlIiwiYm94IiwiaW1nIiwiY29uIiwidGl0bGUiLCJkZXNjIiwiX19odG1sIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDRJQUFxRTtBQUMvRztBQUNBO0FBQ0EsY0FBYyxRQUFTLDRCQUE0QixnQ0FBZ0MsZ0NBQWdDLGtDQUFrQyxHQUFHLDZCQUE2QixpQkFBaUIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsaUJBQWlCLG1CQUFtQixHQUFHLDhCQUE4QixvQkFBb0IsZ0JBQWdCLEdBQUcsK0JBQStCLG9CQUFvQixHQUFHLCtCQUErQixvQkFBb0IsR0FBRyw4QkFBOEIsb0JBQW9CLEdBQUcsaUNBQWlDLGdCQUFnQixpQkFBaUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsdUJBQXVCLHNCQUFzQixnQ0FBZ0MsZ0NBQWdDLEdBQUcsT0FBTyw2SEFBNkgsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxnRUFBZ0UsMkJBQTJCLGtDQUFr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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuRGVzY3JpcHRpb25fYm94X18yTmZuNyB7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA0MHB4IDMwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLkRlc2NyaXB0aW9uX2ltZ19fMzVDeEMge1xcbiAgd2lkdGg6IDIyMHB4O1xcbiAgaGVpZ2h0OiAyMjBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBtYXJnaW4tcmlnaHQ6IDI0OHB4O1xcbn1cXG5cXG4uRGVzY3JpcHRpb25fY29uX18xVzhqSCB7XFxuICB3aWR0aDogODc4cHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuXFxuLkRlc2NyaXB0aW9uX25hbWVfXzFNZzNyIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG5cXG4uRGVzY3JpcHRpb25fbW9kZWxfXzNpUENmIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLkRlc2NyaXB0aW9uX3RpdGxlX18zdFhPaiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5EZXNjcmlwdGlvbl9kZXNjX18xXzliaiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5EZXNjcmlwdGlvbl9jb250ZW50X18yendiWCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgbWluLXdpZHRoOiA5OThweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJEOi9naXQvYWJlbmUtd2Vic2l0ZS1uZXh0L3N0eWxlcy9wcm9kdWN0RGV0YWlscy9EZXNjcmlwdGlvbi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMkJBQXNCO09BQXRCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMkJBQXNCO09BQXRCLHNCQUFzQjtBQUN4QlwiLFwiZmlsZVwiOlwiRGVzY3JpcHRpb24ubW9kdWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm94IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA0MHB4IDMwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLmltZyB7XFxuICB3aWR0aDogMjIwcHg7XFxuICBoZWlnaHQ6IDIyMHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIG1hcmdpbi1yaWdodDogMjQ4cHg7XFxufVxcblxcbi5jb24ge1xcbiAgd2lkdGg6IDg3OHB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG5cXG4ubW9kZWwge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uZGVzYyB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICBtaW4td2lkdGg6IDk5OHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJib3hcIjogXCJEZXNjcmlwdGlvbl9ib3hfXzJOZm43XCIsXG5cdFwiaW1nXCI6IFwiRGVzY3JpcHRpb25faW1nX18zNUN4Q1wiLFxuXHRcImNvblwiOiBcIkRlc2NyaXB0aW9uX2Nvbl9fMVc4akhcIixcblx0XCJuYW1lXCI6IFwiRGVzY3JpcHRpb25fbmFtZV9fMU1nM3JcIixcblx0XCJtb2RlbFwiOiBcIkRlc2NyaXB0aW9uX21vZGVsX18zaVBDZlwiLFxuXHRcInRpdGxlXCI6IFwiRGVzY3JpcHRpb25fdGl0bGVfXzN0WE9qXCIsXG5cdFwiZGVzY1wiOiBcIkRlc2NyaXB0aW9uX2Rlc2NfXzFfOWJqXCIsXG5cdFwiY29udGVudFwiOiBcIkRlc2NyaXB0aW9uX2NvbnRlbnRfXzJ6d2JYXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vLi4vLi4vc3R5bGVzL3Byb2R1Y3REZXRhaWxzL0Rlc2NyaXB0aW9uLm1vZHVsZS5jc3MnXG5cbmZ1bmN0aW9uIERlc2NyaXB0aW9uKHsgZGF0YSwgaW1hZ2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J0Rlc2NyaXB0aW9uJyBjbGFzc05hbWU9e2Bjb250YWluZXIgZmxleF9yb3dfY2VudGVyX2JldHdlZW4gbWluX3dpZHRoICR7c3R5bGUuYm94fSAke2RhdGEgPyAnZGlzcGxheV9ibG9jaycgOiAnZGlzcGxheV9ub25lJ31gfT5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PSfkuqflk4Hmj4/ov7AnIGNsYXNzTmFtZT17c3R5bGUuaW1nfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4X2NvbHVtbmB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXhfY29sdW1uICR7c3R5bGUuY29ufWB9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHNwYWNlX2JvdHRvbSAke3N0eWxlLnRpdGxlfWB9PuS6p+WTgeaPj+i/sDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGlkPSdkYXRhJyBjbGFzc05hbWU9e3N0eWxlLmRlc2N9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBkYXRhfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5EZXNjcmlwdGlvbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoZGF0YSwgaW1hZ2UpID0+IHtcbiAgY29uc3QgcmVzID0geyBkYXRhLCBpbWFnZSB9XG4gIHJldHVybiBhd2FpdCByZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb24iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9EZXNjcmlwdGlvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vRGVzY3JpcHRpb24ubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL0Rlc2NyaXB0aW9uLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==