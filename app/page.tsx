import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <div>
        <strong>Go to:</strong>
      </div>

      <ul className="list-disc pl-5 mt-5">
        <li>
          <Link href="/prefetch-undefined">
            <span className=" text-violet-600">prefetch=undefined</span>
          </Link>
        </li>
        <li>
          <Link href="/prefetch-true">
            <span className=" text-green-600">prefetch=true</span>
          </Link>
        </li>
        <li>
          <Link href="/prefetch-false">
            <span className=" text-red-600">prefetch=false</span>
          </Link>
        </li>
      </ul>
    </main>
  );
}
