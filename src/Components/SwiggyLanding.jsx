import React from 'react'

function SwiggyLanding() {
    return (
        <div className="min-h-screen bg-orange-600 text-white overflow-hidden">
            
            <nav className="flex items-center justify-around px-10 py-5">
                <div className="flex items-center gap-2 text-2xl font-bold">
                    <div className="w-40 m-9">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />

                    </div>

                </div>
                <div className="hidden md:flex items-center gap-6 text-sm">
                    <a href="#" className="font-bold text-[16px]">Swiggy Corporate</a>
                    <a href="#" className="font-bold text-[16px]">Partner with us</a>
                    <button className="border border-white px-6 py-3 rounded-xl bg-orange-600 colors text-white font-semibold">Get the App</button>
                    <button className="bg-[#000000] text-white px-6 py-3 rounded-xl font-semibold">Sign in</button>
                </div>
            </nav>

                 


            {/* Hero Section */}
            <section className="relative px-6 md:px-20 pt-10">
                {/* Left Image */}
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
                    alt="groceries"
                    className="hidden lg:block absolute left-0 top-0 w-64 rounded-lg"
                />


                {/* Right Image */}
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
                    alt="food"
                    className="hidden lg:block absolute right-0 top-0 w-64 rounded-lg"
                />


                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-[45px] md:text-5xl font-semibold leading-tight">
                        Order food & groceries. Discover <br /> best restaurants. Swiggy it!
                    </h1>


                    {/* Search */}

                    <div className="flex flex-col md:flex-row gap-4 justify-center mt-10 max-w-3xl mx-auto">

                        <input
                            type="text"
                            placeholder="Enter your delivery location"
                            className="w-full md:w-1/3 px-4 py-3 rounded-xl text-black bg-white"
                        />
                        <input
                            type="text"
                            placeholder="Search for restaurant, item or more"
                            className="w-full md:w-2/3 px-4 py-3 rounded-xl text-black bg-white"
                        />
                    </div>

                </div>
            </section>


            {/* Feature Cards */}

            <section className="mt-15 px-6 md:px-35 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" /> 
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" /> 
                  <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
                </div>
            </section>




        </div>
    );
}





export default SwiggyLanding