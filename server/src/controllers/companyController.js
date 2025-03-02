import { companies } from '../../data/lines.js'
import logger from '../utils/logger.js'
import { ERROR_CODES } from '../constants/index.js'
import { getCompaniesValidation, getCompanyValidation } from '../validations/companyValidation.js'

// 获取所有公司
export const getCompanies = (req, res, next) => {
  try {
    // 验证查询参数
    const { error, value } = getCompaniesValidation.query.validate(req.query)
    if (error) {
      return next({
        statusCode: 400,
        errorCode: ERROR_CODES.VALIDATION_ERROR,
        message: error.details[0].message
      })
    }

    const { page = 1, limit = 10 } = value
    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const paginatedCompanies = companies.slice(startIndex, endIndex)
    
    logger.info('Fetching all companies')
    res.json({
      data: paginatedCompanies,
      pagination: {
        page,
        limit,
        total: companies.length,
        totalPages: Math.ceil(companies.length / limit)
      }
    })
  } catch (error) {
    logger.error(`Error fetching companies: ${error.message}`)
    next({
      statusCode: 500,
      errorCode: ERROR_CODES.INTERNAL_ERROR,
      message: 'Failed to fetch companies'
    })
  }
}

// 获取单个公司
export const getCompanyById = (req, res, next) => {
  try {
    // 验证路径参数
    const { error } = getCompanyValidation.params.validate(req.params)
    if (error) {
      return next({
        statusCode: 400,
        errorCode: ERROR_CODES.VALIDATION_ERROR,
        message: error.details[0].message
      })
    }

    const company = companies.find(c => c.id === req.params.id)
    if (!company) {
      return next({
        statusCode: 404,
        errorCode: ERROR_CODES.NOT_FOUND,
        message: 'Company not found'
      })
    }
    logger.info(`Fetched company with ID: ${req.params.id}`)
    res.json(company)
  } catch (error) {
    logger.error(`Error fetching company: ${error.message}`)
    next({
      statusCode: 500,
      errorCode: ERROR_CODES.INTERNAL_ERROR,
      message: 'Failed to fetch company'
    })
  }
}
