import { Building2, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onToggleChat: () => void;
  isChatOpen: boolean;
}

export const Header = ({ onToggleChat, isChatOpen }: HeaderProps) => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-finance-primary to-finance-secondary">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Economic Intelligence Dashboard</h1>
              <p className="text-sm text-muted-foreground">Ministry of Finance Analytics Platform</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium">Welcome, Minister</p>
              <p className="text-xs text-muted-foreground">Real-time Economic Insights</p>
            </div>
            <Button
              variant={isChatOpen ? "default" : "outline"}
              size="sm"
              onClick={onToggleChat}
              className="gap-2"
            >
              <Bot className="h-4 w-4" />
              AI Analyst
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};