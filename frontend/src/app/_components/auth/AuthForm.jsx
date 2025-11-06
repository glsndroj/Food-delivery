"use client";
import { useState } from "react";
import Link from "next/link";

export function AuthForm({
  title,
  description,
  linkText,
  linkHref,
  onSubmit,
  includePassword = true,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await onSubmit(email, password);
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] flex flex-col gap-5 border border-gray-200 rounded-xl shadow-sm p-8"
      >
        {/* Back Button*/}
        <div>
         
        </div>

        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold text-[#09090B]">{title}</h2>
          <p className="text-sm text-[#71717A]">{description}</p>
        </div>

        {/* Input */}
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {includePassword && (
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>

        {/* Error message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Button */}
        <button
          type="submit"
          className="bg-gray-300 text-white py-2 rounded-md"
        >
          Let's Go
        </button>

        {/* Footer link */}
        <div className="text-sm text-center">
          {linkText && (
            <>
              <span>
                {title.includes("Create")
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </span>{" "}
              <Link href={linkHref} className="text-blue-500 hover:underline">
                {linkText}
              </Link>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
