export default function getStudentIdsSum(array) {
  if (array instanceof Array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  }
  return 0;
}
