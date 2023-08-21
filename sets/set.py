# Creating a set in Python
my_set = {1, 2, 3, 4, 5}

# Adding elements to the set
my_set.add(6)
my_set.add(7)

# Removing an element from the set
my_set.remove(3)

# Checking if an element is in the set
print(2 in my_set)  # Output: True
print(8 in my_set)  # Output: False

# Printing the set
print(my_set)  # Output: {1, 2, 4, 5, 6, 7}

# Getting the length of the set
print(len(my_set))  # Output: 6

# Creating sets for set operations
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Union of sets
union_result = set1.union(set2)
print("Union:", union_result)  # Output: {1, 2, 3, 4, 5, 6, 7, 8}

# Intersection of sets
intersection_result = set1.intersection(set2)
print("Intersection:", intersection_result)  # Output: {4, 5}

# Difference between sets
difference_result = set1.difference(set2)
print("Difference (set1 - set2):", difference_result)  # Output: {1, 2, 3}

difference_result = set2.difference(set1)
print("Difference (set2 - set1):", difference_result)  # Output: {8, 6, 7}

