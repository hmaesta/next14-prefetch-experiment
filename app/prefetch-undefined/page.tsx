import Link from "next/link";

export default function Page() {
  return (
    <main className="p-24">
      <h1 className="text-violet-600">Prefetch=undefined</h1>

      <div className="mt-5">
        <strong>Go to:</strong>
      </div>

      <ul className="list-disc pl-5 mt-5">
        <li>
          <Link href="/get-data-from-server/1" prefetch={undefined}>
            /get-data-from-server/1{" "}
            <span className="opacity-50 text-violet-600">
              prefetch=undefined
            </span>
          </Link>
        </li>
        <li>
          <Link href="/get-data-from-server/2" prefetch={undefined}>
            /get-data-from-server/2{" "}
            <span className="opacity-50 text-violet-600">
              prefetch=undefined
            </span>
          </Link>
        </li>
        <li>
          <Link href="/get-data-from-server/3" prefetch={undefined}>
            /get-data-from-server/3{" "}
            <span className="opacity-50 text-violet-600">
              prefetch=undefined
            </span>
          </Link>
        </li>
      </ul>

      <ul className="list-disc pl-5 mt-5">
        <li>
          <Link href="/get-static/1" prefetch={undefined}>
            /get-static/1{" "}
            <span className="opacity-50 text-violet-600">
              prefetch=undefined
            </span>
          </Link>
        </li>
        <li>
          <Link href="/get-static/2" prefetch={undefined}>
            /get-static/2{" "}
            <span className="opacity-50 text-violet-600">
              prefetch=undefined
            </span>
          </Link>
        </li>
        <li>
          <Link href="/get-static/3" prefetch={undefined}>
            /get-static/3{" "}
            <span className="opacity-50 text-violet-600">
              prefetch=undefined
            </span>
          </Link>
        </li>
      </ul>
    </main>
  );
}
