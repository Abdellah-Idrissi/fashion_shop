import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/(.*)", "/men(.*)", "/women(.*)", "/sign-in(.*)", "/sign-up(.*)","/sso-callback,/checkout"],
});

// for specifying protected routes
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api)(.*)"],
};
