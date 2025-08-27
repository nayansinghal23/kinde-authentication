// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
// import { redirect } from "next/navigation";

export default async function PostsPage() {
  // const { isAuthenticated, getUser } = getKindeServerSession();

  // We will loose the static rendering in this case as it checks for access_token cookies. Solution is middleware check which will allow us to render static page as well.
  // if (!(await isAuthenticated())) redirect("/api/auth/login");

  // You wanna show some user information which will again switch to dynamic rendering. Solution is to create components and use the sessions in the client side.
  // const user = await getUser();

  return (
    <main className="max-w-2xl mx-auto p-8 text-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-100">All Blog Posts</h1>

      <section aria-label="Navigate back to home page" className="mb-6">
        <Link href="/" className="text-blue-400 hover:underline">
          {"<-"} Back to home
        </Link>
      </section>

      <section aria-label="All posts listed out here" className="space-y-8">
        <article className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-100">
            <Link
              href="/posts/first-post"
              className="hover:underline text-blue-400"
            >
              My First Blog Post
            </Link>
          </h2>
          <p className="text-gray-300 mb-3">
            This is my very first blog post where I share my thoughts about
            getting started with blogging. I talk about why I decided to start
            writing and what I hope to accomplish.
          </p>
          <Link
            href="/posts/first-post"
            className="hover:underline text-blue-400"
          >
            Read more -&gt;
          </Link>
        </article>

        <article className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-100">
            <Link
              href="/posts/second-post"
              className="hover:underline text-blue-400"
            >
              Learning Next.js
            </Link>
          </h2>
          <p className="text-gray-300 mb-3">
            My journey learning Next.js and building this simple blog
            application. I share the challenges I faced and the resources that
            helped me along the way.
          </p>
          <Link
            href="/posts/second-post"
            className="hover:underline text-blue-400"
          >
            Read more -&gt;
          </Link>
        </article>
      </section>
    </main>
  );
}
