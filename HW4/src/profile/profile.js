import React from 'react';
import Header from '../header.js'
import store from './store.js';


export default function Profile() {
    // store.dispatch({
    //     showName: true,
    //     name: 'Egor'
    // })

    // console.log(store);

    return (
        <div>
            <Header />
            <h1 className='Profile-heading'>Profile</h1>
        </div>
    )
}