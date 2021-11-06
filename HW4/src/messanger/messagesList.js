import * as React from "react";
import { Typography, Box } from "@mui/material"
import { styled } from '@mui/styles';

const AnswerBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    marginBottom: '10px'
});

export default function Messageslist(props) {
    return (
        <Box sx={{ minHeight: '400px', paddingBottom: '100px', paddingTop: '150px', boxSizing: 'border-box' }}>
            {props.messages.map((item) => (
                < AnswerBox >
                    <Box sx={{
                        width: 'fit-content',
                        maxWidth: '300px',
                        minHeight: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgb(102, 236, 102)',
                        borderRadius: '4px',
                        padding: '0 10px'

                    }}>
                        <Typography
                            sx={{
                                color: 'text.primary',
                                fontSize: '14px',
                                fontWeight: '300',
                            }}
                        >{item}</Typography>
                    </Box>
                </AnswerBox>
            ))}
        </Box>
    )

}
