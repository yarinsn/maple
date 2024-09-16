"use client";

import { useSession } from "next-auth/react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <h1>You are not signed in</h1>
        <LoginButton />
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
      <LogoutButton />
    </div>
  );
}
