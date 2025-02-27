import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Company } from '../../types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getCompanies: builder.query<Company[], void>({
      query: () => '/companies'
    }),
    getCompanyById: builder.query<Company, string>({
      query: (id) => `/companies/${id}`
    })
  })
})

export const { useGetCompaniesQuery, useGetCompanyByIdQuery } = apiSlice
