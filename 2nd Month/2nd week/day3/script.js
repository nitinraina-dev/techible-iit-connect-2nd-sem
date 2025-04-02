const cart = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 600 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 },
    { name: "Headphones", price: 75 },
];

// Step 1: Filter items that cost more than $50
let callback = (curr) => {
    if (curr.price > 50) {
        return true;
    } else {
        return false;
    }
}

let expensiveItems = cart.filter((item)=>{
    return item.price>50;
});


console.log("Expensive Items:", expensiveItems);

// Step 2: Reduce to find total price of expensive items
const totalCost = expensiveItems.reduce((sum, item) => sum + item.price, 0);


sum =0+800;
sum=800+600;
sum=1400+75;
sum=1475;


console.log("Total Cost of Expensive Items:", totalCost);



// The reduce method in JavaScript is used to accumulate a value by iterating over an array and applying a reducer function to each element. It reduces the array to a single value (such as a sum, product, average, or even a complex object).

array.reduce((accumulator, currentValue) => { /* logic */ }, initialValue);
