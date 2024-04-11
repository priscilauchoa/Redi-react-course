// import './PlayList.css'
// import OrderCard from "OrderCard.jsx"
import amy from "../../assets/amy.jpeg"
import tool from "../../assets/tool.jpeg"
import manchOrch from "../../assets/manchOrch.jpeg"
import { useState } from 'react'

const PlayList = () => {
  const [playList, setPlayList] = useState([])
  const addToPlayList = (music) => {
      setPlayList([...playList, music])
  }
  return (
    <>
      <h1>
        REDI React Playlist 
      </h1>
      <div className="plalist">
        Your Playlist: {playList}<br></br>
      </div>
      <div className="menu">
       <Item imageMusic={amy} onClick={addToPlayList} nameMusic="Back to Black - Amy Winehouse" />
       <Item imageMusic={tool} onClick={addToPlayList} nameMusic="Schism - tool"/>
       <Item imageMusic={manchOrch} onClick={addToPlayList} nameMusic="The Silence - Manchester Orchestra" />
      </div>
    </>
  )
}

const Item = ({imageMusic, nameMusic, onClick}) => {

  return (
    <>
    <li className="playlist">
          <img className="playlist-img" src={imageMusic} alt={nameMusic}/>
          <div>
          <h3>{nameMusic}</h3>
            <button onClick={()=>onClick(nameMusic)}>Add To Play List</button>
          </div>
    </li>
     
    </>
  )
}

export default PlayList
