import { isProd } from '@/lib/utils'

const API_URL = 'https://admin.d2b.cl/d2badmin'
const publishedFilter = isProd ? 'status=published' : ''

export const getServicesInfo = async () => {
  const endpoint = '/items/2024_servicios'
  const url = buildUrl({ endpoint })
  const res = await fetch(url)
  const { data } = await res.json()
  return data
}

export const getServiceInfoBySlug = async ({ serviceSlug }) => {
  const endpoint = '/items/2024_servicios'
  const params = `filter[slug]=${serviceSlug}`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const { data } = await res.json()
  return data[0]
}

export const getServicesResume = async () => {
  const endpoint = '/items/2024_servicios'
  const params = 'fields[]=nombre_del_servicio&fields[]=slug'
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const { data } = await res.json()
  return data
}

const buildUrl = ({ endpoint, params = '' }) => {
  return `${API_URL}${endpoint}?${publishedFilter}&${params}`
}
