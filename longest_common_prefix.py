"""
https://leetcode.com/problems/longest-common-prefix/description/
"""

from typing import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix = strs[0]

        for word in strs[1:]:
            while not word[0 : len(prefix)].startswith(prefix):
                prefix = prefix[:-1]

        return prefix
