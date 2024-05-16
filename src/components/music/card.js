import React from "react";
import { TbPlus } from "react-icons/tb";
export default function Card({
  name,
  artist,
  image,
  addSongs,
  songID,
  song,
  removedSongs,
}) {
  return (
    <div className="w-[280px] h-[350px] rounded-lg border-black flex flex-col border-2 p-2 gap-2">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="w-full h-[250px] flex gap-2 p-2 items-center justify-center">
        <div className="w-[400px] flex flex-col gap-2 align-center">
          <span key={name} className="text-[14px]">
            {name.length >= 20 ? `${name.slice(0, 20)}...` : name}
          </span>
          <div className="w-full flex gap-2 items-center">
            {artist.map(({ name }) =>
              artist.length > 1 ? (
                <span key={name} className="text-[12px]">
                  {name}
                </span>
              ) : (
                <span className="text-[12px]">{name}</span>
              )
            )}
          </div>
        </div>
        <button
          value={songID}
          onClick={addSongs}
          className="bg-green-500 p-2 rounded-full h-[40px] width-[60px]"
        >
          <TbPlus size={23} />
        </button>
      </div>
    </div>
  );
}
