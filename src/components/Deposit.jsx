import React from 'react';
import Navbar from './Navbar';

export default function Deposit(){
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
            <div className='market__info__title' ><h4> Deposit </h4></div>
            </div>
                <div className="buy__container" >
                    <div><h3> DEPOSIT</h3></div>
                       
                        <div className='buy__card'>
                            INCLUDE STRIPE PAYMENT HERE 
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
            </div>
        <div className="app__grid__2" style={{backgroundColor:"blue"}}>
            
        </div>
        </div>
        </div>
}