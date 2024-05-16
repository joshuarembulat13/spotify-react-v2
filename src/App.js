import "./App.css";
import Navigation from "./components/navigation/navigation";
import Playlist from "./components/playlist/playlist";
import Music from "./components/music/music";
import Title from "./components/navigation/title";
import Search from "./components/navigation/search";
import AuthButton from "./components/navigation/authButton";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("Day 1");

  const onHandleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-100vw">
      <Navigation>
        <Title name={"Minimal Music App"} />
        <div className="flex items-center gap-2">
          <Search value={search} onHandleChange={onHandleSearch} />
          <AuthButton />
        </div>
      </Navigation>
      <div className="w-full flex">
        <Playlist />
        <Music search={search} />
      </div>
    </div>
  );
}

export default App;
