import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Building, 
  TrendingUp, 
  Shield, 
  CreditCard, 
  Briefcase 
} from "lucide-react";

const navigationItems = [
  {
    label: "Overview",
    path: "/",
    icon: Home,
    description: "Economic Dashboard"
  },
  {
    label: "Banking",
    path: "/banking",
    icon: Building,
    description: "Banking Sector Analysis"
  },
  {
    label: "Asset Management",
    path: "/asset-management",
    icon: TrendingUp,
    description: "Investment & Asset Analysis"
  },
  {
    label: "Insurance",
    path: "/insurance",
    icon: Shield,
    description: "Insurance Market Insights"
  },
  {
    label: "Capital Markets",
    path: "/capital-markets",
    icon: CreditCard,
    description: "Market Performance"
  },
  {
    label: "Fintech",
    path: "/fintech",
    icon: Briefcase,
    description: "Innovation & Digital Finance"
  }
];

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="border-b bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-1 overflow-x-auto py-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Button
                key={item.path}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={() => navigate(item.path)}
                className={cn(
                  "flex items-center gap-2 whitespace-nowrap transition-all duration-200",
                  isActive && "bg-finance-primary text-white shadow-md"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};