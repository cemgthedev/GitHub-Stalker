import { useUserContext } from "@/contexts/user";

export function HomePage() {
  const { user } = useUserContext();

  return (
      <h1>{JSON.stringify(user?.login)}</h1>
  );
}
