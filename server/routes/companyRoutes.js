import express from 'express'
import {
  getCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany
} from '../controllers/companyController.js'
import { validateCompany } from '../validations/companyValidation.js'

const router = express.Router()

// 获取所有公司
router.get('/', getCompanies)

// 获取单个公司
router.get('/:id', getCompanyById)

// 创建新公司
router.post('/', validateCompany, createCompany)

// 更新公司信息
router.put('/:id', validateCompany, updateCompany)

// 删除公司
router.delete('/:id', deleteCompany)

export default router
