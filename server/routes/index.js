import express from 'express'
import companyRoutes from './companyRoutes.js'

const router = express.Router()

// 健康检查路由
router.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// 公司相关路由
router.use('/companies', companyRoutes)

export default router
