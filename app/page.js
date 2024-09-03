"use client";

import React from "react";
import styled from "styled-components";
import Header from "../components/common/header";
import Main from "../components/main/main";
import Footer from "../components/common/footer";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Header />
      <Main />
      <Footer />
    </SessionProvider>
  );
}
