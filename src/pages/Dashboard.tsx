import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/charts/MetricCard";
import { ProgressRing } from "@/components/charts/ProgressRing";
import { 
  Building, 
  TrendingUp, 
  Shield, 
  CreditCard, 
  Briefcase,
  ArrowRight,
  Globe,
  Target
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";

const sectorData = [
  { name: "Banking", value: 43.7, color: "hsl(var(--finance-primary))", growth: 8.9 },
  { name: "Asset Mgmt", value: 26.5, color: "hsl(var(--finance-secondary))", growth: 15.3 },
  { name: "Capital Markets", value: 24.4, color: "hsl(var(--finance-accent))", growth: 45.2 },
  { name: "Insurance", value: 1.4, color: "hsl(var(--finance-warning))", growth: 3.6 },
  { name: "Fintech", value: 4.0, color: "hsl(var(--finance-success))", growth: 47.0 }
];

const quarterlyData = [
  { quarter: "Q1 2022", banking: 180, assetMgmt: 120, capitalMarkets: 95, insurance: 15 },
  { quarter: "Q2 2022", banking: 185, assetMgmt: 125, capitalMarkets: 102, insurance: 16 },
  { quarter: "Q3 2022", banking: 192, assetMgmt: 135, capitalMarkets: 108, insurance: 17 },
  { quarter: "Q4 2022", banking: 198, assetMgmt: 142, capitalMarkets: 115, insurance: 18 },
  { quarter: "Q1 2023", banking: 205, assetMgmt: 148, capitalMarkets: 125, insurance: 19 },
  { quarter: "Q2 2023", banking: 212, assetMgmt: 155, capitalMarkets: 135, insurance: 20 },
  { quarter: "Q3 2023", banking: 220, assetMgmt: 162, capitalMarkets: 145, insurance: 21 },
  { quarter: "Q4 2023", banking: 228, assetMgmt: 170, capitalMarkets: 158, insurance: 22 }
];

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Key Insights Banner */}
      <Card className="bg-gradient-to-r from-finance-primary/5 to-finance-secondary/5 border-finance-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-finance-warning/20">
              <Target className="h-6 w-6 text-finance-warning" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Insight</h3>
              <p className="text-muted-foreground">
                Policy reforms implemented in 2021 significantly boosted lending capacity, 
                resulting in sustained growth momentum through 2023. Banking sector maintains 
                strong leadership in GDP contribution at 43.7%.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sector Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <MetricCard
          title="Banking GDP Share"
          value="43.7%"
          change={8.9}
          trend="up"
          icon={<Building className="h-5 w-5 text-finance-primary" />}
          description="Leading sector contribution"
        />
        <MetricCard
          title="Asset Management"
          value="26.5%"
          change={15.3}
          trend="up"
          icon={<TrendingUp className="h-5 w-5 text-finance-secondary" />}
          description="Strong diversification growth"
        />
        <MetricCard
          title="Capital Markets"
          value="24.4%"
          change={45.2}
          trend="up"
          icon={<CreditCard className="h-5 w-5 text-finance-accent" />}
          description="Highest quarterly growth"
        />
        <MetricCard
          title="Insurance"
          value="1.4%"
          change={3.6}
          trend="up"
          icon={<Shield className="h-5 w-5 text-finance-warning" />}
          description="Expanding regulatory support"
        />
        <MetricCard
          title="Fintech Growth"
          value="47%"
          change={14}
          trend="up"
          icon={<Briefcase className="h-5 w-5 text-finance-success" />}
          description="Digital transformation leader"
        />
      </div>

      {/* Progress Rings Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-finance-primary" />
              Banking Sector Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ProgressRing
              value={43.7}
              target={50}
              label="Bank Lending as % of GDP"
              subLabel="Target: 50% by 2025"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-finance-secondary" />
              Asset Management Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ProgressRing
              value={26.5}
              target={35}
              label="Asset Mgmt as % of GDP"
              subLabel="Target: 35% by 2025"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-finance-warning" />
              Insurance Coverage
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ProgressRing
              value={1.4}
              target={5}
              label="Insurance as % of GDP"
              subLabel="Target: 5% by 2025"
            />
          </CardContent>
        </Card>
      </div>

      {/* Sector Analysis Sections */}
      <div className="space-y-6">
        {/* Banking Section */}
        <Card className="border-finance-primary/20">
          <CardHeader className="border-b border-finance-primary/10">
            <CardTitle className="flex items-center gap-2 text-finance-primary">
              <Building className="h-5 w-5" />
              Banking
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* GDP Contribution Pie Chart */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-4">GDP Contribution by Sector</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'GDP Share']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              {/* Quarterly Performance Bar Chart */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-4">Quarterly Performance (SAR Billions)</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={quarterlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="quarter" 
                      tick={{ fontSize: 10 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Bar dataKey="banking" fill="hsl(var(--finance-primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Asset Management Section */}
        <Card className="border-finance-secondary/20">
          <CardHeader className="border-b border-finance-secondary/10">
            <CardTitle className="flex items-center gap-2 text-finance-secondary">
              <TrendingUp className="h-5 w-5" />
              Asset Management
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* GDP Contribution Pie Chart */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-4">GDP Contribution by Sector</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'GDP Share']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              {/* Quarterly Performance Bar Chart */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-4">Quarterly Performance (SAR Billions)</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={quarterlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="quarter" 
                      tick={{ fontSize: 10 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Bar dataKey="assetMgmt" fill="hsl(var(--finance-secondary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insurance Section */}
        <Card className="border-finance-warning/20">
          <CardHeader className="border-b border-finance-warning/10">
            <CardTitle className="flex items-center gap-2 text-finance-warning">
              <Shield className="h-5 w-5" />
              Insurance
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* GDP Contribution Pie Chart */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-4">GDP Contribution by Sector</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'GDP Share']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              {/* Quarterly Performance Bar Chart */}
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-4">Quarterly Performance (SAR Billions)</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={quarterlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="quarter" 
                      tick={{ fontSize: 10 }}
                      stroke="hsl(var(--muted-foreground))"
                    />
                    <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Bar dataKey="insurance" fill="hsl(var(--finance-warning))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Foreign Players Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-finance-primary" />
            Foreign Financial Players in KSA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <ProgressRing
                value={12}
                target={20}
                size={100}
                label="Banks"
                subLabel="12 of top 20 global banks"
              />
            </div>
            <div className="text-center">
              <ProgressRing
                value={8}
                target={20}
                size={100}
                label="Asset Managers"
                subLabel="8 of top 20 asset managers"
              />
            </div>
            <div className="text-center">
              <ProgressRing
                value={6}
                target={20}
                size={100}
                label="Insurance"
                subLabel="6 of top 20 insurers"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sector Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: "Banking Sector", path: "/banking", icon: Building, color: "finance-primary" },
          { title: "Asset Management", path: "/asset-management", icon: TrendingUp, color: "finance-secondary" },
          { title: "Insurance", path: "/insurance", icon: Shield, color: "finance-warning" }
        ].map((sector) => {
          const Icon = sector.icon;
          return (
            <Card 
              key={sector.path}
              className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-2 hover:border-finance-primary/50"
              onClick={() => navigate(sector.path)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-${sector.color}/10`}>
                      <Icon className={`h-6 w-6 text-${sector.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{sector.title}</h3>
                      <p className="text-sm text-muted-foreground">View detailed analysis</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-finance-primary transition-colors" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};