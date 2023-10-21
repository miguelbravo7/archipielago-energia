import Link from "next/link";
import clsx from "clsx";

export function PrimaryButton({
  className = "hover:bg-white h-14",
  href,
  children,
  ...props
}) {
  return href ? (
    <Link
      href={href}
      className={clsx(
        "flex w-auto items-center justify-center rounded-full bg-orange-100 px-8 py-3 font-semibold leading-snug text-stone-500 transition duration-250 ease-in-out hover:text-stone-700 focus:outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      className={clsx(
        className,
        "flex w-auto items-center justify-center rounded-full bg-orange-100 px-8 py-3 text-base font-semibold leading-snug text-stone-500 transition duration-250 ease-in-out hover:text-stone-700 focus:outline-none",
      )}
      {...props}
    >
      {children}
    </button>
  );
}
