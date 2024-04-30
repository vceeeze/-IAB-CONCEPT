import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PricingCard from "./components/PricingCard";
import Support from "./components/Support";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />

      <div className="bg-gray-200 py-20 px-5">
        <div className="justify-center flex flex-col items-center">
          <h5 className="text-[40px] font-bold text-center">
            Choose Your Pricing Plan
          </h5>
          <span>All plans are free for the first 30 days</span>
        </div>

        <div className="flex justify-center gap-10 items-center py-28 200 flex-col md:flex-row">
          <PricingCard
            title="Basic"
            price="19"
            features={["50GB Space", "20GB Memory", "80GB Maintanance"]}
          />{" "}
          <PricingCard
            title="Standard"
            price="35"
            features={["20 Email Accounts", "30 watt ", "Electricity"]}
          />{" "}
          <PricingCard
            title="Premium"
            price="100"
            features={["Betting", "Electricity", "Pay Bills"]}
          />
        </div>
      </div>
      <Support />
      <Footer />
    </div>
  );
};

export default App;
