export default function cleanSet(set, startString) {
  const strings = [];
  for (const item of set) {
    if (item.startsWith(startString) && startString.length > 0) {
      strings.push(item.slice(startString.length, item.length));
    }
  }
  return strings.join('-');
}
