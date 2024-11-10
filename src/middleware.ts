// export { auth as middleware } from "@/auth";

// export const config = {
//     matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
;
import { redirect } from 'next/navigation';
import { auth } from './auth';
import { NextRequest, NextResponse } from 'next/server';
export async function middleware(req:NextRequest) {
 console.log(process.env.NEXTAUTH_SECRET );
 const session = await auth();
 console.log(session);
 return NextResponse.redirect(new URL('/home', req.url))

}

export const config = {
  matcher: ['/collaborator'], // Protect routes under /user and /admin
};