export const isDev = import.meta.env.DEV
export const isProd = import.meta.env.PROD

export const wordCounter = (text) => {
  return text.split(' ').length
}
