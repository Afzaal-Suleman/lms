import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus, FileSpreadsheet } from "lucide-react";

export default function TeacherAssignments() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Assignments Management</h2>
          <p className="text-sm text-muted-foreground mt-1">Create, review, and mark course worksheets</p>
        </div>
        <Button variant="teal" className="gap-2">
          <Plus className="w-4 h-4" />
          Create Assignment
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          { title: "Calculus Homework 2 - Derivative Rules", course: "Mathematics 9709", submissions: "32/45", dueDate: "June 08, 2026" },
          { title: "Trigonometry Sheet 1 - Identities", course: "Mathematics 9709", submissions: "41/45", dueDate: "June 05, 2026" },
          { title: "Kinematics Equations Lab Worksheet", course: "Physics 9702", submissions: "18/38", dueDate: "June 12, 2026" },
        ].map((item, i) => (
          <Card key={i} className="border-border">
            <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded w-fit mb-1.5">
                    {item.course}
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white">{item.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                    <span>Due: {item.dueDate}</span>
                    <span>Submissions: <strong className="text-teal-500">{item.submissions}</strong></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="gap-1.5"><FileSpreadsheet className="w-4 h-4" /> Export Grades</Button>
                <Button size="sm" variant="teal">Review Submissions</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
