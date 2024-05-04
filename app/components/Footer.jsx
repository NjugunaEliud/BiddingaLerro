import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section class="py-6 shadow-md m-1 p-1 rounded-md" >
      <div class="container mx-auto px-4">
        <div class="mt-2 text-center md:flex justify-between items-center">
          <Link href="/">
          {/* <h1 className="text-white text-2xl font-bold">Bidaaanga Lerro</h1> */}
            <Image
              src="/bid Leo.png"
              alt="logo"
              width={80}
              height={150}
              className="mx-auto"
            />
          </Link>

          <div class="flex items-center justify-center md:mt-0 mt-5">
            <a
              class="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full relative"
              href="#"
            >
              <Image
                className="transition ease-in-out  duration-150 hover:scale-110"
                src="/facebook-white-circle.svg"
                alt=""
                fill
                objectFit="contain"
              />
            </a>
            <a
              class="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full relative"
              href="#"
            >
              <Image
                className="transition ease-in-out  duration-150 hover:scale-110"
                src="/instagram-circle.svg"
                alt=""
                fill
                objectFit="contain"
              />
            </a>
            <a
              class="inline-flex items-center justify-center w-12 h-12 rounded-full relative"
              href="#"
            >
              <Image
                className="transition ease-in-out  duration-150 hover:scale-110"
                src="/twitter-circle.svg"
                alt=""
                fill
                objectFit="contain"
              />
            </a>
          </div>
          <p class="text-gray-900 md:mt-0 mt-4">© {currentYear} All Rights Reserved  ,Msimbo Dev Hub </p>
        </div>
      </div>
    </section>
  );
}
