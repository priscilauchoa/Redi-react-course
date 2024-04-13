import { useState } from "react";

function Profile({message}){
    return(
<div className="bc-red container">
<a href="https://github.com/priscilauchoa">
          {" "}
          <img
            src="https://avatars.githubusercontent.com/u/22195904?v=4"
            className="logo"
            alt="Vite logo"
          />
        </a>
      <h1>Priscila Flores </h1>

        <p>Hello there! 👋</p>
        <p>🎉 This is the { message } of the Redi React Course 🎉</p>

        </div>
        
    )
}



export default Profile;