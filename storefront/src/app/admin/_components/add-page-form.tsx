"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "./icons";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  slug: z.string().min(2).max(50),
});

export default function AddPageForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch("/api/pages", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then(() => {
        toast({
          variant: "default",
          title: "Successfully created page",
          description: `The page '${values.title}' was successfully created`,
        });
      })
      .catch((error) => {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Failed to create page",
          description: `A problem occurred while creating page '${values.title}'`,
        });
      });
  }

  return (
    <Dialog>
      <Button size="icon" asChild>
        <DialogTrigger>
          <Plus />
        </DialogTrigger>
      </Button>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>New page</DialogTitle>
              <DialogDescription>
                Create a new page by filling out a title and a slug for the
                page.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="About Us" {...field} />
                    </FormControl>
                    <FormDescription>
                      The title is used to display the page name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="about-us" {...field} />
                    </FormControl>
                    <FormDescription>
                      The slug is used to generate the URL of the page.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
