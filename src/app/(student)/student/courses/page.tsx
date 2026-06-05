import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

const coursesList = [
  {
    title: "A Level Mathematics 9709",
    category: "Cambridge International",
    progress: 68,
    teacher: "Mr. Ahmed Khan",
    modulesCompleted: 8,
    totalModules: 12,
  },
  {
    title: "A Level Physics 9702",
    category: "Cambridge International",
    progress: 45,
    teacher: "Ms. Sarah Ali",
    modulesCompleted: 5,
    totalModules: 11,
  },
];

export default function StudentCourses() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">My Courses</h2>
          <p className="text-sm text-muted-foreground mt-1">Keep track of your active academic preparations</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coursesList.map((course) => (
          <Card key={course.title} className="border-border">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 px-2.5 py-1 rounded-full">
                  {course.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {course.modulesCompleted}/{course.totalModules} Modules
                </span>
              </div>
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <CardDescription>Instructor: {course.teacher}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} />
              </div>
              <Button size="default" variant="teal" className="w-full gap-2">
                <Play className="w-4 h-4 fill-current" />
                Resume Lectures
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
