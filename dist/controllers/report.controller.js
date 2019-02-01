'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _report = require('./../models/report.model');

var _report2 = _interopRequireDefault(_report);

var _report3 = require('./../util/report.util');

var _report4 = _interopRequireDefault(_report3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReportController = function ReportController() {

    var Report = {
        query: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
                var reports;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _report2.default.find();

                            case 3:
                                reports = _context.sent;
                                return _context.abrupt('return', res.send({ reports: reports }));

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](0);
                                return _context.abrupt('return', res.status(400).send({ error: 'Erro ao buscar lista de reports' }));

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, undefined, [[0, 7]]);
            }));

            function query(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return query;
        }(),
        get: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
                var id, report, newReport;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                id = req.params.id;
                                _context2.prev = 1;
                                _context2.next = 4;
                                return _report2.default.findOne({
                                    _id: id
                                });

                            case 4:
                                report = _context2.sent;

                                if (report) {
                                    _context2.next = 7;
                                    break;
                                }

                                return _context2.abrupt('return', res.status(400).send({ message: 'Esse projeto não existe na base de dados', data: report }));

                            case 7:
                                newReport = {
                                    id: report.id,
                                    projectName: report.projectName,
                                    url: report.url,
                                    data: report.data,
                                    footer: report.footer,
                                    helpers: report.helpers,
                                    header: report.header,
                                    page: report.page
                                };
                                return _context2.abrupt('return', res.send(newReport));

                            case 11:
                                _context2.prev = 11;
                                _context2.t0 = _context2['catch'](1);

                                console.log(_context2.t0);
                                return _context2.abrupt('return', res.status(400).send({ error: 'Erro ao buscar report' }));

                            case 15:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined, [[1, 11]]);
            }));

            function get(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return get;
        }(),
        create: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
                var dir, Util, _ref4, data, footer, header, helpers, page, report, reportSaved;

                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                dir = _path2.default.resolve("./src/reports/default");
                                Util = (0, _report4.default)();
                                _context3.next = 5;
                                return Util.readFile(dir);

                            case 5:
                                _ref4 = _context3.sent;
                                data = _ref4.data;
                                footer = _ref4.footer;
                                header = _ref4.header;
                                helpers = _ref4.helpers;
                                page = _ref4.page;
                                report = (0, _extends3.default)({}, req.body, { data: data, footer: footer, header: header, helpers: helpers, page: page });
                                _context3.next = 14;
                                return _report2.default.create(report);

                            case 14:
                                reportSaved = _context3.sent;
                                return _context3.abrupt('return', res.send(reportSaved));

                            case 18:
                                _context3.prev = 18;
                                _context3.t0 = _context3['catch'](0);

                                console.log(_context3.t0);
                                return _context3.abrupt('return', res.status(400).send({ error: 'Erro ao criar report' }));

                            case 22:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, undefined, [[0, 18]]);
            }));

            function create(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return create;
        }(),
        update: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
                var id, report, newReport;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                id = req.params.id;
                                _context4.prev = 1;
                                _context4.next = 4;
                                return _report2.default.findOne({ _id: id });

                            case 4:
                                report = _context4.sent;

                                if (report) {
                                    _context4.next = 7;
                                    break;
                                }

                                return _context4.abrupt('return', res.status(400).send({ error: 'Esse projeto não existe na base de dados' }));

                            case 7:
                                _context4.next = 9;
                                return _report2.default.findByIdAndUpdate(id, req.body, { new: true });

                            case 9:
                                newReport = _context4.sent;
                                return _context4.abrupt('return', res.send(newReport));

                            case 13:
                                _context4.prev = 13;
                                _context4.t0 = _context4['catch'](1);
                                return _context4.abrupt('return', res.status(400).send({ error: 'Ocorreu algum erro ao atualizar o projeto' }));

                            case 16:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, undefined, [[1, 13]]);
            }));

            function update(_x7, _x8) {
                return _ref5.apply(this, arguments);
            }

            return update;
        }(),
        generate: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
                var id, report, Util, pdfData;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                id = req.body.reportId;
                                _context5.prev = 1;
                                _context5.next = 4;
                                return _report2.default.findOne({ _id: id });

                            case 4:
                                report = _context5.sent;

                                if (report) {
                                    _context5.next = 7;
                                    break;
                                }

                                return _context5.abrupt('return', res.status(400).send({ error: 'Esse projeto não existe na base de dados' }));

                            case 7:
                                Util = (0, _report4.default)();
                                _context5.next = 10;
                                return Util.generatePdf(report);

                            case 10:
                                pdfData = _context5.sent;


                                res.writeHead(200, {
                                    'Content-Type': 'application/pdf',
                                    'Content-Disposition': 'attachment; filename=Laudos.pdf',
                                    'Content-Length': pdfData.length
                                });

                                return _context5.abrupt('return', res.end(pdfData));

                            case 15:
                                _context5.prev = 15;
                                _context5.t0 = _context5['catch'](1);
                                return _context5.abrupt('return', res.status(400).send({ error: 'Erro ao renderizar PDF' }));

                            case 18:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, undefined, [[1, 15]]);
            }));

            function generate(_x9, _x10) {
                return _ref6.apply(this, arguments);
            }

            return generate;
        }(),
        destroy: function () {
            var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
                var id, report;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                id = req.params.id;
                                _context6.prev = 1;
                                _context6.next = 4;
                                return _report2.default.findByIdAndRemove({ _id: id });

                            case 4:
                                report = _context6.sent;

                                if (report) {
                                    _context6.next = 7;
                                    break;
                                }

                                return _context6.abrupt('return', res.status(400).send({ error: 'Esse projeto não existe na base de dados' }));

                            case 7:
                                return _context6.abrupt('return', res.send({ message: 'Projeto deletado com sucesso' }));

                            case 10:
                                _context6.prev = 10;
                                _context6.t0 = _context6['catch'](1);
                                return _context6.abrupt('return', res.status(400).send({ error: 'Ocorreu algum erro ao deletar esse projeto' }));

                            case 13:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, undefined, [[1, 10]]);
            }));

            function destroy(_x11, _x12) {
                return _ref7.apply(this, arguments);
            }

            return destroy;
        }()

    };

    return Report;
};

exports.default = ReportController;
//# sourceMappingURL=report.controller.js.map