//For a given array with prices of 5 -> [250,645,300,900,50]. All item have an offer 10%OFF on them. Change the array to store final price after applaying off.

//My solution
// let prices = [ 250, 650 , 645 , 300 , 900 , 50];
// for(price of prices) {
//     console.log("Final price =",price - price*(10/100));
// }

// solution by Sk

let items = [ 250, 650 , 645 , 300 , 900 , 50];
let i = 0
for(let val of items) {
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value afer offer = ${items[i]}`);
    i++;
}

