import React from 'react';
import {SiGoogleanalytics} from "react-icons/si";
import { BiRocket}  from "react-icons/bi";
import {FaWallet} from "react-icons/fa";
import {AiFillSetting , AiFillAppstore} from "react-icons/ai";
import {BsCashStack} from "react-icons/bs";
import {MdAccountCircle} from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const links = [
        {
            title: "Dashboard",
            icon:SiGoogleanalytics,
            to: '/dashboard',
        },
        {
            title: "Buy / Sell",
            icon:AiFillAppstore,
            to: '/buy',
        },
        {
            title: "Send Money",
            icon:BiRocket,
            to: '/sendmoney',
        },
        {
            title: "Deposit",
            icon:BsCashStack,
            to: '/deposit',
        },
        {
            title: "Transactions",
            icon:FaWallet,
            to: '/transactions_history',

        },
    ]
    const settings = [
        {
            title: "Account",
            icon:MdAccountCircle,
            to: '/account',
        },
        {
            title: "Settings",
            icon:AiFillSetting,
            to: '/settings',

        },
    ]
  return <div className='sidebar'>
      <div className="brand">

      </div>
      <ul className="links">
        {
            links.map((link)=>{
                return(
                    <li>
                        <Link to= {link.to} >
                            <link.icon />
                            {link.title}
                        </Link>
                    </li>
                )
            })
        }
      </ul>
      <ul className="settings">
        {
            settings.map((link)=>{
                return(
                    <li>
                        <Link to= {link.to} >
                            <link.icon />
                            {link.title}
                        </Link>
                    </li>
                )
            })
        }
      </ul>
  </div>;
}
