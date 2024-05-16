import React, { useEffect, useState } from "react";
import PlaylistCard from "./card";

export default function Playlist() {
  const username = localStorage.getItem("id");
  const token = localStorage.getItem("access_token");
  const [message, setErrorMessage] = useState("");

  const [data, setData] = useState();

  if (token === undefined) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.spotify.com/v1/users/${username}/playlists?limit=30`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error.message);
      }

      setData(result);
    };

    fetchData();
  }, [token, username]);

  if (!data) return <p></p>;

  return (
    <div className="w-[500px] border-r-2 border-black flex flex-col gap-3 p-4 overflow-y-auto h-[100dvh]">
      <h2 className="font-bold text-[30px]">Playlist</h2>
      <div className="grid gap-2">
        {data.length === 0
          ? null
          : data.items.map(({ images, id, name, type }) => (
              <PlaylistCard
                image={images[0].url}
                key={id}
                name={name}
                type={type}
              />
            ))}
      </div>
    </div>
  );
}
