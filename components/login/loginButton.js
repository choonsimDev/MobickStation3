// components/LoginButton.js
"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return <button onClick={() => signIn("kakao")}>카카오 로그인</button>;
}
