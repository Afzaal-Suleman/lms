import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, ArrowUpRight } from "lucide-react";

export default function TeacherCourses() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Active Courses</h2>
        <p className="text-sm text-muted-foreground mt-1">Courses you are currently teaching and directing</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "A Level Mathematics 9709", code: "9709", students: 45, timing: "Mon/Wed/Fri · 6:00 PM PKT" },
          { title: "A Level Physics 9702", code: "9702", students: 38, timing: "Tue/Thu/Sat · 5:00 PM PKT" },
        ].map((course, i) => (
          <Card key={i} className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <CardDescription>Syllabus code: {course.code}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-teal-500" /> {course.students} Students</span>
                <span>{course.timing}</span>
              </div>
              <Button variant="outline" className="w-full gap-2">
                Manage Course Material
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
