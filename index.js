books = [
    {
        title: "Eloquent JavaScript: A Modern Introduction to Programming",
        price: 10.00,
        inventory: 10,
    },
    {
        title: "JavaScript & JQuery: Interactive Front-End Web Development",
        price: 45.59,
        inventory: 2,
    },
    {
        title: "JavaScript: The Good Parts",
        price: 36.05,
        inventory: 8,
    },
    {
        title: "JavaScript: The Definitive Guide",
        price: 25.99,
        inventory: 0,
    },
    {
        title: "You don\'t know JS",
        price: 6.25,
        inventory: 7,
    },
];

//Return an array of title.
//Loop through array.
//For every item in the array update/change/transform that item without mutating the original array.
//Make a new array to hold the updated/changed/transformed items.

// function loopAndUpdate(array, updaterFoo){
//     const updatedArray = [];
//     for(item of array){
//        // console.log(array);
//        // console.log(updatedArray);
//         updatedArray.push(updaterFoo(item));
//     }
//     return updatedArray;
// }

//Return array of title
const title = books.map(item => 
   // console.log(item)
     item.title
);
//Return array of prices
function pricesFoo(item){
    console.log("Inside of pricesFoo", item)
    return item.price;
}
const prices = books.map(pricesFoo);

//Return array of inventory

const inventory = books.map(item => item.inventory);
// function inventory(item){
//     return item.inventory;
// }

//Return array of books 50% off.

// const halfOff = books.map(item => {
//     let itemCopy = Object.assign({}, item);
//     item.price = Math.floor(itemCopy.price / 2);
//     return itemCopy;
// });

function halfOffFoo(item){
    let itemCopy =  Object.assign({}, item);
    itemCopy.price = Math.floor(itemCopy.price/2);
    return itemCopy;
}
const halfOff = books.map(halfOffFoo);