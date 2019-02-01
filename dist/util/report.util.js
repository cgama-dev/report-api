'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _promisifyNode = require('promisify-node');

var _promisifyNode2 = _interopRequireDefault(_promisifyNode);

var _jsreport = require('../modules/jsreport.module');

var _jsreport2 = _interopRequireDefault(_jsreport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UtilReport = function UtilReport() {
    var Report = {
        readFile: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dir) {
                var readFile, data, footer, header, helpers, page, bodyPdf;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                readFile = (0, _promisifyNode2.default)(_fs2.default.readFile);
                                _context.next = 3;
                                return readFile(dir + '/data.json');

                            case 3:
                                data = _context.sent;
                                _context.next = 6;
                                return readFile(dir + '/footer.html');

                            case 6:
                                footer = _context.sent;
                                _context.next = 9;
                                return readFile(dir + '/header.html');

                            case 9:
                                header = _context.sent;
                                _context.next = 12;
                                return readFile(dir + '/helpers.js');

                            case 12:
                                helpers = _context.sent;
                                _context.next = 15;
                                return readFile(dir + '/page.html');

                            case 15:
                                page = _context.sent;
                                bodyPdf = {
                                    data: data.toString(),
                                    footer: footer.toString(),
                                    header: header.toString(),
                                    helpers: helpers.toString(),
                                    page: page.toString()
                                };
                                return _context.abrupt('return', bodyPdf);

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined);
            }));

            function readFile(_x) {
                return _ref.apply(this, arguments);
            }

            return readFile;
        }(),
        writeFile: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dir, bodyPdf) {
                var writeFile, data, footer, header, helpers, page;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:

                                if (!_fs2.default.existsSync(dir)) {
                                    _fs2.default.mkdirSync(dir);
                                }

                                writeFile = (0, _promisifyNode2.default)(_fs2.default.writeFile);
                                data = bodyPdf.data, footer = bodyPdf.footer, header = bodyPdf.header, helpers = bodyPdf.helpers, page = bodyPdf.page;
                                _context2.next = 5;
                                return writeFile(dir + "/helpers.js", helpers);

                            case 5:
                                _context2.next = 7;
                                return writeFile(dir + "/data.json", data);

                            case 7:
                                _context2.next = 9;
                                return writeFile(dir + "/page.html", page);

                            case 9:
                                _context2.next = 11;
                                return writeFile(dir + "/header.html", header);

                            case 11:
                                _context2.next = 13;
                                return writeFile(dir + "/footer.html", footer);

                            case 13:
                                return _context2.abrupt('return', true);

                            case 14:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined);
            }));

            function writeFile(_x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return writeFile;
        }(),
        generatePdf: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(bodyPdf) {
                var data, footer, header, helpers, page, pdf, pdfData;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                data = bodyPdf.data, footer = bodyPdf.footer, header = bodyPdf.header, helpers = bodyPdf.helpers, page = bodyPdf.page;
                                _context3.next = 3;
                                return _jsreport2.default.render({
                                    template: {
                                        content: page,
                                        helpers: helpers,
                                        engine: 'handlebars',
                                        recipe: 'phantom-pdf',
                                        phantom: {
                                            format: "A4",
                                            width: "700px",
                                            margin: "1cm",
                                            numberOfWorkers: 1,
                                            timeout: 180000,
                                            allowLocalFilesAccess: false,
                                            header: header,
                                            headerHeight: "3cm",
                                            footer: footer.toString(),
                                            footerHeight: "1cm"
                                        }

                                    },
                                    data: data
                                });

                            case 3:
                                pdf = _context3.sent;
                                pdfData = pdf.content;
                                return _context3.abrupt('return', pdfData);

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, undefined);
            }));

            function generatePdf(_x4) {
                return _ref3.apply(this, arguments);
            }

            return generatePdf;
        }()
    };

    return Report;
};
exports.default = UtilReport;
//# sourceMappingURL=report.util.js.map