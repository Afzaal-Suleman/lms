import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from "lucide-react";

export default function StudentCalendar() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Class Calendar</h2>
          <p className="text-sm text-muted-foreground mt-1">Check scheduled live classes and exam dates</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon"><ChevronLeft className="w-4 h-4" /></Button>
          <span className="text-sm font-bold px-3 py-1 bg-white dark:bg-navy-900 border rounded-xl">June 2026</span>
          <Button variant="outline" size="icon"><ChevronRight className="w-4 h-4" /></Button>
        </div>
      </div>

      <Card className="border-border">
        <CardContent className="p-6">
          <div className="text-center py-12 text-muted-foreground space-y-4">
            <CalendarIcon className="w-12 h-12 text-teal-500/40 mx-auto" />
            <p className="max-w-md mx-auto">
              Your personalized academic events calendar. Integrates dynamic scheduling of online classes based on timezone.
            </p>
            <Button variant="teal" size="sm">Sync to Google Calendar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
