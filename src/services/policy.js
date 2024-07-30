import { client } from '@/lib/resend'
import { readSingleton } from '@directus/sdk'

export const policyLanding = await client.request(readSingleton('Landing_politicas'))

export const legalLanding = await client.request(readSingleton('Landing_avisos_legales'))
