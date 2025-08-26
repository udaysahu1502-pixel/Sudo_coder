const express = require("express");
const app = express();
const students = [
  { id: 1, name: "Amit", age: 20, grade: "A" },
  { id: 2, name: "Sneha", age: 22, grade: "B" },
  { id: 3, name: "Rahul", age: 19, grade: "A+" },
];
app.get("/", (req, res) => {
  res.json(students);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
