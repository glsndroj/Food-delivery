import { Nomnom } from "@/svgs/nomnomSVG";
import Link from "next/link";

export default function Navbar() {
    return(
        <div className="w-full h-[172px] bg-[#18181B] flex justify-between items-center">
            <div className="flex items-center gap-3 py-12 pl-20 ">
                <Nomnom/>
                <div>
                <h2 className="text-white font-semibold">Nom<span className="text-red-500">Nom</span></h2>
                <p className="text-[#F4F4F5] text-[12px]">Swift delivery</p>
                </div>
                
            </div>
            <div className="flex gap-4 pr-20">
                <Link href="./signup">
                <button className="bg-[#F4F4F5] rounded-3xl py-2 px-4">Sign up</button></Link>
                <Link href="./login">
                <button className="bg-[#EF4444] text-[#FAFAFA] rounded-3xl py-2 px-4">Log in</button></Link>
               
            </div>
        </div>
    )

}