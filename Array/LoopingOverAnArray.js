let arr = [ 1, 2 , 33 , 5 , 66 , 57];


// //for loop
// for(let idx = 0 ; idx < arr.length ; idx++) {
//     console.log(arr[idx]);
// }

//for of
for(let marks of arr) {
    console.log(marks);
}

let cities = ["delhi" , "pune" , "mumbai" , "hyderabad" , "gurgain"];
for(let city of cities) {
    console.log(city);
}
for(let city of cities) {
    console.log(city.toUpperCase());
}