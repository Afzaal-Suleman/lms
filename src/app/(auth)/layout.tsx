import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-navy-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden bg-mesh">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center">
        <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-teal">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-xl leading-none">
              LMS <span className="text-teal-400">OWAIS PK</span>
            </div>
            <div className="text-white/40 text-xs mt-1">Cambridge & Edexcel Academy</div>
          </div>
        </Link>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-navy-900/60 backdrop-blur-xl border border-white/10 py-8 px-4 shadow-glass rounded-3xl sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
}
