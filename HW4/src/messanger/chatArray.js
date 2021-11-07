import * as React from 'react';
import { ListItem, List, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Chat = ({ id, name }) => {
    return (
        <ListItem className='chat-link' component={NavLink} to={`/chats/${id}`}>
            <ListItemText>{name}</ListItemText>
        </ListItem >
    )
}

export default function CheckboxListSecondary({ list }) {
    return (
        <List sx={{ paddingTop: 0 }}>
            {list.map((item) => (
                <Chat key={item.id} id={item.id} name={item.name} />
            ))}
        </List >
    )
}

