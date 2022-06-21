"use strict";
exports.id = "src_host-container_js";
exports.ids = ["src_host-container_js"];
exports.modules = {

/***/ "./src/host-container.js":
/*!*******************************!*\
  !*** ./src/host-container.js ***!
  \*******************************/
/***/ ((module) => {



const {
  aegis
} = require('@module-federation/aegis');

function init(remotes) {
  return aegis.init(remotes);
}

function dispose() {
  Object.keys(require.cache).forEach(k => {
    console.debug('deleting cached module', k);
    delete require.cache[k];
  });
}

module.exports = {
  init,
  dispose
};

/***/ })

};
;