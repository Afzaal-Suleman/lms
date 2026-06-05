import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Settings } from "lucide-react";

export default function AdminCourses() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Course Administration</h2>
          <p className="text-sm text-muted-foreground mt-1">Configure subjects, syllabus codes, boards, and prices</p>
        </div>
        <Button variant="teal" className="gap-2">
          <Plus className="w-4 h-4" />
          Create Course
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          { title: "Mathematics", level: "A Level", code: "9709", board: "Cambridge" },
          { title: "Physics", level: "A Level", code: "9702", board: "Cambridge" },
          { title: "Chemistry", level: "O Level", code: "9701", board: "Cambridge" },
          { title: "Computer Science", level: "A Level", code: "9618", board: "Cambridge" },
        ].map((course, i) => (
          <Card key={i} className="border-border">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <div className="text-xs bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded w-fit mb-1">
                  {course.board} · {course.level}
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white">{course.title} ({course.code})</h3>
              </div>
              <Button size="sm" variant="outline" className="gap-1.5"><Settings className="w-4 h-4" /> Edit</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
