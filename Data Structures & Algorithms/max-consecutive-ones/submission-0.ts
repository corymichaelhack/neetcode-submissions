class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxCount = 0
        let currentCount = 0

        for (let i = 0; i < nums.length; i++){
            if (nums[i] === 1){
                currentCount += 1
            } else {
                currentCount = 0
            }
            
            if (currentCount > maxCount) {
                maxCount = currentCount
            }
        }
        return maxCount
    }
}