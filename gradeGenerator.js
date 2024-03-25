// prompt user to enter marks
const { Console } = require("console");
const readline= require ("readline");
   const rl = readline.createInterface ({
     input: process.stdin,
     output: process.stdout
   });

function studentGrade(marks) {
// Determine the grade using if-else statements
let grade;
if (marks >= 80) {
    grade = "A";
}
else if (marks >= 60) {
    grade = "B";
} 
else if (marks >= 49) {
    grade = "C";
}
else if (marks >= 40) {
    grade = "D";
} 
else {
    grade = "E";
    }
// Display the grade
return (grade);
  }

// Call the function and display the grade
rl.question("Enter student marks (Between 0 and 100):",(marks)=>{
  const Grade = studentGrade(parseInt(marks));
  console.log (`The student's grade is: ${Grade}`)
  rl.close();
});

  