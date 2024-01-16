// // for loop
// for(let i = 1; i <= 5; i++) {
//     console.log("here krishna");
// }

// //Calculate sum of 1 to 5 
//  let sum = 0;
// for(let i = 1; i<=5 ; i++) {
//     sum += i;
// }
// console.log("sum of 1 to 5 is ",sum);

// //While loop
// let i = 1;
// while(i <= 5) {
//     console.log(i)
//     i++;
// }

// //Do while loop
// let j = 1;
// do {
//     console.log("Radha krishna");
//     j++
// }
// while(j <=10);

// //For of loop
// let str = "Here krishna";
// let size = 0;
// for(let i of str) {
//     console.log("i =",i);
//     size++;
// }
// console.log("string size =",size);

//for in loop
let student = {
    name : "Rahul",
    age : 20,
    cgpa : 7.5,
    isPass : true
};
for(let key in student) {
    console.log("key=",key, "value=",student[key]);
}
