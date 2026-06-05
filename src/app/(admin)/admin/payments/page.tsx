import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminPayments() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Transaction Logs</h2>
        <p className="text-sm text-muted-foreground mt-1">Audit Stripe checkout logs and manual bank invoice confirmations</p>
      </div>

      <Card className="border-border">
        <CardContent className="p-6 text-center text-muted-foreground py-12">
          Stripe webhook logs & Pakistani payments (JazzCash / Easypaisa) manual review stubs list.
        </CardContent>
      </Card>
    </div>
  );
}
