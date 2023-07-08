import Link from "next/link";
import UserAuthForm from "./UserAuthForm";
import { FcReddit } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="container mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[400px] dark:bg-black-800">
      <div className="flex flex-col space-y-2 text-center">
        <FcReddit className="mx-auto h-10 w-10" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back!</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Reddit Account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
      {/* sign in form */}
      <UserAuthForm />

      <p className="px-8 text-center text-sm text-muted-foreground">
        New to Reddit?{" "}
        <Link
          href="sign-up"
          className="hover:text-zinc-800 text-sm underline underline-offset-4"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
