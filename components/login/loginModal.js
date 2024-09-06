"use client";

import React, { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const LogoWrapper = styled.div`
  margin-bottom: 20px;

  img {
    width: 100px; /* 로고 이미지 크기 */
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
  text-align: left;

  label {
    font-size: 14px;
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input {
    margin-right: 5px;
  }
`;

const HelperLinks = styled.div`
  margin-bottom: 20px;
  font-size: 14px;

  a {
    color: #0078ff;
    text-decoration: none;
    margin: 0 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0078ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #005fdd;
  }
`;

const Divider = styled.div`
  margin: 20px 0;
  font-size: 14px;
  color: #aaa;
`;

const SocialLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SocialLoginButton = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  background-color: ${(props) =>
    props.naver
      ? "#03c75a"
      : props.kakao
      ? "#FEE500"
      : props.google
      ? "#DB4437"
      : "#ccc"};

  &:hover {
    opacity: 0.8;
  }
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #666;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

export default function LoginModal({ onClose }) {
  return (
    <ModalWrapper>
      <ModalContent>
        <LogoWrapper>
          <img src="/logo.png" alt="로고" /> {/* 로고 이미지 */}
        </LogoWrapper>
        <InputWrapper>
          <label htmlFor="username">아이디를 입력해주세요</label>
          <input type="text" id="username" placeholder="아이디" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">비밀번호를 입력해주세요</label>
          <input type="password" id="password" placeholder="비밀번호" />
        </InputWrapper>
        <CheckBoxWrapper>
          <input type="checkbox" id="autoLogin" />
          <label htmlFor="autoLogin">자동 로그인</label>
        </CheckBoxWrapper>
        <HelperLinks>
          <a href="#">회원가입</a> / <a href="#">아이디/비밀번호 찾기</a>
        </HelperLinks>
        <LoginButton>로그인</LoginButton>
        <Divider>--------간편 로그인--------</Divider>
        <SocialLoginWrapper>
          <SocialLoginButton naver>네이버 로그인</SocialLoginButton>
          <SocialLoginButton kakao>카카오 로그인</SocialLoginButton>
          <SocialLoginButton google>구글 로그인</SocialLoginButton>
        </SocialLoginWrapper>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
}
