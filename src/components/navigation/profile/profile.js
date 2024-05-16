import React, { useEffect, useState } from "react";

export default function Profile({ token }) {
  const [profile, setProfile] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.spotify.com/v1/me`, {
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      });

      const resultl = await response.json();

      localStorage.setItem("id", resultl.id);
      setProfile(resultl);
    };

    fetchData();
  }, [token]);

  if (!profile) return <p>"No data"</p>;

  return (
    <div className="flex items-center justify-center gap-3 bg-gray-600  rounded-full overflow  w-[100px] h-[50px]">
      <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center overflow-hidden">
        <img
          src={profile.images[1].url}
          alt={profile.name}
          height={30}
          width={30}
        />
      </div>
      <span className="text-white">{profile.display_name}</span>
    </div>
  );
}
