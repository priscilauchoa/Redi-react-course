import '../RestaurantView//RestaurantView.css'
import spaghettiImage from "../../assets/spaghetti.jpg"
import lasagnaImage from "../../assets/lasagna.jpg"
import risottoImage from "../../assets/risotto.jpg"
// import OrderCard from "OrderCard.jsx"
import { useState } from 'react'

const RestaurantView = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('empty')
  const addToCart = (nameDish) => {
      setSelectedMenuItem(nameDish)
  }
  return (
    <div className="container">
      <h1>
        REDI React Restaurant 
      </h1>
      <div className="cart">
        Your Cart: {selectedMenuItem}
      </div>
      <div className="menu">
       <Item imageDish={spaghettiImage} onClick={addToCart} nameDish="Spagetti" />
       <Item imageDish={lasagnaImage} onClick={addToCart} nameDish="Lasanha"/>
       <Item imageDish={risottoImage} onClick={addToCart} nameDish="Risotto" />
      </div>
    </div>
  )
}

const Item = ({imageDish, nameDish, onClick}) => {

  return (
    <>
    <li className="menuItem">
          <h3>{nameDish}</h3>
          <img src={imageDish} alt={nameDish}/>
          <button onClick={()=>onClick(nameDish)}>Add To Cart</button>
    </li>
     
    </>
  )
}

export default RestaurantView
