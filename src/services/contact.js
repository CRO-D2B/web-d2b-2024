import { client } from './config'
import { readSingleton } from '@directus/sdk'

export const contactPage = await client.request(readSingleton('Contacto'))
