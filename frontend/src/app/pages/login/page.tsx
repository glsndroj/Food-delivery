import {AuthForm} from "@/app/_components/auth/AuthForm"
import axios from "axios"

export default function login () {
    return (
        <AuthForm 
        title="Log in" 
        description="Log in to enjoy your favorite dishes." 
        linkText="Sign up" 
        linkHref="/signup" 
        onSubmit={async (email: any, password: any) => { await axios.post("http://localhost3000/login", {email, password});
        }}/>
    )
}
