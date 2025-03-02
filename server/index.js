import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import { errorHandler, notFoundHandler } from './src/middlewares/errorHandler.js'
import apiRoutes from './src/routes/index.js'

// 初始化环境变量
dotenv.config()

// 创建Express应用
const app = express()
const port = process.env.PORT || 3001

// 连接数据库
connectDB()

// 中间件
app.use(cors({
  origin: process.env.CORS_ORIGINS?.split(','),
  credentials: true
}))
app.use(express.json())

// 路由
app.use('/api', apiRoutes)

// 错误处理
app.use(notFoundHandler)
app.use(errorHandler)

// 启动服务器
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
