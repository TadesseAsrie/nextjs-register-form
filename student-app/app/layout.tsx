import React from "react";
import "./globals.css";

import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
export const metadata = {
  title: "Student Management Portal",
  description: "Built with Next.js & TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Sidebar />

        {/* Main Content Area Wrapper */}
        <main
          style={{
            marginLeft: "var(--sidebar-width)",
            marginTop: "60px",
            marginBottom: "40px",
            padding: "40px",
            minHeight: "calc(100vh - 100px)",
          }}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
