import Joi from 'joi'

// 公司数据验证规则
const companySchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': '公司名称不能为空',
    'any.required': '公司名称是必填项'
  }),
  logo: Joi.string().uri().required().messages({
    'string.empty': '公司logo不能为空',
    'string.uri': '公司logo必须是有效的URL',
    'any.required': '公司logo是必填项'
  }),
  description: Joi.string().required().messages({
    'string.empty': '公司描述不能为空',
    'any.required': '公司描述是必填项'
  })
})

// 验证中间件
export const validateCompany = (req, res, next) => {
  const { error } = companySchema.validate(req.body, {
    abortEarly: false
  })

  if (error) {
    const errors = error.details.map(detail => detail.message)
    return res.status(400).json({ errors })
  }

  next()
}
