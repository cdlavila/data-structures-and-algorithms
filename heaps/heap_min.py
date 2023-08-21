import heapq

# Creating a min heap
min_heap = []

# Adding elements to the min heap
heapq.heappush(min_heap, 5)
heapq.heappush(min_heap, 3)
heapq.heappush(min_heap, 8)
heapq.heappush(min_heap, 1)

# You can use heapify to convert a list into a heap in O(n) time
# min_heap = [5, 3, 8, 1]
# heapq.heapify(min_heap)

print("Min Heap:")
print(min_heap)

# Popping elements from the min heap
print("Elements popped from min heap:")
print(heapq.heappop(min_heap))
print(heapq.heappop(min_heap))
print(heapq.heappop(min_heap))

print("Min Heap after popping:")
print(min_heap)
