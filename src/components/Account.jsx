import React, { useState } from 'react';
import Navbar from './Navbar';
import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import Help from './Help';
import Password from './Password';
import Policy from './Policy';

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
    const [isProfile,setProfile] = useState(true);
    const [isPassword,setPassword] = useState(false);
    const [isPolicy , setPolicy] = useState(false);
    const [isHelp,setHelp] = useState(false);
    function updateState(title){
        title === 'Profile' ? setProfile(true) : setProfile(false);
        title === 'Change Password' ? setPassword(true) : setPassword(false);
        title === 'Policy' ? setPolicy(true) : setPolicy(false); 
        title === 'Help' ? setHelp(true) : setHelp(false);
    };
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
                                                            <div className='account__card__item' >
                                                                <a onClick={()=> updateState(set.title)}>    
                                                                <set.icon /> 
                                                                {set.title}
                                                                </a>
                                                            </div>
                                                );
                                            })}
                                        </div>
                                </div>
                        </div>
                                    
                            <div className="account__container" >
                                    { isProfile ? <Profile/> : <div></div>}
                                    { isPassword ? <Password/> : <div></div>}
                                    { isPolicy ? <Policy/> : <div></div>}
                                    { isHelp ? <Help/> : <div></div>}
                                    <div className='profile__button'>
                                        <div className='profile__item'>
                                            <button> Submit </button>
                                        </div>
                                    </div>
                            </div> 
                        </div>
                    </div>
        <div className="app__grid__2" style={{backgroundColor:"blue"}}>
            
        </div>
        </div>
        </div>
}