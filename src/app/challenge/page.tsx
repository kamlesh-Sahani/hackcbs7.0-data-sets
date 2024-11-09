"use client";

import { useState } from "react";
import ProblemDescription from "@/components/challenges/ProblemDescription";
import CodeEditor from "@/components/challenges/CodeEditor";
import Timer from "@/components/challenges/Timer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Code2, Rocket } from "lucide-react";

export default function ChallengesPage() {
  const [selectedProblem, setSelectedProblem] = useState("");
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const problems = [
    { id: "1", title: "Two Sum", difficulty: "Easy", timeLimit: 30 },
    { id: "2", title: "Valid Parentheses", difficulty: "Medium", timeLimit: 45 },
    { id: "3", title: "Merge K Sorted Lists", difficulty: "Hard", timeLimit: 60 },
  ];

  const handleStartChallenge = () => {
    if (!selectedProblem) return;
    setIsTimerRunning(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Coding Challenges</h1>
            <p className="text-muted-foreground">
              Select a problem and start coding against the clock
            </p>
          </div>
          {!isTimerRunning && (
            <Button onClick={handleStartChallenge} disabled={!selectedProblem}>
              <Rocket className="mr-2 h-4 w-4" />
              Start Challenge
            </Button>
          )}
        </div>

        {!isTimerRunning ? (
          <div className="max-w-md">
            <Select value={selectedProblem} onValueChange={setSelectedProblem}>
              <SelectTrigger>
                <SelectValue placeholder="Select a problem" />
              </SelectTrigger>
              <SelectContent>
                {problems.map((problem) => (
                  <SelectItem key={problem.id} value={problem.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{problem.title}</span>
                      <span className={`text-sm ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Code2 className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Problem Description</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <Timer
                    duration={problems.find(p => p.id === selectedProblem)?.timeLimit || 30}
                    onTimeUp={() => setIsTimerRunning(false)}
                  />
                </div>
              </div>
              <ProblemDescription problemId={selectedProblem} />
            </div>
            <div>
              <CodeEditor />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function getDifficultyColor(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "text-green-500";
    case "medium":
      return "text-yellow-500";
    case "hard":
      return "text-red-500";
    default:
      return "";
  }
}