import filter from 'leo-profanity'

filter.loadDictionary('en')
filter.loadDictionary('ru')

filter.add([
  'boobs',
  'fuck',
  'shit',
  'bitch',
  'asshole',
  'bastard',
  'cunt',
  'dick',
  'pussy',
  'slut',
  'whore',
  'cock',
  'motherfucker',
  'fucker',
  'bullshit',
  'prick',
  'wanker',
  'twat',
  'douche',
  'crap',
  'arse',
  'nigger',
  'spic',
  'chink',
  'faggot',
])

export const cleanText = (text) => {
  if (typeof text !== 'string') return text
  return filter.clean(text)
}
