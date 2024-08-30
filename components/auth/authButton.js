import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 140px;
  height: 44px;
  background-color: #f2f2f2;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #f2f2f2;
  padding: 0;
  cursor: pointer;
  & div {
    color: black;
    font-size: 16px;
  }
`;

const LoginText = styled.div`
  color: black;
  font-size: 20px;
  margin-left: 10px;
`;

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session.user.email} <br />
        <StyledButton onClick={() => signOut()}>로그아웃</StyledButton>
      </>
    );
  }
  return (
    <LoginWrapper>
      <img src="/images/icons/icon_login.png" alt="Logo" width={24} />
      <LoginText onClick={() => signIn("google")}>로그인</LoginText>
    </LoginWrapper>
  );
}
