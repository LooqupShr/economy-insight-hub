import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/charts/MetricCard";
import { ProgressRing } from "@/components/charts/ProgressRing";
import { 
  Building, 
  TrendingUp, 
  Globe, 
  Target,
  CreditCard,
  FileText
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Area,
  AreaChart
} from "recharts";

const bondIssuanceMaturity = [
  { quarter: "Q1 2022", "1 Year": 25, "3 Years": 45, "10 Years": 30 },
  { quarter: "Q2 2022", "1 Year": 28, "3 Years": 48, "10 Years": 35 },
  { quarter: "Q3 2022", "1 Year": 32, "3 Years": 52, "10 Years": 38 },
  { quarter: "Q4 2022", "1 Year": 30, "3 Years": 55, "10 Years": 42 },
  { quarter: "Q1 2023", "1 Year": 35, "3 Years": 58, "10 Years": 45 },
  { quarter: "Q2 2023", "1 Year": 38, "3 Years": 62, "10 Years": 48 },
  { quarter: "Q3 2023", "1 Year": 42, "3 Years": 65, "10 Years": 52 },
  { quarter: "Q4 2023", "1 Year": 45, "3 Years": 68, "10 Years": 55 }
];

const bondIssuanceRating = [
  { quarter: "Q1 2022", "AAA": 40, "AA": 35, "A": 20, "BBB": 15, "Other": 10 },
  { quarter: "Q2 2022", "AAA": 42, "AA": 38, "A": 22, "BBB": 18, "Other": 12 },
  { quarter: "Q3 2022", "AAA": 45, "AA": 40, "A": 25, "BBB": 20, "Other": 14 },
  { quarter: "Q4 2022", "AAA": 48, "AA": 42, "A": 28, "BBB": 22, "Other": 15 },
  { quarter: "Q1 2023", "AAA": 52, "AA": 45, "A": 30, "BBB": 25, "Other": 18 },
  { quarter: "Q2 2023", "AAA": 55, "AA": 48, "A": 32, "BBB": 28, "Other": 20 },
  { quarter: "Q3 2023", "AAA": 58, "AA": 52, "A": 35, "BBB": 30, "Other": 22 },
  { quarter: "Q4 2023", "AAA": 62, "AA": 55, "A": 38, "BBB": 32, "Other": 25 }
];

const syndicatedFinancing = [
  { quarter: "Q1 2022", "1 Year": 35, "3 Years": 55, "5 Years": 40 },
  { quarter: "Q2 2022", "1 Year": 38, "3 Years": 58, "5 Years": 45 },
  { quarter: "Q3 2022", "1 Year": 42, "3 Years": 62, "5 Years": 48 },
  { quarter: "Q4 2022", "1 Year": 45, "3 Years": 65, "5 Years": 52 },
  { quarter: "Q1 2023", "1 Year": 48, "3 Years": 68, "5 Years": 55 },
  { quarter: "Q2 2023", "1 Year": 52, "3 Years": 72, "5 Years": 58 },
  { quarter: "Q3 2023", "1 Year": 55, "3 Years": 75, "5 Years": 62 },
  { quarter: "Q4 2023", "1 Year": 58, "3 Years": 78, "5 Years": 65 }
];

const securitizationData = [
  { quarter: "Q1 2022", percentage: 12.5 },
  { quarter: "Q2 2022", percentage: 14.2 },
  { quarter: "Q3 2022", percentage: 16.8 },
  { quarter: "Q4 2022", percentage: 18.5 },
  { quarter: "Q1 2023", percentage: 21.2 },
  { quarter: "Q2 2023", percentage: 23.8 },
  { quarter: "Q3 2023", percentage: 26.5 },
  { quarter: "Q4 2023", percentage: 28.9 }
];

const borrowingBySector = [
  { quarter: "Q1 2022", "GRE Domestic": 85, "GRE Syndicated": 45, "GRE DCM": 25, "Corporate Domestic": 65, "Corporate Syndicated": 35, "Corporate DCM": 18 },
  { quarter: "Q2 2022", "GRE Domestic": 88, "GRE Syndicated": 48, "GRE DCM": 28, "Corporate Domestic": 68, "Corporate Syndicated": 38, "Corporate DCM": 22 },
  { quarter: "Q3 2022", "GRE Domestic": 92, "GRE Syndicated": 52, "GRE DCM": 32, "Corporate Domestic": 72, "Corporate Syndicated": 42, "Corporate DCM": 25 },
  { quarter: "Q4 2022", "GRE Domestic": 95, "GRE Syndicated": 55, "GRE DCM": 35, "Corporate Domestic": 75, "Corporate Syndicated": 45, "Corporate DCM": 28 },
  { quarter: "Q1 2023", "GRE Domestic": 98, "GRE Syndicated": 58, "GRE DCM": 38, "Corporate Domestic": 78, "Corporate Syndicated": 48, "Corporate DCM": 32 },
  { quarter: "Q2 2023", "GRE Domestic": 102, "GRE Syndicated": 62, "GRE DCM": 42, "Corporate Domestic": 82, "Corporate Syndicated": 52, "Corporate DCM": 35 },
  { quarter: "Q3 2023", "GRE Domestic": 105, "GRE Syndicated": 65, "GRE DCM": 45, "Corporate Domestic": 85, "Corporate Syndicated": 55, "Corporate DCM": 38 },
  { quarter: "Q4 2023", "GRE Domestic": 108, "GRE Syndicated": 68, "GRE DCM": 48, "Corporate Domestic": 88, "Corporate Syndicated": 58, "Corporate DCM": 42 }
];

