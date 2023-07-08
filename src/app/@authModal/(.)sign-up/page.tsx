import CloseModal from "@/components/CloseModal";
import SignUp from "@/components/SignUp";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="fixed inset-0 z-10 bg-black-900/20 backdrop-blur-lg backdrop-filter">
      <div className="container mx-auto flex h-full max-w-lg items-center">
        <div className="relative h-fit w-full rounded-lg bg-white px-2 py-20 dark:bg-black-800">
          <div className="absolute right-4 top-4">
            <CloseModal />
          </div>

          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default page;
