import SignUpForm from "@/components/forms/sign-up";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const user = await currentUser();
  if (user) redirect("/");

  return (
    <div className="mmd:w-[80%]">
      <SignUpForm />
    </div>
  );
}
