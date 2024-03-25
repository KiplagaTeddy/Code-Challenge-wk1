function speedDetector(speed) {
// Check speed limit
if (speed <= 70) {
    return ("Ok");
}  else {
// Calculate demerit points
points=Math.floor((speed - 70) / 5)
// Suspend license if points exceed 12
if (points > 12) {
    return ("License suspended");
} 
// Otherwise print total number of demerit points
else {
    return ("Points:", points);
    }
}
}