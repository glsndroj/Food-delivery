"use client"
import { BackSVG } from "@/svgs/backButtonSVG";
import Link from "next/link";
import { useState } from "react";
import { CheckboxPass } from "./_features/Checkbox";

export function CreatePassword ({onBack}:{onBack: ()=> void}) {
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmError, setConfirmError]= useState("")
    const [showPass, setShowPass] = useState(false)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(password.length < 6){
            setPasswordError("Password must be at least 6 characters")
            return;
        }
        if(password !== confirm){
            setConfirmError("Password not match!")
            return
        }

        setPasswordError("");
        setConfirmError("")

    }
    return (
        <div className="flex gap-24 w-full h-screen items-center justify-center">
            <div className="w-[416px] h-72 flex flex-col gap-6 ">
                <button onClick={onBack}>
                <BackSVG/>
                </button>
            
            <div>
                <h2 className="text-2xl font-semibold">Create strong password</h2>
                <p className="text-gray-400 font-normal">Create a strong password with letters, numbers.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
            className={`border border-gray-300 rounded-md py-1 pl-3 ${passwordError && password.length < 6 ? "border-red-500" : "border-gray-300"}`}
             type={showPass ? "text" : "password"} 
             placeholder="Password" 
             value={password} 
             onChange={(e) => {
                setPassword(e.target.value);
                if(e.target.value.length >= 6) setPasswordError("")
             }} required />
             {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            <input className={`border border-gray-300 rounded-md py-1 pl-2 ${confirmError && password !== confirm ? "border-red-500" : "border-gray-300"}`} 
            type={showPass ? "text" : "password"} 
            placeholder="Confirm" 
            value={confirm}
            onChange={(e) => {
                setConfirm(e.target.value);
                if(e.target.value === password) setConfirmError("")
            }}
             required
            />
            {confirmError && <p className=" text-red-500 text-sm">{confirmError}</p>}

            <label className="flex items-center gap-4">
                <CheckboxPass 
                checked={showPass}
                onChange={()=> setShowPass(!showPass)}/>
                <p>Show password</p>
               
            </label>
            
            <button type="submit" className="bg-gray-300 text-[#FAFAFA] py-2 rounded-md">Let's Go</button>
            </form>
            
            <div className="flex gap-3 justify-center">
                <p className="text-[#71717A]">Already have an account?</p>
                <Link className="text-[#2563EB]" href="/login">Log in</Link>
            </div>
          </div>
          <div>
          <img className="w-7xl h-[1004px] rounded-md" src="/fooddelivery.jpg" alt="fooddelivery" />
          </div>
        </div>
    )
}