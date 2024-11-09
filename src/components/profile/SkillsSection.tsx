"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { userData } from "@/lib/data";
import { Button } from "../ui/button";
export default function SkillsSection() {
  const skills = userData.skills;
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills & Technologies</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Button key={index} className="text-sm px-4 bg-[#2187e64d] text-black font-semibold hover:bg-[#2187e62f]">
              {skill}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}