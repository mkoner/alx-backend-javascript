export default function cleanSet(set, startString) {
  if (typeof (startString) !== 'string') return null;
  const strings = [];
  for (const item of set) {
    if (typeof (item) !== 'string') return null;
    if (item.startsWith(startString) && startString.length > 0) {
      strings.push(item.slice(startString.length, item.length));
    }
  }
  return strings.join('-');
}
