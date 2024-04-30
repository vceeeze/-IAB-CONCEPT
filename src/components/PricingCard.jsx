import React from "react";

const PricingCard = ({ title, price, features }) => {
  return (
    <>
      <div className="max-w-sm md:min-w-[20%] md:w-[20%] w-[90%] overflow-hidden shadow-lg bg-white rounded-xl">
        <div className="px-6 py-4 flex justify-center flex-col items-center">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-4xl font-bold mb-4 mt-4">
            <sup className="tex">$</sup> {price}
            <sub className="text-xs">/month</sub>
          </div>
          <ul>
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mb-3 gap-2">
                <div className="w-2 h-2 bg-[#E9853C] rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <button className="bg-[#E9853C]  mb-10 text-white font-bold py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
