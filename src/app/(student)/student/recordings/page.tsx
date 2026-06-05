import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Clock, Video } from "lucide-react";

const recordingsList = [
  { title: "Calculus - Derivative Rules & Chain Rule", date: "June 04, 2026", duration: "1h 15m", course: "A Level Mathematics" },
  { title: "Trigonometric Identites & Functions", date: "June 02, 2026", duration: "1h 22m", course: "A Level Mathematics" },
  { title: "Projectile Motion - Range & Trajectory", date: "June 01, 2026", duration: "1h 10m", course: "A Level Physics" },
  { title: "Work, Energy & Power Mechanics", date: "May 29, 2026", duration: "1h 05m", course: "A Level Physics" },
];

export default function StudentRecordings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Recorded Lectures</h2>
        <p className="text-sm text-muted-foreground mt-1">Catch up on missed classes or revise previous topics</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {recordingsList.map((rec, i) => (
          <Card key={i} className="border-border hover:border-teal-500/30 transition-all">
            <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                  <Video className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded w-fit mb-1.5">
                    {rec.course}
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white">{rec.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {rec.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {rec.duration}
                    </span>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="gap-2 shrink-0 self-start sm:self-center">
                <Play className="w-3.5 h-3.5 fill-current" />
                Watch Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
