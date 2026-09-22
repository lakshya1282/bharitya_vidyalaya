import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Bharti Vidyalaya, Kumhari | Building Knowledge. Shaping Futures.",
  description:
    "Since 1984, Bharti Vidyalaya has been committed to providing holistic, high-quality education in Kumhari with 42+ years of educational experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="font-sans min-h-full flex flex-col bg-black text-white selection:bg-white selection:text-black">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

