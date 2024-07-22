// Main App Layout
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

// Declaring font
const inter = Inter({ subsets: ["latin"] });

// Setting site metadata
export const metadata: Metadata = {
    title: "Server Wiki",
    description: "A wiki for SamWake and Kyro's fabulous Minecraft server",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            // Setting app background, height, and text color
            className={
                (inter.className, `bg-appBackground min-h-screen text-white overflow-x-hidden`)
            }>
            {/* Setting max app body width to 1440px and centering it on the screen */}
            <body className="max-w-[1440px] mx-auto">
                {/* Creating navigation menu */}
                <Navigation />
                <main className="max-w-[1440px]">{children}</main>
            </body>
        </html>
    );
}
