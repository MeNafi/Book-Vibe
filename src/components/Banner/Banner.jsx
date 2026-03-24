import React from 'react';

const Banner = () => {
    return (
        /* container and py-12/my-8 create the gaps from navbar and bottom content */
        <div className="container mx-auto my-8 px-4">
            <div className="hero bg-base-200 rounded-3xl min-h-[500px] px-8 lg:px-24">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
                    {/* Famous JS Book Image  */}
                    <img
                        src="https://www.designveloper.com/wp-content/uploads/2021/01/Classic-Books-about-JavaScript-The-Definitive-Guide-1024x1024.jpg"
                        className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl"
                        alt="Eloquent JavaScript"
                    />
                    
                    {/* Left side text container */}
                    <div className="max-w-md lg:max-w-lg">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-[#131313]">
                            Books to freshen up <br /> your bookshelf
                        </h1>
                        
                        <div className="mt-8 lg:mt-12">
                            {/* Green button */}
                            <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none px-7 py-4 h-auto font-bold text-xl normal-case rounded-lg">
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