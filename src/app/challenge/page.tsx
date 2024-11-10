import ChallengesPage from "@/components/challenges/Challenge";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function MainChallengePage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
    return null;
  }

  return (
    <>
      <ChallengesPage />
    </>
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
