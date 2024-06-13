import { client } from './directus-sdk'
import { readSingleton } from '@directus/sdk'

export const contactPage = await client.request(readSingleton('Contacto'))
