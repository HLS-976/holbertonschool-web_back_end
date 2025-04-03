export default function updateUniqueItems(mapArray) {
  if (!(mapArray instanceof Map)) {
    throw TypeError('Cannot process');
  }
  for (const [key, value] of mapArray) {
    if (value === 1) {
      mapArray.set(key, 100);
    }
  }
}
