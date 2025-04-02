export default function getStudentsByLocation(array, location) {
  if (array instanceof Array) {
    return array.filter((obj) => obj.location === location);
  }
  return [];
}
