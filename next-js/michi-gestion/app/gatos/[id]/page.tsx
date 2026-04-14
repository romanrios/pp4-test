import { gatos } from "@/lib/gatos";

// 1. Convertimos la función en async
export default async function GatoDetalle({
  params,
}: {
  params: Promise<{ id: string }>; // 2. Definimos params como una Promesa
}) {
  // 3. Esperamos a que los params se resuelvan
  const { id } = await params;

  // 4. Buscamos al gato usando el ID ya resuelto
  const gato = gatos.find((g) => g.id === Number(id));

  if (!gato) {
    return <p>Gato no encontrado (ID: {id})</p>;
  }

  return (
    <main>
      <h1>{gato.nombre}</h1>
      <p>Edad: {gato.edad}</p>
      <p>{gato.descripcion}</p>
    </main>
  );
}
