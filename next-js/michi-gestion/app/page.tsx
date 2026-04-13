"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    description: "",
    image: null as File | null,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("age", form.age);
    data.append("description", form.description);
    if (form.image) data.append("image", form.image);

    await fetch("/api/cats", {
      method: "POST",
      body: data,
    });

    alert("Gato publicado 🐱");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Edad" onChange={e => setForm({...form, age: e.target.value})} />
      <textarea placeholder="Descripción" onChange={e => setForm({...form, description: e.target.value})} />
      
      <input type="file" onChange={e => setForm({...form, image: e.target.files?.[0] || null})} />

      <button type="submit">Publicar</button>
    </form>
  );
}