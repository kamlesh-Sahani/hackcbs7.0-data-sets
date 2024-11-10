"use client";
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileStats from '@/components/profile/ProfileStats';
import DeploymentHistory from '@/components/profile/DeploymentHistory';
import SkillsSection from '@/components/profile/SkillsSection';

import { auth  } from '@/auth';
import { redirect } from 'next/navigation';
export default async function ProfilePage() {
  const session=await auth();
  if (!session) {
    redirect("/login");
    return null;
  }
  return (
    <div className="">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
        <ProfileHeader />
        <ProfileStats />
        <DeploymentHistory />
        <SkillsSection />
      </div>
    </div>
  );
}