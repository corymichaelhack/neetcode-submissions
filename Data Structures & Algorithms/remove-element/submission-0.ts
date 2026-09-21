class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let countOfNonDuplicateValues = 0

        for(let i = 0; i < nums.length; i++){
            if (nums[i] === val) {
                nums[i] = null
            } else {
                countOfNonDuplicateValues += 1
            }
        }
         nums.sort()

        return countOfNonDuplicateValues
    }
}
