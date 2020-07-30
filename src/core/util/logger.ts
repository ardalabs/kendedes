import * as winston from 'winston';
export const logger: winston.Logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({ level: 'info' }),
    ],
});
const env = process.env.NODE_ENV;
// Development Logger
// tslint:disable-next-line: no-empty
if (env === 'development') {}

process.on('unhandledRejection', () => {
    return (reason: any, p: any) => {
        // tslint:disable-next-line: indent
        logger.warn('system level exceptions at, Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
    };
});
