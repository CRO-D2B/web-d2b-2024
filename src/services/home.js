import { client } from '@/lib/resend'
import { readSingleton, readItems } from '@directus/sdk'

export const homePage = await client.request(readSingleton('Home'))

export const valueProposition = await client.request(readItems('Propuesta_de_valor'))

export const clients = await client.request(readItems('Clientes'))

export const partners = await client.request(readItems('Partners'))

export const team = await client.request(readItems('Equipo'))

export const cases = await client.request(readItems('Casos'))
