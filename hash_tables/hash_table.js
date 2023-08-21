// Creating a hash table using objects
const hashTable = {};

// Adding values to the hash table
hashTable['key1'] = 'value1';
hashTable['key2'] = 'value2';
hashTable['key3'] = 'value3';

// Retrieving values from the hash table
console.log(hashTable['key1']);  // Output: value1
console.log(hashTable['key2']);  // Output: value2

// Deleting a key from the hash table
delete hashTable['key3'];

// Checking if a key exists
console.log('key3' in hashTable);  // Output: false
