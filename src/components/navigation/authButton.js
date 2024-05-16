import React from "react";
import { loginUrl, getTokenFromUrl } from "./auth/authorization";
import Profile from "./profile/profile";

export default function AuthButton() {
  const token = getTokenFromUrl().access_token;

  localStorage.setItem("access_token", token);

  return token ? (
    <Profile token={token} />
  ) : (
    <a
      href={loginUrl}
      className="w-[100px] p-2 bg-black h-[50px] rounded flex items-center justify-center"
    >
      <span className="text-white text-lg]">Login</span>
    </a>
  );
}
