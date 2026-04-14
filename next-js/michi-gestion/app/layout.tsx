import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="bg-white shadow">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">🐱 Michi Gestión</h2>

            <nav className="flex gap-4">
              <Link href="/" className="hover:text-blue-600 transition">
                Inicio
              </Link>
            </nav>
          </div>
        </header>

        {/* CONTENIDO */}
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-white border-t">
          <div className="max-w-4xl mx-auto px-4 py-4 text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Michi Gestión 🐾
          </div>
        </footer>
      </body>
    </html>
  );
}
