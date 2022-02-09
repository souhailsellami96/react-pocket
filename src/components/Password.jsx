import React from 'react';

export default function Password() {
  return <div className='profile__card'>
                <div className="profile__name">
                    <div className="profile__item">
                        <h4> New Password</h4>
                        <input type='text' ></input>
                    </div>
                    <div className="profile__item">
                        <h4> Confirm Password</h4>
                        <input type='text'></input>
                    </div>
                </div>
                
        </div>;
}
