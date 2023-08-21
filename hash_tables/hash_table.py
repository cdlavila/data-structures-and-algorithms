# Creating a hash table using dictionaries (objects)
hash_table = {}

# Adding values to the hash table
hash_table['key1'] = 'value1'
hash_table['key2'] = 'value2'
hash_table['key3'] = 'value3'

# Retrieving values from the hash table
print(hash_table['key1'])  # Output: value1
print(hash_table['key2'])  # Output: value2

# Deleting a key from the hash table
del hash_table['key3']

# Checking if a key exists
print('key3' in hash_table)  # Output: False
