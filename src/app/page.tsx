import CustomFeed from "@/components/homepage/CustomFeed";
import GeneralFeed from "@/components/homepage/GeneralFeed";
import { buttonVariants } from "@/components/ui/Button";
import { getAuthSession } from "@/lib/auth";
import { Home as HomeIcon } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <>
      <h1 className="text-3xl font-bold md:text-4xl">Your Feed</h1>
      <div className="grid grid-cols-1 gap-y-4 py-6 md:grid-cols-3 md:gap-x-4">
        {/* @ts-expect-error server component */}
        {session ? <CustomFeed /> : <GeneralFeed />}

        {/* subreddit info */}
        <div className="order-first h-fit overflow-hidden rounded-lg border border-gray-200 md:order-last">
          <div className="bg-black-100/50 px-6 py-4 dark:bg-black-500">
            <p className="flex items-center gap-1.5 py-3 font-semibold">
              <HomeIcon className="h-4 w-4" />
              Home
            </p>
          </div>
          <dl className="-my-3 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <p className="text-zinc-500 dark:text-zinc-200">
                Your personal Reddit home page. Come here to check in with your
                favorite communities.
              </p>
            </div>

            <Link
              className={buttonVariants({
                className: "mb-6 mt-4 py-5 md:w-full",
                variant: "outline",
              })}
              href={`/r/create`}
            >
              Create Community
            </Link>
          </dl>
        </div>
      </div>
    </>
  );
}
