from typing import List


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = nums1 + nums2
        nums.sort()
        num_len = len(nums)
        median = num_len // 2
        if num_len % 2 == 0:
            return (nums[median - 1] + nums[median]) / 2
        return nums[median]
