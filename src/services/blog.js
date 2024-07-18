import { client } from '@/lib/resend'
import { readSingleton } from '@directus/sdk'

const { WP_API_URL } = import.meta.env

export const blogPage = await client.request(readSingleton('Blog'))

export const getCategories = async () => {
  const endpoint = '/categories'
  const params = '_fields=id,name,slug'
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export const getCategoryInfo = async ({ categorySlug }) => {
  const endpoint = '/categories'
  const params = `slug=${categorySlug}`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data[0]
}

export const getPosts = async () => {
  const endpoint = '/posts'
  const params = '_embed&_fields=title,excerpt,content,slug,_links&per_page=6'
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export const getPostBySlug = async ({ postSlug }) => {
  const endpoint = '/posts'
  const params = `_embed&_fields=title,_links,content,yoast_head_json&slug=${postSlug}`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data[0]
}

export const getPostsByCategoryId = async ({ id }) => {
  const endpoint = '/posts'
  const params = `_embed&categories=${id}&per_page=100`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export const getPostsByUserId = async ({ id }) => {
  const endpoint = '/posts'
  const params = `_embed&author=${id}&per_page=100`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export const getUserBySlug = async ({ userSlug }) => {
  const endpoint = '/users'
  const params = `slug=${userSlug}`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data[0]
}

const buildUrl = ({ endpoint, params = '' }) => {
  return `${WP_API_URL}${endpoint}?${params}`
}
