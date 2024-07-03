import { client } from '@/lib/resend'
import { readSingleton } from '@directus/sdk'

export const policyLanding = await client.request(readSingleton('Landing_politicas'))
