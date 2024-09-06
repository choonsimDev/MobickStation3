import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry.server";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobick Station",
  description: "Mobick Station",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
