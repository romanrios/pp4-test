"use client";

import { useState } from "react";

export default function BotonAdoptar({
  adoptadoInicial,
}: {
  adoptadoInicial: boolean;
}) {
  const [adoptado, setAdoptado] = useState(adoptadoInicial);

  return (
    <div className="mt-4">
      <p className="mb-2 font-medium">
        Estado:{" "}
        {adoptado ? (
          <span className="text-green-600">✅ Adoptado</span>
        ) : (
          <span className="text-yellow-600">🟡 Disponible</span>
        )}
      </p>

      {!adoptado && (
        <button
          onClick={() => setAdoptado(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition active:scale-95"
        >
          Adoptar
        </button>
      )}
    </div>
  );
}
