import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header>
          <h2>Mi App</h2>
          <Link href={`/`}>Inicio</Link>
        </header>

        {children}

        <footer>
          <p>Footer simple</p>
        </footer>
      </body>
    </html>
  );
}
