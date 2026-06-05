import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, AlertCircle, CheckCircle } from "lucide-react";

const assignmentsList = [
  { title: "Differentiation & Integration Practice Sheet", due: "June 08, 2026", marks: 50, status: "Pending", course: "A Level Mathematics" },
  { title: "Kinematics Equations Worksheet", due: "June 10, 2026", marks: 100, status: "Submitted", course: "A Level Physics" },
  { title: "Calculus Limits & Continuity Exercise", due: "May 25, 2026", marks: 50, status: "Graded", grade: "48/50", course: "A Level Mathematics" },
];

export default function StudentAssignments() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Assignments & Worksheets</h2>
        <p className="text-sm text-muted-foreground mt-1">Submit your coursework and view teacher evaluation feedback</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {assignmentsList.map((ass, i) => (
          <Card key={i} className="border-border">
            <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded w-fit mb-1.5">
                    {ass.course}
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white">{ass.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Due: {ass.due}
                    </span>
                    <span>Max Marks: {ass.marks}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 shrink-0 self-start sm:self-center">
                {ass.status === "Pending" && (
                  <Badge variant="warning" className="flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Pending
                  </Badge>
                )}
                {ass.status === "Submitted" && (
                  <Badge variant="success" className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Submitted
                  </Badge>
                )}
                {ass.status === "Graded" && (
                  <div className="text-right">
                    <Badge variant="cambridge" className="mb-1">Graded</Badge>
                    <div className="text-sm font-bold text-teal-500">{ass.grade}</div>
                  </div>
                )}
                <Button size="sm" variant={ass.status === "Pending" ? "teal" : "outline"}>
                  {ass.status === "Pending" ? "Upload Submit" : "View Details"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
