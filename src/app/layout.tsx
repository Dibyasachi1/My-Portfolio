import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dibyasachi Mohanty - Technology Support Professional",
  description: "Resourceful professional in technology support, known for high productivity and efficient task completion. Specialized in troubleshooting, software installation, and network configuration.",
  keywords: ["portfolio", "technology support", "help desk", "MCA", "web development", "troubleshooting"],
  authors: [{ name: "Dibyasachi Mohanty" }],
  openGraph: {
    title: "Dibyasachi Mohanty - Technology Support Professional",
    description: "Resourceful professional in technology support, known for high productivity and efficient task completion. Specialized in troubleshooting, software installation, and network configuration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
