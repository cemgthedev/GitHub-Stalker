import { useUserContext } from "@/contexts/user";

export function HomePage() {
  const { user, repositories, followers } = useUserContext();

  return (
      <main className="h-[85vh] overflow-y-auto px-4">
        <h1>{JSON.stringify(user)}</h1>
        <h1>{JSON.stringify(repositories)}</h1>
        <h1>{JSON.stringify(followers)}</h1>
      </main>
  );
}
