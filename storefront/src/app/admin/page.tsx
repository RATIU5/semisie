import { initializeWidgets } from "@/lib/cms/initialization";
import Sidebar from "./_components/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageSettings from "./_components/page-settings";

export default async function Admin() {
  const widgets = await initializeWidgets();

  return (
    <div className="flex h-full">
      <Sidebar widgets={widgets} />
      <main className="w-full h-full bg-slate-50 p-4">
        <Tabs className="h-full flex flex-col justify-start items-center">
          <TabsList defaultValue="design" className="block">
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="design" className="h-full w-full">
            <div className="w-full h-full bg-white rounded-xl shadow-md flex justify-center items-center">
              <p className="text-slate-300 text-lg m-4 text-center select-none">
                Empty page
              </p>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <PageSettings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
