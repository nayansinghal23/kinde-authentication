import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default function middleware(req: Request) {
  return withAuth(req);
}

// If incoming request is from /posts page we can check the authentication first with withAuth()

export const config = {
  matcher: ["/posts"],
};
