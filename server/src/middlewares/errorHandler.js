import logger from '../utils/logger.js'
import { ERROR_CODES } from '../constants/index.js'

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const errorCode = err.errorCode || ERROR_CODES.INTERNAL_ERROR
  const message = err.message || 'Internal Server Error'

  logger.error({
    message: `Error ${statusCode}: ${message}`,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method
  })

  res.status(statusCode).json({
    success: false,
    error: {
      code: errorCode,
      message: message
    }
  })
}

export const notFoundHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  error.statusCode = 404
  error.errorCode = ERROR_CODES.NOT_FOUND
  next(error)
}
