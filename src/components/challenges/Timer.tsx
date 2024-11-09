"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
}

export default function Timer({ duration, onTimeUp }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Convert minutes to seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Badge variant={timeLeft < 60 ? "destructive" : "secondary"}>
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </Badge>
  );
}