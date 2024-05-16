import React from "react";

export default function Navigation({ children }) {
  return (
    <div className="w-full h-[130px] border-b-2 border-black  flex items-center justify-between p-4 gap-2">
      {children}
    </div>
  );
}
