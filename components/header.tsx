import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Header() {
  // const { getUser } = getKindeServerSession(); -> Avoid using it as this will render the entire page dynamically
  // const user = await getUser()

  const { isLoading, user } = useKindeBrowserClient();

  return (
    <header className="flex items-center justify-end px-4 py-2">
      {user ? (
        <p>
          {user.given_name}{" "}
          <img
            className="inline-block w-12 h-12 rounded-full"
            src={user.picture || ""}
            alt="user-image"
          />
        </p>
      ) : (
        <p>Please log in.</p>
      )}
    </header>
  );
}
