import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminFeedback() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Moderation Feed</h2>
        <p className="text-sm text-muted-foreground mt-1">Approve testimonials, contact inquiries, and student discussion posts</p>
      </div>

      <Card className="border-border">
        <CardContent className="p-6 text-center text-muted-foreground py-12">
          Moderation queue for reviews, comments, and testimonials. Approved items render automatically on homepage carousel.
        </CardContent>
      </Card>
    </div>
  );
}
