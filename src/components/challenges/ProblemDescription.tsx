"use client";

import { Card } from "@/components/ui/card";
import { problemDescription } from "@/lib/problemDescri[tion";
interface ProblemDescriptionProps {
  problemId: string;
}

export default function ProblemDescription({ problemId }: ProblemDescriptionProps) {
  // Mock data - replace with actual problem descriptions from your database



  const problem = problemDescription[problemId as keyof typeof problemDescription];

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