export const Banking = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Banking Sector Analysis</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive analysis of banking performance, capital deployment, and foreign investment attraction
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Capital Deployed"
          value="228 SAR Billion"
          change={38.7}
          trend="up"
          icon={<Building className="h-5 w-5 text-finance-primary" />}
          description="Q4 2023 vs Q1 2022"
        />
        <MetricCard
          title="Bond Issuance"
          value="168 SAR Billion"
          change={24.5}
          trend="up"
          icon={<FileText className="h-5 w-5 text-finance-secondary" />}
          description="Total across all maturities"
        />
        <MetricCard
          title="Syndicated Financing"
          value="201 SAR Billion"
          change={29.8}
          trend="up"
          icon={<CreditCard className="h-5 w-5 text-finance-accent" />}
          description="Strong lending momentum"
        />
        <MetricCard
          title="Loan Securitization"
          value="28.9%"
          change={16.4}
          trend="up"
          icon={<Target className="h-5 w-5 text-finance-success" />}
          description="Domestic lending securitized"
        />
      </div>

      {/* Bond Issuance Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Bond Issuance by Maturity (SAR Billions)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={bondIssuanceMaturity}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="quarter" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="1 Year" stackId="a" fill="hsl(var(--finance-primary))" />
                <Bar dataKey="3 Years" stackId="a" fill="hsl(var(--finance-secondary))" />
                <Bar dataKey="10 Years" stackId="a" fill="hsl(var(--finance-accent))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bond Issuance by Rating (SAR Billions)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={bondIssuanceRating}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="quarter" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="AAA" stackId="1" stroke="hsl(var(--finance-primary))" fill="hsl(var(--finance-primary))" />
                <Area type="monotone" dataKey="AA" stackId="1" stroke="hsl(var(--finance-secondary))" fill="hsl(var(--finance-secondary))" />
                <Area type="monotone" dataKey="A" stackId="1" stroke="hsl(var(--finance-accent))" fill="hsl(var(--finance-accent))" />
                <Area type="monotone" dataKey="BBB" stackId="1" stroke="hsl(var(--finance-warning))" fill="hsl(var(--finance-warning))" />
                <Area type="monotone" dataKey="Other" stackId="1" stroke="hsl(var(--muted-foreground))" fill="hsl(var(--muted-foreground))" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Syndicated Financing & Securitization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Syndicated Financing by Duration (SAR Billions)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={syndicatedFinancing}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="quarter" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="1 Year" fill="hsl(var(--finance-primary))" />
                <Bar dataKey="3 Years" fill="hsl(var(--finance-secondary))" />
                <Bar dataKey="5 Years" fill="hsl(var(--finance-accent))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Domestic Bank Lending Securitized (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={securitizationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="quarter" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Securitization Rate']} />
                <Line 
                  type="monotone" 
                  dataKey="percentage" 
                  stroke="hsl(var(--finance-primary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--finance-primary))", strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Borrowing by Sector */}
      <Card>
        <CardHeader>
          <CardTitle>Borrowing Type by Sector (SAR Billions)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={borrowingBySector} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="quarter" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="GRE Domestic" stackId="GRE" fill="hsl(var(--finance-primary))" />
              <Bar dataKey="GRE Syndicated" stackId="GRE" fill="hsl(var(--finance-primary-light))" />
              <Bar dataKey="GRE DCM" stackId="GRE" fill="hsl(var(--finance-secondary))" />
              <Bar dataKey="Corporate Domestic" stackId="Corporate" fill="hsl(var(--finance-accent))" />
              <Bar dataKey="Corporate Syndicated" stackId="Corporate" fill="hsl(var(--finance-warning))" />
              <Bar dataKey="Corporate DCM" stackId="Corporate" fill="hsl(var(--finance-success))" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Foreign Banks Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-finance-primary" />
            Foreign Bank Attraction Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <ProgressRing
                value={12}
                target={20}
                size={100}
                label="Regional HQ"
                subLabel="12 of top 20 banks"
              />
            </div>
            <div className="text-center">
              <ProgressRing
                value={16}
                target={20}
                size={100}
                label="KSA Operations"
                subLabel="16 with local presence"
              />
            </div>
            <div className="text-center">
              <ProgressRing
                value={5}
                target={10}
                size={100}
                label="Licensing Stage"
                subLabel="5 in final approval"
              />
            </div>
            <div className="text-center">
              <ProgressRing
                value={8}
                target={15}
                size={100}
                label="Ongoing Discussions"
                subLabel="8 in active talks"
              />
            </div>
            <div className="text-center">
              <ProgressRing
                value={12}
                target={20}
                size={100}
                label="Initial Discussions"
                subLabel="12 preliminary contacts"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};