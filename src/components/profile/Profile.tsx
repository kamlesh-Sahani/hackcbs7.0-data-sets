"use client";
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileStats from '@/components/profile/ProfileStats';
import DeploymentHistory from '@/components/profile/DeploymentHistory';
import SkillsSection from '@/components/profile/SkillsSection';

export default  function ProfilePage() {
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