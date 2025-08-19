import React from 'react';
import products from "./product"

let MyName="Wiem Yakoubi"

const Products = () => (
  <div className="p-24 flex flex-wrap items-center justify-center">
    {/* Card 1 */}
   {Object.values(products).map((Product)=>(
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: 'scale(1.5)', opacity: 0.1 }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: 'radial-gradient(black, transparent 60%)',
            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
            opacity: 0.2,
          }}
        />
        <img
          className="relative w-40"
          src={Product.image}
          alt=""
        />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">{Product.name}</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">{Product.description}</span>
          <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
            ${Product.price}
          </span>
        </div>
      </div>
    </div>   
    ))}
    {MyName? <div>
    <h1>Hallo {MyName}</h1>
    <img width="200px" height="200px" src="https://img.freepik.com/photos-gratuite/jeune-fille-belle-posant-dans-veste-cuir-noire-dans-parc_1153-8104.jpg?semt=ais_hybrid&w=740&q=80" alt=""  />
    </div>:<h1>Hallo there</h1>}

  </div>
);

export default Products;