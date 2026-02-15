export const GROUP_META = [
  { key: 'greentech', label: 'GREEN TECH', styleClass: 'greentech' },
  { key: 'healthtech', label: 'HEALTH TECH', styleClass: 'healthtech' }
]

export const ACTIVE_GROUP_KEYS = GROUP_META.map((group) => group.key)

export const GROUP_SIGNUP_URLS = {
  greentech: 'https://seminars.tca.org.tw/D10v00082.aspx',
  healthtech: 'https://seminars.tca.org.tw/D10t00107.aspx'
}

export function normalizeGroup(group) {
  return ACTIVE_GROUP_KEYS.includes(group) ? group : 'greentech'
}
