//  Q no 55

let numbers :number[] =[1,2,3,4,5]

let doubledNumbers =numbers.map(number => number * 2);
console.log(doubledNumbers);

//  Q no 56

let mixedArray =[1,"Apple",2,"Mango",3,"Banana"]
 
let strigsArray =mixedArray.filter(item => typeof item === "string")
console.log(strigsArray);

//  Q no 57 
let grades :number[] =[86,67,79,92,65,75]

let averageGrade =grades.reduce((total,grade) => total + grade,0)/ grades.length
console.log(averageGrade);

