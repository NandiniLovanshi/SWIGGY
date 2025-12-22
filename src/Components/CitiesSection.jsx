import { useState } from "react";

const foodCities = [
    "Bangalore",
    "Gurgaon",
    "Hyderabad",
    "Delhi",
    "Mumbai",
    "Pune",
    "Kolkata",
    "Chennai",
    "Ahmedabad",
    "Chandigarh",
    "Jaipur",
    "Indore",
    "Bhopal",
    "Noida",
    "Surat",
    "Lucknow",
    "Nagpur",
    "Visakhapatnam",
    "Coimbatore",
    "Thane",
    "Vadodara",
    "Nashik",
    "Faridabad",
    "Patna",
    "Agra",
    "Ludhiana",
    "Rajkot",
    "Meerut",
    "Allahabad",
    "Varanasi",
    "Srinagar",
    "Amritsar",
    "Jammu",
    "Raipur",
    "Bhubaneswar",
    "Kochi",
    "Kanpur",
];

const groceryCities = [
    "Bangalore",
    "Gurgaon",
    "Hyderabad",
    "Delhi",
    "Mumbai",
    "Pune",
    "Kolkata",
    "Chennai",
    "Ahmedabad",
    "Chandigarh",
    "Jaipur",
    "Indore",
    "Bhopal",
    "Noida",
    "Surat",
    "Lucknow",
    "Nagpur",
    "Visakhapatnam",
    "Coimbatore",
    "Thane",
    "Vadodara",
    "Nashik",
    "Faridabad",
    "Patna",
    "Agra",
    "Ludhiana",
    "Rajkot",
    "Meerut",
    "Allahabad",
    "Varanasi",
    "Srinagar",
    "Amritsar",
    "Jammu",
    "Raipur",
    "Bhubaneswar",
    "Kochi",
    "Kanpur",
];

const CityGrid = ({ title, prefix, cities }) => {
    const [showAll, setShowAll] = useState(false);
    const visibleCities = showAll ? cities : cities.slice(0, 11);

    return (
        <div className="mb-14">
            <h2 className="text-[20px] font-semibold mb-6">{title}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {visibleCities.map((city, index) => (
                    <div
                        key={index}
                        className="border rounded-xl px-5 py-4 text-center text-gray-700 hover:shadow-md cursor-pointer transition"
                    >
                        {prefix} {city}
                    </div>
                ))}

                {/* Show More Button */}
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="border rounded-xl px-5 py-4 text-orange-500 font-semibold flex items-center justify-center gap-2 hover:shadow-md transition"
                >
                    {showAll ? "Show Less" : "Show More"}
                    <span
                        className={`transform transition ${showAll ? "rotate-180" : ""
                            }`}
                    >
                        ⌄
                    </span>
                </button>
            </div>
        </div>
    );
};

function CitiesSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-14 text-sm font-bold">
            <CityGrid
                title="Cities with food delivery"
                prefix="Order food online in"
                cities={foodCities}
            />

            <CityGrid
                title="Cities with grocery delivery"
                prefix="Order grocery delivery in"
                cities={groceryCities}
            />
        </div>
    );
}
export default CitiesSection;
