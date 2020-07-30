"use strict";
exports.__esModule = true;
exports.logger = void 0;
var winston = require("winston");
exports.logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({ level: 'info' }),
    ]
});
var env = process.env.NODE_ENV;
// Development Logger
// tslint:disable-next-line: no-empty
if (env === 'development') { }
process.on('unhandledRejection', function () {
    return function (reason, p) {
        // tslint:disable-next-line: indent
        exports.logger.warn('system level exceptions at, Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
    };
});
