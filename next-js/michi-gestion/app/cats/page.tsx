async function getCats() {
  const res = await fetch("http://localhost:3000/api/cats", {
    cache: "no-store",
  });
  return res.json();
}

export default async function CatsPage() {
  const cats = await getCats();

  return (
    <div>
      {cats.map((cat: any) => (
        <div key={cat._id}>
          <img src={cat.image} width={200} />
          <h2>{cat.name}</h2>
          <p>{cat.description}</p>
        </div>
      ))}
    </div>
  );
}