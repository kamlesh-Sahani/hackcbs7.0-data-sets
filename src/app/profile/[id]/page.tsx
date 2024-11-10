"use client";
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileStats from '@/components/profile/ProfileStats';
import DeploymentHistory from '@/components/profile/DeploymentHistory';
import SkillsSection from '@/components/profile/SkillsSection';

import { auth  } from '@/auth';
import { redirect } from 'next/navigation';
import ProfilePage from '@/components/profile/Profile';
export default async function MainProfile() {
  const session=await auth();
  if (!session) {
    redirect("/login");
    return null;
  }
  return (
  <>
  <ProfilePage/>
  </>
  );
}