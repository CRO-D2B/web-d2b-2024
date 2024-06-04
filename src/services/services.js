import { isProd } from '@/lib/utils'
import { createDirectus, authentication, rest, readItems, readSingleton } from '@directus/sdk'

const { DIRECTUS_URL, DIRECTUS_USER, DIRECTUS_PASSWORD } = import.meta.env

// Directus SDK configuration
const client = createDirectus(DIRECTUS_URL).with(authentication()).with(rest())
await client.login(DIRECTUS_USER, DIRECTUS_PASSWORD)

export const servicesLanding = await client.request(readSingleton('Landing_servicios'))

export const servicesResume = await client.request(readItems('Servicios'),
  { fields: ['nombre_del_servicio', 'descripcion_del_servicio', 'icono', 'slug', 'imagen_principal'] }
)

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
