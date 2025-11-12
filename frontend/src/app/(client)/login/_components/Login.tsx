"use client";
import { useState } from "react";
import { BackSVG } from "@/svgs/backButtonSVG";
import Link from "next/link";

export function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

   
    if (value.includes("@")) {
      setError("");
    } else {
      setError("Enter a valid email address.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };

  return (
    <div className="flex gap-24 w-full h-screen items-center justify-center">
      <div className="w-[416px] h-72 flex flex-col gap-6">
        <BackSVG />
        <div>
          <h2 className="text-2xl font-semibold">Log in</h2>
          <p className="text-gray-400 font-normal">
            Sign up to explore your favorite dishes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            value={email}
            onChange={handleEmailChange}
            type="text"
            placeholder="Enter your email address"
            required
            className={`border rounded-md py-1 px-2 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md py-1 px-2"
            type="password"
            placeholder="Enter your password"
            required
          />

          <button
            type="submit"
            className="bg-gray-300 text-[#FAFAFA] py-3 rounded-md"
          >
            Let's Go
          </button>
        </form>

        <div className="flex gap-3 justify-center">
          <p className="text-[#71717A]">Don't have an account?</p>
          <Link className="text-[#2563EB]" href="/signup">
            Sign up
          </Link>
        </div>
      </div>

      <img
        className="w-7xl h-[1004px] rounded-md"
        src="/fooddelivery.jpg"
        alt="fooddelivery"
      />
    </div>
  );
}
