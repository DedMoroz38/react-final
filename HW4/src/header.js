import { React } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';


export default function Header() {
    const navigation = [
        {
            id: 0,
            path: '/chats',
            title: 'Мессенджер'
        },
        {
            id: 1,
            path: '/',
            title: 'Новости'
        },
        {
            id: 2,
            path: '/profile',
            title: 'Профиль'
        }
    ]
    return (
        <div>
            <div className='header'>
                {navigation.map((elem) => (
                    <NavLink
                        key={elem.id}
                        className='nav'
                        to={elem.path}>{elem.title}
                    </NavLink>
                ))}
            </div >
        </div>
    )
}