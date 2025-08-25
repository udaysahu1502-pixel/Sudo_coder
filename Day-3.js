const student = {
  name: "Rahul",
  marks: {
    math: 85,
    science: 90,
    english: 78,
    history: 88,
  },
};
const marksArray = Object.values(student.marks);
const total = marksArray.reduce((acc, mark) => {
  return acc + mark;
});
const average = total / marksArray.length;
console.log(`Student: ${student.name}`);
console.log(`Total Marks: ${total}`);
console.log(`Percentage: ${average}%`);
