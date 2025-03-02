import Company from '../models/companyModel.js'
import asyncHandler from 'express-async-handler'

// @desc    获取所有公司
// @route   GET /api/companies
// @access  Public
export const getCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find({})
  res.json(companies)
})

// @desc    获取单个公司
// @route   GET /api/companies/:id
// @access  Public
export const getCompanyById = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id)
  
  if (company) {
    res.json(company)
  } else {
    res.status(404)
    throw new Error('Company not found')
  }
})

// @desc    创建新公司
// @route   POST /api/companies
// @access  Private/Admin
export const createCompany = asyncHandler(async (req, res) => {
  const company = new Company({
    name: req.body.name,
    logo: req.body.logo,
    description: req.body.description
  })

  const createdCompany = await company.save()
  res.status(201).json(createdCompany)
})

// @desc    更新公司信息
// @route   PUT /api/companies/:id
// @access  Private/Admin
export const updateCompany = asyncHandler(async (req, res) => {
  const { name, logo, description } = req.body

  const company = await Company.findById(req.params.id)

  if (company) {
    company.name = name || company.name
    company.logo = logo || company.logo
    company.description = description || company.description

    const updatedCompany = await company.save()
    res.json(updatedCompany)
  } else {
    res.status(404)
    throw new Error('Company not found')
  }
})

// @desc    删除公司
// @route   DELETE /api/companies/:id
// @access  Private/Admin
export const deleteCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id)

  if (company) {
    await company.remove()
    res.json({ message: 'Company removed' })
  } else {
    res.status(404)
    throw new Error('Company not found')
  }
})
