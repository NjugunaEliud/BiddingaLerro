import React from "react";

export default function Contact() {
  return (
    <section class="relative py-20 md:py-32 overflow-hidden bg-yellow-500" id="contact">
      <img
        class="absolute top-0 right-0 -mt-24"
        src="/light-orange-right.png"
        alt=""
      />
      <div class="relative container px-4 mx-auto">
        <div class="max-w-7xl mx-auto">
          <div class="max-w-2xl mb-8">
            <h1 class="max-w-md font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              <span>CONTACT </span>
              <span class="font-serif italic"> US</span>
            </h1>
          </div>
          <div class="flex flex-wrap -mx-4 items-center">
            <div class="w-full lg:w-1/2 px-4 mb-20 lg:mb-0">
              <div class="flex mb-16 items-center">
                <div class="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-yellow-200">
                  <img src="/icon-email.svg" alt="" />
                </div>
                <div>
                  <span class="sm:text-lg text-gray-900">Email</span>
                  <span class="block text-lg sm:text-2xl font-semibold text-gray-900">
                  info@bidleo.africa
                  </span>
                </div>
              </div>
              <div class="flex items-center">
                <div class="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-200">
                  <img src="/icon-phone.svg" alt="" />
                </div>
                <div>
                  <span class="sm:text-lg text-gray-900">Phone</span>
                  <span class="block text-lg sm:text-2xl font-semibold text-gray-900">
                  +256771660242
                  </span>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <div class="max-w-lg lg:max-w-xl lg:ml-auto">
                <h4 class="text-2xl font-bold text-gray-900 mb-8">
                  Get In Touch
                </h4>
                <form action="">
                  <div class="flex flex-wrap -mx-4 mb-6">
                    <div class="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                      <div>
                        <label
                          class="block mb-1.5 text-sm font-semibold"
                          for=""
                        >
                          <span>Full Name</span>
                          <span class="text-gray-900">*</span>
                        </label>
                        <input
                          class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                          type="text"
                          placeholder="Write your Name"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-1/2 px-4">
                      <div>
                        <label
                          class="block mb-1.5 text-sm font-semibold"
                          for=""
                        >
                          <span>Email</span>
                          <span class="text-red-600">*</span>
                        </label>
                        <input
                          class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                          type="text"
                          placeholder="Type your email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-9">
                    <label class="block mb-1.5 text-sm font-semibold" for="">
                      <span>Message</span>
                      <span class="text-red-600">*</span>
                    </label>
                    <textarea
                      class="w-full h-12 py-3 px-4 resize-none text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                      type="text"
                      placeholder="Type your Message"
                    ></textarea>
                  </div>
                  <button
                    class="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-white bg-gray-900 rounded-md overflow-hidden"
                    type="button"
                  >
                    <div class="absolute top-0 right-full w-full h-full bg-gray-700 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span class="relative">Submit</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
