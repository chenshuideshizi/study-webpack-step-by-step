(function(modules) { // webpackBootstrap   webpack入口函数
	var installedModules = {};
	function __webpack_require__(moduleId) {
		if(installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		return module.exports;
	}
return __webpack_require__(__webpack_require__.s = "./src\index.js");//入口模块
})

({
  
    "./src\index.js":   //key->模块的路径
    (function(module, exports,__webpack_require__) {  
      eval(`let str = __webpack_require__("./src\\a.js");

console.log(str);`);
    }),
  
    "./src\a.js":   //key->模块的路径
    (function(module, exports,__webpack_require__) {  
      eval(`let b = __webpack_require__("./src\\base\\b.js");

module.exports = 'a' + b;`);
    }),
  
    "./src\base\b.js":   //key->模块的路径
    (function(module, exports,__webpack_require__) {  
      eval(`module.exports = 'b';`);
    }),
  

});