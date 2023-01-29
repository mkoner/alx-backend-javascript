export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    let position = 0;
    array[position] = appendString + idx;
    position += 1;
  }

  return array;
}
