import React from 'react';
import {VscArrowSwap} from 'react-icons/vsc';
import{IoMdNotificationsOutline} from 'react-icons/io'
import{FaSearch} from 'react-icons/fa'
import{FiMail} from 'react-icons/fi'

export default function Navbar() {
  return <div className='navbar'>
    <div className="avatar">
      <div className="info">
        <h4 className='title'> Souhail Sellami</h4>
        <h6 className='status'> Online </h6>
      </div>
    </div>
    <div className="quick">
      <button>
        <VscArrowSwap />
        Quick Transactions
      </button>
    </div>
    <div className="navbar__info">
      <IoMdNotificationsOutline />
      <FiMail />
      <div className="search__bar">
        <input type='text' placeholder='Search ...'/>
        <FaSearch />
      </div>
    </div>
  </div>;
}
