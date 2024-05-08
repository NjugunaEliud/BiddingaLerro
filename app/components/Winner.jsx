"use client"
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Winner() {
    const [winners, setWinners] = useState([]);
    const [loading, setLoading] = useState(true);

    // Winner
    useEffect(() => {
        setLoading(true);
        Axios.get('https://us-central1-bidleo-398811.cloudfunctions.net/getallwinner')
            .then((res) => {
                console.log("Winners:", res.data.results);
                setWinners(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className='bg-gray-900 mt-6'>
            <p className='text-2xl text-yellow-500 font-semibold text-center'>Winners</p>
            {loading ? (
                <p className='text-center text-white font-semibold'>Loading...</p>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-white'>
                    {winners.map((winner, index) => (
                        <div key={index} className='border shadow shadow-yellow-500 rounded-md mb-6 p-4 m-4 ms-3 me-3'>
                            <p className='font-semibold'>Auction: {winner.product_name}</p>
                            <p className='font-semibold'>Bid Amount: {winner.lowest_unique_bid}</p>
                            <p className='font-semibold'>Winner: {winner.bidder_info.msisdn.substring(0, 3)}******{winner.bidder_info.msisdn.substring(winner.bidder_info.msisdn.length - 3)}</p>
                        </div>
                        
                    ))}
                    
                </div>
            )}
        </div>
    );
}
