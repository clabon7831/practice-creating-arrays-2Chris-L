// Task 1: Initialize the Array
const arr1 = new Array(7).fill("Hello");
console.log("Task 1:", arr1);

// Task 2: Update part of the array
arr1.fill("Hi", 2, 5); // changes index 2,3,4
console.log("Task 2:", arr1);

// Task 3: Populate with a for loop
const arr2 = new Array(5);

for (let i = 0; i < arr2.length; i++) {
    arr2[i] = i * 10;
}

console.log("Task 3:", arr2);