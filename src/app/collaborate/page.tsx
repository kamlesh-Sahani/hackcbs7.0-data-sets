
import { auth  } from '@/auth';
import CollaboratorsPage from '@/components/Collaborate';
import { redirect } from 'next/navigation';


export default async function CollboratorMainPage() {
  const session=await auth();
  if (!session) {
    redirect("/login");
    return null;
  
  }
  return (
   <>
   <CollaboratorsPage/>
   </>
  );
}