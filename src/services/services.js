import { createDirectus, authentication, rest, readItems, readSingleton } from '@directus/sdk'

const { DIRECTUS_URL, DIRECTUS_USER, DIRECTUS_PASSWORD } = import.meta.env

// Directus SDK configuration
const client = createDirectus(DIRECTUS_URL).with(authentication()).with(rest())
// await client.login(DIRECTUS_USER, DIRECTUS_PASSWORD)

export const servicesLanding = await client.request(readSingleton('Landing_servicios'))

export const servicesResume = await client.request(readItems('Servicios',
  {
    fields:
      ['nombre_del_servicio', 'descripcion_del_servicio', 'icono', 'slug', 'imagen_principal']
  }
))

export const serviceDataByName = (slug) => client.request(readItems('Servicios',
  {
    fields:
      ['*', { enfoques_de_trabajo: ['*'] }],
    filter: { slug }
  }
))
