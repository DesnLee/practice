parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#content"),e=document.querySelector("#style"),t="/*你好，我是一名前端新人\n接下来我要给简历加样式了\n我要加的样式是*/\nbody {\n    color:red\n}",o=0,r="",c=function c(){setTimeout(function(){"\n"===t[o]?r+="<br>":" "===t[o]?r+="&nbsp;":t[o]+t[o+1]==="/*"||t[o]+t[o+1]==="*/"?(r+="&nbsp;",o+=1):r+=t[o],n.innerHTML=r,e.innerHTML=t.substring(0,o),(o+=1)<t.length&&c()},50)};c();
},{}]},{},["epB2"], null)
//# sourceMappingURL=/profile/dist/main.2596972c.js.map