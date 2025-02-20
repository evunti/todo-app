import "./globals.css";

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
