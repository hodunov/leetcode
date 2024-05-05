from typing import List


class Solution:
    """
    https://leetcode.com/problems/remove-duplicates-from-sorted-array/
    """
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        left = 1
        for right in range(1, len(nums)):
            if nums[right] != nums[right - 1]:
                nums[left] = nums[right]
                left += 1
        return left
