import React, { useEffect, useState } from "react";
import { TbMusic } from "react-icons/tb";
import Card from "./card";

export default function Music({ search }) {
  const token = localStorage.getItem("access_token");

  const [data, setData] = useState();

  const [songs, setSongs] = useState([]);

  console.log(songs);
  const addSongToBag = (e) => {
    setSongs(() => [...songs, e.currentTarget.value]);
  };

  const removedToBag = (e) => {
    songs.filter((songs) => songs.id !== e.target.value);
  };

  const [error, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${search}&type=track&limit=30`,
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
  }, [search, token]);

  if (!data) return;
  if (!token) return;

  return (
    <div className="w-full h-[100dvh] overflow-y-auto p-4 flex flex-col gap-3">
      <div className="w-full h-[80px] bg-white border-b-2 border-black flex p-2 items-center justify-end">
        <div className="w-[80px] bg-gray-500 p-2 flex items-center text-white justify-center rounded-full bg-white gap-2">
          <span className="text-[20px]">{songs.length}</span>
          <button>
            <TbMusic size={30} />
          </button>
        </div>
      </div>
      <h2 className="text-2xl">Tracks</h2>
      {error ? (
        <span>{error}</span>
      ) : (
        <div className="grid grid-cols-5 gap-2">
          {data.tracks.items.map(({ id, name, artists, album }) => (
            <Card
              key={id}
              songID={id}
              name={name}
              artist={artists}
              image={album.images[0].url}
              song={songs}
              addSongs={addSongToBag}
            />
          ))}
        </div>
      )}
    </div>
  );
}
