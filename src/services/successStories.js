import { client } from '@/lib/resend'
import { readSingleton, readItems } from '@directus/sdk'

export const successStoryLanding = await client.request(readSingleton('Landing_casos'))

export const successStories = await client.request(readItems('Casos'))

export const successStoryByName = (slug) => client.request(readItems('Casos',
  {
    fields: ['*'],
    filter: { slug }
  }
))

export const getSuccessStoriesByIds = (ids) => client.request(readItems('Casos',
  {
    fields: ['*'],
    filter: { id: { _in: ids } }
  }
))
