import "./globals.css";
import { Inter } from "next/font/google";
// import { StatusContextProvider } from "@/context/status.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noah Networks",
  description: "Personal website for Noah Milberger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        {/* <StatusContextProvider>{children}</StatusContextProvider> */}
        {children}
      </body>
    </html>
  );
}
