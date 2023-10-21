import clsx from "clsx";
import Link from "next/link";

import { SocialIcon } from "@/components/SocialIcon";

export function SocialLink({ className, href, icon, size = "lg" }) {
  return (
    <Link
      className={clsx(
        "group flex items-center justify-center rounded-full bg-orange-300 text-stone-700 transition duration-300 ease-in-out hover:bg-orange-100",
        size === "lg" ? "h-12 w-12" : "h-10 w-10",
        className,
      )}
      href={href}
    >
      <SocialIcon
        name={icon}
        className={clsx(
          "transition duration-300 ease-in-out group-hover:text-white",
          size === "lg" ? "h-6 w-6" : "h-5 w-5",
        )}
      />
    </Link>
  );
}
