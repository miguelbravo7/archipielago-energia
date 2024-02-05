"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { GlobeIcon, FlagIcon } from "lucide-react";
import { locales } from "@/i18n";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="w-full justify-start text-left font-normal "
            variant="outline"
          >
            <GlobeIcon className="mr-1 h-4 w-4 " /> {pathName.split("/")[1]}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-auto p-0 ">
          <DropdownMenuGroup>
            {locales.map((locale) => (
              <Link key={locale} href={redirectedPathName(locale)}>
                <DropdownMenuItem>
                  <FlagIcon className="mr-2 h-4 w-4" />
                  {locale}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
