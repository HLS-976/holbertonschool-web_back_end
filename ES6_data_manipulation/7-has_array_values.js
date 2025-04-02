export default function hasValuesFromArray(setArray, array) {
  return array.every((value) => setArray.has(value));
}
