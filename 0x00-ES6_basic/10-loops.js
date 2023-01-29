export default function appendToEachArrayValue(array, appendString) {
  const modifiedArray = [];
  for (const idx of array) {
    modifiedArray.push(appendString + idx);
  }

  return modifiedArray;
}
