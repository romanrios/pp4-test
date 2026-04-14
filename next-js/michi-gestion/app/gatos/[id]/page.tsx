import BotonAdoptar from "@/components/BotonAdoptar";
import { gatos } from "@/lib/gatos";

export default async function GatoDetalle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const gato = gatos.find((g) => g.id === Number(id));

  if (!gato) {
    return <p>Gato no encontrado</p>;
  }

  return (
    <main className="p-6 flex justify-center">
      <div className="max-w-md w-full border rounded-2xl p-6 shadow bg-white">
        <h1 className="text-2xl font-bold mb-2">{gato.nombre}</h1>

        <p className="text-gray-600">Edad: {gato.edad} años</p>

        <p className="mt-4 text-gray-700">{gato.descripcion}</p>

        <div className="mt-6">
          <BotonAdoptar adoptadoInicial={gato.adoptado} />
        </div>
      </div>
    </main>
  );
}
