import React from 'react';

export default function Profile() {
  return <div>
            <div className='profile__card' >
                <div className='profile__name'>
                    <div className='profile__item'>
                        <h4>First Name</h4>
                        <input type='text' placeholder='FirstName'></input>
                    </div>
                    <div className='profile__item'>
                        <h4>Last Name </h4>
                        <input type='text' placeholder='LastName'></input>
                    </div>
                </div>
                <div className='profile__name'>
                    <div className='profile__item'>
                        <h4> Username </h4>
                        <input type='text' placeholder='@username'></input>
                    </div>
                </div>
                <div className='profile__name'>
                    <div className='profile__item'>
                        <h4>E-mail</h4>
                        <input type='text' placeholder='example@gmail.com'></input>
                    </div>
                </div>
                <div className='profile__name'>
                    <div className='profile__item'>
                        <h4>ID</h4>
                        <input type='text' placeholder='Passport'></input>
                    </div>
                </div>
               
                

            </div>
        </div>;
}

