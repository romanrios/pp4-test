export type Gato = {
  id: number;
  nombre: string;
  edad: number;
  descripcion: string;
  adoptado: boolean;
};

export const gatos: Gato[] = [
  {
    id: 1,
    nombre: "Lea",
    edad: 2,
    descripcion: "Muy juguetón y cariñoso",
    adoptado: false,
  },
  {
    id: 2,
    nombre: "Rocky",
    edad: 1,
    descripcion: "Compañero",
    adoptado: false,
  },
  {
    id: 3,
    nombre: "Grisú",
    edad: 1,
    descripcion: "Tranquilo y dormilón",
    adoptado: false,
  },
  {
    id: 4,
    nombre: "Giacomino il Guardiano delle Galassie e dell'iperspazio",
    edad: 1,
    descripcion: "Juguetón",
    adoptado: false,
  },
  {
    id: 5,
    nombre: "Pimpi",
    edad: 1,
    descripcion: "Tranquilo",
    adoptado: false,
  },
];
