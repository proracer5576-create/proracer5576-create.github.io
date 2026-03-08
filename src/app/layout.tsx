import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tbucks - 선생님들의 편안한 휴식을 위하여",
  description: "선생님들의 편안한 휴식을 위하여, 함께 채워가는 교육 플랫폼 Tbucks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${manrope.className} bg-background-light text-text-main font-display antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
