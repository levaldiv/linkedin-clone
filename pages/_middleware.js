// whenever a user logs in, its going to provide a token
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // checking if the user is on the home route
  if (req.nextUrl.pathname === "/") {
    // get the session
    // accepts 3 things
    const session = await getToken({
      // request
      req,
      secret: process.env.JWT_SECRET,
      // makes sure it doesnt error out in production
      secureCookie: process.env.NODE_ENV === "production",
    });
    // you could also check for any property on the session object,
    // like role === "admin" or name === "jone"
    // if the session DOESNT EXISTS return redirect to home page
    if (!session) return NextResponse.redirect("/home");
    // if user is authenticated, proceed
  }
}
