# Python program to demonstrate stack implementation using list

# Initializing a stack
list_stack = []

# append() function to push element in the stack
list_stack.append('a')
list_stack.append('b')
list_stack.append('c')

print('Initial stack')
print(list_stack)

# pop() function to pop element from stack in LIFO order
print('\nElements popped from stack:')
print(list_stack.pop())
print(list_stack.pop())
print(list_stack.pop())

print('\nStack after elements are popped:')
print(list_stack)

# uncommenting print(stack.pop()) will cause an IndexError as the stack is now empty
