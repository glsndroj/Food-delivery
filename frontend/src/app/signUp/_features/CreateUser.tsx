import Link from "next/link";

export function CreateUser () {
    return (
        <div className="flex gap-24 w-full h-screen items-center justify-center">
            <div className="w-[416px] h-72 flex flex-col gap-6 ">
            <svg className=" shrink-0 border rounded-md border-gray-200 w-9 h-9 py-2 px-2 " xmlns="http://www.w3.org/2000/svg"viewBox="0 0 16 16" fill="none">
             <path d="M10 12L6 8L10 4" stroke="#18181B" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
                <h2 className="text-2xl font-semibold">Create your account</h2>
                <p className="text-gray-400 font-normal">Sign up to explore your favorite dishes.</p>
            </div>
            <input className="border border-gray-300 rounded-md py-1" type="text" placeholder="Enter your email address" />
            <button className="bg-gray-300 text-[#FAFAFA] py-2 rounded-md">Let's Go</button>
            <div className="flex gap-3 justify-center">
                <p className="text-[#71717A]">Already have an account?</p>
                <Link className="text-[#2563EB]" href="/Login">Log in</Link>
            </div>
          </div>
          <div>
          <img className="w-7xl h-[1004px] rounded-md" src="/fooddelivery.jpg" alt="fooddelivery" />
          </div>
        </div>
    )
}