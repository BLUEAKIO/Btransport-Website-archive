import express from 'express'
import cors from 'cors'
import { companies } from './data/lines.js'

const app = express()
const port = 3001

// 启用CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}))

// 获取所有公司数据
app.get('/api/companies', (req, res) => {
  res.json(companies)
})

// 获取单个公司数据
app.get('/api/companies/:id', (req, res) => {
  const company = companies.find(c => c.id === req.params.id)
  if (!company) {
    return res.status(404).json({ error: 'Company not found' })
  }
  res.json(company)
})

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal Server Error' })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
