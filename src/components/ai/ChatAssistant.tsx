import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, X } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const predefinedQuestions = [
  "Summarize GDP contribution by sector",
  "Banking leads with 43.7% GDP contribution",
  "Show banking sector growth trends",
  "Analyze foreign investment progress"
];

export const ChatAssistant = ({ isOpen, onClose }: ChatAssistantProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi Minister! I can help you analyze Saudi financial data. Ask me about GDP growth, banking sector performance, market trends, or any specific financial metrics.",
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        sender: "ai",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputText("");
  };

  const getAIResponse = (question: string): string => {
    const responses = {
      default: "Based on the latest economic data, I can provide detailed insights. The banking sector shows strong performance with 43.7% GDP contribution, while fintech shows the highest growth rate at 47%. Would you like me to elaborate on any specific metric?",
      gdp: "GDP contribution by sector: Banking leads at 43.7%, followed by Asset Management at 26.5%, Capital Markets at 24.4%, and Fintech at 47% growth rate.",
      banking: "Banking sector analysis shows steady growth with total capital deployment increasing 38.7% over 8 quarters. Corporate DCM and syndicated financing are the main drivers.",
      growth: "Current economic indicators show positive momentum across all financial sectors, with policy reforms in 2021 creating sustained growth through 2023."
    };

    const lowerQuestion = question.toLowerCase();
    if (lowerQuestion.includes("gdp") || lowerQuestion.includes("sector")) {
      return responses.gdp;
    } else if (lowerQuestion.includes("bank")) {
      return responses.banking;
    } else if (lowerQuestion.includes("growth") || lowerQuestion.includes("trend")) {
      return responses.growth;
    }
    return responses.default;
  };

  const handleQuestionClick = (question: string) => {
    setInputText(question);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-6 top-20 bottom-6 w-96 z-50">
      <Card className="h-full flex flex-col shadow-xl border-finance-primary/20">
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-finance-primary to-finance-secondary text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            <h3 className="font-semibold">AI Economic Analyst</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`p-2 rounded-full ${
                  message.sender === "user" 
                    ? "bg-finance-primary text-white" 
                    : "bg-muted"
                }`}>
                  {message.sender === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                <div className={`flex-1 p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-finance-primary text-white ml-8"
                    : "bg-muted mr-8"
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t space-y-3">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Quick questions:</p>
            <div className="grid grid-cols-1 gap-1">
              {predefinedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuestionClick(question)}
                  className="justify-start text-xs h-auto p-2 text-left"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about Saudi financial data..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="text-sm"
            />
            <Button onClick={handleSendMessage} size="sm">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};