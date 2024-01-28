"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";
import clsx from "clsx";
import { Transition, Popover } from "@headlessui/react";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";

const navbar = {
  navigation: [
    { label: "Home", href: "/" },
    //{ label: "Services", href: "/services" },
    { label: "Calculator", href: "/calculator" },
    //{ label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    //{ label: "Case study", href: "/work/nedia" },
    { label: "News", href: "#" },
  ],
  action: {
    label: "Let's talk",
    href: "/contact",
  },
};

export const Navbar = () => {
  const pathname = usePathname();

  function MenuIcon({ open }) {
    return (
      <>
        <span
          className={clsx(
            "absolute block h-1 rotate-0 transform rounded-full bg-stone-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-orange-100",
            open ? "left-1/2 top-2 w-0" : "left-0 top-0 w-full",
          )}
        />
        <span
          className={clsx(
            "absolute left-0 top-2 block h-1 w-full transform rounded-full bg-stone-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-orange-100",
            open ? "rotate-45" : "rotate-0",
          )}
        />
        <span
          className={clsx(
            "absolute left-0 top-2 block h-1 w-full transform rounded-full bg-stone-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-orange-100",
            open ? "-rotate-45" : "rotate-0",
          )}
        />
        <span
          className={clsx(
            "absolute block h-1 rotate-0 transform rounded-full bg-stone-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-orange-100",
            open ? "left-1/2 top-2 w-0" : "left-0 top-4 w-full",
          )}
        />
      </>
    );
  }

  function MobileNav() {
    return (
      <div className="block md:hidden">
        <Popover>
          <Popover.Button
            className="group relative z-50 h-5 w-6 rotate-0 transform cursor-pointer transition duration-500 ease-in-out focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {({ open }) => <MenuIcon open={open} />}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <Popover.Panel
              as="div"
              className="absolute left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-gradient-to-tr from-orange-200 to-white"
            >
              <div className="mx-auto flex w-full flex-col items-center justify-evenly space-y-8 p-4 text-xl">
                {navbar.navigation.map((link, index) => (
                  <Link
                    href={link.href}
                    key={`mobile-nav-link-${index}`}
                    className={clsx(
                      "block rounded-full px-6 py-2 font-medium sm:inline-block",
                      pathname === link.href
                        ? "bg-orange-300 text-stone-700"
                        : "text-stone-700 transition duration-200 ease-in-out hover:bg-orange-300 hover:text-stone-700",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                <PrimaryButton
                  href={navbar.action.href}
                  className="h-14 text-lg hover:bg-orange-300"
                >
                  {navbar.action.label}
                </PrimaryButton>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    );
  }

  return (
    <header className="overflow-hidden">
      <nav className="mx-auto flex max-w-7xl items-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
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
                C
              </span>
              <span className="text-stone-700 transition duration-200 ease-in-out group-hover:text-stone-700">
                S
              </span>
            </Link>
          </div>

          {/* Main menu for large screens */}
          <div className="hidden items-center justify-between text-xl font-medium text-stone-700 md:flex md:space-x-0.5 md:text-base lg:space-x-2">
            {navbar.navigation.map((link, index) => (
              <Link
                href={link.href}
                key={`desktop-nav-link-${index}`}
                className={clsx(
                  "block rounded-full px-4 py-1 sm:inline-block",
                  pathname === link.href
                    ? "bg-orange-300 text-stone-700"
                    : "duration-200 ease-in-out hover:bg-orange-300 hover:text-stone-700",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
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
};
