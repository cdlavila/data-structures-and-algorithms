# Python program to demonstrate implementation of queue using queue module

from queue import Queue

# Initializing a queue
q = Queue(maxsize = 3)

# Adding of element to queue
q.put('a')
q.put('b')
q.put('c')

print("Initial queue")
print(q.queue)

# qsize() give the maxsize of the Queue and
# full() check if queue is full or not
# empty() check the Queue if empty
print("Full: ", q.full())
print("Size: ", q.qsize())
print("Empty: ", q.empty())

# get() fucntion to remove the element from queue in FIFO order
print("\nElements dequeued from the queue")
print(q.get())
print(q.get())
print(q.get())

print("\nQueue after removing elements")
print(q.queue)
print("Full: ", q.full())
print("Size: ", q.qsize())
print("Empty: ", q.empty())