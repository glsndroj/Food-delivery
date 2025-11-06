import {AuthForm} from "@/app/_components/auth/AuthForm"
import axios from "axios"

export default function signUp () {
    return (
        <AuthForm 
        title="Create your account" 
        description="Sign up to explore your favorite dishes." 
        linkText="Log in" 
        linkHref="/login" 
        onSubmit={async (email: any) => { await axios.post("http://localhost3000/signup", {email});
        }}/>
    )
}
