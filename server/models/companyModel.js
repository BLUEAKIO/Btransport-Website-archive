import mongoose from 'mongoose'

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    logo: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Company = mongoose.model('Company', companySchema)

export default Company
