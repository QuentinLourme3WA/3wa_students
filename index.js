import chalk from "chalk";

const students = ["Marianne", "Jason", "Nathan", "Sofiane"];
const colors = [chalk.red, chalk.green, chalk.blue, chalk.yellow];

students.forEach((student, index) => {
  const color = colors[index % colors.length];
  console.log(color(student));
});
