import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Video, FileText } from "lucide-react";

export default function TeacherUpload() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Upload Material</h2>
        <p className="text-sm text-muted-foreground mt-1">Upload dynamic video lectures or study worksheets</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Material Details</CardTitle>
              <CardDescription>Select category and fill descriptive details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="upload-course">Select Course</Label>
                  <select id="upload-course" className="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option>A Level Mathematics 9709</option>
                    <option>A Level Physics 9702</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="upload-type">Material Type</Label>
                  <select id="upload-type" className="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option>Recorded Lecture Video</option>
                    <option>PDF Worksheet/Notes</option>
                    <option>Practice Mock Paper</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="upload-title">Title</Label>
                <Input id="upload-title" placeholder="e.g. Pure Mathematics Chapter 3: Complex Numbers" />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="upload-desc">Description</Label>
                <Textarea id="upload-desc" rows={4} placeholder="Summarize what is covered in this lecture or note sheet..." />
              </div>

              <Button variant="teal" className="w-full gap-2">
                <Upload className="w-4 h-4" />
                Publish Material
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Drag and drop zone */}
        <Card className="border-border flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Attachment Upload</CardTitle>
            <CardDescription>Select video file or PDF notes document</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center p-6 border-2 border-dashed border-border rounded-xl m-6 mt-0">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mx-auto">
                <Upload className="w-6 h-6 text-teal-500" />
              </div>
              <div className="text-sm font-semibold text-slate-700 dark:text-white/80">Drag and drop file here</div>
              <p className="text-xs text-muted-foreground">Supported: MP4, PDF, Zip (Max 500MB)</p>
              <Button size="sm" variant="outline">Browse Files</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
