import React from "react";
import SignInForm from "@/components/SignInForm";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";
import Image from "next/image";

const AuthenticatePage = async () => {
  const user = await getUser();
  if (user) {
    return redirect("/dashboard");
  }
  {
    /* <SignInForm /> */
  }
  // 080E33
  return (
    <div className="bg-[#080E33] h-screen w-full flex justify-center items-center">
      <div className="min-w-[1000px] h-[550px] rounded-3xl bg-white flex items-center justify-center">
        <Image
          src="/login.svg"
          alt="Sign In"
          width={500}
          height={500}
          className="h-96"
        />
        <div className="w-1/2 p-10">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default AuthenticatePage;
