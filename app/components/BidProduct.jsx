"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import BidCard from "./BidCard";
import Axios from "axios";

export default function BidProduct() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Axios.post(
      "https://us-central1-bidleo-398811.cloudfunctions.net/view_all_products",
      {}
    )
      .then((res) => {
        console.log("GEtting Products DATA From::", res.data.products);
        // const filteredProducts = res.data.products.filter(
        //   (product) => product.type === "bidding"
        // );
        const auctionProducts = 
        setLoading(true);
        setProducts(res.data.products);
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="md:py-5 bg-gray-100" id="live">
        <div className="container mx-auto px-4">
          <h2 className="mt-6 mb-8 text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
            <span className="text-gray-900 ">Live </span>
            <span className="text-yellow-500">Auctions</span>
          </h2>

          <div className="flex flex-wrap -mx-3 md:mb-10 mb-6">
            {loading ? (
              products.map((product) => (
                <BidCard key={product.product_id} product={product} />
              ))
            ) : (
              <div className="flex justify-center  items-center h-40 w-full">
                <span className="w-full mx-auto ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-arrow-repeat animate-spin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                    <path d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                  </svg>
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
