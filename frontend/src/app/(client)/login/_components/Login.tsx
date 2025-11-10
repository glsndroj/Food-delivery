import { BackSVG } from "@/svgs/backButtonSVG";
import Link from "next/link";


export function LoginUser () {
    return (
        <div className="flex gap-24 w-full h-screen items-center justify-center">
            <div className="w-[416px] h-72 flex flex-col gap-6 ">
            <BackSVG/>
            <div>
                <h2 className="text-2xl font-semibold">Log in</h2>
                <p className="text-gray-400 font-normal">Sign up to explore your favorite dishes.</p>
            </div>
            <div className="flex flex-col gap-3">
            <input className="border border-gray-300 rounded-md py-1" type="text" placeholder="Enter your email address" />
            <input className="border border-gray-300 rounded-md py-1" type="password" placeholder="Enter your password" />
            </div>
            <button className="bg-gray-300 text-[#FAFAFA] py-2 rounded-md">Let's Go</button>
            <div className="flex gap-3 justify-center">
                <p className="text-[#71717A]">Don't have account?</p>
                <Link className="text-[#2563EB]" href="/signup">Sign up</Link>
            </div>

         </div>

         <img className="w-7xl h-[1004px] rounded-md" src="/fooddelivery.jpg" alt="fooddelivery" />
        </div>
    )
}