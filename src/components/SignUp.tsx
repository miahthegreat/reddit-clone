import UserAuthForm from "@/components/UserAuthForm";
import Link from "next/link";
import { FcReddit } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] dark:bg-black-800">
      <div className="flex flex-col space-y-2 text-center">
        <FcReddit className="mx-auto h-10 w-10" />
        <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Reddit account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        Already a Redditor?{" "}
        <Link
          href="/sign-in"
          className="hover:text-zinc-800 text-sm underline underline-offset-4"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
