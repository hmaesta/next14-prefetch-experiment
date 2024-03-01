import { ReactElement } from "react";

export default async function Layout({ children }: { children: ReactElement }) {
  return (
    <main className="p-10">
      <h1>Pokemon [static]</h1>

      {children}
    </main>
  );
}
