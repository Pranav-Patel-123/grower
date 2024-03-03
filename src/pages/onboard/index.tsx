import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import MetaTags from "~/component/MetaTags";
import { Google, Logo } from "~/svgs";

const Onboard = () => {
  return (
    <>
      <MetaTags
        title={`Sign in to Grower`}
        description="Be a part of the Grower community. Sign in to Grower to start your journey."
      />

      <header className="flex items-center justify-center border-b border-border-light bg-white p-4 dark:border-border dark:bg-primary">
        <Link href="/">
          <Logo className="h-9 fill-secondary" />
        </Link>
      </header>

      <main className="min-h-[100dvh] bg-light-bg dark:bg-black">
        <div className="mx-auto flex max-w-[1440px] gap-0 px-4 py-28 md:gap-8 lg:gap-20 xl:gap-28">
          <div className="flex w-full flex-col justify-center">
            <h1 className="mx-auto mb-5 items-center text-3xl font-semibold text-secondary">
              Sign up / Log in
            </h1>

            <div className="mb-5 flex flex-col justify-center gap-4">
              <button
                onClick={() =>
                  void signIn("google", {
                    callbackUrl: process.env.NEXT_PUBLIC_VERCEL_URL,
                  })
                }
                className="btn-oauth mx-auto w-full lg:w-7/12"
              >
                <Google className="h-5 w-5 fill-gray-700 dark:fill-white" />
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
          <div className="hidden w-full md:block md:w-7/12 xl:w-full">
            <i className="mb-2 block text-lg text-gray-700 dark:text-text-secondary">
              &quot;It&apos;s amazing to see how fast entrepreneurs go from 0 to Blog
              under a domain they own on Grower 🤯. It reminds me a lot of
              what Substack did for journalists.&quot;
            </i>

            <div className="flex items-center gap-2">
              <Image
                src={
                  "https://utfs.io/f/53f08a4c-c6a2-42f0-9fa3-ae206c80fdb9-fvu4vo.jpg"
                }
                width={70}
                height={70}
                alt="hackathon profile"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h1 className="text-lg font-semibold text-gray-700 dark:text-text-secondary">
                  Caffeinated Coders
                </h1>
                <p className="text-sm font-normal text-gray-500 dark:text-text-primary">
                  Winner, Hackathon 
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Onboard;
