"use client";
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileStats from '@/components/profile/ProfileStats';
import DeploymentHistory from '@/components/profile/DeploymentHistory';
import SkillsSection from '@/components/profile/SkillsSection';


export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <ProfileHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <ProfileStats />
          <DeploymentHistory />
        </div>
        <SkillsSection />
      </div>
    </div>
  );
}