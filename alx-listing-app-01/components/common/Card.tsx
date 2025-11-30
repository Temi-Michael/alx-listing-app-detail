import { PropertyProps } from "@/interfaces";
import Button from "./Button";
import Image from "next/image";

const Card: React.FC<PropertyProps> = ({ name, address, rating, category, price, offers, image }) => {
    return (
        <div className="p-1">
            <div className="w-full mb-3">
                <img src={image} alt={name} className=" rounded-lg" />
            </div>            <div className="flex flex-row gap-2">
                {category.map((category, index) => {
                    return (
                        <Button text={category} color="text-black" bgColor="bg-gray-100" border="border" borderColor="border-gray-200" textSize="text-[10px]" key={index} />
                    )
                })}
            </div>
            <div className="flex flex-row justify-between py-3">
                <section>
                    <p className="text-black font-semibold text-lg">
                        {name}
                    </p>
                    <p className="text-[15px] text-neutral-900 font-light">{address.state}, {address.city}, {address.country}</p>
                </section>
                <section className="text-neutral-900">⭐ {rating}</section>
            </div>
            <div className="flex flex-row justify-between items-center">
                {/* <Button text={`${offers.bed} ${offers.shower} ${offers.occupants}`} textSize="text-[12px]" color="text-black" bgColor="bg-none" border="border" borderColor="border-gray-200"   /> */}
                <p className="border border-gray-300 rounded-full px-2 py-1 text-[13px] text-black"><span></span>{offers.bed} {offers.shower} {offers.occupants}</p>

                <p className="text-black text-lg font-bold">${price.toLocaleString()}<sub>/n</sub></p>
            </div>
            {/* <Image src={image} alt={name} width={300} height={200} /> */}
            {/* <p>{discount}</p> */}
        </div>
    )
}

export default Card