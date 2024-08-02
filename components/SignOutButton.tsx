"use client";
import React from "react";
import { Button } from "./ui/button";
import { logOut } from "@/lib/auth.action";

type Props = {
  children: React.ReactNode;
};

const SignOutButton = ({ children }: Props) => {
  return (
    <Button
      onClick={() => {
        logOut();
      }}
    >
      {children}
    </Button>
  );
};

export default SignOutButton;
