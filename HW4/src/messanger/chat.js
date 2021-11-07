import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useState, useRef } from 'react';
import { InputBase, Box } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/styles';
import { useParams, Redirect } from 'react-router-dom';
import Messageslist from './messagesList.js';


const MessageBox = styled(Box)({
    display: 'flex',
    height: '100px',
    backgroundColor: 'rgb(102, 236, 207)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
    width: '840px',
});


export default function Chats(props) {

    const [value, setValue] = useState(true);


    const { chatId } = useParams();
    const post = props.list.find((item) => item.id == chatId);


    const InputRef = useRef(null);
    // InputRef.current.value = '';
    // InputRef.current.focus();

    const textUpdate = (event) => {
        post.messageWord = event.target.value;
        console.log(post.messageWord);
    }

    const show = () => {
        if (post.messageWord.length != 0) {
            const elem = post.messageWord;
            console.log(elem);
            post.messageList = [...post.messageList, elem];
            setValue(!value);
            console.log(post.messageList);
            InputRef.current.value = '';
            InputRef.current.focus();
        }
        post.messageWord = '';
    }

    if (!post) {
        return <Redirect to="/chats" />;
    }



    return (
        <Box sx={{ width: '100%', marginLeft: '300px', position: 'relative' }}>
            <Box sx={{
                height: '70px', position: 'fixed',
                width: '840px', borderBottom: '1px solid rgb(214, 212, 212)',
                top: '70px', background: 'white',
                display: 'flex', alignItems: 'center',
                paddingLeft: '30px'
            }}>
                <h2>{post.name}</h2>
            </Box>
            <Messageslist messages={post.messageList} />


            <Box sx={{
                width: '100%',
                justifyContent: 'start',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                background: 'rgb(102, 236, 207)',
            }}>
                <MessageBox>
                    <Box>
                        <InputBase
                            autoFocus
                            inputRef={InputRef}
                            aria-label="maximum height"
                            placeholder="Сообщение..."
                            onChange={textUpdate}
                            style={{
                                height: '30px',
                                borderRadius: '30px',
                                border: '1px solid rgb(214, 212, 212)',
                                resize: 'none',
                                width: '400px',
                                outline: 'none',
                                marginTop: '10px',
                                paddingLeft: '8px',
                                backgroundColor: 'white'
                            }}

                        />

                        <IconButton
                            endicon={<SendIcon />}
                            type='submit'
                            size='Large' onClick={() => {
                                show();
                            }}
                        >
                            <SendIcon />
                        </IconButton>
                    </Box>
                </MessageBox>
            </Box>
        </Box>
    );
}