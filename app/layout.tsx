import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/darkmode/theme-provider";
import { ModeToggle } from "@/components/darkmode/darkmode";
import Navbar from "@/components/navbar/navbar";
import { quicksand } from "@/utils/font";
import "../style/style.css"


export const metadata: Metadata = {
  title: "Krisapat Portfolio",
  description: "รวมผลงานการพัฒนาเว็บไซต์ของ Krisapat ทั้งด้าน frontend และออกแบบ UI เพื่อแสดงความสามารถและประสบการณ์ในสายงาน Web Development ครับ",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
