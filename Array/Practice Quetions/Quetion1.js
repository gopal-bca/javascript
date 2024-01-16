//For a given array with marks of student -> [85 , 97 , 44 , 37 ,76 , 60] Find the average marks of the entire class.

// My soution
// let marks = [85 , 97 , 44 , 37 ,76 , 60];
// let sum = marks[0]
// for(i = 1 ; i < marks.length ; i++) {
//     sum = sum + marks[i];
// }
// let avg = sum/6;
// console.log("Average =",avg);

//Sution by Apna Collage

let marks = [85 , 97 , 44 , 37 , 76 , 60];
let sum = 0 ;
for (let val of marks) {
    sum +=val;
}
let avg = sum / marks.length;
console.log(`avg marks of the clss = ${avg}`);

