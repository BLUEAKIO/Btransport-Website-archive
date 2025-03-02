import express from 'express'
import { getCompanies, getCompanyById } from '../controllers/companyController.js'

const router = express.Router()

// 获取所有公司
router.get('/', getCompanies)

// 获取单个公司
router.get('/:id', getCompanyById)

export default router
