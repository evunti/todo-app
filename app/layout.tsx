import "./globals.css";
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
          <p>Home</p>
          <p>Completed</p>
        </nav>
        {children}
      </body>
    </html>
  );
}
