import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { editListing, getListingById } from "@/services/apiListings";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { setMaxListeners } from "events";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name must be at least 8 characters.",
  }),
  description: z.string().min(1, {
    message: "name must be at least 8 characters.",
  }),
  price: z.string().min(1, {
    message: "Price must be at least 1 characters.",
  }),
});

function EditProduct() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "0",
    },
  });

  useEffect(() => {
    async function fetchListing() {
      if (!id) return;

      try {
        const listing = await getListingById(id);
        form.reset({
          name: listing.name || "",
          description: listing.description || "",
          price: listing.price || "",
        });
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }

    fetchListing();
  }, [id, form]);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!id) throw new Error("Id is undefined");

    editListing({ ...values, id });
  }

  if (loading) return <div>Loading...</div>;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Listing name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="Enter Listing price..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="w-full"
                  placeholder="Enter Listing description..."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create New Listing</Button>
      </form>
    </Form>
  );
}

export default EditProduct;
