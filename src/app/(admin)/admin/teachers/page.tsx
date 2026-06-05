import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminTeachers() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Teacher Profiles Management</h2>
        <p className="text-sm text-muted-foreground mt-1">Configure credentials, ratings, bio descriptions, and badges</p>
      </div>

      <Card className="border-border">
        <CardContent className="p-6 text-center text-muted-foreground py-12">
          Vetted instructors table dashboard. Set credentials for live Zoom class hosting.
        </CardContent>
      </Card>
    </div>
  );
}
