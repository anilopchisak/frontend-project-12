import filter from 'leo-profanity'

filter.loadDictionary('en')
filter.loadDictionary('ru')

export const cleanText = (text) => {
  if (typeof text !== 'string') return text
  return filter.clean(text)
}
