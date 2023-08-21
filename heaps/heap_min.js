const Heap = require('heap');

// Creating a min heap
const minHeap = new Heap();

// Adding elements to the min heap
minHeap.push(5);
minHeap.push(3);
minHeap.push(8);
minHeap.push(1);

console.log("Min Heap:");
console.log(minHeap.toArray()); // toArray() converts the heap to an array

// Popping elements from the min heap
console.log("Elements popped from min heap:");
console.log(minHeap.pop());
console.log(minHeap.pop());
console.log(minHeap.pop());

console.log("Min Heap after popping:");
console.log(minHeap.toArray());
