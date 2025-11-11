"use client"
import { BackSVG } from "@/svgs/backButtonSVG";
import Link from "next/link";
import { useState } from "react";

export function CreateUser({onNext}:{onNext: () => void}) {
const [email, setEmail] = useState("")
const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNext();
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

   
    if (value.includes("@")) {
      setError("");
    } else {
      setError("Enter a valid email address.");
    }
  };

  return (
    <div className="flex gap-24 w-full h-screen items-center justify-center">
      <div className="w-[416px] h-72 flex flex-col gap-6">
        <BackSVG />
        <div>
          <h2 className="text-2xl font-semibold">Create your account</h2>
          <p className="text-gray-400 font-normal">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
        onChange={handleEmailChange}
          className={`border border-gray-300 rounded-md py-1 pl-2 ${error ? "border-red-500" : "border-gray-300"}`}
          type="text"
          placeholder="Enter your email address"
          required
        />
        {error && <p className="text-red-500 text.sm">{error}</p>}
        <button type="submit" className="bg-gray-300 text-[#FAFAFA] py-2 rounded-md">
          Let's Go
        </button>
        </form>
        
        <div className="flex gap-3 justify-center">
          <p className="text-[#71717A]">Already have an account?</p>
          <Link className="text-[#2563EB]" href="/login">
            Log in
          </Link>
        </div>
      </div>
      <div>
        <img
          className="w-7xl h-[1004px] rounded-md"
          src="/fooddelivery.jpg"
          alt="fooddelivery"
        />
      </div>
    </div>
  );
}
