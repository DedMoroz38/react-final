import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useState, useEffect } from 'react';
import { Button, Typography, TextField, TextareaAutosize } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/styles';
import CheckboxListSecondary from './chatArray.js';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 'none',
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: '34px',
  width: '130px',
  padding: '0 30px',
  marginBottom: '8px'
});
const MessageBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid rgb(196, 235, 247)',
  padding: '0 20px',
  boxSizing: 'border-box',
  borderRadius: '5px',
  width: '80%',
  marginBottom: '30px'
});
const AnswerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 20px',
  boxSizing: 'border-box',
  borderRadius: '5px',
  width: '80%',
  marginBottom: '10px'
});

const MessageList = () => {

  const [ListState, setListState] = useState([]);
  const [TextState, setTextState] = useState('');
  const [AuthorState, setAuthorState] = useState('');
  const [RobotReply, setRobotReply] = useState({});


  const textUpdate = (event) => {
    setTextState(event.target.value);
  }
  const authorUpdate = (event) => {
    setAuthorState(event.target.value);
  }

  const show = () => {
    const newList = [...ListState, { AuthorState, TextState }];
    setListState(newList);
    const RobotReply = { AuthorState: 'Robot', TextState: `Hi ${newList[newList.length - 1].AuthorState}!` };
    setRobotReply(RobotReply);
  }
  const focus = () => {
    let text = document.getElementById('input');
    text.focus();
    text.value = '';
  }
  useEffect(() => {
    if (!Object.keys(RobotReply).length == 0) {
      setTimeout(() => {
        const newList = [...ListState, RobotReply];
        setListState(newList);
      }, 1500)
    }
  }, [RobotReply]);



  return (
    <Box sx={{ Width: '100%', minHeight: '100%', backgroundColor: 'background.default' }}>
      <Box sx={{ display: 'flex' }}>
        <CheckboxListSecondary />
        <Box>
          <Box sx={{
            marginTop: '20px',
            justifyContent: 'start',
            margin: '0 auto',
            width: '600px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'background.default',
            minHeight: '500px',
            paddingBottom: '30px',
            marginBottom: '20px',
            border: '1px solid rgb(214, 212, 212)'
          }}>
            <MyApp />
            <Typography sx={{
              color: 'text.primary',
            }}
            >Bot</Typography>
            <MessageBox>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField onChange={authorUpdate} id="input-with-sx" label="Name" variant="standard" />
              </Box>
              <TextareaAutosize autoFocus
                aria-label="maximum height"
                placeholder="Сообщение..."
                onChange={textUpdate}
                style={{
                  height: '30px',
                  borderRadius: '4px',
                  border: '1px solid rgb(214, 212, 212)',
                  resize: 'none',
                  width: '400px',
                  outline: 'none',
                  marginTop: '10px'
                }}
                id='input'
              />
              <MyButton style={{
                marginLeft: '275px',
                marginTop: "5px"
              }}
                size='Large' onClick={() => {
                  show();
                  focus();
                }}
                variant="outlined" endIcon={<SendIcon />}>Отправить</MyButton>
            </MessageBox>
            {ListState.map((item) => (
              < AnswerBox>
                <Typography sx={{
                  color: 'rgb(80, 105, 204)',
                  fontSize: '11px',
                  fontWeight: '700',
                }}
                >{item.AuthorState}</Typography>
                <Typography sx={{
                  color: 'text.primary',
                  fontSize: '12px',
                  fontWeight: '300',
                }}
                >{item.TextState}</Typography>
              </AnswerBox>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>

  );
}

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        height: "0px",
        marginLeft: '490px',
        display: "flex",
        width: "50px",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3
      }}
    >
      {theme.palette.mode}
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

export default function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <MyApp /> */}
        <MessageList />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}