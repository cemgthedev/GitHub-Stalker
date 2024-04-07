"use client"
import { useUserContext } from "@/contexts/user";

export default function Home() {
  const { user } = useUserContext();

  return (
      <h1>{JSON.stringify(user?.login)}</h1>
  );
}
