import NewChatDialog from "@/components/chat/NewChatDialog";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Chats from "@/components/chat/Chats";
export default async function ChatPage() {
  const handleSendMessage = async () => {
    const session = await auth();
    if (!session) {
      redirect("/login");
      return null;
    }
  };
  return (
    <>
      <Chats />
    </>
  );
}
