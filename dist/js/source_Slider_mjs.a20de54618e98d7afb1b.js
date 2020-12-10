(self["webpackChunkdummy"] = self["webpackChunkdummy"] || []).push([["source_Slider_mjs"],{

/***/ "UOvO":
/*!***************************!*
  !*** ./source/Slider.mjs ***!
  \***************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "/cuv");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "p87y");
/* harmony import */ var swiper_dist_js_swiper_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/dist/js/swiper.esm.js */ "NcQG");




var Example = /*#__PURE__*/function () {
  function Example() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__(this, Example);

    // Prepare some stuff...
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__(Example, [{
    key: "init",
    value: function init() {
      swiper_dist_js_swiper_esm_js__WEBPACK_IMPORTED_MODULE_2__.Swiper.use([swiper_dist_js_swiper_esm_js__WEBPACK_IMPORTED_MODULE_2__.A11y, swiper_dist_js_swiper_esm_js__WEBPACK_IMPORTED_MODULE_2__.Keyboard, swiper_dist_js_swiper_esm_js__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper_dist_js_swiper_esm_js__WEBPACK_IMPORTED_MODULE_2__.Pagination]);
      new swiper_dist_js_swiper_esm_js__WEBPACK_IMPORTED_MODULE_2__.Swiper('.swiper-container', {
        keyboard: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        }
      });
    }
  }]);

  return Example;
}(); // Example class, which will be transformed by babel


new Example();

/***/ })

}]);
//# sourceMappingURL=source_Slider_mjs.a20de54618e98d7afb1b.js.map