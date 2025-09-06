import { useState } from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { ChatAssistant } from "../ai/ChatAssistant";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onToggleChat={toggleChat} isChatOpen={isChatOpen} />
      <Navigation />
      
      <main className="container mx-auto px-6 py-8">
        {children}
      </main>

      <ChatAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};