import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark-2 lg:py-[110px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-5/12 lg:w-6/12">
            <div className="relative mx-auto aspect-[129/138] max-w-[357px] text-center">
              <Image
                src="/images/404.svg"
                alt="image"
                fill
                className="mx-auto max-w-full "
              />
              {/* <Image
                src="/images/404-dark.svg"
                alt="image"
                fill
                className="mx-auto hidden max-w-full dark:block"
              /> */}
            </div>
          </div>
          <div className="w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12">
            <div>
              <div className="mb-8"></div>
              <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
                We Can&#39;t Seem to Find The Page You&#39;re Looking For.
              </h3>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <Link
                href="/"
                className="rounded-md bg-dark px-7 py-3 text-base font-medium text-white transition hover:bg-primary dark:bg-primary dark:hover:bg-primary/80"
              >
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
