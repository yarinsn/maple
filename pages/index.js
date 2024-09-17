"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import LoginButton from "../components/LoginButton";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // Redirect to dashboard if the user is authenticated
      router.push('/dashboard');
    }
  }, [session, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>You are not signed in</h1>
      <LoginButton />
    </div>
  );
}
