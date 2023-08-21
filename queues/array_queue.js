// Initializing a queue using an array
const arrayQueue = [];

// Adding elements to the queue
arrayQueue.push('a');
arrayQueue.push('b');
arrayQueue.push('c');

console.log('Initial queue');
console.log(arrayQueue);

// shift() function to remove element from the queue in FIFO order
console.log('\nElements dequeued from queue');
console.log(arrayQueue.shift());
console.log(arrayQueue.shift());
console.log(arrayQueue.shift());

console.log('\nQueue after removing elements');
console.log(arrayQueue);

// Uncommenting arrayQueue.shift() will raise an IndexError as the queue is now empty
