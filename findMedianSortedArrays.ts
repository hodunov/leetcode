function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const sortedArray = [...nums1, ...nums2].sort((n1, n2) => n1 - n2);
    const arrayLength = sortedArray.length;
    if (arrayLength % 2 === 0) {
        return (sortedArray[arrayLength / 2 - 1] + sortedArray[arrayLength / 2]) / 2;
    }
    return sortedArray[Math.floor(arrayLength / 2)];
};
