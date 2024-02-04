"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  panels: z.coerce.number().positive({
    message: "Minimum of at least 1 panel.",
  }),
  battery: z.boolean().default(true),
});

export default function SimpleCalculator({ setIsLoading, setPriceEstimate }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      panels: 1,
      battery: true,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true); // Set loading to true when the request starts

    try {
      const response = await fetch("/api/calculator-simple", {
        method: "POST",
        body: JSON.stringify(values),
      });

      // Handle response if necessary
      const data = await response.json();
      // ...
      console.log(data);
      setPriceEstimate(data);
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Simple</CardTitle>
        <CardDescription>Basic estimation of price.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="panels"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Panels</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      placeholder="1, 5, 10..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is the number of panels to install.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="battery"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Include Battery</FormLabel>
                    <FormDescription>
                      This is recommended if you want to store energy.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
