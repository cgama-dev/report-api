'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _database = require('./../database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReportSchema = new _database2.default.Schema({
    projectName: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    data: {
        type: String
    },
    helpers: {
        type: String
    },
    footer: {
        type: String
    },
    header: {
        type: String
    },
    page: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var Report = _database2.default.model('Projects', ReportSchema);

exports.default = Report;
//# sourceMappingURL=report.model.js.map