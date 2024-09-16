// components/LogoutButton.js

// Ensure this is a Client Component
"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => (
  <button onClick={() => signOut()}>Sign out</button>
);

export default LogoutButton;
