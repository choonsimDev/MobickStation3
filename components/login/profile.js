// components/Profile.js : 로그인 상태에 따라 다른 화면을 보여주는 컴포넌트
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
