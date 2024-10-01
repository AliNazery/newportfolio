import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import localFont from "next/font/local";
import "./style/globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/Components/Footer/Footer";
import SidebarHeader from "@/Components/Header/Header";

const inter = Inter({ subsets: ["latin"] });
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "@Ali Nazery",
  description: "Web developer, React Developer",
  keywords: [
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Redux Toolkit",
    "TypeScript",
    "Git",
    "GitHub",
    "Front-end Development",
  ],
  authors: [{ name: "Ali Nazery" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ThemeProvider attribute="class">
          <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
              {/* Sidebar Header - Hidden on small screens */}

              <SidebarHeader />

              {/* Main Content */}
              <div className="flex-1 ml-0 lg:ml-16">{children}</div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
