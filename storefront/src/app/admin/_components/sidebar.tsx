import { initializeWidgets } from "@/lib/cms/initialization";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import AddPageForm from "./add-page-form";

export default function Sidebar(props: {
  widgets: Awaited<ReturnType<typeof initializeWidgets>>;
}) {
  return (
    <div className="h-full max-w-xs w-full bg-slate-50 border-r border-slate-200 border-solid">
      <aside className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 px-4 pt-2 pb-4 border-b border-solid border-slate-200">
            <h4 className="text-base font-semibold text-slate-700">Pages</h4>
            <div className="flex justify-center items-center gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Page"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home">Home</SelectItem>
                  <SelectItem value="test">Test</SelectItem>
                  <SelectItem value="about">About</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-2">
                <AddPageForm />
              </div>
            </div>
          </div>
          <div className="flex flex-col px-2">
            <div className="px-2">
              <Label htmlFor="widgetSearch2">Search Widgets</Label>
              <Input id="widgetSearch" />
            </div>
            <div className="max-h-full overflow-y-auto overflow-x-hidden flex flex-col gap-4 px-2 py-4">
              {props.widgets.map((w, i) => (
                <div
                  tabIndex={0}
                  className={cn(
                    "flex justify-between items-center cursor-grab text-slate-700 select-none shadow-sm border border-solid px-4 py-2 border-slate-200 rounded-xl active:shadow-md active:scale-[101%] active:shadow-slate-300/75 hover:shadow-md hover:scale-[101%] transition-all shadow-slate-200 hover:shadow-slate-300/75 outline-2 outline-slate-600 bg-gradient-to-b from-white to-slate-50 duration-200 ease-in-out",
                    {
                      "rotate-6": false,
                    }
                  )}
                  key={i}
                >
                  <div className="flex flex-col justify-center items-start">
                    <p className="capitalize text-sm font-semibold">{w.name}</p>
                    {w.description && (
                      <p className="text-sm">{w.description}</p>
                    )}
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <button className="w-full px-4 py-2 border-t border-b border-solid border-slate-200 flex justify-between items-center gap-4 hover:bg-slate-100 transition-all ease-in-out duration-150">
            <div className="flex flex-col items-start">
              <h4 className="text-sm font-semibold text-slate-700">Jane Doe</h4>
              <p className="text-sm text-slate-500">jane.doe@gmail.com</p>
            </div>
            <Image
              src="/images/profile.png"
              alt="profile for jane doe"
              width={48}
              height={48}
              className="rounded-full"
            />
          </button>
        </div>
      </aside>
    </div>
  );
}
