import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download, ShieldCheck } from "lucide-react";

export default function StudentCertificates() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Academic Certificates</h2>
        <p className="text-sm text-muted-foreground mt-1">Download official course completion verification certificates</p>
      </div>

      <Card className="border-border">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4 text-center md:text-left flex-col md:flex-row items-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center shrink-0">
                <Award className="w-8 h-8 text-teal-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">Certificate of Achievement</h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-md">
                  Earned upon reaching 100% video lectures completion and passing all topic quizzes with a minimum of 75% score.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 mt-2 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  Secured & Verifiable Certificate
                </div>
              </div>
            </div>

            <Button variant="outline" className="gap-2 shrink-0 disabled:opacity-50" disabled>
              <Download className="w-4 h-4" />
              In Progress (68%)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
