const { format, createLogger, transports } = require("winston");
const { timestamp, combine, printf } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
	return `[${timestamp}] ${level}: ${message || stack}`;
});

const logger = createLogger({
	level: "debug",
	format: combine(
		format.colorize(),
		timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
		format.errors({ stack: true }),
		logFormat
	),
	transports: [new transports.Console()],
});

module.exports = logger;
