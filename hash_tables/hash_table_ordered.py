from collections import OrderedDict

# Creating an ordered hash table using OrderedDict
ordered_hash_table = OrderedDict()

# Adding key-value pairs to the hash table
ordered_hash_table['key1'] = 'value1'
ordered_hash_table['key2'] = 'value2'
ordered_hash_table['key3'] = 'value3'

# Retrieving values from the hash table
print(ordered_hash_table['key1'])  # Output: value1
print(ordered_hash_table['key2'])  # Output: value2

# Deleting a key from the hash table
del ordered_hash_table['key3']

# Checking if a key exists
print('key3' in ordered_hash_table)  # Output: False
