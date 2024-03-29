/**
 * v0 by Vercel.
 * @see https://v0.dev/t/70oVA61xaII
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { forwardRef } from "react";

interface PriceCardProps {
  isLoading: boolean;
  priceEstimate: number;
}

export default forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<PriceCardProps>
>(function Component({ isLoading, priceEstimate }, ref) {
  return (
    <Card className="w-full max-w-md bg-transparent">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold">
          Costo de la instalación
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {isLoading ? (
          <span className="flex h-[48px] w-1/2 text-5xl font-bold">
            <Skeleton className="mt-[10px] h-1/2 w-full rounded-full" />€
          </span>
        ) : (
          <span className="text-5xl font-bold">{priceEstimate}€</span>
        )}
        <ul className="w-full space-y-2 text-sm text-gray-500 ">
          <li className="flex justify-between">
            <span>Unlimited access to all features</span>
            <span className="font-bold"></span>
          </li>
          <li className="flex justify-between">
            <span>Priority customer support</span>
            <span className="font-bold"></span>
          </li>
          <li className="flex justify-between">
            <span>Free updates and upgrades</span>
            <span className="font-bold"></span>
          </li>
          <li className="flex justify-between">
            <span>Cancel anytime</span>
            <span className="font-bold"></span>
          </li>
          <li className="flex justify-between">
            <span>Access to exclusive webinars</span>
            <span className="font-bold"></span>
          </li>
          <li className="flex justify-between">
            <span>1-on-1 coaching sessions</span>
            <span className="font-bold"></span>
          </li>
        </ul>
        <p className="mt-2 w-full text-center text-xs text-red-500 ">
          *These are estimated values
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button ref={ref} size="lg">
          Contact
        </Button>
      </CardFooter>
    </Card>
  );
});
