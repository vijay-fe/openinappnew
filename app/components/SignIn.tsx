"use client"
import Link from "next/link";
import SignInProviders from "./client/SignInProviders";
import { Suspense, useState } from "react";
import { Info } from 'lucide-react';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = () => {
        if (!email.includes("@")) {
            setEmailError("Invalid email address");
            return false;
        }
        setEmailError("");
        return true;
    };

    const validatePassword = () => {
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            return false;
        }
        setPasswordError("");
        return true;
    };

    const handleSignIn = () => {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isEmailValid && isPasswordValid) {
            console.log("Signing in...");
        }
    };

    return (
        <div className="form_container">
            <div className="form_title_section">
                <div className="form_title">
                    Sign In
                </div>
                <div className="form_subtitle ">
                    Sign in to your account
                </div>
                <div className="bg-blue-200 rounded-md text-sky-950 p-2 font-extrabold flex gap-2">
                    <Info className="text-sky-950" />
                    sign in using google
                </div>
            </div>
            <div className="form_body mx-auto">
                <Suspense fallback={"loading..."}>
                    <SignInProviders />
                </Suspense>
                <div className="form_body_fields">
                    <div className="form_field">
                        <label className="form_label" htmlFor="email">Email address</label>
                        <input
                            id="email"
                            className="form_input_field"
                            type="email"
                            placeholder="alexvm@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="form_error_box">{emailError}</div>
                    </div>
                    <div className="form_field">
                        <label className="form_label" htmlFor="password">Password</label>
                        <input
                            id="password"
                            className="form_input_field"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="form_error_box">{passwordError}</div>
                    </div>
                    <div className="forgot_password_section">
                        forgot password?
                    </div>
                    <button className="sign_in_button text-white" onClick={handleSignIn}>
                        Sign In
                    </button>
                </div>
                <div className="form_body_footer">
                    Don’t have an account? <Link className="register_link" href={"/"}>Register here</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn
