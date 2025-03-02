import winston from 'winston'
import { LOG_LEVELS } from '../constants/index.js'

const { combine, timestamp, printf, colorize } = winston.format

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`
})

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || LOG_LEVELS.INFO,
  format: combine(
    colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ 
      filename: 'logs/combined.log',
      maxsize: 1024 * 1024 * 5 // 5MB
    })
  ]
})

export default logger
