# transport-website
BLUEAKIO 交通导航网页

## 环境变量配置
### 前端 (website)
- `.env.development` - 开发环境
  ```
  VITE_API_BASE_URL=http://localhost:3001
  ```
- `.env.production` - 生产环境
  ```
  VITE_API_BASE_URL=https://api-transport.blueakio.com
  ```

### 后端 (server)
- `.env` - 服务器配置
  ```
  PORT=3001
  CORS_ORIGINS=http://localhost:5173,http://localhost:3000
  ```