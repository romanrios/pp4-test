import { gatos } from "@/lib/gatos";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">🐱 Gatos en adopción</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gatos.map((gato) => (
          <Link key={gato.id} href={`/gatos/${gato.id}`}>
            <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition cursor-pointer bg-white">
              <h2 className="text-xl font-semibold">{gato.nombre}</h2>

              <p className="text-gray-600">Edad: {gato.edad} años</p>

              <p className="mt-2 text-sm text-gray-500">{gato.descripcion}</p>

              <div className="mt-4">
                {gato.adoptado ? (
                  <span className="text-green-600 font-medium">
                    ✅ Adoptado
                  </span>
                ) : (
                  <span className="text-yellow-600 font-medium">
                    🟡 Disponible
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
