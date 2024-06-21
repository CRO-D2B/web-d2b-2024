import { client } from './config'
import { readItems, readSingleton } from '@directus/sdk'

export const contactPage = await client.request(readSingleton('Contacto'))

export const workWithUsPage = await client.request(readSingleton('Landing_trabaja_con_nosotros'))

export const benefits = await client.request(readItems('Beneficios'))
