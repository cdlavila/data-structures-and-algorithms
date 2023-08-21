// Creating a hash table using Map
const hashTable = new Map();

// Adding key-value pairs to the hash table
hashTable.set('key1', 'value1');
hashTable.set('key2', 'value2');
hashTable.set('key3', 'value3');

// Retrieving values from the hash table
console.log(hashTable.get('key1'));  // Output: value1
console.log(hashTable.get('key2'));  // Output: value2

// Deleting a key from the hash table
hashTable.delete('key3');

// Checking if a key exists
console.log(hashTable.has('key3'));  // Output: false
