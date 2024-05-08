"use client"
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Top5Unique() {
    const [uniqueBiddersByProduct, setUniqueBiddersByProduct] = useState({});
    const [loading, setLoading] = useState(true);

    // Fetch unique bidders for each product
    useEffect(() => {
        setLoading(true);
        Axios.get('https://us-central1-bidleo-398811.cloudfunctions.net/get_top5_unique_bidders')
            .then((res) => {
                console.log("Unique bidders:", res.data.results);
                const uniqueBidders = res.data.results;

                // Group unique bidders by product
                const groupedByProduct = {};
                uniqueBidders.forEach(bidder => {
                    if (!groupedByProduct[bidder.product_id]) {
                        groupedByProduct[bidder.product_id] = [bidder];
                    } else {
                        groupedByProduct[bidder.product_id].push(bidder);
                    }
                });
                setUniqueBiddersByProduct(groupedByProduct);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <>
        <NavBar />
        <div className='bg-gray-900 mt-2'>
            <p className='text-5xl text-white font-semibold text-center'>Top 5 <span className='text-yellow-500'> Unique Bidders</span> </p>
            {loading ? (
                <p className='text-white text-center font-semibold'>Loading...</p>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
                    {Object.keys(uniqueBiddersByProduct).map((productId, index) => (
                        <div key={index} className='border shadow shadow-yellow-500 rounded-md mb-6 p-4 m-4 ms-3 me-3'>
                            <p className='text-white text-2xl font-semibold mb-2'>Product: {productId}</p>
                            {uniqueBiddersByProduct[productId].map((bidder, index) => (
                                <p className='text-white text-2xl font-semibold' key={index}>
                                    {index + 1}. {bidder.msisdn.substring(0, 3)}******{bidder.msisdn.substring(bidder.msisdn.length - 3)}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
        
        </>
    );
}
