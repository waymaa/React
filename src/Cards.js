import React from "react";

const Cards = () => {
  const cityData = [
    {
      name: "Nashville",
      distance: "53 miles away",
      image:
        "https://a0.muscache.com/im/pictures/1faa127c-8f65-4ffe-a249-9254c29bafdb.jpg?im_w=240",
    },
    {
      name: "South Haven",
      distance: "168 miles away",
      image:
        "https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=240",
    },
    {
      name: "Stanton",
      distance: "192 miles away",
      image:
        "https://img.freepik.com/premium-vector/french-countryside-cartoon-vector_970209-1028.jpg?w=826",
    },
    {
      name: "New Buffalo",
      distance: "130 miles away",
      image:
        "https://a0.muscache.com/im/pictures/03bb6d0a-5ccb-47e1-83fc-b7ad87e7f8c3.jpg?im_w=320",
    },
  ];

  return (
    <div>
      {/* Inspiration Section */}
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-medium text-black mb-8">
          Inspiration for your next trip
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cityData.map((city, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-40 object-cover"
              />
              <div className="flex flex-col items-start gap-2 p-[24px_16px_96px_16px] w-full bg-[#BC1A6E]">
                <h3 className="text-white text-4xl font-medium leading-[44px] w-full">
                  {city.name}
                </h3>
                <p className="text-white text-lg font-normal leading-[28px] w-full">
                  {city.distance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;