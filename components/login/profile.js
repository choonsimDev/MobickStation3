// components/Profile.js
"use client";

import { signOut, useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>로그인됨: {session.user.name || session.user.nickname}</p>{" "}
        {/* 닉네임 또는 이름 표시 */}
        <button onClick={() => signOut()}>로그아웃</button>
      </div>
    );
  }

  return <p>로그인되지 않음</p>;
}
