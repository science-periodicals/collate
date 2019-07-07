export function toIndexableString(list = []) {
  return list.join('::');
}

export function parseIndexableString(str = '') {
  return str.split('::');
}
