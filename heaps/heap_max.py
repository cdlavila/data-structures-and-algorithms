import heapq

# Creating a max heap using the negation trick
max_heap = []

# Adding elements to the max heap
heapq.heappush(max_heap, -5)
heapq.heappush(max_heap, -3)
heapq.heappush(max_heap, -8)
heapq.heappush(max_heap, -1)

# Convert the list into a max heap using heapify
# max_heap = [-5, -3, -8, -1]
# heapq.heapify(max_heap)

print("Max Heap:")
print([-x for x in max_heap])
# print(max_heap) # [-8, -5, -3, -1]

# Popping elements from the max heap
print("Elements popped from max heap:")
print(-heapq.heappop(max_heap))
print(-heapq.heappop(max_heap))
print(-heapq.heappop(max_heap))

print("Max Heap after popping:")
print([-x for x in max_heap])
