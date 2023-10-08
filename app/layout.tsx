import NavBar from "@/components/NavBar";
import "../Styles/globals.css";
import type { Metadata } from "next";
import StoreProvider from "@/redux/StoreProvider";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Take a tour to the space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <NavBar />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
