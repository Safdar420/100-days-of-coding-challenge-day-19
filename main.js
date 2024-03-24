//  Q no 55
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function (number) { return number * 2; });
console.log(doubledNumbers);
//  Q no 56
var mixedArray = [1, "Apple", 2, "Mango", 3, "Banana"];
var strigsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(strigsArray);
//  Q no 57 
var grades = [86, 67, 79, 92, 65, 75];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
