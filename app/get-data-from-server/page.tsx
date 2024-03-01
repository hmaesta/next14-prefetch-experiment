const wait = (n: number) => new Promise((resolve) => setTimeout(resolve, n));

const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

async function getData() {
  const id = randomIntFromInterval(1, 300);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  await wait(3000);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  // return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return (
    <div>
      <div className="flex gap-4">
        <div className="shring-0">
          <div className="rounded border p-2 size-28">
            <img src={data.sprites.front_default} alt="" />
          </div>
        </div>
        <div className="grow">
          <div>
            <strong>Name:</strong> {data.name}
          </div>
          <div className="text-sm mt-5 pt-5 border-t">
            {data.stats.map(
              (stat: {
                base_stat: string | number;
                stat: { name: string };
              }) => (
                <div key={stat.stat.name}>
                  <span className="font-medium">{stat.stat.name}:</span>{" "}
                  {stat.base_stat}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <details>
          <summary>Show JSON response</summary>
          <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
        </details>
      </div>
    </div>
  );
}
