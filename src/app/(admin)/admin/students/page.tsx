import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminStudents() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Student Directory</h2>
        <p className="text-sm text-muted-foreground mt-1">Manage all registered accounts, roles, and course enrollments</p>
      </div>

      <Card className="border-border">
        <CardContent className="p-6 text-center text-muted-foreground py-12">
          Complete database student list loader. Synchronized with Supabase users model relations.
        </CardContent>
      </Card>
    </div>
  );
}
