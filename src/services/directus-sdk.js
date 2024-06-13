import { createDirectus, authentication, rest } from '@directus/sdk'

const { DIRECTUS_URL } = import.meta.env

export const client = createDirectus(DIRECTUS_URL).with(authentication()).with(rest())
