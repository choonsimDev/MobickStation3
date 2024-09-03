"use client";

import React from "react";
import Header from "../../../components/common/header";
import Category from "../../../components/store/category";
import Footer from "../../../components/common/footer";
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
