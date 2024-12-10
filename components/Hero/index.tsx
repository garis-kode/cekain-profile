"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              Try It Now – Split Bills Without the Hassle!
              </h4>
              <h1 className="mb-5 text-4xl font-bold text-black dark:text-white xl:text-5xl ">
              Cekain: Hangout Jadi Enak
              </h1>
              <p>
              Enjoy a more convenient and efficient dining experience with Cekain, the AI-powered split bill app that makes your hangouts even more fun.
              </p>

              <div className="mt-10 flex">
                    <a href="https://app.cekain.com"
                      aria-label="get started button"
                      className="flex rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-primaryho"
                    >
                      Get Started
                    </a>
              </div>
            </div>

            <div className="animate_right hidden md:w-2/4 lg:block">
              <div className="relative">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-[-50px] top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 -right-[-40px] -botom-5 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-[-80px] bottom-0 z-1"
                />
                <div className=" relative aspect-[600/144] w-full">
                  <Image
                    className="dark:hidden"
                    src="/images/hero/hero-light.png"
                    alt="Hero"
                    width={3037}
                    height={1926}                  
                  />
                  <Image
                    className="hidden dark:block"
                    src="/images/hero/hero-dark.png"
                    alt="Hero"
                    width={3037}
                    height={1926}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
