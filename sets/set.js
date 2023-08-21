// Creating a set in JavaScript
const mySet = new Set([1, 2, 3, 4, 5]);

// Adding elements to the set
mySet.add(6);
mySet.add(7);

// Deleting an element from the set
mySet.delete(3);

// Checking if an element is in the set
console.log(mySet.has(2));  // Output: true
console.log(mySet.has(8));  // Output: false

// Console logging the set
console.log(mySet);  // Output: Set { 1, 2, 4, 5, 6, 7 }

// Getting the size of the set
console.log(mySet.size);  // Output: 6

// Creating sets for set operations
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

// Union of sets
const unionResult = new Set([...set1, ...set2]);
console.log("Union:", unionResult);  // Output: Set { 1, 2, 3, 4, 5, 6, 7, 8 }

// Intersection of sets
const intersectionResult = new Set([...set1].filter(x => set2.has(x)));
console.log("Intersection:", intersectionResult);  // Output: Set { 4, 5 }

// Difference between sets
const differenceResult1 = new Set([...set1].filter(x => !set2.has(x)));
console.log("Difference (set1 - set2):", differenceResult1);  // Output: Set { 1, 2, 3 }

const differenceResult2 = new Set([...set2].filter(x => !set1.has(x)));
console.log("Difference (set2 - set1):", differenceResult2);  // Output: Set { 6, 7, 8 }
