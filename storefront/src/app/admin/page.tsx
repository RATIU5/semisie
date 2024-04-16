import { initializeComponents } from "@/lib/cms/initialization";

export default async function Admin() {
  const components = await initializeComponents();
  return (
    <>
      <header>
        <aside className="max-w-xs px-4 py-4 h-full">
          {components.map((c, i) => (
            <div
              tabIndex={i + 1}
              className="flex justify-between items-center cursor-grab text-slate-700 select-none shadow-sm border border-solid px-4 py-2 border-slate-200 rounded-xl active:shadow-md active:scale-[101%] active:shadow-slate-300/75 hover:shadow-md hover:scale-[101%] transition-all shadow-slate-200 hover:shadow-slate-300/75 outline-2 outline-slate-600 bg-gradient-to-b from-transparent to-slate-50 duration-200 ease-in-out"
              key={i}
            >
              <div className="flex flex-col justify-center items-start">
                <h4 className="capitalize text-sm font-semibold">{c.name}</h4>
                {c.description && <p className="text-sm">{c.description}</p>}
              </div>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="text-slate-700"
                  d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          ))}
        </aside>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
