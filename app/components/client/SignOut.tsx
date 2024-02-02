import { signOut } from "next-auth/react"
function SignOut() {
    return (
        <button className="sign_out_button" onClick={() => signOut()}>
            Sign Out
        </button>
    )
}

export default SignOut
