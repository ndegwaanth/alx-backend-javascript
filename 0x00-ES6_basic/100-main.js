"use strict";

var _createIteratorObject = _interopRequireDefault(require("./100-createIteratorObject.js"));
var _createEmployeesObject = _interopRequireDefault(require("./11-createEmployeesObject.js"));
var _createReportObject = _interopRequireDefault(require("./12-createReportObject.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const employees = {
  ...(0, _createEmployeesObject.default)('engineering', ['Bob', 'Jane']),
  ...(0, _createEmployeesObject.default)('marketing', ['Sylvie'])
};
const report = (0, _createReportObject.default)(employees);
const reportWithIterator = (0, _createIteratorObject.default)(report);
for (const item of reportWithIterator) {
  console.log(item);
}
