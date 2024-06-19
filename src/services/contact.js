import { client } from './config'
import { readSingleton } from '@directus/sdk'

export const contactPage = await client.request(readSingleton('Contacto'))

export const workWithUsPage = await client.request(readSingleton('Landing_trabaja_con_nosotros'))
