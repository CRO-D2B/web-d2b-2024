const API_URL = 'https://admin.d2b.cl/d2badmin'

export const getServicesInfo = async () => {
  const res = await fetch(`${API_URL}/items/2024_servicios`)
  const { data } = await res.json()
  return data
}

export const getServiceInfoBySlug = async ({ serviceSlug }) => {
  const res = await fetch(`${API_URL}/items/2024_servicios?filter[slug]=${serviceSlug}`)
  const { data } = await res.json()
  return data[0]
}

export const getServicesResume = async () => {
  const res = await fetch(`${API_URL}/items/2024_servicios?fields[]=nombre_del_servicio&fields[]=slug`)
  const { data } = await res.json()
  return data
}
