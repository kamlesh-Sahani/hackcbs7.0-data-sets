export const problemDescription = {
    "1": {
      title: "Two Sum",
      description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  
  Example:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`,
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
        },
        {
          input: "nums = [3,2,4], target = 6",
          output: "[1,2]",
        },
      ],
    },
    "2": {
      title: "Valid Parentheses",
      description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
  
  An input string is valid if:
  1. Open brackets must be closed by the same type of brackets.
  2. Open brackets must be closed in the correct order.
  
  Example:
  Input: s = "()[]{}"
  Output: true
  Explanation: The parentheses are correctly matched.`,
      examples: [
        {
          input: "s = '()[]{}'",
          output: "true",
        },
        {
          input: "s = '([)]'",
          output: "false",
        },
      ],
    },
    "3": {
      title: "Merge K Sorted Lists",
      description: `Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
  
  Example:
  Input: lists = [[1,4,5],[1,3,4],[2,6]]
  Output: [1,1,2,3,4,4,5,6]
  Explanation: The merged list is [1,1,2,3,4,4,5,6].`,
      examples: [
        {
          input: "lists = [[1,4,5],[1,3,4],[2,6]]",
          output: "[1,1,2,3,4,4,5,6]",
        },
        {
          input: "lists = [[1,2,3],[4,5,6]]",
          output: "[1,2,3,4,5,6]",
        },
      ],
    },
    "4": {
      title: "Longest Substring Without Repeating Characters",
      description: `Given a string s, find the length of the longest substring without repeating characters.
  
  Example:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.`,
      examples: [
        {
          input: "s = 'abcabcbb'",
          output: "3",
        },
        {
          input: "s = 'bbbbb'",
          output: "1",
        },
      ],
    },
    "5": {
      title: "Reverse Integer",
      description: `Given a 32-bit signed integer, reverse digits of an integer.
  
  Example:
  Input: x = 123
  Output: 321`,
      examples: [
        {
          input: "x = 123",
          output: "321",
        },
        {
          input: "x = -123",
          output: "-321",
        },
      ],
    },
    "6": {
      title: "3Sum",
      description: `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
  
  Example:
  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]`,
      examples: [
        {
          input: "nums = [-1,0,1,2,-1,-4]",
          output: "[[-1,-1,2],[-1,0,1]]",
        },
        {
          input: "nums = [0,0,0]",
          output: "[[0,0,0]]",
        },
      ],
    },
    "7": {
      title: "Max Subarray Sum",
      description: `Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
  
  Example:
  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: The subarray [4,-1,2,1] has the largest sum = 6.`,
      examples: [
        {
          input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
          output: "6",
        },
        {
          input: "nums = [1,2,3,4]",
          output: "10",
        },
      ],
    },
    "8": {
      title: "Add Two Numbers",
      description: `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
  
  Example:
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.`,
      examples: [
        {
          input: "l1 = [2,4,3], l2 = [5,6,4]",
          output: "[7,0,8]",
        },
        {
          input: "l1 = [1,0,0,0,0,0], l2 = [9,9,9,9]",
          output: "[0,0,0,0,0,1]",
        },
      ],
    },
    "9": {
      title: "Container With Most Water",
      description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water.
  
  Example:
  Input: height = [1,8,6,2,5,4,8,3,7]
  Output: 49
  Explanation: The max water container is between lines 1 and 8, which contain 49 units of water.`,
      examples: [
        {
          input: "height = [1,8,6,2,5,4,8,3,7]",
          output: "49",
        },
        {
          input: "height = [1,1]",
          output: "1",
        },
      ],
    },
    "10": {
      title: "Find Peak Element",
      description: `A peak element in an array is an element that is strictly greater than its neighbors. Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
  
  Example:
  Input: nums = [1,2,3,1]
  Output: 2
  Explanation: 3 is a peak element and your function should return its index 2.`,
      examples: [
        {
          input: "nums = [1,2,3,1]",
          output: "2",
        },
        {
          input: "nums = [1,2,1,3,5,6,4]",
          output: "5",
        },
      ],
    },

  
};