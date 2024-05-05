// https://leetcode.com/problems/remove-duplicates-from-sorted-array
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0
    }
    let counter = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[counter] = nums[i]
            counter++
        }
    }
    return counter
};
