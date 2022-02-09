import React from 'react';
import {BsThreeDots} from "react-icons/bs";
import wallet1 from "../assests/wallet1.png";
import wallet2 from "../assests/wallet2.png";

export default function Wallets() {
  const wallets = [
    {
      name : "BTC (Bitcoin)",
      balance: "2,310.98",
      USD: "165,818,612.87",
      image: wallet1
    },
    {
      name: "ETH (Ether)",
      balance: "7,521.32",
      USD: "40,851.289",
      image:wallet2
    },

  ];
  
  return <div className="wallets">
    <div className="wallets__info">
      <h4>Wallet</h4>
      <BsThreeDots />
    </div>
    <div className="wallets__container">
      {wallets.map((wallet) => {
        return ( 
          <div className="wallet">
            <img src={wallet.image} alt=""/>
            <div className="wallet__info">
              <h3 className="wallet__info__title">{wallet.name}</h3>
              <div className="wallet__info__balance">
                <h4>  Balance </h4>
                <h3> {wallet.balance}</h3>
              </div>
              <div className="wallet__info__price">
                <h4>  USD </h4>
                <h3> {wallet.USD}</h3>
              </div>
            </div>
          </div>
        )

      })}

    </div>
  </div>;
}
