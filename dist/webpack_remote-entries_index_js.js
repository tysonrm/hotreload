exports.id = "webpack_remote-entries_index_js";
exports.ids = ["webpack_remote-entries_index_js"];
exports.modules = {

/***/ "./webpack/remote-entries/customer.js":
/*!********************************************!*\
  !*** ./webpack/remote-entries/customer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @typedef {import("../remote-entries-type").remoteEntry} entry
 */

/** @type {entry[]} */
exports.customer = [{
  name: 'customer',
  url: 'https://api.github.com',
  repo: 'aegis-application',
  owner: 'module-federation',
  filedir: 'dist',
  branch: 'customer',
  path: __dirname,
  type: 'model',
  importRemote: async () => __webpack_require__.e(/*! import() */ "webpack_container_remote_customer_models").then(__webpack_require__.t.bind(__webpack_require__, /*! customer/models */ "webpack/container/remote/customer/models", 23))
}, {
  name: 'adapters',
  url: 'https://api.github.com',
  repo: 'aegis-application',
  owner: 'module-federation',
  filedir: 'dist',
  branch: 'customer',
  path: __dirname,
  type: 'adapter',
  importRemote: async () => __webpack_require__.e(/*! import() */ "webpack_container_remote_customer_adapters").then(__webpack_require__.t.bind(__webpack_require__, /*! customer/adapters */ "webpack/container/remote/customer/adapters", 23))
}, {
  name: 'services',
  url: 'https://api.github.com',
  repo: 'aegis-application',
  owner: 'module-federation',
  filedir: 'dist',
  branch: 'customer',
  path: __dirname,
  type: 'service',
  importRemote: async () => __webpack_require__.e(/*! import() */ "webpack_container_remote_customer_services").then(__webpack_require__.t.bind(__webpack_require__, /*! customer/services */ "webpack/container/remote/customer/services", 23))
}];

/***/ }),

/***/ "./webpack/remote-entries/index.js":
/*!*****************************************!*\
  !*** ./webpack/remote-entries/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

//exports.cache = require('./cache')
exports.customer = __webpack_require__(/*! ./customer */ "./webpack/remote-entries/customer.js");
exports.order = __webpack_require__(/*! ./order */ "./webpack/remote-entries/order.js"); //exports.wasm = require('./wasm')

/***/ }),

/***/ "./webpack/remote-entries/order.js":
/*!*****************************************!*\
  !*** ./webpack/remote-entries/order.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * @typedef {import("../remote-entries-type").remoteEntry} entry
 */

/** @type {entry[]} */

exports.order = [{
  name: 'order',
  url: 'https://api.github.com',
  repo: 'aegis-application',
  owner: 'module-federation',
  filedir: 'dist',
  branch: 'order',
  path: __dirname,
  type: 'model',
  importRemote: async () => __webpack_require__.e(/*! import() */ "webpack_container_remote_order_models").then(__webpack_require__.t.bind(__webpack_require__, /*! order/models */ "webpack/container/remote/order/models", 23))
}, {
  name: 'adapters',
  url: 'https://api.github.com',
  repo: 'aegis-application',
  owner: 'module-federation',
  filedir: 'dist',
  branch: 'order',
  path: __dirname,
  type: 'adapter',
  importRemote: async () => __webpack_require__.e(/*! import() */ "webpack_container_remote_order_adapters").then(__webpack_require__.t.bind(__webpack_require__, /*! order/adapters */ "webpack/container/remote/order/adapters", 23))
}, {
  name: 'services',
  url: 'https://api.github.com',
  repo: 'aegis-application',
  owner: 'module-federation',
  filedir: 'dist',
  branch: 'order',
  path: __dirname,
  type: 'service',
  importRemote: async () => __webpack_require__.e(/*! import() */ "webpack_container_remote_order_services").then(__webpack_require__.t.bind(__webpack_require__, /*! order/services */ "webpack/container/remote/order/services", 23))
}];

/***/ })

};
;