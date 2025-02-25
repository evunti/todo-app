import "./globals.css";
import Link from "next/link";

// import { Caveat } from "next/font/google";

// const roboto = Caveat({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/completed-page">Completed</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
