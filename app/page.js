"use client";

import React from "react";
import styled from "styled-components";
import Header from "../src/components/common/header";
import Main from "../src/components/main/main";
import Footer from "../src/components/common/footer";
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
