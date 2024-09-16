"use client";

import { signIn } from "next-auth/react";

const LoginButton = () => (
  <button onClick={() => signIn("google")}>Sign in with Google</button>
);

export default LoginButton;
