export const GROUP_META = [
  { key: 'greentech', label: 'Green tech', styleClass: 'greentech' },
  { key: 'healthtech', label: 'AI transformation', styleClass: 'healthtech' }
]

export const ACTIVE_GROUP_KEYS = GROUP_META.map((group) => group.key)

export const GROUP_SIGNUP_URLS = {
  greentech: 'https://seminars.tca.org.tw/D10v00156.aspx',
  healthtech: 'https://seminars.tca.org.tw/D10v00156.aspx'
}

export function normalizeGroup(group) {
  return ACTIVE_GROUP_KEYS.includes(group) ? group : 'greentech'
}
