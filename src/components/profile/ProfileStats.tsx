"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { userData } from "@/lib/data";
export default function ProfileStats() {
  const stats = userData.stats;
  const chartData = Object.entries(stats.monthlyDeployments).map(([date, count]) => ({
    date: date,
    deployments: count,
  }));
  return (
    <Card className="col-span-2 ">
      <CardHeader>
        <CardTitle>Upload Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-[#2187e64d] rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground">Weekly Uploads</h3>
            <p className="text-2xl font-bold mt-1">{stats.weeklyTotal}</p>
          </div>
          <div className="p-4 bg-[#2187e64d] rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground">Monthly Average</h3>
            <p className="text-2xl font-bold mt-1">
              {Math.round(Object.values(stats.monthlyDeployments).reduce((a, b) => a + b, 0) / 12)}
            </p>
          </div>
          <div className="p-4 bg-[#2187e64d] rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground">Yearly Total</h3>
            <p className="text-2xl font-bold mt-1">{stats.yearlyTotal}</p>
          </div>
        </div>

        <div className="h-[300px] mt-4  ">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="date" className="text-muted-foreground" />
              <YAxis className="text-muted-foreground" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Area
                type="monotone"
                dataKey="deployments"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}