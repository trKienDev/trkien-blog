import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
      const isAdmin = Boolean(req.cookies.get("admin_token"));

      // if (req.nextUrl.pathname.startsWith("/admin") && !isAdmin) {
      //       return NextResponse.redirect(new URL("/login", req.url));
      // }
}

export const config = {
      matcher: ["/admin/:path*"],
};