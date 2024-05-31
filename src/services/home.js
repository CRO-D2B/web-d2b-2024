import { createDirectus, authentication, rest, readItems, readSingleton } from '@directus/sdk'

const { DIRECTUS_URL, DIRECTUS_USER, DIRECTUS_PASSWORD } = import.meta.env

// Directus SDK configuration
const client = createDirectus(DIRECTUS_URL).with(authentication()).with(rest())
await client.login(DIRECTUS_USER, DIRECTUS_PASSWORD)

export const homeData = await client.request(readSingleton('Home'))

export const servicesResume = await client.request(readItems('Servicios'))

export const valueProposition = await client.request(readItems('Propuesta_de_valor'))

export const clients = await client.request(readItems('Clientes'))

export const partners = await client.request(readItems('Partners'))
