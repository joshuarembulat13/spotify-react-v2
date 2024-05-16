import React from "react";
import { TbSearch } from "react-icons/tb";

export default function Search({ search, onHandleChange }) {
  return (
    <div className="w-[500px] h-[50px] flex items-center px-1 border-black border-2 rounded-[5px]">
      <TbSearch size={30} style={{ stroke: "#ccc" }} />
      <input
        type="text"
        className="w-full h-full p-2 outline-none border-none bg-transparent"
        placeholder="Search playlist, artist, songs"
        value={search}
        onChange={onHandleChange}
      />
    </div>
  );
}
