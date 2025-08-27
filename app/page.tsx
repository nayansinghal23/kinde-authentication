import Link from "next/link";

import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-gray-100">My simple blog</h1>

      <p className="text-lg mb-8 text-gray-200">
        Welcome to my blog!{" "}
        <Link href="/posts" className="text-blue-400 hover:underline">
          View all posts -&gt;
        </Link>
      </p>

      <LoginLink>Sign in</LoginLink>

      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
