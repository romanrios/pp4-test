export type Gato = {
  id: number;
  nombre: string;
  edad: number;
  descripcion: string;
};

export const gatos: Gato[] = [
  {
    id: 1,
    nombre: "Michi",
    edad: 2,
    descripcion: "Muy juguetón y cariñoso",
  },
  {
    id: 2,
    nombre: "Luna",
    edad: 1,
    descripcion: "Tranquila y dormilona",
  },
];
