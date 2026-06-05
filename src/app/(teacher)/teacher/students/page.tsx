import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Mail, MessageCircle } from "lucide-react";

export default function TeacherStudents() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Student Roster</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage and track student profiles in your classes</p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search student name..." />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "John Doe", course: "Mathematics 9709", attendance: "94%", grades: "A*" },
          { name: "Sara Fatima", course: "Mathematics 9709", attendance: "98%", grades: "A*" },
          { name: "Zainab Ali", course: "Mathematics 9709", attendance: "88%", grades: "B" },
          { name: "Bilal Ahmed", course: "Physics 9702", attendance: "92%", grades: "A" },
        ].map((student, i) => (
          <Card key={i} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-sm">
                  {student.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white">{student.name}</h3>
                  <p className="text-xs text-muted-foreground">{student.course}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 dark:bg-navy-900 rounded-xl mb-4 text-center">
                <div>
                  <div className="text-xs text-muted-foreground">Attendance</div>
                  <div className="text-sm font-bold text-slate-800 dark:text-white">{student.attendance}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Grade Avg</div>
                  <div className="text-sm font-bold text-teal-500">{student.grades}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="w-full gap-1.5"><Mail className="w-3.5 h-3.5" /> Email</Button>
                <Button size="sm" variant="outline" className="w-full gap-1.5"><MessageCircle className="w-3.5 h-3.5" /> Chat</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
