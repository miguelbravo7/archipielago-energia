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
import { RadioGroup, RadioGroupItem } from "../radio-group";

const formSchema = z.object({
  panels: z.coerce.number().positive({
    message: "Minimum of at least 1 panel.",
  }),
  gridType: z.enum(["mono-phase", "three-phase"], {
    required_error: "You need to select a grid type.",
  }),
  inverterType: z.enum(["isolate", "hybrid", "power-connected"], {
    required_error: "You need to select an inverter type.",
  }),
  battery: z.enum(["lead", "lithium", "agm", "gel"], {
    required_error: "You need to select a battery type.",
  }),
  mount: z.enum(["ground", "roof"], {
    required_error: "You need to select a mount type.",
  }),
});

export default function ComplexCalculator({ setIsLoading, setPriceEstimate }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      panels: 1,
      gridType: "mono-phase",
      inverterType: "isolate",
      battery: "lithium",
      mount: "roof",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true); // Set loading to true when the request starts

    try {
      const response = await fetch("/api/calculator-advanced", {
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
        <CardTitle>Advanced</CardTitle>
        <CardDescription>
          Advanced calculator for a better price estimation.
        </CardDescription>
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
              name="gridType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Grid Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-y-1"
                    >
                      {[
                        { tag: "mono-phase", label: "Mono Phase" },
                        { tag: "three-phase", label: "Three Phase" },
                      ].map((el) => (
                        <FormItem
                          key={el.tag}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={el.tag} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {el.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="inverterType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Inverter Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-y-1"
                    >
                      {[
                        { tag: "isolate", label: "Isolate" },
                        { tag: "hybrid", label: "Hybrid" },
                        { tag: "power-connected", label: "Power Connected" },
                      ].map((el) => (
                        <FormItem
                          key={el.tag}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={el.tag} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {el.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="battery"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Battery Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-y-1"
                    >
                      {[
                        { tag: "lead", label: "Lead" },
                        { tag: "lithium", label: "Lithium" },
                        { tag: "agm", label: "AGM" },
                        { tag: "gel", label: "GEL" },
                      ].map((el) => (
                        <FormItem
                          key={el.tag}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={el.tag} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {el.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mount"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Mount</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-y-1"
                    >
                      {[
                        { tag: "ground", label: "Ground" },
                        { tag: "roof", label: "Roof" },
                      ].map((el) => (
                        <FormItem
                          key={el.tag}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={el.tag} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {el.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
