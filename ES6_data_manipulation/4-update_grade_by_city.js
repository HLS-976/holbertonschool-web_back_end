export default function updateStudentGradeByCity(arrayStudents, location, arrayGrades) {
  if (!(arrayStudents instanceof Array)) {
    return [];
  }
  return arrayStudents
    .filter((student) => student.location === location)
    .map((student) => {
      const gradeObj = arrayGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
