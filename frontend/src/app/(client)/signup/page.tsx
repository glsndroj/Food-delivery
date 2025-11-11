"use client"

import { useState } from "react";
import { CreateUser } from "./_components/CreateUser";
import { CreatePassword } from "./_components/CreatePassword";


export default function SignupPage() {
  const [step, setStep] = useState<"email" | "password">("email")
  return (
    <div className="flex">
      {step === "email" && <CreateUser onNext={() => setStep("password")}/>}
      {step === "password" && <CreatePassword onBack={() =>  setStep("email")} />}
    </div>
  );
}
