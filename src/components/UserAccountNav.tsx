"use client";

import Link from "next/link";
import { User } from "next-auth";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { UserAvatar } from "@/components/UserAvatar";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full ring-2 ring-zinc-400 ring-offset-1 focus-within:ring-2 focus-within:ring-zinc-500 hover:ring-2 hover:ring-zinc-500 hover:ring-offset-1 focus:ring-2 focus:ring-zinc-500">
        <UserAvatar
          user={{ name: user.name || null, image: user.image || null }}
          className="h-8 w-8 rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && (
              <p className="font-medium dark:text-zinc-50">{user.name}</p>
            )}
            {user.email && (
              <p className="w-[200px] truncate text-sm dark:text-zinc-200/90">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/" className="hover:cursor-pointer">
            Feed
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/r/create" className="hover:cursor-pointer">
            Create Community
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/settings" className="hover:cursor-pointer">
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
