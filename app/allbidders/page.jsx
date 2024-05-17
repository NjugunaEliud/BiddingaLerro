"use client"
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AllBidders() {
    const [biddersByProduct, setBiddersByProduct] = useState({});
    const [loading, setLoading] = useState(true);

    // Fetch all bidders and group them by product
    useEffect(() => {
        setLoading(true);
        Axios.get('https://us-central1-bidleo-398811.cloudfunctions.net/get_all_bidders')
            .then((res) => {
                console.log("All bidders:", res.data.results);
                const bidders = res.data.results;

                // Group bidders by product
                const groupedByProduct = {};
                bidders.forEach(bidder => {
                    if (!groupedByProduct[bidder.product.name]) {
                        groupedByProduct[bidder.product.name] = [bidder];
                    } else {
                        groupedByProduct[bidder.product.name].push(bidder);
                    }
                });
                setBiddersByProduct(groupedByProduct);
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
        <div className='bg-yellow-500 mb-10 h-screen'>
            <p className='text-5xl  text-white font-semibold text-center'>All <span className='text-gray-900'>Bidders</span> </p>
            {loading ? (
                <p className='text-white text-center font-semibold mt-24'>Loading...</p>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {Object.keys(biddersByProduct).map((productName, index) => (
                        <div key={index} className='border shadow shadow-yellow-500 rounded-md mb-6 p-4 m-4 ms-3 me-3'>
                            <p className='text-white text-2xl font-semibold mb-2 '>{productName}</p>
                            {biddersByProduct[productName].map((bidder, index) => (
                                <p className='text-white font-semibold text-2xl ' key={index}>
                                    {index + 1}. {bidder.user.mobile_no.substring(0, 3)}******{bidder.user.mobile_no.substring(bidder.user.mobile_no.length - 3)}
                                </p>
                            ))}
                        </div>
                    ))}
                    
                </div>
            )}
        </div>
        <Footer />
        </>
    );
}
