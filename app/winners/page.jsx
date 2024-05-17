"use client"
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';

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
        <>
        <NavBar />
        <div className='bg-yellow-500 h-screen mt-2'>
            <p className=' text-5xl text-gray-900 font-semibold text-center'>Winners</p>
            {loading ? (
                <p className='text-center mt-24 text-white font-semibold'>Loading...</p>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white'>
                    {winners.map((winner, index) => (
                        <div key={index} className='border shadow shadow-yellow-500 rounded-md mb-6 p-4 m-4 ms-3 me-3 text-xl'>
                            <p className='font-semibold'>Auction: {winner.product_name}</p>
                            <p className='font-semibold'>Bid Amount: {winner.lowest_unique_bid}</p>
                            <p className='font-semibold'>Winner: {winner.bidder_info.msisdn.substring(0, 3)}******{winner.bidder_info.msisdn.substring(winner.bidder_info.msisdn.length - 3)}</p>
                        </div>
                        
                    ))}
                    
                </div>
            )}
        </div>
        </>
    );
}
