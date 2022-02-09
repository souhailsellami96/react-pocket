import React from 'react';
import Navbar from './Navbar';

export default function Send(){
    const data =[
        {   
            title: 'Bitcoin',
            price: '40,000$',
            color:'red',

        },
        {
            title:'Ethreum',
            price:'2,600$',
            color:'green',
        },
        {
            title:'XRP',
            price:'100$',
            color:'red',
        },
        {   
            title: 'Aave',
            price: '25$',
            color:'green',
        },
        {
            title: 'Safemoon',
            price: '0.589$',
            color: 'green',
        },
        {
            title: 'Dodge',
            price: '0.039$',
            color:'red',
        },
    ]
    return <div className='app'>
        <Navbar />
        <div className="app__grid">

        <div className='app__grid__1' >
            <div className='market__info'>
            <div className='market__info__title' ><h4> Latest Prices </h4></div>
                <div className="market__info__container" >
                    <marquee   direction="left" scrollamount="3" behavior="scroll">    
                        <div className='market__info__list slideUp'>
                            {data.map((coin)=>{
                                return <div style={{color: coin.color}} >  {coin.title} : {coin.price}</div>
                            })}
                        </div>
                    </marquee>
                </div>

            </div>
                <div className="buy__container" >
                    <div><h3> BUY</h3></div>
                        <div className='buy__card'>
                            
                            <ul className='coin__list'>
                                    {
                                       data.map((choice)=>{
                                        return <button id='list' ><li>  {choice.title} </li></button>
                                   }) 
                                    }
                            </ul>
                            
                            <input  type='text' placeholder='Enter amount ...'></input>
                        </div>
                        <div className='buy__btn' > 
                            <button>
                                Submit
                            </button>
                            <button id='cancel'> 
                                Cancel
                            </button>
                        </div>
                </div> 
                <div className="buy__container" >
                    <div><h3> SELL</h3></div>
                        <div className='buy__card'>
                        <ul className='coin__list'>
                                    {
                                       data.map((choice)=>{
                                        return <button id='list' ><li>  {choice.title} </li></button>
                                   }) 
                                    }
                            </ul>
                            <input  type='text' placeholder='Enter amount ...'></input>
                        </div>
                        <div className='buy__btn' > 
                            <button>
                                Submit
                            </button>
                            <button id='cancel' > 
                                Cancel
                            </button>
                        </div>
                </div> 
            </div>
        <div className="app__grid__2" style={{backgroundColor:"blue"}}>
            
        </div>
        </div>
        </div>
}