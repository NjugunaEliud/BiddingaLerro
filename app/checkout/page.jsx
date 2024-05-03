import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function page() {
  return (
    <>
      <NavBar />

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="p-8 lg:p-20 bg-white">
            <h2 className="mb-20 text-5xl font-bold font-heading">
              Billing address
            </h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full xl:w-2/3 px-4">
                <form action="">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
                      <div className="mb-10">
                        <label
                          className="font-bold font-heading text-gray-600"
                          htmlFor=""
                        >
                          First Name
                        </label>
                        <input
                          className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                          type="text"
                        />
                      </div>
                      <div>
                        <label
                          className="font-bold font-heading text-gray-600"
                          htmlFor=""
                        >
                          Username
                        </label>
                        <div className="mt-4 flex items-center rounded-md">
                          <span className="self-stretch px-6 border border-r-0 rounded-l-md">
                            <svg
                              className="h-full"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C9.51561 16 10.9912 15.5737 12.2671 14.7681L11.7329 13.9224C10.6172 14.6275 9.32617 15 8 15C4.14016 15 0.999996 11.8599 0.999996 8.00003C0.999996 4.14016 4.14013 0.999996 8 0.999996C11.8599 0.999996 15 4.14013 15 8V8.50001C15 9.32717 14.3271 10 13.5 10C12.6728 10 12 9.32717 12 8.50001V5.00001H11V5.3824C10.2662 4.54241 9.20032 4.00002 8 4.00002C5.79444 4.00002 4.00002 5.79444 4.00002 8C4.00002 10.2056 5.79444 12 8 12C9.49433 12 10.7844 11.1667 11.471 9.94946C11.925 10.5829 12.663 11 13.5 11C14.8784 11 16 9.87842 16 8.49998V7.99997C16 3.58888 12.4111 0 8 0V0ZM8 11C6.34569 11 5.00001 9.65428 5.00001 8C5.00001 6.34572 6.34572 5.00001 8 5.00001C9.65428 5.00001 11 6.34572 11 8C11 9.65428 9.65428 11 8 11Z"
                                fill="black"
                              ></path>
                            </svg>
                          </span>
                          <input
                            className="block w-full py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-r-md"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                      <div>
                        <label
                          className="font-bold font-heading text-gray-600"
                          htmlFor=""
                        >
                          Last Name
                        </label>
                        <input
                          className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="w-full mt-10 mb-10 px-4">
                      <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-10 md:mb-0">
                          <div className="lg:mb-10">
                            <label
                              className="font-bold font-heading text-gray-600"
                              htmlFor=""
                            >
                              Address 1
                            </label>
                            <input
                              className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              type="text"
                            />
                          </div>
                          <div className="hidden lg:block">
                            <label
                              className="font-bold font-heading text-gray-600"
                              htmlFor=""
                            >
                              Country
                            </label>
                            <select
                              className="block w-full mt-4 py-4 px-8 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              name=""
                              id=""
                            >
                              <option value="1"></option>
                              <option value="2">United States</option>
                              <option value="3">Spain</option>
                              <option value="4">Poland</option>
                            </select>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                          <div className="mb-10">
                            <label
                              className="font-bold font-heading text-gray-600"
                              htmlFor=""
                            >
                              Address 2
                            </label>
                            <input
                              className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              type="text"
                            />
                          </div>
                          <div className="mb-10 lg:hidden">
                            <label
                              className="font-bold font-heading text-gray-600"
                              htmlFor=""
                            >
                              Country
                            </label>
                            <select
                              className="block w-full mt-4 py-4 px-8 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              name=""
                              id=""
                            >
                              <option value="1"></option>
                              <option value="2">United States</option>
                              <option value="3">Spain</option>
                              <option value="4">Poland</option>
                            </select>
                          </div>
                          <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-3/5 px-4 mb-10 lg:mb-0">
                              <label
                                className="font-bold font-heading text-gray-600"
                                htmlFor=""
                              >
                                State
                              </label>
                              <select
                                className="block w-full mt-4 py-4 px-8 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                name=""
                                id=""
                              >
                                <option value="1"></option>
                                <option value="2">United States</option>
                                <option value="3">Spain</option>
                                <option value="4">Poland</option>
                              </select>
                            </div>
                            <div className="w-full lg:w-2/5 px-4">
                              <label
                                className="font-bold font-heading text-gray-600"
                                htmlFor=""
                              >
                                Zip Code
                              </label>
                              <input
                                className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mb-8 px-4">
                      <label className="flex mb-6 items-center">
                        <input
                          type="checkbox"
                          name="accountType"
                          value="personal"
                        />
                        <span className="ml-2 text-sm">
                          Shipping address is the same as my billing address
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="accountType"
                          value="personal"
                        />
                        <span className="ml-2 text-sm">
                          Save this information for next time
                        </span>
                      </label>
                    </div>
                    <div className="w-full mb-8 px-4">
                      <h3 className="mb-4 font-bold font-heading text-gray-600">
                        Payment
                      </h3>
                      <label className="flex mb-6 items-center">
                        <input
                          type="radio"
                          name="paymentType"
                          value=""
                          checked=""
                        />
                        <span className="ml-2 text-sm">Credit card</span>
                      </label>
                      <label className="flex mb-6 items-center">
                        <input type="radio" name="paymentType" value="" />
                        <span className="ml-2 text-sm">Debit card</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="paymentType" value="" />
                        <span className="ml-2 text-sm">PayPal</span>
                      </label>
                    </div>
                    <div className="w-full px-4">
                      <div className="flex flex-wrap -mx-4 mb-10">
                        <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
                          <div>
                            <label
                              className="font-bold font-heading text-gray-600"
                              htmlFor=""
                            >
                              Name on card
                            </label>
                            <input
                              className="block w-full mt-4 mb-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              type="text"
                            />
                            <p className="text-sm text-gray-500">
                              Full name as displayed on card
                            </p>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                          <div>
                            <label
                              className="font-bold font-heading text-gray-600"
                              htmlFor=""
                            >
                              Credit card number
                            </label>
                            <input
                              className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4">
                          <div className="mb-10">
                            <label
                              className="font-bold font-heading text-gray-600"
                              htmlFor=""
                            >
                              Expiration
                            </label>
                            <input
                              className="block w-full mt-4 mb-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                          <div className="mb-10">
                            <label
                              className="font-bold font-heading text-gray-600"
                              htmlFor=""
                            >
                              CVV
                            </label>
                            <input
                              className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-full xl:w-1/3 px-4">
                <div className="mb-12 p-6 lg:p-12 bg-blue-300">
                  <div className="mb-6 pb-8 border-b border-blue-100">
                    <h2 className="mb-6 text-3xl font-bold font-heading text-white">
                      Order summary
                    </h2>
                    <p className="text-blue-50">
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                  </div>
                  <div className="flex mb-2 justify-between items-center">
                    <span className="text-blue-50">Order subtotal</span>
                    <span className="text-xl font-bold font-heading text-white">
                      $89.67
                    </span>
                  </div>
                  <div className="flex mb-2 justify-between items-center">
                    <span className="text-blue-50">Shipping</span>
                    <span className="text-xl font-bold font-heading text-white">
                      $11.00
                    </span>
                  </div>
                  <div className="flex mb-5 justify-between items-center">
                    <span className="text-blue-50">Tax</span>
                    <span className="text-xl font-bold font-heading text-white">
                      $0
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold font-heading text-white">
                      Total
                    </span>
                    <span className="text-xl font-bold font-heading text-white">
                      $100.67
                    </span>
                  </div>
                </div>
                <div>
                  <span className="inline-block mb-4 font-medium">
                    Apply discount code:
                  </span>
                  <div className="flex mb-12 flex-wrap lg:flex-nowrap items-center">
                    <input
                      className="inline-block mb-4 md:mb-0 mr-4 px-4 py-4 placeholder-gray-800 font-bold font-heading border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                      type="text"
                      placeholder="SUMMER30X"
                    />
                    <a
                      className="inline-block mb-4 md:mb-0 px-7 py-4 text-white font-bold font-heading uppercase bg-gray-800 hover:bg-gray-700 rounded-md"
                      href="#"
                    >
                      Apply
                    </a>
                  </div>
                  <a
                    className="block w-full py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
                    href="#"
                  >
                    Pay Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
