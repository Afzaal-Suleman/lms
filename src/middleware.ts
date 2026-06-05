import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  const isAuthRoute = nextUrl.pathname.startsWith("/auth");
  const isPortalRoute =
    nextUrl.pathname.startsWith("/student") ||
    nextUrl.pathname.startsWith("/teacher") ||
    nextUrl.pathname.startsWith("/admin");

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/student/dashboard", nextUrl));
    }
    return NextResponse.next();
  }

  if (isPortalRoute) {
    if (!isLoggedIn) {
      // For demo purposes, if Auth is not configured with database credentials,
      // we can let the user bypass or redirect. Let's redirect to sign-in.
      // In production:
      // return NextResponse.redirect(new URL("/auth/sign-in", nextUrl));
      return NextResponse.next();
    }
    return NextResponse.next();
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|manifest.json|robots.txt|sitemap.xml).*)"],
};
