import { initializeComponents } from "@/lib/cms/initialization";

export default async function Admin() {
  const components = await initializeComponents();
  return (
    <>
      <header>
        <aside>
          {components.map((e) => {
            for (let i = 0; i < e.widget.length; i++) {
              const w = e.widget[i];
              if (w.type === "text") {
                return (
                  <div>
                    <label htmlFor={`${w.type}-${i}`}>
                      {w.label ?? w.name}
                    </label>
                    <input
                      type="text"
                      defaultValue={w.defaultValue}
                      min={w.minLength}
                      max={w.maxLength}
                      id={`${w.type}-${i}`}
                    />
                  </div>
                );
              } else if (w.type === "boolean") {
                return (
                  <div>
                    <label htmlFor={`${w.type}-${i}`}>
                      {w.label ?? w.name}
                    </label>
                    <input type="checkbox" id={`${w.type}-${i}`} />
                  </div>
                );
              }
            }
          })}
        </aside>
      </header>
      <main>Text</main>
      <footer></footer>
    </>
  );
}
