import express from 'express'
import companyRoutes from './companyRoutes.js'

const router = express.Router()

// 注册路由
router.use('/companies', companyRoutes)

export default router
