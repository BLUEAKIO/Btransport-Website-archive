import rateLimit from 'express-rate-limit'
import { RATE_LIMIT } from '../constants/index.js'
import logger from '../utils/logger.js'

export const rateLimiter = rateLimit({
  windowMs: RATE_LIMIT.WINDOW_SIZE,
  max: RATE_LIMIT.MAX_REQUESTS,
  handler: (req, res) => {
    logger.warn(`Rate limit exceeded for IP: ${req.ip}`)
    res.status(429).json({
      success: false,
      error: {
        code: 'RATE_LIMIT_EXCEEDED',
        message: 'Too many requests, please try again later'
      }
    })
  }
})
