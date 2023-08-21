const Heap = require('heap');

// Creating a max heap using the negation trick
const maxHeap = new Heap();

// Adding elements to the max heap (multiplying by -1)
maxHeap.push(-5);
maxHeap.push(-3);
maxHeap.push(-8);
maxHeap.push(-1);

console.log("Max Heap (negated values):");
console.log(maxHeap.toArray().map(value => -value)); // Display negated values

// Popping elements from the max heap (multiplying by -1)
console.log("Elements popped from max heap:");
console.log(-maxHeap.pop());
console.log(-maxHeap.pop());
console.log(-maxHeap.pop());

console.log("Max Heap after popping:");
console.log(maxHeap.toArray().map(value => -value)); // Display negated values

