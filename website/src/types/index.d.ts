/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_TIMEOUT: string
  readonly VITE_API_CACHE_TTL: string
  readonly VITE_PERF_MONITORING: string
  readonly VITE_FEATURE_NEW_UI: string
}

export interface Company {
  id: string
  name: Record<string, string>
  description?: Record<string, string>
  lines?: Array<{
    id: string
    name: Record<string, string>
    operationalStatus: string
    operationalInfo: Record<string, string>
  }>
  services?: Record<string, string[]>
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
