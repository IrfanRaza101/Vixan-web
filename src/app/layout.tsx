 
import "../styles/index.scss";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/assets/img/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
        <title>Vixan - Digital  Creative Agency Next js Template</title>
      </head>

      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
