"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play } from "lucide-react";

export default function CodeEditor() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const languages = [
    { id: "javascript", name: "JavaScript" },
    { id: "python", name: "Python" },
    { id: "java", name: "Java" },
    { id: "cpp", name: "C++" },
  ];

  const handleRunCode = async () => {
    // Implement code execution logic here
    // This is a mock implementation
    setOutput("Running code...\nOutput will appear here");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.id} value={lang.id}>
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleRunCode}>
          <Play className="mr-2 h-4 w-4" />
          Run Code
        </Button>
      </div>

      <div className="min-h-[400px] rounded-lg border bg-muted">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-[300px] p-4 font-mono text-sm bg-transparent resize-none focus:outline-none"
          placeholder="Write your code here..."
        />
        <div className="border-t">
          <pre className="p-4 font-mono text-sm whitespace-pre-wrap">{output}</pre>
        </div>
      </div>
    </div>
  );
}