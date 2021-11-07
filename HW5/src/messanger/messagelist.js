import * as React from "react";
import Box from "@mui/material/Box";
import { useState, useEffect } from 'react';
import { InputBase } from "@mui/material"
import CheckboxListSecondary from './chatArray.js';
import Header from "../header.js";
import Chats from './chat.js';
import { Route, Switch } from 'react-router-dom';


const AllMessages = [];


export default function MessageList() {

    const [ChatMessages, setChatMessages] = useState([]);
    const [newChatName, setNewChatName] = useState('');

    const ChatName = (event) => {
        setNewChatName(event.target.value);
    }

    const AddChat = () => {
        if (ChatMessages.length === 0 || newChatName.length == 0) {
            return
        } else {
            console.log(ChatMessages[ChatMessages.length - 1].id);
            const new_chat = {
                id: ChatMessages[ChatMessages.length - 1].id + 1,
                name: newChatName
            }
            console.log(new_chat);
            setChatMessages([...ChatMessages, new_chat])
        }
    }






    useEffect(() => {
        const chats = [
            {
                id: 0,
                name: 'Egor'
            },
            {
                id: 1,
                name: 'Shamil'
            },
            {
                id: 2,
                name: 'Anna'
            }
        ];
        setChatMessages(chats);
    }, []);



    for (let item of ChatMessages) {
        AllMessages.push({
            id: item.id,
            messageList: [],
            messageWord: '',
            name: item.name,
        })
    }

    return (
        <Box sx={{ Width: '100%', minHeight: '100%', backgroundColor: 'background.default' }}>
            <Header />
            <Box sx={{ display: 'flex', position: 'reletive' }}>
                <Box sx={{ position: 'fixed ', top: '70px', height: '100vh', width: '300px', borderRight: '1px solid rgb(216, 219, 219)' }}>
                    <Box sx={{
                        borderBottom: '1px solid rgb(214, 212, 212)',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        height: '70px',
                    }}>
                        <InputBase sx={{
                            border: '1px solid rgb(214, 212, 212)',
                            borderRadius: '15px',
                            paddingLeft: '10px',
                        }}
                            onChange={ChatName}
                            placeholder="Новый чат..."
                        />
                        <button className="addButton"
                            onClick={() => { AddChat() }}
                        >+</button>
                    </Box>
                    <CheckboxListSecondary list={ChatMessages} />
                </Box>
                <Switch>
                    <Route path='/chats/:chatId'>
                        <Chats list={AllMessages} />
                    </Route>
                </Switch>
            </Box>
        </Box>

    );
}