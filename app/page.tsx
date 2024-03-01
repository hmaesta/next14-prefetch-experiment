import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <div>
        <strong>Go to:</strong>
      </div>

      <ul className="list-disc pl-5 mt-5">
        <li>
          <Link href="/get-data-from-server" prefetch={undefined}>
            /get-data-from-server - prefetch=undefined
          </Link>
        </li>
        <li>
          <Link href="/get-data-from-server" prefetch={true}>
            /get-data-from-server - prefetch=true
          </Link>
        </li>
        <li>
          <Link href="/get-data-from-server" prefetch={false}>
            /get-data-from-server - prefetch=false
          </Link>
        </li>
      </ul>

      <ul className="list-disc pl-5 mt-5">
        <li>
          <Link href="/get-static" prefetch={undefined}>
            /get-static - prefetch=undefined
          </Link>
        </li>
        <li>
          <Link href="/get-static" prefetch={true}>
            /get-static - prefetch=true
          </Link>
        </li>
        <li>
          <Link href="/get-static" prefetch={false}>
            /get-static - prefetch=false
          </Link>
        </li>
      </ul>
    </main>
  );
}
