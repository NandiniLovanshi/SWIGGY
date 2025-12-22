import React, { useRef } from "react";

const restaurants = [
  {
    name: "House of Candy",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/8/18/1d3b7151-be92-4f7a-b38b-fdc43e1ef281_20240818T103122936.jpg",
    rating: "3.8",
    cuisine: "Desserts",
    location: "Chhoti Gwaltoil, Indore",
    price: "₹500 for two",
    distance: "4.5 km",
    offer: "Flat 20% off on pre-booking",
  },
  {
    name: "Dosa Partner",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1685098373/0cd63a1236e00ae2082121283d3a6231.jpg",
    rating: "4.8",
    cuisine: "South Indian",
    location: "Rajwada, Indore",
    price: "₹200 for two",
    distance: "1.5 km",
    offer: "Flat 10% off on walk-in",
  },
  {
    name: "Saffron",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/10/3/b05b91e4-73f6-4cfc-ad32-83582dbba78b_image99c4be1fb26d742b4847a9c84c98fa1eb.JPG",
    rating: "4.6",
    cuisine: "North Indian · Mughlai",
    location: "Sachidanand Nagar, Indore",
    price: "₹700 for two",
    distance: "3.5 km",
    offer: "Flat 10% off on walk-in",
  },
  {
    name: "House of Candy",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/8/18/1cb7b6da-fa66-43be-b2aa-4e022879e448_20240818T073044340.jpg",
    rating: "4.2",
    cuisine: "Desserts",
    location: "Khajrana, Indore",
    price: "₹600 for two",
    distance: "2.8 km",
    offer: "Flat 30% off on pre-booking",
  },
    {
    name: "The Rocky's Cafe",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1672742133/ca035a5e57597bc8b7a32e2c869d7a5d.jpg",
    rating: "4.5",
    cuisine: "Beverages · Fast Food",
    location: "Sudama Nagar, Indore",
    price: "₹400 for two",
    distance: "1.2 km",
    offer: "Flat 20% off on walk-in",
  },
    {
    name: "Jain Shree Sweets and Gajak",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/4/12/38423c58-c607-4a9c-b3a8-fe570ac84244_image27ff89e42544542e3a0e747b03e638fca.JPG",
    rating: "4.3",
    cuisine: "Fast Food . Mongolian",
    location: "Chhoti Gwaltoil, Indore",
    price: "₹800 for two",
    distance: "3.8 km",
    offer: "Flat 15% off on pre-booking",
  },
  {
    name: "DEUCE",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/12/14/175586f7-b090-4679-8f13-5bac1daa30fe_image2af5e5e78b45f4ee29f4e4facffe408ed.JPG",
    rating: "4.6",
    cuisine: "North Indian · Mughlai",
    location: "Sachidanand Nagar, Indore",
    price: "₹700 for two",
    distance: "3.5 km",
    offer: "Flat 10% off on walk-in",
  },
  {
    name: "Nutritenic",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1669278113/5ddc4b402995b00f4d04169fccb5fa0f.jpg",
    rating: "3.8",
    cuisine: "Continental · Healthy Food",
    location: "Chhoti Gwaltoil, Indore",
    price: "₹500 for two",
    distance: "4.5 km",
    offer: "Flat 20% off on pre-booking",
  },
  {
    name: "Taas Greens",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1675346369/2ac337db78b8aeef19f0d1b5ccaf3f43.webp",
    rating: "4.8",
    cuisine: "South Indian",
    location: "Rajwada, Indore",
    price: "₹200 for two",
    distance: "1.5 km",
    offer: "Flat 10% off on walk-in",
  },
];

 function DineoutScroll() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 md:px-20 py-14 bg-white">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Discover best restaurants on Dineout
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            →
          </button>
        </div>
      </div>

      {/* Scroll container (scrollbar hidden) */}
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-max pb-4">
          {restaurants.map((res, index) => (
            <div
              key={index}
              className="w-[340px] bg-white rounded-2xl shadow-md"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={res.img}
                  alt={res.name}
                  className="h-44 w-full object-cover rounded-t-2xl"
                />
                <span className="absolute bottom-2 left-2 text-white text-xl px-2 py-1 rounded font-bold">
                  {res.name}
                </span>
                <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  ⭐ {res.rating}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{res.cuisine}</span>
                  <span>{res.price}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>{res.location}</span>
                  <span>{res.distance}</span>
                </div>

                <span className="inline-block mt-3 bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                  Table booking
                </span>

                <div className="mt-3 bg-green-600 text-white text-sm px-3 py-2 rounded-lg font-medium">
                  {res.offer}
                </div>

                <div className="mt-2 bg-green-100 text-green-700 text-sm px-3 py-2 rounded-lg">
                  Up to 10% off with bank offers
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default DineoutScroll;
