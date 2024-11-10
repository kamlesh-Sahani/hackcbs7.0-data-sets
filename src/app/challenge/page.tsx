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

