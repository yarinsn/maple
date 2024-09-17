"use client"; // Ensure this is a Client Component

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import LogoutButton from "../components/LogoutButton";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // If the user is not authenticated, redirect them to the login page
      router.push('/');
    }
  }, [status, router]);

  if (status === "loading") {
    // Optional: you can show a loading spinner while checking the session
    return <p>Loading...</p>;
  }

  // If authenticated, show the dashboard content
  if (session) {
    return (
      <div>
        <h1>Welcome to your Dashboard, {session.user.name}!</h1>
        <p>Email: {session.user.email}</p>
        <LogoutButton />
      </div>
    );
  }

  return null; // While redirecting, return null to prevent rendering
}
