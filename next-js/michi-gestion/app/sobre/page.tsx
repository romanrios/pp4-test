import { gatos } from "@/lib/gatos";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>🐱 Gatos en adopción</h1>

      <ul>
        {gatos.map((gato) => (
          <li key={gato.id}>
            <Link href={`/gatos/${gato.id}`}>
              {gato.nombre} ({gato.edad} años)
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
