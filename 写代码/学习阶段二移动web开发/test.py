class Solution:
    def removeDuplicates(self, nums) -> int:
        a = 0
        b = 1
        while b < len(nums):
            if nums[b] == nums[a]:
                b += 1
            else:
                a += 1
                nums[a] = nums[b]
        nums = nums[:a+1]
        return a+1


if __name__ == "__main__":
    s = Solution()
    result = s.removeDuplicates([1, 1, 2, 2, 3, 3, 3, 4])
    print(result)
