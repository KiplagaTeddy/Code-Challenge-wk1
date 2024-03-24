function speedDetector(speed) {
// Allow speed less than 70
if (speed <= 70) {
    return ("Ok");
}   
// Calculate demerit points
const points = Math.floor((speed - 70) / 5);   
// Suspend license if points exceed 12
if (points > 12) {
    return ("License suspended");
} 
// Otherwise print total number of demerit points
else {
    return ("Points:", points);
    }
}
   