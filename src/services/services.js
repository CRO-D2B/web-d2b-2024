import { client } from '@/lib/resend'
import { readSingleton, readItems } from '@directus/sdk'

export const servicesLanding = await client.request(readSingleton('Landing_servicios'))

export const servicesResume = await client.request(readItems('Servicios',
  {
    fields:
      ['nombre_del_servicio', 'descripcion_del_servicio', 'icono', 'slug', 'imagen_principal']
  }
))

export const serviceDataByName = (slug) => client.request(readItems('Servicios',
  {
    fields: ['*', { enfoques_de_trabajo: ['*'] }],
    filter: { slug }
  }
))
