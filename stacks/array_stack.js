// Initializing a stack using an array
const arrayStack = [];

// push() function to push element onto the stack
arrayStack.push('a');
arrayStack.push('b');
arrayStack.push('c');

console.log('Initial stack');
console.log(arrayStack);

// pop() function to pop element from the stack in LIFO order
console.log('\nElements popped from stack:');
console.log(arrayStack.pop());
console.log(arrayStack.pop());
console.log(arrayStack.pop());

console.log('\nStack after elements are popped:');
console.log(arrayStack);

// Uncommenting arrayStack.pop() will cause an IndexError as the stack is now empty
