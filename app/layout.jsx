import "./globals.css";
import { JetBrains_Mono, Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });


export const metadata = {
title: "Your Name — Portfolio",
description: "Product designer / creative technologist portfolio",
metadataBase: new URL("https://example.com"),
openGraph: { title: "Your Name — Portfolio", description: "Work, writing, experiments." },
};


export default function RootLayout({ children }) {
return (
<html lang="en" className={`${inter.variable} ${mono.variable}`}>
<body className="bg-paper text-ink antialiased selection:bg-ink selection:text-white">
<main className="mx-auto max-w-4xl px-5 py-14 md:py-16">
{children}
<footer className="mt-16 flex items-center justify-between text-sm text-mute">
<span>© {new Date().getFullYear()} Your Name</span>
<span>v0.1.0 • Next.js • Vercel</span>
</footer>
</main>
</body>
</html>
);
}