"use client";

import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { toast } from "sonner";
import GoogleButton from "../auth_buttons/GoogleButton";
import Link from "next/link";

export default function SignUpForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const { isLoaded, signUp } = useSignUp();
  const router = useRouter();
  const [signUpLoading, setSignUpLoading] = useState(false);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setSignUpLoading(true);
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: emailRef.current?.value,
        password: passRef.current?.value,
        firstName: firstNameRef.current?.value,
        lastName: lastNameRef.current?.value,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      toast(
        "A verification code has been sent to your email to verify your account"
      );
      router.push("/sign-up/verify-email");

      setSignUpLoading(false);
    } catch (error: any) {
      setSignUpLoading(false);
      toast.error(error.errors[0].longMessage);
    }
  };

  return (
    <div className="authFormStyle">
      <div className="text-center mb-5">
        <h3 className="text-[30px] uppercase leading-none mb-[6px]">Sign Up</h3>
        <p className="font-light text-gray-500 ">
          Choose your preferred sign up method
        </p>
      </div>

      <form className="flex flex-col gap-y-2">
        <div>
          <label htmlFor="firstname" className="labelStyle">
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="enter your first name"
            ref={firstNameRef}
            className="inputStyle"
          />
        </div>

        <div>
          <label htmlFor="lastname" className="labelStyle">
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="enter your username"
            ref={lastNameRef}
            className="inputStyle"
          />
        </div>

        <div>
          <label htmlFor="email" className="labelStyle">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="enter your email"
            ref={emailRef}
            className="inputStyle"
          />
        </div>

        <div>
          <label htmlFor="pass" className="labelStyle">
            Password
          </label>
          <input
            id="pass"
            type="password"
            placeholder="enter your password"
            ref={passRef}
            className="inputStyle"
          />
        </div>

        <button
          onClick={handleSignUp}
          className="blackBtn mt-2"
          disabled={signUpLoading}
        >
          {signUpLoading ? "Signin Up" : "Sign Up"}
        </button>
      </form>

      <GoogleButton styles="mt-3 w-full" />
      <p className="text-gray-600 mt-[18px] text-[14px] font-light">
        Already have an Account{" "}
        <span className="font-sans text-[12px] font-semibold">?</span>
        <Link
          href={"/sign-in"}
          className="text-mainColor font-medium pl-1 hover:underline underline-offset-2"
        >
          Sign In
        </Link>
      </p>

      <p className="text-gray-600 mt-[10px] text-[13px] font-light">
        Or go back
        <Link
          href={"/"}
          className="text-mainColor font-medium pl-1 hover:underline underline-offset-2"
        >
          Home
        </Link>
      </p>

    </div>
  );
}
