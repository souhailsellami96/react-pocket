import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import netflixLogo from "../assests/netflix.png";
import airbnbLogo from "../assests/airbnb.png";
import amazonLogo from "../assests/amazon.png";
import googleLogo from "../assests/google.png";
import spotifiyLogo from "../assests/spotify.png";
import appleLogo from "../assests/apple.png";

export default function Expenses() {
  const data = [
    {
      logo: amazonLogo,
      name: "Amazon",
      price: "-$4K"
    },
    {
      logo: spotifiyLogo,
      name: "Spotify",
      price: "-$40"
    },
    {
      logo: airbnbLogo,
      name: "Airbnb",
      price: "-$1.2K"
    },
    {
      logo: appleLogo,
      name: "Apple",
      price: "-$12"
    },
    {
      logo: googleLogo,
      name: "Google",
      price: "-$205"
    },
    {
      logo: netflixLogo,
      name: "Netflix",
      price: "-$103"
    },

   ];
  return (
  <div className="expenses">
    <div className="expenses__info">
      <h4>Expenses</h4>
      <BsThreeDots />
    </div>
    <div className="expenses__container">
      {data.map((expense)=> {
        return (
        <div className="expense">
          <img src={expense.logo} alt="" />
          <h4 className="expense__tit1">{expense.name}</h4>
          <h6 className="expense__price">{expense.price}</h6>
        </div>
    )  
    })

      }
    </div>
  </div>);
}
