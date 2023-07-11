import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import { UserAccountNav } from "./UserAccountNav";
import { FcReddit } from "react-icons/fc";
import { MdOutlineLogin } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed inset-x-0 top-0 z-10 border-b border-zinc-300 bg-zinc-100 py-4 dark:border-zinc-600 dark:bg-black-500">
      <div className="container mx-auto flex max-w-7xl items-center justify-between gap-6 sm:gap-4">
        {/* logo */}
        <Link href="/" className="flex items-center gap-4">
          <FcReddit className="hidden sm:block sm:h-12 sm:w-12" />
          <p className="hidden text-lg font-medium text-zinc-700 dark:text-zinc-100 md:block">
            Reddit Clone
          </p>
        </Link>

        {/* search bar */}
        <SearchBar />
        {/* auth */}
        <div className="flex items-center gap-6 sm:gap-4">
          <ThemeToggle />
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link
              href="sign-in"
              className="flex justify-center rounded-full h-6 w-6 sm:h-8 sm:w-8 items-center bg-transparent text-zinc-900 ring-2 ring-zinc-400 ring-offset-1 focus-within:ring-2 focus-within:ring-zinc-500 hover:bg-zinc-200 hover:ring-2 hover:ring-zinc-500 hover:ring-offset-1 focus:ring-2 focus:ring-zinc-500 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-zinc-800"
            >
              <span className="sr-only">Sign In</span>
              <MdOutlineLogin className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
