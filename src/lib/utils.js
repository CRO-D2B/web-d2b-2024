export const isDev = import.meta.env.DEV
export const isProd = import.meta.env.PROD

export const getCaption = (post) => {
  const { caption } = post.yoast_head_json.schema['@graph'].filter(
    (item) => item['@type'] === 'ImageObject'
  )[0]
  return caption ?? `Imagen de ${post.title.rendered}`
}

export const getImgUrl = (post) => {
  const { url } = post.yoast_head_json.schema['@graph'].filter(
    (item) => item['@type'] === 'ImageObject'
  )[0]
  return url ?? post.yoast_head_json.og_image[0].url
}
export const getAutor = (json) => {
  const autor = json.schema['@graph'].filter(
    (item) => item['@type'] === 'Person'
  )[0]
  return autor
}

export const wordCounter = (text) => {
  return text.split(' ').length
}
