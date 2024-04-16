import { initializeComponents } from "@/lib/cms/initialization";

export default async function Admin() {
  const components = await initializeComponents();
  return (
    <>
      <header>
        <aside></aside>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
