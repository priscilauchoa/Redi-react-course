/* eslint-disable react/prop-types */
import style from "../PlayList/PlayList.module.css";
import YoutubePlayer from "../YouTubePlayer/YouTubePlayer";
import ButtonModule from "../ButtonModule/ButtonModule";

const Item = ({ nameMusic, handleRemove, handleAdd, isInPlaylist, url }) => {
  return (
    <li className={style.playlist_li}>
      {/* <img className="playlist-img" src={imageMusic} alt={nameMusic} /> */}
      <YoutubePlayer url={url} />

      <div>
        <h3>{nameMusic}</h3>
        {!isInPlaylist && (
          <ButtonModule
            isSelected={isInPlaylist}
            onClick={() => handleAdd(nameMusic)}
          >
            Add music
          </ButtonModule>
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

export default Item;
