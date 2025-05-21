import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/darkmode/theme-provider";
import { ModeToggle } from "@/components/darkmode/darkmode";
import Navbar from "@/components/navbar/navbar";
import { quicksand } from "@/utils/font";
import "../style/style.css"


export const metadata: Metadata = {
  title: "Krisapat Portfolio",
  description:
    "รวมผลงานการพัฒนาเว็บไซต์ของ Krisapat ทั้งด้าน frontend และออกแบบ UI เพื่อแสดงความสามารถและประสบการณ์ในสายงาน Web Development ครับ",
  verification: {
    google: "ORiB5dHLU_R5Pg5xZ_8NRm3FZcCnDmpJdzjb7tgwZJA",
    other: {
      "msvalidate.01": "EC092E5DBF6C0B2CE92B94096CC32B4B",
    },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noto-sans-thai-noto">
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
