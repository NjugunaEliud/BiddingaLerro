"use client";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/Navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Image from "next/image";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function page({ params }) {
  // console.log("Paams uid",params.id);

  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const MySwal = withReactContent(Swal);

  const [phoneNumber, setTelephone] = useState("");
  const [bidamount, setBidAmount] = useState("");
  const [name, setName] = useState("");
  const auction_id = params.id

  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    setTelephone(localStorage.getItem("userBidMobile"));
  }, []);

  useEffect(() => {
    Axios.post(
      "https://us-central1-bidleo-398811.cloudfunctions.net/getproductbyuid",
      { uid: params.id }
    )
      .then((res) => {
        // console.log("GEtting Product Detail DATA From::", res);

        setProduct(res.data);
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  }, []);

  const bidProduct = (e) => {
    e.preventDefault();

    const termsCheckbox = document.getElementById('terms');
    if (!termsCheckbox.checked) {
      MySwal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: "You must agree to the terms and conditions to proceed.",
      });
      return;
    }

    setLoading(true);

    Axios.post(
      "https://us-central1-bidleo-398811.cloudfunctions.net/make_payment_bid",
      {
        auction_id: auction_id,
        phoneNumber: phoneNumber,
        bidamount: bidamount,
        name: name
      }
    )
      .then((response) => {

        console.log("Adding data to Bid From::", response.data);
        setIframeUrl(response.data);

        setLoading(false);
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Make payment",
          text: "To place your bid",
        });
        // router.push("/cart");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div
        className={`${!loading && "hidden"
          } w-full h-full fixed  top-0 left-0 bg-white opacity-75 z-50`}
      >
        <span className="text-blue-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
          <FontAwesomeIcon icon={faCircleNotch} spin size="5x" color="blue" />
        </span>
      </div>

      <NavBar />

      <section className="md:py-20 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-24">
            <div className="w-full md:w-1/2 px-4 mb-2 md:mb-0">
              <div className="relative mb-10 md:h-[564px] h-24 bg-white">
                <Image
                  className=" transition ease-in-out  duration-150 mx-auto h-24  w-full  group-hover:scale-110"
                  src={product.product_uri}
                  fill
                  objectFit="contain"
                  alt="product"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4">
              {iframeUrl && (
                <iframe src={iframeUrl} title="Complete payment" width="100%" height="400px" />
              )}
              <div className="lg:pl-20">
                <div className="mb-10 pb-10 border-b">
                  <h2 className="mt-2 mb-6 max-w-xl text-3xl md:text-6xl font-bold font-heading">
                    {product.auction_name}
                  </h2>
                  <div className="mb-8"></div>
                  <p className="inline-block mb-8 text-2xl font-bold font-heading text-blue-300">
                    UGX <span> {product.product_price}</span>
                  </p>
                  <p className="max-w-md text-gray-500">{product.product_description}</p>
                  <form onSubmit={bidProduct}>
                    <div className="flex flex-col items-start space-y-2 mt-6 w-full xl:w-2/3 px-4 mb-4 xl:mb-0">
                      <label className="text-lg font-medium text-gray-500">Enter your name</label>
                      <input className="px-8 py-3 bg-gray-100 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2 mt-6 w-full xl:w-2/3 px-4 mb-4 xl:mb-0">
                      <label className="text-lg font-medium text-gray-500">Enter Phone number</label>
                      <input className="px-8 py-3 bg-gray-100 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2 mt-6 w-full xl:w-2/3 px-4 mb-4 xl:mb-0">
                      <label className="text-lg font-medium text-gray-500">Enter Bid Amount</label>
                      <input className="px-8 py-3 bg-gray-100 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your bid"
                        value={bidamount}
                        onChange={(e) => setBidAmount(e.target.value)}
                      />
                    </div>
                    <div class="flex items-center mt-6">
                      <input type="checkbox" id="terms" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label for="terms" class="ml-2 block text-sm text-gray-900">
                        I agree to the <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">terms and conditions</a>
                      </label>
                    </div>
                    <div className="items-center justify-center mt-6">
                      <button type="submit" className="flex items-center justify-center bg-yellow-500 text-white p-2 rounded-md">Bid now</button>
                    </div>
                  </form>
                </div>
                {/* <div class="flex mb-12">
                  <div class="mr-6">
                    <span class="block mb-4 font-bold font-heading text-gray-400 uppercase">
                      QTY
                    </span>
                    <div class="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                      <button class="py-2 hover:text-gray-700">
                        <svg
                          width="12"
                          height="2"
                          viewBox="0 0 12 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.35">
                            <rect
                              x="12"
                              width="2"
                              height="12"
                              transform="rotate(90 12 0)"
                              fill="currentColor"
                            ></rect>
                          </g>
                        </svg>
                      </button>
                      <input
                        class="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
                        type="number"
                        placeholder="1"
                      />
                      <button class="py-2 hover:text-gray-700">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.35">
                            <rect
                              x="5"
                              width="2"
                              height="12"
                              fill="currentColor"
                            ></rect>
                            <rect
                              x="12"
                              y="5"
                              width="2"
                              height="12"
                              transform="rotate(90 12 5)"
                              fill="currentColor"
                            ></rect>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <span class="block mb-4 font-bold font-heading text-gray-400 uppercase">
                      Size
                    </span>
                    <select
                      class="pl-6 pr-10 py-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                      name=""
                      id=""
                    >
                      <option value="1">Medium</option>
                      <option value="2">Small</option>
                      <option value="3">Large</option>
                    </select>
                  </div>
                </div> */}
                <div className="flex flex-row items-center justify-center w-full md:w-1/2 px-4 gap-6 mb-6">
                  {/* <div className="items-center justify-center">
                    <button class="flex items-center justify-center bg-yellow-500 text-white p-2 rounded-md">Bid now</button>
                  </div> */}
                  {/* <div className="items-center justify-center">
                    <button class="flex items-center justify-center bg-yellow-500 text-white p-2 rounded-md">Buy now</button>
                  </div> */}
                </div>
                {/* <div class="flex flex-row flex-wrap -mx-4 mb-6 items-center">
                  <div class="w-full xl:w-2/3 px-4 mb-4 xl:mb-0">
                    <button
                      class="block bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-5 px-8 rounded-md uppercase transition duration-200"
                      // onClick={bidProduct}
                    
                    >
                      Bid Product
                    </button>
                    <Link
                      class="block bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading py-5 px-8 rounded-md uppercase transition duration-200"
                      href="/checkout"
                    >
                      Bid Product
                    </Link>
                    <button class="flex items-center justify-center mt-6 bg-yellow-500 text-white p-2 rounded-md">Buy now</button>

                  </div>
                  <div class="w-full xl:w-2/3 px-4 mb-4 xl:mb-0">
                    
                    <button class="flex items-center justify-center mt-6 bg-yellow-500 text-white p-2 rounded-md">Bid now</button>

                  </div>
                  <div class="w-full xl:w-1/3 px-4">
                    <a
                      class="ml-auto sm:ml-0 flex-shrink-0 inline-flex mr-4 items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500"
                      href="#"
                    >
                      <svg
                        class="w-6 h-6"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                          stroke="black"
                          stroke-width="1.5"
                        ></path>
                      </svg>
                    </a>
                    <a
                      class="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500"
                      href="#"
                    >
                      <svg
                        class="w-6 h-6"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                          fill="black"
                          stroke="black"
                          stroke-width="0.35"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div> */}
                <div className="flex items-center mt-12">
                  <span className="mr-8 text-gray-500 font-bold font-heading uppercase">
                    SHARE IT
                  </span>

                  <a className="mr-1 w-8 h-8" href="#">
                    <img src="/facebook-white-circle.svg" alt="" />
                  </a>
                  <a className="mr-1 w-8 h-8" href="#">
                    <img src="/instagram-circle.svg" alt="" />
                  </a>
                  <a className="w-8 h-8" href="#">
                    <img src="/twitter-circle.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className="flex flex-wrap mb-16 border-b-2">
              <li className="w-1/2 md:w-auto">
                <a
                  className="inline-block py-6 px-10 bg-white text-gray-500 font-bold font-heading shadow-2xl"
                  href="#"
                >
                  Description
                </a>
              </li>
              <li className="w-1/2 md:w-auto">
                <a
                  className="inline-block py-6 px-10 text-gray-500 font-bold font-heading"
                  href="#"
                >
                  Customer reviews
                </a>
              </li>
              <li className="w-1/2 md:w-auto">
                <a
                  className="inline-block py-6 px-10 text-gray-500 font-bold font-heading"
                  href="#"
                >
                  Shipping &amp; returns
                </a>
              </li>
              <li className="w-1/2 md:w-auto">
                <a
                  className="inline-block py-6 px-10 text-gray-500 font-bold font-heading"
                  href="#"
                >
                  Brand
                </a>
              </li>
            </ul>

            <p className="max-w-2xl text-gray-500">{product.description}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
