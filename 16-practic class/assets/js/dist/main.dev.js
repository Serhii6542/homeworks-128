"use strict";

var _News = _interopRequireDefault(require("../classes/News.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newsAPI = new _News["default"]();
var newList = newsAPI.getNewsLIst();
console.log(newList);