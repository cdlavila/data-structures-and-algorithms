"""
Given two lists of integers nums1 and nums2, each sorted in ascending order, and two integers m and n,
representing the amount of elements in nums1 and nums2 respectively.

Combining nums1 and nums2 into a single array sorted in ascending order.

For this purpose, nums1 has a length of m + n, where the first m elements denote the elements to be combined,
and the last n elements areO and should be ignored.
"""

# T = O(n + m), S = O(1)
def merge_lists(nums1, m, nums2, n):
   # Tu código aquí 👇
   list_sorted_up_to = m + n - 1
   nums1_sorted_up_to = m - 1
   nums2_sorted_up_to = n - 1

   while 0 <= nums1_sorted_up_to and 0 <= nums2_sorted_up_to:
       if nums1[nums1_sorted_up_to] >= nums2[nums2_sorted_up_to]:
          nums1[list_sorted_up_to] = nums1[nums1_sorted_up_to]
          nums1_sorted_up_to -= 1
       else:
          nums1[list_sorted_up_to] = nums2[nums2_sorted_up_to]
          nums2_sorted_up_to -= 1

       list_sorted_up_to -= 1

   if n != m:
      nums1[:nums1_sorted_up_to + 1] = nums2[:nums2_sorted_up_to + 1]

   return nums1

# Test 1
nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
response = merge_lists(nums1, m, nums2, n)
print(response)

# Test 2
nums1 = [1,2,3,0,0,0,0]
m = 3
nums2 = [-4,2,3,9]
n = 4
response = merge_lists(nums1, m, nums2, n)
print(response)
