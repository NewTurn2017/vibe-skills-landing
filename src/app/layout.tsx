import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibe Skills - Claude Code를 위한 AI 기반 개발 워크플로우",
  description:
    "자연어를 체계적으로 분석, 계획, 구현, 리뷰된 코드로 바꾸는 4단계 개발 워크플로우. 하나의 명령어로 시작하세요.",
  openGraph: {
    title: "Vibe Skills",
    description: "Claude Code를 위한 AI 기반 개발 워크플로우",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
