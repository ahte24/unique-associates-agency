import { NextResponse } from "next/server";

export function middleware(req) {
	// Get the access token from cookies
	const accessToken = req.cookies.get("accessToken");

	const { pathname } = req.nextUrl;

	// If the user is logged in (access token exists) and tries to access the login or signup page
	if (
		accessToken &&
		(pathname.startsWith("/login") || pathname.startsWith("/signup"))
	) {
		// Redirect them to the home page or profile page
		return NextResponse.redirect(new URL("/", req.url)); // Redirect to home page or you can choose '/profile'
	}

	// Protect the profile page, orders page, and form fill-up page
	if (
		pathname.startsWith("/profile") ||
		pathname.startsWith("/orders") ||
		pathname.startsWith("/services/") ||
		pathname.startsWith("/resetPassword") // Protect all services routes
	) {
		// If there is no access token, redirect to the login page
		if (!accessToken) {
			return NextResponse.redirect(new URL("/login", req.url));
		}
	}

	// If the token exists and the user is not trying to access the login/signup page, proceed as normal
	return NextResponse.next();
}

export const config = {
	matcher: [
		"/login",
		"/signup",
		"/profile",
		"/orders",
		"/services/:id/form_fillup",
		"/resetPassword"
	], // Add the form fill-up page to the matcher
};
