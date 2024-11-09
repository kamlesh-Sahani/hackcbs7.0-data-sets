"use client";

import { Card } from "@/components/ui/card";

interface ProblemDescriptionProps {
  problemId: string;
}

export default function ProblemDescription({ problemId }: ProblemDescriptionProps) {
  // Mock data - replace with actual problem descriptions from your database
  const problems = {
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
    // Add more problems here
  };

  const problem = problems[problemId as keyof typeof problems];

  if (!problem) return null;

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-semibold">{problem.title}</h3>
      <div className="space-y-4">
        <div className="prose dark:prose-invert">
          <pre className="whitespace-pre-wrap font-mono text-sm bg-muted p-4 rounded-lg">
            {problem.description}
          </pre>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Examples:</h4>
          {problem.examples.map((example, index) => (
            <div key={index} className="space-y-1">
              <p className="text-sm font-mono">Input: {example.input}</p>
              <p className="text-sm font-mono">Output: {example.output}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}