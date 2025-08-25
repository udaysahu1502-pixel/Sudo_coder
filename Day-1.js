const student = {
  name: "Anita",
  age: 17,
  grade: "12th",
  roll: 23,
};
for (let [keys, val] of Object.entries(student)) {
  console.log(keys, " = ", val);
}
