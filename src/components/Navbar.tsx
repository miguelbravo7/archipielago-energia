import { usePathname } from "next/navigation";
import { Link } from "@/navigation";
import clsx from "clsx";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

const navbar = {
  navigation: [
    { label: "home", href: "/" },
    //{ label: "Services", href: "/services" },
    { label: "calculator", href: "/calculator" },
    //{ label: "About", href: "/about" },
    { label: "work", href: "/work" },
    //{ label: "Case study", href: "/work/nedia" },
    { label: "news", href: "#" },
  ],
  action: {
    label: "Let's talk",
    href: "/contact",
  },
};

export default function Navbar() {
  const t = useTranslations("navbar");

  function MobileNav() {
    return (
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="to-whit bg-gradient-to-tr from-orange-200"
          >
            <Link className="mb-6 flex items-center" href="#">
              <Logo />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <div className="grid gap-2 py-6">
              {navbar.navigation.map((link, index) => (
                <Link
                  href={link.href}
                  key={`desktop-nav-link-${index}`}
                  className={clsx(
                    "flex w-full items-center py-2 text-lg font-semibold hover:bg-orange-200",
                  )}
                >
                  {t(link.label)}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <header className="overflow-hidden">
      <nav className="mx-auto flex max-w-7xl items-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Main menu for large screens */}
          <div className="hidden items-center justify-between text-xl font-medium text-stone-700 md:flex md:space-x-0.5 md:text-base lg:space-x-2">
            {navbar.navigation.map((link, index) => (
              <Link
                href={link.href}
                key={`desktop-nav-link-${index}`}
                className={clsx(
                  "block rounded-full px-4 py-1 sm:inline-block",
                  true
                    ? "bg-orange-300 text-stone-700"
                    : "duration-200 ease-in-out hover:bg-orange-300 hover:text-stone-700",
                )}
              >
                {t(link.label)}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex">
            <LocaleSwitcher />
            <PrimaryButton
              href={navbar.action.href}
              className="hover:bg-orange-300"
            >
              {navbar.action.label}
            </PrimaryButton>
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex  h-6 w-fit  items-center">
      {/* Large logo */}
      <Link
        href="/"
        className="group block text-2xl font-black md:hidden lg:block"
      >
        <span className="text-stone-700 transition duration-200 ease-in-out group-hover:text-stone-700">
          Archipielago{" "}
        </span>
        <span className="text-stone-700 transition duration-200 ease-in-out group-hover:text-stone-700">
          Energia
        </span>
      </Link>

      {/* Small logo for mobile screens */}
      <Link
        href="/"
        className="group hidden text-3xl font-black md:block lg:hidden"
      >
        <span className="text-stone-700 transition duration-200 ease-in-out group-hover:text-stone-700">
          A
        </span>
        <span className="text-stone-700 transition duration-200 ease-in-out group-hover:text-stone-700">
          E
        </span>
      </Link>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
