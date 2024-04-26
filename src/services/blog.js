const WP_API_URL = 'https://d2b.cl/blog/wp-json/wp/v2'

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
  const params = '_fields=title,excerpt,slug,yoast_head_json&per_page=6'
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data
}
export const getPostBySlug = async ({ postSlug }) => {
  const endpoint = '/posts'
  const params = `slug=${postSlug}`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data[0]
}
export const getPostsByCategoryId = async ({ id }) => {
  const endpoint = '/posts'
  const params = `categories=${id}&per_page=100`
  const url = buildUrl({ endpoint, params })
  const res = await fetch(url)
  const data = await res.json()
  return data
}

const buildUrl = ({ endpoint, params = '' }) => {
  return `${WP_API_URL}${endpoint}?${params}`
}
