/* eslint-disable react/prop-types */
// import './PlayList.css'
import amy from "../../assets/amy.jpeg";
import tool from "../../assets/tool.jpeg";
import manchOrch from "../../assets/manchOrch.jpeg";
import { useState } from "react";
import YoutubePlayer from "../YouTubePlayer/YouTubePlayer";
import ButtonModule from "../Button/ButtonModule";

const PlayList = () => {
  const [playList, setPlayList] = useState([]);

  const handleAdd = (music) => {
    setPlayList([...playList, music]);
  };

  const handleRemove = (music) => {
    setPlayList((playList) => {
      return playList.filter((item) => item !== music);
    });
  };

  const musics = [
    {
      name: "Back to Black - Amy Winehouse",
      image: amy,
      url: "https://www.youtube.com/watch?v=TJAfLE39ZZ8",
    },
    {
      name: "Schism - too",
      image: tool,
      url: "https://www.youtube.com/watch?v=MM62wjLrgmA",
    },
    {
      name: "The Silence - Manchester Orchestra",
      image: manchOrch,
      url: "https://www.youtube.com/watch?v=8ui9umU0C2g",
    },
  ];

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
      <h1>REDI React Playlist</h1>
      {playList.length > 0 && (
        <div className="final_playlist">Your Playlist: {playListMaps}</div>
      )}
      <div className="playlist">{musicItem}</div>
      {playList.length >= 3 && (
        <h3 className="bc-red">You unlock 10% discount 😀</h3>
      )}
    </div>
  );
};

const Item = ({
  nameMusic,
  handleRemove,
  handleAdd,
  isInPlaylist,
  url,
}) => {
  return (
    <li className="playlist_li">
      {/* <img className="playlist-img" src={imageMusic} alt={nameMusic} /> */}
      <YoutubePlayer url={url} />

      <div>
        <h3>{nameMusic}</h3>
        {!isInPlaylist && (
          <ButtonModule isSelected={isInPlaylist} onClick={() => handleAdd(nameMusic)}>Add music</ButtonModule>
        )}
        {isInPlaylist && (
          <button className="bc-red" onClick={() => handleRemove(nameMusic)}>
            Remove music
          </button>
        )}
      </div>
    </li>
  );
};

export default PlayList;
