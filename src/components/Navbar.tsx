import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import { UserAccountNav } from "./UserAccountNav";
import { FcReddit } from "react-icons/fc";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed inset-x-0 top-0 z-10 h-fit border-b border-zinc-300 bg-zinc-100 py-4 dark:border-zinc-600 dark:bg-black-500">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between gap-6 sm:gap-4">
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
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href="sign-in" className={buttonVariants()}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
