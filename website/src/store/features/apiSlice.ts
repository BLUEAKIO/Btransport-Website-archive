import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Company, PaginatedResponse } from '../../types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getCompanies: builder.query<PaginatedResponse<Company[]>, { page?: number, limit?: number }>({
      query: ({ page = 1, limit = 10 }) => ({
        url: '/api/companies',
        params: { page, limit }
      })
    }),
    getCompanyById: builder.query<Company, string>({
      query: (id) => `/api/companies/${id}`
    })
  })
})

export const { useGetCompaniesQuery, useGetCompanyByIdQuery } = apiSlice
