import React from "react";

export default function PlaylistCard({ image, name, type }) {
  return (
    <div className="w-full h-[80px] flex items-center gap-2 border-black border-2 p-2 rounded">
      <div className="rounded">
        <img src={image} alt={name} height={60} width={60} />
      </div>
      <div className="flex flex-col">
        <span className="text-[17px]">
          {name.length > 60 ? `${name.slice(0, 20)}...` : name}
        </span>
        <span className="text-[14px]">{type}</span>
      </div>
    </div>
  );
}
