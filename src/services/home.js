import { isProd } from '@/lib/utils'

const API_URL = 'https://admin.d2b.cl/d2badmin'
const publishedFilter = isProd ? 'status=published' : ''

export const getHomeInfo = async () => {
  const endpoint = '/items/2024_home/1'
  const params = [
    'fields[]=titulo_principal',
    'fields[]=bajada_principal',
    'fields[]=cta_principal',
    'fields[]=servicios_titulo',
    'fields[]=servicios.nombre_del_servicio',
    'fields[]=servicios.descripcion_del_servicio',
    'fields[]=servicios.icono.data.full_url',
    'fields[]=servicios.slug'
  ]
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const { data } = await res.json()
  return data
}

const buildUrl = ({ endpoint, params = [''] }) => {
  return `${API_URL}${endpoint}?${publishedFilter}&${params.join('&')}`
}
