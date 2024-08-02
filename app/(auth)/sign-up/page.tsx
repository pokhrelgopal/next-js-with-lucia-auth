import React from "react";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";
import SignUpForm from "@/components/SignUpForm";
import Image from "next/image";

const AuthenticatePage = async () => {
  const user = await getUser();
  if (user) {
    return redirect("/dashboard");
  }
  return (
    <div className="bg-[#080E33] h-screen w-full flex justify-center items-center">
      <div className="min-w-[1000px] min-h-3/4 rounded-3xl bg-white flex items-center justify-center">
        <Image
          src="/register.svg"
          alt="Sign In"
          width={500}
          height={500}
          className="h-96"
        />
        <div className="w-1/2 p-10">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default AuthenticatePage;
