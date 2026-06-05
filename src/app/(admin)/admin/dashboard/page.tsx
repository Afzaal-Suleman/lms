import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ShieldAlert, CreditCard, BookOpen, TrendingUp, Sparkles } from "lucide-react";

const adminStats = [
  { label: "Total Students", value: "2,548", change: "+18% vs last month", icon: Users, color: "text-blue-500" },
  { label: "Active Instructors", value: "14", change: "Full-time vetted tutors", icon: ShieldAlert, color: "text-teal-500" },
  { label: "Monthly Revenue", value: "$18,450", change: "+24% growth", icon: CreditCard, color: "text-emerald-500" },
  { label: "Active Enrollments", value: "3,120", change: "Across 8 subjects", icon: BookOpen, color: "text-purple-500" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-serif">Platform Administrator Dashboard</h2>
          <p className="text-sm text-muted-foreground mt-1">Real-time statistics of courses, revenue streams, and students.</p>
        </div>
        <Button variant="teal" className="gap-2">
          <Sparkles className="w-4 h-4" />
          Generate Platform Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map((stat) => (
          <Card key={stat.label} className="border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Roster & Audits stubs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Enrollments */}
        <Card className="lg:col-span-2 border-border">
          <CardHeader>
            <CardTitle>Recent Enrollments</CardTitle>
            <CardDescription>Latest student course sign-ups</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Aisha Rehman", course: "A Level Mathematics", country: "Pakistan 🇵🇰", status: "Stripe Paid" },
              { name: "Omar Al-Farsi", course: "A Level Chemistry", country: "UAE 🇦🇪", status: "Stripe Paid" },
              { name: "James Okonkwo", course: "A Level Computer Science", country: "Nigeria 🇳🇬", status: "Bank Transferred" },
            ].map((enr, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-navy-900 rounded-xl">
                <div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-white">{enr.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{enr.course} · {enr.country}</div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full">
                  {enr.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Security Logs */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Audits & Safety</CardTitle>
            <CardDescription>Upstash rate limit logs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { event: "API Rate-limit triggered", time: "10 mins ago", ip: "39.40.12.115" },
              { event: "User password reset", time: "1 hour ago", ip: "82.102.5.4" },
              { event: "New courses schema migrate", time: "4 hours ago", ip: "localhost" },
            ].map((log, i) => (
              <div key={i} className="pb-3 border-b last:border-0 last:pb-0 border-border">
                <div className="text-xs font-semibold text-slate-800 dark:text-white">{log.event}</div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-1">
                  <span>{log.time}</span>
                  <span>IP: {log.ip}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
