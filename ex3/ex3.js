let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let salary in salaries) {
  if (salaries.hasOwnProperty(salary)) {
    sum += salaries[salary];
  } else {
    console.log(0);
  }
}
console.log(sum);
