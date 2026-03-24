import React from 'react';
// Correct path for mainBook image in assets
import bannerImg from '../../assets/mainBook.PNG'; 

const Banner = () => {
    return (
        // Added responsive margin for top and bottom spacing
        <div className="container mx-auto my-8 lg:my-12 px-4">
            <div className="hero bg-base-200 rounded-3xl min-h-[450px] lg:px-24">
                {/* flex-row-reverse keeps image on the right */}
                <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full p-8 lg:p-14">
                    
                    {/* Right side: Scaled down book image */}
                    <div className="flex justify-center lg:justify-end w-full lg:w-1/3">
                        <img
                            src={bannerImg}
                            // Fixed smaller width for image as per request
                            className="max-w-[200px] lg:max-w-[300px] rounded-lg shadow-2xl"
                            alt="Main Book"
                        />
                    </div>
                    
                    {/* Left side: Heading with reduced text size */}
                    <div className="w-full lg:w-2/3">
                        {/* Text size reduced to 5xl instead of 7xl */}
                        <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-[#131313]">
                            Books to freshen up <br /> your bookshelf
                        </h1>
                        
                        <div className="mt-8 lg:mt-10">
                            {/* Standard green action button */}
                            <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none px-7 py-3 h-auto font-bold text-lg normal-case rounded-lg">
                                View The List
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;