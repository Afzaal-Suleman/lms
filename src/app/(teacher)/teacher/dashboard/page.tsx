import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Clock, FileText, ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

const overviewStats = [
  { label: "Active Students", value: "83", icon: Users, change: "+12% this month", color: "text-blue-500" },
  { label: "Courses Taught", value: "2", icon: BookOpen, change: "Maths & Physics", color: "text-teal-500" },
  { label: "Hours Streamed", value: "120h", icon: Clock, change: "Recorded lectures", color: "text-purple-500" },
  { label: "Assignments Due", value: "4", icon: FileText, change: "Needs grading", color: "text-amber-500" },
];

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Welcome back, Mr. Ahmed</h2>
          <p className="text-sm text-muted-foreground mt-1">Here is the overview of your classes and student progress.</p>
        </div>
        <Link href="/teacher/upload">
          <Button variant="teal" className="gap-2">
            <Plus className="w-4 h-4" />
            Upload New Material
          </Button>
        </Link>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat) => (
          <Card key={stat.label} className="border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action shortcuts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Recent Class Submissions</CardTitle>
            <CardDescription>Review and score student assignments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { student: "Sara Fatima", assignment: "Calculus Homework 2", course: "Mathematics 9709", time: "2 hours ago" },
              { student: "Zainab Ali", assignment: "Trigonometry Sheet 1", course: "Mathematics 9709", time: "4 hours ago" },
              { student: "Bilal Ahmed", assignment: "Kinematics Equations Lab", course: "Physics 9702", time: "Yesterday" },
            ].map((sub, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-navy-900 rounded-xl">
                <div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-white">{sub.student}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{sub.assignment} · {sub.course}</div>
                </div>
                <Button size="sm" variant="outline" className="h-8 text-xs gap-1">
                  Grade
                  <ArrowUpRight className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Quick Class Scheduler</CardTitle>
            <CardDescription>Setup an additional live session or makeup class</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Schedule a new session using the database course configurations. Students will receive calendar syncing updates automatically.
            </p>
            <Button variant="default" className="w-full">Open Calendar Scheduler</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
