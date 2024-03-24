function calculateGrade() {
 // Get user to input marks
let marks = prompt("Enter student marks (0-100): ");
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
return ("Your grade is:", grade);
  }
  
  calculateGrade();
  