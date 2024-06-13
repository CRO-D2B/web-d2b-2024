import { createDirectus, authentication, rest, readItems, readSingleton } from '@directus/sdk'

const { DIRECTUS_URL } = import.meta.env

const client = createDirectus(DIRECTUS_URL).with(authentication()).with(rest())

export const homeData = await client.request(readSingleton('Home'))

export const valueProposition = await client.request(readItems('Propuesta_de_valor'))

export const clients = await client.request(readItems('Clientes'))

export const partners = await client.request(readItems('Partners'))
