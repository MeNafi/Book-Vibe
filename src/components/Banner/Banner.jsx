import React from 'react';
// Path updated to reference assets inside src
import bannerImg from '../../assets/mainBook.PNG'; 

const Banner = () => {
    return (
        // Wrapper for banner with spacing from navbar
        <div className="container mx-auto my-12 px-4">
            <div className="hero bg-base-200 rounded-3xl min-h-[550px] lg:px-20">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full p-10">
                    
                    {/* Right side: Book Image container */}
                    <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
                        <img
                            src={bannerImg}
                            className="max-w-xs lg:max-w-md rounded-lg shadow-2xl"
                            alt="Banner Book"
                        />
                    </div>
                    
                    {/* Left side: Heading and CTA */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl lg:text-7xl font-bold leading-tight text-[#131313] mb-8">
                            Books to freshen up <br /> your bookshelf
                        </h1>
                        
                        <div className="mt-6 lg:mt-10">
                            {/* Primary green button */}
                            <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none px-8 py-4 h-auto font-bold text-xl normal-case rounded-lg">
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