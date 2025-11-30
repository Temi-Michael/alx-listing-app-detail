import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "@/constants"
import localFont from "next/font/local"
import { useState } from "react";

const quickSand = localFont({
  src: '../public/fonts/Quicksand-Regular.woff2'
})


export default function Home() {
  const [activeFilters, setActiveFilters] = useState(["All"]);

  const filterOptions = ["All", "Top Villa", "Free Reschedule", "Book Now, Pay later", "Self ChekIn", "Instant Book"];

  const handleFilterClick = (filter: string) => {
    if (filter === "All") {
      setActiveFilters(["All"]);
      return;
    }

    let newActiveFilters;
    if (activeFilters.includes(filter)) {
      newActiveFilters = activeFilters.filter((f) => f !== filter);
    } else {
      newActiveFilters = [...activeFilters.filter(f => f !== "All"), filter];
    }

    if (newActiveFilters.length === 0) {
      newActiveFilters = ["All"];
    }

    setActiveFilters(newActiveFilters);
  };

  return (
    <div className={`flex flex-col bg-zinc-50 font-sans w-full bg-cover bg-center p-10 ${quickSand.className}`}>
      <div className="relative h-100 mb-10">
        {/* <Image
          src="/assets/Home/heroSection.svg"
          alt="Find your favorite place here!"
          fill
          style={{ objectFit: 'contain' }}
          className="rounded-lg"
        /> */}
        <img src="/assets/Home/heroSection.svg" alt="Find your favorite place here!" className="rounded-lg" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white rounded-lg">
          <h2 className="text-[70px] font-extrabold">Find your favorite place here!</h2>
          <p className="mt-2 text-[30px]">The best prices for over 2 million properties worldwide</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          {filterOptions.map((filter) => (
            <Button
              key={filter}
              text={filter}
              onClick={() => handleFilterClick(filter)}
              color={activeFilters.includes(filter) ? "text-teal-500" : "text-black"}
              bgColor={activeFilters.includes(filter) ? "bg-teal-100" : ""}
              border="border"
              borderColor={activeFilters.includes(filter) ? "border-teal-600" : "border-gray-300"}
            />
          ))}
        </div>
        <div className="flex justify-end items-center gap-2">
          <Button text="Filter" color="text-black" border="border" borderColor="border-gray-300" />
          <Button text="sort by:" color="text-black" border="border" borderColor="border-gray-300" />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10 gap-7">
        {
          PROPERTYLISTINGSAMPLE.map((property, index) => {
            return (
              <Card name={property.name} address={property.address} rating={property.rating} category={property.category} price={property.price} offers={property.offers} image={property.image} discount={property.discount} key={index} />
            )
          })
        }
      </div>
    </div>
  );
}
