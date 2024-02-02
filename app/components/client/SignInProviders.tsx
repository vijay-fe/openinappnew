
"use client";
import { iconPack } from "@/assets/icons";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import { useRouter } from "next/router";
import { redirect } from 'next/navigation'
function SignInProviders() {
    const { data: session } = useSession();
    if (session) {
        redirect("/dashboard");
    }

    return (
        <div className="form_body_providers">
            <div className="provider" onClick={() => signIn("google")}>
                <Image className="provider_icon" src={iconPack.google} alt="google_icon" width={24} height={24} />
                <span>Sign in with Google</span>
            </div>
            <div className="provider" onClick={() => signOut()}>
                <Image className="provider_icon" src={iconPack.apple} alt="apple_icon" width={24} height={24} />
                <span>Sign in with Apple</span>
            </div>
        </div>
    )
}

export default SignInProviders
