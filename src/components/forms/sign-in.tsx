"use client";

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { toast } from "sonner";
import GoogleButton from "../auth_buttons/GoogleButton";
import Link from "next/link";

export default function SignInForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  const [signInLoading, setsignInLoading] = useState(false);
  const [guestLoading, setGuestLoading] = useState(false);


  const handlesignIn = async (e: FormEvent) => {
    e.preventDefault();
    setsignInLoading(true);
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: emailRef.current?.value as string,
        password: passRef.current?.value as string,
      });

      if (result.status === "complete") {
        toast.success("You signed in successfully");
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        toast.error("Something wrong occured");
        console.log(result);
      }

      setsignInLoading(false);
    } catch (error: any) {
      toast.error(error.errors[0].longMessage);
      setsignInLoading(false);
    }
  }

  const handleGuestUser = async (e: FormEvent) => {
    e.preventDefault();
    setGuestLoading(true);
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: 'elidrissiabdellah0@gmail.com',
        password: 'testpassword123$',
      });

      if (result.status === "complete") {
        toast.success("You signed in successfully");
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        toast.error("Something wrong occured");
        console.log(result);
      }

      setGuestLoading(false);
    } catch (error: any) {
      toast.error(error.errors[0].longMessage);
      setGuestLoading(false);
    }
  };

  return (
    <div className="authFormStyle ">
      <div className="text-center mb-5">
        <h3 className="text-[30px] uppercase leading-none mb-[6px]">Sign In</h3>
        <p className="font-light text-gray-500 ">
          Choose your preferred sign in method
        </p>
      </div>
      <form className="flex flex-col gap-y-2">
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
          onClick={handlesignIn}
          className="blackBtn mt-2"
          disabled={signInLoading}
        >
          {signInLoading ? "Signin In" : "Sign In"}
        </button>
      </form>
      <GoogleButton styles="mt-3 w-full" />

      <p className="text-gray-600 mt-[18px] text-[14px] font-light">
        Don&apos;t have an Account{" "}
        <span className="font-sans text-[12px] font-semibold">?</span>
        <Link
          href={"/sign-up"}
          className="text-mainColor font-medium pl-1 hover:underline underline-offset-2"
        >
          Sign Up
        </Link>
      </p>

      <p className="text-gray-600 mt-[10px] text-[13px] font-light">
        Or just
        <button
          disabled={guestLoading}
          onClick={handleGuestUser}
          className="text-mainColor font-medium pl-1 cursor-pointer hover:underline underline-offset-2"
        >
          {guestLoading ? 'Joining...' : 'Join as a Guest'}
        </button>
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
