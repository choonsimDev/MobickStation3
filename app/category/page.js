"use client";

import React from "react";
import styled from "styled-components";
import Header from "../../src/components/common/header";
import Category from "../../src/components/store/category";
import Footer from "../../src/components/common/footer";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Header />
      <Category />

      <Footer />
    </SessionProvider>
  );
}
