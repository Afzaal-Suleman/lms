import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Play, Calendar, FileText, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";

const enrolledCourses = [
  {
    title: "A Level Mathematics 9709",
    progress: 68,
    teacher: "Mr. Ahmed Khan",
    nextClass: "Monday · 6:00 PM PKT",
    lastLesson: "Introduction to Calculus",
  },
  {
    title: "A Level Physics 9702",
    progress: 45,
    teacher: "Ms. Sarah Ali",
    nextClass: "Tuesday · 5:00 PM PKT",
    lastLesson: "Kinematics & Wave Mechanics",
  },
];

const upcomingEvents = [
  { title: "Maths Live Class - Pure Math 1", time: "Mon, 6:00 PM", type: "class" },
  { title: "Physics Quiz 2 - Kinematics", time: "Tue, 11:59 PM Due", type: "due" },
  { title: "Maths Assignment 4 Submission", time: "Wed, 11:59 PM Due", type: "due" },
];

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Hero */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-950 rounded-3xl p-6 md:p-8 border border-white/10 text-white relative overflow-hidden bg-mesh">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome Back, John!</h2>
        <p className="text-white/60 text-sm md:text-base max-w-xl">
          You have completed 56% of your total coursework. You have a live class scheduled for today at 6:00 PM.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enrolled Courses Progress */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white">Enrolled Courses</h3>
          <div className="grid grid-cols-1 gap-4">
            {enrolledCourses.map((course) => (
              <Card key={course.title} className="border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription className="text-xs">Instructor: {course.teacher}</CardDescription>
                    </div>
                    <span className="text-sm font-bold text-teal-500">{course.progress}%</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={course.progress} />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-white/5 text-xs text-muted-foreground">
                    <div>
                      <span className="font-semibold text-foreground">Next Live Class:</span> {course.nextClass}
                    </div>
                    <Link href="/student/courses">
                      <Button size="sm" variant="teal" className="gap-1.5 h-8 text-xs">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Continue Learning
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Schedule & Due Dates */}
        <div className="space-y-6">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white">Upcoming Schedule</h3>
          <Card className="border-border">
            <CardContent className="p-6 space-y-4">
              {upcomingEvents.map((event, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 pb-4 last:pb-0 border-b border-slate-100 dark:border-white/5 last:border-0"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      event.type === "class"
                        ? "bg-blue-500/10 text-blue-500"
                        : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {event.type === "class" ? (
                      <Calendar className="w-4 h-4" />
                    ) : (
                      <Clock className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-white">
                      {event.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{event.time}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
