"""
Given the integer list nums, move all zeros to the end of the list,
maintaining the relative order of the non-null elements.

Challenge: reorder the values "in place", without making a copy of the list.
"""

# Time: O(n) | Space: O(1)
def move_zeros_to_the_end(nums):
    pointer1, pointer2 = 0, 1
    while pointer1 < len(nums) and pointer2 < len(nums):
        if nums[pointer1] == 0:
            if nums[pointer2] != 0:
                nums[pointer1], nums[pointer2] = nums[pointer2], nums[pointer1]
                pointer1 += 1
            pointer2 += 1
        else:
            pointer1 += 1
            pointer2 += 1
    return nums


print(move_zeros_to_the_end([0,1,0,3,12]))  # [1, 3, 12, 0, 0]