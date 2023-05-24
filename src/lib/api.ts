export const getter = async () => {
  const a = await fetch("https://dummyjson.com/products/1", {
    method: "GET",
  });
  const result = await a.json();
  return result;
};
