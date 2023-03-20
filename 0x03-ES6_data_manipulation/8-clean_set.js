export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const strings = [];
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString) && startString.length > 0) {
      strings.push(item.slice(startString.length, item.length));
    }
  }
  return strings.join('-');
}
