import { client } from '@/lib/resend'
import { readSingleton } from '@directus/sdk'

const { WP_API_URL } = import.meta.env

export const blogPage = await client.request(readSingleton('Blog'))

export const getCategories = async () => {
  const endpoint = '/categories'
  const params = '_fields=id,name,slug&per_page=100'
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data.filter(category => category.slug !== 'sin-categoria')
}

export const getCategoryInfo = async ({ categorySlug }) => {
  if (!categorySlug) return

  const endpoint = '/categories'
  const params = `_embed&_fields=id,name,description,yoast_head_json&slug=${categorySlug}`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data[0]
}

export const getPosts = async () => {
  const endpoint = '/posts'
  const params = '_fields=title,excerpt,content,slug&per_page=100'
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export const getPostBySlug = async ({ postSlug }) => {
  if (!postSlug) return

  const endpoint = '/posts'
  const params = `_embed&_fields=title,_links,content,yoast_head_json,_embedded&slug=${postSlug}`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data[0]
}

export const getPostsByCategoryId = async ({ id }) => {
  if (!id) return

  const endpoint = '/posts'
  const params = `_embed&categories=${id}&per_page=100`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export const getUsers = async () => {
  const endpoint = '/users'
  const params = '_fields=id,name,description,slug&per_page=100'
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export const getPostsByUserId = async ({ id }) => {
  if (!id) return

  const endpoint = '/posts'
  const params = `_embed&author=${id}&per_page=100`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export const getUserBySlug = async ({ userSlug }) => {
  if (!userSlug) return

  const endpoint = '/users'
  const params = `_embed&_fields=id,name,description,avatar_urls,yoast_head_json&slug=${userSlug}`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data[0]
}

const buildUrl = ({ endpoint, params = '' }) => {
  return `${WP_API_URL}${endpoint}?${params}`
}
