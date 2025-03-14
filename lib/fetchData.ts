export async function getData(collectionName: string) {
  const res = await fetch(`http://localhost:1337/api/${collectionName}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Could not download data from ${collectionName}`);
  }

  const data = await res.json();
  return data.data.length > 0 ? data.data[0] : null;
};
