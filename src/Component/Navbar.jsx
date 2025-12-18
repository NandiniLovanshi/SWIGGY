


function Navbar() {
    return (
        <div className="min-h-screen bg-orange-500 text-white">



            {/* Navbar */}
            <nav className="flex items-center justify-between px-10 py-5">
                <div className="w-40 m-9 ">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />
                </div>
                <div className="flex items-center gap-6 text-sm">
                    <a href="#" className="font-bold text-[16px]">Swiggy Corporate</a>
                    <a href="#" className="font-bold text-[16px]">Partner with us</a>
                    <button className="border border-white px-6 py-3 rounded-xl bg-orange-500 colors text-white font-semibold">
                        Get the App
                    </button>
                    <button className="bg-[#000000] text-white px-6 py-3 rounded-xl font-semibold">
                        Sign in
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="text-center mt-20">
                <h1 className="text-[48px] md:text-5xl font-bold mb-6">
                    Order food & groceries. Discover <br /> best restaurants. Swiggy it!
                </h1>

            </section>


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










            {/* Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mt-20 pb-15 h-[250px] w-[900px]">
                <FeatureCard
                    title="Food Delivery"
                    subtitle="FROM RESTAURANTS"
                    offer="UPTO 60% OFF"
                />
                <FeatureCard
                    title="Instamart"
                    subtitle="INSTANT GROCERY"
                    offer="UPTO 60% OFF"
                />
                <FeatureCard
                    title="Dineout"
                    subtitle="EAT OUT & SAVE MORE"
                    offer="UPTO 50% OFF"
                />
            </section>
        </div>
    );
}

function FeatureCard({ title, subtitle, offer }) {
return (
<div className="bg-white text-black rounded-3xl p-6 shadow-lg relative overflow-hidden">
<h3 className="text-xl font-bold">{title}</h3>
<p className="text-sm text-gray-500 mt-1">{subtitle}</p>
<span className="inline-block mt-3 text-xs font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
{offer}
</span>
<div className="absolute bottom-4 right-4 bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
→
</div>
</div>
);
}


export default Navbar