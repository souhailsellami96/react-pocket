import React from 'react';
import Navbar from './Navbar';
import { MdAccountCircle } from 'react-icons/md';
import { Link, Routes } from 'react-router-dom';
import Profile from './Profile';
import { Route } from 'react-router-dom';
export default function Account(){
    const data =[
        {   
            title: 'Profile',
            icon:MdAccountCircle,
            to: 'profile',

        },
        {
            title:'Change Password',
            icon:MdAccountCircle,
            to: 'password',
        },
        {
            title:'Policy',
            icon:MdAccountCircle,
            to: 'policy',
        },
        {   
            title: 'Help',
            icon: MdAccountCircle,
            to:'help',      
        },
    ];
    [isProfile,setProfile]=useState(false);
    return <div className='app'>
        <Navbar />
        <div className="app__grid">

                <div className='app__grid__1' >
                    <div className='account__grid'>
                        <div className='account__info'>
                            
                                <div  >          
                                        <div className='account__card'>
                                            {data.map((set)=>{
                                                return   (   
                                                            <div className='account__card__item'>
                                                                <Link to={set.to} >    
                                                                <set.icon /> 
                                                                {set.title}
                                                                </Link> 
                                                            </div>
                                                );
                                            })}
                                        </div>
                                </div>
                        </div>
                                    
                            <div className="account__container" >
                                    {/* if statement using useState */}
                                    <Profile />
                            </div> 
                        </div>
                    </div>
        <div className="app__grid__2" style={{backgroundColor:"blue"}}>
            
        </div>
        </div>
        </div>
}