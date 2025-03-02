import Joi from 'joi'

// 公司数据验证schema
export const companySchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  logo: Joi.string().uri().required(),
  description: Joi.string().required(),
  lines: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      color: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).required()
    })
  ).required()
})

// 获取公司列表验证
export const getCompaniesValidation = {
  query: Joi.object({
    page: Joi.number().min(1).default(1),
    limit: Joi.number().min(1).max(100).default(10)
  })
}

// 获取单个公司验证
export const getCompanyValidation = {
  params: Joi.object({
    id: Joi.string().required()
  })
}
