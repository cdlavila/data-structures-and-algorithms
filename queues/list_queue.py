# Python program to demonstrate queue implementation using list

# Initializing a queue
list_queue = []

# Adding elements to the queue
list_queue.append('a')
list_queue.append('b')
list_queue.append('c')

print("Initial queue")
print(list_queue)

# pop(0) function to remove element from the queue in FIFO order
print("\nElements dequeued from queue")
print(list_queue.pop(0))
print(list_queue.pop(0))
print(list_queue.pop(0))

print("\nQueue after removing elements")
print(list_queue)

# Uncommenting print(queue.pop(0)) will raise and IndexError as the queue is now empty
