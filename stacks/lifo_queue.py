# Python program to demonstrate stack implementation using queue module

from queue import LifoQueue

# Initializing a stack
stack = LifoQueue(maxsize=3)

# put() function to push element in the stack
stack.put('a')
stack.put('b')
stack.put('c')

print('Initial stack')
print(stack.queue)

# qsize() show the number of elements in the stack
# full() show if the stack is full or not
# empty() show if the stack is empty or not
print("Full: ", stack.full())
print("Size: ", stack.qsize())
print("Empty: ", stack.empty())

# get() function to pop element from stack in LIFO order
print('\nElements popped from the stack')
print(stack.get())
print(stack.get())
print(stack.get())

print('\nStack after elements are popped:')
print(stack.queue)
print("Full: ", stack.full())
print("Size: ", stack.qsize())
print("Empty: ", stack.empty())
