"use strict";

var _citiList = _interopRequireDefault(require("citi.list.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cites = JSON.parse(_citiList["default"]);
Console.log(cites);