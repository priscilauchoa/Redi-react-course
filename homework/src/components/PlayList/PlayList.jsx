/* eslint-disable react/prop-types */
import style from "./PlayList.module.css";
import { useState } from "react";
import Item from "../Item/Item";
import musicsList from "../../mocks/musics";
import SearchField from "../SearchField/SearchField";

const PlayList = () => {
  const [playList, setPlayList] = useState([]);
  const [musics, setMusics] = useState(musicsList);
  const [previousMusics, setPreviousMusics] = useState(musicsList);

  const handleAdd = (music) => {
    setPlayList([...playList, music]);
  };

  const handleRemove = (music) => {
    setPlayList((playList) => {
      return playList.filter((item) => item !== music);
    });
  };

  // Filter input value, if empty show all items if contains text filter
  const handleOnChange = (e) => {
    if (e.target.value === "") {
      console.log("event", e.target.value, "playList", previousMusics);
      setMusics(previousMusics);
    } else {
      setMusics((musics) => {
        return musics.filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
    }
  };

  const musicItem = musics.map((item) => {
    return (
      <>
        <Item
          imageMusic={item.image}
          handleAdd={handleAdd}
          nameMusic={item.name}
          isInPlaylist={playList.includes(item.name)}
          handleRemove={handleRemove}
          url={item.url}
        />
      </>
    );
  });

  const playListMaps = playList.map((item) => <li key={item}>{item}</li>);
  return (
    <div className="container">
      <SearchField handleOnChange={handleOnChange} />
      <h1>REDI React Playlist</h1>
      {playList.length > 0 && (
        <div className={style.final_playlist}>
          Your Playlist: {playListMaps}
        </div>
      )}
      <div className={style.playlist}>{musicItem}</div>
      {playList.length >= 3 && (
        <h3 className="bc-red">You unlock 10% discount 😀</h3>
      )}
    </div>
  );
};

export default PlayList;
